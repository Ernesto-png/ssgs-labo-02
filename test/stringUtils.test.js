const op = require('../src/stringUtils');

test('reverseString', () => {
    expect(op.reverseString('ciao')).toBe('oaic');
});

test('isPalindrome', () => {
    expect(op.isPalindrome('Amo Roma')).toBe(true);
});

test('truncateString', () => {
    expect(op.truncateString('ciao', 2)).toBe('ci...');
});

test('truncateString does not truncate if string is short enough', () => {
    expect(op.truncateString('ciao', 4)).toBe('ciao');
    expect(op.truncateString('hi', 5)).toBe('hi');
});

test('countCharacters', () => {
    expect(op.countCharacters('ciao')).toEqual({ c: 1, i: 1, a: 1, o: 1 });
});