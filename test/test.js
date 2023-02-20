import validateUsername from '../src/valid';

describe('validateUsername', () => {
  test('returns true for valid username', () => {
    expect(validateUsername('user_123')).toBe(true);
  });

  test('returns false for username with too few characters', () => {
    expect(validateUsername('us')).toBe(false);
  });

  test('returns false for username with too many characters', () => {
    expect(validateUsername('username1234567890')).toBe(false);
  });

  test('returns false for username containing non-alphanumeric characters', () => {
    expect(validateUsername('user#name')).toBe(false);
  });

  test('returns false for username containing consecutive digits', () => {
    expect(validateUsername('user1234name')).toBe(false);
  });

  test('returns false for username containing four digits in a row', () => {
    expect(validateUsername('user1234')).toBe(false);
  });
});
