$(".burger").click(function(){
    $('.mobile').slideToggle('slow',function (){
            $(".burger").hide()
            $(".burger1").show()
    });
  })
  $(".burger1").click(function(){
    $('.mobile').slideToggle('slow',function (){
            $(".burger").show()
            $(".burger1").hide()
    });
  })
  $(".ph_tel").click(function(){
    $(".right_menu").css("width", "310px");

    $('.tel_ph').slideToggle('1000',function (){
            $(".ph_tel").hide()
          
          
    });
  })
  $(".close_x").click(function(){
    $(".right_menu").css("width", "247px");
           
            $(".tel_ph").hide('1000')
            $(".ph_tel").show('1000')
  
  })

  $(".ph_tel_mobile").click(function(){
    $(".right_menu").css("width", "310px");


    $('.tel_ph_mobile').slideToggle('1000',function (){
      $(".right_menu").css("width", "247px");

            $(".ph_tel_mobile").hide()
          
          
    });
  })
  $(".close_x_mobile").click(function(){

            $(".tel_ph_mobile").hide('1000')
            $(".ph_tel_mobile").show('1000')
  
  })



  $(".open").click(function(){ 

    $(".mobile_open").slideToggle()

  })
  $(".open1").click(function(){ 

    $(".mobile_open1").slideToggle()

  })
  $(".open2").click(function(){ 

    $(".mobile_open2").slideToggle()

  })
  $( ".menu_mobile .prefent" ).click(function( event ) {
    event.preventDefault();
    
  });
  $( ".add_to_cart" ).click(function( event ) {
    event.preventDefault();
    
  });


  var swiper = new Swiper('.swiper-container', {
    spaceBetween: 60,
    slidesPerView: 6,
    centeredSlides: true,
    loop: true,
    autoplay: true,
  
    breakpoints: {
      600: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      '@0.75': {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      '@1.00': {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      '@1.50': {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    }
  });


  if($(window).width() < 710){
    $(".img1 img").attr("src", "img/Rectangle_iphone.png");
    $(".img2 img").attr("src", "img/Rectangle11_iphone.png");
    $(".img3 img").attr("src", "img/Rectangle12_iphone.png");
    $(".img4 img").attr("src", "img/Rectangle13_iphone.png");
    $(".img5 img").attr("src", "img/Rectangle21_iphone.png");
  }
  


    
  var  count = 0.5
  $(".plus").click(function(){ 
      count= count + 0.5;
      $(".cost").html(count)
 });

 $(".minus").click(function(){ 
  count-=0.05;
  $(".cost").html(count)
});
$(".cart_content").hide();
$(".add_to_cart").click(function(){
  $(".cart_content").hide(0).delay(.300).show(0);
  $(".cart_content").show(0).delay(3000).hide(0);
 
})

var thumbs = $(".icon-images").find("img");
 
$(".video").click(function() {
 console.log('a');
  $(".display-img").hide();
  $(".display-video").show();
});
  

thumbs.click(function() {
  $(".display-video").hide();
  $(".display-img").show();

var src = $(this).attr("src");
var dp = $(".display-img");
 dp.attr("data-image", src);
 $(".ph").attr("src",src);

});


$('.tile')
// tile mouse actions
.on('mouseover', function(){
  $(this).children('.photo').css({'transform': 'scale('+ $(this).attr('data-scale') +')'});
})
.on('mouseout', function(){
  $(this).children('.photo').css({'transform': 'scale(1)'});
})
.on('mousemove', function(e){
  $(this).children('.photo').css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +'%'});
})

