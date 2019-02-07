// Write the JavaScript needed hide, then unhide the middle image every 2 seconds (Hint: Interval)
var intervalID = window.setInterval(myFunc, 300);
var x = 1;

function myFunc() {
    $("#changeToGrey").setAttribute("src","jimi"+x+".jpg");
    x++;
    if (x === 3){
        x=1;
    }
}

