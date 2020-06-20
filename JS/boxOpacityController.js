/*opacity控制,box可见度渐变模块*/
{
    var box0;
    var box0Opacity = function () {
        box0CleanTime();
        box0 = setTimeout(
            function () {
                hide0();
            }, 80);
        show0();
    };
    /*计时器清零*/
    var box0CleanTime = function () {
        clearTimeout(box0);
    };

    function show0() {
        var obj = document.getElementById("box0");
        var n = obj.style.opacity = 0;
        var time = setInterval(function () {
            if (n < 0.5) {
                n += 0.1;
                obj.style.opacity = n;
            } else {
                clearTimeout(time);
            }
        }, 16)
    }

    function hide0() {
        var obj = document.getElementById("box0");
        var n = obj.style.opacity;
        var time = setInterval(function () {
            if (n > 0) {
                n -= 0.1;
                obj.style.opacity = n;
            } else {
                clearTimeout(time);
            }
        }, 16)
    }

    /*box1可见度渐变模块*/
    var box1;
    var box1Opacity = function () {
        box1CleanTime();
        box1 = setTimeout(
            function () {
                hide1();
            }, 80);
        show1();
    };
    /*计时器清零*/
    var box1CleanTime = function () {
        clearTimeout(box1);
    };

    function show1() {
        var obj = document.getElementById('box1');
        var n = obj.style.opacity = 0;
        var time = setInterval(function () {
            if (n < 0.5) {
                n += 0.1;
                obj.style.opacity = n;
            }
            else {
                clearTimeout(time);
            }
        }, 16);
    }

    function hide1() {
        var obj = document.getElementById('box1');
        var n = obj.style.opacity;
        var time = setInterval(function () {
            if (n > 0) {
                n -= 0.1;
                obj.style.opacity = n;
            }
            else {
                clearTimeout(time);
            }
        }, 16);
    }


    /*box2可见度渐变模块*/
    var box2;
    var box2Opacity = function () {
        box2CleanTime();
        box2 = setTimeout(
            function () {
                hide2();
            }, 80);
        show2();
    };
    /*计时器清零*/
    var box2CleanTime = function () {
        clearTimeout(box2);
    };

    function show2() {
        var obj = document.getElementById('box2');
        var n = obj.style.opacity = 0;
        var time = setInterval(function () {
            if (n < 0.5) {
                n += 0.1;
                obj.style.opacity = n;
            }
            else {
                clearTimeout(time);
            }
        }, 16);
    }

    function hide2() {
        var obj = document.getElementById('box2');
        var n = obj.style.opacity;
        var time = setInterval(function () {
            if (n > 0) {
                n -= 0.1;
                obj.style.opacity = n;
            }
            else {
                clearTimeout(time);
            }
        }, 16);
    }


    /*box3可见度渐变模块*/
    var box3;
    var box3Opacity = function () {
        box3CleanTime();
        box3 = setTimeout(
            function () {
                hide3();
            }, 80);
        show3();
    };
    /*计时器清零*/
    var box3CleanTime = function () {
        clearTimeout(box3);
    };

    function show3() {
        var obj = document.getElementById('box3');
        var n = obj.style.opacity = 0;
        var time = setInterval(function () {
            if (n < 0.5) {
                n += 0.1;
                obj.style.opacity = n;
            }
            else {
                clearTimeout(time);
            }
        }, 16);
    }

    function hide3() {
        var obj = document.getElementById('box3');
        var n = obj.style.opacity;
        var time = setInterval(function () {
            if (n > 0) {
                n -= 0.1;
                obj.style.opacity = n;
            }
            else {
                clearTimeout(time);
            }
        }, 16);
    }


    /*box4可见度渐变模块*/
    var box4;
    var box4Opacity = function () {
        box4CleanTime();
        box4 = setTimeout(
            function () {
                hide4();
            }, 80);
        show4();
    };
    /*计时器清零*/
    var box4CleanTime = function () {
        clearTimeout(box4);
    };

    function show4() {
        var obj = document.getElementById('box4');
        var n = obj.style.opacity = 0;
        var time = setInterval(function () {
            if (n < 0.5) {
                n += 0.1;
                obj.style.opacity = n;
            }
            else {
                clearTimeout(time);
            }
        }, 16);
    }

    function hide4() {
        var obj = document.getElementById('box4');
        var n = obj.style.opacity;
        var time = setInterval(function () {
            if (n > 0) {
                n -= 0.1;
                obj.style.opacity = n;
            }
            else {
                clearTimeout(time);
            }
        }, 16);
    }


    /*box5可见度渐变模块*/
    var box5;
    var box5Opacity = function () {
        box5CleanTime();
        box5 = setTimeout(
            function () {
                hide5();
            }, 80);
        show5();
    };
    /*计时器清零*/
    var box5CleanTime = function () {
        clearTimeout(box5);
    };

    function show5() {
        var obj = document.getElementById('box5');
        var n = obj.style.opacity = 0;
        var time = setInterval(function () {
            if (n < 0.5) {
                n += 0.1;
                obj.style.opacity = n;
            }
            else {
                clearTimeout(time);
            }
        }, 16);
    }

    function hide5() {
        var obj = document.getElementById('box5');
        var n = obj.style.opacity;
        var time = setInterval(function () {
            if (n > 0) {
                n -= 0.1;
                obj.style.opacity = n;
            }
            else {
                clearTimeout(time);
            }
        }, 16);
    }


    /*box6可见度渐变模块*/
    var box6;
    var box6Opacity = function () {
        box6CleanTime();
        box6 = setTimeout(
            function () {
                hide6();
            }, 80);
        show6();
    };
    /*计时器清零*/
    var box6CleanTime = function () {
        clearTimeout(box6);
    };

    function show6() {
        var obj = document.getElementById('box6');
        var n = obj.style.opacity = 0;
        var time = setInterval(function () {
            if (n < 0.5) {
                n += 0.1;
                obj.style.opacity = n;
            }
            else {
                clearTimeout(time);
            }
        }, 16);
    }

    function hide6() {
        var obj = document.getElementById('box6');
        var n = obj.style.opacity;
        var time = setInterval(function () {
            if (n > 0) {
                n -= 0.1;
                obj.style.opacity = n;
            }
            else {
                clearTimeout(time);
            }
        }, 16);
    }


    /*box7可见度渐变模块*/
    var box7;
    var box7Opacity = function () {
        box7CleanTime();
        box7 = setTimeout(
            function () {
                hide7();
            }, 80);
        show7();
    };
    /*计时器清零*/
    var box7CleanTime = function () {
        clearTimeout(box7);
    };

    function show7() {
        var obj = document.getElementById('box7');
        var n = obj.style.opacity = 0;
        var time = setInterval(function () {
            if (n < 0.5) {
                n += 0.1;
                obj.style.opacity = n;
            }
            else {
                clearTimeout(time);
            }
        }, 16);
    }

    function hide7() {
        var obj = document.getElementById('box7');
        var n = obj.style.opacity;
        var time = setInterval(function () {
            if (n > 0) {
                n -= 0.1;
                obj.style.opacity = n;
            }
            else {
                clearTimeout(time);
            }
        }, 16);
    }


    /*box8可见度渐变模块*/
    var box8;
    var box8Opacity = function () {
        box8CleanTime();
        box8 = setTimeout(
            function () {
                hide8();
            }, 80);
        show8();
    };
    /*计时器清零*/
    var box8CleanTime = function () {
        clearTimeout(box8);
    };

    function show8() {
        var obj = document.getElementById('box8');
        var n = obj.style.opacity = 0;
        var time = setInterval(function () {
            if (n < 0.5) {
                n += 0.1;
                obj.style.opacity = n;
            }
            else {
                clearTimeout(time);
            }
        }, 16);
    }

    function hide8() {
        var obj = document.getElementById('box8');
        var n = obj.style.opacity;
        var time = setInterval(function () {
            if (n > 0) {
                n -= 0.1;
                obj.style.opacity = n;
            }
            else {
                clearTimeout(time);
            }
        }, 16);
    }


    /*box9可见度渐变模块*/
    var box9;
    var box9Opacity = function () {
        box9CleanTime();
        box9 = setTimeout(
            function () {
                hide9();
            }, 80);
        show9();
    };
    /*计时器清零*/
    var box9CleanTime = function () {
        clearTimeout(box9);
    };

    function show9() {
        var obj = document.getElementById('box9');
        var n = obj.style.opacity = 0;
        var time = setInterval(function () {
            if (n < 0.5) {
                n += 0.1;
                obj.style.opacity = n;
            }
            else {
                clearTimeout(time);
            }
        }, 16);
    }

    function hide9() {
        var obj = document.getElementById('box9');
        var n = obj.style.opacity;
        var time = setInterval(function () {
            if (n > 0) {
                n -= 0.1;
                obj.style.opacity = n;
            }
            else {
                clearTimeout(time);
            }
        }, 16);
    }


    /*box10可见度渐变模块*/
    var box10;
    var box10Opacity = function () {
        box10CleanTime();
        box10 = setTimeout(
            function () {
                hide10();
            }, 80);
        show10();
    };
    /*计时器清零*/
    var box10CleanTime = function () {
        clearTimeout(box10);
    };

    function show10() {
        var obj = document.getElementById('box10');
        var n = obj.style.opacity = 0;
        var time = setInterval(function () {
            if (n < 0.5) {
                n += 0.1;
                obj.style.opacity = n;
            }
            else {
                clearTimeout(time);
            }
        }, 16);
    }

    function hide10() {
        var obj = document.getElementById('box10');
        var n = obj.style.opacity;
        var time = setInterval(function () {
            if (n > 0) {
                n -= 0.1;
                obj.style.opacity = n;
            }
            else {
                clearTimeout(time);
            }
        }, 16);
    }


    /*box11可见度渐变模块*/
    var box11;
    var box11Opacity = function () {
        box11CleanTime();
        box11 = setTimeout(
            function () {
                hide11();
            }, 80);
        show11();
    };
    /*计时器清零*/
    var box11CleanTime = function () {
        clearTimeout(box11);
    };

    function show11() {
        var obj = document.getElementById('box11');
        var n = obj.style.opacity = 0;
        var time = setInterval(function () {
            if (n < 0.5) {
                n += 0.1;
                obj.style.opacity = n;
            }
            else {
                clearTimeout(time);
            }
        }, 16);
    }

    function hide11() {
        var obj = document.getElementById('box11');
        var n = obj.style.opacity;
        var time = setInterval(function () {
            if (n > 0) {
                n -= 0.1;
                obj.style.opacity = n;
            }
            else {
                clearTimeout(time);
            }
        }, 16);
    }


    /*box12可见度渐变模块*/
    var box12;
    var box12Opacity = function () {
        box12CleanTime();
        box12 = setTimeout(
            function () {
                hide12();
            }, 80);
        show12();
    };
    /*计时器清零*/
    var box12CleanTime = function () {
        clearTimeout(box12);
    };

    function show12() {
        var obj = document.getElementById('box12');
        var n = obj.style.opacity = 0;
        var time = setInterval(function () {
            if (n < 0.5) {
                n += 0.1;
                obj.style.opacity = n;
            }
            else {
                clearTimeout(time);
            }
        }, 16);
    }

    function hide12() {
        var obj = document.getElementById('box12');
        var n = obj.style.opacity;
        var time = setInterval(function () {
            if (n > 0) {
                n -= 0.1;
                obj.style.opacity = n;
            }
            else {
                clearTimeout(time);
            }
        }, 16);
    }


    /*box13可见度渐变模块*/
    var box13;
    var box13Opacity = function () {
        box13CleanTime();
        box13 = setTimeout(
            function () {
                hide13();
            }, 80);
        show13();
    };
    /*计时器清零*/
    var box13CleanTime = function () {
        clearTimeout(box13);
    };

    function show13() {
        var obj = document.getElementById('box13');
        var n = obj.style.opacity = 0;
        var time = setInterval(function () {
            if (n < 0.5) {
                n += 0.1;
                obj.style.opacity = n;
            }
            else {
                clearTimeout(time);
            }
        }, 16);
    }

    function hide13() {
        var obj = document.getElementById('box13');
        var n = obj.style.opacity;
        var time = setInterval(function () {
            if (n > 0) {
                n -= 0.1;
                obj.style.opacity = n;
            }
            else {
                clearTimeout(time);
            }
        }, 16);
    }


    /*box14可见度渐变模块*/
    var box14;
    var box14Opacity = function () {
        box14CleanTime();
        box14 = setTimeout(
            function () {
                hide14();
            }, 80);
        show14();
    };
    /*计时器清零*/
    var box14CleanTime = function () {
        clearTimeout(box14);
    };

    function show14() {
        var obj = document.getElementById('box14');
        var n = obj.style.opacity = 0;
        var time = setInterval(function () {
            if (n < 0.5) {
                n += 0.1;
                obj.style.opacity = n;
            }
            else {
                clearTimeout(time);
            }
        }, 16);
    }

    function hide14() {
        var obj = document.getElementById('box14');
        var n = obj.style.opacity;
        var time = setInterval(function () {
            if (n > 0) {
                n -= 0.1;
                obj.style.opacity = n;
            }
            else {
                clearTimeout(time);
            }
        }, 16);
    }


    /*box15可见度渐变模块*/
    var box15;
    var box15Opacity = function () {
        box15CleanTime();
        box15 = setTimeout(
            function () {
                hide15();
            }, 80);
        show15();
    };
    /*计时器清零*/
    var box15CleanTime = function () {
        clearTimeout(box15);
    };

    function show15() {
        var obj = document.getElementById('box15');
        var n = obj.style.opacity = 0;
        var time = setInterval(function () {
            if (n < 0.5) {
                n += 0.1;
                obj.style.opacity = n;
            }
            else {
                clearTimeout(time);
            }
        }, 16);
    }

    function hide15() {
        var obj = document.getElementById('box15');
        var n = obj.style.opacity;
        var time = setInterval(function () {
            if (n > 0) {
                n -= 0.1;
                obj.style.opacity = n;
            }
            else {
                clearTimeout(time);
            }
        }, 16);
    }


    /*box16可见度渐变模块*/
    var box16;
    var box16Opacity = function () {
        box16CleanTime();
        box16 = setTimeout(
            function () {
                hide16();
            }, 80);
        show16();
    };
    /*计时器清零*/
    var box16CleanTime = function () {
        clearTimeout(box16);
    };

    function show16() {
        var obj = document.getElementById('box16');
        var n = obj.style.opacity = 0;
        var time = setInterval(function () {
            if (n < 0.5) {
                n += 0.1;
                obj.style.opacity = n;
            }
            else {
                clearTimeout(time);
            }
        }, 16);
    }

    function hide16() {
        var obj = document.getElementById('box16');
        var n = obj.style.opacity;
        var time = setInterval(function () {
            if (n > 0) {
                n -= 0.1;
                obj.style.opacity = n;
            }
            else {
                clearTimeout(time);
            }
        }, 16);
    }


    /*box17可见度渐变模块*/
    var box17;
    var box17Opacity = function () {
        box17CleanTime();
        box17 = setTimeout(
            function () {
                hide17();
            }, 80);
        show17();
    };
    /*计时器清零*/
    var box17CleanTime = function () {
        clearTimeout(box17);
    };

    function show17() {
        var obj = document.getElementById('box17');
        var n = obj.style.opacity = 0;
        var time = setInterval(function () {
            if (n < 0.5) {
                n += 0.1;
                obj.style.opacity = n;
            }
            else {
                clearTimeout(time);
            }
        }, 16);
    }

    function hide17() {
        var obj = document.getElementById('box17');
        var n = obj.style.opacity;
        var time = setInterval(function () {
            if (n > 0) {
                n -= 0.1;
                obj.style.opacity = n;
            }
            else {
                clearTimeout(time);
            }
        }, 16);
    }


    /*box18可见度渐变模块*/
    var box18;
    var box18Opacity = function () {
        box18CleanTime();
        box18 = setTimeout(
            function () {
                hide18();
            }, 80);
        show18();
    };
    /*计时器清零*/
    var box18CleanTime = function () {
        clearTimeout(box18);
    };

    function show18() {
        var obj = document.getElementById('box18');
        var n = obj.style.opacity = 0;
        var time = setInterval(function () {
            if (n < 0.5) {
                n += 0.1;
                obj.style.opacity = n;
            }
            else {
                clearTimeout(time);
            }
        }, 16);
    }

    function hide18() {
        var obj = document.getElementById('box18');
        var n = obj.style.opacity;
        var time = setInterval(function () {
            if (n > 0) {
                n -= 0.1;
                obj.style.opacity = n;
            }
            else {
                clearTimeout(time);
            }
        }, 16);
    }


    /*box19可见度渐变模块*/
    var box19;
    var box19Opacity = function () {
        box19CleanTime();
        box19 = setTimeout(
            function () {
                hide19();
            }, 80);
        show19();
    };
    /*计时器清零*/
    var box19CleanTime = function () {
        clearTimeout(box19);
    };

    function show19() {
        var obj = document.getElementById('box19');
        var n = obj.style.opacity = 0;
        var time = setInterval(function () {
            if (n < 0.5) {
                n += 0.1;
                obj.style.opacity = n;
            }
            else {
                clearTimeout(time);
            }
        }, 16);
    }

    function hide19() {
        var obj = document.getElementById('box19');
        var n = obj.style.opacity;
        var time = setInterval(function () {
            if (n > 0) {
                n -= 0.1;
                obj.style.opacity = n;
            }
            else {
                clearTimeout(time);
            }
        }, 16);
    }


    /*box20可见度渐变模块*/
    var box20;
    var box20Opacity = function () {
        box20CleanTime();
        box20 = setTimeout(
            function () {
                hide20();
            }, 80);
        show20();
    };
    /*计时器清零*/
    var box20CleanTime = function () {
        clearTimeout(box20);
    };

    function show20() {
        var obj = document.getElementById('box20');
        var n = obj.style.opacity = 0;
        var time = setInterval(function () {
            if (n < 0.5) {
                n += 0.1;
                obj.style.opacity = n;
            }
            else {
                clearTimeout(time);
            }
        }, 16);
    }

    function hide20() {
        var obj = document.getElementById('box20');
        var n = obj.style.opacity;
        var time = setInterval(function () {
            if (n > 0) {
                n -= 0.1;
                obj.style.opacity = n;
            }
            else {
                clearTimeout(time);
            }
        }, 16);
    }


    /*box21可见度渐变模块*/
    var box21;
    var box21Opacity = function () {
        box21CleanTime();
        box21 = setTimeout(
            function () {
                hide21();
            }, 80);
        show21();
    };
    /*计时器清零*/
    var box21CleanTime = function () {
        clearTimeout(box21);
    };

    function show21() {
        var obj = document.getElementById('box21');
        var n = obj.style.opacity = 0;
        var time = setInterval(function () {
            if (n < 0.5) {
                n += 0.1;
                obj.style.opacity = n;
            }
            else {
                clearTimeout(time);
            }
        }, 16);
    }

    function hide21() {
        var obj = document.getElementById('box21');
        var n = obj.style.opacity;
        var time = setInterval(function () {
            if (n > 0) {
                n -= 0.1;
                obj.style.opacity = n;
            }
            else {
                clearTimeout(time);
            }
        }, 16);
    }


    /*box22可见度渐变模块*/
    var box22;
    var box22Opacity = function () {
        box22CleanTime();
        box22 = setTimeout(
            function () {
                hide22();
            }, 80);
        show22();
    };
    /*计时器清零*/
    var box22CleanTime = function () {
        clearTimeout(box22);
    };

    function show22() {
        var obj = document.getElementById('box22');
        var n = obj.style.opacity = 0;
        var time = setInterval(function () {
            if (n < 0.5) {
                n += 0.1;
                obj.style.opacity = n;
            }
            else {
                clearTimeout(time);
            }
        }, 16);
    }

    function hide22() {
        var obj = document.getElementById('box22');
        var n = obj.style.opacity;
        var time = setInterval(function () {
            if (n > 0) {
                n -= 0.1;
                obj.style.opacity = n;
            }
            else {
                clearTimeout(time);
            }
        }, 16);
    }


    /*box23可见度渐变模块*/
    var box23;
    var box23Opacity = function () {
        box23CleanTime();
        box23 = setTimeout(
            function () {
                hide23();
            }, 80);
        show23();
    };
    /*计时器清零*/
    var box23CleanTime = function () {
        clearTimeout(box23);
    };

    function show23() {
        var obj = document.getElementById('box23');
        var n = obj.style.opacity = 0;
        var time = setInterval(function () {
            if (n < 0.5) {
                n += 0.1;
                obj.style.opacity = n;
            }
            else {
                clearTimeout(time);
            }
        }, 16);
    }

    function hide23() {
        var obj = document.getElementById('box23');
        var n = obj.style.opacity;
        var time = setInterval(function () {
            if (n > 0) {
                n -= 0.1;
                obj.style.opacity = n;
            }
            else {
                clearTimeout(time);
            }
        }, 16);
    }


    /*box24可见度渐变模块*/
    var box24;
    var box24Opacity = function () {
        box24CleanTime();
        box24 = setTimeout(
            function () {
                hide24();
            }, 80);
        show24();
    };
    /*计时器清零*/
    var box24CleanTime = function () {
        clearTimeout(box24);
    };

    function show24() {
        var obj = document.getElementById('box24');
        var n = obj.style.opacity = 0;
        var time = setInterval(function () {
            if (n < 0.5) {
                n += 0.1;
                obj.style.opacity = n;
            }
            else {
                clearTimeout(time);
            }
        }, 16);
    }

    function hide24() {
        var obj = document.getElementById('box24');
        var n = obj.style.opacity;
        var time = setInterval(function () {
            if (n > 0) {
                n -= 0.1;
                obj.style.opacity = n;
            }
            else {
                clearTimeout(time);
            }
        }, 16);
    }


    /*box25可见度渐变模块*/
    var box25;
    var box25Opacity = function () {
        box25CleanTime();
        box25 = setTimeout(
            function () {
                hide25();
            }, 80);
        show25();
    };
    /*计时器清零*/
    var box25CleanTime = function () {
        clearTimeout(box25);
    };

    function show25() {
        var obj = document.getElementById('box25');
        var n = obj.style.opacity = 0;
        var time = setInterval(function () {
            if (n < 0.5) {
                n += 0.1;
                obj.style.opacity = n;
            }
            else {
                clearTimeout(time);
            }
        }, 16);
    }

    function hide25() {
        var obj = document.getElementById('box25');
        var n = obj.style.opacity;
        var time = setInterval(function () {
            if (n > 0) {
                n -= 0.1;
                obj.style.opacity = n;
            }
            else {
                clearTimeout(time);
            }
        }, 16);
    }


    /*box26可见度渐变模块*/
    var box26;
    var box26Opacity = function () {
        box26CleanTime();
        box26 = setTimeout(
            function () {
                hide26();
            }, 80);
        show26();
    };
    /*计时器清零*/
    var box26CleanTime = function () {
        clearTimeout(box26);
    };

    function show26() {
        var obj = document.getElementById('box26');
        var n = obj.style.opacity = 0;
        var time = setInterval(function () {
            if (n < 0.5) {
                n += 0.1;
                obj.style.opacity = n;
            }
            else {
                clearTimeout(time);
            }
        }, 16);
    }

    function hide26() {
        var obj = document.getElementById('box26');
        var n = obj.style.opacity;
        var time = setInterval(function () {
            if (n > 0) {
                n -= 0.1;
                obj.style.opacity = n;
            }
            else {
                clearTimeout(time);
            }
        }, 16);
    }


    /*box27可见度渐变模块*/
    var box27;
    var box27Opacity = function () {
        box27CleanTime();
        box27 = setTimeout(
            function () {
                hide27();
            }, 80);
        show27();
    };
    /*计时器清零*/
    var box27CleanTime = function () {
        clearTimeout(box27);
    };

    function show27() {
        var obj = document.getElementById('box27');
        var n = obj.style.opacity = 0;
        var time = setInterval(function () {
            if (n < 0.5) {
                n += 0.1;
                obj.style.opacity = n;
            }
            else {
                clearTimeout(time);
            }
        }, 16);
    }

    function hide27() {
        var obj = document.getElementById('box27');
        var n = obj.style.opacity;
        var time = setInterval(function () {
            if (n > 0) {
                n -= 0.1;
                obj.style.opacity = n;
            }
            else {
                clearTimeout(time);
            }
        }, 16);
    }


    /*box28可见度渐变模块*/
    var box28;
    var box28Opacity = function () {
        box28CleanTime();
        box28 = setTimeout(
            function () {
                hide28();
            }, 80);
        show28();
    };
    /*计时器清零*/
    var box28CleanTime = function () {
        clearTimeout(box28);
    };

    function show28() {
        var obj = document.getElementById('box28');
        var n = obj.style.opacity = 0;
        var time = setInterval(function () {
            if (n < 0.5) {
                n += 0.1;
                obj.style.opacity = n;
            }
            else {
                clearTimeout(time);
            }
        }, 16);
    }

    function hide28() {
        var obj = document.getElementById('box28');
        var n = obj.style.opacity;
        var time = setInterval(function () {
            if (n > 0) {
                n -= 0.1;
                obj.style.opacity = n;
            }
            else {
                clearTimeout(time);
            }
        }, 16);
    }


    /*box29可见度渐变模块*/
    var box29;
    var box29Opacity = function () {
        box29CleanTime();
        box29 = setTimeout(
            function () {
                hide29();
            }, 80);
        show29();
    };
    /*计时器清零*/
    var box29CleanTime = function () {
        clearTimeout(box29);
    };

    function show29() {
        var obj = document.getElementById('box29');
        var n = obj.style.opacity = 0;
        var time = setInterval(function () {
            if (n < 0.5) {
                n += 0.1;
                obj.style.opacity = n;
            }
            else {
                clearTimeout(time);
            }
        }, 16);
    }

    function hide29() {
        var obj = document.getElementById('box29');
        var n = obj.style.opacity;
        var time = setInterval(function () {
            if (n > 0) {
                n -= 0.1;
                obj.style.opacity = n;
            }
            else {
                clearTimeout(time);
            }
        }, 16);
    }


    /*box30可见度渐变模块*/
    var box30;
    var box30Opacity = function () {
        box30CleanTime();
        box30 = setTimeout(
            function () {
                hide30();
            }, 80);
        show30();
    };
    /*计时器清零*/
    var box30CleanTime = function () {
        clearTimeout(box30);
    };

    function show30() {
        var obj = document.getElementById('box30');
        var n = obj.style.opacity = 0;
        var time = setInterval(function () {
            if (n < 0.5) {
                n += 0.1;
                obj.style.opacity = n;
            }
            else {
                clearTimeout(time);
            }
        }, 15);
    }

    function hide30() {
        var obj = document.getElementById('box30');
        var n = obj.style.opacity;
        var time = setInterval(function () {
            if (n > 0) {
                n -= 0.1;
                obj.style.opacity = n;
            }
            else {
                clearTimeout(time);
            }
        }, 16);
    }


    /*box31可见度渐变模块*/
    var box31;
    var box31Opacity = function () {
        box31CleanTime();
        box31 = setTimeout(
            function () {
                hide31();
            }, 80);
        show31();
    };
    /*计时器清零*/
    var box31CleanTime = function () {
        clearTimeout(box31);
    };

    function show31() {
        var obj = document.getElementById('box31');
        var n = obj.style.opacity = 0;
        var time = setInterval(function () {
            if (n < 0.5) {
                n += 0.1;
                obj.style.opacity = n;
            }
            else {
                clearTimeout(time);
            }
        }, 16);
    }

    function hide31() {
        var obj = document.getElementById('box31');
        var n = obj.style.opacity;
        var time = setInterval(function () {
            if (n > 0) {
                n -= 0.1;
                obj.style.opacity = n;
            }
            else {
                clearTimeout(time);
            }
        }, 16);
    }

}