var save_button = document.getElementById('save_resume_button');
save_button.addEventListener("click", saveCV);

var content_editable = document.getElementById('content_div');

/*
function saveCV() {
  console.log('save button clicked');

  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
   if (this.readyState === 4) {
     console.log('state === 4');

     content_editable.innerHTML = this.ResponseText;
   }
  };

  xhr.open('GET', 'save');
  //xhr.open('GET', '/user/dashboard'); works
  xhr.send();
}
*/


function saveCV() {
  console.log('save button clicked');

  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
   if (this.readyState === 4) {
     console.log('state === 4');

   }
  };

  xhr.open('POST', 'save/', true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
  //xhr.open('GET', '/user/dashboard'); works
  var data = 'testing data';
  xhr.send(content_editable.innerHTML);

}
