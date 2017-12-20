
$(document).ready(function() {

$('#left').hover(function(){
    $('#celine').toggleClass('celine-hover');
  });

$('#left').hover(function(){
    $('#celine-euzen').toggleClass('celine-euzen-hover');
  });

$('#left').hover(function(){
    $('.celine-euzen-bis').toggleClass('celine-euzen-bis-hover');
  });


$('#left').hover(function(){
  $('.bande-blanche-middle-left').toggleClass("bande-blanche-middle-left-hover");
  });

$('#right').hover(function(){
  $('.bande-blanche-middle-right').toggleClass("bande-blanche-middle-right-hover");
  });

$('#left').hover(function(){
  $('.a1').toggleClass("opacity-1");
  });

$('#left').hover(function(){
  $('.a2').toggleClass("opacity-1");
  });

$('#left').hover(function(){
  $('.a3').toggleClass("opacity-1");
  });

$('#right').hover(function(){
  $('.a4').toggleClass("opacity-1");
  });

$('#right').hover(function(){
  $('.a5').toggleClass("opacity-1");
  });

// $('#left').hover(function(){
//     $('#realisations').toggleClass('realisations-hover');
//   });

// $('#right').hover(function(){
//   $('#a-propos').toggleClass("a-propos-hover");
//   });

});

$(document).ready(function() {
var pictures = [
        "https://img15.hostingpics.net/pics/899173background6.jpg",
        "https://img15.hostingpics.net/pics/621165background7.jpg",
        "https://img15.hostingpics.net/pics/943212background8.jpg",

    ];
    var img = document.getElementById("image-full");
    var currentIndex = 0;
    var slideshowTimer;

    (function nextImg(){
        slideshowTimer = Date.now();
        img.src=pictures[currentIndex];
        img.onload=function(){
            currentIndex = (currentIndex + 1) % pictures.length;
            var remainingTime = 4000 - (Date.now() - slideshowTimer);
            if(remainingTime>0){ setTimeout(nextImg, remainingTime); }
            else { nextImg(); }
        };
    })();

    });
