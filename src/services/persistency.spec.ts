import { Persistency } from "./persistency";

describe('Persistency', () => {
  // After each of the tests it cleans
  afterEach(() => jest.clearAllMocks());

  it('should return undefined', () => {
    // System Under Test - SUT
    const sut = new Persistency();
    expect(sut.saveOrder()).toBeUndefined();
  });

  it('should call console.log once', () => {
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');

    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('should call console.log with Order(s) saved successfully!...', () => {
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');

    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledWith('Order(s) saved successfully!...');
  });
});
