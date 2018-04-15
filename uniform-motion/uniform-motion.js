/**********************************案例二***************************************/
/*
* @时间:2018-04-15 16:25:45
* @函数功能: 匀速运动函数
*/
window.onload=function(){
     //调用匀速运动构造函数
     linearAnimation（'btn','box',10,100）;
}
//定义匀速运动构造函数
function linearAnimation（btnId,boxId,step,target）{
     //获取需要的标签
      var btn=document.getElementById(btnId);
      var box=document.getElementById(boxId);
     //定义变量
     var time=null, begin=0, step=10, target=100;
     //监听按钮点击
     btn.onclick=function(){
        //清除定时器
        clearInterval(timer);
        //设置定时器
        timer=setInterval(function(){
             begin+=step;
             if(begin>=target){
               //防止累加值不到目标值或超过目标值
               begin=target;
               clearInterval(timer);
             }
             //将累加值作用到运动目标上
             box.style.marginLeft=begin+"px";
        },100);        
     }
}

/**********************************案例一***************************************/
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

