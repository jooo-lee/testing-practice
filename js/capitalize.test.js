import capitalize from './capitalize';

it('capitalizes first character of string', () => {
    expect(capitalize('hello world!')).toMatch(/Hello world!/);
    expect(capitalize('stormtrooper')).toMatch(/Stormtrooper/);
    expect(capitalize('a bottle of water')).toMatch(/A bottle of water/);
});

it('returns empty string when given empty string', () => {
    expect(capitalize('')).toMatch('');
});

it('works with numbers and special characters', () => {
    expect(capitalize('&&&')).toMatch(/&&&/);
    expect(capitalize('401')).toMatch(/401/);
});
