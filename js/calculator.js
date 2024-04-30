/**
 * A calculator object contains functions for the basic operations of add,
 * subtract, divide and multiply. Each of these functions should take two
 * numbers and return the correct calculation.
 */
const createCalculator = () => {
    const add = (x, y) => x + y;
    const subtract = (x, y) => x - y;
    const divide = (x, y) => x / y;
    const multiply = (x, y) => x * y;
    return { add, subtract, divide, multiply };
};

export default createCalculator;
