// HTML forms and form elements


// get forms

/*
  <form name="pizza">
    <input name="one" value="1">
    <input name="two" value="2">
  </form >
*/

document.forms;                         // returns HTMLCollection with all forms in html file HTMLCollection(4) [form, form, form#formId, form#loginForm, pizza: form, radioBtns: form, formId: form#formId, loginForm: form#loginForm]
document.forms[0];                      // returns first form from html document <form name="pizza">
document.forms.pizza;                   // returns form with name="pizza" <form name="pizza">


// get form elements
document.forms[0].elements                // returns HTMLFormControlsCollection(2) [input, input, one: input, two: input]
document.forms.pizza.elements.one;        // returns <input name="one" value="1">
document.forms.pizza.elements.one.value;  // returns input value <input name="one" value="1">

/*
  <form name="radioBtns">
    <input type="radio" name="age" value="10">
    <input type="radio" name="age" value="20">
  </form >
*/

document.forms[1].elements.age;           // returns RadioNodeList(2) [input, input, value: ""] by name="age"
document.forms[1].elements.age[0];        // returns <input type="radio" name="age" value="10">


// <fieldset name="userFields"> as SUBFORM

/*
  <form id="formId">
    <fieldset name="userFields">
      <legend>info</legend>
      <input name="login" type="text">
    </fieldset>
  </form>
*/

formId.elements;                          // return HTMLFormControlsCollection(2) [fieldset, input, userFields: fieldset, login: input]
formId.userFields.elements;               // return HTMLCollection [input, login: input] Fieldsets as "subforms"
formId.elements.login == formId.userFields.elements.login; // return true

formId.login;                             // return <input name="login" type="text">
formId.elements.login;                    // return <input name="login" type="text">
formId.userFields.elements.login;         // return <input name="login" type="text">


// Backreference: form.elements.name.form === form
// each form element has reference to itseft form

/*
  <form id="loginForm">
    <input type="text" name="login">
  </form>
*/

// form.elements.name.form === form
loginForm.login.form === loginForm;       // true


// VALUES IN INPUTS
/* <input type="text" value="New value"> */
// input.value = "New value";

/* <textarea cols="30" rows="10"></textarea> */
// textarea.value = "New text";

/* <input type="checkbox" checked value=""> */
// input.checked = true;                  // for a checkbox or radio button


// SELECT FORM ELEMENT

/*
//<select id="selectId" multiple>
  <select id="selectId">
    <option value="apple">Apple</option>
    <option value="pear">Pear</option>
    <option value="banana" selected>Banana</option>
  </select>
*/

// all three lines do the same thing
selectId.options[2].selected = true;
selectId.selectedIndex = 2;
selectId.value = 'banana';

// new Option for <select>
// const option = new Option(text, value, defaultSelected, selected);
