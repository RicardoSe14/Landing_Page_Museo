$("#barra").click(function(){
    $(".esconder").slideToggle(100);
  });


  $(".boton1").click(function(){
    $(".a2024").show(0);
  });

  $(".boton1").click(function(){
    $(".a2019, .a2014, .a2009, .a2004").hide(0);
  });

  $(".boton2").click(function(){
    $(".a2019").show(0);
  });

  $(".boton2").click(function(){
    $(".a2024, .a2014, .a2009, .a2004").hide(0);
  });

  $(".boton3").click(function(){
    $(".a2014").show(0);
  });

  $(".boton3").click(function(){
    $(".a2024, .a2019, .a2009, .a2004").hide(0);
  });

  $(".boton4").click(function(){
    $(".a2009").show(0);
  });

  $(".boton4").click(function(){
    $(".a2024, .a2019, .a2014, .a2004").hide(0);
  });

  $(".boton5").click(function(){
    $(".a2004").show(0);
  });

  $(".boton5").click(function(){
    $(".a2024, .a2019, .a2009, .a2014").hide(0);
  });


  $(".boton0").click(function(){
    $(".a2024, .a2019, .a2009, .a2004, .a2014").show(0);
  });

  $(document).on("scroll", function() {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $(".tag");
  
    for (var i = 0; i < tags.length; i++) {
      var tag = tags[i];
  
      if ($(tag).position().top < pageBottom) {
        $(tag).addClass("visible");
      } else {
        $(tag).removeClass("visible");
      }
    }
  });


  $(function () { 
    $(window).scroll(function () {
        if ($(this).scrollTop() > 70) { 
            $('.logo2').css("font-size","30px");
        }
        if ($(this).scrollTop() < 70) { 
            $('.logo2').css("font-size","50px");
        }
    })
});