/*首页背景*/
$(".wrapper, .holder").height(getWindow()[0]);
$(".body_wrap").height(getWindow()[0]-146);
$(".slide_content").height(getWindow()[0]-146);
$(".hide_section").css("height", getWindow()[0]);
$(window).resize(function(){
	$(".wrapper, .holder").height(getWindow()[0]);
	$(".body_wrap").height(getWindow()[0]-146);
	$(".slide_content").height(getWindow()[0]-146);
	$(".hide_section").css("height", getWindow()[0]);
});

/*随机更换背景*/
// var randNum = random(3);
// var backcss = "back"+randNum;
// $(".wrapper").addClass(backcss);


/*切换页面*/
$("#login_enter").click(function(){
	$("#welcome").animate({right: '2000px'}, 600);
	$("#login").animate({left: '0px'}, 600);
});
$(".backicon").click(function(){
	$("#welcome").animate({right: '0px'}, 600);
	$("#login").animate({left: '2000px'}, 600);
});



/*显示隐藏内容*/
$("#show_service").click(function(){
	$("#service").animate({top: '0px'}, 600);
	$(".hide_section").attr("data-id", 0);
	$("#service").attr("data-id", 1);
	setTimeout(function(){ $("span.close_btn").fadeIn(); }, 1000);
});
$("#show_client").click(function(){
	$("#client").animate({top: '0px'}, 600);
	$(".hide_section").attr("data-id", 0);
	$("#client").attr("data-id", 1);
	setTimeout(function(){ $("span.close_btn").fadeIn(); }, 1000);
});
$("#show_aboutus").click(function(){
	$("#aboutus").animate({top: '0px'}, 600);
	$(".hide_section").attr("data-id", 0);
	$("#aboutus").attr("data-id", 1);
	setTimeout(function(){ $("span.close_btn").fadeIn(); }, 1000);
});
$("span.close_btn").click(function(){
	$(".hide_section[data-id=1]").animate({top: '1500px'}, 600);
	$(this).fadeOut();
});















