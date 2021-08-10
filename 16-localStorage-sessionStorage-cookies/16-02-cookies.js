/*
  Cookies are small strings of data that are stored directly in the browser (one cookie only 4 kb.)
  One of the most widespread use cases is authentication.

  1. Upon sign in, the server uses the Set-Cookie HTTP-header in the response to set a cookie with a unique “session identifier”.
  2. Next time when the request is sent to the same domain, the browser sends the cookie over the net using the Cookie HTTP-header.
  3. So the server knows who made the request.
*/

// access cookies from the browser
// The value of document.cookie consists of name=value pairs, delimited by ;

// 'name=John' add cookie with key: name and value: 'John' separated by =
document.cookie = 'name=John';

// show all cookies
document.cookie;

// update cookie with key 'name'
document.cookie = 'name=Alex';

// add multiple parameters to cookies. Each parameter separated by ;
document.cookie = 'color=green; max-age=3600; path=/;';
/*
  path=/                                  make the cookie accessible from all website pages

  expires=Tue, 19 Jan 2038 03:14:07 GMT   the cookie expiration date defines the time, when the browser will automatically delete it
  max-age=3600                            specifies the cookie’s expiration in seconds from the current moment

  samesite                                designed to protect from so-called XSRF (cross-site request forgery) attacks
  secure                                  cookie should be transferred only over HTTPS
  httpOnly                                cookies can using only by HTTP requests, can't get using JS
*/