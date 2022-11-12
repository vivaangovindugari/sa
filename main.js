img = "";
objects = [];
status = "";
song = "";

function preload()
{
    song = loadSound("everything_is_awesome.mp3");
}


function setup()
{
    canvas = createCanvas(380,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    
}

function modelLoaded()
{
    console.log("Model Loaded")
    status = true;
}

function gotResult(error,results)
{
if (error) {
    console.error(error);
}
console.log(results);
objects = results;
}

function draw()
{
    image(video,0,0,380,380);
    if (status != "") {
        r = random(255);
        g = random(255);
        b = random(255);
        objectDetector.detect(video,gotResult);
        for ( i = 0; i < object.length; i++) {
            document.getElementById("status").innerHTML = "Status: Objects Detected";
            document.getElementById("number_of_objects").innerHTML = "Number of objects are :"+ object.length;
            if (objects == "person") {
            song.play();
            fill(r,g,b);
            percent = floor(object[i].confidence * 100);
            text(object[i].label + "" + percent + "%" + object[i].x + 15 ,object[i].y + 15);
            noFill();
            stroke(r,g,b);
            rect(object[i].x + object[i].y + object[i].width + object[i].height);
            document.getElementById("baby_de").innerHTML = "Baby Found";
}
else {
    song.stop();
    fill(r,g,b);
    percent = floor(object[i].confidence * 100);
    text(object[i].label + "" + percent + "%" + object[i].x + 15 ,object[i].y + 15);
    noFill();
    stroke(r,g,b);
    rect(object[i].x + object[i].y + object[i].width + object[i].height);
    document.getElementById("baby_de").innerHTML = "Baby Not Found";
}
            
        }
            
        }
    }