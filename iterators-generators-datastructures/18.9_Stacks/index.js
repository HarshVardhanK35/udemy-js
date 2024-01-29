class Stack {
  constructor() {
    this._items = [];
    this._count = 0;
  }

  push(item) {
    this._items[this._count] = item;
    this._count = this._count + 1;
  }

  pop() {
    if (this._count === 0) {
      console.log("Undefined");
      return;
    }

    const item = this._items[this._count - 1];
    this._count = this._count - 1;

    console.log(this._count);

    for(let i = this._count; i < this._items.length; i++){
      this._items[i] = this._items[i + 1];
    }
    this._items.length = this._count;
    return(item)
  }
}

const stack = new Stack();

stack.push("item 1");
stack.push("item 2");
stack.push("item 3");

stack.pop();

console.log(stack);
