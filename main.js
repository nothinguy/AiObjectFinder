video = "";

function setup() {
canvas = createCanvas(380,380);
canvas.position(440,200);
video = createCapture(VIDEO);
 video.hide();
video.size(430,330);
}

function preload(){
  
}

function start(){
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    input = document.getElementById("input").value;
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function draw() {
image(video,0,0,480,380);      
}
function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
}