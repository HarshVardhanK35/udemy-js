const getElementsByTag = require('./getelementsbytag');

describe('Get Elements By Tag', ()=> {
  it('should return function', ()=> {
    expect(typeof getElementsByTag).toEqual('function')
  })

  it('should return an array', ()=> {
    expect(Array.isArray(getElementsByTag())).toEqual(true)
  })

  it('should return an empty array if no root is passed in', ()=> {
    expect(getElementsByTag()).toEqual([])
  })

  it('should return array of root element if no tagName is passed in', ()=> {
    const root = document.createElement('div')
    expect(getElementsByTag(root)).toEqual([root])
  })

  it('should return correct elements', ()=> {
    const root = document.createElement('div')

    const p1 = document.createElement('p')
    const p2 = document.createElement('p');
    const span = document.createElement('span');

    root.appendChild(p1);
    root.appendChild(span);
    span.appendChild(p2);

    expect(getElementsByTag(root, 'p')).toEqual([p1, p2])
  })
})