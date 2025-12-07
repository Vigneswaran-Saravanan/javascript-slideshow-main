
var slides = document.getElementsByClassName("slide");

var current =0;
let total = slides.length;

// console.log(total);

var next = document.getElementById('next');

next.addEventListener("click", function(){
    current ++;
    console.log(current);

    if (current>=total){
      current=0;
    }
    for(var i=0; i<slides.length; i++){
        slides[i].style.display="none";
    }
    slides[current].style.display="block";

});


var previous=document.getElementById('previous');

previous.addEventListener("click", function(){
    current --;
    console.log(current);

    if(current<=-1){
        current=total-1;
    }
    for(var i =0; i<slides.length; i++){
        slides[i].style.display="none";
    }
    slides[current].style.display="block";

});