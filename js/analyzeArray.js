const getAverage = (array) => {
    return array.reduce((prev, curr) => prev + curr, 0) / array.length;
};

const getMin = (array) => {
    return array.reduce((prev, curr) => Math.min(prev, curr));
};

const getMax = (array) => {
    return array.reduce((prev, curr) => Math.max(prev, curr));
};

/**
 * Takes an array of numbers and returns an object with the properties:
 * average, min, max and length.
 */
const analyzeArray = (array) => {
    return {
        average: getAverage(array),
        min: getMin(array),
        max: getMax(array),
        length: array.length,
    };
};

export default analyzeArray;
