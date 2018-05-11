(function(w) {
    // 创建工厂函数
    function JsFunctionLibrary() {
        return new JsFunctionLibrary.fn.init();
    };
    // 给原型提供方法
    JsFunctionLibrary.fn = JsFunctionLibrary.prototype = {
        constrcutor: JsFunctionLibrary,
        // 使操作对象显现
        show: function(id) {
            this.id(id).style.display = 'block';
        },
        // 使操作对象隐藏
        hide: function(id) {
            this.id(id).style.display = 'none';
        },
        id: function(id) {
            return typeof id === "string" ? document.getElementById(id) : null;
        },
        //getElementsByClassName()兼容处理
        getElementsByClassName: function() {
            if (!document.getElementsByClassName) {
                document.getElementsByClassName = function(cls) {
                    var ret = [];
                    var els = document.getElementsByTagName('*');
                    for (var i = 0, len = els.length; i < len; i++) {
                        if (els[i].className === cls || els[i].className.indexOf(cls + ' ') >= 0 || els[i].className.indexOf(' ' + cls + ' ') >= 0 || els[i].className.indexOf(' ' + cls) >= 0) {
                            ret.push(els[i]);
                        }
                    }
                    return ret;
                }
            }
        },

        //IE版本号获取
        IEVersion: function() {
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
                ele.attachEvent('on' + type, fn);
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
        },
        // ajax异步传输
        createXMLHTTPObject: function() {
            var XMLHttpFactories = [ // 兼容不同浏览器和版本的创建函数数组
                function() {
                    return new XMLHttpRequest()
                },
                function() {
                    return new ActiveXObject("Msxml2.XMLHTTP")
                },
                function() {
                    return new ActiveXObject("Msxml3.XMLHTTP")
                },
                function() {
                    return new ActiveXObject("Microsoft.XMLHTTP")
                },
            ];
            var xmlhttp = false;
            for (var i = 0; i < XMLHttpFactories.length; i++) {
                //尝试调用匿名函数，如果成功则返回XMLHttpRequest对象，否则继续调用下一个
                try {
                    xmlhttp = XMLHttpFactories[i]();
                } catch (e) {
                    continue; // 如果发生异常，则继续下一个函数调用
                }
                break; // 如果成功，则中止循环
            }
            return xmlhttp; // 返回对象实例
        },

        /*  将 get 跟post 封装到一起
            参数1:url
            参数2:数据
            参数3:请求的方法
            参数4:数据成功获取以后 调用的方法
        */
        ajaxTool: function(method, url, success, data) {
            // 异步对象
            var ajax = jsFL.createXMLHTTPObject();
            // get 跟post  需要分别写不同的代码
            if (method == 'get') {
                // get请求
                if (data) {
                    // 如果有值
                    url += '?';
                    url += data;
                } else {

                }
                // 设置 方法 以及 url
                ajax.open(method, url);

                // send即可
                ajax.send();
            } else {
                // post请求
                // post请求 url 是不需要改变
                ajax.open(method, url);

                // 需要设置请求报文
                ajax.setRequestHeader("Content-type", "application/  x-www-form-urlencoded");
                // 判断data send发送数据
                if (data) {
                    // 如果有值 从send发送
                    ajax.send(data);
                } else {
                    // 木有值 直接发送即可
                    ajax.send();
                }
            }

            // 注册事件
            ajax.onreadystatechange = function() {
                // 在事件中 获取数据 并修改界面显示
                if (ajax.readyState == 4 && ajax.status == 200) {
                    // console.log(ajax.responseText);
                    // 将 数据 让 外面可以使用
                    //return ajax.responseText;
                    // 当 onreadystatechange 调用时 说明 数据回来了
                    // ajax.responseText;
                    // 如果说 外面可以传入一个 function 作为参数 success
                    success(ajax.responseText);
                }
            }

        }


    };
    // 构造函数
    var init = JsFunctionLibrary.fn.init = function() {
        this.name = "JsFunctionLibrary";
    };
    // 替换构造函数的原型为JsFunctionLibrary工厂的原型
    init.prototype = JsFunctionLibrary.fn;
    // 把工厂函数通过两个变量暴露出去
    w.JsFL = w.$ = JsFunctionLibrary();

}(window));

