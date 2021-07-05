'use strict';

{ // innerText return only text inside HTML
  const innerText = document.querySelector('.innerHtml');
  const innerTextAfter = innerText.querySelector('.after');
  let innerTextContent = innerText.innerText;

  innerTextContent = '<h1>innerText: <span style="color: yellow;">word</span></h1>';
  innerTextAfter.innerText = innerTextContent;
}


{ // outerText delete parentNode and return only text inside HTML
  const outerText = document.querySelector('.outerHtml');
  const outerTextAfter = outerText.querySelector('.after');
  let outerTextContent = outerText.outerText;

  outerTextContent = '<h1>outerText: <span style="color: yellow;">word</span></h1>';
  outerTextAfter.outerText = outerTextContent;
}


{ // textContent return only text inside HTML
  const textContent = document.querySelector('.textContent');
  const textContentAfter = textContent.querySelector('.after');
  let textContentContent = textContent.textContent;

  textContentContent = '<h1>textContent: <span style="color: yellow;">word</span></h1>';
  textContentAfter.textContent = textContentContent;
}