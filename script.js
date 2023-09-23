
var timer=60;
var score=0;
var hitrn ;



function bubbleMaker(){
var clutter= "";
for (var i=1; i<=207;i++){
     var rn = Math.floor(Math.random()*10)
 clutter  += `<div id="bubble">${rn}</div>`

 document.querySelector("#bcb").innerHTML = clutter;
}}
    
function runTimer()
{
var timerInt = setInterval(function(){
    if(timer>0){
    timer--;
    document.querySelector(".timerVal"). textContent = timer;}
    else{
           clearInterval(timerInt)
    }

},1000);   
}

function getNewhit(){
    hitrn = Math.floor(Math.random()*10);
   document.querySelector(".hitVal").textContent = hitrn;
}

function newScore(){
    score += 10;
    document.querySelector(".scoreVal"). textContent = score;
}

document.querySelector("#bcb")
.addEventListener("click", function (event){
 
 var clickednum = Number(event.target. textContent);
  if(clickednum === hitrn) {
        newScore();
        getNewhit();
        bubbleMaker();

    
        clickedBubble.innerHTML = "";

    }
  

      
})

runTimer();
bubbleMaker();
getNewhit ();



