
  // function for centering Picture against neighboring col (couldn't figure out how to get boostrap to center vert)
function  adjustPicturePadding (target1, target2) {   //target 1 is colum  with picture to be centered, col 2 is neighboring
        target1.style.paddingTop =  "0px"; //set to 0 first to prevent bobbing
        target1.style.paddingTop = ((target2.offsetHeight/2) - (target1.offsetHeight/2)) + "px";
}
  // end centering function

function changeFolder (clickedFolder, folder1, folder2, folder3, folderTab1, folderTab2, folderTab3){
        if (clickedFolder.attr("data-folder") == "folder1Id") {
          folder1.style.zIndex = 70;
          folder2.style.zIndex = 30;
          folder3.style.zIndex = 20;
          folderTab1.style.zIndex= 65;
          folderTab2.style.zIndex= 25;
          folderTab2.style.zIndex= 15;
          
          // adds carousel pausing for faster page... still have to add ids of carousel 1 and 2 to this section and next section

           $('#carousel3').carousel('pause');

        } else if (clickedFolder.attr("data-folder") == "folder2Id") {
          folder1.style.zIndex = 30;
          folder2.style.zIndex = 70;
          folder3.style.zIndex = 20;
          $('#carousel3').carousel('pause');

        } else {
          folder1.style.zIndex = 30;
          folder2.style.zIndex = 20;
          folder3.style.zIndex = 70;
          $('#carousel3').carousel('cycle');
        };


}


$('document').ready( function () {

    // Caching

  //folder-tab selections
    var folder1 = document.getElementById("folder1Id");
    var folder2 = document.getElementById("folder2Id");
    var folder3 = document.getElementById("folder3Id");
    var folderTab1 = document.getElementById("folderBtn1");
    var folderTab2 = document.getElementById("folderBtn2");
    var folderTab3 = document.getElementById("folderBtn3");


    
  // picture centering 
    var target1 = document.getElementById("pictureContainer");
    var target2 = document.getElementById("textContainer"); 
  
    adjustPicturePadding(target1, target2); //initial centering
    function adjustPicturePaddingClone() { adjustPicturePadding(target1, target2); } // function reference clone to pass in to window.add... resizer
    window.addEventListener('resize', adjustPicturePaddingClone);
  // end picture centering

/* (learned!) profile section tab switching for carousel content */
  $("[id^=folderBtn").click(function() {
    var clickedFolder = $(this);
    changeFolder(clickedFolder, folder1, folder2, folder3);
  });


// smooth scrolling function (adapted from other code)
$(".navbarId").click(function(){  
    var target1= $(this.hash + '1');
    $('html, body').animate({scrollTop: target1.offset().top}, 700);

});


//fixes flicker problem with bootstrap navbar when trying to collapse navbar after click (large screen issue)
$(".navbarOption").click(function(){  
        if ($(document).width() > 767) {
            $(".navbarOption a").attr("data-toggle","");
        } else {
            $(".navbarOption a").attr("data-toggle","collapse");
        };
});


}); //end of document.ready

