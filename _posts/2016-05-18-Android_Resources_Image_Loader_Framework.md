---
layout: post
title:  "Android开发资料收集：图片加载框架"
categories: Android
tags: [Android, 资料]
date: 2016-05-18 02:00:00
---
## 目录

* <a href="{% post_url 2016-05-18-Android_Resources_Network_Framework %}">网络请求框架</a>
* 图片加载框架
* <a href="{% post_url 2016-05-18-Android_Resources_DI_Framework %}">依赖注入框架</a>
* <a href="{% post_url 2016-05-18-Android_Resources_Eventbus_Framework %}">事件总线框架</a>
* <a href="{% post_url 2016-05-18-Android_Resources_ReactiveX %}">响应式编程</a>
* <a href="{% post_url 2016-05-18-Android_Resources_Views %}">视图、组件、自定义控件</a>
* <a href="{% post_url 2016-05-18-Android_Resources_Animation %}">动画</a>
* <a href="{% post_url 2016-05-18-Android_Resources_Media %}">多媒体开发</a>
* <a href="{% post_url 2016-05-18-Android_Resources_NDK %}">NDK开发</a>
* <a href="{% post_url 2016-05-18-Android_Resources_Database %}">数据库开发</a>
* <a href="{% post_url 2016-05-18-Android_Resources_Dynamic %}">动态加载、插件化、热修复技术</a>
* <a href="{% post_url 2016-05-18-Android_Resources_Optimize_Capacity %}">性能优化</a>
* <a href="{% post_url 2016-05-18-Android_Resources_Java %}">Java高级</a>
* <a href="{% post_url 2016-05-18-Android_Resources_Design_Pattern %}">设计模式、系统架构</a>
* <a href="{% post_url 2016-05-18-Android_Resources_Tools_Tests %}">开发工具、测试</a>
* <a href="{% post_url 2016-05-18-Android_Resources_Foods %}">干货</a>

<br />

## 图片加载框架

### [Universal Image Loader](https://github.com/nostra13/Android-Universal-Image-Loader)

1. [安卓图片异步加载开源库：Universal Image Loader](http://www.jcodecraeer.com/a/anzhuokaifa/androidkaifa/2013/0829/1526.html)
2. [使用ImageLoader实现图片异步加载](http://blog.csdn.net/hhhccckkk/article/details/8898651)
3. [Android-Universal-Image-Loader 图片异步加载类库的使用（超详细配置）](http://blog.csdn.net/vipzjyno1/article/details/23206387)
4. [Universal-ImageLoader源码解析](http://www.kancloud.cn/qibin0506/android-src/117691)
5. [Android Universal Image Loader 源码分析](http://a.codekk.com/detail/Android/huxian99/Android%20Universal%20Image%20Loader%20%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90)

### [Fresco](https://github.com/facebook/fresco)

1. [Fresco 中文文档](http://fresco-cn.org)
2. [FaceBook推出的Android图片加载库-Fresco](http://www.devtf.cn/?p=130)
3. [Fresco之强大之余的痛楚](http://www.jianshu.com/p/5364957dcf49)
4. 【Fresco源码解析】系列
    [Fresco源码解析 - 本地编译](http://blog.csdn.net/feelang/article/details/45083067)
    [Fresco源码解析 - Hierarachy-View-Controller](http://blog.csdn.net/feelang/article/details/45126421)
    [Fresco源码解析 - DraweeView](http://blog.csdn.net/feelang/article/details/45200561)
    [Fresco源码解析 - 初始化过程分析](http://blog.csdn.net/feelang/article/details/45419097)
    [Fresco源码解析 - DataSource怎样存储数据](http://blog.csdn.net/feelang/article/details/45420999)

### [Glide](https://github.com/bumptech/glide)

1. [Google推荐的图片加载库Glide介绍](http://www.devtf.cn/?p=144)
2. [Glide 一个专注于平滑滚动的图片加载和缓存库](http://www.jianshu.com/p/4a3177b57949)
3. [Glide - Getting Started](http://mrfu.me/2016/02/27/Glide_Getting_Started)
4. [Android Glide源码解析](http://frodoking.github.io/2015/10/10/android-glide)

### [Picasso](http://square.github.io/picasso)

1. [Picasso — Getting Started & Simple Loading](https://futurestud.io/blog/picasso-getting-started-simple-loading)
2. [Android图片下载缓存库picasso解析](http://blog.csdn.net/xu_fu/article/details/17043231)
3. [使用Picasso加载图片的内存优化实践](http://www.jianshu.com/p/6b746c904a49)
4. [Android图片加载库Picasso源码分析](http://www.cnblogs.com/puff/p/5124997.html)
5. [Android 三大图片缓存原理、特性对比](http://www.trinea.cn/android/android-image-cache-compare)
6. [Fresco 与 Picasso 、Glide 的比较](http://blog.qiji.tech/archives/6344)

## 总结

> 下面这张图片对这几个图片请求框架进行了比较：
>
> ![图片请求框架比较.jpg](http://upload-images.jianshu.io/upload_images/1320493-f85cac01309e169e.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
>
> `UIL`：相对于其他框架比较中庸，配置比较丰富，最老牌，使用也最广泛。
>
> `Fresco`：Facebook 出品，对于5.0以下系统有更好的内存管理，缺点是库相对庞大（2MB左右，0.9.0版本方法数：12984）。
>
> `Glide`：功能强大、高效，支持 Gif 图片，能够监控 Activity 的生命周期，支持缩略图和图片显示的动画，缺点是方法数相对较多（3.7.0版本方法数：2879），Glide 和 Picasso 很相似。
>
> `Picasso`：Square 出品，必属精品。代码逻辑简单、清楚，相对于 Glide 方法数很少（2.5.2版本方法数：849），但是不支持 Gif。
>
> **Glide 和 Picasso 都是很优秀的图片加载框架，对于项目较大需要限制方法数或者对于加载 Gif 没有需求的项目推荐使用 Picasso。**
