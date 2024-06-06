Status= "";
function start() {
    objectDetector= ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "STatus : DETECTING OBJECTS";
    input_text = document.getElementById("input_id").value;
}
function Setup() {
   canvas = createCanvas(480,380);
   canvas.center();
   video= createCapture(VIDEO);
   video.size(480,380);
   video.hide();
}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    video.loop;
    video.speed(1);
    video.volume(0);
}
function draw() {
    image(video, 0, 0,480,380);
}
