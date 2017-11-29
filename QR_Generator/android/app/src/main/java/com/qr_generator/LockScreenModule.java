package com.qr_generator;

import android.content.Context;

import com.facebook.common.util.ExceptionWithNoStacktrace;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.module.annotations.ReactModule;
import com.github.dubu.lockscreenusingservice.R;
import com.github.dubu.lockscreenusingservice.Lockscreen;
import com.github.dubu.lockscreenusingservice.SharedPreferencesUtil;
/**
 * Created by oexall on 2017/11/28.
 */

@ReactModule(name = "LockScreenAndroid")
public class LockScreenModule extends ReactContextBaseJavaModule {
    @Override
    public String getName() { return ("LockScreenAndroid"); }

    private boolean lockScreenEnabled = false;
    private Context rAppContext;

    public LockScreenModule(ReactApplicationContext reactContext) {
        super(reactContext);
        rAppContext = reactContext.getApplicationContext();

        SharedPreferencesUtil.init(rAppContext);

        lockScreenEnabled = SharedPreferencesUtil.get(Lockscreen.ISLOCK);
    }

    @ReactMethod
    public void getLockScreenEnabled(Promise promise) {
        WritableMap map = Arguments.createMap();
        map.putBoolean("LockScreenEnabled", this.lockScreenEnabled);
        promise.resolve(map);
    }

    @ReactMethod
    public void GetTestString(Promise promise) {
        WritableMap map = Arguments.createMap();
        map.putString("Test", "Hello World!");
        promise.resolve(map);
    }

    @ReactMethod
    public void setLockScreenEnabled(Boolean value, Promise promise) {
        try {
            if (value) {
                SharedPreferencesUtil.setBoolean(Lockscreen.ISLOCK, true);
                Lockscreen.getInstance(rAppContext).startLockscreenService();
            } else {
                SharedPreferencesUtil.setBoolean(Lockscreen.ISLOCK, false);
                Lockscreen.getInstance(rAppContext).stopLockscreenService();
            }

            WritableMap map = Arguments.createMap();
            map.putBoolean("LockScreenEnabled", value);
            promise.resolve(map);
        } catch (Exception e) {
            promise.reject("E_EXCEPTION", e);
        }
    }
}
