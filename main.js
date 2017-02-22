
  // function for centering Picture (couldn't figure out how to get boostrap to center vert)
  function  adjustPicturePadding () {   

        document.getElementById("pictureContainer").style.paddingTop =  "0px"; //set to 0 first to prevent bobbing
        var textContainer = document.getElementById("textContainer"); 
        height = textContainer.offsetHeight; //gets height of text box to the right

        var heightPic = document.getElementById("pictureContainer");
        var height2 = heightPic.offsetHeight; //gets height of picture
        
        var adjustedPadding = (height/2) - (height2/2); //eq for centering 

        document.getElementById("pictureContainer").style.paddingTop = adjustedPadding + "px";
  }
  // end centering function




$('document').ready( function () {
    
    adjustPicturePadding();
    window.onresize = adjustPicturePadding;
/* code from https://css-tricks.com/snippets/jquery/smooth-scrolling/ keeping it here till i can figure out how the hell it works

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
});
*/


});

