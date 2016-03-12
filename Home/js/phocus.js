/*
Phocus.js V1.0.0
By Steve @ PHOCUS.COM.CN
2016-01-20 15:30
*/


/*--------获取窗口宽高----------*/
function getWindow(){
	var winHeight = $(window).height();
	var winWidth = $(window).width();
	var result = [winHeight, winWidth];
	return result;
}
/*
获取方式：
1、getWindow()[0] => 获取高度;
2、getWindow()[1] => 获取宽度;
*/



/*--------获取对象宽高----------*/
function getObject(objName){
	var objHeight = $(objName).height();
	var objWidth = $(objName).width();
	var result = [objHeight, objWidth];
	return result;
}
/*
获取方式：
1、objName => 对象名称;
2、getObject()[0] => 获取高度;
3、getObject()[1] => 获取宽度;
*/



/*--------设置对象宽高----------*/
function setSize(objName, valueHeight, valueWidth){
	$(objName).height(valueHeight);
	$(objName).width(valueWidth);
}
/*
设置方式：
1、objName => 对象名称;
2、valueHeight => 高度值;
3、valueWidth => 宽度值;
*/




/*--------增加和减少数量----------*/
function setNumber(decres, incres, numholder){
	$(decres).click(function(){
		var num = $(numholder).text();
		if(num <= 1){
			$(numholder).text(1);
		} else {
			num--;
			$(numholder).text(num);
		}
	});
	$(incres).click(function(){
		var num = $(numholder).text();
		num++;
		$(numholder).text(num);
	});
}
/*
设置方式：
1、decres => 减少按钮;
2、incres＝> 增加按钮;
3、numholder => 数字显示对象;
*/



/*--------生成随机数----------*/
function random(x) {
	var oneInt = Math.floor((Math.random() * x) + 1);
	return oneInt;
}
/*
返回1到x之间的随机整数;
设置方式：
1、x => 数字最大区间;
*/
























