---
layout: post
title:  "Android中不常用的类和方法"
categories: Android
tags: [Android]
---
## 1. [android.media.MediaMetadataRetriever](http://developer.android.com/intl/zh-cn/reference/android/media/MediaMetadataRetriever.html)
获取媒体文件的信息。

``` java
MediaMetadataRetriever mmr = new MediaMetadataRetriever();
try {
    // 设置数据源
    mmr.setDataSource(filePath);
    // 读取媒体文件信息
    mmr.extractMetadata(MediaMetadataRetriever.METADATA_KEY_XXX);

    // 获取网络流媒体的信息
    mmr.setDataSource(filePath);
} catch (Exception e) {
    e.printStackTrace();
}
```

## 2. [android:clipToPadding](http://developer.android.com/reference/android/view/ViewGroup.html#attr_android:clipToPadding)
android:clipToPadding 属性定义了是否允许 ViewGroup 在 padding 内绘制，默认为 true（不允许在 padding 内绘制）。
如果要实现 `ListView` 的第一个或者最后一个 Item 有 padding 效果，但是滚动时不存在 padding，可以设置该属性值为 false。

``` java
// XML:
<ListView
    ...
    android:paddingTop=""
    android:paddingBottom=""
    android:clipToPadding="false" />

// Java code:
listView.setPaddingTop();
listView.setPaddingBottom();
listView.setClipToPadding(false);
```

实现的效果见下图：

![clipToPadding](http://upload-images.jianshu.io/upload_images/1320493-d1c55e2c651c6c29.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
