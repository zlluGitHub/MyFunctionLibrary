     function jsFL(){
         // 创建构造函数
        function jsFunctionLibrary() {
            this.name = "jsFunctionLibrary";
        };

        // 给原型提供方法
        jsFunctionLibrary.prototype = {
            //动画函数封装
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
            },
            // 兼容绑定事件移除
            removeEvent: function( ele, type, fn ) {

                // ele必须是DOM，type必须是字符串，fn必须是函数，
                // 有一个不是，那就直接return
                // if( !ele.nodeType || !jQuery.isString( type ) || !jQuery.isFunction( fn ) ) {
                //     return;
                // }

                // 兼容移除事件
                if( ele.removeEventListener ) {
                    ele.removeEventListener( type, fn );
                }else {
                    ele.detachEvent( 'on' + type, fn );
                }
            },
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
            // 获取操作对象
            id: function(id){
                return typeof id === "string" ? document.getElementById(id) : null;
            },

            // 去掉首尾空白字符
            trim: function( str ) {

                // null、undefined、NaN、0、false、''
                if ( !str ) {
                    return str;
                }

                // 优先使用原生的
                if ( str.trim ) {
                    return str.trim();
                }

                return str.replace( /^\s+|\s+$/g, '');

            },
            //
            ready: function( fn ) {

            // 先统一判断DOMContentloaded有没有触发，
            // 通过document.readyState === 'complete'判断
            // 如果为true，fn可以直接调用。

            // 如果为false，那么判断支不支持addEventListener，
            // 如果支持，绑定DOMContentLoaded事件

            // 如果不支持，使用attchEvent绑定onreadystatechang事件,
            // 注意，需要在里面判断document.readyState === 'complete'才执行fn。
            // 防止fn多次执行。

            // DOM已经构造完毕，fn可以直接执行
            if ( document.readyState === 'complete' ) {
                fn();
            }

            // 如果DOM没有构造完毕，那么判断addEventListener是否兼容
            else if( document.addEventListener ) {
                document.addEventListener( 'DOMContentLoaded', fn );
            }

            // 如果不兼容addEventListener，那么采取attachEvent的方式，
            // 同时事件变为了onreadystatechange，为了防止这个事件多次触发造成的fn多次执行，
            // 所以需要一个包装函数来进行过滤。
            else {
                document.attachEvent( 'onreadystatechange', function() {
                    if( document.readyState === 'complete' ) {
                        fn();
                    }
                } );
            }
            }

        };
        return new jsFunctionLibrary();
    };
    var jsFL = $ = jsFL();