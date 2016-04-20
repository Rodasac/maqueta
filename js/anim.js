$(document).ready(function () {
    var win = $(window);
    var pos = 200;
    win.scroll(function () {
        if (win.scrollTop() > pos){
            $('nav').removeClass('barra-nav').addClass('barra-nav-all');
            $('.row:first > div').removeClass('col-lg-12 col-md-12 col-sm-12 col-xs-12', 800, "easeInOutBack");
            $('.row:first > div').addClass('col-lg-offset-1 col-md-offset-1 col-lg-10 col-md-10 col-sm-10 col-xs-10', 500, "easeInOutBack");
        }
        else {
            $('nav').removeClass('barra-nav-all').addClass('barra-nav');
            $('.row:first > div').removeClass('col-lg-offset-1 col-md-offset-1 col-lg-10 col-md-10 col-sm-10 col-xs-10', 800, "easeInOutBack");
            $('.row:first > div').addClass('col-lg-12 col-md-12 col-sm-12 col-xs-12', 500, "easeInOutBack");
        }
    });
    if (window.position) {

    }
});
