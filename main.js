function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotposes);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}
function draw() {
    background('#6C91C2');
    textSize(50);
    fill('#FFE787');
    text('Aarit', 50, 300);
}

function gotposes(results)
{
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX-rightWristX);

    textSize(difference);
}

