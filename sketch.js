leftEyeX=0;
leftEyeY=0;
rightEyeX=0;
rightEyeY=0;
noseX = 0;
noseY = 0;
function preload(){
  lefteye_img = loadImage("left_eye.gif");
  righteye_img = loadImage("right_eye.gif");
     //load the "smile.gif" image using loadImage() function of p5.js and store it in "smile" variable
  
}
function draw() {
background('#d6dcf5');
 image(lefteye_img, leftEyeX, leftEyeY, 45, 40);
  image(righteye_img, rightEyeX, rightEyeY, 45, 40);
   //display the image using image() function of p5.js
  //we already have the x and y co-ordinate of nose in "noseX" and "noseY" variables but we want lips co-ordinate so add 15 to "noseY" variable so pass noseX and noseY+15 as x and y co-ordinate of image respectively
  
}

   function setup() {
  canvas = createCanvas(500, 500);
  canvas.center();

  video = createCapture(VIDEO);
    div = createDiv();
    div.attribute("id","live_div");
    video.parent(div);

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('Model Loaded!');
}


function gotPoses(results)
{
  if(results.length > 0)
  {
   console.log(results);
    noseX = floor(results[0].pose.nose.x);
    noseY = floor(results[0].pose.nose.y);
    console.log("noseX = " + noseX +" noseY = " + noseY);

    rightEyeX = floor(results[0].pose.rightEye.x);
    rightEyeY = floor(results[0].pose.rightEye.y);
    leftEyeX = floor(results[0].pose.leftEye.x);
    leftEyeY = floor(results[0].pose.leftEye.y);
    
    mid = (rightEyeX + leftEyeX)/2;
  }
}

