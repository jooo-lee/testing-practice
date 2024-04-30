import analyzeArray from './analyzeArray';

it('returns object with average of array', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty('average', 4);
});

it('returns object with min of array', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty('min', 1);
});

it('returns object with max of array', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty('max', 8);
});

it('returns object with length of array', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty('length', 6);
});
