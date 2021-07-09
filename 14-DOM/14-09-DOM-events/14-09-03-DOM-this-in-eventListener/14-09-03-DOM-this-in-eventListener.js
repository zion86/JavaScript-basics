const btns = document.querySelectorAll('button');
const output = document.querySelector('.output');

function handlerBtnClick() {
  const btnText = this.textContent;
  output.textContent = btnText;
}

btns.forEach(btn => {
  btn.addEventListener('click', handlerBtnClick);

  /*
    code inside comment is equal with code above
    
    btn.addEventListener('click', () => {
      const btnText = btn.textContent;
      output.textContent = btnText;
    });
  */
});