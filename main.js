lipsX = 0
lipsY = 0

function preload(){
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
        lipsX = results[0].pose.nose.x + 10;
        lipsY = results[0].pose.nose.y + 10;
        console.log("lips x = " + lipsX);
        console.log("lips y = " + lipsY);
    }
}

function modelLoaded(){
    console.log('PoseNet Is Initialized!');
}

function draw(){
    image(video,0,0,300,300);
}

function take_snapshot(){
    save('myLipstickFilterImage.png');
}