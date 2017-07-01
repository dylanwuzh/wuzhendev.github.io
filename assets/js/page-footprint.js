// 百度地图API功能
function loadJScript() {

	// 添加地图的javascript
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src =
		"http://api.map.baidu.com/api?v=2.0&ak=6SlO85D1vOZfmvlht9NYGQ5cEFRK4ZxA&callback=init";
	document.body.appendChild(script);
}

// 初始化
function init() {
	var divMap = document.createElement("div");
	divMap.id = "footprint-map";
	divMap.style.minHeight = (window.screen.availHeight - 170) + "px";
	document.getElementById("map-content").appendChild(divMap);

	var centerPoint = new BMap.Point(106, 38); // 地图初始显示的中心点经纬度
	var initZoom; // 初始的缩放比例
	if (window.screen.availWidth < 500) {
		initZoom = 4;
	} else {
		initZoom = 5;
	}

	var map = new BMap.Map("footprint-map"); // 创建地图实例
	map.centerAndZoom(centerPoint, initZoom); // 设置地图中心点和缩放比例
	map.enableScrollWheelZoom(); // 启用滚轮放大缩小

	addMapControllers(map);
	addFootprintLines(map);
}

// 判断是否PC端浏览器
function isPCBrowser() {
	var userAgentInfo = navigator.userAgent;
	var Agents = ["Android", "iPhone",
		"SymbianOS", "Windows Phone",
		"iPad", "iPod"
	];
	var isPc = true;
	for (var i = 0; i < Agents.length; i++) {
		if (userAgentInfo.indexOf(Agents[i]) > 0) {
			isPc = false;
			break;
		}
	}
	return isPc;
}

// 添加地图的控件
function addMapControllers(map) {

	if (isPCBrowser()) { // PC端浏览器添加平移、缩放的控件
		// 添加带有定位的导航控件
		var navigationControl = new BMap.NavigationControl({

			anchor: BMAP_ANCHOR_TOP_LEFT, // 靠左上角位置
			type: BMAP_NAVIGATION_CONTROL_LARGE, // LARGE类型
			enableGeolocation: true // 启用显示定位
		});
		map.addControl(navigationControl);
	}

	// 添加定位控件
	var geolocationControl = new BMap.GeolocationControl();
	map.addControl(geolocationControl);
}

// 添加足迹的连线
function addFootprintLines(map) {

	// 线条的颜色
	var lineColors = ["#FF5252", "#FF9800", "#009688", "#2196F3", "#03A9F4",
		"#CDDC39", "#512DA8", "#E040FB"
	];

	// 旅行的时间
	var tripTimes = ["2014-09 中秋节", "2014-11", "2015-06 端午节", "2015-08",
		"2015-10 十一", "2016-05 五一", "2016-06 端午节", "2016-10 十一"
	];
	var tripInfos = [
		"和同学一行三人从峨眉山山脚一直爬到山顶，期待中的佛光、晚霞、日出都没看到，不过云海确实很壮观。在金顶脚下的时候还是一片雾蒙蒙的，等坐着缆车登上金顶，顿时拨云见日，万里晴空。",
		"", "", "", "", "", "", ""
	];

	var markTitles = new Array();
	markTitles[0] = ["北京", "成都", "峨眉山"];
	markTitles[1] = ["北京", "曼谷", "芭提雅"];
	markTitles[2] = ["北京", "深圳", "澳门", "香港"];
	markTitles[3] = ["北京", "南京"];
	markTitles[4] = ["北京", "成都", "九寨沟", "乐山", "都江堰"];
	markTitles[5] = ["北京", "扬州", "苏州", "上海"];
	markTitles[6] = ["北京", "昆明", "大理", "丽江"];
	markTitles[7] = ["北京", "张家界", "长沙", "武汉"];

	var markInfos = new Array();
	markInfos[0] = ["2014-09-05 20:20从北京，23:10到达成都", "成都", "峨眉山"];
	markInfos[1] = ["北京", "曼谷", "芭提雅"];
	markInfos[2] = ["北京", "深圳", "澳门", "香港"];
	markInfos[3] = ["北京", "南京"];
	markInfos[4] = ["北京", "成都", "九寨沟", "乐山", "都江堰"];
	markInfos[5] = ["北京", "扬州", "苏州", "上海"];
	markInfos[6] = ["北京", "昆明", "大理", "丽江"];
	markInfos[7] = ["北京", "张家界", "长沙", "武汉"];

	// 2014-09：北京 -> 成都 -> 峨眉山
	var beijing1 = new BMap.Point(116.583404, 39.914874); // 北京
	var chengdu1 = new BMap.Point(104.050638, 30.555782); // 成都
	var emeishan1 = new BMap.Point(103.34597, 29.526393); // 峨眉山金顶
	addFootprints(map, lineColors[0], [beijing1, chengdu1, emeishan1],
		tripTimes[0], tripInfos[0], markTitles[0], markInfos[0]);

	// 2014-11：北京 -> 曼谷 -> 芭提雅
	var beijing2 = new BMap.Point(116.513165, 39.909073); // 北京
	var mangu2 = new BMap.Point(100.581133, 13.797391); // 曼谷
	var batiya2 = new BMap.Point(100.878005, 12.920579); // 芭提雅
	addFootprints(map, lineColors[1], [beijing2, mangu2, batiya2],
		tripTimes[1], tripInfos[1], markTitles[1], markInfos[1]);

	// 2015-06：北京 -- 深圳 -- 澳门 -- 香港
	var beijing3 = new BMap.Point(116.620715, 40.060216); // 北京
	var shenzhen3 = new BMap.Point(114.064281, 22.549342); // 深圳
	var macao3 = new BMap.Point(113.552516, 22.200608); // 澳门
	var hongkong3 = new BMap.Point(114.186702, 22.29263); // 香港
	addFootprints(map, lineColors[2], [beijing3, shenzhen3, macao3, hongkong3],
		tripTimes[2], tripInfos[2], markTitles[2], markInfos[2]);

	// 2015-08：北京 -- 南京
	var beijing4 = new BMap.Point(116.388107, 39.872591); // 北京
	var nanjing4 = new BMap.Point(118.796267, 32.025945); // 南京
	addFootprints(map, lineColors[3], [beijing4, nanjing4],
		tripTimes[3], tripInfos[3], markTitles[3], markInfos[3]);

	// 2015-10：北京 -- 成都 -- 九寨沟 -- 乐山 -- 都江堰
	var beijing5 = new BMap.Point(116.403603, 39.799214); // 北京
	var chengdu5 = new BMap.Point(104.020458, 30.710894); // 成都
	var jiuzhaigou5 = new BMap.Point(103.938447, 33.244267); // 九寨沟
	var leshan5 = new BMap.Point(103.774812, 29.551759); // 乐山
	var dujiangyan5 = new BMap.Point(103.615688, 31.008184); // 都江堰
	addFootprints(map, lineColors[4], [beijing5, chengdu5, jiuzhaigou5, leshan5,
		dujiangyan5
	], tripTimes[4], tripInfos[4], markTitles[4], markInfos[4]);

	// 2016-05：北京 -- 扬州 -- 苏州 -- 上海
	var beijing6 = new BMap.Point(116.381938, 39.873136); // 北京
	var yangzhou6 = new BMap.Point(119.427594, 32.413876); // 扬州
	var suzhou6 = new BMap.Point(120.606858, 31.318714); // 苏州
	var shanghai6 = new BMap.Point(121.497698, 31.241895); // 上海
	addFootprints(map, lineColors[5], [beijing6, yangzhou6, suzhou6, shanghai6],
		tripTimes[5], tripInfos[5], markTitles[5], markInfos[5]);

	// 2016-06：北京 -- 昆明 -- 大理 -- 丽江
	var beijing7 = new BMap.Point(116.381938, 39.873136); // 北京
	var kunming = new BMap.Point(102.93946,25.104806); // 昆明
	var dali = new BMap.Point(100.170377,25.69349); // 大理
	var lijiang = new BMap.Point(100.240502,26.881185); // 丽江
	addFootprints(map, lineColors[6], [beijing7, kunming, dali, lijiang],
		tripTimes[6], tripInfos[6], markTitles[6], markInfos[6]);

	// 2016-10：北京 -- 张家界 -- 长沙 -- 武汉
	var beijing8 = new BMap.Point(116.381938, 39.873136); // 北京
	var zhangjiajie = new BMap.Point(110.460347,29.337818); // 张家界
	var changsha = new BMap.Point(112.943896,28.194246); // 长沙
	var wuhan = new BMap.Point(114.299327,30.553406); // 武汉
	addFootprints(map, lineColors[7], [beijing8, zhangjiajie, changsha, wuhan],
		tripTimes[7], tripInfos[7], markTitles[7], markInfos[7]);
}

// 添加每一条足迹
function addFootprints(map, lineColor, points, tripTime, tripInfo,
	markTitles, markInfos) {

	var line = new BMap.Polyline(points, {
		strokeColor: lineColor, // 笔画颜色
		strokeWeight: 3, // 笔画粗细
		strokeOpacity: 0.7 // 笔画透明度
	}); // 创建线对象

	map.addOverlay(line); // 添加到地图中

	addMarkPoints(map, points, markTitles, markInfos);
	addLineEvent(map, line, tripTime, tripInfo, markTitles);
}

// 添加足迹中的每个点
function addMarkPoints(map, points, markTitles, markInfos) {
	for (var i = 0; i < points.length; i++) {
		var point = points[i];
		var icon = new BMap.Icon("/assets/images/marker" + (i + 1) + ".png", new BMap
			.Size(30, 30));
		// var icon = new BMap.Icon("/assets/images/marker.png", new BMap
		// 	.Size(5, 5));

		var marker = new BMap.Marker(point, {
			icon: icon
		}); // 创建标注

		var markTitle = markTitles[i];
		var markInfo = markInfos[i];

		addMarkEventListener(map, marker, markTitle, markInfo);
	}
}

var infoWindowTitleStyle =
	"style=\"color: #00BCD4; font-family: 'Roboto', sans-serif;\"";
var infoWindowSubtitleStyle =
	"style=\"color: #009688; font-family: 'Roboto', sans-serif; line-height: 2.0;\"";
var infoWindowContentStyle =
	"style=\"color: #455A64; font-family: 'Roboto', sans-serif; line-height: 1.5;\"";

function addMarkEventListener(map, marker, markTitle, markInfo) {

	marker.addEventListener("click", function(e) {

		var title = "<span " + infoWindowTitleStyle + ">" + markTitle + "</span>";

		var content = "<span " + infoWindowContentStyle + ">" + markInfo +
			"</span>";

		var width = (isPCBrowser() ? 300 : 200);
		var opts = {
			width: width, // 信息窗口宽度
			height: 0, // 信息窗口高度
			title: title, // 信息窗口标题
			enableMessage: false, // 设置允许信息窗发送短息
			enableAutoPan: true, // 是否开启信息窗口打开时地图自动移动
			enableCloseOnClick: true, // 是否开启点击地图关闭信息窗口
		}
		var target = e.target;
		var point = new BMap.Point(target.getPosition().lng, target.getPosition().lat);
		var infoWindow = new BMap.InfoWindow(content, opts); // 创建信息窗口对象

		map.openInfoWindow(infoWindow, point); // 开启信息窗口
	});
	map.addOverlay(marker); // 将标注添加到地图中
}

// 添加足迹连线的事件
function addLineEvent(map, line, tripTime, tripInfo, markTitles) {

	line.addEventListener("mouseup", function(e) {

		var title = "<span " + infoWindowTitleStyle + ">" + tripTime + "</span>";

		var length = markTitles.length;
		var infoContent = "<p>";
		infoContent += "<span " + infoWindowSubtitleStyle + ">";
		for (var i = 0; i < length; i++) {
			infoContent += markTitles[i];
			if (i < length - 1) {
				infoContent += " -- ";
			}
		}
		infoContent += "</span><br />";
		infoContent += "<span " + infoWindowContentStyle + ">";
		infoContent += tripInfo;
		infoContent += "</span></p>";

		var width = (isPCBrowser() ? 300 : 200);
		var opts = {
			width: width, // 信息窗口宽度
			height: 0, // 信息窗口高度
			title: title, // 信息窗口标题
			enableMessage: false, // 设置允许信息窗发送短息
			enableAutoPan: true, // 是否开启信息窗口打开时地图自动移动
			enableCloseOnClick: true, // 是否开启点击地图关闭信息窗口
		}
		var infoWindow = new BMap.InfoWindow(infoContent, opts);

		map.openInfoWindow(infoWindow, e.point); // 开启信息窗口
	});
}

window.onload = loadJScript; // 异步加载地图
