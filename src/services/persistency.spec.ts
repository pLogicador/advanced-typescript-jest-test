describe('Testing something #1', () => {
  it('should return one', () => {
    const number = 1;
    expect(number).toBe(1);
  });
});

describe('Testing something #2', () => {
  test('should return Lana', () => {
    const name = 'Lana';
    expect(name).toBe('Lana');
  });
});
