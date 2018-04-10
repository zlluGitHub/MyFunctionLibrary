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
* @函数功能: 兼容IE不透明度函数
*/
var timer=null;
var alpha=30;
function startMove2(iTarget){
    var oDiv=document.getElementById('id1');
    clearInterval(timer);
    timer=setInterval(function(){
        var speed=0;
        if(alpha>iTarget){
            speed=-10;
        }
        else{
            speed=10;
        }
        if(alpha==iTarget){
            clearInterval(timer);
        }
        else{
            alpha+=speed;
            oDiv.style.filter='alpha(opacity:'+alpha+')';
            oDiv.style.opacity=alpha/100;

        }
    },30)
}
