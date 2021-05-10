'use strict';

{
  // init async function
  const getResourse = async (url) => {

    // wait response from fetch
    const res = await fetch(url);

    // handle Error if somthing wrong
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`)
    }

    // wait data after fetch
    const data = await res.json();

    // return result
    return data;
  };

  getResourse('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => console.log('Success: ', res))
    .catch(error => console.log('Error: ', error));
}

{
  // use async before function
  async function showAvatar() {

    // use await inside Promise (read data from right to left)
    let response = await fetch('/article/promise-chaining/user.json');
    let user = await response.json();

    return user;
  }

  showAvatar();
}