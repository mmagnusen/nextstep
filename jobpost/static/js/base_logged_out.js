var ham = document.getElementById('ham');
var innerHeader = document.getElementById('outer_header');
var title = document.getElementById('title');
ham.addEventListener('click', rotateBurger);

function rotateBurger() {
  var isItOpen = document.getElementsByClassName('open');
  if (isItOpen.length === 0) {
  var top = document.getElementById('top');
  top.id = 'top1';

  var middle = document.getElementById('middle');
  middle.id = 'middle2';

  var bottom = document.getElementById('bottom');
  bottom.id = 'bottom3';
  ham.classList.add('open');
  openMenu();

} else {

  var top = document.getElementById('top1');
  top.id = 'top';

  var middle = document.getElementById('middle2');
  middle.id = 'middle';

  var bottom = document.getElementById('bottom3');
  bottom.id = 'bottom';
  ham.classList.remove('open');
  closeMenu();
  }

}

function openMenu() {
  var mobileMenu = document.createElement('div');
  var nodeOne = document.createTextNode("");
  mobileMenu.appendChild(nodeOne);
  innerHeader.appendChild(mobileMenu);

  mobileMenu.id = 'mobileMenu';

  var addStuff = document.getElementById('mobileMenu');

  var empty = document.createElement('div');
  var nodeTest = document.createTextNode("");
  empty.appendChild(nodeTest);
  addStuff.appendChild(empty);
  empty.style.height = '45px';

  var jobs = document.createElement('div');
  jobs.innerHTML = '<a href="/jobs"><div class="large">Jobs</div></a>';
  addStuff.appendChild(jobs);
  jobs.classList.add('burger-item');

  var blog = document.createElement('div');
  blog.innerHTML = '<a href="https://medium.com/@NextStepCoders" target="blank"><div class="large">Blog</div></a>';
  addStuff.appendChild(blog);
  blog.classList.add('burger-item');

  var register = document.createElement('div');
  register.innerHTML = "<a href='/user/register'><div class='large'>Register</div></a>";
  addStuff.appendChild(register);
  register.classList.add('burger-item');

  var login = document.createElement('div');
  login.innerHTML = "<a href='/login'><div class='large'>Login</div></a>";
  addStuff.appendChild(login);
  login.classList.add('burger-item');

}

function closeMenu() {
  var menu = document.getElementById('mobileMenu');
  innerHeader.removeChild(menu);
}
