$(function(){
	$("h2.q_c_content").click(function(){
		// 修改图片（今天在用jq的时候，一直有个障碍，h2是作为div的子级，所以不能直接用h2的siblings()，需要先parent()到父级，然后再siblings() ）
		// $(this).children("img").attr("src","./static/helpCenter/open_arrow.png").parent().siblings().find("img").attr("src","./static/helpCenter/close_arrow.png");
		$(this).toggleClass("profess_bg").parent().siblings().find(".q_c_content").removeClass("profess_bg");
		// 修改数字控制速度， slideUp(500)控制卷起速度
		$(this).next(".account_ul").slideToggle(500).parent().siblings().find(".account_ul").slideUp(500);
	})	
})