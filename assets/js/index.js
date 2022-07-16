import { templateCategory } from "./templates/category-template.js";
import { fetchData } from "./fetch-json.js";

const mainEl = document.querySelector("#main");

const createCategoriesHTML = (categories) => {
  const categoriesHTML = categories
    .map((cat) => {
      if (!cat.products.length) return;
      return templateCategory(cat.name, cat.products);
    })
    .join("");

  return categoriesHTML;
};

const renderCategories = () => {
  const result = fetchData();
  const categoriesHTML = createCategoriesHTML(result);

  mainEl.innerHTML = categoriesHTML;
};

renderCategories();
