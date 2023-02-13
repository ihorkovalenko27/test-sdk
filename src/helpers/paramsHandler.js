export const paramsHandler = async ({ limit, select, search, category }) => {
  if (limit && select) {
    const resLimit = await fetch(
      `https://dummyjson.com/products?limit=${limit}&select=${select}`
    );
    return await resLimit.json();
  }
  if (search) {
    const resSearch = await fetch(
      `https://dummyjson.com/products/search?q=${search}`
    );
    return await resSearch.json();
  }
  if (category) {
    const resCategory = await fetch(
      `https://dummyjson.com/products//category/${category}`
    );
    return await resCategory.json();
  }
};
