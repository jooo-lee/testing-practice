import createCalculator from './calculator';

const myCalculator = createCalculator();

it('adds two numbers', () => {
    expect(myCalculator.add(3, 4)).toBe(7);
    expect(myCalculator.add(0.1, 0.2)).toBeCloseTo(0.3);
});

it('subtracts two numbers', () => {
    expect(myCalculator.subtract(10, 6)).toBe(4);
});

it('divides two numbers', () => {
    expect(myCalculator.divide(15, 3)).toBe(5);
});

it('multiplies two numbers', () => {
    expect(myCalculator.multiply(2, 10)).toBe(20);
});
