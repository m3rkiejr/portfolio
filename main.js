
  // function for centering Picture against neighboring col (couldn't figure out how to get boostrap to center vert)
function  adjustPicturePadding (target1, target2) {   //target 1 is colum  with picture to be centered, col 2 is neighboring
        target1.style.paddingTop =  "0px"; //set to 0 first to prevent bobbing
        target1.style.paddingTop = ((target2.offsetHeight/2) - (target1.offsetHeight/2)) + "px";
}
  // end centering function

function changeFolder (currentFolder, clickedFolder){


}


$('document').ready( function () {
  
  // picture centering 
    var target1 = document.getElementById("pictureContainer");
    var target2 = document.getElementById("textContainer"); 
    adjustPicturePadding(target1, target2); //initial centering
    function adjustPicturePaddingClone() { adjustPicturePadding(target1, target2); } // function reference clone to pass in to window.add... resizer
    window.addEventListener('resize', adjustPicturePaddingClone);
  // end picture centering

/* need to learn regex to make this less redundant , js for bringing folder to front in profile section */
  $('#folderBtn1').click(function() {
      document.getElementById("folder1Id").style.zIndex = 70;
      document.getElementById("folder2Id").style.zIndex = 30;
      document.getElementById("folder3Id").style.zIndex = 20;
  });

  $('#folderBtn2').click(function() {
      document.getElementById("folder2Id").style.zIndex = 70;
      document.getElementById("folder1Id").style.zIndex = 30;
      document.getElementById("folder3Id").style.zIndex = 20;

  });

  $('#folderBtn3').click(function() {
      document.getElementById("folder3Id").style.zIndex = 70;
      document.getElementById("folder2Id").style.zIndex = 30;
      document.getElementById("folder1Id").style.zIndex = 20;
      document.getElementById("carousel3").style.display = "block";

  });



// smooth scrolling function (adapted from other code)
$(".navbarId").click(function(){  
    var target1= $(this.hash + '1');
    $('html, body').animate({scrollTop: target1.offset().top}, 700);

});


//fixes flicker problem with bootstrap navbar when trying to collapse navbar after click
$(".navbarOption").click(function(){  
        if ($(document).width() > 767) {
            $(".navbarOption a").attr("data-toggle","");
        } else {
            $(".navbarOption a").attr("data-toggle","collapse");
        };
});


});

