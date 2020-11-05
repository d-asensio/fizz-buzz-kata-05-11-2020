const getNumberFizzBuzzKata = require('./fizz-buzz-kata')

describe('when the number is divisible by 3 and 5', () => {
  it('15 should return "FizzBuzz"', () => {
    expect(getNumberFizzBuzzKata(15)).toBe("FizzBuzz");
  })
  
  it('30 should return "FizzBuzz"', () => {
    expect(getNumberFizzBuzzKata(30)).toBe("FizzBuzz");
  })
})

describe('when the number is divisible by 3 ', () => {
  it('3 should return "Fizz"', () => {
    expect(getNumberFizzBuzzKata(3)).toBe("Fizz");
  })

  it('6 should return "Fizz"', () => {
    expect(getNumberFizzBuzzKata(6)).toBe("Fizz");
  })
})

describe('when the number is divisible by 5', () => {
  it('5 should return "Buzz"', () => {
    expect(getNumberFizzBuzzKata(5)).toBe("Buzz");
  })

  it('10 should return "Buzz"', () => {
    expect(getNumberFizzBuzzKata(10)).toBe("Buzz");
  })
})

describe('else', () => {
  it('1 should return "1"', () => {
    expect(getNumberFizzBuzzKata(1)).toBe("1");
  })
})
