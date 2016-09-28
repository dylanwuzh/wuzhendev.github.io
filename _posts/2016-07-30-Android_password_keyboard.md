---
layout: post
title:  "自定义输入支付密码的软键盘"
categories: Android
tags: [Android]
---
> **需求：要实现类似支付宝的输入支付密码的功能，效果图如下：**
> ![软键盘效果图](/assets/images/posts/2016-07-30-keyboard_design.jpg)

使用 `android.inputmethodservice.KeyboardView` 这个类自定义软键盘

## 软键盘的实现

**1. 自定义只输入数字的软键盘 `PasswordKeyboardView` 类，继承自 `android.inputmethodservice.KeyboardView`**

``` java
/**
 * 输入数字密码的键盘布局控件。
 */
public class PasswordKeyboardView extends KeyboardView implements
        android.inputmethodservice.KeyboardView.OnKeyboardActionListener {

    // 用于区分左下角空白的按键
    private static final int KEYCODE_EMPTY = -10;

    private int      mDeleteBackgroundColor;
    private Rect     mDeleteDrawRect;
    private Drawable mDeleteDrawable;

    private IOnKeyboardListener mOnKeyboardListener;

    public PasswordKeyboardView(Context context, AttributeSet attrs) {
        super(context, attrs);
        init(context, attrs, 0);
    }

    public PasswordKeyboardView(Context context, AttributeSet attrs,
            int defStyleAttr) {
        super(context, attrs, defStyleAttr);
        init(context, attrs, defStyleAttr);
    }

    private void init(Context context, AttributeSet attrs,
            int defStyleAttr) {
        TypedArray a = context.obtainStyledAttributes(attrs,
                R.styleable.PasswordKeyboardView, defStyleAttr, 0);
        mDeleteDrawable = a.getDrawable(
                R.styleable.PasswordKeyboardView_pkvDeleteDrawable);
        mDeleteBackgroundColor = a.getColor(
                R.styleable.PasswordKeyboardView_pkvDeleteBackgroundColor,
                Color.TRANSPARENT);
        a.recycle();

        // 设置软键盘按键的布局
        Keyboard keyboard = new Keyboard(context,
                R.xml.keyboard_number_password);
        setKeyboard(keyboard);

        setEnabled(true);
        setPreviewEnabled(false);
        setOnKeyboardActionListener(this);
    }

    @Override
    public void onDraw(Canvas canvas) {
        super.onDraw(canvas);

        // 遍历所有的按键
        List<Keyboard.Key> keys = getKeyboard().getKeys();
        for (Keyboard.Key key : keys) {
            // 如果是左下角空白的按键，重画按键的背景
            if (key.codes[0] == KEYCODE_EMPTY) {
                drawKeyBackground(key, canvas, mDeleteBackgroundColor);
            }
            // 如果是右下角的删除按键，重画背景，并且绘制删除的图标
            else if (key.codes[0] == Keyboard.KEYCODE_DELETE) {
                drawKeyBackground(key, canvas, mDeleteBackgroundColor);
                drawDeleteButton(key, canvas);
            }
        }
    }

    // 绘制按键的背景
    private void drawKeyBackground(Keyboard.Key key, Canvas canvas,
            int color) {
        ColorDrawable drawable = new ColorDrawable(color);
        drawable.setBounds(key.x, key.y,
                key.x + key.width, key.y + key.height);
        drawable.draw(canvas);
    }

    // 绘制删除按键
    private void drawDeleteButton(Keyboard.Key key, Canvas canvas) {
        if (mDeleteDrawable == null)
            return;

        // 计算删除图标绘制的坐标
        if (mDeleteDrawRect == null || mDeleteDrawRect.isEmpty()) {
            int intrinsicWidth = mDeleteDrawable.getIntrinsicWidth();
            int intrinsicHeight = mDeleteDrawable.getIntrinsicHeight();
            int drawWidth = intrinsicWidth;
            int drawHeight = intrinsicHeight;

            // 限制图标的大小，防止图标超出按键
            if (drawWidth > key.width) {
                drawWidth = key.width;
                drawHeight = drawWidth * intrinsicHeight / intrinsicWidth;
            }
            if (drawHeight > key.height) {
                drawHeight = key.height;
                drawWidth = drawHeight * intrinsicWidth / intrinsicHeight;
            }

            // 获取删除图标绘制的坐标
            int left = key.x + (key.width - drawWidth) / 2;
            int top = key.y + (key.height - drawHeight) / 2;
            mDeleteDrawRect = new Rect(left, top,
                    left + drawWidth, top + drawHeight);
        }

        // 绘制删除的图标
        if (mDeleteDrawRect != null && !mDeleteDrawRect.isEmpty()) {
            mDeleteDrawable.setBounds(mDeleteDrawRect.left,
                    mDeleteDrawRect.top, mDeleteDrawRect.right,
                    mDeleteDrawRect.bottom);
            mDeleteDrawable.draw(canvas);
        }
    }

    @Override
    public void onKey(int primaryCode, int[] keyCodes) {
        // 处理按键的点击事件
        // 点击删除按键
        if (primaryCode == Keyboard.KEYCODE_DELETE) {
            if (mOnKeyboardListener != null) {
                mOnKeyboardListener.onDeleteKeyEvent();
            }
        }
        // 点击了非左下角按键的其他按键
        else if (primaryCode != KEYCODE_EMPTY) {
            if (mOnKeyboardListener != null) {
                mOnKeyboardListener.onInsertKeyEvent(
                        Character.toString((char) primaryCode));
            }
        }
    }

    @Override
    public void onPress(int primaryCode) {

    }

    @Override
    public void onRelease(int primaryCode) {

    }

    @Override
    public void onText(CharSequence text) {

    }

    @Override
    public void swipeLeft() {

    }

    @Override
    public void swipeRight() {

    }

    @Override
    public void swipeDown() {

    }

    @Override
    public void swipeUp() {

    }

    /**
     * 设置键盘的监听事件。
     *
     * @param listener
     *         监听事件
     */
    public void setIOnKeyboardListener(IOnKeyboardListener listener) {
        this.mOnKeyboardListener = listener;
    }

    public interface IOnKeyboardListener {

        void onInsertKeyEvent(String text);

        void onDeleteKeyEvent();
    }
}
```

**2. 软键盘按键的布局文件 `res/xml/keyboard_number_password`：**

> **说明：**
> 1. android:keyWidth="33.33333%p"：指定按键的宽度，保证键盘的每一列宽度一致
> 2. android:keyHeight="8%p"：设置键盘的高度
> 3. android:horizontalGap="1dp"：实现键盘每一列之间的分割线
> 4. android:verticalGap="1dp"：实现键盘每一行之间的分割线

``` xml
<?xml version="1.0" encoding="utf-8"?>
<Keyboard
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:keyWidth="33.33333%p"
    android:keyHeight="8%p"
    android:horizontalGap="1dp"
    android:verticalGap="1dp">
    <Row>
        <Key
            android:codes="49"
            android:keyLabel="1"/>
        <Key
            android:codes="50"
            android:keyLabel="2"/>
        <Key
            android:codes="51"
            android:keyLabel="3"/>
    </Row>

    <Row>
        <Key
            android:codes="52"
            android:keyLabel="4"/>
        <Key
            android:codes="53"
            android:keyLabel="5"/>
        <Key
            android:codes="54"
            android:keyLabel="6"/>
    </Row>

    <Row>
        <Key
            android:codes="55"
            android:keyLabel="7"/>
        <Key
            android:codes="56"
            android:keyLabel="8"/>
        <Key
            android:codes="57"
            android:keyLabel="9"/>
    </Row>

    <Row>
        <Key
            android:codes="-10"
            android:keyLabel=""/>
        <Key
            android:codes="48"
            android:keyLabel="0"/>
        <Key
            android:codes="-5"
            android:keyIcon="@mipmap/keyboard_backspace"/>
    </Row>
</Keyboard>
```

**3. 在布局中引用软键盘控件：**

``` xml
<[包名].PasswordKeyboardView
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:background="#b0b0b0"
    android:focusable="true"
    android:focusableInTouchMode="true"
    android:keyBackground="#ffffff"
    android:keyTextColor="#000000"
    android:shadowColor="#00000000"
    android:shadowRadius="0"
    app:pkvDeleteBackgroundColor="#d2d2d2"
    app:pkvDeleteDrawable="@drawable/keyboard_backspace" />
```

## 随机数字键盘的实现

目前能想到的有两种实现方式：
1\. 在 `onDraw` 方法里重新绘制键盘上的文字，覆盖掉原来的键盘，这种实现方式相对比较麻烦。
2\. 调用 `KeyboardView.setKeyboard()` 方法重新设置键盘，实现的代码如下：

``` java
// 0-9 的数字
private final List<Character> keyCodes = Arrays.asList(
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9');

/**
 * 随机打乱数字键盘上显示的数字顺序。
 */
public void shuffleKeyboard() {
    Keyboard keyboard = getKeyboard();
    if (keyboard != null && keyboard.getKeys() != null
            && keyboard.getKeys().size() > 0) {
        // 随机排序数字
        Collections.shuffle(keyCodes);

        // 遍历所有的按键
        List<Keyboard.Key> keys = getKeyboard().getKeys();
        int index = 0;
        for (Keyboard.Key key : keys) {
            // 如果按键是数字
            if (key.codes[0] != KEYCODE_EMPTY
                    && key.codes[0] != Keyboard.KEYCODE_DELETE) {
                char code = keyCodes.get(index++);
                key.codes[0] = code;
                key.label = Character.toString(code);
            }
        }
        // 更新键盘
        setKeyboard(keyboard);
    }
}
```

调用 `shuffleKeyboard` 即可生成随机的键盘。

最终实现的效果如下：

![随机键盘](/assets/images/posts/2016-07-30-keyboard_random.jpg)

## 踩坑

**1. 点击按键的放大镜效果提示**
软键盘默认点击按键时会显示放大镜效果的提示，如果不需要可以使用 `setPreviewEnabled(false)` 设置不显示提示。
可以在布局中使用 `android:keyPreviewLayout` 指定提示文字的布局。

**2. 按键文字不清晰**
软键盘按键默认带有阴影效果，会导致文字不清楚，可以使用下面方式去掉阴影：

``` xml
<[包名].PasswordKeyboardView
    android:shadowColor="@color/transparent"
    android:shadowRadius="0"
    ...
    />
```
