
//总JQ结束
var _focus_num = $("#smallSlideUl > li").length;
var _focus_direction = true;
var _focus_pos = 0;
var _focus_max_length = _focus_num * 451;
var _focus_li_length = 451;
var _focus_dsq = null;
var _focus_lock = true;
function autoExecAnimate() {
    $("#mypic" + _focus_pos).addClass("photo-cur").siblings("li.photo-cur").removeClass("photo-cur");
    var moveLen = _focus_pos * _focus_li_length;
    $("#bigSlideUl").animate({
        left: "-" + moveLen + "px"
    },
    600);
    if (_focus_pos == (_focus_num - 1)) {
        _focus_direction = false
    };
    if (_focus_pos == 0) {
        _focus_direction = true
    };
    if (_focus_direction) {
        _focus_pos++
    } else {
        _focus_pos--
    }
};
_focus_dsq = setInterval("autoExecAnimate()", 5000);
$("#smallSlideUl > li").hover(function() {
    _focus_pos = parseInt($(this).attr("sid"));
    if (_focus_lock) {
        clearInterval(_focus_dsq);
        _focus_lock = false
    };
    $("#mypic" + _focus_pos).addClass("photo-cur").siblings("li.photo-cur").removeClass("photo-cur");
    var moveLen = _focus_pos * _focus_li_length;
    $("#bigSlideUl").stop(true, true).animate({
        left: "-" + moveLen + "px"
    },
    600)
},
function() {
    if (_focus_lock == false) {
        _focus_dsq = setInterval("autoExecAnimate()", 5000);
        _focus_lock = true
    }
});
$("#bigSlideUl").hover(function() {
    if (_focus_lock) {
        clearInterval(_focus_dsq);
        _focus_lock = false
    }
},
function() {
    if (_focus_lock == false) {
        _focus_dsq = setInterval("autoExecAnimate()", 5000);
        _focus_lock = true
    }
});