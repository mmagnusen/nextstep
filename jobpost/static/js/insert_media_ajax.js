function startImageAjax() {

  var selectedFileList = document.querySelectorAll('input');

  selectedFileList.forEach( function ( element, index ) {
    element.addEventListener('change', sendAjax);
  })
}


function sendAjax() {

  console.log('sending ajax');
  //debugger;
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
     var newNode = document.createElement('button');
     var parentNode  document.createRange();

     parentNode.insertBefore(newNode, );

   }
  };

  xhr.open('POST', 'image_save/');
  var data = 'testing data';
  xhr.send(formData);

}
