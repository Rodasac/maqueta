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

/* Navegación */
			[].slice.call( document.querySelectorAll( '.dotstyle > ul' ) ).forEach( function( nav ) {
				new DotNav( nav, {
					callback : function( idx ) {
						var c = document.getElementById("dotsa").children;
                        var elem = c[idx].children[0];
                        var urlID = $(elem).attr('href');
                        $('html, body').animate({
                            scrollTop: $(urlID).offset().top -100
                        }, 2000);
					}
				} );
			} );
            
            
            $("div").mouseover(function(e){
                
                if(e.currentTarget.id == "present" || e.currentTarget.id == "quienes" || e.currentTarget.id == "servi" || 
                e.currentTarget.id == "tech" || e.currentTarget.id == "contacto") {
                    if(e.currentTarget.id == "present"){
                        $("#nHome").siblings("li").removeClass("current");
                        $("#nHome").addClass("current");
                    }
                    else if(e.currentTarget.id == "quienes"){
                        $("#nWe").siblings("li").removeClass("current");
                        $("#nWe").addClass("current");
                    }
                    else if(e.currentTarget.id == "servi"){
                        $("#nServi").siblings("li").removeClass("current");
                        $("#nServi").addClass("current");
                    }
                    else if(e.currentTarget.id == "tech"){
                        $("#nTech").siblings("li").removeClass("current");
                        $("#nTech").addClass("current");
                    }
                    else if(e.currentTarget.id == "contacto"){
                        $("#nCont").siblings("li").removeClass("current");
                        $("#nCont").addClass("current");
                    }
                }
            });
            
            /* Quienes Somos */
            
            
            $(".img1").mouseover(function(e){
                console.log(e.currentTarget.id);
                $(e.currentTarget).removeClass("bounceIn");
                $(e.currentTarget).siblings(".img2").removeClass("zoomOut");
                $(e.currentTarget).addClass("zoomOut");
                setTimeout(function(){$(e.currentTarget).addClass("hidden");}, 1000);
                setTimeout(function(){$(e.currentTarget).siblings(".img2").removeClass("hidden");}, 1000);
                $(e.currentTarget).siblings(".img2").addClass("bounceIn");
            });
            $(".img2").mouseleave(function(e){
                $(e.currentTarget).removeClass("bounceIn");
                $(e.currentTarget).siblings(".img1").removeClass("zoomOut");
                $(e.currentTarget).addClass("zoomOut");
                setTimeout(function(){$(e.currentTarget).addClass("hidden");}, 1000);
                setTimeout(function(){$(e.currentTarget).siblings(".img1").removeClass("hidden");}, 1000);
                $(e.currentTarget).siblings(".img1").addClass("bounceIn");
            });
            
            /* Servicios */
            
            
            $(".diseño").hover(function(e){
                $("#dText").removeClass("hidden zoomOutDown");
                $("#dText").addClass("zoomInUp");
            },function(e){
                $("#dText").removeClass("zoomInUp");
                $("#dText").addClass("zoomOutDown");
                $("#dText").addClass("hidden", 1000);
            });
            
            
            $(".desarrollo").hover(function(e){
                $("#dvText").removeClass("hidden zoomOutDown");
                $("#dvText").addClass("zoomInUp");
            },function(e){
                $("#dvText").removeClass("zoomInUp");
                $("#dvText").addClass("zoomOutDown");
                $("#dvText").addClass("hidden", 1000);
            });
            
            /* Tecnologías */
            
             $("#web").hover(function(e){
                $("#twText").removeClass("hidden zoomOutDown");
                $("#imgsBig1").removeClass("#imgsBig1").addClass("#imgsSmall1");
                $("#imgsBig1 img").removeClass("imgTechBig").addClass("imgTechSmall");
                $("#twText").addClass("zoomInUp");
            },function(e){
                $("#twText").removeClass("zoomInUp");
                $("#imgsSmall1").removeClass("#imgsSmall1").addClass("#imgsBig1");
                $("#imgsBig1 img").removeClass("imgTechSmall").addClass("imgTechBig");
                $("#twText").addClass("zoomOutDown");
                $("#twText").addClass("hidden", 1000);
            });
            
            
            $("#prog").hover(function(e){
                $("#tpText").removeClass("hidden zoomOutDown");
                $("#imgsBig2").removeClass("#imgsBig2").addClass("#imgsSmall2");
                $("#imgsBig2 img").removeClass("imgTechBig").addClass("imgTechSmall");
                $("#tpText").addClass("zoomInUp");
            },function(e){
                $("#tpText").removeClass("zoomInUp");
                $("#imgsSmall2").removeClass("#imgsSmall2").addClass("#imgsBig2");
                $("#imgsBig2 img").removeClass("imgTechSmall").addClass("imgTechBig");
                $("#tpText").addClass("zoomOutDown");
                $("#tpText").addClass("hidden", 1000);
            });
            
            $("#sis").hover(function(e){
                $("#tsText").removeClass("hidden zoomOutDown");
                $("#imgsBig3").removeClass("#imgsBig3").addClass("#imgsSmall3");
                $("#imgsBig3 img").removeClass("imgTechBig").addClass("imgTechSmall");
                $("#tsText").addClass("zoomInUp");
            },function(e){
                $("#tsText").removeClass("zoomInUp");
                $("#imgsSmall3").removeClass("#imgsSmall3").addClass("#imgsBig3");
                $("#imgsBig3 img").removeClass("imgTechSmall").addClass("imgTechBig");
                $("#tsText").addClass("zoomOutDown");
                $("#tsText").addClass("hidden", 1000);
            });
            