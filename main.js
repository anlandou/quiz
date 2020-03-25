var container1 = document.getElementById("container1"); 
var container2 = document.getElementById("container2"); 
var container3 = document.getElementById("container3");
var container4 = document.getElementById("container4"); 

var wrong = document.getElementById("firstfooter"); 
var correct = document.getElementById("secondfooter"); 

  
function function1(){
    correct.style.display = "block";
    container1.style.display = "none";
    container2.style.display = "block"; 
    wrong.style.display = "none";
    var scoreIs = document.getElementById("score").innerHTML = "Your Score: 1/4 " 
}

function function2(){
    correct.style.display = "block";
    container2.style.display = "none";
    container3.style.display = "block"; 
    wrong.style.display = "none"; 
    var scoreIs = document.getElementById("score").innerHTML = "Your Score: 2/4" 
    
} 

function function3(){
    correct.style.display = "block";
    container3.style.display = "none";
    container4.style.display = "block"; 
    wrong.style.display = "none"; 
    var scoreIs = document.getElementById("score").innerHTML = "Your Score: 3/4" 
} 
function function4(){
    correct.style.display = "block";
    wrong.style.display = "none";
    var scoreIs = document.getElementById("score").innerHTML = "Your Score: 4/4 <br> Thanks for playing! " ;
}

function wrongAnswer(){
    wrong.style.display = "block"; 
    correct.style.display = "none";
    var scoreIs = document.getElementById("score").innerHTML = "Your Score: not good bro" 
    
 }


  
