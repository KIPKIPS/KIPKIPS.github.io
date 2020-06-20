/**
 * Created by 阿咩咩 on 2019/5/22.
 */

/*触摸函数事件*/
{
    var isSupportTouch = 'ontouchstart' in window || "ontouchend" in window.document;
// 支持触摸式使用相应的事件替代
    var hightEvent_in  = isSupportTouch ? 'touchstart': 'mouseover',
        hightEvent_out = isSupportTouch ? 'touchend' : 'mouseout';
}

/*显隐控制模块*/
{/*text显隐控制模块*/
    function textOnMouseDown() {
        var outer = document.getElementById("outer");
        var text = document.getElementById("text");
        text.style.display = "none";
        textTimeKeeper();
    }

    var text;
    /*back隐藏计时器*/
    var textTimeKeeper = function () {
        textCleanTime();
        text = setTimeout(
            function () {
                var text = document.getElementById("text");
                text.style.display = 'block';
            }, 1400)
    };
    /*text计时器清零*/
    var textCleanTime = function () {
        clearTimeout(text);
    };

    /*back显隐控制模块*/
    function backOnMouseDown()/*back显隐控制*/ {
        var outer = document.getElementById("outer");
        var back = document.getElementById("back");
        back.style.display = "none";
        backTimeKeeper();
    }

    var back;
    /*back隐藏计时器*/
    var backTimeKeeper = function () {
        backCleanTime();
        back = setTimeout(
            function () {
                var back = document.getElementById("back");
                back.style.display = 'block';
            }, 1400)
    };
    /*back计时器清零*/
    var backCleanTime = function () {
        clearTimeout(back);
    };

    /*full显隐控制模块*/
    function fullOnMouseDown()/*full显隐控制*/ {
        var outer = document.getElementById("outer");
        var full = document.getElementById("full");
        full.style.display = "none";
        fullTimeKeeper();
    }

    var full;
    /*full隐藏计时器*/
    var fullTimeKeeper = function () {
        fullCleanTime();
        full = setTimeout(
            function () {
                var full = document.getElementById("full");
                full.style.display = 'block';
            }, 1400)
    };
    /*full计时器清零*/
    var fullCleanTime = function () {
        clearTimeout(full);
    };

    /*bgmOF显隐控制模块*/
    function bgmOnMouseDown()/*bgmOF显隐控制*/ {
        var outer = document.getElementById("outer");
        var bgmOF = document.getElementById("bgmOF");
        bgmOF.style.display = "none";
        bgmTimeKeeper();
    }

    var bgmOF;
    /*bgmOF隐藏计时器*/
    var bgmTimeKeeper = function () {
        bgmCleanTime();
        bgmOF = setTimeout(
            function () {
                var bgmOF = document.getElementById("bgmOF");
                bgmOF.style.display = 'block';
            }, 1400)
    };
    /*bgmOF计时器清零*/
    var bgmCleanTime = function () {
        clearTimeout(bgmOF);
    };

    /*feedOF显隐控制模块*/
    function feedOnMouseDown()/*back显隐控制*/ {
        var outer = document.getElementById("outer");
        var feedOF = document.getElementById("feedOF");
        feedOF.style.display = "none";
        feedTimeKeeper();
    }

    var feedOF;
    /*feed隐藏计时器*/
    var feedTimeKeeper = function () {
        feedCleanTime();
        feedOF = setTimeout(
            function () {
                var feedOF = document.getElementById("feedOF");
                feedOF.style.display = 'block';
            }, 1400)
    };
    /*feedOF计时器清零*/
    var feedCleanTime = function () {
        clearTimeout(feedOF);
    };
}

/*组件onMouseOver事件*/
{/*组件onMouseOver事件*/
    function bgmOnMouseOver() {
        var bgm = document.getElementById("bgmOF");
        bgm.style.display = "block";
    }

    function feedOnMouseOver() {
        var feed = document.getElementById("feedOF");
        feed.style.display = "block";
    }

    function backOnMouseOver() {
        var back = document.getElementById("back");
        back.style.display = "block";
    }

    function fullOnMouseOver() {
        var full = document.getElementById("full");
        full.style.display = "block";
    }

    function textOnMouseOver() {
        var text = document.getElementById("text");
        text.style.display = "block";
    }
}

/*组件onClick事件*/
{/*组件onClick事件*/
    var backDown = function () {
        var back = document.getElementById("back");
        back.style.display = "block";
        history.go(-1);
    };
    var fullDown = function () {
        var full = document.getElementById("full");
        full.style.display = "block";
        var elem = document.getElementById("body");
        requestFullScreen(elem);
    };
    var bgmDown = function () {
        var bgm = document.getElementById("bgmOF");
        bgm.style.display = "block";
        bgmOFText();
        bgmOTF();
    };
    var feedDown = function () {
        var feed = document.getElementById("feedOF");
        feed.style.display = "block";
        feedOFText();
    };
}

/*文本转换函数*/
{
    function bgmOFText() {
        var text = document.getElementById("bgmOF").innerHTML;
        var textChange = document.getElementById("bgmOF");
        if (text == "B A C K T R A C K  :  O F F") {
            textChange.innerHTML = "B A C K T R A C K  :  O N";
        }
        else {
            textChange.innerHTML = "B A C K T R A C K  :  O F F";
        }
    }

    function feedOFText() {
        var text = document.getElementById("feedOF").innerHTML;
        var textChange = document.getElementById("feedOF");
        if (text == "F E E F B A C K  :  O F F") {

            textChange.innerHTML = "F E E F B A C K  :  O N";
        }
        else {
            textChange.innerHTML = "F E E F B A C K  :  O F F";
        }
    }
}



{
    function box0OnMouseDown() {
        var audio = document.createElement('audio');//生成一个audio元素
        audio.src = '../music/1.mp3'; //音乐的路径
        audio.autoplay='true';
    }
    function box1OnMouseDown() {
        /*box1Opacity();*/
        var audio = document.createElement('audio');//生成一个audio元素
        audio.src = '../music/2.mp3'; //音乐的路径
        audio.autoplay='true';
    }

    function box2OnMouseDown() {
        /*box2Opacity();*/
        var audio = document.createElement('audio');//生成一个audio元素
        audio.src = '../music/3.mp3'; //音乐的路径
        audio.autoplay='true';
    }

    function box3OnMouseDown() {
        /*box3Opacity();*/
        var audio = document.createElement('audio');//生成一个audio元素
        audio.src = '../music/4.mp3'; //音乐的路径
        audio.autoplay='true';
    }

    function box4OnMouseDown() {
        var audio = document.createElement('audio');//生成一个audio元素
        audio.src = '../music/5.mp3'; //音乐的路径
        audio.autoplay='true';
    }

    function box5OnMouseDown() {
        var audio = document.createElement('audio');//生成一个audio元素
        audio.src = '../music/6.mp3'; //音乐的路径
        audio.autoplay='true';
    }

    function box6OnMouseDown() {
        var audio = document.createElement('audio');//生成一个audio元素
        audio.src = '../music/7.mp3'; //音乐的路径
        audio.autoplay='true';
    }


    function box7OnMouseDown() {
        var audio = document.createElement('audio');//生成一个audio元素
        audio.src = '../music/8.mp3'; //音乐的路径
        audio.autoplay='true';
    }


    function box8OnMouseDown() {
        var audio = document.createElement('audio');//生成一个audio元素
        audio.src = '../music/9.mp3'; //音乐的路径
        audio.autoplay='true';
    }

    function box9OnMouseDown() {
        /*box9Opacity();*/
        var audio = document.createElement('audio');//生成一个audio元素
        audio.src = '../music/10.mp3'; //音乐的路径
        audio.autoplay='true';
    }

    function box10OnMouseDown() {
        /*box10Opacity();*/
        var audio = document.createElement('audio');//生成一个audio元素
        audio.src = '../music/11.mp3'; //音乐的路径
        audio.autoplay='true';
    }

    function box11OnMouseDown() {
        /*box11Opacity();*/
        var audio = document.createElement('audio');//生成一个audio元素
        audio.src = '../music/12.mp3'; //音乐的路径
        audio.autoplay='true';
    }

    function box12OnMouseDown() {
        /*box12Opacity();*/
        var audio = document.createElement('audio');//生成一个audio元素
        audio.src = '../music/13.mp3'; //音乐的路径
        audio.autoplay='true';
    }

    function box13OnMouseDown() {
        /*box13Opacity();*/
        var audio = document.createElement('audio');//生成一个audio元素
        audio.src = '../music/14.mp3'; //音乐的路径
        audio.autoplay='true';
    }

    function box14OnMouseDown() {
        /*box14Opacity();*/
        var audio = document.createElement('audio');//生成一个audio元素
        audio.src = '../music/15.mp3'; //音乐的路径
        audio.autoplay='true';
    }


    function box15OnMouseDown() {
        /*box15Opacity();*/
        var audio = document.createElement('audio');//生成一个audio元素
        audio.src = '../music/16.mp3'; //音乐的路径
        audio.autoplay='true';
    }

    function box16OnMouseDown() {
        /*box16Opacity();*/
        var audio = document.createElement('audio');//生成一个audio元素
        audio.src = '../music/17.mp3'; //音乐的路径
        audio.autoplay='true';
    }

    function box17OnMouseDown() {
        /*    box17Opacity();*/
        var audio = document.createElement('audio');//生成一个audio元素
        audio.src = '../music/18.mp3'; //音乐的路径
        audio.autoplay='true';
    }

    function box18OnMouseDown() {
        /*    box18Opacity();*/
        var audio = document.createElement('audio');//生成一个audio元素
        audio.src = '../music/19.mp3'; //音乐的路径
        audio.autoplay='true';
    }

    function box19OnMouseDown() {
        /*    box19Opacity();*/
        var audio = document.createElement('audio');//生成一个audio元素
        audio.src = '../music/20.mp3'; //音乐的路径
        audio.autoplay='true';
    }

    function box20OnMouseDown() {
        /*    box20Opacity();*/
        var audio = document.createElement('audio');//生成一个audio元素
        audio.src = '../music/21.mp3'; //音乐的路径
        audio.autoplay='true';
    }

    function box21OnMouseDown() {
        /*    box21Opacity();*/
        var audio = document.createElement('audio');//生成一个audio元素
        audio.src = '../music/22.mp3'; //音乐的路径
        audio.autoplay='true';
    }

    function box22OnMouseDown() {
        /*    box22Opacity();*/
        var audio = document.createElement('audio');//生成一个audio元素
        audio.src = '../music/23.mp3'; //音乐的路径
        audio.autoplay='true';
    }

    function box23OnMouseDown() {
        /*    box23Opacity();*/
        var audio = document.createElement('audio');//生成一个audio元素
        audio.src = '../music/24.mp3'; //音乐的路径
        audio.autoplay='true';
    }

    function box24OnMouseDown() {
        /*   box24Opacity();*/
        var audio = document.createElement('audio');//生成一个audio元素
        audio.src = '../music/25.mp3'; //音乐的路径
        audio.autoplay='true';
    }

    function box25OnMouseDown() {
        /*box25Opacity();*/
        var audio = document.createElement('audio');//生成一个audio元素
        audio.src = '../music/26.mp3'; //音乐的路径
        audio.autoplay='true';
    }

    function box26OnMouseDown() {
        /*box26Opacity();*/
        var audio = document.createElement('audio');//生成一个audio元素
        audio.src = '../music/27.mp3'; //音乐的路径
        audio.autoplay='true';
    }

    function box27OnMouseDown() {
        /*box27Opacity();*/
        var audio = document.createElement('audio');//生成一个audio元素
        audio.src = '../music/28.mp3'; //音乐的路径
        audio.autoplay='true';
    }

    function box28OnMouseDown() {
        /*box28Opacity();*/
        var audio = document.createElement('audio');//生成一个audio元素
        audio.src = '../music/29.mp3'; //音乐的路径
        audio.autoplay='true';
    }

    function box29OnMouseDown() {
        /*box29Opacity();*/
        var audio = document.createElement('audio');//生成一个audio元素
        audio.src = '../music/30.mp3'; //音乐的路径
        audio.autoplay='true';
    }

    function box30OnMouseDown() {
        /*box30Opacity();*/
        var audio = document.createElement('audio');//生成一个audio元素
        audio.src = '../music/31.mp3'; //音乐的路径
        audio.autoplay='true';
    }


    function box31OnMouseDown() {
        /*box31Opacity();*/
        var audio = document.createElement('audio');//生成一个audio元素
        audio.src = '../music/32.mp3'; //音乐的路径
        audio.autoplay='true';
    }
}

/*显隐函数集合*/
{
    function allOnMouseDown(){
        backOnMouseDown();
        fullOnMouseDown();
        bgmOnMouseDown();
        feedOnMouseDown();
        textOnMouseDown();
        colorChange();
    }
}
