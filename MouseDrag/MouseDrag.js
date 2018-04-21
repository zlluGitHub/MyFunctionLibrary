
/*
*元素的拖拽实现
*引用方式：<script src="js/zxx.drag.1.0.js" type="text/javascript"></script>
			<script type="text/javascript">
			    var oBox = document.getElementById("box");
			    var oBar = document.getElementById("bar");
			    startDrag(oBar, oBox);
			</script>
*参数说明：oBar-拖拽对象
		   oBox-被拖拽对象
 */

var params = {
	left: 0,
	top: 0,
	currentX: 0,
	currentY: 0,
	flag: false
};
//获取相关CSS属性
var getCss = function(o,key){
	return o.currentStyle? o.currentStyle[key] : document.defaultView.getComputedStyle(o,false)[key];
};

//拖拽的实现
var startDrag = function(oBar, target, callback){
	if(getCss(target, "left") !== "auto"){
		params.left = getCss(target, "left");
	}
	if(getCss(target, "top") !== "auto"){
		params.top = getCss(target, "top");
	}
	//o是移动对象
	oBar.onmousedown = function(event){
		params.flag = true;
		if(!event){
			event = window.event;
			//防止IE文字选中
			oBar.onselectstart = function(){
				return false;
			}
		}
		var e = event;
		params.currentX = e.clientX;
		params.currentY = e.clientY;
	};
	document.onmouseup = function(){
		params.flag = false;
		if(getCss(target, "left") !== "auto"){
			params.left = getCss(target, "left");
		}
		if(getCss(target, "top") !== "auto"){
			params.top = getCss(target, "top");
		}
	};
	document.onmousemove = function(event){
		var e = event ? event: window.event;
		if(params.flag){
			var nowX = e.clientX, nowY = e.clientY;
			var disX = nowX - params.currentX, disY = nowY - params.currentY;
			target.style.left = parseInt(params.left) + disX + "px";
			target.style.top = parseInt(params.top) + disY + "px";

			if (typeof callback == "function") {
				callback((parseInt(params.left) || 0) + disX, (parseInt(params.top) || 0) + disY);
			}

			if (event.preventDefault) {
				event.preventDefault();
			}
			return false;
		}


	}
};


