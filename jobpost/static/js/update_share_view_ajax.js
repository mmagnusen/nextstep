var resumeShareDiv = document.getElementById('share_content_div');

window.onload = function() {

  var xhrShareUpdate = new XMLHttpRequest();

  xhrShareUpdate.onreadystatechange = function() {
   if (this.readyState === 4) {
     var data = xhrShareUpdate.response;
     var parsed = JSON.parse(data);
     resumeShareDiv.innerHTML = parsed.content;
   }
  };

  xhrShareUpdate.open('GET', 'populate',);
  xhrShareUpdate.send();

}
