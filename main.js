noseX = 0;
noseY = 0;

function preload() {
ClownNose = loadImage('https://i.postimg.cc/vZ9gP92p/clownnose.png')
}

function setup() {
    canvas = createCanvas(400,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
    }
}

function draw() {
    image(video, 0, 0, 400, 300);
    image(ClownNose, noseX - 10, noseY - 10, 30, 30);
}

function take_snapshot() {
    save('myFilterImage.png');
}

function modelLoaded() {
    console.log('Model is loaded...');
    console.log('...');
    console.log('...');
    console.log('...');
    console.log('I think.');
}