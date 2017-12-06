function field_focus(field, input)
  {
    if(field.value == input)
    {
      field.value = '';
    }
  }

  function field_blur(field, input)
  {
    if(field.value === '')
    {
      field.value = input;
    }
  }

//Fade in dashboard box
$(document).ready(function(){
    $('.box').hide().fadeIn(1000);
    });

//Stop click event
$('a').click(function(event){
    event.preventDefault(); 
	});