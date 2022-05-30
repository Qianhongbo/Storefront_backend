import { Product, ProductStore } from '../../models/product';

const store = new ProductStore()

describe("Product Model", () => {
  it('should have an index method', () => {
    expect(store.index).toBeDefined();
  });

  it('should have a show method', () => {
    expect(store.show).toBeDefined();
  });

  it('should have a create method', () => {
    expect(store.create).toBeDefined();
  });

  it('should have a delete method', () => {
    expect(store.delete).toBeDefined();
  });

  it('create method should add a product', async () => {
    const result = await store.create({
      name: 'iphone',
      price: 1000,
      category: 'phone'
    });
    expect(result.name).toEqual('iphone');
    expect(result.price).toEqual(1000);
    expect(result.category).toEqual('phone');
  });

  it('index method should return a list of products', async () => {
    const result = await store.index();
    expect(result[0].name).toEqual('iphone');
    expect(result[0].price).toEqual(1000);
    expect(result[0].category).toEqual('phone');
  });

  it('show method should return the correct product', async () => {
    const result = await store.show("1");
    expect(result.id).toEqual(1);
    expect(result.name).toEqual('iphone');
    expect(result.price).toEqual(1000);
    expect(result.category).toEqual('phone');
  });

  it('delete method should remove the product', async () => {
    store.delete("1");
    const result = await store.index()

    expect(result).toEqual([]);
  });
});