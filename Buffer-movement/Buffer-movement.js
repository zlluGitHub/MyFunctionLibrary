/*
* @Author: 冰心
* @Date:2018-04-08 14:33:45
* @explain:Individual function wrapper libraries.
*/
window.onload=function(){
     var oDiv=document.getElementById('id1');
    oDiv.onmouseover=function(){
        startMove2(100);
        }
    oDiv.onmouseout=function(){
        startMove2(30);
        }
    }


/*
* @时间:2018-04-08 14:33:45
* @函数功能: 缓冲运动函数
*/
var timer=null;
function startMove(iTarget){
    clearInterval(timer);
    var oDiv=document.getElementById('id1');
    timer=setInterval(function(){
        //步长亦称速度   适用公式：【 起始值 +=（结束值-起始值）* 缓冲系数 】 缓冲系数值一般可以设置为：0~1
        var speed=(iTarget-oDiv.offsetLeft)/10;
        //向上或向下取整
        speed=speed>0?Math.ceil(speed):Math.floor(speed);
        //判断是否到达目标值
        if(oDiv.offsetLeft==iTarget){
            clearInterval(timer);
        }
        else{
         oDiv.style.left=oDiv.offsetLeft+speed+'px';
        }
    },30)
}

/*
* @时间:2018-04-15 16:33:55
* @函数功能: 获取DOM中的目标元素
*/
function $(id){
     return typeof id === "string" ? documentById(id) : null;
}

