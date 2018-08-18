## 一、 前言
* 我们在开发的过程中，常常会用到很多类似的属性或方法，而且有些属性或方法在不同的浏览器上存在兼容性问题，于是我就把这些小功能用了一个小的闭包结合构造函数封装了一下，做了一个小的js封装库，其中封装内容基本都是一些经过兼容我们常用的浏览器的方法，以便在开发过程中可以直接使用这些属性或方法。分装好的js库函数，在【[jsOwnFunction](https://github.com/zlluGitHub/MyFunctionLibrary/tree/master/jsOwnFunction)】文件夹下，剩下的部分则是一些测试案例）

* 此文档一直在不断更新中，如不足之处或有更好的建议欢迎 fork 之后提交 pr。

## 二、 jsFL封装库说明

* jsFL是一个相互间无依赖的,轻量级的JavaScript“类”库,可以用来替换存在兼容性问题的一些属性或方法的方式，支持所有浏览器。目前还在不断更新中... （ 特别说明：在调用时 `jsFL===jsFL()===$` 的。）

## 三、jsFL封装库定义和用法
* ### isObject( obj ) ：
  
     参数说明：判断操作内容是否为对象，若是对象，则返回`true`否则返回`false`。
  
* ### isString( str ) ：
  
     参数说明：判断操作对象是否为字符串，若是字符串，则返回`true`否则返回`false`。
  
* ### isFunction( fn ) ：
  
     参数说明：判断操作对象是否为函数，若是函数，则返回`true`否则返回`false`，其中`fn`为函数名。
  
* ### removeClass(idOrclass, className) ：
  
     参数说明：`idOrclass`可以是`id`值也可以是`class类名`、`className`为需要移除的类名。
     
     若`idOrclass`可以为`id`值时只为此对象元素移除类名，若`idOrclass`为`class类名`如果有多个相同类名对象时，这些对象的类名均会被移除要移除的类名。


* ### addClass(idOrclass, className) ：
  
     参数说明：`idOrclass`可以是`id`值也可以是`class类名`、`className`为需要添加的类名。
     
     若`idOrclass`可以为`id`值时只为此对象元素添加类名，若`idOrclass`为`class类名`如果有多个相同类名对象时，这些对象的类名均会被添加要添加的类名。

* ### val(idOrclass, val) ：
  
     参数说明：`idOrclass`可以是`id`值也可以是`class类名`、`val`为需要设置的`value`值，若为空则返回的是此`value的初始值`。

* ### hasClass(className) ：
  
     这种方法通过传入目的对象的类名，判断该对象是否含有该类，若有则返回`true` 否则返回`false`。

* ### class(className) ：
  
     可以通过传入目的对象的id，直接使用此方法可以直接获取数组元素对象集合。使用时可以根据需要调用。例如：`$.class("dialog")[0];`

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
