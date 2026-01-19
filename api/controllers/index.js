import { readData, isValid, writeData, filterBody } from "../utils/helpers.js";
import crypto from "crypto";

const data = readData();

const getAllRecipes = (req, res) => {
  let recipes = [...data];

  const search = req.query?.search?.toLowerCase();

  if (search) {
    recipes = data.filter((i) => i.name.toLowerCase().includes(search));
  }

  if (req.query.order) {
    recipes.sort((a, b) =>
      req.query.order === "asc" ? a.time - b.time : b.time - a.time
    );
  }

  res.json({
    message: "Bütün tarifler listelendi",
    results: recipes.length,
    data: recipes,
  });
};

const getOneRecipe = (req, res) => {
  const found = data.find((i) => i.id === req.params.id);

  if (!found) {
    return res.status(404).json({ message: "Aradığını tarif bulunamadı" });
  }

  res.json({ message: "Tarif bulundu", data: found });
};

const createRecipe = (req, res) => {
  const filtredBody = filterBody(req.body);

  if (!isValid(filtredBody)) {
    return res.status(400).json({ message: "Gönderdiğiniz veri eksik" });
  }

  const newRecipe = {
    ...filtredBody,
    id: crypto.randomUUID(), //
    image: `https://picsum.photos/seed/${crypto.randomUUID()}/500/500`,
  };

  data.push(newRecipe);

  writeData(data);

  res.status(201).json({ message: "Tarif oluşturuldu", data: newRecipe });
};

const updateRecipe = (req, res) => {
  const found = data.find((i) => i.id === req.params.id);

  if (!found) {
    return res
      .status(404)
      .json({ message: "Güncellemek istediğiniz tarif bulunamadı" });
  }

  const filtredBody = filterBody(req.body);

  if (!isValid(filtredBody)) {
    return res.status(400).json({ message: "Tarif verini eksik gönderdiniz" });
  }

  const index = data.findIndex((i) => i.id === req.params.id);

  data.splice(index, 1, { ...found, ...filtredBody });

  writeData(data);

  res.json({
    message: "Tarif güncellendi",
    data: { ...found, ...filtredBody },
  });
};

const deleteRecipe = (req, res) => {
  const found = data.find((i) => i.id === req.params.id);

  if (!found)
    return res
      .status(404)
      .json({ message: "Silmek istediğiniz tarif bulunamadı" });

  const index = data.findIndex((i) => i.id === req.params.id);

  data.splice(index, 1);

  writeData(data);

  res.json({ message: "Tarif kaldırıldı" });
};

export {
  getAllRecipes,
  getOneRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe,
};
