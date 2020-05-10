
var color = '#';
var RGBColor;
var h1= document.querySelector("h1")
var div;
var hard=document.getElementById("hard")
var easy=document.getElementById("easy")
var headercolor=document.getElementById("header")
var playagain=document.getElementById("play")
var restdiv=document.querySelectorAll('.box')
var tryAgain= document.getElementById("try")

document.addEventListener("DOMContentLoaded", function() {
	
  CreateRowDiv(2,2);
  
colorDiv(0,8); 

 $("#try").text(" ")
})
function getRandomColor() {
	//debugger;
	color="#";
  var letters = '0123456789ABCDEF';
    var r = 0, g = 0, b = 0;
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  console.log(color)
  if (color.length== 4) {
    r = "0x" + color[1] + color[1];
    g = "0x" + color[2] + color[2];
    b = "0x" + color[3] + color[3];

  // 6 digits
  } else if (color.length == 7) {
    r = "0x" + color[1] + color[2];
    g = "0x" + color[3] + color[4];
    b = "0x" + color[5] + color[6];
  }
 RGBColor="RGB("+ +r + ", " + +g + ", " + +b + ")"

return RGBColor;

}

var wincolor=RGBColor;
h1.innerHTML=getRandomColor();

console.log("colorrrrrrrrrrrr" +color)

function CreateRowDiv(r,d)
{    
    //r=2,d=2;
  
    var div=document.querySelector("#Divs")
    div.innerHTML="";
    for(var j=0;j<=r;j++)
    {
    var iRow=document.createElement("div")
    iRow.classList="Row"
    iRow.id="Row" + [j+1]
    div.appendChild(iRow)
    for(var i=0; i<=d;i++)
    {
         var iDiv=document.createElement("div")
         iDiv.classList="col-md-4 box wincolor";
       //iDiv.id="Div" +[i+1]
        iRow.appendChild(iDiv)
        
    }
}

}


var easy=document.querySelector("#easy")

var hard=document.querySelector("#hard")

easy.addEventListener("click",function(){
  headercolor.style.backgroundColor="#8f8394"
	hard.style.backgroundColor="white";
	easy.style.backgroundColor="grey";
	h1.innerHTML=getRandomColor();
	CreateRowDiv(1,2);
	colorDiv(0,5);
 
	$("#try").text(" ")
});


hard.addEventListener("click",function(){
	easy.style.backgroundColor="white";
	hard.style.backgroundColor="grey";
  headercolor.style.backgroundColor="#8f8394"
	h1.innerHTML=getRandomColor();
	CreateRowDiv(2,2);
	colorDiv(0,8);
 
	
  $("#try").text(" ")
});

    var arr=[];

function colorDiv(min,max){
div= document.getElementsByClassName("box")
      min = Math.ceil(min);
    max = Math.floor(max);

    arr=$(".box")
    console.log(arr)
    number=Math.floor(Math.random() * (max - min + 1)) + min;
    console.log("hey "+number)
    $(arr[number]).css("background-color",color);
  

for (var k=min; k<=arr.length; k++)
{

if ($(arr[k]).css("background-color")=="rgba(0, 0, 0, 0)")
{
  $(arr[k]).css("background-color",getRandomColor())
}
else{
"";
}
}

}
//functionality

/*restdiv.forEach(function(item)  {

 item.addEventListener('click', function(){
debugger;
var a=event.target.style.backgroundColor;
	
var colortext=event.target.style.backgroundColor.toUpperCase()
console.log(colortext)

if(colortext==h1.textContent)
{
	var header= document.getElementById("header")
	header.style.backgroundColor=h1.innerHTML
	
	for(var i=0;i<9;i++)
	{
		restdiv[i].style.backgroundColor=h1.innerHTML;
	}
	tryAgain.innerHTML="You guessed it"
}
else{
	event.target.style.backgroundColor='black'	
	tryAgain.innerHTML="Try Again !!"
}

  })
})*/

$("#Divs").on("click",".box",function(){
  debugger;
  var a=$(this).css("background-color")
 if(a.toUpperCase()==$("h1").html().trim())
  {
    $("#header").css("background-color",a)
    $(".box").css("background-color",a)
    $("#try").text("You win")
  }
  else {
    $(this).css("background-color","black")
     $("#try").text("Try again")
  }
  
})


playagain.addEventListener("click",function(){
	tryAgain.innerHTML=""
   headercolor.style.backgroundColor="#8f8394"
	easy.style.backgroundColor="white";
	hard.style.backgroundColor="grey";
	h1.innerHTML=getRandomColor();
	CreateRowDiv(2,2);
	colorDiv(0,8);

 $("#try").text(" ")
	
})

/*function colorexToRGB(color) {
  let r = 0, g = 0, b = 0;

  // 3 digits
  if (color.lengtcolor == 4) {
    r = "0x" + color[1] + color[1];
    g = "0x" + color[2] + color[2];
    b = "0x" + color[3] + color[3];

  // 6 digits
  } else if (color.lengtcolor == 7) {
    r = "0x" + color[1] + color[2];
    g = "0x" + color[3] + color[4];
    b = "0x" + color[5] + color[6];
  }
  
 console.log( "rgb("+ +r + "," + +g + "," + +b + ")")
}*/