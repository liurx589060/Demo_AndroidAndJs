package com.lrx.androidandjs.callback;

/**
 * Created by daven.liu on 2018/3/23 0023.
 */

public interface JsExtraCallback {
    void onSuccess(int type,String result);
    void onError(int type,int code,String errorMsg);
    void onCancel(int type);
}
