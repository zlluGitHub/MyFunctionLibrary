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
        var speed=(iTarget-oDiv.offsetLeft)/10;
        speed=speed>0?Math.ceil(speed):Math.floor(speed);
        if(oDiv.offsetLeft==iTarget){
            clearInterval(timer);
        }
        else{
         oDiv.style.left=oDiv.offsetLeft+speed+'px';
        }
    },30)
}