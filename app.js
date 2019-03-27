let btn = document.querySelector('.btn');
let greeting = document.getElementById('greeting');
let countdown = document.getElementById('countdown');
let param = document.getElementById('param');
let result = document.getElementById('result');
let count = 0;
let btnSize = 100;

function increment() {
  growButton();
  count++;
  console.log(count);
}

function deincrement() {
  count--;
  console.log(count);
}

function reloadPage() {
  location.reload();
}

function growButton() {
  btnSize += 50;
  btn.setAttribute('style', `height:${btnSize}px; width:${btnSize}px;`);
}

function countSwitchBox(count) {
  switch(count) {
    case 2:
      console.log('5 works');
      greeting.innerHTML = 'Come on man';
      break;
    case 3:
      console.log('8 works');
      greeting.innerHTML = 'COME ON DUDE, STOP';
      //deincrement();
      break;
    case 4:
      greeting.innerHTML = 'FINE';
      countdown.innerHTML = '3';
      break;
    case 5:
      countdown.innerHTML = '2';
      break;
    case 6:
      countdown.innerHTML = '1';
      break;
    case 7:
      countdown.innerHTML = 'BYE';
      setTimeout(reloadPage, 1000);
      break;
  }
}

btn.addEventListener('click', () => {
  console.log(`${param.value}, I told you don't`);
  result.innerHTML = `"${param.value}", what is that supposed to mean?  Who cares..`;
  increment();
  countSwitchBox(count);
});