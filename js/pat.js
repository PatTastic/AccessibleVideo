$('.toggle-video').click(function(){
    var elem = $('#video-container');
    if(elem.is(':hidden')){
        elem.fadeIn();
    }
    else{
        elem.fadeOut();
    }
});
