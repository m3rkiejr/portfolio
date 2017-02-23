
  // function for centering Picture against neighboring col (couldn't figure out how to get boostrap to center vert)
  function  adjustPicturePadding (target1, target2) {   //target 1 is colum  with picture to be centered, col 2 is neighboring
        target1.style.paddingTop =  "0px"; //set to 0 first to prevent bobbing
        target1.style.paddingTop = ((target2.offsetHeight/2) - (target1.offsetHeight/2)) + "px";
  }
  // end centering function

$('document').ready( function () {
  
    var target1 = document.getElementById("pictureContainer");
    var target2 = document.getElementById("textContainer"); 
   
    adjustPicturePadding(target1, target2);
    function adjustPicturePaddingClone() { adjustPicturePadding(target1, target2); } //resize event listener wont take arguments
    window.addEventListener('resize', adjustPicturePaddingClone);

/*
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});*/




});

