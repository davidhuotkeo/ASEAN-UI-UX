$(document).ready(function(){
    $(window).scroll(function(){
        let dist = $('nav').offset().top;
        if(dist != 0){
            $('nav').css({'background-color': 'rgba(248, 247, 247, 0.9)'});
        } else {
            $('nav').css({'background-color': 'rgba(248, 247, 247, 1)'});
        }
    });
});