import ProductControllers from "./src/controllers/product.controllers.js";
import UserControllers from "./src/controllers/user.controllers.js";

const products = new ProductControllers();
const user = new UserControllers();

// const user = new

// console.log(await products.getAllProducts());

// console.log(await products.getProductsById("10"));

// console.log(
//   await products.addNewProduct({
//     title: "iPhone 10",
//     description: "An apple mobile which is nothing like apple",
//     price: 549,
//   })
// );

// console.log(await products.deleteProduct(3));

// console.log(
//   await products.updateProduct(
//     10,
//     {
//       title: "iPhone 14",
//       description: "An apple mobile which is nothing like apple",
//       price: 2500,
//     },
//     "PATCH"
//   )
// );

// console.log(
//   await user.loginUser({
//     username: "atuny0",
//     password: "9uQFF1Lh",
//   })
// );

// console.log(await products.searchProduct({ search: "card" }));

// console.log(
//   await products.filterSelectProducts({ limit: 10, select: "title" })
// );

// console.log(await products.getCategoryProducts({ category: "smartphones" }));
