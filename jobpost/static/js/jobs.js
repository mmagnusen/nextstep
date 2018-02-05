var searchDropDown = document.getElementById('title-with-arrow');
searchDropDown.addEventListener('click', dropDown, false);
var searchForm = document.getElementById('search_form');

function dropDown() {
  var openAreas = document.getElementsByClassName('open-areas');
  if ( openAreas.length === 0 ) {
      searchForm.classList.add('open-areas');
      searchForm.style.height = "600px";

      var searchBody = document.getElementsByClassName('search-area');
      for (var i = 0; i < searchBody.length; i++) {
        searchBody[i].style.display = 'grid';
      }
  } else {
      searchForm.classList.remove('open-areas');
      searchForm.style.height = "100px";
      var searchBody = document.getElementsByClassName('search-area');
      for (var i = 0; i < searchBody.length; i++) {
        searchBody[i].style.display = 'none';
      }
  }
}
