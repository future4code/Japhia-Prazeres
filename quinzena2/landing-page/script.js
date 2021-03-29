 $(document).ready(function(){
     $(window).scroll(function(){
         if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
         }else{ 
             $('.navbar').removeClass("sticky");
         }
     });

    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });


    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing texto animado
    var typed = new Typed(".typing", {
        strings: ["Sua Mesa.", "Sua Casa.", "Você!"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


});