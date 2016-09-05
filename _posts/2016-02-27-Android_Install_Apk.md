---
layout: post
title:  "Android代码安装和卸载APK"
categories: Android
tags: [Android]
---
## 安装APK

``` java
/**
 * 安装 APK。
 *
 * @param filePath
 *         APK 文件路径
 */
public static void installApk(Context context, String filePath) {
    Intent intent = new Intent(Intent.ACTION_VIEW);
    intent.setDataAndType(Uri.fromFile(new File(filePath)),
            "application/vnd.android.package-archive");
    context.startActivity(intent);
}
```

## 卸载APK

``` java
/**
 * 卸载 APK。
 *
 * @param packageName
 *         应用的包名
 */
public static void uninstallApk(Context context, String packageName) {
    Uri packageURI = Uri.parse("package:" + packageName);
    Intent intent = new Intent(Intent.ACTION_DELETE, packageURI);
    context.startActivity(intent);
}
```

---

## 源码地址

### [GitHub: InstallApkDemo](https://github.com/wuzhendev/samples/tree/master/InstallApkDemo)
