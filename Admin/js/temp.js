$(document).ready(function(){

	/*登录页背景图片尺寸*/
	$("div.wrapper, div.gredient, div.mask, div.slide").height(getWindow()[0]);
	$("div.nav_wrap, div.nav").height(getWindow()[0]-60);
	$(window).resize(function(){
		$("div.wrapper, div.gredient, div.mask, div.slide").height(getWindow()[0]);
		$("div.nav_wrap, div.nav").height(getWindow()[0]-60);
	});



	/*随机更换背景*/
	var randNum = random(3);
	var backcss = "back"+randNum;
	$("div.wrapper").addClass(backcss);



	/*登录用户名／密码判断*/
	$("span.login_btn").click(function(){
		var username = $("input[name=username]").val();
		if(username == ''){
			$("#username_holder")
			.animate({left: '10px'}, 150)
			.animate({left: '-10px'}, 150)
			.animate({left: '0px'}, 150);
			$("input[name=username]").focus();
			return false;
		}
		var password = $("input[name=password]").val();
		if(password == ''){
			$("#password_holder")
			.animate({left: '10px'}, 150)
			.animate({left: '-10px'}, 150)
			.animate({left: '0px'}, 150);
			$("input[name=password]").focus();
			return false;
		}
		$(this).html('<i class="fa fa-circle-o-notch fa-spin fa-lg"></i> 登录中...');
		setTimeout(function(){ $("span.login_btn").html('<i class="fa fa-check fa-lg"></i> 登录成功'); }, 2000);
		setTimeout(function(){ window.location.replace("pages/frame.html"); }, 3000);
	});



	/*菜单列表选中*/
	$("ul.listitem li a").click(function(){
		$("ul.listitem li a").removeClass("selected");
		$(this).addClass("selected");
	});



	/*展开关闭菜单*/

	$("span.expand").click(function(){
		var status = $("#expand_btn").attr("status");
		if(status == 0){
			$(this).animate({width: '60px'});
			$("span.expand i").addClass("rotate");
			$(this).attr("status", 1);
			$("div.nav_wrap").animate({width: '60px'}, 300);
			$("div.main").animate({
				width: (getWindow()[1]-60)+'px', 
				left: '60px'
			}, 300);
		}
		if(status == 1){
			$(this).animate({width: '220px'});
			$("span.expand i").removeClass("rotate");
			$(this).attr("status", 0);
			$("div.nav_wrap").animate({width: '220px'}, 300);
			$("div.main").animate({
				width: (getWindow()[1]-220)+'px', 
				left: '220px'
			}, 300);
		}	
	});



	/*右侧主体区宽高*/
	if(getWindow()[1]<1120){
		$("div.main").width(900).height(getWindow()[0]-60);	
	} else {
		$("div.main").width(getWindow()[1]-220).height(getWindow()[0]-60);
	}
	$(window).resize(function(){
		var status = $("#expand_btn").attr("status");
		if(status == 0){
			if(getWindow()[1]<1120){
			$("div.main").width(900).height(getWindow()[0]-60);	
			} else {
				$("div.main").width(getWindow()[1]-220).height(getWindow()[0]-60);
			}
		}
		if(status == 1){
			if(getWindow()[1]<1120){
			$("div.main").width(1060).height(getWindow()[0]-60);	
			} else {
				$("div.main").width(getWindow()[1]-60).height(getWindow()[0]-60);
			}
		}
	});



	/*列表划过显示效果*/
	$("ul.listitem > li > a").hover(
		function(){
			var status = $("#expand_btn").attr("status") * 1;
			var text = $(this).find(".list_text").text();
			$("span.prover i.porver_text").text(text);
			if (status) {
				var pos = $(this).offset();
				var proverStatus = $("ul.listitem").attr("status") * 1;
				if(proverStatus == 1){
					$("ul.listitem").attr("status", 0);
					$("span.prover").css("top", pos.top+"px");
				}
				$("span.prover").show().stop().animate({
					top: pos.top+"px"
				}, 200);
			}
		}, 
		function(){
			$("span.prover").hide();
		}
	);
	$("ul.listitem").hover(function () {
		$(this).attr("status", 0)
	},function () {
		$(this).attr("status", 1)
	});





	/*显示弹出框*/
	$("span[show=modal]").click(function(){
		var role = $(this).attr("role");
		var modalWidth = $('div[role='+role+']', parent.document).attr("width");
		var modalHeight = $('div[role='+role+']', parent.document).attr("height");
		if(modalHeight){
			$('div[role='+role+']', parent.document).height(modalHeight);
			$('div[role='+role+']', parent.document).find(".pop_body").height(modalHeight-108);
		} else {
			$('div[role='+role+']', parent.document).height(400);
			$('div[role='+role+']', parent.document).find(".pop_body").height(292);
		}
		if(modalWidth){
			$('div[role='+role+']', parent.document).width(modalWidth);
		} else {
			$('div[role='+role+']', parent.document).width(500);
		}
		$('div[role='+role+'], div.mask', parent.document).fadeIn();
		var tableHeight = $('div[role='+role+'] > div.pop_body > div.tableWrap > table', parent.document).height();
		$('div[role='+role+'] > div.pop_body > div.tableWrap', parent.document).height(tableHeight);
	});





	/*关闭弹出框*/
	$("span[hide=popup").click(function(){
		var role = $(this).attr("role");
		$('div[role='+role+'], div.mask').fadeOut();
	});




	/*操作成功提示*/
	function success(text){
		var hint = text;
		$("div.success span.hint_text").text(hint)
		$("div.success").animate({top: "0px"});
		setTimeout(function(){
			$("div.success").animate({top: "-80px"});
		}, 1500);
	}



	/*滑出框设置高度*/
	$("div.slide_body").height(getWindow()[0]-122);
	$(window).resize(function(){
		$("div.slide_body").height(getWindow()[0]-122);
	});



	/*滑出框控制*/
	$("span[show=slide]").click(function(){
		var role = $(this).attr("role");
		$('div.slide[role='+role+']', parent.document).animate({right: "0px"}, 500);
	});
	$("span[hide=slide]").click(function(){
		var role = $(this).attr("role");
		$('div.slide[role='+role+']', parent.document).animate({right: "-540px"}, 500);
	});



/*---------------------各种弹出框 开始------------------------*/
	/*修改密码提交*/
	$("span#submitPass").click(function(){
		success("密码设置成功!");
	});

	/*停用户条*/
	$("span#submitStop").click(function(){
		success("用户停用成功!");
	});

	/*启用用户*/
	$("span#submitStart").click(function(){
		success("用户启用成功!");
	});

	/*删除用户*/
	$("span#submitRemove").click(function(){
		success("用户删除成功!");
	});

	/*重置密码*/
	$("span#submitReset").click(function(){
		success("密码重置成功!");
	});

	/*添加用户*/
	$("span#submitAdd").click(function(){
		success("用户添加成功!");
	});

	/*添加角色*/
	$("span#submitAddrole").click(function(){
		success("角色添加成功!");
	});

	/*停用角色*/
	$("span#submitStoprole").click(function(){
		success("角色停用成功!");
	});

	/*启用角色*/
	$("span#submitStartrole").click(function(){
		success("角色启用成功!");
	});

	/*删除角色*/
	$("span#submitRemoverole").click(function(){
		success("角色删除成功!");
	});

	/*保存权限配置*/
	$("span#submitAccess").click(function(){
		success("权限保存成功!");
	});

	/*添加曲线*/
	$("span#submitaddQuxian").click(function(){
		success("曲线添加成功!");
	});

/*---------------------各种弹出框 结束------------------------*/





});








