/*
1.Browser plug-in detection
2.Status bar messages
3.Scrolling status bars
4.Rollovers
5.Cycling animations
6.Slide shows
7.Dynamic frames
8.Form verification
9.New windows
10.Cookies 
11.Dynamic webpage updates
12.Hit Page Counter
*/


/*
*******************************************************************
Script 1: Browser Plugin Detection (browserdetection.html)
this function detects the user browser
******************************************************************
*/
function browserDetection() { 
	if(navigator.userAgent.indexOf("Chrome") != -1 ){
		document.getElementById("browser").innerHTML="The browser you are using is : Chrome";
    }
    else if(navigator.userAgent.indexOf("Opera") != -1 ){
		document.getElementById("browser").innerHTML="The browser you are using is : OPERA";
    }
    else if(navigator.userAgent.indexOf("Firefox") != -1 ){
       document.getElementById("browser").innerHTML="The browser you are using is : FIREFOX";
    }
    else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )){
      document.getElementById("browser").innerHTML="The browser you are using is : Internet";
    }  
    else{
       document.getElementById("browser").innerHTML="The browser you are using is : Unknown";
    }
}// end function browserDetection

/*

******************************************************************
Script 2: Status Bar Message (statusbar.html)
this function shows a message on the status bar
******************************************************************
*/
function writeToStatus(input){
    window.status=input;
    return true;
}// end function writeoStatus

/*

/*
/*****************************************************************
Script3a : Vertical Scrolling Text( scroll.html)
this function is used for Vertical Scrolling Text
****************************************************************
*/
var pos=100;
function scrollText() {
	pos =pos-1;
    document.getElementById("text").style.top=pos;
    window.setTimeout("scrollText()",50);
}// end function scrollText
/*

/*
/*****************************************************************
Script3b :  Scrolling Text( scrolltext.html)
this function is used for  Scrolling Text
****************************************************************
*/
var message = "Below you can find links to other parts of the website.";
i=0;
function scrollBox() {
	
	i++;
	if(i > message.length) {
	    i = 1;
	}
	document.forms[0].elements[0].value = message.substring(0,i)+"_";
	setTimeout("scrollBox()",100);
	
}//end function scrollBox
/*
/*****************************************************************
Script 4a: Image Rollover (imagerollover.html)
this function is used for an image rollover
****************************************************************
*/
function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("bulbon")) {
        image.src = "images/bulboff.gif";
    } else {
        image.src = "images/bulbon.gif";
    }
}// end function changeImage

/*
/*****************************************************************
Script 4b: Text Rollover (textrollover.html)
this function is used for a text rollover
****************************************************************
*/
function mouseOver() {
    document.getElementById("mytext").style.color = "black";
}// end function

function mouseOut() {
    document.getElementById("mytext").style.color = "red";
}// end function

/*

/*
*******************************************************************
Script 5: Cycling Animations (cyclinganimations.html)
Using Canvas
******************************************************************
*/
//declare variables
var img = new Image();
img.src = 'images/animation.jpg';
var CanvasXSize = 950;
var CanvasYSize = 200;
var speed = 30; //lower is faster
var scale = 1.05;
var y = -4.5; //vertical offset

// Main program
var dx = 0.75;
var imgW;
var imgH;
var x = 0;
var clearX;
var clearY;
var ctx;

img.onload = function() {
    imgW = img.width*scale;
    imgH = img.height*scale;
    if (imgW > CanvasXSize) { 
		x = CanvasXSize-imgW; 
    } // image larger than canvas
    if (imgW > CanvasXSize) { 
		clearX = imgW; 
	} // image larger than canvas
    else { 
		clearX = CanvasXSize; 
	}
    if (imgH > CanvasYSize) { 
		clearY = imgH; 
	} // image larger than canvas
    else {
		clearY = CanvasYSize; 
	}
    //Get Canvas Element
    ctx = document.getElementById('canvas').getContext('2d');
    //Set Refresh Rate
    return setInterval(draw, speed);
}

function draw() {
	//Clear Canvas
    ctx.clearRect(0,0,clearX,clearY);
    //If image is <= Canvas Size
    if (imgW <= CanvasXSize) {
        //reset, start from beginning
        if (x > (CanvasXSize)) {
			x = 0; 
		}
        //draw aditional image
        if (x > (CanvasXSize-imgW)) {
			ctx.drawImage(img,x-CanvasXSize+1,y,imgW,imgH); 
		}
    }
    //If image is > Canvas Size
    else {
        //reset, start from beginning
        if (x > (CanvasXSize)) { 
			x = CanvasXSize-imgW; 
		}
        //draw aditional image
        if (x > (CanvasXSize-imgW)) { 
			ctx.drawImage(img,x-imgW+1,y,imgW,imgH);			
	    }
    }
    //draw image
    ctx.drawImage(img,x,y,imgW,imgH);
    //amount to move
    x += dx;
}// end function draw

 /*
*******************************************************
Script 6:Image Slide Show (slideshow2.html)

***********************************************************
*/
 function slideShow() {
	var imgs = document.getElementById('slideshow').children;
	interval = 2000;
	currentPic = 0;
	imgs[currentPic].style.webkitAnimation = 'fade '+interval+'ms';
	imgs[currentPic].style.animation = 'fade '+interval+'ms';
	var infiniteLoop = setInterval(function(){
		imgs[currentPic].removeAttribute('style');
		if ( currentPic == imgs.length - 1) {
			currentPic = 0;
		} else {
			currentPic++;
		}
	imgs[currentPic].style.webkitAnimation = 'fade '+interval+'ms';
	imgs[currentPic].style.animation = 'fade '+interval+'ms';
}, interval);
}// end function slideShow
/*
*******************************************************
Script 7:Dynamic Frame Update(dynamicframesupdate.html)
this function changes the content of an iframe
***********************************************************
*/
function dynamicFrame() {
    var frames = window.frames;
	frames[0].location = "https://www.google.ie";
    frames[1].location = "https://www.google.ie";
}// end dynamicFrame

/*DS
/*****************************************************************
Script 8a: Email Verification(emailverification.html and emailthanks.html)
this function is used for email verification
****************************************************************
*/
function emailVerification(myForm) {
	re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
	if (re.test(myForm.emailAddr.value)) {
		document.getElementById("email").innerHTML= "Thanks  "+myForm.emailAddr.value;	
	}
	else{
		alert("Invalid email address")
	}
}//end function emailVerification 

/*
/*****************************************************************
Script 8b: Form Verification (login.html and logincorrect.html)
this function is used for user verification
****************************************************************
*/
function pasuser(form) {
    if (form.id.value=="Will") { 
        if (form.pass.value=="1234") {              
            //location="logincorrect.html"
            document.getElementById("log").innerHTML= "Welcome "+form.id.value;			
        } else {
            alert("Invalid Password")
        }
    } else {  
	     alert("Invalid UserID")
    }
}// end function
/*
/*****************************************************************
Script 9: New Window  (newwindow.html)

****************************************************************
*/
function newWindow() {
    window.open("http://www.w3schools.com");
}//end newWindow

/*
/*****************************************************************
Script 10: Set Cookie and Return Cookie (cookie.html)
these two functions setting and returning a cookie
****************************************************************
*/
function writeCookie(){
    if( document.myform.customer.value == "" ){
	    alert("Enter some value!");
        return;
    }
    cookievalue= escape(document.myform.customer.value) + ";";
    document.cookie="name=" + cookievalue;
    alert ("Setting Cookies : " + "name=" + cookievalue );
}
function readCookie(){
	document.getElementById("cookie").innerHTML= "name=" + cookievalue;
}

//end cookie

/*
*******************************************************
Script 11:Dynamic Web Page Update(Time)(dynamicwebpageupdate.html)
this function prints the time
***********************************************************
*/
function timeDigtal(){
	var currentTime = new Date();
	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	var seconds = currentTime.getSeconds();
    document.getElementById("digtime").innerHTML="<b>TIME IS: " + hours + ":" + minutes + " " + ":" + seconds + " " + "</b>";
}//end function timeDigtal

/*
*******************************************************
Script 12:Hit Page Counter(hitcounter.html)
this function prints the time
***********************************************************
*/

function hitCount(){
	if (localStorage.pagecount){
		localStorage.pagecount=Number(localStorage.pagecount) +1;
	}
	else{
		localStorage.pagecount=0;
	}
	document.getElementById("hits").innerHTML=localStorage.pagecount;
}//end hitCount
