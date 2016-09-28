---
layout: post
title:  "Android ListView的setSelection方法无效"
categories: Android
tags: [Android]
---
> 需求：聊天消息列表页面，收到新消息后自动滚动到 ListView 的底部

很简单，在接收到新消息的回调方法中调用 `ListView.setSelection(int)` 就可以了：

```
lv.setSelection(lv.getAdapter().getCount() - 1);
```

加上了代码，运行后发个消息试试，结果，完全没效果...

于是想到了要加个 `post()`，将代码改成了：

```
lv.post(new Runnable() {
    @Override
    public void run() {
        lv.setSelection(lv.getAdapter().getCount() - 1);
    }
});
```

再次运行，还是没效果...

之后又试了下面各种方法：

```
lv.setSelection();
lv.setSelectionFromTop();
lv.smoothScrollToPosition();
lv.smoothScrollToPositionFromTop();
```

没办法，只能求助 Google，于是搜索："listview setselection not work"，发现遇到这个问题的同学还真不少，接着试了下面几个方法的各种排列组合：

```
lv.clearFocus();
lv.requestFocusFromTouch();
lv.setItemChecked();
lv.smoothScrollBy();
lv.scrollTo();
```

但是...依然不行...抓狂中

最后 Debug，一步一步的跟踪方法的调用，终于找到了原因：
新消息的回调事件是在子线程中执行的，接收到消息后在子线程中把新消息添加到了 Adapter 中并且执行 `Adapter.notifyDataSetChanged()`，最终代码：

```
lv.post(new Runnable() {
    @Override
    public void run() {
        mAdapter.addData(messages);
        lv.smoothScrollToPosition(lv.getAdapter().getCount() - 1);
    }
});
```

---

## 参考资料

### [stackoverflow: ListView.setSelection is not working](http://stackoverflow.com/questions/17011073/listview-setselection-is-not-working)

### [stackoverflow: Android ListView setSelection() does not seem to work](http://stackoverflow.com/questions/1446373/android-listview-setselection-does-not-seem-to-work)
