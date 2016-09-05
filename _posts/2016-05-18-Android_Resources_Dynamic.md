---
layout: post
title:  "Android开发资料收集：动态加载、插件化、热修复技术"
categories: Android
tags: [Android, 资料]
date: 2016-05-18 11:00:00
---
## 目录

* <a href="{% post_url 2016-05-18-Android_Resources_Network_Framework %}">网络请求框架</a>
* <a href="{% post_url 2016-05-18-Android_Resources_Image_Loader_Framework %}">图片加载框架</a>
* <a href="{% post_url 2016-05-18-Android_Resources_DI_Framework %}">依赖注入框架</a>
* <a href="{% post_url 2016-05-18-Android_Resources_Eventbus_Framework %}">事件总线框架</a>
* <a href="{% post_url 2016-05-18-Android_Resources_ReactiveX %}">响应式编程</a>
* <a href="{% post_url 2016-05-18-Android_Resources_Views %}">视图、组件、自定义控件</a>
* <a href="{% post_url 2016-05-18-Android_Resources_Animation %}">动画</a>
* <a href="{% post_url 2016-05-18-Android_Resources_Media %}">多媒体开发</a>
* <a href="{% post_url 2016-05-18-Android_Resources_NDK %}">NDK开发</a>
* <a href="{% post_url 2016-05-18-Android_Resources_Database %}">数据库开发</a>
* 动态加载、插件化、热修复技术
* <a href="{% post_url 2016-05-18-Android_Resources_Optimize_Capacity %}">性能优化</a>
* <a href="{% post_url 2016-05-18-Android_Resources_Java %}">Java高级</a>
* <a href="{% post_url 2016-05-18-Android_Resources_Design_Pattern %}">设计模式、系统架构</a>
* <a href="{% post_url 2016-05-18-Android_Resources_Tools_Tests %}">开发工具、测试</a>
* <a href="{% post_url 2016-05-18-Android_Resources_Foods %}">干货</a>

<br />

## 动态加载、插件化、热修复技术

1. [Android动态加载技术 简单易懂的介绍方式](https://segmentfault.com/a/1190000004062866)
2. [Android动态加载进阶 代理Activity模式](https://segmentfault.com/a/1190000004062972)
3. [Android 使用动态加载框架DL进行插件化开发](http://blog.csdn.net/t12x3456/article/details/39958755)
4. [android动态加载jar以及插件化开发](http://blog.csdn.net/tanwei4199/article/details/28406825)
5. [各大热补丁方案分析和比较](http://blog.zhaiyifan.cn/2015/11/20/HotPatchCompare)
6. [QQ空间 - 安卓App热补丁动态修复技术介绍](http://mp.weixin.qq.com/s?__biz=MzI1MTA1MzM2Nw==&mid=400118620&idx=1&sn=b4fdd5055731290eef12ad0d17f39d4a&scene=0)

### [ACCD](https://github.com/bunnyblue/ACDD)

1. [ACDD使用教程](http://jksoftcn.com/acddshi-yong-jiao-cheng.html)
2. 【Android插件化开发之OpenAtlas】系列
    [Android插件化开发之OpenAtlas初体验](http://blog.csdn.net/sbsujjbcy/article/details/47446733)
    [Android插件化开发之OpenAtlas生成插件信息列表](http://blog.csdn.net/sbsujjbcy/article/details/47610203)
    [Android插件化开发之OpenAtlas资源打包工具补丁aapt的编译](http://blog.csdn.net/sbsujjbcy/article/details/47778879)
    [Android插件化开发之OpenAtlas插件适配](http://blog.csdn.net/sbsujjbcy/article/details/47806029)
    [Android插件化开发之解决OpenAtlas组件在宿主的注册问题](http://blog.csdn.net/sbsujjbcy/article/details/47832725)
    [Android插件化开发之OpenAtlas中四大组件与Application功能的验证](http://blog.csdn.net/sbsujjbcy/article/details/47952269)
    [Android插件化开发之OpenAtlas插件启动方式与插件启动广播](http://blog.csdn.net/sbsujjbcy/article/details/47975677)

### [Dexposed](https://github.com/alibaba/dexposed)

1. [Android新技术学习——阿里巴巴免Root无侵入AOP框架Dexposed](http://blog.csdn.net/sbsujjbcy/article/details/47340507)

### [AndFix](https://github.com/alibaba/AndFix)

### [Nuwa](https://github.com/jasonross/Nuwa)

1. [Android 热修复Nuwa的原理及Gradle插件源码解析](http://blog.csdn.net/sbsujjbcy/article/details/50812674)
2. [Android 热修复使用Gradle Plugin1.5改造Nuwa插件](http://blog.csdn.net/sbsujjbcy/article/details/50839263)
3. [聊聊Android 热修复Nuwa有哪些坑](http://blog.csdn.net/sbsujjbcy/article/details/51028027)
