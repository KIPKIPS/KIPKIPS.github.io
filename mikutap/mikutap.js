
//  @Author: KIPKIPS
//  @Date: 2020 - 06 - 24 19: 04: 06
//  @FilePath: \KIPKIPS.github.io\mikutap.js

//通用控件对象和预定义全局变量
//通用控件对象
var startPanel, sceneLoading, mainPanel, feedbackText, bgmText, aboutCover, aboutPanel, canvas, ctx, backBtn, fullBtn;
//状态控制变量
var feedOn, bgmOn, isFull, settingDisplay, isStart, mouseDown, loadAudioComplete,mouseMove;
var screenWidth, screenHeight, aspectRatio, ponitX, pointY, curIndex;//数值
var mainArrayBufferList = [];
var audioContext, settingPanelTimer, compressorNode;

init();

//初始化
function init() {
    initData();//初始化数据
    addClickEvent();//初始化控件事件
    onUpdate();//帧循环
}

//初始化场景数据
function initData() {
    loadAudioComplete=false
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
    backBtn = $('#bt_back');
    fullBtn = $('#bt_fs');
}

//注册点击事件
function addClickEvent() {
    $('#bt_back').click(function () { history.go(-1); });//返回按钮
    $('#bt_fs').click(function () { requestFullScreen(document.getElementById("body")) });//全屏函数
    $('#bt_start').children('a').click(function () { start(); });//开始按钮
    $('#bt_feedback').children('a').click(function () { feedDown(); });//点击反馈函数
    $('#bt_backtrack').children('a').click(function () { bgmDown(); });//背景开关
    $('#bt_about').children('a').click(function () { about(); });//关于界面
    $('#bt_close').click(function () { closeAbout(); });//关于界面关闭
    $('#view').mousedown(function () { 
        sceneDown(); 
    });//鼠标down下
    $('#view').mouseup(function () { mouseDown = false; });//鼠标弹起
    $('#view').mousemove(function () { sceneMove(); });//鼠标move
    $('#view').mouseenter(function () { curIndex = 0; });//鼠标进入view
    $("#canvas").mousedown(function (event) { ponitX = event.pageX; pointY = event.pageY; });
    $("#canvas").mousemove(function (event) { ponitX = event.pageX; pointY = event.pageY;});
     //鼠标弹起清空状态
    $("#canvas").mouseup(function () { mouseDown = false; } );
    $("#canvas").mouseover(function (event) { mouseDown = event.which == 1 });
    $("#body").mouseleave(function () { curIndex = 0; });//鼠标离开
}
//点击主场景触发的时间
function sceneDown() {
    if (!isStart) {
        return
    }
    mouseDown = true;
    clearTimeout(settingPanelTimer);//必须在触发时清除定时器
    settingDisplay = false;//关闭
    //若1500ms内不再点击则显示设置面板
    settingPanelTimer = setTimeout(function () {
        settingDisplay = true;
    }, 1500);
    //按键反馈打开再创建矩形
    var index = calculateIndex(ponitX, pointY);//根据鼠标位置计算索引
    if (feedOn) {
        createRect(index);//矩形直接反馈,不放进暂存列表
    }
    playArrayBuffer(index)
}
function sceneMove() {
    if (!isStart || !mouseDown) {
        return
    }
    //sceneDown()
}

//每帧执行的逻辑,尽量不要在update做复杂逻辑判断和循环
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
    //这里需要使用then()异步函数,需要在获取到json数据之后再去执行后续操作
    $.getJSON("../data/json/main.json").then((data) => {
        loadAudioData(data).then(()=> {
            audioContext = createAudioContext();
            compressorNode = audioContext.createDynamicsCompressor();
            loadAudioComplete=true;
            loading();
        })   
    })
}
async function loadAudioData(data) {
    $.each(data, function (name, src) {
        var index = name.split('.')[0]
        var base64Data = src.substring(src.indexOf(',') + 1) //去掉数据前缀
        mainArrayBufferList[index] = Base64Binary.decodeArrayBuffer(base64Data);
    })
}

//加载动画
function loading() {
    sceneLoading.css('display', 'block')
    var width = { w: 0 }
    var tween = new TWEEN.Tween(width).onUpdate(function (width) { sceneLoading.css('width', width.w + '%') })//每一帧执行
        .easing(TWEEN.Easing.Quadratic.In) //缓动方式
        .to({ w: 100 }, 300)
        .onComplete(function () { setTimeout(function () { showMainPanel();}, 300); }) //回调函数
        .start();
}

//显示主界面
function showMainPanel() {
    isStart = true;
    sceneLoading.css('display', 'none');
    mainPanel.css('display', 'block');
}

//创建audio context
function createAudioContext() {
    var audioContext;
    try {
        // Fix up for prefixing
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        audioContext = new AudioContext();
    } catch (e) {
        alert('Web Audio API is not supported in this browser');
    }
    return audioContext;
}

function playArrayBuffer(index) {
    var tempBuffer = mainArrayBufferList[index - 1]
    if (!tempBuffer) {
        return
    }
    var bufferCloner = tempBuffer.slice(0, tempBuffer.byteLength);
    audioContext.decodeAudioData(bufferCloner, function (audioBuffer) {
        // 创建AudioBufferSourceNode对象
        var sourceNode = audioContext.createBufferSource();
        var gainNode = audioContext.createGain();
        gainNode.gain.value = 1;
        gainNode.gain.setValueAtTime(0, audioContext.currentTime + 0);
        gainNode.gain.exponentialRampToValueAtTime(1.3, audioContext.currentTime +0.01);
        sourceNode.buffer = audioBuffer;

        sourceNode.connect(gainNode);
        gainNode.connect(compressorNode); 
        compressorNode.connect(audioContext.destination);//混音器,防止爆音
        sourceNode.start();
    })
}

//数组深拷贝
function arrayDeepCopy(array) {
    var out = [], i = 0, len = array.length;
    for (; i < len; i++) {
        if (array[i] instanceof Array) {
            out[i] = arrayDeepCopy(array[i]);
        }
        else out[i] = array[i];
    }
    return out;
}

//feedback事件
function feedDown() {
    var txt = feedOn ? 'FEEDBACK:OFF' : 'FEEDBACK:ON';
    feedbackText.html(txt);
    feedOn = !feedOn;
}

//bgm事件
function bgmDown() {
    var txt = bgmOn ? 'BACKTRACK:OFF' : 'BACKTRACK:ON';
    bgmText.html(txt);
    bgmOn = !bgmOn;
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
    isFull = !isFull;
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
    var col = index % pivotX == 0 ? Math.floor(index / pivotX) - 1 : Math.floor(index / pivotX);
    var x = row * itemWidth;
    var y = col * itemHeight;
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
        .easing(TWEEN.Easing.Quartic.In) //缓动方式
        .to({ val: t }, 200)
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

//base64数据转换成arraybuffer
var Base64Binary = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    /* will return a  Uint8Array type */
    decodeArrayBuffer: function (input) {
        var bytes = (input.length / 4) * 3;
        var ab = new ArrayBuffer(bytes);
        this.decode(input, ab);
        return ab;
    },
    removePaddingChars: function (input) {
        var lkey = this._keyStr.indexOf(input.charAt(input.length - 1));
        if (lkey == 64) {
            return input.substring(0, input.length - 1);
        }
        return input;
    },
    decode: function (input, arrayBuffer) {
        //get last chars to see if are valid
        input = this.removePaddingChars(input);
        input = this.removePaddingChars(input);

        var bytes = parseInt((input.length / 4) * 3, 10);

        var uarray;
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;
        var j = 0;

        if (arrayBuffer)
            uarray = new Uint8Array(arrayBuffer);
        else
            uarray = new Uint8Array(bytes);
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        for (i = 0; i < bytes; i += 3) {
            //get the 3 octects in 4 ascii chars
            enc1 = this._keyStr.indexOf(input.charAt(j++));
            enc2 = this._keyStr.indexOf(input.charAt(j++));
            enc3 = this._keyStr.indexOf(input.charAt(j++));
            enc4 = this._keyStr.indexOf(input.charAt(j++));

            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;

            uarray[i] = chr1;
            if (enc3 != 64) uarray[i + 1] = chr2;
            if (enc4 != 64) uarray[i + 2] = chr3;
        }
        return uarray;
    }
}
Array.prototype.indexOf = function (val) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == val) return i;
    }
    return -1;
}
Array.prototype.remove = function (val) {
    var index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }
}

function b64toBlob(b64Data, contentType, sliceSize) {
    contentType = contentType || '';
    sliceSize = sliceSize || 512;
    var byteCharacters = atob(b64Data.substring(b64Data.indexOf(',') + 1));
    var byteArrays = [];
    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        var slice = byteCharacters.slice(offset, offset + sliceSize);
        var byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }
        var byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }
    var blob = new Blob(byteArrays, { type: contentType });
    return blob;
}
