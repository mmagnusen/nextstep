var mainDiv = document.getElementById("content_div");
mainDiv.addEventListener("mouseup", clickedOnEmptyLine);
var modalChildren = document.getElementsByClassName('imageClass');
console.log(modalChildren);
var getContentWrapper = document.getElementById("content_wrapper");
var xMouse;
var yMouse;

//////// array of images in image hover
const mediaArray = [
'<i class="fa fa-picture-o"></i>',
]

//////// checks to see if an image hover is already showing
function clickedOnEmptyLine() {
  checkForExistingModal();
  showCoords(event);
}

function showCoords(event) {
    xMouse = event.clientX;
    yMouse = event.clientY;
      console.log(xMouse, yMouse);

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
  getContentWrapper.appendChild(newModal);

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
  createExit.style.left = '440px';
  createExit.style.top = '10px';
  createExit.style.position = 'relative';
  newModal.appendChild(createExit);


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

  var getTopDiv = document.getElementById('topDivID');
  getTopDiv.addEventListener('click', makeTopDivClickable);
  function makeTopDivClickable() {

    console.log('top image div clicked');
    var createImageInput = document.createElement('input');
    var imageInputNode = document.createTextNode("");
    createImageInput.appendChild(imageInputNode);
    createImageInput.type = 'file';
    createImageInput.id = 'inputFieldID';
    createTopDiv.appendChild(createImageInput);
    startImageAjax();
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
          console.log(element);

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
