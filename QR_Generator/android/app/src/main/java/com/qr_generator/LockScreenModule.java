package com.qr_generator;

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
    private ReactApplicationContext rAppContext;

    public LockScreenModule(ReactApplicationContext reactContext) {
        super(reactContext);
        rAppContext = reactContext;

        SharedPreferencesUtil.init(reactContext);

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
            SharedPreferencesUtil.setBoolean(Lockscreen.ISLOCK, value);
            if (value) {
                Lockscreen.getInstance(rAppContext).startLockscreenService();
            } else {
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
