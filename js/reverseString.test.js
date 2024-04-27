import reverseString from './reverseString';

it('reverses a string', () => {
    expect(reverseString('chickadee')).toMatch(/eedakcihc/);
    expect(reverseString('racecar')).toMatch(/racecar/);
    expect(reverseString('12345')).toMatch(/54321/);
});

it('returns an empty string given an empty string', () => {
    expect(reverseString('')).toMatch('');
});
