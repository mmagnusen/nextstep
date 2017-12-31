
function addSlideShow() {
    //removes old add image div
    var imageModal = document.getElementById('large_image_modal');
    imageModal.parentNode.removeChild(imageModal);

    //creates LARGE slideshow div
    var slideShowEditor = document.createElement('div');
    slideShowEditor.id = 'slideShowEditorId';
    slideShowEditor.setAttribute('contenteditable', 'false')
    var main = document.getElementById('content_div');
    main.appendChild(slideShowEditor);

    //creates upper div for slideshow modal
    var slideShowUpper = document.createElement('div');
    var node = document.createTextNode("");
    slideShowUpper.appendChild(node);
    slideShowUpper.id = 'slideShowUpperDiv';

    // adds new upper div to main LARGE div
    var slideFirstStep = document.getElementById('slideShowEditorId');
    slideFirstStep.appendChild(slideShowUpper);

    //creates label for files
    var firstLabel = document.createElement('label');
    firstLabel.id = 'firstLabelId';
    firstLabel.setAttribute("for", "firstInputId");
    firstLabel.innerHTML = 'Select Multiple Files:';
    slideShowUpper.appendChild(firstLabel);

    //creates input for multiple files
    var firstInput = document.createElement('input');
    firstInput.id = 'input';
    firstInput.setAttribute("type", "file");
    firstInput.multiple = 'true';
    slideShowUpper.appendChild(firstInput);
    var getInput = document.getElementById('input');
    getInput.addEventListener('change', preview, false);


    //creates space for output
    var outPut = document.createElement('output');
    outPut.id = 'preview';
    slideShowUpper.appendChild(outPut);


    //create exit button for slideshow add div
    var createSlideShowExit = document.createElement('button');
    createSlideShowExit.innerHTML = '<i class="fa fa-times"></i>';
    createSlideShowExit.id = 'slideShowExit';
    createSlideShowExit.setAttribute('contenteditable', 'false');
    var getSlideShow = document.getElementById('slideShowEditorId');
    getSlideShow.appendChild(createSlideShowExit);
    var closeSlideShow = document.getElementById('slideShowExit');
    closeSlideShow.addEventListener('click', exitSlideShowModal);

    //creates pink next button to progress to next step
    var nextButton = document.createElement('button');
    nextButton.id = 'slideshowNext';
    nextButton.innerHTML = 'Upload Selected Images';
    slideShowEditor.appendChild(nextButton);
    console.log('child apended');

    //start ajax if next button is clicked
    var next = document.getElementById('slideshowNext');
    next.addEventListener('click', createSlideShowAjax);


}

function preview() {
    console.log('files uploaded');
    var fileList = this.files;
    console.log(fileList.length);
}



function exitSlideShowModal() {
  exitModal = document.getElementById('slideShowEditorId');
  exitModal.parentNode.removeChild(exitModal);
}
