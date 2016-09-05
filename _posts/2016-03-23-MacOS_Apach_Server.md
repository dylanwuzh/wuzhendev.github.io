---
layout: post
title:  "Mac系统启动Apach服务"
categories: MacOS
tags: [MacOS]
---
## 启动Apach服务

``` shell
sudo apachectl start
```

## 重启Apach服务

``` shell
sudo apachectl restart
```

## 关闭Apach服务

``` shell
sudo apachectl stop
```

## 配置Apach监听端口

``` shell
sudo vi /etc/apache2/httpd.conf
```

查找 "Listen XX"，后面配置的即为端口号

``` shell
# vi命令行模式下查找
/Listen
```

## 修改Apache的默认根目录
Apache的默认根目录为：/Library（资源库）/WebServer/Documents/

``` shell
# vi命令行模式下查找
/Documents
```
