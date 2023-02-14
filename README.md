# Product Shop Library

- [General info](#general-info)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Methods](#methods)

## General info

This project is Product Shop Library fot Node.JS.
Our online shopping is a form of electronic commerce which allows consumers to directly buy goods or services from a seller over the internet using a web API.

## Technologies

Project is created with:

- NodeJS: 18.13.0

## Installation

To run this project, install it locally using npm:

### npm:

```
npm install product-shop --save
```

## Usage

### Authentication - login user

```javascript
import UserControllers from from "product-shop";
const user = new UserControllers();

 const userData = await user.loginUser({
    username: "atuny0",
    password: "9uQFF1Lh",
  })
```

`userData` is a list of `actual data about user`.

```javascript
{
  id: 1,
  username: 'atuny0',
  email: 'atuny0@sohu.com',
  firstName: 'Terry',
  lastName: 'Medhurst',
  gender: 'male',
  image: 'https://robohash.org/hicveldicta.png',
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhdHVueTAiLCJlbWFpbCI6ImF0dW55MEBzb2h1LmNvbSIsImZpcnN0TmFtZSI6IlRlcnJ5IiwibGFzdE5hbWUiOiJNZWRodXJzdCIsImdlbmRlciI6Im1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vcm9ib2hhc2gub3JnL2hpY3ZlbGRpY3RhLnBuZyIsImlhdCI6MTY3NjM5MjQzMSwiZXhwIjoxNjc2Mzk2MDMxfQ.7G8gpA_KRw0zBN6mLe0pLVFArn4ud2FGo8Z0cMQhOyY'
}

```

### Initialization - create controller instanse

```javascript
import ProductControllers from "product-shop";
const products = new ProductControllers();
```

## Methods

### Get all products

```javascript
const allProducts = await products.getAllProducts();
```

`allProducts` is a list of `actual products in the shop`.

```javascript
{
  products: [
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      images: [Array],
    },
    {
      id: 2,
      title: "iPhone X",
      description:
        "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      images: [Array],
    },
  ];
}
```

### Get product by id

- Parameters:
  `id` - string

```javascript
const product = await products.getProductsById(id);
```

`product` is an object of with data.

```javascript
{
  id: 10,
  title: 'HP Pavilion 15-DK1056WM',
  description: 'HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10',
  price: 1099,
  discountPercentage: 6.18,
  rating: 4.43,
  stock: 89,
  brand: 'HP Pavilion',
  category: 'laptops',
  thumbnail: 'https://i.dummyjson.com/data/products/10/thumbnail.jpeg',
  images: [
    'https://i.dummyjson.com/data/products/10/1.jpg',
    'https://i.dummyjson.com/data/products/10/2.jpg',
    'https://i.dummyjson.com/data/products/10/3.jpg',
    'https://i.dummyjson.com/data/products/10/thumbnail.jpeg'
  ]
}

```
