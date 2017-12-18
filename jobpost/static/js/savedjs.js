
var testSelector = document.querySelectorAll('.imageButtonClasss');
testSelector.forEach( function( element, index ) {
      console.log(element);

      if (index === 0) {
        testSelector[0].addEventListener("click", function() {console.log('clcked')});
          }
      }
  )

  if (document.caretPositionFromPoint) {
      range = document.caretPositionFromPoint(e.clientX, e.clientY);
      textNode = range.offsetNode;
      offset = range.offset;


    } else if (document.caretRangeFromPoint) {
      range = document.caretRangeFromPoint(e.clientX, e.clientY);
      textNode = range.startContainer;
      offset = range.startOffset;
    }
  }

  //////// if image hover isn't showing, creates it and vice versa
  var modalChildren = document.getElementsByClassName('imageClass');
  function checkForExistingModal() {
    if (!modalChildren.length) {
      createModal();
    }   else {

      }
    }

  ///////// creates imagehover

  


    //loops through mediaArray, creates a button for each item and
    //appends it to the hover
        for (var imagePic in mediaArray) {
          var createButton = document.createElement('button');
          var node = document.createTextNode("T.");
          createButton.appendChild(node);
          createButton.style.display = 'inline'
          createButton.style.width='50px';
          createButton.style.height='50px';
          createButton.style.margin='7px';
          createButton.style.backgroundColor = 'white';
          createButton.innerHTML = mediaArray[0];
          createButton.className = 'imageButtonClass';
          newModal.appendChild(createButton);
          }


      var getImageButton = document.querySelectorAll('.imageButtonClass');
      getImageButton.forEach( function( element, index ) {


            if (index === 0) {
              element.addEventListener("click", createInput);
                }
            }
        )
  }

  ////////// creates input element
  function createInput() {
  console.log('event listener working');
  }

  ////////// hides image hover
  function hideImageHover() {
      var rangeOfImageHovers = document.getElementsByClassName('imageClass');
    //  rangeOfToolTips[0].remove();
      for(var i=0; i < rangeOfImageHovers.length; i++) {
      rangeOfImageHovers[i].remove();
        }
      }

      //////// array of images in image hover
      const mediaArray = [
      '<i class="fa fa-picture-o"></i>',
      ]
