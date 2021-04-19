'use strict';

const innerHtml = document.querySelector('.innerHtml');
const outerHtml = document.querySelector('.outerHtml');
const textContent = document.querySelector('.textContent');

const innerHtmlAfter = innerHtml.querySelector('.after');
const outerHtmlAfter = outerHtml.querySelector('.after');
const textContentAfter = textContent.querySelector('.after');

let innerHTMLcontent = innerHtml.innerHTML;           // return full inner html layout
let outerHTMLContent = outerHtml.outerHTML;           // return full html layout element <h1>...</h1>
let textContentContent = textContent.textContent;     // return only text

innerHTMLcontent = '<h1>innerHTML: <span style="color: yellow;">word</span></h1>';
outerHTMLContent = '<h1>outerHTML: <span style="color: yellow;">word</span></h1>';
textContentContent = '<h1>textContent: <span style="color: yellow;">word</span></h1>';

innerHtmlAfter.innerHTML = innerHTMLcontent;
outerHtmlAfter.outerHTML = outerHTMLContent;
textContentAfter.textContent = textContentContent;