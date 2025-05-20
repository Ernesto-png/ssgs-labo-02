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