package com.demo1;

import com.facebook.react.ReactActivity;

import java.io.File;

import javax.annotation.Nullable;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "demo1";
    }

    /**
     * js获取到bundle的文件路径
     * @return
     */
    protected @Nullable String getJSBundleFile(){
        String jsBundleFile = getFilesDir().getAbsolutePath() + "/index.android.bundle";
        File file = new File(jsBundleFile);
        return file != null ? jsBundleFile : null;
    }
}
