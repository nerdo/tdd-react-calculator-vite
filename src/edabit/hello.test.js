function hello() {
  return 'hello edabit.com'
}

describe('how edabit works - hello()', () => {
  it('should return "hello edabit.com"', () => {
    expect(hello()).toBe('hello edabit.com');
  })
})