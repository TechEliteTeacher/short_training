$(function(){
    $('.service').click(function(){
        let id = $(this).attr('id');
        $(".service").removeClass("active");
        $(this).addClass("active");
        $(".description_text").removeClass("active");
        $("#"+id+"_text").addClass("active");
    });
})

$(function(){
  $('a[href^="#"]').click(function(){
    var adjust = 0;
    var speed = 400;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top + adjust;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});