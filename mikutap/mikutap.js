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
var startPanel, sceneLoading, mainPanel, feedbackText, bgmText, aboutCover, aboutPanel, canvas, ctx,backBtn,fullBtn;
//状态控制变量
var feedOn, bgmOn, isFull, settingDisplay, isStart, mouseDown;
//数值
var screenWidth, screenHeight, aspectRatio, ponitX, pointY,curIndex;

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
    aspectRatio = window.innerWidth / window.innerHeight;//宽高比
    mouseDown = false;
    curIndex = 0;
    backBtn=$('#bt_back');
    fullBtn=$('#bt_fs');
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
    $('#view').mousedown(function () { sceneDown(); });
    $('#view').mouseup(function () { mouseDown = false });
    $('#view').mousemove(function () { sceneMove(); });
    $('#view').mouseenter(function () { curIndex = 0; });
    $("#canvas").mousedown(function (event) { ponitX = event.pageX; pointY = event.pageY; });
    $("#canvas").mousemove(function (event) { ponitX = event.pageX; pointY = event.pageY; });
    $("#canvas").mouseup(function () { mouseDown = false; });
    $("#canvas").mouseover(function (event) { mouseDown = event.which == 1 });
    $("#body").mouseleave(function () { curIndex = 0; });
}


//点击主场景触发的时间
var timer;
function sceneDown() {
    if (!isStart) {
        return
    }
    mouseDown = true;
    clearTimeout(timer);//必须在触发时清除定时器
    settingDisplay = false;//关闭
    //若1500ms内不再点击则显示设置面板
    timer = setTimeout(function () {
        settingDisplay = true;
    }, 1500);
    var index = calculateIndex(ponitX, pointY);//根据鼠标位置计算索引
    //按键反馈打开再创建矩形
    if (feedOn && mouseDown && curIndex!=index) {
        curIndex = index
        createRect(index);
    }
}

function sceneMove() {
    if (!mouseDown) {
        return
    }
    sceneDown();
}

//更新界面
function update() {
    checkSettingPanelDisplay();//检测是否显示设置面板
}

function checkSettingPanelDisplay() {
    var str = settingDisplay ? 'block' : 'none';
    mainPanel.css('display', str);
    backBtn.css('display', str);
    fullBtn.css('display', str);
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
        .easing(TWEEN.Easing.Quadratic.In) //缓动方式
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


//按照位置绘制矩形 自适应布局绘制
function createRect(index) {
    //宽高比小于等于1,w:4 h:8 否则 w:8 h:4
    //aspectRatio = window.innerWidth / window.innerHeight;//宽高比
    var pivotX = aspectRatio <= 1 ? 4 : 8;//每行矩形数
    var pivotY = pivotX == 4 ? 8 : 4;

    var itemWidth = Math.ceil(window.innerWidth / pivotX);
    var itemHeight = Math.ceil(window.innerHeight / pivotY);
    //计算行列索引 类似于进制转换,对应四进制和八进制
    var row = index % pivotX == 0 ? pivotX - 1 : index % pivotX - 1;
    var col = index % pivotX == 0 ? Math.floor(index / pivotX) - 1 : Math.floor(index / pivotX)
    var x = row * itemWidth
    var y = col * itemHeight
    rectangle({
        x: x,
        y: y,
        width: itemWidth,
        height: itemHeight,
        transparency: 0.6
    })
    //console.log(x,y)
}

//绘制透明度的矩形
var toVisible, toHide
function rectangle(base) {
    clearCanvas(base.x, base.y, base.width, base.height);//先清空当前位置的矩形
    var t = base.transparency ? base.transparency : 1;
    var visible = { val: 0 }
    toVisible = new TWEEN.Tween(visible)
        .onUpdate(function (visible) {
            clearCanvas(base.x, base.y, base.width, base.height)
            ctx.fillStyle = "rgba(255,255,255," + visible.val + ")";//rgba
            ctx.fillRect(base.x, base.y, base.width, base.height);//坐标和长宽
            //console.log(TWEEN.Easing.Quadratic.Out)
        })//每一帧执行
        .easing(TWEEN.Easing.Quartic.Out) //缓动方式
        .to({ val: t }, 800)
        .start()
        .onStop(function () {
            clearCanvas(base.x, base.y, base.width, base.height)
        })
    var hide = { val: base.transparency }
    toHide = new TWEEN.Tween(hide)
        .onUpdate(function (hide) {
            clearCanvas(base.x, base.y, base.width, base.height)
            ctx.fillStyle = "rgba(255,255,255," + hide.val + ")";//rgba
            ctx.fillRect(base.x, base.y, base.width, base.height);//坐标和长宽
        })//每一帧执行
        .easing(TWEEN.Easing.Quartic.Out) //缓动方式
        .to({ val: 0 }, 800)
        .start()
        .onStop(function () {
            clearCanvas(base.x, base.y, base.width, base.height)
        })
    toVisible.stop().chain(toHide)//显示动画链接隐藏动画 显示动画stop后再去播放隐藏,防止卡帧
}

//计算鼠标位置对应的index
function calculateIndex() {
    var pivotX = aspectRatio <= 1 ? 4 : 8;//每行矩形数
    var pivotY = pivotX == 4 ? 8 : 4;
    var itemWidth = Math.ceil(window.innerWidth / pivotX);
    var itemHeight = Math.ceil(window.innerHeight / pivotY);
    var row = Math.ceil(pointY / itemHeight);
    var col = Math.ceil(ponitX / itemWidth);
    col = col == 0 ? 1 : col //边界值校验,列数在最左侧的情况下强行置为1
    var index = (row - 1) * pivotX + col
    return index
}

//清理画布
function clearCanvas(x, y, w, h) {
    ctx.clearRect(x, y, w, h);
}

//窗口尺寸自适应
window.onresize = function () {
    aspectRatio = window.innerWidth / window.innerHeight;//宽高比
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    //clearCanvas()
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