import Field from "./field";
import { Link } from "react-router-dom";
import ReactSelect from "react-select/creatable";
import { selectStyles } from "../../utils/constants";
import { useState } from "react";

const Form = ({ mutate, isPending, recipeData }) => {
  const [ingredients, setIngredients] = useState(recipeData?.ingredients || []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const recipeData = Object.fromEntries(formData.entries());

    recipeData.ingredients = ingredients;

    recipeData.instructions = recipeData.instructions.split(",");

    mutate(recipeData);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
      <Field label="Tarif Adı">
        <input
          className="input"
          name="name"
          placeholder="Örn: Mercimek Çorbası"
          required
          defaultValue={recipeData?.name}
        />
      </Field>

      <Field label="Kategori">
        <input
          className="input"
          name="category"
          placeholder="Örn: Çorba, Ana Yemek, Tatlı"
          required
          defaultValue={recipeData?.category}
        />
      </Field>

      <Field label="Ülke">
        <input
          className="input"
          name="country"
          placeholder="Örn: Türkiye"
          required
          defaultValue={recipeData?.country}
        />
      </Field>

      <Field label="Hazırlama Süresi (dakika)">
        <input
          className="input"
          name="time"
          placeholder="Örn: 30, 45, 60"
          type="number"
          min={1}
          max={999}
          required
          defaultValue={recipeData?.time}
        />
      </Field>

      <Field label="Malzemeler">
        <ReactSelect
          isMulti
          styles={selectStyles}
          placeholder="Malzeme yazıp enter'a basın..."
          value={ingredients.map((i) => ({ label: i, value: i }))}
          onChange={(options) => setIngredients(options.map((i) => i.value))}
          required
        />
      </Field>

      <Field label="Tarif Adımları (virgül ile ayırın)">
        <textarea
          className="input min-h-20"
          name="instructions"
          placeholder="Her adımı virgül ile ayırarak yazın"
          required
          defaultValue={recipeData?.instructions}
        />
      </Field>

      <Field label="Sunum Önerisi (isteğe bağlı)">
        <textarea
          className="input min-h-20"
          name="serving"
          placeholder="Servis için önerilileriniz"
          defaultValue={recipeData?.serving}
        />
      </Field>

      <div className="flex justify-end gap-4 mt-4">
        <Link to="/" className="btn bg-stone-100 text-stone-700">
          İptal
        </Link>

        <button disabled={isPending} className="btn" type="submit">
          Kaydet
        </button>
      </div>
    </form>
  );
};

export default Form;
