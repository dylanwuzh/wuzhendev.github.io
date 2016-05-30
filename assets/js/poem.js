// 读取poem.json文件，并且根据日期取一个填充到页面上
var readPoems = function() {

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
