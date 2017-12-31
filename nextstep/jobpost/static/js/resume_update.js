//var bodyElement = document.getElementsByTagName("BODY")[0];
//bodyElement.addEventListener("onload", updateCV);
var cv_name = document.getElementById('cv_name_div');
var share_url = document.getElementById('share_url_div');
var content_editable = document.getElementById('content_div');

window.onload = function() {

  var xhrUpdate = new XMLHttpRequest();

  xhrUpdate.onreadystatechange = function() {
   if (this.readyState === 4) {

     var data = xhrUpdate.response;
     var parsed = JSON.parse(data);
     cv_name.innerHTML = parsed.name;
     share_url.innerHTML = parsed.url;
     content_editable.innerHTML = parsed.content;
   }
  };

  xhrUpdate.open('GET', 'update',);
  xhrUpdate.send();

}
