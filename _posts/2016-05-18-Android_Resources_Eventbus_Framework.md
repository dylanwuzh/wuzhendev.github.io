---
layout: post
title:  "Android开发资料收集：事件总线框架"
categories: Android
tags: [Android, 资料]
date: 2016-05-18 04:00:00
---
## 目录

* <a href="{% post_url 2016-05-18-Android_Resources_Network_Framework %}">网络请求框架</a>
* <a href="{% post_url 2016-05-18-Android_Resources_Image_Loader_Framework %}">图片加载框架</a>
* <a href="{% post_url 2016-05-18-Android_Resources_DI_Framework %}">依赖注入框架</a>
* 事件总线框架
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

## 事件总线框架

### [EventBus](https://github.com/greenrobot/EventBus)

1. [Android EventBus实战 没听过你就out了](http://blog.csdn.net/lmj623565791/article/details/40794879)
2. [Android EventBus源码解析 带你深入理解EventBus](http://blog.csdn.net/lmj623565791/article/details/40920453)
3. 【EventBus使用详解】系列
    [EventBus使用详解(一)——初步使用EventBus](http://blog.csdn.net/harvic880925/article/details/40660137)
    [EventBus使用详解(二)——EventBus使用进阶](http://blog.csdn.net/harvic880925/article/details/40787203)
4. 【EventBus 3.0的用法详解】系列：
    [EventBus 3.0的用法详解（一）](https://segmentfault.com/a/1190000004279679)
    [EventBus 3.0的用法详解（二）](https://segmentfault.com/a/1190000004314315)

### [Otto](https://github.com/square/otto)

1. [Otto介绍](http://blog.chengyunfeng.com/?p=450)
2. [浅析Otto框架，并与EventBus对比](https://segmentfault.com/a/1190000005019322)
3. [【FastDev4Android框架开发】消息总线EventBus源码分析以及与Otto框架对比](http://blog.csdn.net/developer_jiangqq/article/details/49640153)
4. [Otto使用入门](http://blog.csdn.net/lzyzsd/article/details/42016681)
5. [Otto源码分析](http://blog.csdn.net/lzyzsd/article/details/42016793)
6. [[Android] Otto源码简析](https://segmentfault.com/a/1190000003982257)

### [RxJava EventBus](https://github.com/AndroidKnife/RxBus)

1. [[Android]基于RxJava、RxAndroid的EventBus实现](http://www.cnblogs.com/tiantianbyconan/p/4578699.html)
2. [用RxJava实现事件总线(Event Bus)](http://www.jianshu.com/p/ca090f6e2fe2)
3. [使用RxJava实现Event Bus](https://www.gitbook.com/book/chaochuandea/-rxjava-event-bus/details)
4. [RxBus—通过RxJava来替换EventBus](http://hanhailong.com/2015/10/09/RxBus%E2%80%94%E9%80%9A%E8%BF%87RxJava%E6%9D%A5%E6%9B%BF%E6%8D%A2EventBus)

## 总结

> **EventBus 3.0版本之前使用约定优于配置原则，接受事件的方法必须以 onEvent 开头，使用起来不是很方便，3.0版本之后也支持了注解方式。根据官方的性能对比，EventBus 在各个方面都明显比 Otto 更快，因此 EventBus 和 Otto 对比建议使用 EventBus。
如果项目中已经集成了 RxJava，可以考虑使用 RxBus 去实现。**
