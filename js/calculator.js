/**
 * A calculator object contains functions for the basic operations of adding,
 * subtracting, dividing and multiplying. Each of these functions takes two
 * numbers and returns the correct calculation.
 */
const createCalculator = () => {
    const add = (x, y) => x + y;
    const subtract = (x, y) => x - y;
    const divide = (x, y) => x / y;
    const multiply = (x, y) => x * y;
    return { add, subtract, divide, multiply };
};

export default createCalculator;
