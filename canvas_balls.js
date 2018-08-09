
var canvas;
var ctx;
var c;
var cc;
var ccc;
var BallId;
var i = 0;
var CountBalls = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100];
var datasets = [[1,2],[2,3],[1,4],[1,5],[3,4], [4,8], [5,9]];

var filedata = [[1,1,0,5],[1,2,1,5],[1,3,2,5],[2,4,3,5],[2,5,4,5],[2,6,0,5],[3,7,1,5],[3,8,2,5],[3,9,3,5],[4,10,4,5],[4,11,0,5],[4,12,1,5],[5,13,2,5],[5,14,3,5],[5,15,4,5],[6,16,0,5],[6,17,1,5],[6,18,2,5],[7,19,3,5],[7,20,4,5],[7,21,0,5],[8,22,1,5],[8,23,2,5],[8,24,3,5],[9,25,4,5],[9,26,0,5],[9,27,1,5],[10,28,2,5],[10,29,3,5],[10,30,4,5],[11,31,0,5],[11,32,1,5],[11,33,2,5],[12,34,3,5],[12,35,4,5],[12,36,0,5],[13,37,1,5],[13,38,2,5],[13,39,3,5],[14,40,4,5],[14,41,0,5],[14,42,1,5],[15,43,2,5],[15,44,3,5],[15,45,4,5],[16,46,0,5],[16,47,1,5],[16,48,2,5],[17,49,3,5],[17,50,4,5],[17,51,0,5],[18,52,1,5],[18,53,2,5],[18,54,3,5],[19,55,4,5],[19,56,0,5],[19,57,1,5],[20,58,2,5],[20,59,3,5],[20,60,4,5],[21,61,0,5],[21,62,1,5],[21,63,2,5],[22,64,3,5],[22,65,4,5],[22,66,0,5],[23,67,1,5],[23,68,2,5],[23,69,3,5],[24,70,4,5],[24,71,0,5],[24,72,1,5],[25,73,2,5],[25,74,3,5],[25,75,4,5],[26,76,0,5],[26,77,1,5],[26,78,2,5],[27,79,3,5],[27,80,4,5],[27,81,0,5],[28,82,1,5],[28,83,2,5],[28,84,3,5],[29,85,4,5],[29,86,0,5],[29,87,1,5],[30,88,2,5],[30,89,3,5],[30,90,4,5],[31,91,0,5],[31,92,1,5],[31,93,2,5],[32,94,3,5],[32,95,4,5],[32,96,0,5],[33,97,1,5],[33,98,2,5],[33,99,3,5],[34,1,0,5],[34,2,1,5],[35,3,2,5],[35,4,3,5],[35,5,4,5],[36,6,0,5],[36,7,1,5],[36,8,2,5],[37,9,3,5],[37,10,4,5],[37,11,0,5],[38,12,1,5],[38,13,2,5],[38,14,3,5],[39,15,4,5],[39,16,0,5],[39,17,1,5],[40,18,2,5],[40,19,3,5],[40,20,4,5],[41,21,0,5],[41,22,1,5],[41,23,2,5],[42,24,3,5],[42,25,4,5],[42,26,0,5],[43,27,1,5],[43,28,2,5],[43,29,3,5],[44,30,4,5],[44,31,0,5],[44,32,1,5],[45,33,2,5],[45,34,3,5],[45,35,4,5],[46,36,0,5],[46,37,1,5],[46,38,2,5],[47,39,3,5],[47,40,4,5],[47,41,0,5],[48,42,1,5],[48,43,2,5],[48,44,3,5],[49,45,4,5],[49,46,0,5],[49,47,1,5],[50,48,2,5],[50,49,3,5],[50,50,4,5],[51,51,0,5],[51,52,1,5],[51,53,2,5],[52,54,3,5],[52,55,4,5],[52,56,0,5],[53,57,1,5],[53,58,2,5],[53,59,3,5],[54,60,4,5],[54,61,0,5],[54,62,1,5],[55,63,2,5],[55,64,3,5],[55,65,4,5],[56,66,0,5],[56,67,1,5],[56,68,2,5],[57,69,3,5],[57,70,4,5],[57,71,0,5],[58,72,1,5],[58,73,2,5],[58,74,3,5],[59,75,4,5],[59,76,0,5],[59,77,1,5],[60,78,2,5],[60,79,3,5],[60,80,4,5],[61,81,0,5],[61,82,1,5],[61,83,2,5],[62,84,3,5],[62,85,4,5],[62,86,0,5],[63,87,1,5],[63,88,2,5],[63,89,3,5],[64,90,4,5],[64,91,0,5],[64,92,1,5],[65,93,2,5],[65,94,3,5],[65,95,4,5],[66,96,0,5],[66,97,1,5],[66,98,2,5],[67,99,3,5],[67,100,4,5],[67,1,0,5],[68,2,1,5],[68,3,2,5],[68,4,3,5],[69,5,4,5],[69,6,0,5],[69,7,1,5],[70,8,2,5],[70,9,3,5],[70,10,4,5],[71,11,0,5],[71,12,1,5],[71,13,2,5],[72,14,3,5],[72,15,4,5],[72,16,0,5],[73,17,1,5],[73,18,2,5],[73,19,3,5],[74,20,4,5],[74,21,0,5],[74,22,1,5],[75,23,2,5],[75,24,3,5],[75,25,4,5],[76,26,0,5],[76,27,1,5],[76,28,2,5],[77,29,3,5],[77,30,4,5],[77,31,0,5],[78,32,1,5],[78,33,2,5],[78,34,3,5],[79,35,4,5],[79,36,0,5],[79,37,1,5],[80,38,2,5],[80,39,3,5],[80,40,4,5],[81,41,0,5],[81,42,1,5],[81,43,2,5],[82,44,3,5],[82,45,4,5],[82,46,0,5],[83,47,1,5],[83,48,2,5],[83,49,3,5],[84,50,4,5],[84,51,0,5],[84,52,1,5],[85,53,2,5],[85,54,3,5],[85,55,4,5],[86,56,0,5],[86,57,1,5],[86,58,2,5],[87,59,3,5],[87,60,4,5],[87,61,0,5],[88,62,1,5],[88,63,2,5],[88,64,3,5],[89,65,4,5],[89,66,0,5],[89,67,1,5],[90,68,2,5],[90,69,3,5],[90,70,4,5],[91,71,0,5],[91,72,1,5],[91,73,2,5],[92,74,3,5],[92,75,4,5],[92,76,0,5],[93,77,1,5],[93,78,2,5],[93,79,3,5],[94,80,4,5],[94,81,0,5],[94,82,1,5],[95,83,2,5],[95,84,3,5],[95,85,4,5],[96,86,0,5],[96,87,1,5],[96,88,2,5],[97,89,3,5],[97,90,4,5],[97,91,0,5],[98,92,1,5],[98,93,2,5],[98,94,3,5],[99,95,4,5],[99,96,0,5],[99,97,1,5],[100,98,2,5],[100,99,3,5],[100,100,4,5],[101,1,0,5],[101,2,1,5],[101,3,2,5],[102,4,3,5],[102,5,4,5],[102,6,0,5],[103,7,1,5],[103,8,2,5],[103,9,3,5],[104,10,4,5],[104,11,0,5],[104,12,1,5],[105,13,2,5],[105,14,3,5],[105,15,4,5],[106,16,0,5],[106,17,1,5],[106,18,2,5],[107,19,3,5],[107,20,4,5],[107,21,0,5],[108,22,1,5],[108,23,2,5],[108,24,3,5],[109,25,4,5],[109,26,0,5],[109,27,1,5],[110,28,2,5],[110,29,3,5],[110,30,4,5],[111,31,0,5],[111,32,1,5],[111,33,2,5],[112,34,3,5],[112,35,4,5],[112,36,0,5],[113,37,1,5],[113,38,2,5],[113,39,3,5],[114,40,4,5],[114,41,0,5],[114,42,1,5],[115,43,2,5],[115,44,3,5],[115,45,4,5],[116,46,0,5],[116,47,1,5],[116,48,2,5],[117,49,3,5],[117,50,4,5],[117,51,0,5],[118,52,1,5],[118,53,2,5],[118,54,3,5],[119,55,4,5],[119,56,0,5],[119,57,1,5],[120,58,2,5],[120,59,3,5],[120,60,4,5],[121,61,0,5],[121,62,1,5],[121,63,2,5],[122,64,3,5],[122,65,4,5],[122,66,0,5],[123,67,1,5],[123,68,2,5],[123,69,3,5],[124,70,4,5],[124,71,0,5],[124,72,1,5],[125,73,2,5],[125,74,3,5],[125,75,4,5],[126,76,0,5],[126,77,1,5],[126,78,2,5],[127,79,3,5],[127,80,4,5],[127,81,0,5],[128,82,1,5],[128,83,2,5],[128,84,3,5],[129,85,4,5],[129,86,0,5],[129,87,1,5],[130,88,2,5],[130,89,3,5],[130,90,4,5],[131,91,0,5],[131,92,1,5],[131,93,2,5],[132,94,3,5],[132,95,4,5],[132,96,0,5],[133,97,1,5],[133,98,2,5]];
var areas = ['Sleep', 'Work', 'Education', 'Rest', 'Dinner'];
var gravity_points;
var area_points = [];
var datareportlist = [];
var width;
var StatsTable;
var maxWidth;
var maxHeight;
var height;
var xpoint;
var ypoint;
var BallsList;
var tick;
var mx;
var my;
var xGravity;
var yGravity;
var area_l = areas.length;
var rad = 0;
var wtx;
var w;
var friction;
var canv_area; 
var radius = 360 / areas.length;
var counter = 0;

//random scale:
function random( min, max ) {
    return Math.random() * ( max - min ) + min;
}


//previous module for data handle:
function getdatasets(t){
for (var e = 0; e < datasets.length; e++){

        
        var tt = datasets[e][0];
        var ttt = e;    
        if(tt == t){
            var dv = datasets[e][1];
            datareportlist.push(dv);
            datasethtml.innerHTML = datareportlist;        
        } else {
        }
}
datareportlist = [];
}

//random color generator:
function RandomColor(){
  var symbols = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += symbols[Math.floor(Math.random() * 16)];
  }
  return color;
}




function Area(){
wtx.beginPath();
for (var a=0; a < area_l; a++){

    //text areas:
    x_area = (canv_area/1) * Math.cos(a / (area_l /2 ) * Math.PI) + (canv_area + 50);
    y_area = (canv_area/1) * Math.sin(a / (area_l /2 ) * Math.PI) + (canv_area + 50);
    x_area = Math.round(x_area);
    y_area = Math.round(y_area);

    //domestic - destination point for Balls:
    xpoint = (canv_area/1.5) * Math.cos(a / (area_l /2 ) * Math.PI) + (canv_area+50);
    ypoint = (canv_area/1.5) * Math.sin(a / (area_l /2 ) * Math.PI) + (canv_area+50);
    xpoint = Math.round(xpoint);
    ypoint = Math.round(ypoint);
 
    //create positions and add points for start script:
    area_points.push([xpoint, ypoint]);
    wtx.textAlign="center"; 
    wtx.font = "bold 20px Tahoma";
    wtx.fillText(areas[a], x_area, y_area);
}

wtx.stroke();
}


function Ball(ball_param){
    //basic Ball parameters:
    this.id = ball_param;
    this.x = canv_area;
    this.y = canv_area;
    this.vx = random(-5,5);
    this.vy = random(-5,5);
    this.radius = random(3,5)
    this.color = "#ffd56f"; //= "#fa3c4c";
    this.gravx = 0.1;
    this.gravy = 0.1;
    //basic gravity of x and y:
    this.gravity_px = maxHeight/2;
    this.gravity_py = maxWidth/2;
}



Ball.prototype.draw = function(){
    ctx.beginPath();
    ctx.arc( this.x, this.y, this.radius, 0, 6 );
    ctx.strokeStyle = "#fa3c4c";
    ctx.fillStyle = this.color;    
    ctx.fill();
};


Ball.prototype.step = function( i ) {
    
    this.x += this.vx;
    this.y += this.vy;
        
    // handle bounce operations    
    if( this.vx > 0 && this.x + this.radius >= maxWidth ) {
        this.vx *= -0.2;
    }
    
    if( this.vx < 0 && this.x - this.radius <= 0 ) {
        this.vx *= -0.2;
    }
    
    if( this.vy > 0 && this.y + this.radius >= maxHeight ) {
        this.vy *= -0.2;
    }
    
    if( this.vy < 0 && this.y - this.radius <= 0 ) {
        this.vy *= -0.2;
    }
    
    // handle bounds and frictions
    if( this.x + this.radius > maxWidth ) {
        this.x = maxWidth - this.radius;
        this.vy *= friction;
    }
    
    if( this.x - this.radius < 0 ) {
        this.x = this.radius;
        this.vy *= friction;
    }
    
    if( this.y + this.radius > maxHeight ) {
        this.y = maxHeight - this.radius;
        this.vx *= friction;
    }
    
    if( this.y - this.radius < 0 ) {
        this.y = this.radius;
        this.vx *= friction;
    }
    
    
    //count gravity and move:
               
    if (this.gravity_px - this.x > 600){
        this.gravx = 0.40;
    } else if (this.gravity_px - this.x > 300){
        this.gravx = 0.20;
    } else if (this.gravity_px - this.x > 200){    
        this.gravx = 0.15; 
    } else if (this.gravity_px - this.x > 150){
        this.gravx = 0.10;
    } else if (this.gravity_px - this.x > 60){
        this.gravx = 0.05;
    } else if (this.gravity_px - this.x > 30){
        this.gravx = 0.02;
    } else if (this.gravity_px - this.x > 5){
        this.gravx = 0.01;
    } else if (this.gravity_px - this.x < -600){
        this.gravx = -0.40;
    } else if (this.gravity_px - this.x < -300){    
        this.gravx = -0.20; 
    }else if (this.gravity_px - this.x < -200){    
        this.gravx = -0.15; 
    } else if (this.gravity_px - this.x < -150){
        this.gravx = -0.10;
    } else if (this.gravity_px - this.x < -60){
        this.gravx = -0.05;
    } else if (this.gravity_px - this.x < -30){
        this.gravx = -0.02;
    } else if (this.gravity_px - this.x < -5){
        this.gravx = -0.01;
    }

    if (this.gravity_py - this.y > 600) {
        this.gravy = 0.40;
    } else if (this.gravity_py - this.y > 300){
        this.gravy = 0.20; 
    }else if (this.gravity_py - this.y > 200){
        this.gravy = 0.15; 
    } else if (this.gravity_py - this.y > 150){
        this.gravy = 0.10;
    } else if (this.gravity_py - this.y > 60){
        this.gravy = 0.05;
    } else if (this.gravity_py - this.y > 30){
        this.gravy = 0.02;
    } else if (this.gravity_py - this.y > 5){
        this.gravy = 0.01;
    } else if (this.gravity_py - this.y < -600){
        this.gravy = -0.40;
    } else if (this.gravity_py - this.y < -300){
        this.gravy = -0.20;
    }else if (this.gravity_py - this.y < -200){    
        this.gravy = -0.15; 
    } else if (this.gravity_py - this.y < -150){
        this.gravy = -0.10;
    } else if (this.gravity_py - this.y < -60){
        this.gravy = -0.05;
    } else if (this.gravity_py - this.y < -30){
        this.gravy = -0.02;
    } else if (this.gravity_py - this.y < -5){
        this.gravy = -0.01;
    }



    
    // handle gravity + bounds + friction
    this.vx += this.gravx;
    this.vy += this.gravy;
};

Ball.prototype.collide = function( otherBall ) {
    // still working on understanding this
    // lots of help from https://lamberta.github.io/html5-animation/
    var dx = otherBall.x - this.x,
        dy = otherBall.y - this.y,
        dist = Math.sqrt( dx * dx + dy * dy ),
        minDist = this.radius + otherBall.radius;
    if( dist < minDist ) {
        var tx = this.x + dx / dist * minDist,
            ty = this.y + dy / dist * minDist,
            ax = ( tx - otherBall.x ) * 0.6,
            ay = ( ty - otherBall.y ) * 0.6;
        this.vx -= ax;
        this.vy -= ay;      
        otherBall.vx += ax;
        otherBall.vy += ay;
        this.vx *= friction * 0.9;
        this.vy *= friction * 0.9;
        otherBall.vx *= friction * 0.9;
        otherBall.vy *= friction * 0.9;
    }
};


function RUN(){
    c = document.getElementById("canvascircle");
    ctx = c.getContext("2d");
    w = document.getElementById("areaballs");
    wtx = w.getContext("2d");
    BallsList = [];
    StatsTable = [];
    gravity_points = [[20,20]];
    xGravity = 0;
    yGravity = 1;
    friction = 0.99;

    
for (var st = 0; st < areas.length; st++){
    StatsTable[st] = [];    
    }

    
    
    tick = 0;
    mx = width / 2;
    my = height / 2;
    
    if (window.innerWidth > window.innerHeight)
{
    ctx.canvas.width  = window.innerHeight;
    ctx.canvas.height = window.innerHeight;
    wtx.canvas.width  = window.innerHeight;
    wtx.canvas.height = window.innerHeight;
    canv_area = window.innerHeight/2.5;

    } else {
    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerWidth;
    wtx.canvas.width  = window.innerWidth;
    wtx.canvas.height = window.innerWidth;
    
    
    canv_area = window.innerWidth/2.5;
}
    c.width = canv_area*2.5;
    c.height = canv_area*2.5;

    maxWidth = canv_area*2.5;
    maxHeight = canv_area*2.5;

    Area();
    Balls();
}

function SetBallToStatsTable(id, new_stattable){
    
    var fd = StatsTable.length-1;
    //chceck all containers:
    for (var cont = 0; cont <= fd; cont++){
		var index = StatsTable[cont].indexOf(id);
		if (index >= 0) {
		StatsTable[cont].splice( index, 1 );
		}
    }        
    
    //add new position in StatsTable:
    StatsTable[new_stattable].push(id);
}


function add_statrows(){

var percent_stat;
var percent_ts;
var type_name;
var sum_length;
sum_length = CountBalls.length;
var table = document.getElementById("statsrows");
var tableClear = table.rows.length;

for (tc = 0; tc < tableClear; tc++){
table.deleteRow(0);
}

var th_row = table.insertRow(0);
var th_cell1 = th_row.insertCell(0);
var th_cell2 = th_row.insertCell(1);
th_cell1.innerHTML = "Category";
th_cell2.innerHTML = "Percent";

for (var o = 0; o < StatsTable.length; o++){
    
    var row = table.insertRow(o+1);
    percent_stat = StatsTable[o].length;
    percent_ts = Math.round( percent_stat/ sum_length*100, 2);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = areas[o];
    cell2.innerHTML = percent_ts + "%";
    }
}




function RunFile() {
var timemachine = 0;

var res = document.getElementById('time');
var TimeData = document.getElementById('TimeData');
var datasethtml = document.getElementById('dshtml');
var timefast = 1;
var colorbase = [];
    
for (var cb = 0; cb < BallsList.length; cb++){
    colorbase[cb] = RandomColor();
}
    
     setInterval(function()
  {  
       

for (var bc = 0; bc < filedata.length;){
    
    var timenum = filedata[bc][0];
    var ballid = filedata[bc][1];
    var file_color = filedata[bc][2];
    var ballsize = filedata[bc][3];
    var colour;    
    
    if (timenum == timemachine){
    

    //default colors:
    /*
    if (file_color == 1){
        colour = "#ff4b33";
    } else if (file_color == 2){
        colour = "#00b0e7";        
    } else if (file_color == 3){
        colour = "#ffd56f";        
    } else if (file_color == 4){
        colour = "#0084ff";        
    } else if (file_color == 5){
        colour = "#fa3c4c";        
    }*/
    //get color:
    colour = colorbase[file_color];
    
    var px = area_points[file_color][0];
    var py = area_points[file_color][1];

    BallsList[ ballid ].gravity_px = px; 
    BallsList[ ballid ].gravity_py = py; 
    BallsList[ ballid ].color = colour;
    BallsList[ ballid ].radius = ballsize;
    
    SetBallToStatsTable(ballid, file_color);

        
    } else {
            
    }
     bc++;
    }
    
      i++;
      res.innerHTML = i;
      Timer(i);
      //getdatasets(i);
      timemachine++;
    
    
    
    add_statrows();
    
      }, 1000/timefast);
    
}





function Timer(s){

var hour;
var minute;

if (hour == 24){
    hour == 0;
    minute = 0; 
    } else if ( counter >= 60 ){
    hour = Math.floor( s / 60);
    minute = Math.floor(s - (Math.floor( s / 60)*60));
    counter = counter+1;
    } else {
        hour = 0;
        minute = s;
        counter = counter + 1; 
    } 

TimerData = ('0' + hour).slice(-2) + ':' + ('0' + minute).slice(-2); //+ ' counter: ' + counter;
TimeData.innerHTML = TimerData;

}



function ExecBalls(){
    if(tick && BallsList.length < CountBalls.length ){
        BallsList.push( new Ball(tick));
        
    }
}


function draw(){
    ctx.clearRect(0, 0, maxWidth, maxHeight);
    
    var i = BallsList.length;
    while(i--) {
        BallsList[i].draw();    
    }
}



function step() {
    var i = BallsList.length;
    while( i-- ) {
        BallsList[ i ].step( i );    
    }
    
    i = BallsList.length;
    while( i-- ) {
        ball = BallsList[ i ];
        var j = i;
        if( j > 0 ) {
            while( j-- ) {
                ball.collide( BallsList[ j ] );
            }
        }
    }
}

function Balls(){
    requestAnimationFrame( Balls );
    ExecBalls();
    step();
    draw();    
    tick++;
}

RUN();
