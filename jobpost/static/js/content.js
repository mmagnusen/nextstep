//variables for storing elements

var mainDiv = document.getElementById("content_div");
var children = document.getElementsByClassName('tooltip_class');
var inner = mainDiv.innerHTML;

var xMouse;
var yMouse;

//an array listing all exec commands and button icons
var cmndArray = [
  ['fontSize', 's', '4px'],
  ['fontSize', 'm', '6px'],
  ['fontSize', 'l', '7px'],
  ['bold', '<i class="fa fa-bold"></i>'],
  ['italic', '<i class="fa fa-italic"></i>'],
  ['insertUnorderedList', '<i class="fa fa-list" aria-hidden="true"></i>'],
  ['underline', '<i class="fa fa-underline"></i>'],
  ['justifyLeft', '<i class="fa fa-align-left"></i>'],
  ['justifyCenter', '<i class="fa fa-align-center"></i>'],
  ['justifyRight', '<i class="fa fa-align-right"></i>'],
  ['justifyFull', '<i class="fa fa-align-justify"></i>'],
  ['insertImage', '<i class="fa fa-picture-o">']
      ];
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
      var node = document.createTextNode("");
      newTip.appendChild(node);
      newTip.className = "tooltip_class";
      newTip.id = 'tooltipId';
      newTip.style.left = xMouse + "px";
      newTip.style.top = yMouse + "px";

    //appends newly created div to main content_wrapper div
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
      if ( index < 3) {
      element.addEventListener("click", function() { document.execCommand(cmndArray[index][0], false, cmndArray[index][2])});
    } else if(index > 2 && index < 11){
      element.addEventListener("click", function() { document.execCommand(cmndArray[index][0])});
    } else {
      element.addEventListener("click", caretClicked, false);
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

var changeResumeName = document.getElementById('cv_name_div');
changeResumeName.addEventListener('blur', saveResumeNameS);

/* old css for downward pointer on tooltip

*/
