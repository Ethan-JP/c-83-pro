var canvas=document.getElementById("mycanvas");
var ctx=canvas.getContext("2d");
var lastX,lastY,newX,newY
var color="blue"
var width=5

var screenwidth=screen.width
var newwidth=screen.width-100
var newheight=screen.height-200
if (screenwidth<992){
    document.getElementById("mycanvas").width=newwidth
    document.getElementById("mycanvas").height=newheight
    document.body.style.overflow="hidden"
}

canvas.addEventListener("touchstart",ts)

function ts(e){
    console.log("user has touched the screen")
    color=document.getElementById("colorinput").value
    width=document.getElementById("widthinput").value
}

canvas.addEventListener("touchmove",tm)
function tm(e){
    console.log("user is moving the finger")
    newX=e.touches[0].clientX-canvas.offsetLeft
    newY=e.touches[0].clientY-canvas.offsetTop
        ctx.beginPath()
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
ctx.moveTo(lastX,lastY)
ctx.lineTo(newX,newY)
ctx.stroke()
    lastX=newX
    lastY=newY
}

var checkmousedown=false
canvas.addEventListener("mouseup",mu)
function mu(e){
console.log("mouse is up")
checkmousedown=false
}

canvas.addEventListener("mouseleave",ml)
function ml(e){
    console.log("Mouse left the canvas")
    checkmousedown=false
}

canvas.addEventListener("mousedown",md)

function md(e){
    console.log("mouse has been clicked")
    checkmousedown=true
    color=document.getElementById("colorinput").value
    width=document.getElementById("widthinput").value
}

canvas.addEventListener("mousemove",mm)
function mm(e){
    console.log("mouse is moving")
    newX=e.clientX-canvas.offsetLeft
    newY=e.clientY-canvas.offsetTop
    if (checkmousedown==true) {
        ctx.beginPath()
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
ctx.moveTo(lastX,lastY)
ctx.lineTo(newX,newY)
ctx.stroke()
    }
    lastX=newX
    lastY=newY
}
function cleararea(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}