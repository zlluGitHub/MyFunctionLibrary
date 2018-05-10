* ### 一、前言
  自己在开发中，常常会用到很多类似的属性或方法，而且有些属性或方法在不同的浏览器上存在兼容性问题，于是我就把这些小功能用了一个小的闭包结合构造函数封装了一下，做了一个小的js封装库，其中封装内容基本都是一些经过兼容我们常用的浏览器的方法，以便在开发过程中可以直接使用这些属性或方法。
    
* ### 二、jsFL封装库说明
  jsFL是一个相互间无依赖的,轻量级的JavaScript“类”库,可以用来替换存在兼容性问题的一些属性或方法的方式，支持所有浏览器。目前还在不断更新中... （ 特别说明：在调用时 jsFL===jsFL()===$ 的。）

* ### 三、jsFL封装库定义和用法如下:
<<<<<<< HEAD
    1.IEVersion()方法为取得IE浏览器的版本号。
=======
    1.IEVersion()法为取得IE浏览器的版本号。
    
>>>>>>> 7ecb4a994ad0ef8c4df6b6817e022dd8219d496e
    2.animate(ele, target, time)方法为缓冲动画函数体封装。其中参数定义为:ele-->DOM对象、target-->目标值、time-->间隔时间、speed-->运动速度。
    
    3.addEvent(ele, type, fn)为事件绑定方法，此方法发以进行兼容浏览器处理。
    
    4.scroll()方法为scrollTop和scrollLeft兼容浏览器的简单封装。使用方法:scroll().top 、scroll().Left
    
    5.id(id)方法用于获取DOM中的目标对象。
    
    6.trim(str)方法用于去掉首尾空白字符。
<<<<<<< HEAD
    7.ready(fn)方法当 DOM（文档对象模型）已经加载，并且页面（包括图像）已经完全呈现时，会发生 ready 事件。
由于该事件在文档就绪后发生，类似于jQuery中的ready()方法。使用方法: jsFL.ready(function(){...}) 或 $.ready(function(){...}) 或 jsFL().ready(function(){...})。

    7.ajaxTool(method,url,success,data)方法将 get 跟 post 这两种请求方式封装到一起，并且做了兼容处理。参数说明如下：
            参数1:method 请求的方式
            参数2:url 请求地址
            参数3:success 数据成功获取以后的调用方法
            参数4:data 提交的数据（当只获取数据时可以不用填写）
            其他：★ 将 json 格式的字符串转化为 对应的js对象可以调用 JSON 对象的 parse()方法。例如：JSON.parse(date)。
                  ★ ajax.responseXML返回的是xml文本内容，简单来说是document对象，可以使用querySelectorAll()获取所有匹配标签及内容。例如ajax.responseXML.querySelectorAll('name') 如想获取那个name标签对象中的每一个值，可以使用querySelector().innerHTML) 获取。
=======
    
    7.ready(fn)方法当 DOM（文档对象模型）已经加载，并且页面（包括图像）已经完全呈现时，会发生 ready 事件。由于该事件在文档就绪后发生，类似于jQuery中的ready()方法。使用方法: jsFL.ready(function(){...}) 或 $.ready(function(){...}) 或 jsFL().ready(function(){...})。
>>>>>>> 7ecb4a994ad0ef8c4df6b6817e022dd8219d496e