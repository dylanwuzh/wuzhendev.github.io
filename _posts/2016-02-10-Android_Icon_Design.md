---
layout: post
title:  "Android的ICON设计规范"
categories: Android
tags: [Android, Design]
---
应用的图标应当是一个 Alpha 通道透明的32位 PNG 图片，根据不同的 DPI 设计几种不同大小，具体规则如下表：

|         |  mdpi  |  hdpi  |  xhdpi | xxhdpi |  xxxhdpi |  边距  |
|:-------:|:------:|:------:|:------:|:------:|:--------:|:------:|
|DPI      |  160   |   240  |  320   |    480 |    640   |        |
|倍数      |   1    |  1.5   |   2    |   3    |    4     |        |
|Launcher |  48px  |  72px  |  96px  | 144px  |   192px  |        |
|ActionBar|  32px  |  48px  |  64px  |  96px  |   128px  |   4dp  |
|Middle   |  24px  |  36px  |  48px  |  72px  |   96px   |   2dp  |
|Small    |  16px  |  24px  |  32px  |  48px  |   64px   |   1dp  |

**注：**
1. ICON 四周应有透明的边距，具体边距大小见上表中“边距”列。
