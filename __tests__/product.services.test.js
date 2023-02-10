const BaseModel = require("../src/models/BaseModel");
const ProductServices = require("../src/services/product.services");
const ApiError = require("../src/errors/errorHandler");

describe("testISProductServices", () => {
  test("Shoud_Remove_Product", async () => {
    jest.spyOn(BaseModel.prototype, "delete").mockReturnValueOnce({ id: 1 });

    const result = await ProductServices.prototype.deleteProduct(1);

    expect(result.id).toBe(1);
  });

  test("Shoud_ThrowError_When_Remove_Product", async () => {
    jest.spyOn(BaseModel.prototype, "delete").mockReturnValueOnce(null);

    try {
      async () => await ProductServices.prototype.deleteProduct(1);
    } catch (error) {
      expect(error).toThrow(ApiError);
    }
  });

  test("Shoud_Create_Product", async () => {
    const product = {
      title: "iPhone 10",
      description: "An apple mobile which is nothing like apple",
      price: 549,
    };

    jest.spyOn(BaseModel.prototype, "create").mockReturnValueOnce(product);

    const result = await ProductServices.prototype.addNewProduct(product);

    expect(result).toStrictEqual(product);
  });

  test("Shoud_ThrowError_When_Create_Product", async () => {
    const product = {
      title: "iPhone 10",
      description: "An apple mobile which is nothing like apple",
      price: 549,
    };

    jest.spyOn(BaseModel.prototype, "create").mockReturnValueOnce(null);

    try {
      async () => await ProductServices.prototype.addNewProduct(product);
    } catch (error) {
      expect(error).toThrow(ApiError);
    }
  });

  test("Shoud_Update_Product", async () => {
    const product = {
      title: "iPhone 14",
      description: "An apple mobile which is nothing like apple",
      price: 2000,
    };

    jest.spyOn(BaseModel.prototype, "update").mockReturnValueOnce(product);

    const result = await ProductServices.prototype.updateProduct(10, product);

    expect(result).toStrictEqual(product);
  });

  test("Shoud_ThrowError_When_Update_Product", async () => {
    const product = {
      title: "iPhone 14",
      description: "An apple mobile which is nothing like apple",
      price: 2000,
    };

    jest.spyOn(BaseModel.prototype, "update").mockReturnValueOnce(null);

    try {
      async () => await ProductServices.prototype.updateProduct(15, product);
    } catch (error) {
      expect(error).toThrow(ApiError);
    }
  });
});
