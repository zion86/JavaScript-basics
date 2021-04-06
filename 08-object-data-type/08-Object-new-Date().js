'use strict';

{
  // create Date variable
  const now = new Date();

  // read current date and time
  console.log('now: ', now); // now:  2020-12-25T21:01:07.681Z

  // get Date
  console.log(now.getFullYear(), now.getMonth(), now.getDate()); // 2020 11 25
  console.log(now.getHours(), now.getMinutes(), now.getSeconds()); // 23 24 22
  console.log(now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds()); // 21 26 17

  // get TimeZone
  console.log(now.getTimezoneOffset()); // -120 different in TimeZone in minutes
  console.log(now.getTime()); // 1608931885093 miliseconds from 1970-01-01T00:00:00.000Z

  // input 'year-month-date'
  const date1 = new Date('2000-01-1');
  // === Date.parse('2000-01-1') Date.parse(new Date());
  console.log('date1: ', date1); // date1:  1999-12-31T22:00:00.000Z

  const date2 = new Date(2000, 1, 1);
  console.log('date2: ', date2); // date2:  2000-01-31T22:00:00.000Z

  // start count Date in javaScript
  const date3 = new Date(0);
  console.log('date3: ', date3); // date3:  1970-01-01T00:00:00.000Z

  // get Date lower then 1970
  const date4 = new Date(-1);
  console.log('date4: ', date4); // date4:  1969-12-31T23:59:59.999Z
}

{
  // set Date, time
  const setDate = new Date('2020-12-25');
  console.log('setDate: ', setDate.setHours(10));
}

{
  // create benchmark (timestamp)
  const start = new Date().getTime();
  console.log('start: ', start);

  for (let i = 0; i < 100000; i++) {
    let result = i ** 3;
  }

  const end = new Date().getTime();
  console.log('end: ', end);

  console.log(`Loop worked ${end - start} miliseconds`);
}