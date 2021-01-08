lipsX = 0
lipsY = 0

function preload(){
    lips = loadImage('https://i.postimg.cc/X713SSdB/lips.png');
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        lipsX = results[0].pose.nose.x - 30;
        lipsY = results[0].pose.nose.y - 5;
        console.log("lips x = " + lipsX);
        console.log("lips y = " + lipsY);
    }
}

function modelLoaded(){
    console.log('PoseNet Is Initialized!');
}

function draw(){
    image(video,0,0,300,300);
    image(lips, lipsX, lipsY, 60, 60);
}

function take_snapshot(){
    save('myLipstickFilterImage.png');
}