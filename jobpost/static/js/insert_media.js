

//////// tells me the caret's been clicked on and calls function to create image modal
function caretClicked() {
    createModal();


  //  iconToRemove.style.display = 'none';
}


function createModal() {
    var removeTooltip = document.getElementById('tooltipId');
    removeTooltip.parentNode.removeChild(removeTooltip);

    var newModal = document.createElement('div');

    newModal.className = 'newModalClass';
    newModal.id = 'large_image_modal';
    newModal.setAttribute('contenteditable', 'false');
    mainDiv.appendChild(newModal);

    var createExit = document.createElement('button');
    createExit.innerHTML = '<i class="fa fa-times"></i>';
    createExit.id = 'imageModalExit';
    createExit.setAttribute('contenteditable', 'false');
    newModal.appendChild(createExit);
    var close = document.getElementById('imageModalExit');
    close.addEventListener('click', exitImageModal);


    var createTopDiv = document.createElement('div');
    var topDivNode = document.createTextNode("");
    createTopDiv.appendChild(topDivNode);
    createTopDiv.innerHTML = 'Insert Single Image';
    createTopDiv.id = 'topDivID';
    createTopDiv.setAttribute('contenteditable', 'false')
    newModal.appendChild(createTopDiv);


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

    var topDiv = document.getElementById('topDivID');
    topDiv.appendChild(createImageInput);

    var getFile = document.getElementById('file');
    getFile.addEventListener('change', startImageAjax());
/*
  COMMENTING OUT AS DON'T NEED SLIDESHOW CAPABILTY YET
    var createBottomDiv = document.createElement('div');
    var bottomDivNode = document.createTextNode("");
    createBottomDiv.appendChild(bottomDivNode);
    createBottomDiv.id = 'bottomDivID';
    createBottomDiv.setAttribute('contenteditable', 'false');
    createBottomDiv.innerHTML = 'Add Slideshow';
    newModal.appendChild(createBottomDiv);

    var slideShowDiv = document.createElement('div');
    slideShowDiv.id = 'slideShowID';
    slideShowDiv.innerHTML = '<i class="fa fa-picture-o fa-5x" ></i>';
    slideShowDiv.setAttribute('contenteditable', 'false');
    var bottom = document.getElementById('bottomDivID');
    bottom.appendChild(slideShowDiv);
    bottom.addEventListener('click', addSlideShow);

*/
}


function exitImageModal() {
    console.log('image modal close button clicked');
    exitModal = document.getElementById('large_image_modal');
    exitModal.parentNode.removeChild(exitModal);

    var removeTooltip = document.getElementById('tooltipId');
    removeTooltip.parentNode.removeChild(removeTooltip);
}
