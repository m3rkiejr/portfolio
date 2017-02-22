
  // function for centering Picture (couldn't figure out how to get boostrap to center vert)
  function  adjustPicturePadding () {   

        document.getElementById("pictureContainer").style.paddingTop =  "0px"; //set to 0 first to prevent bobbing
        var textContainer = document.getElementById("textContainer"); 
        height = textContainer.offsetHeight; //gets height of text box to the right

        var heightPic = document.getElementById("pictureContainer");
        var height2 = heightPic.offsetHeight; //gets height of picture
        
        var adjustedPadding = (height * .5) - (height2 * .5); //eq for centering 

        document.getElementById("pictureContainer").style.paddingTop = adjustedPadding + "px";
  }
  // end centering function




$('document').ready( function () {
    
    adjustPicturePadding();
    window.onresize = adjustPicturePadding;

});

