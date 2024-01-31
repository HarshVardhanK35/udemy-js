// Solution - 1

function reverseString(str){
  let arr = str.split('');
  let reversedArr = [];
  for(let i = str.length - 1; i >= 0; i--){
    reversedArr.push(arr[i]);
  }
  return reversedArr.join('');
}

// const res = reverseString('hello')
// console.log(res);

module.exports = reverseString;