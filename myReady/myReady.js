
/*
* @时间:2018-04-08 14:33:45
* @函数功能: 兼容IE不透明度函数
* @说明：调用myReady(function(){ 执行函数 })即可;。
* @另外：myReady(fn)这个回调函数兼容IE浏览器。
*/

function myReady(fn){

    //对于现代浏览器，对DOMContentLoaded事件的处理采用标准的事件绑定方式
    if ( document.addEventListener ) {
        document.addEventListener("DOMContentLoaded", fn, false);
    } else {
        IEContentLoaded(fn);
    }

    //IE模拟DOMContentLoaded
    function IEContentLoaded (fn) {
        var d = window.document;
        var done = false;

        //只执行一次用户的回调函数init()
        var init = function () {
            if (!done) {
                done = true;
                fn();
            }
        };

        (function () {
            try {
                // DOM树未创建完之前调用doScroll会抛出错误
                d.documentElement.doScroll('left');
            } catch (e) {
                //延迟再试一次~
                setTimeout(arguments.callee, 50);
                return;
            }
            // 没有错误就表示DOM树创建完毕，然后立马执行用户回调
            init();
        })();
        //监听document的加载状态
        d.onreadystatechange = function() {
            // 如果用户是在domReady之后绑定的函数，就立马执行
            if (d.readyState == 'complete') {
                d.onreadystatechange = null;
                init();
            }
        }
    }
}

