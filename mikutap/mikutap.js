init();

//初始化
function init() {
    animate();
    initScene();
    addClickEvent();
}

//通用元素和预定义全局变量
var startPanel, sceneLoading, mainPanel, feedbackText, bgmText,aboutCover,aboutPanel;
var feedOn,bgmOn,isFull;

//初始化界面
function initScene() {
    console.log('init');
    //显示开始菜单
    startPanel = $('#scene_top');
    startPanel.css('display', 'block');
    //初始化进度条
    sceneLoading = $('#scene_loading');
    sceneLoading.css({ 'display': 'none', 'width': '0%' });
    //隐藏主界面
    mainPanel = $('#scene_main');
    mainPanel.css('display', 'none');

    feedbackText = $('#bt_feedback').children('a');
    bgmText = $('#bt_backtrack').children('a');
    aboutCover=$('#about_cover');
    aboutPanel=$('#about');
    aboutCover.css('display', 'none');
    aboutPanel.css('display', 'none');
    feedOn=bgmOn=true;
    isFull=false;
}

//注册点击事件
function addClickEvent() {
    //返回按钮
    $('#bt_back').click(function () { history.go(-1); });
    //全屏函数
    $('#bt_fs').click(function () { requestFullScreen(document.getElementById("body")) });
    //start btn
    $('#bt_start').children('a').click(function () { start(); });
    $('#bt_feedback').click(function () { feedDown(); });
    $('#bt_backtrack').click(function () { bgmDown(); });
    $('#bt_about').children('a').click(function () { about(); });
    $('#bt_close').click(function () { closeAbout(); });
}

//开始
function start() {
    //隐藏菜单
    startPanel.css('display', 'none')
    $('#bt_back').off('click');//移除返回上一个界面的事件
    //绑定初始化事件
    $('#bt_back').click(function () {
        init();
    });
    loading();
}

//加载动画
function loading() {
    sceneLoading.css('display', 'block')
    var width = { w: 0 }
    new TWEEN.Tween(width).onUpdate(function (width) { sceneLoading.css('width', width.w + '%') })//每一帧执行
        .easing(TWEEN.Easing.Linear.None) //缓动方式
        .to({ w: 100 }, 300)
        .onComplete(function () { setTimeout(function () { showMainPanel(); }, 800); }) //回调函数
        .start();
}

//显示主界面
function showMainPanel() {
    sceneLoading.css('display', 'none')
    mainPanel.css('display', 'block');
}

//feedback事件
function feedDown() {
    var txt = feedOn ? 'FEEDBACK:OFF' : 'FEEDBACK:ON'
    feedbackText.html(txt)
    feedOn = !feedOn
}

//bgm事件
function bgmDown() {
    var txt = bgmOn ? 'BACKTRACK:OFF' : 'BACKTRACK:ON'
    bgmText.html(txt)
    bgmOn = !bgmOn
}

/*全屏函数*/
function requestFullScreen(element) {
    var fullScreen = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;
    var quitFullScreenByDocument = document.exitFullScreen || document.mozCancelFullScreen || document.webkitExitFullscreen || element.msExitFullscreen;
    var quitFullScreenByElement = element.msExitFullscreen;
    if (!isFull) {
        fullScreen.call(element);
    }
    else {
        if (document) {
            quitFullScreenByDocument.call(document);
        }
        else {
            quitFullScreenByElement.call(element);
        }
    }
    isFull = !isFull
}

//about按钮 打开about界面
function about(){
    aboutCover.css('display','block');
    aboutPanel.css('display','block');
}

//关闭about界面
function closeAbout() {
    aboutCover.css('display', 'none');
    aboutPanel.css('display', 'none');
}

//帧循环
function animate() {
    requestAnimationFrame(animate);
    if (TWEEN != undefined) {
        TWEEN.update();
    }
}

