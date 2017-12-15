
var modalChildren = document.getElementsByClassName('imageClass');
var main = document.getElementById('content_div');

//////// array of images in image hover
const mediaArray = [
'<i class="fa fa-picture-o"></i>',
]

//////// checks to see if an image hover is already showing
function clickedOnEmptyLine(e) {
console.log('getting caret position');
var range;
var textNode;
var offset;

if (document.caretPositionFromPoint) {
    range = document.caretPositionFromPoint(e.clientX, e.clientY);
    textNode = range.offsetNode;
    offset = range.offset;


  } else if (document.caretRangeFromPoint) {
    range = document.caretRangeFromPoint(e.clientX, e.clientY);
    textNode = range.startContainer;
    offset = range.startOffset;
  }

}

function showImageIcon(e) {
  var icon = document.getElementById('image_icon_id');
  var x = e.pageX;
  var y = e.pageY;
  icon.style.display = 'block';
  icon.style.left = '910px';
  icon.style.top = y + 'px';
  console.log("x is" + x, 'y is' + y)

  var ctl = document.getElementById('content_div');
    var startPos = ctl.selectionStart;
    var endPos = ctl.selectionEnd;
    console.log(startPos + ", " + endPos);

}


//////// if image hover isn't showing, creates it and vice versa
function checkForExistingModal() {
  if (!modalChildren.length) {
    createModal();
  }   else {

    }
  }

///////// creates imagehover
function createModal () {
  var newModal = document.createElement('div');
  var modalNode = document.createTextNode("");
  newModal.appendChild(modalNode);
  newModal.className = 'newModalClass';
  newModal.style.display = 'block';
  newModal.style.backgroundColor = '#2e3238';
  newModal.style.minWidth = '500px';
  newModal.style.minHeight = '500px';
  newModal.style.opacity = '1';
  newModal.style.left = '30%';
  newModal.style.top = '20%';
  newModal.id = 'image_modal';
  mainDiv.appendChild(newModal);

      //shows what's currently in imageChildren 'array'
      console.log(modalChildren);

  var createExit = document.createElement('button');
  var exitNode = document.createTextNode("X");
  createExit.appendChild(exitNode);
  createExit.style.width = '50px';
  createExit.style.height = '50px';
  createExit.style.backgroundColor = 'white';
  createExit.style.borderRadius = '30px';
  createExit.style.display = 'inline';
  createExit.innerHTML = '<i class="fa fa-times"></i>';
  createExit.id = 'exit';
  createExit.style.left = '440px';
  createExit.style.top = '10px';
  createExit.style.position = 'relative';
  newModal.appendChild(createExit);

  var close = document.getElementById('exit');
  console.log('close button clicked');

  close.addEventListener('click', exit, false);

  function exit() {
    console.log('close button clicked');
    document.getElementById('image_modal').remove();
  }


  var createTopDiv = document.createElement('div');
  var topDivNode = document.createTextNode("");
  createTopDiv.appendChild(topDivNode);
  createTopDiv.style.width = '470px';
  createTopDiv.style.height = '200px';
  createTopDiv.style.backgroundColor = 'white';
  createTopDiv.style.borderRadius = '30px';
  createTopDiv.style.display = 'block';
  createTopDiv.style.left = '10px';
  createTopDiv.style.top = '10px';
  createTopDiv.style.position = 'relative';
  createTopDiv.innerHTML = 'INSERT SINGLEIMAGE';
  createTopDiv.id = 'topDivID';
  newModal.appendChild(createTopDiv);

  console.log('top image div clicked');

  var getTopDiv = document.getElementById('topDivID');
  getTopDiv.addEventListener('click', createImageInput);

  function createImageInput() {
  var createImageInput = document.createElement('input');
  var imageInputNode = document.createTextNode("");
  createImageInput.appendChild(imageInputNode);
  createImageInput.setAttribute('type', 'file')
  createImageInput.id = 'file';
  createImageInput.setAttribute('enctype', 'multipart/form-data');
  createImageInput.setAttribute('name', 'file')
  createImageInput.setAttribute('class', 'file')
  createImageInput.setAttribute('title', 'file')
  createImageInput.setAttribute('value', 'file')
  createTopDiv.appendChild(createImageInput);

  var getFile = document.getElementById('file');
  getFile.addEventListener('change', startImageAjax());

}



  var createBottomDiv = document.createElement('div');
  var bottomDivNode = document.createTextNode("");
  createBottomDiv.appendChild(bottomDivNode);
  createBottomDiv.style.width = '470px';
  createBottomDiv.style.height = '200px';
  createBottomDiv.style.backgroundColor = 'white';
  createBottomDiv.style.borderRadius = '30px';
  createBottomDiv.style.display = 'block';
  createBottomDiv.style.left = '10px';
  createBottomDiv.style.top = '20px';
  createBottomDiv.style.position = 'relative';
  createBottomDiv.innerHTML = 'SLIDESHOW';
  newModal.appendChild(createBottomDiv);


  //loops through mediaArray, creates a button for each item and
  //appends it to the hover
      for (var imagePic in mediaArray) {
        var createButton = document.createElement('button');
        var node = document.createTextNode("T.");
        createButton.appendChild(node);
        createButton.style.display = 'inline'
        createButton.style.width='50px';
        createButton.style.height='50px';
        createButton.style.margin='7px';
        createButton.style.backgroundColor = 'white';
        createButton.innerHTML = mediaArray[0];
        createButton.className = 'imageButtonClass';
        newModal.appendChild(createButton);
        }



    var getImageButton = document.querySelectorAll('.imageButtonClass');
    getImageButton.forEach( function( element, index ) {


          if (index === 0) {
            element.addEventListener("click", createInput);
              }
          }
      )

}

////////// creates input element
function createInput() {
console.log('event listener working');
}

////////// hides image hover
function hideImageHover() {
    var rangeOfImageHovers = document.getElementsByClassName('imageClass');
  //  rangeOfToolTips[0].remove();
    for(var i=0; i < rangeOfImageHovers.length; i++) {
    rangeOfImageHovers[i].remove();
      }
    }
