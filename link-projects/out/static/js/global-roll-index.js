	$(function(){var sWidth=$(".index-roll-fix").width();var len=$(".index-roll-fix .roll-warp ul li").length;var index=0;var picTimer;$(".index-roll-fix .roll_num a");$(".index-roll-fix .roll_num a").mouseenter(function(){index=$(".index-roll-fix .roll_num a").index(this);showPics(index);}).eq(0).trigger("mouseenter");$(".index-roll-fix").hover(function(){$(this).find(".preNext").css("opacity",0.2).show();$(".index-roll-fix .preNext").css("opacity",0.2).hover(function(){$(this).stop(true,false).animate({"opacity":"0.5"},300);},function(){$(this).stop(true,false).animate({"opacity":"0.2"},300);});},function(){$(this).find(".preNext").css("opacity",0.2).hide();});$(".index-roll-fix .pre").click(function(){index-=1;if(index==-1){index=len-1;}
showPics(index);});$(".index-roll-fix .next").click(function(){index+=1;if(index==len){index=0;}
showPics(index);});$(".index-roll-fix .roll-warp ul").css("width",sWidth*(len));$(".index-roll-fix").hover(function(){clearInterval(picTimer);},function(){picTimer=setInterval(function(){showPics(index);index++;if(index==len){index=0;}},4000);}).trigger("mouseleave");
function showPics(index){var nowLeft=-index*sWidth;$(".index-roll-fix .roll-warp ul").stop(true,false).animate({"left":nowLeft},300);$(".index-roll-fix .roll_num a").removeClass("on").eq(index).addClass("on");}});



	$(function () {
    var sWidth = $(".index-roll-fix").width();
    var len = $(".index-roll-fix .roll-warp ul li").length;
    var index = 0;
    var picTimer;
    $(".index-roll-fix .roll_num a");
    $(".index-roll-fix .roll_num a").mouseenter(function () {
        index = $(".index-roll-fix .roll_num a").index(this);
        showPics(index);
    }).eq(0).trigger("mouseenter");
    $(".index-roll-fix").hover(function () {
        $(this).find(".preNext").css("opacity", 0.2).show();
        $(".index-roll-fix .preNext").css("opacity", 0.2).hover(function () {
            $(this).stop(true, false).animate({
                "opacity": "0.5"
            }, 300);
        }, function () {
            $(this).stop(true, false).animate({
                "opacity": "0.2"
            }, 300);
        });
    }, function () {
        $(this).find(".preNext").css("opacity", 0.2).hide();
    });
    $(".index-roll-fix .pre").click(function () {
        index -= 1;
        if (index == -1) {
            index = len - 1;
        }
        showPics(index);
    });
    $(".index-roll-fix .next").click(function () {
        index += 1;
        if (index == len) {
            index = 0;
        }
        showPics(index);
    });
    $(".index-roll-fix .roll-warp ul").css("width", sWidth * (len));
    $(".index-roll-fix").hover(function () {
        clearInterval(picTimer);
    }, function () {
        picTimer = setInterval(function () {
            showPics(index);
            index++;
            if (index == len) {
                index = 0;
            }
        }, 4000);
    }).trigger("mouseleave");

    function showPics(index) {
        var nowLeft = -index * sWidth;
        $(".index-roll-fix .roll-warp ul").stop(true, false).animate({
            "left": nowLeft
        }, 300);
        $(".index-roll-fix .roll_num a").removeClass("on").eq(index).addClass("on");
    }
});