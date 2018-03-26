var JsUtils = function () {

};
JsUtils.SUCCESS=200;
JsUtils.CANCEL=1000;
JsUtils.ERROR_UNKOWN=2000;

JsUtils.loginResult = function (code,result,errorMsg) {
    window.JSInterface.loginResult(this.toJson(code,result,errorMsg));
}

JsUtils.payResult = function (code,result,errorMsg) {
    window.JSInterface.payResult(this.toJson(code,result,errorMsg));
}

JsUtils.initResult = function (code,result,errorMsg) {
    window.JSInterface.initResult(this.toJson(code,result,errorMsg));
}

JsUtils.extraResult = function (type,code,result,errorMsg) {
    window.JSInterface.extraResult(this.toTypeJson(type,code,result,errorMsg));
}

JsUtils.log = function (message) {
    // 写入额外方法逻辑,params为json
    window.JSInterface.log(message);
}

JsUtils.toJson = function (code,data,errorMsg) {
    var row = {};
    row.type = "";
    row.code = code;
    row.data = data;
    row.errorMsg = errorMsg;
    return JSON.stringify(row);
}

JsUtils.toTypeJson = function (type,code,data,errorMsg) {
    var row = {};
    row.type = type;
    row.code = code;
    row.data = data;
    row.errorMsg = errorMsg;
    return JSON.stringify(row);
}
