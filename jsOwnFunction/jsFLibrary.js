function jsFL() {
    // 创建构造函数
    function jsFunctionLibrary() {
        this.name = "jsFunctionLibrary";
        this.explain = "";
    };
    // 给原型提供方法
    jsFunctionLibrary.prototype = {
        //IE版本号获取
        IEVersion: function(){
            //取得浏览器的userAgent字符串
            var userAgent = navigator.userAgent;
            //判断是否IE<11浏览器
            var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1;
            //判断是否IE的Edge浏览器
            var isEdge = userAgent.indexOf("Edge") > -1 && !isIE;
            var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
            if (isIE) {
                var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
                reIE.test(userAgent);
                var fIEVersion = parseFloat(RegExp["$1"]);
                if (fIEVersion == 7) {
                    return 7;
                } else if (fIEVersion == 8) {
                    return 8;
                } else if (fIEVersion == 9) {
                    return 9;
                } else if (fIEVersion == 10) {
                    return 10;
                } else {
                    return 6; //IE版本<=7
                }
            } else if (isEdge) {
                return 'edge'; //edge
            } else if (isIE11) {
                return 11; //IE11
            } else {
                return -1; //不是ie浏览器
            }
        },
        //动画函数封装
        animate: function(ele, target, time, speed) {
            clearInterval(ele.timer);
            ele.timer = setInterval(function() {
                var step = (target - ele.offsetTop) / speed;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                ele.style.top = ele.offsetTop + step + "px";
                console.log(1);
                if (Math.abs(target - ele.offsetTop) < Math.abs(step)) {
                    ele.style.top = target + "px";
                    clearInterval(ele.timer);
                };
            }, time);
        },

         // 兼容绑定事件
         addEvent: function(ele, type, fn) {
             if (ele.addEventListener) {
                 ele.addEventListener(type, fn);
             } else {
                 ele.attachEvent('on'+type, fn);
             }
         },
         // 兼容绑定事件移除
         removeEvent: function(ele, type, fn) {
             if (ele.removeEventListener) {
                 ele.removeEventListener(type, fn);
             } else {
                 ele.detachEvent('on' + type, fn);
             }
         },
         //scrollTop和scrollLeft兼容封装
         scroll: function() {
             // 开始封装自己的scrollTop
             if (window.pageYOffset != null) {
                 // ie9+ 高版本浏览器
                 // 因为 window.pageYOffset 默认的是  0  所以这里需要判断
                 return {
                     left: window.pageXOffset,
                     top: window.pageYOffset
                 };
             } else if (document.compatMode === "CSS1Compat") {
                 // 标准浏览器   来判断有没有声明DTD
                 return {
                     left: document.documentElement.scrollLeft,
                     top: document.documentElement.scrollTop
                 };
             };
             return {
                 // 未声明 DTD
                 left: document.body.scrollLeft,
                 top: document.body.scrollTop
             };
         },
         // 获取操作对象
         id: function(id) {
             return typeof id === "string" ? document.getElementById(id) : null;
         },
         // 去掉首尾空白字符
         trim: function(str) {
             // null、undefined、NaN、0、false、''
             if (!str) {
                 return str;
             }
             // 优先使用原生的
             if (str.trim) {
                 return str.trim();
             }
             return str.replace(/^\s+|\s+$/g, '');
         },
         //判断DOM树是否构建完成
         ready: function(fn) {

             if (document.readyState === 'complete') {
                 fn();
             }

             // 如果DOM没有构造完毕，那么判断addEventListener是否兼容
             else if (document.addEventListener) {
                 document.addEventListener('DOMContentLoaded', fn);
             }

             // 如果不兼容addEventListener，那么采取attachEvent的方式，
             // 同时事件变为了onreadystatechange，为了防止这个事件多次触发造成的fn多次执行，
             // 所以需要一个包装函数来进行过滤。
             else {
                 document.attachEvent('onreadystatechange', function() {
                     if (document.readyState === 'complete') {
                         fn();
                     }
                 });
             }
         }

     };
     return new jsFunctionLibrary();
};
 var jsFL = $ = jsFL();