package com.lrx.androidandjs;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

import com.lrx.androidandjs.callback.JsCallback;
import com.lrx.androidandjs.callback.JsExtraCallback;

public class MainActivity extends AppCompatActivity {
    private Button mBtnLogin;
    private Button mBtnPay;
    private Button mBtnInit;
    private Button mBtnExtra;
    private JSInterface jsInterface;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        init();
    }

    private void init() {
        jsInterface = new JSInterface(this);
        mBtnLogin = findViewById(R.id.login);
        mBtnPay = findViewById(R.id.pay);
        mBtnInit = findViewById(R.id.init);
        mBtnExtra = findViewById(R.id.extra);
        mBtnLogin.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                jsInterface.jsLogin(null,new JsCallback() {
                    @Override
                    public void onSuccess(String result) {
                        Toast.makeText(MainActivity.this,result,Toast.LENGTH_SHORT).show();
                    }

                    @Override
                    public void onError(int code, String errorMsg) {
                        Toast.makeText(MainActivity.this,"code=" + code + "--errorMsg=" + errorMsg,Toast.LENGTH_SHORT).show();
                    }

                    @Override
                    public void onCancel() {
                        Toast.makeText(MainActivity.this,"cancel",Toast.LENGTH_SHORT).show();
                    }
                });
            }
        });

        mBtnPay.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                jsInterface.jsPay(null, new JsCallback() {
                    @Override
                    public void onSuccess(String result) {
                        Toast.makeText(MainActivity.this,result,Toast.LENGTH_SHORT).show();
                    }

                    @Override
                    public void onError(int code, String errorMsg) {
                        Toast.makeText(MainActivity.this,"code=" + code + "--errorMsg=" + errorMsg,Toast.LENGTH_SHORT).show();
                    }

                    @Override
                    public void onCancel() {
                        Toast.makeText(MainActivity.this,"cancel",Toast.LENGTH_SHORT).show();
                    }
                });
            }
        });

        mBtnInit.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                jsInterface.jsInit(null, new JsCallback() {
                    @Override
                    public void onSuccess(String result) {
                        Toast.makeText(MainActivity.this,result,Toast.LENGTH_SHORT).show();
                    }

                    @Override
                    public void onError(int code, String errorMsg) {
                        Toast.makeText(MainActivity.this,"code=" + code + "--errorMsg=" + errorMsg,Toast.LENGTH_SHORT).show();
                    }

                    @Override
                    public void onCancel() {
                        Toast.makeText(MainActivity.this,"cancel",Toast.LENGTH_SHORT).show();
                    }
                });
            }
        });

        mBtnExtra.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                jsInterface.jsExtraMethods(100, null, new JsExtraCallback() {
                    @Override
                    public void onSuccess(int type, String result) {
                        Toast.makeText(MainActivity.this,result + "--type=" + type,Toast.LENGTH_SHORT).show();
                    }

                    @Override
                    public void onError(int type, int code, String errorMsg) {
                        Toast.makeText(MainActivity.this,"code=" + code + "--errorMsg=" + errorMsg,Toast.LENGTH_SHORT).show();
                    }

                    @Override
                    public void onCancel(int type) {
                        Toast.makeText(MainActivity.this,"cancel",Toast.LENGTH_SHORT).show();
                    }
                });
            }
        });


    }
}
