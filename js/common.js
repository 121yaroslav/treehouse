

function openMenu() {
  if($('.up-menu').hasClass("up-menu-opened") && $('.up-menu ul').hasClass("ul-opened")){
    $('.up-menu').removeClass("up-menu-opened");
    $('.up-menu ul').removeClass("ul-opened");
    $('.logo').removeClass("logoMenuOpen");	
     $('.ivl').removeClass('interval');
  }
  else {
    $('.up-menu').addClass("up-menu-opened");
    $('.up-menu ul').addClass("ul-opened");
    $('.logo').addClass("logoMenuOpen");
    $('.ivl').addClass('interval');

  }
 }



/*button icon changing*/
function changeIcon(){
  if($('button i').hasClass('fa-bars')){
    $('button i').removeClass('fa-bars');
    $('button i').addClass('fa-times');
  }
  else {
  	$('button i').removeClass('fa-times');
    $('button i').addClass('fa-bars');
  }
}

$(document).ready(function(){
        $(window).scroll(function(){
          var heightt = $(this).scrollTop();
            if (heightt >= 50){
              $('.default-menu').addClass("transparent");
            } 
             if(heightt <= 100 && $('.default-menu').hasClass("transparent")) {
               $('.default-menu').removeClass("transparent")
             }
        });//scroll
});//jQuery

/*__Lighting_link_On_Current_Block___*/
  $(window).scroll(function() {
    var heightt = $(document).scrollTop() + 2;
    var home = $("#home").height(); 
    var about = home + $("#about").height();
    var blog = about + $('#blog').height();
    var portfolio = blog + $('#portfolio').height();
    var portfolioComents = portfolio + ($('.fifth-block').height())/1.4;
    var contactUs = portfolio + $('.fifth-block').height() + $('.sixth-block').height() + $('.empty-section').height(); 

    if(heightt > home){
      $('.home').removeClass('active-a');
      $('.about').addClass('active-a');
    } else if(heightt < home){
      $('.about').removeClass('active-a');
      $('.home').addClass('active-a');
    }
    if(heightt > about){
      $('.about').removeClass('active-a');
      $('.blog').addClass('active-a');
    } else if(heightt < about){
      $('.blog').removeClass('active-a');
    }
    if(heightt > blog){
      $('.portfolio').addClass('active-a');
      $('.blog').removeClass('active-a');
    } else if(heightt < blog){
      $('.portfolio').removeClass('active-a');
    }
    if(heightt >= contactUs){
      $('.contact').addClass('active-a');
      $('.portfolio').removeClass('active-a');
    } else if(heightt < contactUs){
      $('.contact').removeClass('active-a');
    }

    /*__Portfolio_Coments_Slide_Up__*/
    if(heightt > portfolioComents) {
      $('.first-post').addClass('first-post-slide-up');
      $('.second-post').addClass('second-post-slide-up');
    }
  });

/*__Arrow_Changing_*/
  $(document).ready(function(){
       $arrow = $('.someP a img'); 
       $arrow.hover(
            function(){
        $(this).removeAttr('src').attr('src','img/arrow-black.png');
            
            });//hover
       });




/*__3D_Button__Contact-Us_*/
$('#flipto').on("click", function(event) {
  event.preventDefault();
  
  var face = $(this).data("face");
  
  if ( face == "bottom" ) {
    $(".cube").removeClass("flip-to-top").addClass("flip-to-bottom");
    $(this).data("face", "top").text("Flip: to top");
  } else {
    $(".cube").removeClass("flip-to-bottom").addClass("flip-to-top");
    $(this).data("face", "bottom").text("Flip: to bottom");
  }
});