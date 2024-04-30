import caesarCipher from './caesarCipher';

it('encrypts correctly with shift factor', () => {
    expect(caesarCipher('hamburger', 3)).toMatch(/kdpexujhu/);
    expect(caesarCipher('git', 0)).toMatch(/git/);
    expect(caesarCipher('wee', 30)).toMatch(/aii/);
});

it('wraps correctly from z to a', () => {
    expect(caesarCipher('fuzzy', 5)).toMatch(/kzeed/);
});

it('preserves case', () => {
    expect(caesarCipher('PascalCase', 4)).toMatch(/TewgepGewi/);
    expect(caesarCipher('AAA', 2)).toMatch(/CCC/);
});

it('preserves punctuation', () => {
    expect(caesarCipher('hello!', 7)).toMatch(/olssv!/);
    expect(caesarCipher('ok.', 10)).toMatch(/yu./);
});

it('preserves whitespace', () => {
    expect(caesarCipher('long time no see', 2)).toMatch(/nqpi vkog pq ugg/);
});
