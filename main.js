noseX = 0;
noseY = 0;

rightWristX = 0;
rightWristY = 0;

function preload() {
  ball_touch_paddel = loadSound("ball_touch_paddel.wav");
  missed = loadSound("missed.wav");
}

function setup(){
  var canvas =  createCanvas(700,600);
  canvas.parent('canvas');
  
  video = createCapture(VIDEO);
  video.size(700, 600);
  video.hide();

	poseNet = ml5.poseNet(video,modelLoaded);
	poseNet.on('pose',gotPoses);
  }
  
  function modelLoaded() {
    console.log("PoseNet is initialized!!");
  }

  function gotPoses(results){
    if (results.length > 0) {
      console.log(results);
  
      noseX = results[0].pose.nose.x;
      noseY = results[0].pose.nose.y;
      console.log("Nose X = " + noseX);
      console.log("Nose Y = " + noseY);

      rightWristX = results[0].pose.rightWrist.x;
      rightWristY = results[0].pose.rightWrist.y;
      console.log("Right Wrist X = " + rightWristX);
      console.log("Right Wrist Y = " + rightWristY);

    }
  }
  
  function draw() {
    image(video,0,0,700,600);
    game()

    image(video,0,0,500,500);
    fill("#ff0000");
    stroke("#ff0000");

    circle(rightWristX,rightWristY,20);
  }