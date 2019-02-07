// red color for the div with class red
$(".red").css("color", "red");


// Color blue for the id myElement and when we click on him, we want him to invoke a function
// that uses alert() to display the message "myElement was clicked!"
$("#myElement div:nth-child(1)").css("color", "blue");
$("#myElement div:nth-child(2)").on("click", function () {
    alert("myElement was clicked!");
});

//A green background and a white text for the id #div1
$("#div1").css("background", "green");
$("#div1").css("color", "white");

//An orange background and a pink text for the id #div2
$("#div2").css("background", "orange");
$("#div2").css("color", "pink");
