---
layout: post
title:  "Android Intent中系统常量"
categories: Android
tags: [Android]
---
基于 Android 6.0 SDK

## 系统的Action的列表

1. Intent.ACTION_MAIN
"android.intent.action.MAIN"
标识 Activity 为一个应用程序的入口

2. Intent.ACTION_VIEW
"android.intent.action.VIEW"
显示数据给用户

3. Intent.ACTION_ATTACH_DATA
"android.intent.action.ATTACH_DATA"
指明附加信息给其他地方的一些数据

4. Intent.ACTION_EDIT
"android.intent.action.EDIT"
编辑指定数据

5. Intent.ACTION_INSERT_OR_EDIT
"android.intent.action.INSERT_OR_EDIT"
添加或者编辑数据

6. Intent.ACTION_PICK
"android.intent.action.PICK"
选择数据

7. Intent.ACTION_CREATE_SHORTCUT
"android.intent.action.CREATE_SHORTCUT"
创建应用的快捷方式

8. Intent.ACTION_CHOOSER
"android.intent.action.CHOOSER"
显示一个 Activity 选择器

9. Intent.ACTION_GET_CONTENT
"android.intent.action.GET_CONTENT"
让用户选择数据，并返回所选

10. Intent.ACTION_DIAL
"android.intent.action.DIAL"
显示拨号面板

11. Intent.ACTION_CALL
"android.intent.action.CALL"
呼叫指定的电话号码

12. Intent.ACTION_SENDTO
"android.intent.action.SENDTO"
选择发信息

13. Intent.ACTION_SEND
"android.intent.action.SEND"
直接发信息

14. Intent.ACTION_SEND_MULTIPLE
"android.intent.action.SEND_MULTIPLE"
分享多个数据

15. Intent.ACTION_ANSWER
"android.intent.action.ANSWER"
应答电话

16. Intent.ACTION_INSERT
"android.intent.action.INSERT"
插入数据

17. Intent.ACTION_PASTE
"android.intent.action.PASTE"
把当前剪贴板中的内容粘贴到指定的路径

18. Intent.ACTION_DELETE
"android.intent.action.DELETE"
删除数据

19. Intent.ACTION_RUN
"android.intent.action.RUN"
运行数据

20. Intent.ACTION_SYNC
"android.intent.action.SYNC"
执行数据同步

21. Intent.ACTION_PICK_ACTIVITY
"android.intent.action.PICK_ACTIVITY"
用于选择 Activity

22. Intent.ACTION_SEARCH
"android.intent.action.SEARCH"
执行搜索

23. Intent.ACTION_SYSTEM_TUTORIAL
"android.intent.action.SYSTEM_TUTORIAL"
启动系统的引导

24. Intent.ACTION_WEB_SEARCH
"android.intent.action.WEB_SEARCH"
Web 搜索内容

25. Intent.ACTION_ASSIST
"android.intent.action.ASSIST"

27. Intent.ACTION_ALL_APPS
"android.intent.action.ALL_APPS"
列出所有的应用

28. Intent.ACTION_SET_WALLPAPER
"android.intent.action.SET_WALLPAPER"
设置墙纸

29. Intent.ACTION_BUG_REPORT
"android.intent.action.BUG_REPORT"
显示 Bug 报告

30. Intent.ACTION_FACTORY_TEST
"android.intent.action.FACTORY_TEST"
工厂测试入口点

31. Intent.ACTION_CALL_BUTTON
"android.intent.action.CALL_BUTTON"
跳转到通话记录界面

32. Intent.ACTION_VOICE_COMMAND
"android.intent.action.VOICE_COMMAND"
语音命令

33. Intent.ACTION_SEARCH_LONG_PRESS
"android.intent.action.SEARCH_LONG_PRESS"

34. Intent.ACTION_APP_ERROR
"android.intent.action.APP_ERROR"
当用户点击 crash/ANR 对话框的 "Report" 按钮时发出的 Intent  

35. Intent.ACTION_POWER_USAGE_SUMMARY
"android.intent.action.POWER_USAGE_SUMMARY"
跳转到电池设置页面

37. Intent.ACTION_MANAGE_NETWORK_USAGE
"android.intent.action.MANAGE_NETWORK_USAGE"
跳转到设置的 “应用的数据使用情况” 页面

38. Intent.ACTION_INSTALL_PACKAGE
"android.intent.action.INSTALL_PACKAGE"
安装应用

39. Intent.ACTION_UNINSTALL_PACKAGE
"android.intent.action.UNINSTALL_PACKAGE"
卸载应用

44. Intent.ACTION_QUICK_CLOCK
"android.intent.action.QUICK_CLOCK"

45. Intent.ACTION_OPEN_DOCUMENT
"android.intent.action.OPEN_DOCUMENT"
打开文档

46. Intent.ACTION_CREATE_DOCUMENT
"android.intent.action.CREATE_DOCUMENT"
创建文档

47. Intent.ACTION_OPEN_DOCUMENT_TREE
"android.intent.action.OPEN_DOCUMENT_TREE"
打开文档的目录

48. Intent.ACTION_PROCESS_TEXT
"android.intent.action.PROCESS_TEXT"
浮动的文字选择工具栏


## 系统的广播

1. Intent.ACTION_SCREEN_OFF
"android.intent.action.SCREEN_OFF"
打开屏幕时发出的广播

2. Intent.ACTION_SCREEN_ON
"android.intent.action.SCREEN_ON"
关闭屏幕时发出的广播

3. Intent.ACTION_DREAMING_STOPPED
"android.intent.action.DREAMING_STOPPED"
停止睡眠模式

4. Intent.ACTION_DREAMING_STARTED
"android.intent.action.DREAMING_STARTED"
开始睡眠模式

5. Intent.ACTION_MANAGED_PROFILE_ADDED
"android.intent.action.MANAGED_PROFILE_ADDED"

6. Intent.ACTION_MANAGED_PROFILE_REMOVED
"android.intent.action.MANAGED_PROFILE_REMOVED"

7. Intent.ACTION_TIME_TICK
"android.intent.action.TIME_TICK"
系统时间每过一分钟发出的广播

7. Intent.ACTION_TIME_CHANGED
"android.intent.action.TIME_SET"
系统时间通过设置发生了变化

8. Intent.ACTION_DATE_CHANGED
"android.intent.action.DATE_CHANGED"
设备日期发生改变时发出的广播

9. Intent.ACTION_TIMEZONE_CHANGED
"android.intent.action.TIMEZONE_CHANGED"
时区改变时发出的广播

12. Intent.ACTION_BOOT_COMPLETED
"android.intent.action.BOOT_COMPLETED"
系统启动后发出的广播

13. Intent.ACTION_CLOSE_SYSTEM_DIALOGS
"android.intent.action.CLOSE_SYSTEM_DIALOGS"
关闭系统 Dialog 的广播

15. Intent.ACTION_PACKAGE_ADDED
"android.intent.action.PACKAGE_ADDED"
新的应用程序 APK 包安装完毕

16. Intent.ACTION_PACKAGE_REPLACED
"android.intent.action.PACKAGE_REPLACED"
应用被替换时发出的广播

17. Intent.ACTION_MY_PACKAGE_REPLACED
"android.intent.action.MY_PACKAGE_REPLACED"


18. Intent.ACTION_PACKAGE_REMOVED
"android.intent.action.PACKAGE_REMOVED"
应用被移除时发出的广播

19. Intent.ACTION_PACKAGE_FULLY_REMOVED
"android.intent.action.PACKAGE_FULLY_REMOVED"


20. Intent.ACTION_PACKAGE_CHANGED
"android.intent.action.PACKAGE_CHANGED"
现有的应用程序发生改变时的广播

22. Intent.ACTION_PACKAGE_RESTARTED
"android.intent.action.PACKAGE_RESTARTED"
应用被重启时发出的广播

23. Intent.ACTION_PACKAGE_DATA_CLEARED
"android.intent.action.PACKAGE_DATA_CLEARED"
应用的数据被清除时发出的广播

24. Intent.ACTION_UID_REMOVED
"android.intent.action.UID_REMOVED"
用户 ID 被删除时发出的广播

25. Intent.ACTION_PACKAGE_FIRST_LAUNCH
"android.intent.action.PACKAGE_FIRST_LAUNCH"
应用第一次启动时发出的广播

26. Intent.ACTION_PACKAGE_NEEDS_VERIFICATION
"android.intent.action.PACKAGE_NEEDS_VERIFICATION"

27. Intent.ACTION_PACKAGE_VERIFIED
"android.intent.action.PACKAGE_VERIFIED"

29. Intent.ACTION_EXTERNAL_APPLICATIONS_AVAILABLE
"android.intent.action.EXTERNAL_APPLICATIONS_AVAILABLE"
APP 移动到 SD 卡完成后发出的广播

30. Intent.ACTION_EXTERNAL_APPLICATIONS_UNAVAILABLE
"android.intent.action.EXTERNAL_APPLICATIONS_UNAVAILABLE"
APP 正在移动到 SD 卡时发出的广播

32. Intent.ACTION_CONFIGURATION_CHANGED
"android.intent.action.CONFIGURATION_CHANGED"
设备当前设置被改变时发出的广播

33. Intent.ACTION_LOCALE_CHANGED
"android.intent.action.LOCALE_CHANGED"
设备当前区域设置更改时发出的广播

34. Intent.ACTION_BATTERY_CHANGED
"android.intent.action.BATTERY_CHANGED"
充电状态或者电池的电量发生变化

35. Intent.ACTION_BATTERY_LOW
"android.intent.action.BATTERY_LOW"
电池电量过低时发出的广播

36. Intent.ACTION_BATTERY_OKAY
"android.intent.action.BATTERY_OKAY"
电池电量从低变化到饱满时发出的广播

37. Intent.ACTION_POWER_CONNECTED
"android.intent.action.ACTION_POWER_CONNECTED"
插上外部电源时发出的广播

38. Intent.ACTION_POWER_DISCONNECTED
"android.intent.action.ACTION_POWER_DISCONNECTED"
已断开外部电源连接时发出的广播

39. Intent.ACTION_SHUTDOWN
"android.intent.action.ACTION_SHUTDOWN"
关闭系统时发出的广播

41. Intent.ACTION_DEVICE_STORAGE_LOW
"android.intent.action.DEVICE_STORAGE_LOW"
设备内存不足时发出的广播

42. Intent.ACTION_DEVICE_STORAGE_OK
"android.intent.action.DEVICE_STORAGE_OK"
设备内存从不足到充足时发出的广播

45. Intent.ACTION_MANAGE_PACKAGE_STORAGE
"android.intent.action.MANAGE_PACKAGE_STORAGE"

48. Intent.ACTION_MEDIA_REMOVED
"android.intent.action.MEDIA_REMOVED"
外部储存设备被移除时发出的广播

49. Intent.ACTION_MEDIA_UNMOUNTED
"android.intent.action.MEDIA_UNMOUNTED"
外部储存设备存在，但是还没有被挂载

50. Intent.ACTION_MEDIA_CHECKING
"android.intent.action.MEDIA_CHECKING"
插入外部储存设备，系统进行检验时发出的广播

51. Intent.ACTION_MEDIA_NOFS
"android.intent.action.MEDIA_NOFS"

52. Intent.ACTION_MEDIA_MOUNTED
"android.intent.action.MEDIA_MOUNTED"
外部储存设备已被正确安装时发出的广播

53. Intent.ACTION_MEDIA_SHARED
"android.intent.action.MEDIA_SHARED"
扩展介质因作为 USB 大容量存储被共享时发出的广播

55. Intent.ACTION_MEDIA_BAD_REMOVAL
"android.intent.action.MEDIA_BAD_REMOVAL"
未正确移除 SD 卡，但已把 SD 卡取出来时发出的广播

56. Intent.ACTION_MEDIA_UNMOUNTABLE
"android.intent.action.MEDIA_UNMOUNTABLE"

57. Intent.ACTION_MEDIA_EJECT
"android.intent.action.MEDIA_EJECT"
已拔掉外部大容量储存设备发出的广播，不管有没有正确卸载都会发出此广播

58. Intent.ACTION_MEDIA_SCANNER_STARTED
"android.intent.action.MEDIA_SCANNER_STARTED"
开始扫描扩展介质的目录时发出的广播

59. Intent.ACTION_MEDIA_SCANNER_FINISHED
"android.intent.action.MEDIA_SCANNER_FINISHED"
扫描完扩展介质的目录时发出的广播

60. Intent.ACTION_MEDIA_SCANNER_SCAN_FILE
"android.intent.action.MEDIA_SCANNER_SCAN_FILE"

61. Intent.ACTION_MEDIA_BUTTON
"android.intent.action.MEDIA_BUTTON"
按下 “Media Button” 按键时发出的广播

62. Intent.ACTION_CAMERA_BUTTON
"android.intent.action.CAMERA_BUTTON"
按下拍照按键时发出的广播

63. Intent.ACTION_GTALK_SERVICE_CONNECTED
"android.intent.action.GTALK_CONNECTED"
Gtalk 已建立连接时发出的广播

64. Intent.ACTION_GTALK_SERVICE_DISCONNECTED
"android.intent.action.GTALK_DISCONNECTED"
Gtalk 已断开连接时发出的广播

65. Intent.ACTION_INPUT_METHOD_CHANGED
"android.intent.action.INPUT_METHOD_CHANGED"
改变输入法时发出的广播

66. Intent.ACTION_AIRPLANE_MODE_CHANGED
"android.intent.action.AIRPLANE_MODE"
打开或关闭飞行模式时的广播

67. Intent.ACTION_PROVIDER_CHANGED
"android.intent.action.PROVIDER_CHANGED"

68. Intent.ACTION_HEADSET_PLUG
"android.intent.action.HEADSET_PLUG"
在耳机口上插入耳机时发出的广播

70. Intent.ACTION_APPLICATION_RESTRICTIONS_CHANGED
"android.intent.action.APPLICATION_RESTRICTIONS_CHANGED"


71. Intent.ACTION_NEW_OUTGOING_CALL
"android.intent.action.NEW_OUTGOING_CALL"


72. Intent.ACTION_REBOOT
"android.intent.action.REBOOT"
重启设备时发出的广播

73. Intent.ACTION_DOCK_EVENT
"android.intent.action.DOCK_EVENT"


78. Intent.ACTION_GET_RESTRICTION_ENTRIES
"android.intent.action.GET_RESTRICTION_ENTRIES"


79. Intent.ACTION_USER_INITIALIZE
"android.intent.action.USER_INITIALIZE"


80. Intent.ACTION_USER_FOREGROUND
"android.intent.action.USER_FOREGROUND"


81. Intent.ACTION_USER_BACKGROUND
"android.intent.action.USER_BACKGROUND"


82. Intent.ACTION_USER_PRESENT
"android.intent.action.USER_PRESENT"


## 系统的Extra的列表

1. Intent.EXTRA_SHORTCUT_INTENT
"android.intent.extra.shortcut.INTENT"
使用ACTION_CREATE_SHORTCUT创建快捷方式时，快捷方式相对应的Intent对象

2. Intent.EXTRA_SHORTCUT_NAME
"android.intent.extra.shortcut.NAME"
使用ACTION_CREATE_SHORTCUT创建快捷方式时，快捷方式的名称

3. Intent.EXTRA_SHORTCUT_ICON
"android.intent.extra.shortcut.ICON"
使用ACTION_CREATE_SHORTCUT创建快捷方式时，快捷方式的图标

4. Intent.EXTRA_SHORTCUT_ICON_RESOURCE
"android.intent.extra.shortcut.ICON_RESOURCE"
使用ACTION_CREATE_SHORTCUT创建快捷方式时，快捷方式的图标资源

5. Intent.EXTRA_ASSIST_PACKAGE
"android.intent.extra.ASSIST_PACKAGE"


6. Intent.EXTRA_ASSIST_UID
"android.intent.extra.ASSIST_UID"


7. Intent.EXTRA_ASSIST_CONTEXT
"android.intent.extra.ASSIST_CONTEXT"


8. Intent.EXTRA_ASSIST_INPUT_HINT_KEYBOARD
"android.intent.extra.ASSIST_INPUT_HINT_KEYBOARD"


9. Intent.EXTRA_ASSIST_INPUT_DEVICE_ID
"android.intent.extra.ASSIST_INPUT_DEVICE_ID"


10. Intent.EXTRA_INSTALLER_PACKAGE_NAME
"android.intent.extra.INSTALLER_PACKAGE_NAME"
安装应用时传递包名

11. Intent.EXTRA_NOT_UNKNOWN_SOURCE
"android.intent.extra.NOT_UNKNOWN_SOURCE"
安装应用时传递是否是未知来源

12. Intent.EXTRA_ORIGINATING_URI
"android.intent.extra.ORIGINATING_URI"
安装应用时传递安装包地址

13. Intent.EXTRA_REFERRER
"android.intent.extra.REFERRER"


14. Intent.EXTRA_REFERRER_NAME
"android.intent.extra.REFERRER_NAME"


15. Intent.EXTRA_RETURN_RESULT
"android.intent.extra.RETURN_RESULT"
安装应用时传递参数：是否返回结果

16. Intent.EXTRA_PROCESS_TEXT
"android.intent.extra.PROCESS_TEXT"
使用 ACTION_PROCESS_TEXT 时指定接收到的选中文字

17. Intent.EXTRA_PROCESS_TEXT_READONLY
"android.intent.extra.PROCESS_TEXT_READONLY"
使用 ACTION_PROCESS_TEXT 时指定刚刚接收到的选中文字是否可以被用户编辑

18. Intent.EXTRA_TEMPLATE
"android.intent.extra.TEMPLATE"
新记录的初始化模板

19. Intent.EXTRA_TEXT
"android.intent.extra.TEXT"
发送信息时传递的文字

20. Intent.EXTRA_HTML_TEXT
"android.intent.extra.HTML_TEXT"
发送信息时传递的 HTML 格式的文字

21. Intent.EXTRA_STREAM
"android.intent.extra.STREAM"
发送信息时指定的流文件信息

22. Intent.EXTRA_EMAIL
"android.intent.extra.EMAIL"
发送 Email 时指定的收件人邮箱地址

23. Intent.EXTRA_CC
"android.intent.extra.CC"
发送 Email 时指定的抄送人邮箱地址

24. Intent.EXTRA_BCC
"android.intent.extra.BCC"
发送 Email 时指定的密送人邮箱地址

25. Intent.EXTRA_SUBJECT
"android.intent.extra.SUBJECT"
发送 Email 时指定的标题

26. Intent.EXTRA_INTENT
"android.intent.extra.INTENT"
使用 ACTION_PICK_ACTIVITY 时指定 Intent 选项

27. Intent.EXTRA_ALTERNATE_INTENTS
"android.intent.extra.ALTERNATE_INTENTS"


28. Intent.EXTRA_CHOOSER_REFINEMENT_INTENT_SENDER
"android.intent.extra.CHOOSER_REFINEMENT_INTENT_SENDER"


29. Intent.EXTRA_RESULT_RECEIVER
"android.intent.extra.RESULT_RECEIVER"

30. Intent.EXTRA_TITLE
"android.intent.extra.TITLE"
使用 ACTION_CHOOSER 时描述对话框的标题

31. Intent.EXTRA_INITIAL_INTENTS
"android.intent.extra.INITIAL_INTENTS"
使用 ACTION_CHOOSER 时指定显示在选择界面上的 Intent

32. Intent.EXTRA_REPLACEMENT_EXTRAS
"android.intent.extra.REPLACEMENT_EXTRAS"


33. Intent.EXTRA_CHOSEN_COMPONENT_INTENT_SENDER
"android.intent.extra.CHOSEN_COMPONENT_INTENT_SENDER"


34. Intent.EXTRA_CHOSEN_COMPONENT
"android.intent.extra.CHOSEN_COMPONENT"


35. Intent.EXTRA_KEY_EVENT
"android.intent.extra.KEY_EVENT"
发送广播时指定按键码

36. Intent.EXTRA_DONT_KILL_APP
"android.intent.extra.DONT_KILL_APP"


37. Intent.EXTRA_PHONE_NUMBER
"android.intent.extra.PHONE_NUMBER"
打电话时指定电话号码

38. Intent.EXTRA_UID
"android.intent.extra.UID"
描述用户的 ID

39. Intent.EXTRA_DATA_REMOVED
"android.intent.extra.DATA_REMOVED"
指定应用是否被卸载

40. Intent.EXTRA_REPLACING
"android.intent.extra.REPLACING"
指定是否重新安装应用

41. Intent.EXTRA_ALARM_COUNT
"android.intent.extra.ALARM_COUNT"
AlarmManager 的 Intent 中表示对于该 Intent 已经有多少个 Alarm 被累计（在 type 为 ELAPSED_REALTIME 或 RTC 时，因为设备处于休眠无法激活 Alarm，无法发送 Intent，从而进行累计）

42. Intent.EXTRA_DOCK_STATE
"android.intent.extra.DOCK_STATE"
当前底座的状态

43. Intent.EXTRA_BUG_REPORT
"android.intent.extra.BUG_REPORT"
发送错误日志时指定的错误信息

44. Intent.EXTRA_REMOTE_INTENT_TOKEN
"android.intent.extra.remote_intent_token"
远程的Intent

45. Intent.EXTRA_CHANGED_COMPONENT_NAME_LIST
"android.intent.extra.changed_component_name_list"
调用 ACTION_PACKAGE_CHANGED 时列出改变的组件的名字数组

46. Intent.EXTRA_CHANGED_PACKAGE_LIST
"android.intent.extra.changed_package_list"


47. Intent.EXTRA_CHANGED_UID_LIST
"android.intent.extra.changed_uid_list"


48. Intent.EXTRA_LOCAL_ONLY
"android.intent.extra.LOCAL_ONLY"
调用 ACTION_GET_CONTENT 时指定是否只获取本地

49. Intent.EXTRA_ALLOW_MULTIPLE
"android.intent.extra.ALLOW_MULTIPLE"
调用 ACTION_GET_CONTENT 时指定是否支持多个

50. Intent.EXTRA_USER
"android.intent.extra.USER"


51. Intent.EXTRA_RESTRICTIONS_LIST
"android.intent.extra.restrictions_list"


52. Intent.EXTRA_RESTRICTIONS_BUNDLE
"android.intent.extra.restrictions_bundle"


53. Intent.EXTRA_RESTRICTIONS_INTENT
"android.intent.extra.restrictions_intent"

54. Intent.EXTRA_MIME_TYPES
"android.intent.extra.MIME_TYPES"
Actions：ACTION_OPEN_DOCUMENT、ACTION_CREATE_DOCUMENT
MIME 类型的数组，对应于应用程序需要的文件类型

55. Intent.EXTRA_SHUTDOWN_USERSPACE_ONLY
"android.intent.extra.SHUTDOWN_USERSPACE_ONLY"


## 系统的Category的列表

1. Intent.CATEGORY_DEFAULT
"android.intent.category.DEFAULT"
默认的执行方式，按照普通 Activity 的执行方式执行

2. Intent.CATEGORY_BROWSABLE
"android.intent.category.BROWSABLE"
设置该组件可以使用浏览器启动

3. Intent.CATEGORY_VOICE
"android.intent.category.VOICE"


4. Intent.CATEGORY_ALTERNATIVE
"android.intent.category.ALTERNATIVE"
把要做的动作指定为在特定数据类型上执行的默认动作的可选项

5. Intent.CATEGORY_SELECTED_ALTERNATIVE
"android.intent.category.SELECTED_ALTERNATIVE"
设置 Activity 是否可以被认为是用户当前选择的数据的一个可选择的 Action

6. Intent.CATEGORY_TAB
"android.intent.category.TAB"
用于一个 TabActivity 中

7. Intent.CATEGORY_LAUNCHER
"android.intent.category.LAUNCHER"
设置该 Activity 在当前应用程序启动器中优先级最高，通常与入口 ACTION_MAIN 配合使用

8. Intent.CATEGORY_LEANBACK_LAUNCHER
"android.intent.category.LEANBACK_LAUNCHER"


9. Intent.CATEGORY_INFO
"android.intent.category.INFO"
用于提供包信息

10. Intent.CATEGORY_HOME
"android.intent.category.HOME"
设置该组件为 Home Activity

11. Intent.CATEGORY_PREFERENCE
"android.intent.category.PREFERENCE"
设置该组件为 Preference

12. Intent.CATEGORY_DEVELOPMENT_PREFERENCE
"android.intent.category.DEVELOPMENT_PREFERENCE"
说明 Activity 是一个设置面板

13. Intent.CATEGORY_EMBED
"android.intent.category.EMBED"
说明可以运行在 Activity 容器内

14. Intent.CATEGORY_MONKEY
"android.intent.category.MONKEY"
说明可以被 Monkey 或者其他的测试工具执行

15. Intent.CATEGORY_TEST
"android.intent.category.TEST"
用于一般的测试示例程序

16. Intent.CATEGORY_UNIT_TEST
"android.intent.category.UNIT_TEST"
用于单元测试

17. Intent.CATEGORY_SAMPLE_CODE
"android.intent.category.SAMPLE_CODE"
作为一个简单代码示例使用

18. Intent.CATEGORY_OPENABLE
"android.intent.category.OPENABLE"
用来指示一个 ACTION_GET_CONTENT 的 Intent，希望使用 ContentResolver.openInputStream 可以打开 URI

19. Intent.CATEGORY_FRAMEWORK_INSTRUMENTATION_TEST
"android.intent.category.FRAMEWORK_INSTRUMENTATION_TEST"
用来作为测试仪器测试框架下的代码

20. Intent.CATEGORY_CAR_DOCK
"android.intent.category.CAR_DOCK"
指定手机被插入汽车底座时运行该 Activity

21. Intent.CATEGORY_DESK_DOCK
"android.intent.category.DESK_DOCK"
指定手机被插入桌面底座时运行该 Activity

22. Intent.CATEGORY_LE_DESK_DOCK
"android.intent.category.LE_DESK_DOCK"


23. Intent.CATEGORY_HE_DESK_DOCK
"android.intent.category.HE_DESK_DOCK"


24. Intent.CATEGORY_CAR_MODE
"android.intent.category.CAR_MODE"
设置该 Activity 可在车载环境下使用

25. Intent.CATEGORY_APP_BROWSER
"android.intent.category.APP_BROWSER"
和 ACTION_MAIN 一起使用，用来启动浏览器应用程序

26. Intent.CATEGORY_APP_CALCULATOR
"android.intent.category.APP_CALCULATOR"
和 ACTION_MAIN 一起使用，用来启动计算器应用程序

27. Intent.CATEGORY_APP_CALENDAR
"android.intent.category.APP_CALENDAR"
和 ACTION_MAIN 一起使用，用来启动日历应用程序

28. Intent.CATEGORY_APP_CONTACTS
"android.intent.category.APP_CONTACTS"
和 ACTION_MAIN 一起使用，用来启动联系人应用程序

29. Intent.CATEGORY_APP_EMAIL
"android.intent.category.APP_EMAIL"
和 ACTION_MAIN 一起使用，用来启动邮件应用程序

30. Intent.CATEGORY_APP_GALLERY
"android.intent.category.APP_GALLERY"
和 ACTION_MAIN 一起使用，用来启动图库应用程序

31. Intent.CATEGORY_APP_MAPS
"android.intent.category.APP_MAPS"
和 ACTION_MAIN 一起使用，用来启动地图应用程序

32. Intent.CATEGORY_APP_MARKET
"android.intent.category.APP_MARKET"
这个 Activity 允许用户浏览和下载新的应用程序

33. Intent.CATEGORY_APP_MESSAGING
"android.intent.category.APP_MESSAGING"
和 ACTION_MAIN 一起使用，用来启动短信应用程序

34. Intent.CATEGORY_APP_MUSIC
"android.intent.category.APP_MUSIC"
和 ACTION_MAIN 一起使用，用来启动音乐应用程序
