video = "";
status1 = ""
Objects = []

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
    if (status1 != "") {
        objD.detect(video, getResult)
        for (i = 0; i < Objects.length; i++) {
            document.getElementById("status").innerHTML = "status : object detected"
            document.getElementById("noObj").innerHTML = "no. of Objects : " + Objects.length

            fill("red")
            perc = floor(Objects[i].confidence * 100)
            text(Objects[i].label + " " + perc + "%", Objects[i].x-30, Objects[i].y)
            noFill()
            stroke("pink")
            rect(Objects[i].x-30, Objects[i].y, Objects[i].width, Objects[i].height)
        }
    }

}

function getResult(error, results){
    if (error){
        console.log(error)
    }
    else {
        console.log(results)
        Objects = results

    }
}


function start() {
    objD = ml5.objectDetector("cocossd", modelLoaded)
    document.getElementById("status").innerHTML = "status : Detecting Objects"
}

function modelLoaded() {
    status1 = true
    video.loop()
    video.speed(1)
    video.volume(1)
}