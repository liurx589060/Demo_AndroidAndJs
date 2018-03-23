// 不要改变下面的方法名，请保留

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

BaseJsUtil.prototype.init = function (params) {
    // 写入初始化逻辑，params为json
    this.loginResult(params);
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
