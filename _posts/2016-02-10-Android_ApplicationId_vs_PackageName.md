---
layout: post
title:  "应用的包名：ApplicationId vs PackageName"
categories: Android
tags: [Android]
---
在 Eclipse 的 Android 项目中在 AndroidManifest 中指定包名，该包名既用于命名资源类的包名，也用于指定应用的唯一标识：

## ApplicationId vs PackageName

``` xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.example.app"
    android:versionCode="1"
    android:versionName="1.0" >
```

而在 Android Studio 中使用 Gradle 构建 Android 项目，将包名进行了拆分：

1. 在 **AndroidManifest.xml** 中指定 package，用来命名资源类的包名，最后生成的 R 类文件位于该包下，如果其他包里面的代码需要引用资源时，就需要导入 com.example.app.R。
2. 在 **build.gradle** 中指定应用程序的唯一标识 applicationId，该标识用于上传到应用商店区分不同的应用：

``` shell
apply plugin: 'com.android.application'
android {
    defaultConfig {
        applicationId "com.example.my.app"
        ...
    }
    ...
}
```

这样将包名拆分后：
1. 代码进行重构时改变 Manifest 中的 package 不会影响应用的唯一标识；
2. 如果需要生成不同的包时，只需要在 build.gradle 中为不同的 Flavors 和构建类型修改应用程序的 applicationId 即可，而不需要修改其他代码：

``` groovy
    productFlavors {
        pro {
            applicationId = "com.example.app.pro"
        }
        free {
            applicationId = "com.example.app.free"
        }
    }
    buildTypes {
        debug {
            applicationIdSuffix ".debug"
        }
    }
    ...
```

**注：**
1. 如果没有在 build.gradle 中定义 applicationId，那么 applicationId 将默认为 AndroidManifest.xml 中所指定的 package 的值。
2. AndroidManifest.xml 中的 package 值必须指定，如果有多个 Manifest 时，该值是可选的，但如果指定了，必须与主 Manifest 中指定的 package 值完全相同。

---

## 参考资料

### [ApplicationId versus PackageName](http://tools.android.com/tech-docs/new-build-system/applicationid-vs-packagename)
