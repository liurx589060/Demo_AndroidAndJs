package com.lrx.androidandjs;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

import com.lrx.androidandjs.callback.JsCallback;

public class MainActivity extends AppCompatActivity {
    private Button mBtnLogin;
    private Button mBtnPay;
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
                Log.e("yy","pay");
            }
        });


    }
}
