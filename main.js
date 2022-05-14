video = "";
status1=""
function preload() {
    video = createVideo("video.mp4");
}

function setup() {
    canvas = createCanvas(350, 350);
    canvas.center();
    video.hide();

}

function draw() {
    image(video, 0, 0, 350, 350);

}

function start(){
    objD=ml5.objectDetector("cocossd", modelLoaded)
    document.getElementById("status").innerHTML="status : Detecting Objects"
}

function modelLoaded(){
status1=true
video.loop()
video.speed(1)
video.volume(1)
}
