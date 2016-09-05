---
layout: post
title:  "Android开发资料收集：视图、组件、自定义控件"
categories: Android
tags: [Android, 资料]
date: 2016-05-18 06:00:00
---
## 目录

* <a href="{% post_url 2016-05-18-Android_Resources_Network_Framework %}">网络请求框架</a>
* <a href="{% post_url 2016-05-18-Android_Resources_Image_Loader_Framework %}">图片加载框架</a>
* <a href="{% post_url 2016-05-18-Android_Resources_DI_Framework %}">依赖注入框架</a>
* <a href="{% post_url 2016-05-18-Android_Resources_Eventbus_Framework %}">事件总线框架</a>
* <a href="{% post_url 2016-05-18-Android_Resources_ReactiveX %}">响应式编程</a>
* 视图、组件、自定义控件
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

## 视图、组件、自定义控件

1. [ANDROID自定义视图——onMeasure，MeasureSpec源码 流程 思路详解](http://blog.csdn.net/a396901990/article/details/36475213)
2.  [Android ViewDragHelper完全解析 自定义ViewGroup神器](http://blog.csdn.net/lmj623565791/article/details/46858663)
3. 【Android视图分析】系列
    [Android中将布局文件/View添加至窗口过程分析 ---- 从setContentView()谈起](http://blog.csdn.net/qinjuning/article/details/7226787)
    [Android中View绘制流程以及invalidate()等相关方法分析](http://blog.csdn.net/qinjuning/article/details/7110211)
    [Android中View(视图)绘制不同状态背景图片原理深入分析以及StateListDrawable使用详解](http://blog.csdn.net/qinjuning/article/details/7474827)
    [Android中measure过程、WRAP_CONTENT详解以及xml布局文件解析流程浅析(上)](http://blog.csdn.net/qinjuning/article/details/8051811)
    [Android中measure过程、WRAP_CONTENT详解以及xml布局文件解析流程浅析(下)](http://blog.csdn.net/qinjuning/article/details/8074262)
    [Android中ActivityManagerService与应用程序(客户端)通信模型分析](http://blog.csdn.net/qinjuning/article/details/7262769)
    [Android中启动Activity(startActivity)流程图分析](http://blog.csdn.net/qinjuning/article/details/7277225)
4. [Android手势源码浅析-----手势绘制(GestureOverlayView)](http://blog.csdn.net/stevenhu_223/article/details/9394491)
5. [Android Matrix](http://www.cnblogs.com/qiengo/archive/2012/06/30/2570874.html)
6. [Android键盘面板冲突 布局闪动处理方案](http://blog.dreamtobe.cn/2015/09/01/keyboard-panel-switch)
7. [Android View绘制及实践](http://blog.csdn.net/sbsujjbcy/article/details/45458657)
8. [Android中View(视图)绘制不同状态背景图片原理深入分析以及StateListDrawable使用详解](http://blog.csdn.net/qinjuning/article/details/7474827)
9. [Android 自定义View onMeasure方法的实现](http://www.jcodecraeer.com/a/anzhuokaifa/androidkaifa/2014/1102/1891.html)
10. [一步一步教你150行代码实现简书滑动返回效果](http://www.jianshu.com/p/59be4551c418)

### 事件分发

1. [公共技术点之 View 事件传递](http://a.codekk.com/detail/Android/Trinea/%E5%85%AC%E5%85%B1%E6%8A%80%E6%9C%AF%E7%82%B9%E4%B9%8B%20View%20%E4%BA%8B%E4%BB%B6%E4%BC%A0%E9%80%92)
2. [Android事件分发完全解析之为什么是她](http://blog.csdn.net/aigestudio/article/details/44260301)
3. [Android事件分发完全解析之事件从何而来](http://blog.csdn.net/aigestudio/article/details/44746625)
4. 【guolin - Android事件分发机制完全解析】系列
    [Android事件分发机制完全解析，带你从源码的角度彻底理解(上)](http://blog.csdn.net/guolin_blog/article/details/9097463)
    [Android事件分发机制完全解析，带你从源码的角度彻底理解(下)](http://blog.csdn.net/guolin_blog/article/details/9153747)
5. [深入分析UI 上层事件处理核心机制 Choreographer](http://blog.csdn.net/farmer_cc/article/details/18619429)

### [TextView](http://developer.android.com/intl/zh-cn/reference/android/widget/TextView.html)

1. [Android TextView预渲染研究](http://www.open-open.com/lib/view/open1437961328925.html)
2. [Android 之 TextView内部如何绘制Span样式](http://blog.csdn.net/bigjeffwind/article/details/8608595)
3. [Android字体高度的研究](http://sd4886656.iteye.com/blog/1200890)
4. [Android Canvas drawText实现中文垂直居中](http://blog.csdn.net/hursing/article/details/18703599)

### [ImageView](http://developer.android.com/intl/zh-cn/reference/android/widget/ImageView.html)

1. [【android】scaleType属性与ImagView中图片的显示的关系](http://juliaailse.iteye.com/blog/1409317)

### [RecyclerView](https://developer.android.com/reference/android/support/v7/widget/RecyclerView.html)

1. 【Android v7兼容包RecyclerView的使用】系列
    [android v7兼容包RecyclerView的使用（一）](http://blog.csdn.net/sbsujjbcy/article/details/44182651)
    [android v7兼容包RecyclerView的使用（二）](http://blog.csdn.net/sbsujjbcy/article/details/44198753)
    [android v7兼容包RecyclerView的使用（三）——布局管理器的使用](http://blog.csdn.net/sbsujjbcy/article/details/44220441)
    [android v7兼容包RecyclerView的使用（四）——点击事件的不同方式处理](http://blog.csdn.net/sbsujjbcy/article/details/44223303)
2. [使用RecyclerView控件实现瀑布流](http://www.jianshu.com/p/402466ae7b15)

### [Fragment](http://developer.android.com/intl/zh-cn/reference/android/support/v4/app/Fragment.html)

1. [[Android]实现类似微信的延迟加载的Fragment——LazyFragment](http://www.cnblogs.com/tiantianbyconan/p/4303910.html)

### [DialogFragment](http://developer.android.com/intl/zh-cn/reference/android/support/v4/app/DialogFragment.html)

1. [DialogFragment详解](http://blog.csdn.net/huangyabin001/article/details/30053835)
2. [详细解读DialogFragment](http://www.cnblogs.com/tianzhijiexian/p/4161811.html)

### [Service](http://developer.android.com/intl/zh-cn/reference/android/app/Service.html)

1. [Android 中的 Service 全面总结](http://blog.csdn.net/woaieillen/article/details/7371871)
2. [Android AIDL 小结](http://www.cnblogs.com/lipeil/archive/2012/08/27/2659330.html)

### [ContentProvider](https://developer.android.com/reference/android/content/ContentProvider.html)

1. [Android ContentProvider的介绍(很详细)](http://xiechengfa.iteye.com/blog/1415829)

### [Android Widget](http://developer.android.com/intl/zh-cn/guide/topics/appwidgets/index.html)

1. [Android 桌面组件【widget】初探](http://www.cnblogs.com/TerryBlog/archive/2010/07/29/1788319.html)

### [PercentFrameLayout](https://developer.android.com/reference/android/support/percent/PercentFrameLayout.html)、[PercentRelativeLayout](https://developer.android.com/reference/android/support/percent/PercentRelativeLayout.html)

1. [使用PercentLayout布局实现固定比例控件](http://www.jianshu.com/p/97acae3e21b1)

### [Scroller](https://developer.android.com/reference/android/widget/Scroller.html)

1. [Android 滑动类Scroller以及其成员函数](http://www.jcodecraeer.com/a/anzhuokaifa/androidkaifa/2012/1203/670.html)

### [Intent](https://developer.android.com/reference/android/content/Intent.html)

1. [Android开发——Intent中的各种FLAG](http://blog.csdn.net/javensun/article/details/8700265)

### [ActivityManager](http://developer.android.com/intl/zh-cn/reference/android/app/ActivityManager.html)

1. [ActivityManager的使用(一)](http://blog.csdn.net/qinjuning/article/details/6978560)
2. [Android中获取正在运行的应用程序-----ActivityManager.RunningAppProcessInfo类详解](http://blog.csdn.net/qinjuning/article/details/7009824)
3. [Android中获取正在运行的服务-------ActivityManager.RunningServiceInfo的使用](http://blog.csdn.net/qinjuning/article/details/7015313)

### 模糊效果

1. [Android的实时Blur渲染 － BlurDrawable](http://www.jianshu.com/p/93475df308b8)
2. [打造高仿iOS的BlurDialog](http://www.jianshu.com/p/1e2d68183c3c)
3. [MIUI 6的毛玻璃效果的技术实现（实时模糊）](http://www.cnblogs.com/zhucai/p/miui-real-time-blur.html)
4. [高斯模糊效果实现方案及性能对比](http://blog.csdn.net/huli870715/article/details/39378349)
5. [Android模糊示例-RenderScript-附效果图与代码](http://blog.csdn.net/xiaodongrush/article/details/31031411)

### 自定义控件

1. [Android中利用画图类和线程画出闪烁的心形，送给亲爱的他](http://www.iteye.com/topic/1113388)
2. 【Android 实现书籍翻页效果】系列
    [Android 实现书籍翻页效果----原理篇](http://blog.csdn.net/hmg25/article/details/6306479)
    [Android 实现书籍翻页效果----源码篇](http://blog.csdn.net/hmg25/article/details/6319664)
    [Android 实现书籍翻页效果----完结篇](http://blog.csdn.net/hmg25/article/details/6342539)
    [Android 实现书籍翻页效果----升级篇](http://blog.csdn.net/hmg25/article/details/6419694)
    [Android 实现书籍翻页效果---番外篇之光影效果](http://blog.csdn.net/hmg25/article/details/6366279)
3. [[Android]仿新版QQ的tab下面拖拽标记为已读的效果](http://www.cnblogs.com/tiantianbyconan/p/4182929.html)
4. [Twitter的like动画安卓版](http://www.tuicool.com/articles/qiEf22)
5. [四步实现ChromeLikeSwipeLayout效果](http://www.jianshu.com/p/d6b4a9ad022e)
6. [Android画个时钟玩玩](http://www.jianshu.com/p/ebb726f8fc0b)
7. [一款炫酷Loading动画--加载成功](http://www.jianshu.com/p/f61d182bf0f1)
8. [一款炫酷Loading动画--加载失败](http://www.jianshu.com/p/72762f0cacb5)
9. [Android制作粒子爆炸特效](http://www.jianshu.com/p/2433220f3e9e)
10. [星球大战：原力觉醒或者用原力粉碎Android的视图](https://github.com/hehonghui/android-tech-frontier/blob/master/issue-35/%E6%98%9F%E7%90%83%E5%A4%A7%E6%88%98%EF%BC%9A%E5%8E%9F%E5%8A%9B%E8%A7%89%E9%86%92%E6%88%96%E8%80%85%E7%94%A8%E5%8E%9F%E5%8A%9B%E7%B2%89%E7%A2%8EAndroid%E7%9A%84%E8%A7%86%E5%9B%BE.md)
11. [非常漂亮的进度指示器AVLoadingIndicatorView的使用讲解](http://blog.csdn.net/developer_jiangqq/article/details/49612399)
