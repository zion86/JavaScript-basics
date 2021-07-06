'use strict';

const btn = document.querySelector('#submit-btn');

{ // DOM NODE is a simple Object. DOM object has element properties

  // create new property in <button> element
  btn.btnName = {
    text: 'Submit form',
  }

  // create method in <button> element
  btn.showBtnName = function () {
    console.log(this.btnName);
  }
  btn.showBtnName();

  // read standart HTML attribute
  btn.tagName;                                    // 'BUTTON'

  // update <button> textContent
  btn.textContent = btn.btnName.text;
}


{ // DOM object element attributes: standart, custom

  // attributes always is: 'String data type'
  btn.setAttribute('custom-attr', 'some value');  // create new attribute in DOM object element
  btn.hasAttribute('secured');                    // returns true or false, check if DOM object element attribute exists
  btn.getAttribute('secured');                    // get attribute value from DOM object element
  btn.removeAttribute('data-user-info');          // remove attribute from htmlElem
  btn.attributes;                                 // returns NamedNodeMap collection with list data attributes { name: value }
  // NamedNodeMap {0: type, 1: id, 2: style, 3: secured, 4: data-order-state, 5: custom-attr, type: type, id: id, style: style, secured: secured, data-order-state: data-order-state, …}
}


{ // DOM object element dataset attributes, non-standart attributes === user attributer

  btn.dataset.orderState = 'pendind';             // create new data-* attribute 'pending'
  btn.dataset.userInfo = "30 years";              // change existing data-* attributes
  btn.dataset;                                    // returns DOMStringMap Object with data-attributes { name: value }
  // DOMStringMap {userInfo: "30 years", orderState: "pendind"}
}