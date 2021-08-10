'use strict';

{
  // create regular Expression

  // v1
  // const regexp = new RegExp('pattern', 'flags');

  // v2
  // const regExp = /'pattern'/flags;
}

{
  // regExp shortland character sets
  // \d - [0-9]           digits 01234
  // \w - [a-zA-Z0-9_]    characters
  // \s - [ \s\t\n]       space ' '

  // regExp antiClasses
  // \D - [^0-9]          not digits
  // \W - [^a-zA-Z0-9_]   not characters
  // \S - [^ \s\t\n]      not space ' '

  // flags types
  // i - lowercase, uppercase
  // g - multiple enters
  // m - multiple lines
  // s - include match newline character \n

  // quantifiers: +, *, ? {n}
  // *                    match zero or more times
  // +                    match one or more times
  // ?                    match zero or one time
  // {n}                  match exactly n times
  // {n,m}                match from n to m times

  // /[a-zA-Z]/g          include special characters in search /[a-z]at/g
  // /[^sh]/g           - exclude from search this characters /[^sh]at/g
  // /a{3}/g            - a must repeat 3 times
  // /a{1,4}/g          - a must repeat from 1 to 4 times
  // /a*/g              - only {1}
  // /a?/g              - from {0,1}
  // /a+/g              - from {1,} to infinite
  // /foo(bar|boo)/g    - return foobar OR fooboo
  // /(\d{3})(\d{3})/g  - create pockets $1 $2

  // /./ - any character in 'string'
  // /\./ - '.'
}

{
  const name = 'Immutable';
  const reg = /m/ig;

  // search method
  console.log(name.search(reg)); // return first 'true' element
  console.log(name.match(reg)); // return all 'true' elements

  // replase method
  console.log(name.replace(/./g, "*"));
  console.log('12-00-34'.replace(/-/g, ':'));


  // string regExp methods
  st.search(pattern);                         // find and show current index or return -1
  st.match(pattern);                          // not working with g flag
  st.replace(pattern, 'string_to_change');    // find and replace to new-string
  st.split(pattern);                          // split String to sub-string by regExp pattern

  // pattern methods
  pattern.exec(st);
  pattern.test(st);
}