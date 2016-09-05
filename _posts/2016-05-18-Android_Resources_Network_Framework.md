---
layout: post
title:  "Android开发资料收集：网络加载框架"
categories: Android
tags: [Android, 资料]
date: 2016-05-18 01:00:00
---
## 目录

* 网络请求框架
* <a href="{% post_url 2016-05-18-Android_Resources_Image_Loader_Framework %}">图片加载框架</a>
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

## 网络请求框架

### [android-async-http](https://github.com/loopj/android-async-http)

1. [快速Android开发系列网络篇之Android-Async-Http](http://www.cnblogs.com/angeldevil/p/3729808.html)
2. [Android网络请求库android-async-http使用](http://www.open-open.com/lib/view/open1392780943038.html)
3. [AsyncHttpClient 源码分析](http://www.cnblogs.com/xiaoweiz/p/3918042.html)
4. [android-async-http框架库源码走读](http://blog.csdn.net/yanbober/article/details/45307739)

### [OkHttp](https://github.com/square/okhttp)

1. [OkHttp使用简介](http://blog.csdn.net/chenzujie/article/details/46994073)
2. [OkHttp使用进阶](http://www.cnblogs.com/ct2011/p/3997368.html)
3. [高效地配置OkHttp](http://www.devtf.cn/?p=1264)
4. [OkHttp源码解析](http://frodoking.github.io/2015/03/12/android-okhttp)
5. [OkHttp：Java 平台上的新一代 HTTP 客户端](https://www.ibm.com/developerworks/cn/java/j-lo-okhttp)
6. [OkHttp : Java和Android 高效http库，支持SPDY](http://hao.jobbole.com/okhttp)
7. [Android OkHttp完全解析 是时候来了解OkHttp了](http://blog.csdn.net/lmj623565791/article/details/47911083)
8. [Android 扩展OkHttp支持请求优先级调度](http://blog.csdn.net/sbsujjbcy/article/details/50574981)
9. [Android OkHttp的Cookie自动化管理](http://blog.csdn.net/sbsujjbcy/article/details/46895039)
10. [Android 使用OkHttp支持HttpDNS](http://blog.csdn.net/sbsujjbcy/article/details/50532797)
11. [Android OkHttp文件上传与下载的进度监听扩展](http://blog.csdn.net/sbsujjbcy/article/details/48194701)
12. 【OkHttp v2.4.0源码解析】系列
    [OkHttp源码解析（一）](http://blog.csdn.net/chenzujie/article/details/47061095)
    [OkHttp源码解析（二）](http://blog.csdn.net/chenzujie/article/details/47093723)
    [OkHttp源码解析（三）](http://blog.csdn.net/chenzujie/article/details/47158645)
13. 【OkHttp3源码分析】系列
    [OkHttp3源码分析[综述]](http://www.jianshu.com/p/aad5aacd79bf)
    [OkHttp3源码分析[复用连接池]](http://www.jianshu.com/p/92a61357164b)
    [OkHttp3源码分析[缓存策略]](http://www.jianshu.com/p/9cebbbd0eeab)
    [OkHttp3源码分析[DiskLruCache]](http://www.jianshu.com/p/23b8aa490a6b)
    [OkHttp3源码分析[任务队列]](http://www.jianshu.com/p/6637369d02e7)
14. 【OkHttp完全解析】系列
    [OkHttp完全解析（一）OkHttp简介](http://blog.csdn.net/oyangyujun/article/details/50039205)
    [OkHtto完全解析（二）构建和调用](http://blog.csdn.net/oyangyujun/article/details/50039215)
    [OkHttp完全解析（三）并发](http://blog.csdn.net/oyangyujun/article/details/50039253)
    [OkHttp完全解析（四）连接Connections](http://blog.csdn.net/oyangyujun/article/details/50039275)
    [OkHttp完全解析（五）HTTPS](http://blog.csdn.net/oyangyujun/article/details/50039301)
    [OkHttp完全解析（六）拦截器](http://blog.csdn.net/oyangyujun/article/details/50039403)
    [OkHttp完全解析（七）SPDY协议详细介绍](http://blog.csdn.net/oyangyujun/article/details/50039745)
    [OkHttp完全解析（八）源码解析一](http://blog.csdn.net/oyangyujun/article/details/50039809)
    [OkHttp完全解析（九）源码解析二](http://blog.csdn.net/oyangyujun/article/details/50039983)
    [OkHttp完全解析（十）源码解析三](http://blog.csdn.net/oyangyujun/article/details/50040007)

### [Retrofit](https://github.com/square/retrofit)

1. [Retrofit](http://www.cnblogs.com/xinye/p/4375936.html)
2. [用 Retrofit 2 简化 HTTP 请求](https://realm.io/cn/news/droidcon-jake-wharton-simple-http-retrofit-2)
3. [好用的网络请求库Retrofit2（入门及讲解）](http://blog.csdn.net/biezhihua/article/details/49232289)
4. [Android Retrofit 2.0使用](http://wuxiaolong.me/2016/01/15/retrofit)
5. [快速Android开发系列网络篇之Retrofit](http://www.cnblogs.com/angeldevil/p/3757335.html)
6. [RxJava 与 Retrofit 结合的最佳实践](http://gank.io/post/56e80c2c677659311bed9841)
7. [Retrofit — Getting Started and Create an Android Client](https://futurestud.io/blog/retrofit-getting-started-and-android-client)
8. [Retrofit分析-漂亮的解耦套路](http://www.jianshu.com/p/45cb536be2f4)
9. [Retrofit 2.0：有史以来最大的改进](http://www.jcodecraeer.com/a/anzhuokaifa/androidkaifa/2015/0915/3460.html)
10. [Retrofit2 源码解析](http://bxbxbai.github.io/2015/12/13/retrofit2)
11. [Retrofit 解析 JSON 数据](http://www.jianshu.com/p/87c36d8dabce)
12. [Retrofit2源码分析[动态代理]](http://www.jianshu.com/p/a56c61da55dd)
13. [Retrofit的插件化适配(线程切换/RxJava)](http://www.jianshu.com/p/c79c6583ea44)

### [Volley](https://android.googlesource.com/platform/frameworks/volley)

1. [Android库Volley的使用介绍](http://bxbxbai.github.io/2014/09/14/android-working-with-volley)
2. [网络请求库Volley详解](http://www.jcodecraeer.com/a/anzhuokaifa/androidkaifa/2015/0526/2934.html)
3. [使用OKHttp处理Volley的底层HTTP请求](http://willyan.me/2013/06/01/volley-okhttp)
4. [Volley 源码解析](http://codekk.com/blogs/detail/54cfab086c4761e5001b2542)
5. [android网络操作I： OkHttp, Volley以及Gson](http://www.jcodecraeer.com/a/anzhuokaifa/androidkaifa/2015/0720/3209.html)
6. [Volley框架的流程图分析](http://www.cnblogs.com/cpacm/p/4211719.html)
7. 【[工匠若水](http://my.csdn.net/yanbober) Google Volley】系列
    [Google Volley使用之基础](http://blog.csdn.net/yanbober/article/details/45307015)
    [Google Volley使用之自定义](http://blog.csdn.net/yanbober/article/details/45307099)
    [Google Volley框架源码走读](http://blog.csdn.net/yanbober/article/details/45307217)
8. 【Android Volley完全解析】系列
    [Android Volley完全解析(一)，初识Volley的基本用法](http://blog.csdn.net/guolin_blog/article/details/17482095)
    [Android Volley完全解析(二)，使用Volley加载网络图片](http://blog.csdn.net/guolin_blog/article/details/17482165)
    [Android Volley完全解析(三)，定制自己的Request](http://blog.csdn.net/guolin_blog/article/details/17612763)
    [Android Volley完全解析(四)，带你从源码的角度理解Volley](http://blog.csdn.net/guolin_blog/article/details/17656437)
9. 【Android Volley 框架的使用】系列
    [Android Volley 框架的使用（一）](http://www.cnblogs.com/zyw-205520/p/4950357.html)
    [Android Volley 框架的使用（二）](http://www.cnblogs.com/zyw-205520/p/4950464.html)
    [Android Volley 框架的使用（三）](http://www.cnblogs.com/zyw-205520/p/4950535.html)
10. 【详细解读Volley】系列
    [详细解读Volley（一）—— 基本Request对象 & RequestQueue](http://www.cnblogs.com/tianzhijiexian/p/4255488.html)
    [详细解读Volley（二）—— ImageRequest & Request简介](http://www.cnblogs.com/tianzhijiexian/p/4260713.html)
    [详细解读Volley（三）—— ImageLoader & NetworkImageView](http://www.cnblogs.com/tianzhijiexian/p/4262469.html)
    [详细解读Volley（四）—— 自定义Request](http://www.cnblogs.com/tianzhijiexian/p/4263139.html)

## 总结

> `android-async-http`：这几个里面资格最老的网络请求库，内部实现基于 HttpClient。这也是我接触的第一个网络请求库，并且依照该库重复造了个轮子，一直使用到现在。
>
> `OkHttp`：不管是出于 Android 6.0 SDK 已经干掉了 HttpClient 转而拥抱 OkHttp 的原因，还是 OkHttp 支持 SPDY、支持 HTTP2.0、无缝支持 GZIP、高效等一系列的优点，更何况 HttpUrlConnection API 那么的难用，OkHttp 几乎已经是 APP 必需的网络请求库。
>
> `Retrofit`：与 OkHttp 出于同源的 Retrofit，极大的方便了对于 RESTful 架构 API 的调用。
>
> `Volley`：作为Google的亲儿子，官方的说明是：特别适合数据量不大但是通信频繁的场景。
>
> **建议使用 OkHttp+Retrofit，尤其对于 RESTful 架构的服务端；如果只使用 OkHttp，为了避免再次替换时巨大的工作量，强烈建议在 OkHttp 的基础上进行一次封装。**
