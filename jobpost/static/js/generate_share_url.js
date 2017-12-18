var anchor = document.getElementById('resume_menu');

function generateShareUrl() {

console.log('share url generating');
var showUrl = document.createElement('div');
var urlNode = document.createTextNode('');
showUrl.appendChild(urlNode);

showUrl.style.display = 'block';
showUrl.style.margin='7px';
showUrl.id = 'shareUrlId';
showUrl.style.left = '500px';
showUrl.style.top = '200px';
anchor.appendChild(showUrl);

var createRef = document.createElement('a');
var t = document.createTextNode("Follow Share URL");
createRef.appendChild(t);
console.log(createRef);
var urlStart = 'http://127.0.0.1:8000/resume/resume/';
var urlMiddle = document.getElementById('share_url_div').textContent;
var urlEnd = '/share/';
var raw = urlStart + urlMiddle + urlEnd;
var rawToString = raw.toString();
var fullShareUrl = rawToString.replace(/\s/g,'')
console.log(fullShareUrl);
createRef.setAttribute('href', fullShareUrl );
showUrl.appendChild(createRef);

var createUrlTextArea = document.createElement("input");
var p = document.createTextNode("");
createUrlTextArea.appendChild(p);
createUrlTextArea.setAttribute('href', fullShareUrl );
createUrlTextArea.id = 'share_text'
createUrlTextArea.value = fullShareUrl;
showUrl.appendChild(createUrlTextArea);

var createShareExit = document.createElement('button');
var exitShareNode = document.createTextNode("X");
createShareExit.appendChild(exitShareNode);
createShareExit.style.width = '50px';
createShareExit.style.height = '50px';
createShareExit.style.backgroundColor = 'white';
createShareExit.style.borderRadius = '30px';
createShareExit.style.display = 'inline';
createShareExit.innerHTML = '<i class="fa fa-times-circle"></i>';
createShareExit.id = 'exitShare';
createShareExit.style.left = '40px';
createShareExit.style.top = '-50px';
createShareExit.style.position = 'relative';
showUrl.appendChild(createShareExit);

createShareExit.addEventListener('click', closeAll)
}

function closeAll() {
  var exitShare = document.getElementById('shareUrlId');
  exitShare.parentNode.removeChild(exitShare);
  var exitExit = document.getElementById('newMenu');
  exitExit.parentNode.removeChild(exitExit);
}
