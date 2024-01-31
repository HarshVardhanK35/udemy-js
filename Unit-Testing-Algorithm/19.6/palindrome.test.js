const palindrome = require('./palindrome')

describe('palindrome', ()=> {
  it('should be a function', ()=> {
    expect(typeof palindrome).toEqual('function')
  })
  it('should return true, if the string is palindrome', ()=> {
    expect(palindrome('wow')).toBeTruthy()
    expect(palindrome('rotator')).toBeTruthy()
  })
  it('should return false, if string is not palindrome', ()=> {
    expect(palindrome('hello')).toBeFalsy()
    expect(palindrome('world')).toBeFalsy()
  })
  it('should return false, if string includes spaces', ()=> {
    expect(palindrome(' hello')).toBeFalsy()
  })
})