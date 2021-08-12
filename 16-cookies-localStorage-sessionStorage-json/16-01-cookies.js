/*
  Cookies are small strings of data that are stored directly in the browser (one cookie only 4 kb.)
  One of the most widespread use cases is authentication.

  1. Upon sign in, the server uses the Set-Cookie HTTP-header in the response to set a cookie with a unique “session identifier”.
  2. Next time when the request is sent to the same domain, the browser sends the cookie over the net using the Cookie HTTP-header.
  3. So the server knows who made the request.
*/

// access cookies from the browser
// The value of document.cookie consists of key=value pairs, delimited by ;

// 'name=John' add cookie with key: name and value: 'John' separated by =
document.cookie = 'name=John';            // 'name=John'

// show all cookies
document.cookie;                          // 'color=green; name=John'

// update cookie with key 'name'
document.cookie = 'name=Alex';            // 'color=green; name=Alex'

// add multiple parameters to cookies. Each parameter separated by ;
document.cookie = 'color=green; max-age=6; path=/;';
/*
  path=/                                  make the cookie accessible from all website pages
  path=/admin and /admin/something        cookies visible at pages /admin and /admin/something, not at /home or /adminpage
  domain=site.com                         by default, a cookie is accessible only at the domain that set it

  max-age=3600                            specifies the cookie’s expiration in seconds from the current moment
  expires=Tue, 19 Jan 2038 03:14:07 GMT   the cookie expiration date defines the time, when the browser will automatically delete it

  samesite                                designed to protect from so-called XSRF (cross-site request forgery) attacks
  secure                                  cookie should be transferred only over HTTPS
  httpOnly                                cookies can using only by HTTP requests, can't get using JS
*/


// encodeURIComponent - the method for coding string to component which will be using in the url
// decodeURIComponent - the method for reading string

// coding
console.log('Hello world');                       // 'Hello world'
console.log(encodeURIComponent('Hello world'));   // 'Hello%20world'

console.log('Привіт світ');                       // 'Привіт світ'
console.log(encodeURIComponent('Привіт світ'));   // '%D0%9F%D1%80%D0%B8%D0%B2%D1%96%D1%82%20%D1%81%D0%B2%D1%96%D1%82'

console.log('10=20;value=123?&;test=1;');         // '10=20;value=123?&;test=1;'
console.log(encodeURIComponent('10=20;value=123?&;test=1;')); // '10%3D20%3Bvalue%3D123%3F%26%3Btest%3D1%3B'

// decoding
console.log(decodeURIComponent('10%3D20%3Bvalue%3D123%3F%26%3Btest%3D1%3B')); // '10=20;value=123?&;test=1;'

// example
document.cookie = 'login=' + encodeURIComponent('super user');
document.cookie;                                  // 'name=Alex; color=green; login=super%20user'