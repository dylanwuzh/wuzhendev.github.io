---
layout: post
title:  "Android笔记"
categories: Android
tags: [Android]
---
## 判断 Activity 是否为 Task 的根

**方法：**`Activity.isTaskRoot()`

``` java
/**
 * 判断当前 Activity 是否为 Activity 堆栈的根。
 *
 * @return
 *    如果该 Activity 是堆栈的根则返回 true，否则返回 false
 */
boolean isTaskRoot()
```

## 把当前应用切换到后台

**方法：**`Activity.moveTaskToBack(boolean nonRoot)`

**说明：**当前栈中 Activity 顺序为：A -> B，在 B 中调用该方法退到后台，此时 Activity 堆栈中的顺序不会改变，重新启动应用，会调用 B 的 onRestart -> onStart -> onResume 方法，不会调用 onCreate 方法。

``` java
/**
 * 该方法可以实现类似 Home 键的功能，让应用退到后台。
 *
 * @param nonRoot
 *    如果是 false，则只有当前 Activity 是 Task 的根时才会退到后台
 *    如果是 true，不管当前 Activity 是否为 Task 的根都会退到后台
 * @return
 *    如果该 Activity 已经移动到后台则返回 true，否则返回 false
 */
boolean moveTaskToBack(boolean nonRoot)
```

## 获取资源对应的尺寸值

**方法：**`Resources.getDimension(int id)`、`getDimensionPixelSize(int id)`、`getDimensionPixelOffset(int id)`

```
/**
 * 基于当前 DisplayMetrics 进行转换，获取指定资源对应的 float 类型的尺寸值。
 */
 float getDimension(@DimenRes int id)

/**
 * 获取到资源对应的 float 类型尺寸值后对小叔部分做四舍五入，转换成 int 类型。
 */
 int getDimensionPixelSize(@DimenRes int id)

/**
 * 获取到资源对应的 float 类型尺寸值后做取整操作，舍弃小数部分，转换成 int 类型。
 */
 int getDimensionPixelOffset(@DimenRes int id)
```

## Gradle version 2.10 is required

Gradle 升级到2.10版本后，使用 `gradle uploadArchives` 提示：
> Gradle version 2.10 is required. Current version is 2.5. If using the gradle wrapper, try editing the distributionUrl in xxx/gradle/wrapper/gradle-wrapper.properties to gradle-2.10-all.zip

但是在项目中已经修改了 gradle-wrapper.properties

**解决方法：**
在 Project 的 build.gradle 中添加：

``` groovy
buildscript {
    System.properties['com.android.build.gradle.overrideVersionCheck'] = 'true'
    ...
}
```

## TextView 自动判断内容是电话、Email、URL

**方法：**
1、在 XML 中指定`android:autoLink`属性：

``` xml
<TextView
    android:autoLink="all"
    />
```

2、使用 `Linkify.addLinks`：

``` java
/**
 * @param mask
 *    Linkify.WEB_URLS：判断是否是网址
 *    Linkify.EMAIL_ADDRESSES：判断是否是 Email 地址
 *    Linkify.PHONE_NUMBERS：判断是否是电话
 *    Linkify.MAP_ADDRESSES：判断是否是地图的地址
 *    Linkify.ALL：WEB_URLS | EMAIL_ADDRESSES | PHONE_NUMBERS | MAP_ADDRESSES
 */
Linkify.addLinks(TextView text, int mask)
```

## 读取 AndroidManifest 中配置的 meta-data 信息

1、读取 application 下的 <meta-data> 元素：

``` java
ApplicationInfo ai = Context.getPackageManager().getApplicationInfo(
        Context.getPackageName(), PackageManager.GET_META_DATA);
Object value = ai.metaData.get(String key);
```

2、读取 activity 下的 <meta-data> 元素：

``` java
ActivityInfo ai = Context.getPackageManager().getActivityInfo(
        Activity.getComponentName(), PackageManager.GET_META_DATA);
Object value = ai.metaData.get(String key);
```

3、读取 service 下的 <meta-data> 元素：

``` java
ComponentName component = new ComponentName(Context, Service.class);
ServiceInfo si = Context.getPackageManager().getServiceInfo(
        component, PackageManager.GET_META_DATA);
Object value = si.metaData.get(String key);
```

4、读取 receiver 下的 <meta-data> 元素：

``` java
ComponentName component = new ComponentName(Context, Receiver.class);
ActivityInfo ai = getPackageManager().getReceiverInfo(
        component, PackageManager.GET_META_DATA);
Object value = ai.metaData.get(String key);
```

## 使用 Gradle 进行 NDK 开发时打印 Log

使用 Android Studio 进行 NDK 开发时打印 LOG 出现提示信息：
> undefined reference to `__android_log_print'

原因是 Android Studio 在 build 时会自动生成 Android.mk 文件，导致之前手动配置的 Android.mk 文件失效

**解决方法：**
修改 Module 的 build.gradle 配置文件：

``` groovy
defaultConfig {
    ndk {
        ldLibs "log", "z", "m"
    }
    ...
}
```

## 使用 [retrolambda](https://github.com/orfjackal/retrolambda) 支持 Lambda 表达式

**方法：**
1、下载和安装 jdk8
2、在 Project 中的 build.gradle 添加 retrolambda 的依赖：

``` groovy
buildscript {
    repositories {
        mavenCentral()
    }
    dependencies {
        classpath 'me.tatarka:gradle-retrolambda:3.2.5'
    }
}
```

3、在 Module 中的 build.gradle 添加 plugin：

``` groovy
apply plugin: 'me.tatarka.retrolambda'
```

4、在 Module 中的 build.gradle 指定 compileOptions：

``` groovy
android {
    compileOptions {
        sourceCompatibility JavaVersion.VERSION_1_8
        targetCompatibility JavaVersion.VERSION_1_8
    }
}
```

5、在 Module 中的 build.gradle 指定源码编译的级别：

``` groovy
retrolambda {
    // 指定源码编译到兼容 Java 1.6 版本
    javaVersion JavaVersion.VERSION_1_6
}
```

## 获取媒体文件的信息

使用 [MediaMetadataRetriever](http://developer.android.com/intl/zh-cn/reference/android/media/MediaMetadataRetriever.html) 类获取媒体文件的信息。

``` java
MediaMetadataRetriever mmr = new MediaMetadataRetriever();

// 设置数据源
mmr.setDataSource(filePath);

// 读取媒体文件信息
mmr.extractMetadata(MediaMetadataRetriever.METADATA_KEY_XXX);

// 获取网络流媒体的信息
mmr.setDataSource(filePath);
```

## ListView 添加 padding 效果

**方法：** [android:clipToPadding](http://developer.android.com/reference/android/view/ViewGroup.html#attr_android:clipToPadding)

该属性定义了是否允许 ViewGroup 在 padding 内绘制，默认为 true（不允许在 padding 内绘制）。

如果要实现 `ListView` 的第一个或者最后一个 Item 有 padding 效果，但是滚动时不存在 padding，可以设置该属性值为 false。

1、XML代码：

``` xml
<ListView
    android:paddingTop=""
    android:paddingBottom=""
    android:clipToPadding="false"
    />
```

2、Java代码：

``` java
listView.setPaddingTop();
listView.setPaddingBottom();
listView.setClipToPadding(false);
```

实现的效果见下图：

![clipToPadding](/assets/images/posts/2016-07-04-android_notes_1.jpg)

## Mac 系统 Android Studio 的 Maven 本地仓库的目录

**环境：** Android Studio 2.0、Gradle 2.10

本地仓库路径为：`~/.gradle/caches/modules-2/`

## Android Studio 清除本地缓存的 Gradle 项目

方法：`rm -rf $HOME/.gradle/caches/`

## 重启应用的方法

``` java
Intent intent = new Intent(this, Activity.class);
PendingIntent mPendingIntent = PendingIntent.getActivity(Context, requestCode,
        intent, PendingIntent.FLAG_CANCEL_CURRENT);
AlarmManager am = (AlarmManager) Context.getSystemService(Context.ALARM_SERVICE);
am.set(AlarmManager.RTC, System.currentTimeMillis() + 100, mPendingIntent);
System.exit(0);
```

## 解决ListView的Item有Button时Item本身不能点击

在 Item 的根视图上添加代码：

``` xml
<ListView
    android:descendantFocusability="blocksDescendants"
    />
```

## 限制输入框输入的字符

使用 `android:digits` 属性，只有该属性指定的值才能输入：

``` xml
<EditText
    android:digits="1234567890abcdefghijklmnopqrstuvwxyz"
    />
```

## 获取当前线程的ID和名称

``` java
// 获取线程的 ID
Thread.currentThread().getId();

// 获取线程的名称
Thread.currentThread().getName());
```

## 清除通知的信息

``` java
NotificationManager nm = (NotificationManager)
        Context.getSystemService(NOTIFICATION_SERVICE); 
// 清除指定的消息
nm.cancel(notificationId);

// 清除所有的消息
nm.cancelAll();
```

## 手机震动

``` java
Vibrator vibrator = (Vibrator) context.getSystemService(VIBRATOR_SERVICE);
// OFF/ON/OFF/ON...
long[] pattern = { 800, 40, 800, 40 };
// repeat: -1不重复，非-1为从pattern的指定下标开始重复
vibrator.vibrate(pattern, repeat);
```

## 使用plurals资源表示各种数量

``` xml
<resources>
    <plurals name="plurals_name">
        <item quantity="one">Just One</item>
        <item quantity="other">There are %d count</item> 
    </plurals>
</resources>
```

``` java
/*
 * 例如：
 * 1. Resources.getQuantityString(R.plurals.plurals_name, 1, 1);
 * 返回：Just One
 *
 * 2. Resources.getQuantityString(R.plurals.plurals_name, 10, 10);
 * 返回：There are 10 count
 */
Resources.getQuantityString(R.plurals.plurals_name, int quantity, Object... args);
```

## 获取指定的进程的运行状态

``` java
/**
 * 获取指定的 Context 对应的应用的运行状态。
 *
 * @param processName
 *         进程的名称，例如：context.getPackageName()
 *
 * @return 若正在前台运行则返回 1，若正在后台运行则返回 2，否则返回 0
 */
public static int getRunningState(Context context, String processName) {
    ActivityManager am = (ActivityManager) context.
            getSystemService(Context.ACTIVITY_SERVICE);
    List<ActivityManager.RunningAppProcessInfo> processInfos =
            am.getRunningAppProcesses();
    for (ActivityManager.RunningAppProcessInfo pi : processInfos) {
        if (pi.processName.equals(processName)) {
            if (pi.importance == ActivityManager.
                    RunningAppProcessInfo.IMPORTANCE_FOREGROUND) {
                return 1;
            }
            return 2;
        }
    }
    return 0;
}
```

## 拍照时获取屏幕的旋转方向

可以通过 `OrientationEventListener` 事件监听屏幕旋转，拍照后使用 `ExifInterface` 写入图片的 Exif 信息

``` java
OrientationEventListener mOrientationEventListener =
        new OrientationEventListener(this) {

    @Override
    public void onOrientationChanged(int orientation) {
        if (45 <= orientation && orientation < 135) {
            ExifInterface.setAttribute(ExifInterface.TAG_ORIENTATION,
                    ExifInterface.ORIENTATION_ROTATE_180 + "");
        } else if (135 <= orientation && orientation < 225) {
            ExifInterface.setAttribute(ExifInterface.TAG_ORIENTATION,
                    ExifInterface.ORIENTATION_ROTATE_270 + "");
        } else if (225 <= orientation && orientation < 315) {
            ExifInterface.setAttribute(ExifInterface.TAG_ORIENTATION,
                    ExifInterface.ORIENTATION_NORMAL + "");
        } else {
            ExifInterface.setAttribute(ExifInterface.TAG_ORIENTATION,
                    ExifInterface.ORIENTATION_ROTATE_90 + "");
        }
    }
};

// 开启屏幕方向旋转事件的监听
mOrientationEventListener.enable();

// 关闭屏幕方向旋转事件的监听
mOrientationEventListener.disable();
```

## 使用Matrix对Bitmap进行旋转和镜像水平垂直翻转

``` java
Matrix matrix = new Matrix();

// 镜像垂直翻转
matrix.postScale(1, -1);

// 镜像水平翻转
matrix.postScale(-1, 1);

// 旋转90度
matrix.postRotate(90);
```
