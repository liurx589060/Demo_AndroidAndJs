package com.lrx.androidandjs.callback;

/**
 * Created by daven.liu on 2018/3/22 0022.
 */

public interface JsCallback {
    void onSuccess(String result);
    void onError(int code,String errorMsg);
    void onCancel();
}
