function preload()
{

}

function setup()
{
    canvas = createCanvas(550,500);
    canvas.position(60, 200);

    video = createCapture(VIDEO);
    video.size(550,500);
    video.position(560,200);
    // let constraints = {
    //     video: {
    //         mandatory: {
    //             minWidth: 350,
    //             minHeight: 350,
    //             maxWidth: 350,
    //             maxHeight: 350
    //         },
    //         optional: [{maxFrameRate:32}]
    //     },
    //     audio: false
    // }
    // video = createCapture(constraints);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.warn(results);
    }
}

function modelLoaded()
{
    console.log('PoseNet is Initialized');
}

function draw()
{
    // canvas.center()
}