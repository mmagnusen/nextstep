<script type="text/javascript" src="{% static 'js/content.js' %}" ></script>
<script type="text/javascript" src="{% static 'js/resume_save.js' %}" ></script>
<script type="text/javascript" src="{% static 'js/resume_update.js' %}" ></script>

var testSelector = document.querySelectorAll('.imageButtonClasss');
testSelector.forEach( function( element, index ) {
      console.log(element);

      if (index === 0) {
        testSelector[0].addEventListener("click", function() {console.log('clcked')});
          }
      }
  )
