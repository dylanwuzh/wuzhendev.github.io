// 读取poem.json文件，并且根据日期取一个填充到页面上
var readPoems = function() {
    // var s = "";
    // s += " device width: " + window.innerWidth;
    // s += " client width: " + document.documentElement.clientWidth;
    // s += " 网页可见区域宽：" + document.body.clientWidth;
    // s += " 网页可见区域高：" + document.body.clientHeight;
    // s += " 网页可见区域宽：" + document.body.offsetWidth + "   (包括边线和滚动条的宽)";
    // s += " 网页可见区域高：" + document.body.offsetHeight + "   (包括边线的宽)";
    // s += " 网页正文全文宽：" + document.body.scrollWidth;
    // s += " 网页正文全文高：" + document.body.scrollHeight;
    // s += " 网页被卷去的高：" + document.body.scrollTop;
    // s += " 网页被卷去的左：" + document.body.scrollLeft;
    // s += " 网页正文部分上：" + window.screenTop;
    // s += " 网页正文部分左：" + window.screenLeft;
    // s += " 屏幕分辨率的高：" + window.screen.height;
    // s += " 屏幕分辨率的宽：" + window.screen.width;
    // s += " 屏幕可用工作区高度：" + window.screen.availHeight;
    // s += " 屏幕可用工作区宽度：" + window.screen.availWidth;
    // s += " 你的屏幕设置是   " + window.screen.colorDepth + "   位彩色";
    // s += " 你的屏幕设置   " + window.screen.deviceXDPI + "   像素/英寸";
    // alert(s);

    $.getJSON("../../assets/files/poem.json", function(data) {

        var date = new Date().getDate(); //获取当前日期
        var position = date % data.length;
        var poem = data[position];

        var poemContent = ""; //存储数据的变量
        poemContent += "<br><br><span class='poem-title'>" + poem[
            "title"] + "</span><br>";
        poemContent += "<span class='poem-author'>-- " + poem[
            "author"] + "</span><br>";
        poemContent += "<span class='poem-content'>" + poem[
            "content"] + "</span><br>";

        var $poemContent = $("#poem-daily");
        $poemContent.empty(); //清空内容
        $poemContent.html(poemContent);
    });
}

$(document).ready(function() {
    readPoems();
});
