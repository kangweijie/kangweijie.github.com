$(document).ready(function () {
    var e = $(window).outerHeight(), t = e + 17;
    var w = $(window).outerWidth();
    $(".part1").css({"height": t});
    $(".inner-contant").css({
        "margin-top": t
    });
    $(".roll-index-wrap li a").each(function () {
        $(this).css({
            "height": t
        });
    });
    $(".banner").each(function () {
        $(this).css({
            "height": t
        });
    });
    $(".roll-index-wrap li").each(function () {
        $(this).css("width", w)
    });
    $(".ba-title").each(function () {
        var bw = $(this).width();
        var bh = $(this).height();
    });
    $(".card-content").css({
            "width": '6100px;'
    });


    $(window).resize(function () {
        var w = $(window).width();
        var h = $(window).height();
        
        var wli = $(".roll-index-wrap li").width();
        var s = $(".roll-index-wrap li").length;
        var vl = $(".roll-index-wrap").offset().left;
        var vln = (vl / wli) * w;
        $(".part1").each(function () {
            $(this).css({"height": h})
        });
        $(".roll-index-wrap li").each(function () {
            $(this).css("width", w);
        }),
        $(".roll-index-wrap").css({"width": w * s, "left": vln})
        $(".inner-contant").css({
            "margin-top": h
        });
        $(".banner").each(function () {
        $(this).css({
            "height": h
        });
    });
        $(".roll-index-wrap li a").each(function () {
            $(this).css({
                "height": h
            });
        });
        $(".card-content").css({
            "width": '6100px;'
        });

        $(".tab-box").each(function() {
             var thisH = $(this).height();
             $(this).css({
                 "height": thisH
             });
        });
        $(".viewport").each(function() {
            var oph = $(this).find('ul').height(true);
            $(this).find('ul').css({
                "height": oph
            });
        });

    });

    $(".card-boxB").each(function () {
        $(this).css({
            "display": 'none'
        });
    });
    $(".scrollbar-box").each(function () {
        $(this).css({
            "display": 'none'
        });
    });
    $(".expand-content").each(function () {
        $(this).css({
            "display": 'none'
        });
    });

    $(".icon-delete").click(function () {
        $(this).parent().css({
            display: 'none'
        });
    });


    $(".exp-item").each(function() {
         var opBtn = $(this).find('span.uptip');
         var clBtn = $(this).find('span.downtip');

         opBtn.click(function() {
            $(this).parent().parent().next(".expand-content").slideDown(500);
            $(this).parent().parent().next(".expand-content").addClass('block');
            $(this).addClass('none');
            clBtn.removeClass('none');
         });
         clBtn.click(function() {
            $(this).parent().parent().next(".expand-content").slideUp(500);
            $(this).parent().parent().next(".expand-content").addClass('none');
            $(this).addClass('none');
            opBtn.removeClass('none');
         });




    });
    
});

$(window).scroll(function () {
    var expos = $(window).outerHeight();
    // var eTOPc = $(window).outerHeight() / 2;
    var exscro = $(window).scrollTop();
    if (exscro > expos - 100) {
        $(".fix-nav").fadeOut(500);
    } else {
        $(".fix-nav").fadeIn(500);
    }
    if (exscro > 90) {
        $(".fix-nav").addClass('nva-big');
    } else {
        $(".fix-nav").removeClass('nva-big');
    };
    
    $(".oms-content").each(function() {
        var ofpix = $(this).height() / 2;
        var ofset = $(this).offset().top,
            ofsetaffter = ofset + ofpix;
        var exposaffter = expos / 2;
        var scro_bigin = ofsetaffter - exposaffter;
         // alert (ofpix);
        if (exscro > scro_bigin) {
            $(this).css({
                "background-position": ' 50% bottom'
            });
        }
        // else if (exscro = ofset) {
        //     $(this).css({
        //         "background-position": ' 50% bottom'
        //     });
        // }
        else{
           $(this).css({
                "background-position": ' 50% 0'
            }); 
        };


    });





});


function Tabs(thisObj, Num) {
    if (thisObj.className == "cur")return;
    var tabObj = thisObj.parentNode.id;
    var tabList = document.getElementById(tabObj).getElementsByTagName("li");
    for (i = 0; i < tabList.length; i++) {
        if (i == Num) {
            thisObj.className = "cur";
            document.getElementById(tabObj + "_Content" + i).style.display = "block";
        } else {
            tabList[i].className = "";
            document.getElementById(tabObj + "_Content" + i).style.display = "none";
        }
    }

}
