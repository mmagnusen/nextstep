function startImageAjax() {

  var selectedFileList = document.querySelectorAll('input');

  selectedFileList.forEach( function ( element, index ) {
    console.log('for each activated');
    element.addEventListener('change', sendAjax);
  })
}


function sendAjax() {

  console.log('sending ajax');
  var input = document.getElementById('inputFieldID');
  var file = input.files[0];
  var formData = new FormData();
  formData.append('file', file);
  console.log(file);
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
   if (this.readyState === 4) {
     console.log('state === 4, image sent');
   }
  };

  xhr.open('POST', 'image_save/', true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
  //xhr.open('GET', '/user/dashboard'); works
  var data = 'testing data';
  xhr.send(formData);

}
