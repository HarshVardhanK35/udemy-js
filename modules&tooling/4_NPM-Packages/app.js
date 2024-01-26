const axios = require('axios');

async function getPost(){
  const res = await axios.get('https://jsonplaceholder.typicode.com/users/1');
  const data = res.data;
  console.log(data);
}

getPost()