status ="";
function setup(){
    canvas = createCanvas(480,360);
    canvas.center();
    video = createVideo("video.mp4");
    video.hide();
 }

function start(){
   objectDetector = ml5.objectDetector("cocossd",modelLoaded);
   document.getElementById("status").innerHTML = "Status:Detecting Objects";
}
function modelLoaded(){
    console.log("Model is initialized");
    status = true;
}
function draw(){
    image(video,0,0,480,360);
}