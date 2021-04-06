'use strict';

{
  console.log('Request data...');

  // create new Promice(resolve = ok, reject = error)
  const req = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Preparing data...');

      // init data
      const product = {
        name: 'TV',
        price: 2000
      };

      // return resolve function with data
      resolve(product);
    }, 2000);
  });

  // use resolve function from req Promice
  req
    .then(product => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          product.status = 'order';
          resolve(product);
        }, 2000);
      });
    })
    .then(data => {
      data.modify = true;
      return data;
    })
    .then(data => {
      console.log('Output data: ', data)
    })
    .catch(() => {
      console.error('Data error!!!');
    })
    .finally(() => {
			// executing after all .then() or .catch()
      console.log('Finally...');
    });
}


{
  const test = time => {
    return new Promise(resolve => {
      setTimeout(() => resolve(), time);
    });
  };

  // test(1000).then(() => console.log('1000 ms'));
  // test(2000).then(() => console.log('2000 ms'));

  // Promise.all([function1(), function2()]) execute all Promises
  Promise
    .all([test(3000), test(5000)])
    .then(() => console.log('Executed all Promises!'));

  // Promise.race([function1(), function2()]) execute first faster Promises
  Promise
    .race([test(300), test(10000)])
    .then(() => console.log('Executed first fasted Promise!'));
}