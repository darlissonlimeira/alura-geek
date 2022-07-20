import { categoryService, productService } from "../../server/main.js";

const groupProducts = (categories, products) => {
  const groupedProducts = categories.map((cat) => {
    const catProd = products.filter((prod) => prod.category === cat.name);
    const catData = {
      name: cat.name,
      products: catProd,
    };

    return catData;
  });

  return groupedProducts;
};

const mockData = ({ sellers, categories, products }) => {
  const tables = {
    sellers,
    categories,
    products,
  };
  localStorage.setItem("DRKTECK_DB", JSON.stringify(tables));
};

const fetchDataJSON = async () => {
  const { categories, products, sellers } = await fetch(
    "../../database.json"
  ).then((res) => res.json());

  mockData({ categories, products, sellers });
};

!localStorage.getItem("DRKTECK_DB") && fetchDataJSON();

// fetchDataJSON();

const fetchData = () => {
  const products = productService.findAll();
  const categories = categoryService.findAll();

  return groupProducts(categories, products);
};

export { fetchData };
