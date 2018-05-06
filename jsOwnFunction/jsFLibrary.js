/*!
 * JavaScript functions library v1.1.0
 * http://www.zhenglinglu.cn/
 */
(function( window ) {

    // 对外暴露的工厂函数
    function jsFL() {
        return new jsFL.functions.init();
    }

    // 给原型提供一个简写方式
    jsFL.functions = jsFL.prototype = {
        constrcutor: jsFL
    };

    // init是jsFL中真正的构造函数 ==> 入口函数
    var init = jsFL.functions.init = functions() {

    };

    // 替换构造函数的原型 为 jsFL工厂的原型
    // 为了实现插件机制，让外界可以透过jsFL.functions扩充方法。
    init.prototype = jsFL.functions;

    // 把工厂通过两个变量暴露出去
    window.jsFL = window.$ = jsFL;

}( window ));
