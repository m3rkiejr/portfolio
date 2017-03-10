
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
          // adds carousel pausing for faster page... still have to add ids of carousel 1 and 2 to this section and next section
           $('#carousel2').carousel('pause');
           $('#carousel3').carousel('pause');
           $('#carousel1').carousel('cycle');

        } else if (clickedFolder.attr("data-folder") == "folder2Id") {

          folder1.style.zIndex = 30;
          folder2.style.zIndex = 70;
          folder3.style.zIndex = 20;
          $('#carousel1').carousel('pause');
          $('#carousel3').carousel('pause');
          $('#carousel2').carousel('cycle');

        } else {

          folder1.style.zIndex = 30;
          folder2.style.zIndex = 20;
          folder3.style.zIndex = 70;
          $('#carousel1').carousel('pause');
          $('#carousel2').carousel('pause');
          $('#carousel3').carousel('cycle');
        };
        //$(("#" + clickedFolder.attr("data-folder"))).toggleClass("folder-animate");
}

function loadCarouselData () {
  var carouselRequest = new XMLHttpRequest();
  carouselRequest.open('GET', './carouselinfo.xml');
  carouselRequest.onload = function() {
    var carouselData = JSON.parse(carouselRequest.responseText);
    writeCarouselData(carouselData);

  };
  carouselRequest.send();

}

function writeCarouselData (data) {
  

  for (i = 0; i < 4; i++) {
    document.getElementById("carousel" + data[i].folderNumber + "Title").insertAdjacentHTML('beforeend', data[i].carouselTitle);
 
    $('#folder' + data[i].folderNumber + "Item1").attr('src', data[i].folderItem1);
    $('#folder' + data[i].folderNumber + "Item2").attr('src', data[i].folderItem2);
    $('#folder' + data[i].folderNumber + "Item3").attr('src', data[i].folderItem3);
    $('#folder' + data[i].folderNumber + "Item4").attr('src', data[i].folderItem4);
    $('#folder' + data[i].folderNumber + "SiteLink").attr('href', data[i].siteLink);   

  }

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
    
    //global variables
    var docWidth = $(document).width();

    // writeCarouselData reference pointer

//initialize carousels to be in paused state, except active carousel (based on document width)
 $('#carousel1').carousel('pause'); 
 $('#carousel2').carousel('pause');
 if (docWidth > 996) {
   $('#carouselSingle').carousel('pause')
 } else {
   $('carousel3').carousel('pause');
 };


    
  // picture centering for computer graphic
    var target1 = document.getElementById("pictureContainer");
    var target2 = document.getElementById("textContainer"); 
  
    adjustPicturePadding(target1, target2); //initial centering
    function adjustPicturePaddingClone() { adjustPicturePadding(target1, target2); } // function reference clone to pass in to window.add... resizer
    window.addEventListener('resize', adjustPicturePaddingClone);
  // end picture centering

/* (learned!) profile section tab switching for carousel content */
  $("[id^=folderBtn").click(function() {
    var clickedFolder = $(this);
    changeFolder(clickedFolder, folder1, folder2, folder3, folderTab1, folderTab2, folderTab3);
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

loadCarouselData();




}); //end of document.ready

