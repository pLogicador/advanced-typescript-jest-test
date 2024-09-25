import { Product } from "./product";

const createSut = (name: string, price: number): Product => {
  return new Product(name, price);
};

describe('Product', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have properties name and price', () => {
    const sut = createSut('Short', 45.90);
    expect(sut).toHaveProperty('name', 'Short');
    //expect(sut).toHaveProperty('price', 45.90);
    expect(sut.price).toBeCloseTo(45.90);
  });
});
