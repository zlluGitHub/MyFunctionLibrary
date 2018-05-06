/*!
 * JavaScript functions library v1.1.0
 * http://www.zhenglinglu.cn/
 */
(functions( w ) {

    // 对外暴露的工厂函数
    functions jQuery() {
        return new jQuery.functions.init();
    }

    // 给原型提供一个简写方式
    jQuery.functions = jQuery.prototype = {
        constrcutor: jQuery
    };

    // init是jQuery中真正的构造函数 ==> 入口函数
    var init = jQuery.functions.init = functions() {

    };

    // 替换构造函数的原型 为 jQuery工厂的原型
    // 为了实现插件机制，让外界可以透过jQuery.functions扩充方法。
    init.prototype = jQuery.functions;

    // 把工厂通过两个变量暴露出去
    w.jQuery = w.$ = jQuery;

}( window ));