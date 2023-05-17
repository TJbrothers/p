function preload()
{

}
function setup()
{
    canvas = createCanvas(1000, 700);
    canvas.position(270, 150);
    video = createCapture(VIDEO);
    video.hide();
    circle(900, 650, 100);
    circle(100, 650, 100);
    circle(900, 100, 100);
    circle(100, 100, 100);
    circle(500, 650, 100);
    circle(100, 400, 100);
    circle(500, 100, 100);
    circle(900, 400, 100);
}
function draw()
{
    image(video, 200, 170, 600, 380);
}
function take_snapshot()
{
    save('student_name.png');
}