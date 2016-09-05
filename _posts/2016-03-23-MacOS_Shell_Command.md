---
layout: post
title:  "Android代码安装和卸载APK"
categories: Android
tags: [Android]
---
## 查看端口占用

``` shell
# lsof -i tcp:port
# port：端口号
# 例：
$ lsof -i tcp:80
```

## 杀死进程

``` shell
# sudo kill -9 pid
# pid：进程号
# 例：
$ sudo kill -9 61342
```

## 查找文件

``` shell
# sudo find path -name "fileName" -print
# path：要查找的路径
# fileName：文件夹的匹配规则，例如：Activity*.java
# 例：
$ sudo find . -name "Activity*.java" -print
```
