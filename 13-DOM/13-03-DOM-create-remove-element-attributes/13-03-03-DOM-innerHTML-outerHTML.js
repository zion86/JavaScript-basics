'use strict';

const innerHtml = document.querySelector('.innerHtml');
const outerHtml = document.querySelector('.outerHtml');

const innerHtmlAfter = innerHtml.querySelector('.after');
const outerHtmlAfter = outerHtml.querySelector('.after');

let innerHTMLcontent = innerHtml.innerHTML;           // return full inner html layout
let outerHTMLContent = outerHtml.outerHTML;           // return full html layout element <h1>...</h1>

innerHTMLcontent = '<h1>innerHTML: <span style="color: yellow;">word</span></h1>';
outerHTMLContent = '<h1>outerHTML: <span style="color: yellow;">word</span></h1>';

innerHtmlAfter.innerHTML = innerHTMLcontent;
outerHtmlAfter.outerHTML = outerHTMLContent;