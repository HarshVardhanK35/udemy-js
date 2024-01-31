function palindrome(str){
  let strArr = str.split('');
  let reversedArr = [];

  for(let i = strArr.length - 1; i >= 0; i--){
    reversedArr.push(strArr[i])
  }
  return reversedArr.join('') === str
}

// const res = palindrome('wow');
// console.log(res)

module.exports = palindrome