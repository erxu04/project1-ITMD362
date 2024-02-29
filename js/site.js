// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

function init(){
  var tcButton = document.getElementById("link");

  function myEvent(){
    alert("Surprise! There are no Terms & Conditions!");
  }

  tcButton.addEventListener("click", myEvent);
}

window.addEventListener('load', init)
