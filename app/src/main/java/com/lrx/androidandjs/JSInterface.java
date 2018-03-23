package com.lrx.androidandjs;

import android.app.Activity;
import android.content.Context;
import android.os.Build;
import android.support.annotation.NonNull;
import android.support.annotation.RequiresApi;
import android.util.Log;
import android.webkit.JavascriptInterface;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import com.google.gson.Gson;
import com.lrx.androidandjs.callback.JsCallback;
import com.lrx.androidandjs.callback.JsExtraCallback;

import java.util.Map;

/**
 * Created by daven.liu on 2018/3/22 0022.
 */

public class JSInterface {
    private Activity activity;
    private WebView webView;
    private JsCallback loginCallback;
    private JsCallback payCallback;
    private JsCallback initCallback;
    private JsExtraCallback extraCallback;
    private Gson gson;

    public static final int ERROR_LOGIN_NULL = 4000;
    public static final int ERROR_LOAD_METHOD = 4001;
    public static final int ERROR_PARSE_JSON = 4002;
    public static final int SUCCESS = 200;

    public JSInterface(Activity activity) {
        this.activity = activity;
        gson = new Gson();
        webView = new WebView(activity);
        webView.getSettings().setJavaScriptEnabled(true);
        //在js中调用本地java方法
        webView.addJavascriptInterface(this, "JSInterface");
//        webView.setWebViewClient(new MyWebViewClient(activity));
        webView.loadUrl("file:///android_asset/webHtml.html");
    }

    public void jsLogin(@NonNull Map params,JsCallback callback) {
        this.loginCallback = callback;
        String method = "login('hasdferekkdferer')";
        Log.e("yy",method);
        if(!loadJsMethod(method)){
            if(callback != null) {
                callback.onError(ERROR_LOAD_METHOD,"load js method error");
            }
        }
    }

    public void jsPay(@NonNull Map params, JsCallback callback) {
        this.payCallback = callback;
        String method = "pay('sssssssss')";
        if(!loadJsMethod(method)){
            if(callback != null) {
                callback.onError(ERROR_LOAD_METHOD,"load js method error");
            }
        }
    }

    public void jsInit(@NonNull Map params, JsCallback callback) {
        this.initCallback = callback;
        String method = "init('init-sssssssss')";
        if(!loadJsMethod(method)){
            if(callback != null) {
                callback.onError(ERROR_LOAD_METHOD,"load js method error");
            }
        }
    }

    public void jsExtraMethods(int type,@NonNull Map params, JsExtraCallback callback) {
        this.extraCallback = callback;
        String method = "extraMethods(" + type + ", 'extra-sssssssss')";
        if(!loadJsMethod(method)){
            if(callback != null) {
                callback.onError(type,ERROR_LOAD_METHOD,"load js method error");
            }
        }
    }

    private boolean loadJsMethod(String method) {
        try {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
                webView.evaluateJavascript(method, null);
            }
            else {
                webView.loadUrl("javascript:" + method);
            }
            return true;
        }catch (Exception e) {
            Log.e("yy",e.toString());
            return false;
        }
    }

    @JavascriptInterface
    public void loginResult(String loginResult) {
        Log.e("yy","loginReuslt=" + loginResult);
        parseLoginResult(loginResult);
    }

    @JavascriptInterface
    public void payResult(String payResult) {
        Log.e("yy","payResult=" + payResult);
        parsePayResult(payResult);
    }

    @JavascriptInterface
    public void initResult(String initResult) {
        Log.e("yy","initResult=" + initResult);
        parseInitResult(initResult);
    }

    @JavascriptInterface
    public void extraResult(int type,String extraResult) {
        Log.e("yy","extraResult=" + extraResult);
        parseExtraResult(type,extraResult);
    }

    @JavascriptInterface
    public void log(String msg) {
        Log.i("yy","" + msg);
    }

    private void parseLoginResult(final String loginResult) {
        if(loginCallback != null) {
            activity.runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    loginCallback.onSuccess(loginResult);
                }
            });
        }
    }

    private void parsePayResult(final String payResult) {
        if(payCallback != null) {
            activity.runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    payCallback.onSuccess(payResult);
                }
            });
        }
    }

    private void parseInitResult(final String initResult) {
        if(initCallback != null) {
            activity.runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    initCallback.onSuccess(initResult);
                }
            });
        }
    }

    private void parseExtraResult(final int type, final String extraResult) {
        if(extraCallback != null) {
            activity.runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    extraCallback.onSuccess(type,extraResult);
                }
            });
        }
    }

    private class MyWebViewClient extends WebViewClient {
        private Context context;

        public MyWebViewClient(Context context) {
            this.context = context;
        }

        @RequiresApi(api = Build.VERSION_CODES.LOLLIPOP)
        @Override
        public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
            return shouldOverrideUrlLoading(view,request.getUrl().toString());
        }

        @RequiresApi(api = Build.VERSION_CODES.LOLLIPOP)
        @Override
        public WebResourceResponse shouldInterceptRequest(WebView view, WebResourceRequest request) {
            return shouldInterceptRequest(view,request.getUrl().toString());
        }

        @Override
        public boolean shouldOverrideUrlLoading(WebView view, String url) {
            view.loadUrl(url);
            return true;
        }

        @Override
        public WebResourceResponse shouldInterceptRequest(WebView view, String url) {
            if (url.endsWith("baseJs.js")) {
                Log.i("result", url);
                return editResponse();
            }
            return super.shouldInterceptRequest(view, url);
        }

        private WebResourceResponse editResponse() {
            try {
                Log.i("result", "加载本地jquery.js");
                return new WebResourceResponse("application/x-javascript", "utf-8", context.getAssets().open("baseJs.js"));
            } catch (Exception e) {
                e.printStackTrace();
                Log.e("result", "加载本地js错误："+e.toString());
            }
            //需处理特殊情况
            return null;
        }
    }
}
