// Create a table with 6 rows and 4 columns.
// Put the text jQuery in each cell.
// Add a button that when clicked will set the background color of every other row to grey.
$("button").on("click",function ()
{
    $("tr:odd").css("background","grey");
});




