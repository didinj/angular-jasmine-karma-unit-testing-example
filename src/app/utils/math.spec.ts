import { multiply } from './math';

describe('multiply utility', () => {
  it('should return the correct product of two numbers', () => {
    expect(multiply(2, 3)).toBe(6);
  });

  it('should return 0 if one factor is 0', () => {
    expect(multiply(0, 10)).toBe(0);
  });

  it('should handle negative numbers', () => {
    expect(multiply(-2, 4)).toBe(-8);
  });
});
