     function jsFL(){
         // 创建构造函数
        function jsFunctionLibrary() {
            this.name = "jsFunctionLibrary";
        };

        // 给原型提供方法
        jsFunctionLibrary.prototype = {

            animate: function(ele, target, time) {
                clearInterval(ele.timer);
                ele.timer = setInterval(function() {
                    var step = (target - ele.offsetTop) / 10;
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
            addEvent: function( ele, type, fn ){
                if( ele.addEventListener ) {
                    ele.addEventListener( type, fn);
                }else {
                    ele.attachEvent( 'on' + type, fn );
                }
            }
            //scrollTop兼容封装
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

            id: function(id){
                return typeof id === "string" ? document.getElementById(id) : null;
            }

        };
        return new jsFunctionLibrary();
    };
    var jsFL = $= jsFL();