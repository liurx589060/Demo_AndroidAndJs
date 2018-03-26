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
        "./JsUtils.js",
        "./qqsdk.js"
    ];
    function callback(){
        jsList.length?obj.loadScript(jsList.shift(),callback)
            :(function(){time =null})();
    }
    var time = setTimeout(function(){obj.loadScript(jsList.shift(),callback)},25);
})();

var BaseJsUtil = function () {

}

BaseJsUtil.prototype.init = function (params) {
    // 写入初始化逻辑，params为json
    JsUtils.initResult(JsUtils.SUCCESS,"status=" + H5YSDK.isYYB,"");
}

BaseJsUtil.prototype.login = function (params) {
    // 写入登入逻辑,params为json
    H5YSDK.ui.titleBar.show(function(state){
        if(state == H5YSDK.STATE.SUCCESS){
            //显示成功
            JsUtils.loginResult(JsUtils.SUCCESS,"显示成功","");
        }else {
            JsUtils.loginResult(state,"","显示失败--" + state);
        }
    });
}

BaseJsUtil.prototype.pay = function (params) {
    // 写入支付逻辑,params为json
    H5YSDK.pay({
        saveValue: 1,
        zoneId: "1",
        offerid: "XXXX",
        openid: "XXX",
        openkey: "XXX",
        pf: "XXX",
        pfkey: "XXX",
        onError: function(ret){
            JsUtils.payResult(ret.code,"","error=" + ret.msg);
        },
        onSuccess: function(ret){
            JsUtils.payResult(ret.code,"success=" + ret.msg,"");
        }
    });
}

BaseJsUtil.prototype.extraMethods = function (type,params) {
    // 写入额外方法逻辑,params为json
    JsUtils.extraResult(type,JsUtils.SUCCESS,params,"");
}

// 不要改变上面的方法名，请保留

//下面可以写入扩展方法
