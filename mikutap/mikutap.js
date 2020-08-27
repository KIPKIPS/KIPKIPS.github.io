init();

//初始化操作
function init() {
    initScene();
}

//初始化界面
function initScene() {
    //显示开始菜单
    var startPanel = document.getElementById("scene_top");
    startPanel.style.display = "block"
    //初始化进度条
    var sceneLoading = document.getElementById("scene_loading");
    sceneLoading.style.display = 'none'
    sceneLoading.style.width = "0%"
    //隐藏主界面
    var mainPanel = document.getElementById("scene_loading");
    mainPanel.style.display = 'none'

    /*注册事件*/
    //返回按钮
    document.getElementById('bt_back').addEventListener('click', function () {
        history.go(-1);
    });
    //全屏函数
    document.getElementById('bt_fs').addEventListener('click', function () {
        requestFullScreen(document.getElementById("body"))
    });
}

var bgmOn = true
function bgmDown() {
    if (bgmOn) {
        document.getElementById("bgmOF").innerHTML = "BACKTRACK:OFF"
        bgmOn = false
    }
    else {
        document.getElementById("bgmOF").innerHTML = "BACKTRACK:ON"
        bgmOn = true
    }
}

var feedOn = true
function feedDown() {
    if (feedOn) {
        document.getElementById("feedOF").innerHTML = "FEEDBACK:OFF"
        feedOn = false
    }
    else {
        document.getElementById("feedOF").innerHTML = "FEEDBACK:ON"
        feedOn = true
    }
}
/*全屏函数*/
var isFull = false
function requestFullScreen(element) {
    var fullScreen = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;
    var quitFullScreenByDocument = document.exitFullScreen || document.mozCancelFullScreen || document.webkitExitFullscreen || element.msExitFullscreen;
    var quitFullScreenByElement = element.msExitFullscreen;
    if (!isFull) {
        fullScreen.call(element);
        isFull = true
    }
    else {
        if (document) {
            quitFullScreenByDocument.call(document);
        }
        else {
            quitFullScreenByElement.call(element);
        }
        isFull = false;
    }
}

