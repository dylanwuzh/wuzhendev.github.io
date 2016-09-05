---
layout: post
title:  "CentOS使用vsftpd开启FTP服务"
categories: CentOS
tags: [CentOS, FTP]
---
## 1. 安装 vsftpd

``` shell
yum install vsftpd
```

#### 2. 配置 vsftpd

打开 /etc/vsftpd/vsftpd.conf 并修改配置信息：

``` shell
vi /etc/vsftpd/vsftpd.conf
```

在 vsftpd.conf 文件中查找并配置：

``` shell
# 禁止匿名访问
anonymous_enable=NO

# 允许本地用户登录FTP
local_enable=YES

# 配置用户拦截机制，启用 /etc/vsftpd/user_list 文件且设置为白名单
# 具体规则见：附1
userlist_enable=YES
userlist_deny=NO
```

## 3. 创建用户

创建用户：

``` shell
# 增加用户 userName，设置该用户的主目录为 /home/ftp，禁止登录 SSH 权限
# -d：指定主目录
# -g：设置用户的群组
# -s：设置 SSH 权限
# -p：设置密码
useradd -d /home/ftp -g ftp -s /sbin/nologin userName -p password

# 修改用户密码：passwd userName
```

``` shell
# 在文件后添加新增的用户名
vi /etc/vsftpd/user_list
```

## 4. 启动 FTP 服务

启动服务：

``` shell
# service vsftpd stop：停止服务
# service vsftpd restart：重启服务
service vsftpd start

# 设置开机启动 FTP 服务
chkconfig vsftpd on
```

## 5. 配置防火墙

CentOS 7 默认的防火墙是 firewall，如果要替换成 iptables 可以使用下面的方法：

``` shell
# 停止 firewall 服务
systemctl stop firewalld.service

# 禁止 firewall 开机启动
systemctl disable firewalld.service

# 安装 iptables
yum install -y iptables

# 安装 iptables-services
yum install iptables-services
```

设置 iptables 的规则：

``` shell
# 编辑防火墙配置文件
vi /etc/sysconfig/iptables

# 启动 iptables 服务
systemctl start iptables.service

# 设置开机启动
systemctl enable iptables.service
```

修改 /etc/sysconfig/iptables 文件中的配置，按照已有的规则添加开放21端口：

``` shell
-A INPUT -p tcp -m state --state NEW -m tcp --dport 21 -j ACCEPT

#查看 iptables 现有规则
iptables -L -n
```

重启 iptables 服务：

``` shell
# 重启防火墙服务
systemctl restart iptables.service
```

## 6. 开启 FTP 的被动（passive）模式

打开 /etc/vsftpd/vsftpd.conf 文件，指定端口范围：

``` shell
# 在 vsftpd.conf 文件后追加
# 端口范围可随意修改
pasv_min_port=30000
pasv_max_port=30100
```

在 /etc/sysconfig/iptables 文件中开放设置的端口范围：

``` shell
-A INPUT -p tcp -m state --state NEW -m tcp --dport 30000:30100 -j ACCEPT
```

重启防火墙服务：

``` shell
# 重启防火墙服务
systemctl restart iptables.service
```

## 7. 配置黑名单、白名单
vsftpd 使用 `ftpusers` 和 `user_list` 两个文件对用户进行限制：

> **`/etc/vsftpd/ftpusers`：** 黑名单，总是有效，该文件中配置的用户禁止登入 FTP。

> **`/etc/vsftpd/user_list`：**
> 1. 如果 `/etc/vsftpd/vsftpd.conf` 中配置 `userlist_enable=NO`，则 user_list 文件无效。
> 2. 如果 `/etc/vsftpd/vsftpd.conf` 中配置 `userlist_enable=YES`，此时 user_list 文件有效，根据 vsftpd.conf 中配置的 userlist_deny 的值进行校验：
> 1）`userlist_deny＝YES`：user_list 是黑名单，该文件中配置的用户禁止登入 FTP；
> 2）`userlist_deny＝NO`：user_list 是白名单，只有该文件中配置的用户允许登入 FTP。
