//通用元素和预定义全局变量
//元素变量
var startPanel, sceneLoading, mainPanel, feedbackText, bgmText, aboutCover, aboutPanel, canvas, ctx, backBtn, fullBtn;
//状态控制变量
var feedOn, bgmOn, isFull, settingDisplay, isStart, mouseDown, loadAudioComplete,isPlay;
//数值
var screenWidth, screenHeight, aspectRatio, ponitX, pointY, curIndex, intervalTime;
var mainArrayBufferList = [], cacheList=[];
var audioContext;
var timer, count = 1, curTime, lastTime,upTime;
var lastState=false
var rhythm
init();

//初始化
function init() {
    initData();
    //initScene();
    addClickEvent();
    onUpdate();
}

//初始化场景数据
function initData() {
    isPlay=false
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
    curIndex = 0;
    backBtn = $('#bt_back');
    fullBtn = $('#bt_fs');
    lastTime=0;
    intervalTime=250;
    HFClick=false;
    //var uintArray = Base64Binary.decode(base64_string);
    //var byteArray = Base64Binary.decodeArrayBuffer(base64_string); 
    //订阅消息
    // Observe.on('say', function (data) {
    //     console.log(data.args.text);
    // })
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
    $("#canvas").mousemove(function (event) { ponitX = event.pageX; pointY = event.pageY; });
    $("#canvas").mouseup(function () { mouseDown = false; curIndex = 0;upTime=Date.now();}); //鼠标弹起清空状态
    $("#canvas").mouseover(function (event) { mouseDown = event.which == 1 });
    $("#body").mouseleave(function () { curIndex = 0; });//鼠标离开

    // $("#view").on('clickTrigger',function () {
    //     clickListen();
    // });//绑定事件
}
var timeClick
//点击主场景触发的时间
function sceneDown() {
    if (!isStart) {
        return
    }
    //console.log(getJSON)
    mouseDown = true;
    clearTimeout(timer);//必须在触发时清除定时器
    settingDisplay = false;//关闭
    //若1500ms内不再点击则显示设置面板
    timer = setTimeout(function () {
        settingDisplay = true;
    }, 1500);
    //按键反馈打开再创建矩形
    if (feedOn && mouseDown && curIndex != index) {
        var index = calculateIndex(ponitX, pointY);//根据鼠标位置计算索引
        curIndex = index
        createRect(index);//矩形不需要缓冲,直接反馈
        // $("#view").trigger('clickTrigger')
        // curTime=Date.now()
        // if (curTime-lastTime<300) {
            //     count++
            // }else{
                //     count=1
                // }
                // if (count<5 &&!isPlay) {
        //     playArrayBuffer(index);
        // }
        // lastTime=curTime;
        playArrayBuffer(index,function () {
            isPlay=false
        })
    }
}

function sceneMove() {
    if (!mouseDown) {
        return
    }
    sceneDown();
}

//更新逻辑
function update() {
    checkSettingPanelDisplay();//检测是否显示设置面板
    // if (Date.now()-upTime>300) {
    //     count=1;
    // } 
    // state=count>=10
    // if (state!=lastState) {
    //     if (state==true) {
    //         isPlay = true;
    //         //定时器循环执行的内容
    //         function once() {
    //             var index = calculateIndex(ponitX, pointY);//根据鼠标位置计算索引
    //             // if (ci != index &&!mouseDown) {
    //             //     clearInterval(rhythm)
    //             //     rhythm = setInterval(once, 200);//之后再去循环执行
    //             // }
    //             playArrayBuffer(index);
    //         }
    //         once();//先执行一次
    //         rhythm = setInterval(once, 200);//之后再去循环执行
    //     }else{
    //         clearInterval(rhythm)
    //         isPlay=false
    //     }
    // }
    // lastState=state
    console.log(isPlay)
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
            loadAudioComplete=true;
            loading();
        })   
    })
    audioContext=createAudioContext();
}
async function loadAudioData(data) {
    $.each(data, function (name, src) {
        var index = Number(name.split('.')[0])
        var base64Data = src.substring(src.indexOf(',') + 1) //去掉数据前缀
        mainArrayBufferList[index] = Base64Binary.decodeArrayBuffer(base64Data);
        //mainArrayBufferList[index] = window.atob('aaa')
    })
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

//加载动画
function loading(cur, tar) {
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


function playMp3(url) {
    var AudioContext = window.AudioContext || window.webkitAudioContext;
    var ctx = new AudioContext();
    // 创建一个XMLHttpRequest请求对象
    var request = new XMLHttpRequest();
    // 请求一个MP3文件
    request.open('GET', url, true);
    // Web Audio API 固定为 "arraybuffer"
    request.responseType = 'arraybuffer';
    // 加载完成后解码
    request.onload = function () {
        ctx.decodeAudioData(mainArrayBufferList[0], function (buffer) {
            console.log(request)
            // 获得解码后的数据：buffer 
            // 这里可以立即播放解码后的 buffer，也可以把 buffer 值先存起来
            playBuffer(buffer);
        }, function () {
            // 这里写解码出错的处理（例如文件损坏、格式不对等） 
        });
    };
    // 发送这个XMLHttpRequest请求
    request.send();
}
function playBuffer(buffer) {
    var sourceNode = ctx.createBufferSource();
    sourceNode.buffer = buffer;
    sourceNode.connect(ctx.destination);
    sourceNode.start(0);
}

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

function playArrayBuffer(index,callBack) {
    isPlay=true
    var cloner = mainArrayBufferList[index - 1].slice(0, mainArrayBufferList[index - 1].byteLength);
    audioContext.decodeAudioData(cloner, function (audioBuffer) {
        // 创建AudioBufferSourceNode对象
        var source = audioContext.createBufferSource();

        // 设置AudioBufferSourceNode对象的buffer为复制的3秒AudioBuffer对象
        source.buffer = audioBuffer;
        
        // 这一句是必须的，表示结束，没有这一句没法播放，没有声音
        // 这里直接结束，实际上可以对结束做一些特效处理
        source.connect(audioContext.destination);
        // 资源开始播放
        source.start();
    })
    if (callBack) {
        callBack()
    }
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

//观察者模式
const Observe = (function () {
    //防止消息队列暴露而被篡改，将消息容器设置为私有变量
    let __message = {};
    return {
        //注册消息接口
        on: function (type, fn) {
            //如果此消息不存在，创建一个该消息类型
            if (typeof __message[type] === 'undefined') {
                // 将执行方法推入该消息对应的执行队列中
                __message[type] = [fn];
            } else {
                //如果此消息存在，直接将执行方法推入该消息对应的执行队列中
                __message[type].push(fn);
            }
        },
        //发布消息接口
        subscribe: function (type, args) {
            //如果该消息没有注册，直接返回
            if (!__message[type]) return;
            //定义消息信息
            let events = {
                type: type,           //消息类型
                args: args || {}       //参数
            },
                i = 0,                         // 循环变量
                len = __message[type].length;   // 执行队列长度
            //遍历执行函数
            for (; i < len; i++) {
                //依次执行注册消息对应的方法
                __message[type][i].call(this, events)
            }
        },
        //移除消息接口
        off: function (type, fn) {
            //如果消息执行队列存在
            if (__message[type] instanceof Array) {
                // 从最后一条依次遍历
                let i = __message[type].length - 1;
                for (; i >= 0; i--) {
                    //如果存在改执行函数则移除相应的动作
                    __message[type][i] === fn && __message[type].splice(i, 1);
                }
            }
        }
    }
})();

//队列
function Queue() {
    let items = [];

    // 向队列添加元素（一个或多个）
    this.enqueue = function (element) {
        if (element instanceof Array) items = items.concat(element);
        else items.push(element);
    };

    // 从队列移除元素
    this.dequeue = function () {
        return items.shift();
    };

    // 返回队列中的第一个元素
    this.front = function () {
        return items[0];
    };

    // 判断队列是否为空
    this.isEmpty = function () {
        return items.length === 0;
    };

    // 返回队列的长度
    this.size = function () {
        return items.length;
    };

    // 清空队列
    this.clear = function () {
        items = [];
    };

    // 打印队列内的所有元素
    this.print = function () {
        console.log(items.toString());
    };
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