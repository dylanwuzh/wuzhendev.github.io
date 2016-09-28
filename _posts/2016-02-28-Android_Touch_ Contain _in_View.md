---
layout: post
title:  "Android判断触摸事件是否在View内"
categories: Android
tags: [Android]
---
在应用中有时需要判断触摸事件的位置是否在某个 View 内，可以按照如下方法判断：

## 1. 获取 View 的坐标

Android 中使用矩形表示一个 View 的坐标，获取 View 在屏幕中的位置并将其转换成矩形坐标：

``` java
/**
 * 计算指定的 View 在屏幕中的坐标。
 */
public static RectF calcViewScreenLocation(View view) {
    int[] location = new int[2];
    // 获取控件在屏幕中的位置，返回的数组分别为控件左顶点的 x、y 的值
    view.getLocationOnScreen(location);
    return new RectF(location[0], location[1], location[0] + view.getWidth(),
            location[1] + view.getHeight());
}
```

## 2. 获取触摸事件相对于屏幕的位置

``` java
// MotionEvent event;
// event.getX(); 获取相对于控件自身左上角的 x 坐标值
// event.getY(); 获取相对于控件自身左上角的 y 坐标值
float x = event.getRawX(); // 获取相对于屏幕左上角的 x 坐标值
float y = event.getRawY(); // 获取相对于屏幕左上角的 y 坐标值
```

## 3. 使用 Rect.contains(float, float) 判断触摸事件是否在 View 内

``` java
// View view;
RectF rect = calcViewScreenLocation(view);
boolean isInViewRect = rect.contains(x, y);
```

---

## 扩展

### 1. 在 Activity 的 onCreate() 方法中由于控件尚未绘制完成，获取不到控件的高度、位置，可以在 Activity 的 onWindowFocusChanged() 方法中获取

``` java
@Override
public void onWindowFocusChanged(boolean hasFocus) {
    super.onWindowFocusChanged(hasFocus);
    if (hasFocus) {
        RectF rect = calcViewScreenLocation(viewMotion); // 获取控件的坐标
    }
}
```

### 2. 可以使用 RectF.contains(RectF)、RectF.contains(float, float, float, float) 判断一个矩形是否包含在另一个矩形中

``` java
// RectF source;
// RectF target;
// 判断 target 矩形是否包含在 source 矩形中
boolean isTargetInSource = source.contains(target);
boolean isTargetInSource = source.contains(target.left, target.top,
        target.right, target.bottom);
```

---

## 源码地址

### [GitHub: MotionDemo](https://github.com/wuzhendev/samples/tree/master/MotionDemo)
