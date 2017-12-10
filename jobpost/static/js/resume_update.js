//var bodyElement = document.getElementsByTagName("BODY")[0];
//bodyElement.addEventListener("onload", updateCV);
var cv_name = document.getElementById('cv_name_div');

window.onload = function() {
  console.log('body loaded, function to get object content');

  var xhrUpdate = new XMLHttpRequest();

  xhrUpdate.onreadystatechange = function() {
   if (this.readyState === 4) {
     console.log('state === 4, responding to update request');

     var data = xhrUpdate.response;
     var parsed = JSON.parse(data);
     console.log(parsed.content);
     content_editable.innerHTML = parsed.content;
     cv_name.innerHTML = parsed.name;
   }
  };

  xhrUpdate.open('GET', 'update',);
  xhrUpdate.send();

}
