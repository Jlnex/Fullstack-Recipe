import fs from "fs";

const readData = () => {
  try {
    const jsonData = fs.readFileSync("./data/db.json", "utf-8");

    const jsData = JSON.parse(jsonData);

    return jsData;
  } catch (error) {
    console.log(error);
  }
};

const writeData = (data) => {
  try {
    fs.writeFileSync("./data/db.json", JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};

const requiredFields = [
  "name",
  "category",
  "ingredients",
  "time",
  "instructions",
  "country",
];

const isValid = (body) => {
  return requiredFields.every((field) => body[field]);
};

const filterBody = (body) => {
  return Object.fromEntries(
    Object.entries(body).filter(([key]) => requiredFields.includes(key))
  );
};

export { readData, writeData, isValid, filterBody };
