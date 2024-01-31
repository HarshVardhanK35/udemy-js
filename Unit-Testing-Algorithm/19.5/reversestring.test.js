const reverseString = require('./reversestring');

describe('Reverse String', ()=>{
  it('should be a function', ()=> {
    expect(typeof reverseString).toEqual('function')
  })
  it('should be a string', ()=> {
    expect(typeof reverseString('hello')).toEqual('string')
  })
  it('should be a reversed string', ()=> {
    expect(reverseString('wow')).toEqual('wow')
    expect(reverseString('hello')).toEqual('olleh')
    expect(reverseString('hello world')).toEqual('dlrow olleh')
  })
})