import hello from './hello'

describe('how edabit works - hello()', () => {
  it('should return "hello edabit.com"', () => {
    expect(hello()).toBe('hello edabit.com');
  })
})