init();

//初始化
function init() {
    initData();
    //initScene();
    addClickEvent();
    onUpdate();
}


//通用元素和预定义全局变量
//元素变量
var startPanel, sceneLoading, mainPanel, feedbackText, bgmText, aboutCover, aboutPanel, canvas, ctx;
//状态控制变量
var feedOn, bgmOn, isFull, settingDisplay, isStart;
//数值
var screenWidth, screenHeight;

//初始化场景数据
function initData() {
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
    aboutCover = $('#about_cover');
    aboutPanel = $('#about');
    aboutCover.css('display', 'none');
    aboutPanel.css('display', 'none');
    canvas = document.getElementById('canvas');

    screenWidth = window.innerWidth;//计算画布的宽度
    screenHeight = window.innerHeight;//计算画布的高度
    context = canvas.getContext('2d')
    //设置宽高
    canvas.width = screenWidth;
    canvas.height = screenHeight;
    feedOn = bgmOn = true;
    isFull = false;
    settingDisplay = true;
    isStart = false;
    if (canvas.getContext) {
        ctx = canvas.getContext('2d');
    }
}

var render, scene, camera;
//初始化场景
function initScene() {
    scene = new THREE.Scene();//场景
    camera = new THREE.OrthographicCamera(
        -window.innerWidth / 2,
        window.innerWidth / 2,
        window.innerHeight / 2,
        -window.innerHeight / 2, 10, 1000
    );
    render = new THREE.WebGLRenderer();//渲染器
    render.setSize(window.innerWidth, window.innerHeight);//渲染器尺寸
    render.domElement = canvas//设置画布
    render.render(scene, camera);//使用创建的相机和场景进行渲染
    camera.position.z = 10;
    //render.domElement.css('background-color','#46aaff')
}

//注册点击事件
function addClickEvent() {
    //返回按钮
    $('#bt_back').click(function () { history.go(-1); });
    //全屏函数
    $('#bt_fs').click(function () { requestFullScreen(document.getElementById("body")) });
    //start btn
    $('#bt_start').children('a').click(function () { start(); });
    $('#bt_feedback').children('a').click(function () { feedDown(); });
    $('#bt_backtrack').children('a').click(function () { bgmDown(); });
    $('#bt_about').children('a').click(function () { about(); });
    $('#bt_close').click(function () { closeAbout(); });
    $('#view').click(function () { sceneClick(); });
}


//点击主场景触发的时间
var timer;
function sceneClick() {
    if (!isStart) {
        return
    }
    clearTimeout(timer);//必须在触发时清除定时器
    settingDisplay = false;//关闭
    //若1500ms内不再点击则显示设置面板
    timer = setTimeout(function () {
        settingDisplay = true;
    }, 1500);
    
    createRect(10)
}

//更新界面
function update() {
    checkSettingPanelDisplay();//检测是否显示设置面板
}

function checkSettingPanelDisplay() {
    var str = settingDisplay ? 'block' : 'none';
    mainPanel.css('display', str);
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
        .onComplete(function () { setTimeout(function () { showMainPanel(); }, 300); }) //回调函数
        .start();
}

//显示主界面
function showMainPanel() {
    isStart = true;
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
function about() {
    aboutCover.css('display', 'block');
    aboutPanel.css('display', 'block');
}

//关闭about界面
function closeAbout() {
    aboutCover.css('display', 'none');
    aboutPanel.css('display', 'none');
}

//帧循环
function onUpdate() {
    requestAnimationFrame(onUpdate);
    if (TWEEN != undefined) {
        TWEEN.update();
    }
    if (isStart) {
        update();
    }
    //render.render(scene, camera);//使用创建的相机和场景进行渲染
}

//按照位置绘制矩形 自适应布局绘制
function createRect(index){
    //宽高比小于等于1,w:4 h:8 否则 w:8 h:4
    var aspectRatio = window.innerWidth / window.innerHeight;//宽高比
    var pivot=pivotX = aspectRatio<=1?4:8;//每行矩形数
    var pivotY = pivotX==4?8:4;

    var itemWidth = window.innerWidth/pivotX;
    var itemHeight = window.innerHeight / pivotY;
    //计算行列索引 类似于进制转换,对应四进制和八进制
    var row,col
    row = index % pivot-1;
    col = Math.floor(index / pivot)
    var x = row*itemWidth
    var y = col*itemHeight
    var width = itemWidth
    var height =itemHeight
    rectangle({
        x:x,
        y:y,
        width: width,
        height:height,
        transparency:0.5
    })
    console.log(x,y,width,height)
}

//绘制透明度的矩形
function rectangle(base) {
    var t = base.transparency ? base.transparency:1;
    ctx.fillStyle = "rgba(255,255,255," + t + ")";//rgba
    ctx.fillRect(base.x, base.y, base.width, base.height);//坐标和长宽
}

//清理画布
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

//窗口尺寸自适应
window.onresize = function () {
    // canvas.width = window.innerWidth;
    // canvas.height = window.innerHeight;
}

