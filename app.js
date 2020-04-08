var password = document.getElementById('password');
var confirm = document.getElementById('confirm-password');
var btn = document.getElementById('submit')
var container = document.getElementById('btn-parent');
var show = document.getElementById('show-msg')

confirm.addEventListener('keyup', check);


var showMsg = document.createElement('h3');
showMsg.id = 'show-msg';

var correctMsg = 'Password match';
var wrongMsg = 'Password does not match'


function check(e){
   var text = e.target.value.toLowerCase();

   var pass = password.value;

   if(text == pass){
    show.style.color='green';
    show.style.border = 'solid 1px green'
    show.textContent = correctMsg;
   }else{
      show.style.color = 'red';
      show.style.border = 'solid 1px red'
      show.textContent = wrongMsg;
   }
}


