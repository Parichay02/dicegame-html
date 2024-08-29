
var a=Math.random();
var b=Math.ceil(a*6);
console.log(b);
a=Math.random();
var c=Math.ceil(a*6);
console.log(c);
var i1=document.querySelectorAll("img")[0];
var i2=document.querySelectorAll("img")[1];
var ro=1

function roll(){
if (b==1){
i1.setAttribute("src","dice1.png");
}
else if (b==2){
    i1.setAttribute("src","dice2.png");  
}
else if (b==3){
    i1.setAttribute("src","dice3.jpg");
}
else if (b==4){
    i1.setAttribute("src","dice4.png");
}
else if (b==5){
    i1.setAttribute("src","dice5.png");
}
else if (b==6){
    i1.setAttribute("src","dice6.png");
}

if (c==1){
    i2.setAttribute("src","dice1.png");

}
else if (c==2){
    i2.setAttribute("src","dice2.png");
}
else if (c==3){
    i2.setAttribute("src","dice3.jpg");
}
else if (c==4){
    i2.setAttribute("src","dice4.png");
}
else if (c==5){
    i2.setAttribute("src","dice5.png");
}
else if (c==6){
    i2.setAttribute("src","dice6.png");
}
}