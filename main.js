nosey=0
nosex=0
function preload(){antlers=loadImage("ant.png")}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}

function modelLoaded(){
    console.log("poesNet is initialized");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x-100;
        nosey=results[0].pose.nose.y-250; 
    }
}

function draw(){
    image(video,0,0,300,300);
    image(antlers,nosex,nosey,200,200);
}

function snap(){
    save("haha.png")
}