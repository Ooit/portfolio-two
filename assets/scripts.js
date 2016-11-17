$(function() {

    window.onbeforeunload = function(){
        window.scrollTo(0,0);
    }

    var meter_class = ["drums", "hockey", "games", "tech"]

    $(window).scroll(function() {
        console.log($(this).scrollTop());
        if($(this).scrollTop() >= 300)
            $(".meter-fill").each(function (i) {
                $(this).addClass(meter_class[i]);
            });
    });
});
