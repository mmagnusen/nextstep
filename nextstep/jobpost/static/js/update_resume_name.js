function saveResumeNameS() {
  console.log('sending ajax to save name');

  var nameDiv = document.getElementById('cv_name_div');
  var newName = nameDiv.textContent;
  console.log(newName);

  var sendNameXHR = new XMLHttpRequest();
sendNameXHR.onreadystatechange = function() {
  if (this.readyState === 4) {
  
  }
}
  sendNameXHR.open('POST', 'save_name/');
  sendNameXHR.send(newName);
}
