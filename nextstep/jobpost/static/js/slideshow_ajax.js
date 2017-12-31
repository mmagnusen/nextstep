var slideShowPK;

function createSlideShowAjax() {

  var xhrCreate = new XMLHttpRequest();

  xhrCreate.onreadystatechange = function() {
    if (this.readyState === 4) {

      var data = xhrCreate.response;
      var parsed = JSON.parse(data);
      slideshowPK = parsed.slideshowPK;
      sendImages();
    }
  }

  xhrCreate.open('POST', 'create_slide_show/');
  xhrCreate.send();
}


function sendImages() {
  console.log('now going to send images');
  var input = document.getElementById('input');
  var formData = new FormData();
  var files = input.files;


  var xhrSlideShowImages = new XMLHttpRequest;
  xhrSlideShowImages.onreadystatechange = function() {
    if (this.readyState === 4) {
        createSlideShow();

    }
  }
  xhrSlideShowImages.open('POST', 'unpack_images/');
  xhrSlideShowImages.send(formData);
}



function createSlideShow() {

  var newSlideshowDiv = document.createElement('img');
  var main = document.getElementById('content_div');
  main.appendChild(newSlideshowDiv);
}
