$(document).ready(function(){
/*导航菜单*/
$("div.navlist").height(getWindow()[0]-60);
$("div.btmlist_holder").height(getWindow()[0]-115);
$(window).resize(function(){
	$("div.navlist").height(getWindow()[0]-60);
	$("div.btmlist_holder").height(getWindow()[0]-115);
});







/*关闭／展开菜单*/
$("li.ontheshow").click(function(){
	var x = $("span.close_open img").attr("status");
	if(x == 0){
		var listHeight = $("ul.toplist").height();
		$("div.toplist_holder").animate({height: listHeight+"px"});
		$("span.close_open img").attr("src", "../icons/guanbi.svg");
		$("span.close_open img").attr("status", 1);
	}
	if(x == 1){
		$("div.toplist_holder").animate({height: "55px"});
		$("span.close_open img").attr("src", "../icons/caidan.svg");
		$("span.close_open img").attr("status", 0);
	}
});
$("li.onthehide").click(function(){
	var text = $(this).find("span").text();
	var icon = text.substr(0, 1);
	$("#pds_name").text(text);
	$("#pds_icon").text(icon);
	$("div.toplist_holder").animate({height: "55px"});
	$("span.close_open img").attr("src", "../icons/caidan.svg");
	$("span.close_open img").attr("status", 0);
});



/*菜单列表选中*/
$("ul.listitem li a").click(function(){
	$("ul.listitem li a").removeClass("selected");
	$(this).addClass("selected");
});



/*右侧主体区宽高*/
if(getWindow()[1]<1120){
	$("div.main").width(900).height(getWindow()[0]-60);	
} else {
	$("div.main").width(getWindow()[1]-220).height(getWindow()[0]-60);
}
$(window).resize(function(){
	if(getWindow()[1]<1120){
		$("div.main").width(900).height(getWindow()[0]-60);	
	} else {
		$("div.main").width(getWindow()[1]-220).height(getWindow()[0]-60);
	}
});



});








