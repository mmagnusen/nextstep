//variables for storing elements


var mainDiv = document.getElementById("content_div");
var children = document.getElementsByClassName('tooltip_class');
var menu = document.getElementById('return_to_dashboard');
var inner = mainDiv.innerHTML;
console.log(inner);

var xMouse;
var yMouse;

//an array listing all exec commands and button icons
var cmndArray = [
  ['fontSize', 's', '3px'],
  ['fontSize', 'm', '5px'],
  ['fontSize', 'l', '7px'],
  ['bold', '<i class="fa fa-bold"></i>'],
  ['italic', '<i class="fa fa-italic"></i>'],
  ['insertUnorderedList', '<i class="fa fa-list" aria-hidden="true"></i>'],
  ['underline', '<i class="fa fa-underline"></i>'],
  ['justifyLeft', '<i class="fa fa-align-left"></i>'],
  ['justifyCenter', '<i class="fa fa-align-center"></i>'],
  ['justifyRight', '<i class="fa fa-align-right"></i>'],
  ['justifyFull', '<i class="fa fa-align-justify"></i>']
      ];
console.log('sssup');
mainDiv.addEventListener("mouseup", createRange);

//checking if user has selected any text
function createRange(e) {
    var selection = document.getSelection();
    var selectionToString = selection.toString();
    var selectionRange = selectionToString.length;
    xMouse = e.pageX - 200;
    yMouse = e.pageY - 100;
    if ( selectionRange > 0 ) {
    checkForExistingTooltips()

  } else if ( children.length > 0) {
hideToolTip();

  } else {
    hideToolTip();
  }
}

// checks if there's an existing tooltip on the page. If yes, it calls function
// to hide; if no, it creates

function checkForExistingTooltips() {
  if (!children.length) {
    createToolTip();
  }   else {
    hideToolTip();
    }
  }

    // function to create tooltip
    function createToolTip() {

    //creates div for tooltip and sets styles
      var newTip = document.createElement('div');
      var node = document.createTextNode("T.");
      newTip.appendChild(node);
      newTip.style.display = 'block'
      newTip.style.width='500px';
      newTip.style.height='50px';
      newTip.style.backgroundColor = '#2e3238';
      newTip.className = "tooltip_class";
      newTip.style.left = xMouse + "px";
      newTip.style.top = yMouse + "px";

    //appends newly created div to main content_div div
    document.getElementById('content_wrapper').appendChild(newTip);


    //creates indivdual style buttons, styles them and appends them to newly created tooltip
    for ( var cmnd in cmndArray ) {

      var createButton = document.createElement('button');
      createButton.appendChild(node);

      createButton.style.display = 'inline';
      createButton.style.width='30px';
      createButton.style.height='30px';
      createButton.style.margin='7px';
      createButton.style.backgroundColor = 'white';
      createButton.className = "button_classs";
      createButton.innerHTML = cmndArray[cmnd][1];
      newTip.appendChild(createButton);

      }
      var buttonList = document.querySelectorAll('.button_classs');
      buttonList.forEach( function( element, index ) {
      console.log(element);
      if ( index < 4) {
      element.addEventListener("click", function() { document.execCommand(cmndArray[index][0], false, cmndArray[index][2])});
      console.log("too high");
    } else {
      element.addEventListener("click", function() { document.execCommand(cmndArray[index][0])});
    }
        })
    }

//funtion to hide tooltip
function hideToolTip() {

    var rangeOfToolTips = document.getElementsByClassName('tooltip_class');
  //  rangeOfToolTips[0].remove();
    for(var i=0; i < rangeOfToolTips.length; i++) {
    rangeOfToolTips[i].remove();
  }
}

menu.addEventListener('click', createMenu);

function createMenu() {
console.log("menue created");
var createMenu = document.createElement('div');
createMenu.style.display = 'block';
createMenu.style.width='30px';
createMenu.style.height='30px';
createMenu.style.margin='7px';
createMenu.style.backgroundColor = 'green';
createMenu.style.left = '500px';
createMenu.style.top = '100px';

document.getElementById('resume_menu').appendChild(createMenu);
}

/* old css for downward pointer on tooltip
.tooltip_class::after {
  content: "";
  position: relative;
  top: 30%;
  left: 50%;
  margin-left: -5px;
  border-width: 10px;
  border-style: solid;
  border-color: #2e3238 transparent transparent transparent;
}
*/
