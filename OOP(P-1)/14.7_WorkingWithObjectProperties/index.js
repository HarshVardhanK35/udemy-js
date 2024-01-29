function Rectangle(name, width, height){
  this.name = name;
  this.width = width;
  this.height = height;

  this.area = function(){
    return (this.width * this.height);
  }
}


const rec1 = new Rectangle('react1', 20, 30);
const rec2 = new Rectangle('rect2', 20, 30);

// access props ------------------------------------
// 1. dot notation
// 2. Square bracket notation
console.log(rec1.name);
console.log(rec1[height]);

// add new props ------------------------------------
rec1.color = 'black'

// add a function ------------------------------------
rec1.perimeter = () => {
  return(2 * (rec1.width + rec1.height));
}

// delete a prop ------------------------------------
delete rec1.perimeter

// Object - get keys ------------------------------------
console.log(Object.keys(rec2));

// Object - get values ------------------------------------
console.log(Object.values(rec2));

// Object - get entries ------------------------------------
console.log(Object.entries(rec2)) // ---> To get an Array of keys and values

// 1. loop through the result array ------------------------------------
for(let[keys, values] of Object.entries(rec1)){
  if(typeof values !== 'function'){
    console.log(`${keys}: ${values}`)
  }
}