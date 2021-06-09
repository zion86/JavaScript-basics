'use strict';

const btn = document.querySelector('#submit-btn');

{ // DOM object element properties

  // create new property in <button> element
  btn.btnName = {
    text: 'Submit form',
  }

  // create function in <button> element
  btn.showBtnName = function () {
    console.log(this.btnName);
  }
  btn.showBtnName();

  // update <button> textContent
  btn.textContent = btn.btnName.text;
}

{ // DOM object element dataset attributes, non-standart attributes === user attributer

  btn.dataset.orderState = 'pendind';             // create new data-* attribute 'pending'
  btn.dataset.userInfo = "30 years";              // change existing data-* attributes
  btn.dataset;                                    // return DOMStringMap Object with data- attributes { name: value }
}

{ // DOM object element attributes: standart, custom

  btn.setAttribute('custom-attr', 'some value');  // create new attribute in DOM object element
  btn.hasAttribute('secured');                    // return true or false, check if DOM object element attribute exists
  btn.getAttribute('secured');                    // get attribute value from DOM object element
  btn.removeAttribute('data-user-info');          // remove attribute from htmlElem
  btn.attributes;                                 // return NamedNodeMap collection with list data attributes { name: value }
}