---
layout: post
title:  "Android开发资料收集：依赖注入框架"
categories: Android
tags: [Android, 资料]
date: 2016-05-18 03:00:00
---
## 目录

* <a href="{% post_url 2016-05-18-Android_Resources_Network_Framework %}">网络请求框架</a>
* <a href="{% post_url 2016-05-18-Android_Resources_Image_Loader_Framework %}">图片加载框架</a>
* 依赖注入框架
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

## 依赖注入框架

### [Dagger](https://github.com/square/dagger)

1. [Dagger on Android－Dagger2详解](http://blog.fidroid.com/post/android/dagger-on-android-dagger2xiang-jie)
2. [使用Dagger 2进行依赖注入](http://codethink.me/2015/08/06/dependency-injection-with-dagger-2/)
3. 【Android：dagger2让你爱不释手】系列
    [Android：dagger2让你爱不释手-基础依赖注入框架篇](http://www.jianshu.com/p/cd2c1c9f68d4)
    [Android：dagger2让你爱不释手-重点概念讲解、融合篇](http://www.jianshu.com/p/1d42d2e6f4a5)
    [Android：dagger2让你爱不释手-终结篇](http://www.jianshu.com/p/65737ac39c44)
4. [Dagger 源码解析](http://codekk.com/blogs/detail/54cfab086c4761e5001b2537)

### [RoboGuice](https://github.com/roboguice/roboguice)

1. 【Android RoboGuice 使用指南】系列
    [Android RoboGuice 使用指南(1):概述](http://blog.csdn.net/mapdigit/article/details/7530077)
    [Android RoboGuice 使用指南(2):第一个例子Hello World](http://blog.csdn.net/mapdigit/article/details/7530078)
    [Android RoboGuice 使用指南(3):Bindings 概述](http://blog.csdn.net/mapdigit/article/details/7530087)
    [Android RoboGuice 使用指南(4):Linked Bindings](http://blog.csdn.net/mapdigit/article/details/7530089)
    [Android RoboGuice 使用指南(5):Binding Annotations](http://blog.csdn.net/mapdigit/article/details/7530091)
    [Android RoboGuice 使用指南(6):Instance Bindings](http://blog.csdn.net/mapdigit/article/details/7533446)
    [Android RoboGuice 使用指南(7):@Provides Methods](http://blog.csdn.net/mapdigit/article/details/7533450)
    [Android RoboGuice 使用指南(8):Provider Bindings](http://blog.csdn.net/mapdigit/article/details/7533451)
    [Android RoboGuice 使用指南(9):Untargetted Bindings](http://blog.csdn.net/mapdigit/article/details/7533453)
    [Android RoboGuice 使用指南(10):Just-in-time Bindings](http://blog.csdn.net/mapdigit/article/details/7533454)
    [Android RoboGuice 使用指南(11):Scopes](http://blog.csdn.net/mapdigit/article/details/7533456)
    [Android RoboGuice 使用指南(12):如何绑定generic类型](http://blog.csdn.net/mapdigit/article/details/7533458)
    [Android RoboGuice 使用指南(13):RoboGuice 功能描述](http://blog.csdn.net/mapdigit/article/details/7533459)
    [Android RoboGuice 使用指南(14):Inject View](http://blog.csdn.net/mapdigit/article/details/7540941)
    [Android RoboGuice 使用指南(15):Inject Context](http://blog.csdn.net/mapdigit/article/details/7540944)
    [Android RoboGuice 使用指南(16):Standard Injection](http://blog.csdn.net/mapdigit/article/details/7540947)
    [Android RoboGuice 使用指南(17):Inject Extra](http://blog.csdn.net/mapdigit/article/details/7540950)
    [Android RoboGuice 使用指南(18):Inject Resources](http://blog.csdn.net/mapdigit/article/details/7540952)
    [Android RoboGuice 使用指南(19):发送接收Events](http://blog.csdn.net/mapdigit/article/details/7551155)
2. 【Android RoboGuice2 使用指南】系列
    [Android RoboGuice2 使用指南(1): 概述](http://blog.csdn.net/mapdigit/article/details/7724194)
    [Android RoboGuice2 使用指南(2): 第一个例子Hello World](http://blog.csdn.net/mapdigit/article/details/7726075)
    [Android RoboGuice2 使用指南(3): Inject 自定义View](http://blog.csdn.net/mapdigit/article/details/7727834)
    [Android RoboGuice2 使用指南(4): 综合示例Astroboy](http://blog.csdn.net/mapdigit/article/details/7729845)

### [AndroidAnnotations](https://github.com/excilys/androidannotations)

1. 【[FastDev4Android框架开发] AndroidAnnnotations注入框架】系列
    [AndroidAnnnotations注入框架介绍和Android Studios基本配置(七)](http://blog.csdn.net/developer_jiangqq/article/details/49468923)
    [AndroidAnnnotations注入框架的工作原理(八)](http://blog.csdn.net/developer_jiangqq/article/details/49471543)
    [AndroidAnnnotations注入框架使用之注入组件Components(九)](http://blog.csdn.net/developer_jiangqq/article/details/49490083)
    [AndroidAnnnotations注入框架使用之Injection标签详解(十)](http://blog.csdn.net/developer_jiangqq/article/details/49497955)
    [AndroidAnnnotations注入框架使用之事件绑定Event Binding(十一)](http://blog.csdn.net/developer_jiangqq/article/details/49512513)
    [AndroidAnnnotations注入框架使用之线程处理Threading(十二)](http://blog.csdn.net/developer_jiangqq/article/details/49518299)
    [AndroidAnnnotations注入框架使用之第三方框架集成RoboGuice(十三)](http://blog.csdn.net/developer_jiangqq/article/details/49530307)
    [AndroidAnnnotations注入框架使用之第三方框架集成Otto事件总线(十四)](http://blog.csdn.net/developer_jiangqq/article/details/49530731)
    [AndroidAnnnotations注入框架使用之第三方框架集成OrmLite(十五)](http://blog.csdn.net/developer_jiangqq/article/details/49530971)
    [AndroidAnnnotations注入框架使用之最佳实践之Adapters和lists(十六)](http://blog.csdn.net/developer_jiangqq/article/details/49531669)
    [AndroidAnnnotations注入框架使用之最佳实践SharedPreferences(十七)](http://blog.csdn.net/developer_jiangqq/article/details/49583487)

### [ButterKnife](https://github.com/JakeWharton/butterknife)

1. [Android Butter Knife 框架——最好用的View注入](http://www.jianshu.com/p/9ad21e548b69)
2. [ButterKnife--View注入框架](http://stormzhang.com/openandroid/android/2014/01/12/android-butterknife/)
3. [ButterKnife 使用教程 （最新7.x版）](http://leoray.leanote.com/post/butterknife)
4. [Android Studio上方便使用butterknife注解框架的偷懒插件Android Butterknife Zelezny](http://www.cnblogs.com/soaringEveryday/p/4607438.html)
5. [简述Butterknife示例和原理](http://blog.csdn.net/guijiaoba/article/details/43020059)
6. [butterknife 源码分析](http://2dxgujun.com/post/2015/06/07/butterknife-analysis.html)

## 总结

> **这几个 DI 框架里面只使用过 ButterKnife，加上 Android Studio 配套的插件：Android Butterknife Zelezny，findViewById 点点鼠标就搞定了，非常方法，极大的提高了开发效率。**
