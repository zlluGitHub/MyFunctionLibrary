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
* @函数功能: 匀速运动函数
*/
var timer=null;
function startMove1(iTarget){
    clearInterval(timer);
    var oDiv=document.getElementById('id1');
    timer=setInterval(function(){
        var speed=0;
        if(oDiv.offsetLeft>iTarget){
            speed=-10;
        }
        else{
            speed=10;
        }
        if(oDiv.offsetLeft==iTarget){
            clearInterval(timer);
        }
        else{
         oDiv.style.left=oDiv.offsetLeft+speed+'px';
     }
 },30)
}

