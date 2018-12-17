$(document).ready(function(){
    $(".k_tab >ul> li").click(function(){
        $(this).addClass('clk').siblings().removeClass('clk');
        var index = $(this).index();
        number = index;
        $('.k_content').hide();
        $("div.k_content:eq("+number+")").show();
    });
 });