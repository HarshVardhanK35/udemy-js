const fizzBuzz = require('./fizzbuzz')

describe('fizzBuzz', ()=> {
  it('should be a function', ()=> {
    expect(typeof fizzBuzz).toEqual('function')
  })

  it('should return the same number if it is not divisible with 3 and 5', ()=> {
    expect(fizzBuzz(1)).toEqual(1)
    expect(fizzBuzz(13)).toEqual(13)
    expect(fizzBuzz(17)).toEqual(17)
  })

  it('Result should be a Fizz if number divisible with 3', ()=> {
    expect(fizzBuzz(3)).toEqual('Fizz')
    expect(fizzBuzz(6)).toEqual('Fizz')
    expect(fizzBuzz(9)).toEqual('Fizz')
  })

  it('Result should be a Buzz if number divisible with 5', ()=> {
    expect(fizzBuzz(5)).toEqual('Buzz')
    expect(fizzBuzz(10)).toEqual('Buzz')
    expect(fizzBuzz(20)).toEqual('Buzz')
  })

  it('Result should be a FizzBuzz if number divisible with both 3 and 5', ()=> {
    expect(fizzBuzz(15)).toEqual('FizzBuzz')
    expect(fizzBuzz(30)).toEqual('FizzBuzz')
    expect(fizzBuzz(45)).toEqual('FizzBuzz')
  })
})