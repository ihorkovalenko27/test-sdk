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

### Get all

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

### Get by id

- Parameters:
  `id` - string

```javascript
const product = await products.getProductsById(id);
```

`product` is an object with data.

```javascript
{
  id: 10,
  title: 'HP Pavilion 15-DK1056WM',
  description: 'HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10',
  price: 1099,
  //...
}

```

### Add new item

- Parameters:
  `body` - object with fields:
  {
  `id`: 10, - string
  `title`: 'HP Pavilion 15-DK1056WM', - string
  `description`: 'HP Pavilion 15-DK1056WM Gaming Laptop 10th', - string
  `price`: 1099, - number
  // ...
  }

```javascript
const newProduct = await products.addNewProduct(body);
```

`newProduct` is an object with data.

```javascript
{
  id: 10,
  title: 'HP Pavilion 15-DK1056WM',
  description: 'HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen',
  price: 1099,
  // ...
}

```

### Delete by id

- Parameters:
  `id` - string

```javascript
const product = await products.deleteProduct(id);
```

`product` is an object with data of deleted item.

```javascript
{
  id: 10,
  title: 'HP Pavilion 15-DK1056WM',
  description: 'HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen',
  price: 1099,
  isDeleted: true,
  // ...
}

```

### Update

- Parameters:
  `body` - object with fields:
  {
  `id`: 15, - string
  `title`: 'Lenovo 15-DK1056WM', - string
  `description`: 'Lenovo 15-DK1056WM Gaming Laptop 10th', - string
  `price`: 2000, - number
  // ...
  }

```javascript
const updateProduct = await products.updateProduct(body);
```

`updateProduct` is an object with data of updated item.

```javascript
{
  `id`: 15, - string
  `title`: 'Lenovo 15-DK1056WM', - string
  `description`: 'Lenovo 15-DK1056WM Gaming Laptop 10th', - string
  `price`: 2000, - number
  // ...
  }

```

### Search

- Parameters:
  `query` - object with field:
  { `search`: "car" - string }

```javascript
const searchProduct = await products.searchProduct(query);
```

`searchProduct` is an object with data of search query.

```javascript
{
  products: [
    {
      id: 22,
      title: "Elbow Macaroni - 400 gm",
      description: "Product details of Bake Parlor Big Elbow Macaroni - 400 gm",
      price: 14,
      discountPercentage: 15.58,
      rating: 4.57,
      stock: 146,
      brand: "Bake Parlor Big",
      category: "groceries",
      thumbnail: "https://i.dummyjson.com/data/products/22/thumbnail.jpg",
      images: [Array],
    },
    //...
  ];
}
```

### Filter

- Parameters:
  `data` - object with field:
  { `limit`: 5, `select`: "title" }

```javascript
const response = await products.filterSelectProducts(request);
```

`response` is an object with data of filter request.

```javascript
{
  products: [
    { id: 1, title: 'iPhone 9' },
    { id: 2, title: 'iPhone X' },
    { id: 3, title: 'Samsung Universe 9' },
    { id: 4, title: 'OPPOF19' },
    { id: 5, title: 'Huawei P30' },
  ],
  total: 100,
  skip: 0,
  limit: 10
}

```

### Get category

- Parameters:
  `category` - object with field:
  { `category`: "smartphones" }

```javascript
const responce = await products.getCategoryProducts(category);
```

`responce` is an object with data of category.

```javascript
{
  products: [
    {
      id: 1,
      title: 'iPhone 9',
      description: 'An apple mobile which is nothing like apple',
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: 'Apple',
      category: 'smartphones',
      thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
      images: [Array]
    },
    {
      id: 2,
      title: 'iPhone X',
      description: 'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: 'Apple',
      category: 'smartphones',
      thumbnail: 'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
      images: [Array]
    },
    //...
  ]
}


```
