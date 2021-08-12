// get template from html
const template = document.querySelector('template');

// note: only after template cloning we can add templateCloneCopy to the html
// create deep clone of the template
const deepTemplateClone = template.content.cloneNode(true);

// insert template clone to the html layout
document.body.prepend(deepTemplateClone);