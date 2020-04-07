$(document).ready(function(){


    $(".first-icon").click(function()
    {
    
        $(this).toggleClass('fa-bars').toggleClass('fa-close')
    })
    $(".first-icon").click(function(){
        if($(this).hasClass("fa-close"))
         {
            $(".nav1").slideDown();
            
         }
         else{
            $(".nav1").slideUp();
     
     
         }
     })
     
   /*add stiky to navbar */
   $(window).scroll(function(){
       var sc=$(this).scrollTop();
       if(sc>100)
       {
           $(".header").addClass("sticky");
           $(".nav1").addClass("WOW Animated fadeInDown")
       }
       else{
        $(".header").removeClass("sticky")
       }
   })
   /*fire counter up plugin */
   $('.counter').counterUp({
    delay: 10,
    time: 2000
});
/*fire mixitup plugin */

var mixer = mixitup('.recent-body',{
    animation:{
        effectsOut : 'fade scaleX(-100%)'
    }
})

$(".recent-flex button").click(function(){
    $(".recent-flex button").removeClass("active");
    $(this).addClass("active"); 
})

/**fire round owelcarousal plugin */
$('.owl-carousel1').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    
  autoplay: true,
  autoplaySpeed: 6000,
    responsive:{
        0:{
            items:1,
            nav:true,
            loop:true
        },
        600:{
            items:3,
            nav:true,
            loop:true
        },
        1000:{
            items:3,
            nav:true,
            loop:true
        }
    }
})

$('.slick').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    
    responsive:{
        0:{
            items:1,
            nav:true,
            loop:true
        },
        600:{
            items:1,
            nav:true,
            loop:true
        },
        1000:{
            items:1,
            nav:true,
            loop:true
        }
    }
})
$("input").focus(function(){
    
    $(this).css({
        "borderColor":"#7AA72C"
    })
})
$("input").blur(function(){
    
    $(this).css({
        "borderColor":"#ddd"
    })
})
/**fire round owelcarousal plugin  
   
   */

/*choose us section */
$(".first-c").click(function(){
    $(".first-article").slideDown(500);
    
    $(".second-article").slideUp(500);
    
    $(".third-article").slideUp(500);
})
$(".second-c").click(function(){
    $(".second-article").slideDown(500);
    
    $(".first-article").slideUp(500);
    
    $(".third-article").slideUp(500);
})
$(".third-c").click(function(){
    $(".third-article").slideDown(500);
    
    $(".second-article").slideUp(500);
    
    $(".first-article").slideUp(500);
})
$(".first-c , .second-c , .third-c").click(function(){
    $(this).addClass("active").siblings().removeClass("active")
});

/**popup fire */
$('.pop').magnificPopup({
        type: 'iframe'
    // other options
  });
/**fire slick plugin */



 

});/*global console*/
var mydiv = document.getElementById("hour1");
window.onload = function ()
{  
    "use strict";
    setInterval(function(){
                var now=new Date();
                var myours=now.getHours();
                var myminutes=now.getMinutes();
                var myseconds=now.getSeconds();
         if(myours < 10 )
                    {
                      myours = '0'+ myours;
                    }
                 if(myminutes < 10 )
                    {
                       myminutes = '0'+ myminutes;
                    }
                   if(myseconds < 10 )
                    {
                      myseconds = '0'+ myseconds;
                    }
                document.getElementById("hour").textContent = myours;
                document.getElementById("munites").textContent = myminutes;
                document.getElementById("second").textContent = myseconds;
             
               
               } , 200);
};
 /*to top button*/
 var mybutton = document.getElementById("myBtn");

 // When the user scrolls down 20px from the top of the document, show the button
 window.onscroll = function() {scrollFunction()};
 
 function scrollFunction() {
   if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
     mybutton.style.display = "block";
   } else {
     mybutton.style.display = "none";
   }
 }
 
 // When the user clicks on the button, scroll to the top of the document
 function topFunction() {
     
     $("html,body").animate({scrollTop:0},'500')
 }
 