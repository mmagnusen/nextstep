//selects main content div, adds event listener when clicked on
var main = document.getElementById('content_div');
main.addEventListener("mouseup", showImageIcon);

//Hidden div at top of resume detail page is selected
//display is changed to show it and position is moved
//position charted by (e) property, which says where the user clicked
function showImageIcon(e) {

    var x = e.pageX;
    var y = e.pageY;
    icon.style.display = 'block';
    icon.style.left = '910px';
    icon.style.top = (y - 80) + 'px';
    console.log("x is" + x, 'y is' + y);
}

var icon = document.getElementById('tracker_caret_id');
icon.addEventListener('click', caretClicked);
