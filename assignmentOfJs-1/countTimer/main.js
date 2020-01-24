//#############countDown timer
var theInput = document.getElementById('cd');
theInput.addEventListener('keyup', checkInput);

function checkInput(){
    if(theInput.value !== ''){
        document.getElementById('r1').removeAttribute('disabled', false)
        document.getElementById('r2').removeAttribute('disabled', false)
     }else{ 
         document.getElementById('r1').setAttribute('disabled', true)
         document.getElementById('r2').setAttribute('disabled', true)
        }
}


const cntbtn1 = document.createElement("button");
cntbtn1.id= 'r1';
cntbtn1.className = "btn btn-primary";
cntbtn1.innerText ="Ascending";
cntbtn1.setAttribute('disabled', true);
document.getElementById("countbtn").appendChild(cntbtn1);
cntbtn1.addEventListener("click", myFunc);
cntbtn1.addEventListener("click", myFunc);



function myFunc() {
  var enterInput = parseInt(document.getElementById("cd").value);
  var init_time = 0;
  var ascending = setInterval(function() {
    document.getElementById("countdown").innerHTML = init_time;
    init_time ++;
    if (init_time > enterInput) {
      clearInterval(ascending);
    }
  }, 1000);
}

const cntbtn2 = document.createElement("button");
cntbtn2.className = "btn btn-primary ml-2";
cntbtn2.innerText = "Descending";
cntbtn2.id= 'r2';
cntbtn2.setAttribute('disabled', true);
document.getElementById("countbtn").appendChild(cntbtn2);
cntbtn2.addEventListener("click", myFunc2);

function myFunc2() {
  var enterInput = parseInt(document.getElementById("cd").value);
  var init_time = enterInput;
  var descending = setInterval(function() {
    document.getElementById("countdown").innerHTML = init_time;
    init_time --;
    if (init_time < 0) {
      clearInterval(descending);
    }
  }, 1000);
}
