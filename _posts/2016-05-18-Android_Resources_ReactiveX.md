---
layout: post
title:  "Android开发资料收集：响应式编程"
categories: Android
tags: [Android, 资料]
date: 2016-05-18 05:00:00
---
## 目录

* <a href="{% post_url 2016-05-18-Android_Resources_Network_Framework %}">网络请求框架</a>
* <a href="{% post_url 2016-05-18-Android_Resources_Image_Loader_Framework %}">图片加载框架</a>
* <a href="{% post_url 2016-05-18-Android_Resources_DI_Framework %}">依赖注入框架</a>
* <a href="{% post_url 2016-05-18-Android_Resources_Eventbus_Framework %}">事件总线框架</a>
* 响应式编程
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

## 响应式编程

### [ReactiveX](http://reactivex.io)

1. [ReactiveX文档中文翻译](https://mcxiaoke.gitbooks.io/rxdocs/content)
2. [那些年我们错过的响应式编程](http://www.devtf.cn/?p=174)
3. [两分钟了解REACTIVEX](http://www.cnblogs.com/owenyang/p/4542748.html)

### [RxJava](https://github.com/ReactiveX/RxJava)

1. [RxJava文档和教程](https://mcxiaoke.gitbooks.io/rxdocs/content/Topics.html)
2. [给 Android 开发者的 RxJava 详解](http://gank.io/post/560e15be2dca930e00da1083)
3. [RxJava使用场景小结](http://blog.csdn.net/lzyzsd/article/details/50120801)
4. [可能是东半球最全的RxJava使用场景小结
](http://blog.csdn.net/theone10211024/article/details/50435325)
5. 【彻底搞懂 RxJava】系列：
    [彻底搞懂 RxJava — 基础篇](http://diordna.sinaapp.com/?p=896)
    [彻底搞懂 RxJava — 中级篇](http://diordna.sinaapp.com/?p=910)
    [彻底搞懂 RxJava — 高级篇](http://diordna.sinaapp.com/?p=912)
6. 【深入浅出 RxJava】系列：
    [深入浅出 RxJava（一：基础篇）](http://blog.csdn.net/lzyzsd/article/details/41833541)
    [深入浅出 RxJava（二：操作符）](http://blog.csdn.net/lzyzsd/article/details/44094895)
    [深入浅出 RxJava（三：响应式的好处）](http://blog.csdn.net/lzyzsd/article/details/44891933)
    [深入浅出 RxJava（四：在Android中使用响应式编程）](http://blog.csdn.net/lzyzsd/article/details/45033611)
7. 【RxJava操作符】系列
    [RxJava操作符（一）Creating Observables](http://blog.chinaunix.net/uid-20771867-id-5187376.html)
    [RxJava操作符（二）Transforming Observables](http://blog.chinaunix.net/uid-20771867-id-5192193.html)
    [RxJava操作符（三）Filtering](http://blog.chinaunix.net/uid-20771867-id-5194384.html)
    [RxJava操作符（四）Combining](http://blog.chinaunix.net/uid-20771867-id-5197584.html)
    [RxJava操作符（五）Error Handling](http://blog.chinaunix.net/uid-20771867-id-5201914.html)
    [RxJava操作符（六）Utility](http://blog.chinaunix.net/uid-20771867-id-5206187.html)
    [RxJava操作符（七）Conditional and Boolean ](http://blog.chinaunix.net/uid-20771867-id-5208237.html)
    [RxJava操作符（八）Aggregate](http://blog.chinaunix.net/uid-20771867-id-5209862.html)
8. [使用RxJava 提升用户体验](http://www.jianshu.com/p/33c548bce571)

### [RxAndroid](https://github.com/ReactiveX/RxAndroid)

1. [RxAndroid初探](http://coderrobin.com/2015/07/17/RxAndroid%E5%88%9D%E6%8E%A2)
2. [升级到 RxAndroid 1.x.x 之后混淆要注意的](http://www.on1024.com/2016/01/13/%E5%8D%87%E7%BA%A7%E5%88%B0%20RxAndroid%201.x.x%20%E4%B9%8B%E5%90%8E%E6%B7%B7%E6%B7%86%E8%A6%81%E6%B3%A8%E6%84%8F%E7%9A%84)
3. [【译文】RxAndroid and Kotlin (Part1)](https://dimon94.github.io/2016/03/07/%E3%80%90%E8%AF%91%E6%96%87%E3%80%91RxAndroid%20and%20Kotlin(Part%201))
4. 【从案例学RxAndroid开发】系列
    [从案例学RxAndroid开发（上）](http://www.tuicool.com/articles/eUfUnq)
    [从案例学RxAndroid开发（下）](http://www.tuicool.com/articles/mQVb6vY)

### [RxLifecycle](https://github.com/trello/RxLifecycle)

1. [Rxlifecycle使用详解，解决RxJava内存泄露问题](http://www.jianshu.com/p/a3ad9dd20655)
2. 【RxLifecycle功能实现分析】系列
    [[RxJava^Android]项目经验分享 --- RxLifecycle功能实现分析（一）](http://www.cnblogs.com/assassin-l/p/5435874.html)
    [[RxJava^Android]项目经验分享 --- RxLifecycle功能实现分析（二）](http://www.cnblogs.com/assassin-l/p/5436034.html)
3. 【[PuerTea](http://home.cnblogs.com/u/liulipeng/)：Rxlifecycle】系列
    [Rxlifecycle（一）：使用](http://www.cnblogs.com/liulipeng/p/5046623.html)
    [Rxlifecycle（二）：源码解析](http://www.cnblogs.com/liulipeng/p/5050827.html)
    [Rxlifecycle（三）：坑](http://www.cnblogs.com/liulipeng/p/5106506.html)

### [RxBinding](https://github.com/JakeWharton/RxBinding)

1. [RxBinding的使用，实现数据和View的绑定](http://blog.csdn.net/forad/article/details/49359175)
2. [使用RxBinding响应控件的异步事件](http://www.jianshu.com/p/c2c7c46e6b97/comments/1338430)

### [RxPermissions](https://github.com/tbruyelle/RxPermissions)

1. [RxPermissions源码解析](http://www.jianshu.com/p/c8a30200e6b2)
