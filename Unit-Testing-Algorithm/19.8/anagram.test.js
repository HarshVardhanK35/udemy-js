const anagram = require('./anagram');

describe('anagram', ()=> {
  it('should be a function', ()=> {
    expect(typeof anagram).toEqual('function')
  })
  it('should return a boolean', ()=> {
    expect(typeof anagram('ram')).toEqual('boolean')
  })
  it('should return true if it is anagram', ()=> {
    expect(anagram('ram', 'arm')).toBeTruthy()
    expect(anagram('cinema', 'iceman')).toBeTruthy()
    expect(anagram('god', 'dog')).toBeTruthy()
  })
  it('should return false if it is not anagram', ()=> {
    expect(anagram('hello', 'fellow')).toBeFalsy()
    expect(anagram('cost', 'lost')).toBeFalsy()
  })
})