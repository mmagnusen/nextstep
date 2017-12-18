///this file has two purposes:
/// to create an exit dropdown when the horizontal ellipses is clicked
//return to returnToDashboard
///save cv

var resume_ellipses = document.getElementById('return_to_dashboard');
var resume_menu = document.getElementById('resume_menu');
resume_ellipses.addEventListener('click', createOrHideMenu);

function createOrHideMenu() {
  if(document.getElementById('newMenu')) {
    removeExitMenu()
  } else {
    createMenu()
    }

}

function createMenu() {
var createMenu = document.createElement("div");
var node = document.createTextNode("");
createMenu.appendChild(node);

createMenu.style.display = 'block';
createMenu.style.width ='270px';
createMenu.style.height ='100px';
createMenu.style.margin ='7px';
createMenu.id = 'newMenu';
createMenu.style.left = '1120px';
createMenu.style.top = '100px';
resume_menu.appendChild(createMenu);

var createMenuOne = document.createElement('div');
var nodeOne = document.createTextNode("");
createMenuOne.innerHTML = '<a href="/user/dashboard/"><p>Exit and return to dashboard</p></a>'
createMenuOne.appendChild(nodeOne);

createMenuOne.style.display = 'block';
createMenuOne.style.width='250px';
createMenuOne.style.height='40px';
createMenuOne.style.margin='7px';
createMenuOne.id = 'createMenuOneID';
createMenuOne.style.left = '500px';
createMenuOne.style.top = '100px';
createMenu.appendChild(createMenuOne);


var createMenuTwo = document.createElement('div');
var nodeTwo = document.createTextNode("Save Resume");
createMenuTwo.appendChild(nodeTwo);

createMenuTwo.style.display = 'block';
createMenuTwo.style.width='250px';
createMenuTwo.style.height='40px';
createMenuTwo.style.margin='7px';
createMenuTwo.id = 'createMenuTwoID';
createMenuTwo.style.left = '500px';
createMenuTwo.style.top = '100px';
createMenu.appendChild(createMenuTwo);

var createMenuThree = document.createElement('div');
var getName = document.getElementById('cv_name_div').innerHTML;
var nodeThree = document.createTextNode(getName);
createMenuThree.appendChild(nodeThree);

createMenuThree.style.display = 'block';
createMenuThree.style.width='250px';
createMenuThree.style.height='40px';
createMenuThree.style.margin='7px';
createMenuThree.id = 'createMenuThreeID';
createMenuThree.style.left = '500px';
createMenuThree.style.top = '100px';
createMenu.appendChild(createMenuThree);

var createMenuFour = document.createElement('div');
var nodeFour = document.createTextNode("View Share URL");
createMenuFour.appendChild(nodeFour);

createMenuFour.style.display = 'block';
createMenuFour.style.width='250px';
createMenuFour.style.height='40px';
createMenuFour.style.margin='7px';
createMenuFour.id = 'createMenuFourID';
createMenuFour.style.left = '500px';
createMenuFour.style.top = '100px';

createMenu.appendChild(createMenuFour);

var resumeOne = document.getElementById('createMenuOneID');
var resumeTwo = document.getElementById('createMenuTwoID');
var resumeThree = document.getElementById('createMenuThreeID');
var resumeFour = document.getElementById('createMenuFourID');


resumeOne.addEventListener('click', returnToDashboard);
resumeTwo.addEventListener('click', saveCV);
resumeFour.addEventListener('click', generateShareUrl);
}



function removeExitMenu() {
    var exitMenu = document.getElementById('newMenu');
    exitMenu.parentNode.removeChild(exitMenu);
      }

function returnToDashboard() {}
