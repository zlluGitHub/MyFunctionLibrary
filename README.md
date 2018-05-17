## 一、 前言
* 我们在开发的过程中，常常会用到很多类似的属性或方法，而且有些属性或方法在不同的浏览器上存在兼容性问题，于是我就把这些小功能用了一个小的闭包结合构造函数封装了一下，做了一个小的js封装库，其中封装内容基本都是一些经过兼容我们常用的浏览器的方法，以便在开发过程中可以直接使用这些属性或方法。（文档中的内容分为两大部分，一部分是分装好的js库函数，在【[jsOwnFunction](https://github.com/zlluGitHub/MyFunctionLibrary/tree/master/jsOwnFunction)】文件夹下，剩下的部分则是一些测试案例）

* 此文档一直在不断更新中，如不足之处或有更好的建议欢迎 fork 之后提交 pr。

## 二、 jsFL封装库说明

* jsFL是一个相互间无依赖的,轻量级的JavaScript“类”库,可以用来替换存在兼容性问题的一些属性或方法的方式，支持所有浏览器。目前还在不断更新中... （ 特别说明：在调用时 `jsFL===jsFL()===$` 的。）

## 三、jsFL封装库定义和用法
* ### InnerHTML(elm) ：
  
    在IE6、7、8中使用innerHTML，得到的结果不准确，例如：标签自动大写，属性值引号丢失，文本节点、注释节点丢失，甚至某些元素的innerHTML只读等，为此封装了此兼容方法。elm为元素对象。

* ### show(id) ：
  
     可以通过传入目的对象的id，直接使用此方法使操作对象显现。

* ### hide(id) ：
  
     可以通过传入目的对象的id，直接使用此方法使操作对象隐藏。

* ### getElementsByClassName() ：
  
     由于IE9以下的版本不支持`document.getElementsByClassName`方法，为此将此方法进行了兼容性封装处理，调用时要以此构造函数名调用。例如：      `jsFL.getElementsByClassName('classname');`。
  
* ### ajaxTool(method,url,success,data) ：
  
     将 `get` 跟 `post` 这两种请求方式封装到一起，并且做了兼容处理。参数说明如下：参数1:`method 请求的方式`、 参数2:`url 请求地址`、参数3:`success 数据成功获取以后的调用方法`、 参数4:`data 提交的数据`（当只获取数据时可以不用填写）
  
     1. 将 `json` 格式的字符串转化为 对应的js对象可以调用 `JSON` 对象的 `parse()`方法。例如：`JSON.parse(date)`。
  
     2. `ajax.responseXML`返回的是xml文本内容，简单来说是document对象，可以使用`querySelectorAll(`)获取所有匹配标签及内容。例如`ajax.responseXML.querySelectorAll('name')` 如想获取那个name标签对象中的每一个值，可以使用`querySelector().innerHTML)` 获取。
  
* ### IEVersion() ：
  
     取得IE浏览器的版本号。
  
* ### animate(ele, target, time) ：
  
     为缓冲动画函数体封装。其中参数定义为: `ele-->DOM对象`、`target-->目标值`、`time-->间隔时间`、`speed-->运动速度`。
  
* ### addEvent(ele, type, fn) ：
  
     为事件绑定方法，此方法发以进行兼容浏览器处理。
  
* ### scroll() ：
  
     scrollTop和scrollLeft兼容浏览器的简单封装。使用方法: `scroll().top` 、`scroll().Left`。
  
* ### id(id) ：
  
     用于获取DOM中的目标对象。
  
* ### trim(str) ：
  
     用于去掉首尾空白字符。 
  
* ### ready(fn) ：
  
     当 DOM（文档对象模型）已经加载，并且页面（包括图像）已经完全呈现时，会发生 ready 事件。由于该事件在文档就绪后发生，类似于jQuery中的ready()方法。使用方法: `jsFL.ready(function(){...})` 或 `$.ready(function(){...})` 或 `jsFL().ready(function(){...})`。

                  
                  
                  
## 测试案例
* [文件上传](https://github.com/zlluGitHub/MyFunctionLibrary/tree/master/Up-date-File)<br />
* [原生js实现购物车](https://github.com/zlluGitHub/MyFunctionLibrary/tree/master/shopping/shopping)<br />
* [ajax异步传输获取方式](https://github.com/zlluGitHub/MyFunctionLibrary/tree/master/ajax)<br />
* [左右焦点图轮播案例](https://github.com/zlluGitHub/StudyRecord/blob/master/demo.html)<br />
* [Tab栏切换案例](https://github.com/zlluGitHub/MyFunctionLibrary/blob/master/Tap-Control/tab1.js)<br />
* [楼层跳跃案例代码](https://github.com/zlluGitHub/MyFunctionLibrary/blob/master/function/floor-leap.html)<br />
* [注册事件的兼容性函数封装处理](https://github.com/zlluGitHub/MyFunctionLibrary/blob/master/event-handling.html)<br />
* [移动端页面适配代码](https://github.com/zlluGitHub/MyFunctionLibrary/blob/master/Mobile-code/Mobile.js)<br />
* [jQuery滑块动画菜单](https://github.com/zlluGitHub/MyFunctionLibrary/blob/master/jQuery-SlideNav/js/lavalamp.js)<br />
* [手风琴效果图](https://github.com/zlluGitHub/MyFunctionLibrary/blob/master/Accordion-effect/demo.html)<br />
* [放大镜效果小案例](https://github.com/zlluGitHub/MyFunctionLibrary/tree/master/magnifying-glass)<br />
* [两侧跟随的广告](https://github.com/zlluGitHub/MyFunctionLibrary/tree/master/Following%20ads)<br />
* [Ajax异步数据传输](https://github.com/zlluGitHub/MyFunctionLibrary/blob/master/ajax%20POST/test1.html)<br />
* [鼠标拖拽效果](https://github.com/zlluGitHub/MyFunctionLibrary/blob/master/MouseDrag/MouseDrag.js)<br />
* [随机抽奖效果](https://github.com/zlluGitHub/MyFunctionLibrary/blob/master/Random-draw/%E9%9A%8F%E6%9C%BA%E6%8A%BD%E5%A5%96.html)<br />
* [ js实现简单日历效果](https://github.com/zlluGitHub/MyFunctionLibrary/blob/master/calendar/%E6%97%A5%E5%8E%86.html)<br />
* [实现圆形表盘时钟效果](https://github.com/zlluGitHub/MyFunctionLibrary/blob/master/clock/%E6%97%B6%E9%92%9F%E7%89%B9%E6%95%88.html)<br />
* [倒计时效果](https://github.com/zlluGitHub/MyFunctionLibrary/blob/master/count-down/%E5%80%92%E8%AE%A1%E6%97%B6.html)<br />
* [json封装scroll方法](https://github.com/zlluGitHub/MyFunctionLibrary/blob/master/json-scroll/json-scroll.html)<br />
* [缓冲运动函数](https://github.com/zlluGitHub/MyFunctionLibrary/blob/master/Buffer-movement/Buffer-movement.js)<br />
* [myReady函数](https://github.com/zlluGitHub/MyFunctionLibrary/blob/master/myReady/myReady.js)<br />
* [js实现透明度变化](https://github.com/zlluGitHub/MyFunctionLibrary/blob/master/opacity-chang/opacity-chang.js)<br />
* [匀速运动函数](https://github.com/zlluGitHub/MyFunctionLibrary/blob/master/uniform-motion/uniform-motion.js)<br />
* [返回节点名称或属性值](https://github.com/zlluGitHub/MyFunctionLibrary/blob/master/nodeName/nodeName.html)<br />
