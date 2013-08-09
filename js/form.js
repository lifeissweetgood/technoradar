var opt1_cnt;
var opt2_cnt;
var opt3_cnt;
var opt4_cnt;
var opt1_Xcoord = 110;
var opt1_Ycoord = 150;
var opt2_Xcoord = 360;
var opt2_Ycoord = 150;
var opt3_Xcoord = 110;
var opt3_Ycoord = 375;
var opt4_Xcoord = 360;
var opt4_Ycoord = 375;

var userDataMap = new Array();  // Map of objects containing user input data
var index = 0;  // Map index

var graph;  // The graph
var ctx;  // The context

$(document).ready(function() {
    opt1_cnt = 0;
    opt2_cnt = 0;
    opt3_cnt = 0;
    opt4_cnt = 0;

    // Add graph to DOM
    $('.graph').append('<canvas id="graphRadar" width="500" height="500" style="border:1px solid #d3d3d3;"></canvas>');

    graph = document.getElementById("graphRadar");
    ctx = graph.getContext("2d");

    // Draw initial graph
    //updateCounts(ctx, opt1_cnt, opt1_Xcoord, opt1_Ycoord);
    //updateCounts(ctx, opt2_cnt, opt2_Xcoord, opt2_Ycoord);
    //updateCounts(ctx, opt3_cnt, opt3_Xcoord, opt3_Ycoord);
    //updateCounts(ctx, opt4_cnt, opt4_Xcoord, opt4_Ycoord);
    drawGraph(ctx);
    addPoint(ctx, "daphne", "C", 5);
});

$('form').submit(function() {
    var formArr = $('form').serializeArray();
    console.log(formArr);
    var userName = formArr[0].value;
    var favlang = formArr[1].value;
    var yrsCoding = formArr[2].value;
    console.log(favlang);

    //handleUserData(userName, favlang, yrsCoding);

    // Redraw graph to update with latest counts
    clearGraph(ctx);
    drawGraph(ctx);
    
    switch(favlang)
    {
        case 'C':
            addPoint(ctx, userName, favlang, yrsCoding);
            break;
        case 'Java':
            addPoint(ctx, userName, favlang, yrsCoding);
            break;
        case 'Python':
            addPoint(ctx, userName, favlang, yrsCoding);
            break;
        case 'Clojure':
            addPoint(ctx, userName, favlang, yrsCoding);
            break;
    }
    //updateCounts(ctx, opt1_cnt, opt1_Xcoord, opt1_Ycoord);
    //updateCounts(ctx, opt2_cnt, opt2_Xcoord, opt2_Ycoord);
    //updateCounts(ctx, opt3_cnt, opt3_Xcoord, opt3_Ycoord);
    //updateCounts(ctx, opt4_cnt, opt4_Xcoord, opt4_Ycoord);

    clearForm();

    return false;
});

/* 
 * These functions take in graph's context:
 *      -drawGraph()
 *      -updateCounts()
 *      -addPoint()
 *      -clearGraph()
 *
 */
function drawGraph(ctx)
{
    // Draw outermost circle
    ctx.fillStyle = "#5786f2";
    ctx.beginPath();
    ctx.arc(250,250,250,0,2*Math.PI);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "#e01b5d";
    ctx.beginPath();
    ctx.arc(250,250,175,0,2*Math.PI);
    ctx.closePath();
    ctx.fill();
    
    ctx.fillStyle = "#57f2d8";
    ctx.beginPath();
    ctx.arc(250,250,100,0,2*Math.PI);
    ctx.closePath();
    ctx.fill();
    
    ctx.fillStyle = "#f2e557";
    ctx.beginPath();
    ctx.arc(250,250,35,0,2*Math.PI);
    ctx.closePath();
    ctx.fill();

    //ctx.moveTo(250,0);
    //ctx.lineTo(250,500);
    //ctx.moveTo(0,250);
    //ctx.lineTo(500,250);
    //ctx.stroke();

    // TODO: make font match text
    ctx.font = "20px Arial";
    //ctx.fillText("Josefin Sans",30,30);
    //ctx.fillText("Berkshire Swash",330,30);
    //ctx.fillText("Old Standard TT",30,480);
    //ctx.fillText("Kaushan Script",330,480);
}

function addPoint(ctx, userName, favlang, yrsCoding)
{
    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.arc(50,50,5,0,2*Math.PI);
    ctx.closePath();
    ctx.fill();

    /*ctx.fillStyle = "#000";
    ctx.font = "20px Arial";
    ctx.fillText("Josefin Sans",30,30);
    ctx.beginPath();
    ctx.moveTo(50,250);
    ctx.lineTo(50,250);
    ctx.stroke();
    ctx.closePath();*/
}

function updateCounts(ctx, optionText, countX, countY)
{
    ctx.font = "60px Arial";
    ctx.fillText(optionText, countX, countY);
}

function clearGraph(ctx)
{
    ctx.clearRect(0,0,500,500);
}

function clearForm()
{
    $('form')[0].reset();
    console.log("Box cleared");
    
}

function userDataObject(name, font, years)
{
    this.name = name;
    this.font = font;
    this.years = years;
}

function addDataObject(object)
{
    userDataMap[index] = object;
    index++;
}

function handleUserData(name, font, years)
{
    var tmpUserDataObj = new userDataObject(name, font, years);
    addDataObject(tmpUserDataObj);
    console.log(userDataMap);
    $('.graph').append('<div id="listdiv">heyheyheyhey</div>');
    //var offs = $('#listdiv').offset({top: 0, left: 0});
    //$(document).bind('mousemove', function(e) {
    $('.graph').mousemove( function(e) {
        //var offs = $('#listdiv').offset({top: 0, left: 0});
        $('#listdiv').css({
            left: e.pageX +5,
            top: e.pageY
        });
        console.log("e.pageX = "+e.pageX+" e.pageY= "+e.pageY);
        var offs = $('#listdiv').offset();
        console.log("Top offset: "+offs.top + " Left offset: "+offs.left);
    });
    var offs = $('#listdiv').offset();
    console.log("Top offset: "+offs.top + " Left offset: "+offs.left);
}
