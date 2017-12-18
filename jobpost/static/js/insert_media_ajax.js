function startImageAjax() {

  var selectedFileList = document.querySelectorAll('input');

  selectedFileList.forEach( function ( element, index ) {
    element.addEventListener('change', sendAjax);
  })
}


function sendAjax() {

  var input = document.getElementById('file');
  var formData = new FormData();
  var file = input.files[0];
  formData.append('file', file);
  console.log(file);
  console.log(formData);
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
   if (this.readyState === 4) {
     console.log('state === 4, image sent');
     insertImageIntoContentDiv();


   }
  };

  xhr.open('POST', 'image_save/');
  var data = 'testing data';
  xhr.send(formData);

}

function insertImageIntoContentDiv(){
  console.log('image inserted into content editable!');
  var image = document.createElement('img');
  image.id = 'userImage';
  image.setAttribute('src', 'https://picsum.photos/200/300/?random');
  var main = document.getElementById('content_div');
  main.appendChild(image);

  var closeModal = document.getElementById('large_image_modal');
  closeModal.parentNode.removeChild(closeModal);


}
