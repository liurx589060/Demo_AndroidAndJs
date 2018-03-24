// 不要改变下面的方法名，请保留
(function() { //加载
    var obj =  {};
    /**
     * 动态加载脚本函数
     * @param url 要加载的脚本路径
     * @param callback  回调函数
     */
    obj.loadScript =function(url,callback){
        var doc = document;
        var script = doc.createElement("script");
        script.type = "text/javascript";
        if(script.readyState){ //IE
            script.onreadystatechange = function(){
                if(script.readyState=="load"||script.readyState=="complete"){
                    script.onreadystatechange = null;
                    callback();
                }
            };
        }else{
            script.onload = function(){
                callback();
            };
        }
        script.src = url;
        doc.getElementsByTagName("head")[0].appendChild(script);
    };
    var jsList = [
        "http://cdn.static.runoob.com/libs/jquery/2.0.0/jquery.min.js"
    ];
    function callback(){
        jsList.length?obj.loadScript(jsList.shift(),callback)
            :(function(){time =null})();
        $(document).ready(function(){
            $("p").click(function(){
                this.log("click");
                $(this).hide();
            });
        });
    }
    var time = setTimeout(function(){obj.loadScript(jsList.shift(),callback)},25);
})();

var BaseJsUtil = function () {

}
BaseJsUtil.prototype.loginResult = function (result) {
    window.JSInterface.loginResult(result);
}

BaseJsUtil.prototype.payResult = function (result) {
    window.JSInterface.payResult(result);
}

BaseJsUtil.prototype.initResult = function (result) {
    window.JSInterface.initResult(result);
}

BaseJsUtil.prototype.extraResult = function (type,result) {
    window.JSInterface.extraResult(type,result);
}

BaseJsUtil.prototype.log = function (message) {
    // 写入额外方法逻辑,params为json
    window.JSInterface.log(message);
}

BaseJsUtil.prototype.init = function (params) {
    // 写入初始化逻辑，params为json
    this.initResult(params);
}

BaseJsUtil.prototype.login = function (params) {
    // 写入登入逻辑,params为json
    this.loginResult(params);
}

BaseJsUtil.prototype.pay = function (params) {
    // 写入支付逻辑,params为json
    this.payResult(params);
}

BaseJsUtil.prototype.extraMethods = function (type,params) {
    // 写入额外方法逻辑,params为json
    this.extraResult(type,params);
}

// 不要改变上面的方法名，请保留

//下面可以写入扩展方法
