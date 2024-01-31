const assert = require('assert');
const chunk = require('./arraychunk');

describe('Array Chunking', ()=>{
  it('should create chunks of a given array', ()=> {
    assert.deepEqual(chunk([1,2,3,4], 2), [[1,2], [3,4]])
  })
})