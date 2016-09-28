---
layout: post
title:  "Android使用Gradle发布项目到JCenter"
categories: Android
tags: [Android, JCenter]
---

**开发环境：**

> *IDE：*
> **Android Studio 2.0**
>
> *dependencies：*
> **com.android.tools.build:gradle:2.0.0**
> **com.jfrog.bintray.gradle:gradle-bintray-plugin:1.0**
> **com.github.dcendents:android-maven-gradle-plugin:1.3**

## 一、申请Bintray账号
先到 [Bintray](https://bintray.com) 注册一个账号，也可以使用 GitHub 等账号登录。

账号登录后，点击账号名称进入个人页面

![Profile.png](http://upload-images.jianshu.io/upload_images/1320493-1beadbb62875cfb1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

然后点击Edit，进入编辑页面

![Profile Edit.png](http://upload-images.jianshu.io/upload_images/1320493-0b0c750176c99e07.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

接着点击 API key

![Edit API Key.png](http://upload-images.jianshu.io/upload_images/1320493-f6d08cb22bbd1bb0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

获取到 API KEY，记录下来

![API Key.png](http://upload-images.jianshu.io/upload_images/1320493-2c3a6095b4649640.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 二、配置Bintray的账号信息
在项目根目录的 local.properties 文件中添加 Bintray 的账号信息：

``` properties
bintray.user=用户名
bintray.apikey=第一步获取到的API key
```

## 三、声明插件依赖
在项目的 `build.gradle` 中声明 maven 和 bintray 的插件依赖：

``` groovy
buildscript {
    dependencies {
        classpath 'com.android.tools.build:gradle:2.0.0'
        // maven、bintray
        classpath 'com.github.dcendents:android-maven-gradle-plugin:1.3'
        classpath 'com.jfrog.bintray.gradle:gradle-bintray-plugin:1.0'
    }
}
```

## 四、配置Module
配置要发布的 Module 的 build.gradle 文件，最终的文件：

``` groovy
apply plugin: 'com.android.library'
// 配置插件
apply plugin: 'com.github.dcendents.android-maven'
apply plugin: 'com.jfrog.bintray'

android {
    compileSdkVersion 23
    buildToolsVersion "23.0.3"
    defaultConfig {
        minSdkVersion 11
        targetSdkVersion 23
        versionCode 1
        versionName "1.0.0"
    }
    buildTypes {
        release {
            minifyEnabled false
            proguardFiles getDefaultProguardFile('proguard-android.txt'),
                    'proguard-rules.pro'
        }
    }
}

dependencies {
    compile fileTree(dir: 'libs', include: ['*.jar'])
}

// 设置项目的信息，需要根据需要自行修改下面的信息
ext {
    bintrayRepo = 'maven' // bintray的仓库名
    bintrayName = 'projectName' // bintray上的项目名

    libraryGroupId = 'GroupId' // JCenter上的GroupId
    libraryVersion = '1.0.0' // 版本号
    libraryPackaging = 'aar' // 上传包的类型
    libraryDescription = 'something' // 项目描述
    siteUrl = 'projectUrl' // 项目的主页
    gitUrl = 'gitUrl' // Git仓库的地址
    issuesUrl = 'issuesUrl' // issues的URL地址

    // 配置开发者的信息
    developerId = 'Id' // ID
    developerName = 'Name' // 开发者名称
    developerEmail = 'Email' // 开发者邮箱

    // 设置开源证书的信息
    licenseName = 'The Apache Software License, Version 2.0'
    licenseUrl = 'http://www.apache.org/licenses/LICENSE-2.0.txt'
    allLicenses = ["Apache-2.0"]
}

group = libraryGroupId // 指定项目的GroupId
version = libraryVersion // 指定项目的版本号

install {
    repositories.mavenInstaller {
        // 生成pom.xml的配置信息
        pom.project {
            packaging libraryPackaging // 打包的类型
            name bintrayName // 项目的名称
            description libraryDescription // 项目的描述
            url siteUrl // 项目的主页

            // 配置开源证书信息
            licenses {
                license {
                    name licenseName
                    url licenseUrl
                }
            }

            // 配置开发者信息
            developers {
                developer {
                    id developerId
                    name developerName
                    email developerEmail
                }
            }

            // 软件配置管理信息
            scm {
                connection gitUrl
                developerConnection gitUrl
                url siteUrl
            }
        }
    }
}

// 上传源码的task
task sourcesJar(type: Jar) {
    from android.sourceSets.main.java.srcDirs
    classifier = 'sources'
}
artifacts {
    archives sourcesJar
}

// 上传Javadoc
android.libraryVariants.all { variant ->
    println variant.javaCompile.classpath.files
    if (variant.name == 'release') { // 我们只需 release 的 javadoc
        task("generate${variant.name.capitalize()}Javadoc", type: Javadoc) {
            source = variant.javaCompile.source
            classpath = files(variant.javaCompile.classpath.files,
                    project.android.getBootClasspath())
            options {
                encoding "UTF-8"
                charSet 'UTF-8'
                author true
                version true
                title bintrayName
                links "http://docs.oracle.com/javase/7/docs/api/"
                linksOffline "http://d.android.com/reference",
                        "${android.sdkDirectory}/docs/reference"
            }
            exclude '**/BuildConfig.java'
            exclude '**/R.java'
        }
        task("javadoc${variant.name.capitalize()}Jar", type: Jar,
                dependsOn: "generate${variant.name.capitalize()}Javadoc") {
            classifier = 'javadoc'
            from tasks.getByName("generate${variant.name.capitalize()}Javadoc")
                    .destinationDir
        }
        artifacts {
            archives tasks.getByName("javadoc${variant.name.capitalize()}Jar")
        }
    }
}

// 读取配置的bintray用户的信息
Properties properties = new Properties()
properties.load(project.rootProject.file('local.properties')
        .newDataInputStream())
// 配置bintray的信息
bintray {
    // 读取 local.properties 的 bintray.user
    user = properties.getProperty("bintray.user")
    // 读取 local.properties 的 bintray.apikey
    key = properties.getProperty("bintray.apikey")
    configurations = ['archives']
    pkg {
        repo = bintrayRepo
        name = bintrayName
        desc = libraryDescription
        websiteUrl = siteUrl
        vcsUrl = gitUrl
        issueTrackerUrl = issuesUrl
        licenses = allLicenses
        labels = ['android'] // 设置标签
        publish = true
        publicDownloadNumbers = true
    }
}
```

配置完成后调用 Gradle 命令上传即可：

``` shell
gradle bintrayUpload
```

## 五、同步到JCenter
打开个人页面，找到刚刚上传的项目

![Profile Maven Repository.png](http://upload-images.jianshu.io/upload_images/1320493-1f3409eda276de9b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

点击后打开刚刚上传的项目，点击右下角的 “Add to JCenter”，申请后等待审核通过

![Add to JCenter.png](http://upload-images.jianshu.io/upload_images/1320493-b387542372327784.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**注意：**
**1. 上传到 Bintray 后使用 Module 的名称作为项目的 ArtifactId，即使在 `build.gradle` 中设置了 ArtifactId 也无效。**

---

## 参考资料

### [Android 项目打包到 JCenter 的坑](http://www.jianshu.com/p/c721f9297b2f)

### [库上传JCenter教程](https://github.com/Jude95/JCenter)

### [如何使用Android Studio把自己的Android library分发到jCenter和Maven Central](http://www.devtf.cn/?p=760)

### [Android 项目打包到 JCenter 的坑](http://www.jianshu.com/p/c721f9297b2f)
