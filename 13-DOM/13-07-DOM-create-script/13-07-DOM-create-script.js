'use strict';

function createScript(src) {
  const script = document.createElement('script');

  script.src = src;
  script.async = false;
  document.body.append(script);

  console.log(`main.js: Creating ${src}`);
}

createScript('test.js');