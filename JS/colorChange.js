var before;
var now;
var diff;
var inputEnable=true;
/*随机变色*/
{
    function colorChange() {

        var color = document.getElementById('color');
        color.addEventListener('mousedown', count);
        {
            var box0 = document.getElementById("box0");
            box0.addEventListener("mouseenter", count1);

            var box1 = document.getElementById('box1');
            box1.addEventListener('mouseenter', count1);

            var box2 = document.getElementById('box2');
            box2.addEventListener('mouseenter', count1);

            var box3 = document.getElementById('box3');
            box3.addEventListener('mouseenter', count1);

            var box4 = document.getElementById('box4');
            box4.addEventListener('mouseenter', count1);

            var box5 = document.getElementById('box5');
            box5.addEventListener('mouseenter', count1);

            var box6 = document.getElementById('box6');
            box6.addEventListener('mouseenter', count1);

            var box7 = document.getElementById('box7');
            box7.addEventListener('mouseenter', count1);

            var box8 = document.getElementById('box8');
            box8.addEventListener('mouseenter', count1);

            var box9 = document.getElementById('box9');
            box9.addEventListener('mouseenter', count1);

            var box10 = document.getElementById('box10');
            box10.addEventListener('mouseenter', count1);

            var box11 = document.getElementById('box11');
            box11.addEventListener('mouseenter', count1);

            var box12 = document.getElementById('box12');
            box12.addEventListener('mouseenter', count1);

            var box13 = document.getElementById('box13');
            box13.addEventListener('mouseenter', count1);

            var box14 = document.getElementById('box14');
            box14.addEventListener('mouseenter', count1);

            var box15 = document.getElementById('box15');
            box15.addEventListener('mouseenter', count1);

            var box16 = document.getElementById('box16');
            box16.addEventListener('mouseenter', count1);

            var box17 = document.getElementById('box17');
            box17.addEventListener('mouseenter', count1);

            var box18 = document.getElementById('box18');
            box18.addEventListener('mouseenter', count1);

            var box19 = document.getElementById('box19');
            box19.addEventListener('mouseenter', count1);

            var box20 = document.getElementById('box20');
            box20.addEventListener('mouseenter', count1);

            var box21 = document.getElementById('box21');
            box21.addEventListener('mouseenter', count1);

            var box22 = document.getElementById('box22');
            box22.addEventListener('mouseenter', count1);

            var box23 = document.getElementById('box23');
            box23.addEventListener('mouseenter', count1);

            var box24 = document.getElementById('box24');
            box24.addEventListener('mouseenter', count1);

            var box25 = document.getElementById('box25');
            box25.addEventListener('mouseenter', count1);

            var box26 = document.getElementById('box26');
            box26.addEventListener('mouseenter', count1);

            var box27 = document.getElementById('box27');
            box27.addEventListener('mouseenter', count1);

            var box28 = document.getElementById('box28');
            box28.addEventListener('mouseenter', count1);

            var box29 = document.getElementById('box29');
            box29.addEventListener('mouseenter', count1);

            var box30 = document.getElementById('box30');
            box30.addEventListener('mouseenter', count1);

            var box31 = document.getElementById('box31');
            box31.addEventListener('mouseenter', count1);}

        if(inputEnable==true){
            var n = 0;
            clearInterval(time);
            var time = setInterval(function () {
                if (n <1501) {
                    if(n==0){
                        inputEnable=false;
                    }
                    if(n==1){
                        random();
                    }
                    if(n==1000){
                        random();
                    }
                    if(n==1500){
                        random();
                    }
                    if(n==1446){
                        opaShow();
                    }
                    if(n==1467){
                        opaHide();
                    }
                    if(n==1475){
                        opaShow();
                    }
                    if(n==1496){
                        opaHide();
                    }
                    n += 1;
                }
                else {
                    clearInterval(time);
                    inputEnable=true;
                }
            }, 1);

        }
    }

    function count() {
        let b = Date.now();
        before = b;
        clearTimeout(time);
        var time = setTimeout(function () {
            let a = Date.now();
            now = a;
        },0)
        diff=before-now;
    }

    function count1() {

        if(mouseDown==true) {
            let b = Date.now();
            before=b;
            clearTimeout(time);
            var time =setTimeout(function () {
                let a = Date.now();
                now = a;
            },0)
            diff = before - now;
        }
    }

    var dom = function(s){
        return document.getElementById(s)
    };
    dom.cssName = function (name){
        var prefixes = ['', '-ms-','-moz-', '-webkit-', '-khtml-', '-o-'],
            rcap = /-([a-z])/g,capfn = function($0,$1){
                return $1.toUpperCase();
            };
        dom.cssName = function(name, target, test){
            target = target || document.documentElement.style;
            for (var i=0, l=prefixes.length; i < l; i++) {
                test = (prefixes[i] + name).replace(rcap,capfn);
                if(test in target){
                    return test;
                }
            }
            return null;
        };
        return dom.cssName(name);
    };
    {
        function opaShow() {
            var el = dom("opa"),
                css3transition = dom.cssName("transition");
            el.style[css3transition] = "opacity 0.02s ease";
            el.style.opacity = "0.65";
            /*dom("start").onmousedown = function(){ }*/
        }
        function opaHide() {
            var el = dom("opa"),
                css3transition = dom.cssName("transition");
            el.style[css3transition] = "opacity 0.03s ease";
            el.style.opacity = "0";
            /*dom("start").onmousedown = function(){ }*/
        }
        function change1() {
            var el = dom("change1"),
                css3transition = dom.cssName("transition");
            el.style[css3transition] = "width 0.35s ease";
            el.style.width = "100%";
            /*dom("start").onmousedown = function(){ }*/
        }

        function restore1() {
            var el = dom("change1"),
                css3transition = dom.cssName("transition");
            el.style[css3transition] = "width 0s ease";
            el.style.width = "0%";
            /*dom("start").onmousedown = function(){ }*/
        }

        function change2() {
            var el = dom("change2"),
                css3transition = dom.cssName("transition");
            el.style[css3transition] = "width 0.35s ease";
            el.style.width = "100%";
            /*dom("start").onmousedown = function(){ }*/
        }

        function restore2() {
            var el = dom("change2"),
                css3transition = dom.cssName("transition");
            el.style[css3transition] = "width 0s ease";
            el.style.width = "0%";
            /*dom("start").onmousedown = function(){ }*/
        }

        function change3() {
            var el = dom("change3"),
                css3transition = dom.cssName("transition");
            el.style[css3transition] = "width 0.35s ease";
            el.style.width = "100%";
            /*dom("start").onmousedown = function(){ }*/
        }

        function restore3() {
            var el = dom("change3"),
                css3transition = dom.cssName("transition");
            el.style[css3transition] = "width 0s ease";
            el.style.width = "0%";
            /*dom("start").onmousedown = function(){ }*/
        }

        function change4() {
            var el = dom("change4"),
                css3transition = dom.cssName("transition");
            el.style[css3transition] = "width 0.35s ease";
            el.style.width = "100%";
            /*dom("start").onmousedown = function(){ }*/
        }

        function restore4() {
            var el = dom("change4"),
                css3transition = dom.cssName("transition");
            el.style[css3transition] = "width 0s ease";
            el.style.width = "0%";
            /*dom("start").onmousedown = function(){ }*/
        }

        function change5() {
            var el = dom("change5"),
                css3transition = dom.cssName("transition");
            el.style[css3transition] = "width 0.35s ease";
            el.style.width = "100%";
            /*dom("start").onmousedown = function(){ }*/
        }

        function restore5() {
            var el = dom("change5"),
                css3transition = dom.cssName("transition");
            el.style[css3transition] = "width 0s ease";
            el.style.width = "0%";
            /*dom("start").onmousedown = function(){ }*/
        }

        function change6() {
            var el = dom("change6"),
                css3transition = dom.cssName("transition");
            el.style[css3transition] = "width 0.35s ease";
            el.style.width = "100%";
            /*dom("start").onmousedown = function(){ }*/
        }

        function restore6() {
            var el = dom("change6"),
                css3transition = dom.cssName("transition");
            el.style[css3transition] = "width 0s ease";
            el.style.width = "0%";
            /*dom("start").onmousedown = function(){ }*/
        }

        function change7() {
            var el = dom("change7"),
                css3transition = dom.cssName("transition");
            el.style[css3transition] = "width 0.35s ease";
            el.style.width = "100%";
            /*dom("start").onmousedown = function(){ }*/
        }

        function restore7() {
            var el = dom("change7"),
                css3transition = dom.cssName("transition");
            el.style[css3transition] = "width 0s ease";
            el.style.width = "0%";
            /*dom("start").onmousedown = function(){ }*/
        }

        function change8() {
            var el = dom("change8"),
                css3transition = dom.cssName("transition");
            el.style[css3transition] = "width 0.35s ease";
            el.style.width = "100%";
            /*dom("start").onmousedown = function(){ }*/
        }

        function restore8() {
            var el = dom("change8"),
                css3transition = dom.cssName("transition");
            el.style[css3transition] = "width 0s ease";
            el.style.width = "0%";
            /*dom("start").onmousedown = function(){ }*/
        }

        function change9() {
            var el = dom("change9"),
                css3transition = dom.cssName("transition");
            el.style[css3transition] = "height 0.35s ease";
            el.style.height = "100%";
            /*dom("start").onmousedown = function(){ }*/
        }

        function restore9() {
            var el = dom("change9"),
                css3transition = dom.cssName("transition");
            el.style[css3transition] = "height 0s ease";
            el.style.height = "0%";
            /*dom("start").onmousedown = function(){ }*/
        }

        function change10() {
            var el = dom("change10"),
                css3transition = dom.cssName("transition");
            el.style[css3transition] = "height 0.35s ease";
            el.style.height = "100%";
            /*dom("start").onmousedown = function(){ }*/
        }

        function restore10() {
            var el = dom("change10"),
                css3transition = dom.cssName("transition");
            el.style[css3transition] = "height 0s ease";
            el.style.height = "0%";
            /*dom("start").onmousedown = function(){ }*/
        }

        function change11() {
            var el = dom("change11"),
                css3transition = dom.cssName("transition");
            el.style[css3transition] = "height 0.35s ease";
            el.style.height = "100%";
            /*dom("start").onmousedown = function(){ }*/
        }

        function restore11() {
            var el = dom("change11"),
                css3transition = dom.cssName("transition");
            el.style[css3transition] = "height 0s ease";
            el.style.height = "0%";
            /*dom("start").onmousedown = function(){ }*/
        }

        function change12() {
            var el = dom("change12"),
                css3transition = dom.cssName("transition");
            el.style[css3transition] = "height 0.35s ease";
            el.style.height = "100%";
            /*dom("start").onmousedown = function(){ }*/
        }

        function restore12() {
            var el = dom("change12"),
                css3transition = dom.cssName("transition");
            el.style[css3transition] = "height 0s ease";
            el.style.height = "0%";
            /*dom("start").onmousedown = function(){ }*/
        }

        function change13() {
            var el = dom("change13"),
                css3transition = dom.cssName("transition");
            el.style[css3transition] = "height 0.35s ease";
            el.style.height = "100%";
            /*dom("start").onmousedown = function(){ }*/
        }

        function restore13() {
            var el = dom("change13"),
                css3transition = dom.cssName("transition");
            el.style[css3transition] = "height 0s ease";
            el.style.height = "0%";
            /*dom("start").onmousedown = function(){ }*/
        }

        function change14() {
            var el = dom("change14"),
                css3transition = dom.cssName("transition");
            el.style[css3transition] = "height 0.35s ease";
            el.style.height = "100%";
            /*dom("start").onmousedown = function(){ }*/
        }

        function restore14() {
            var el = dom("change14"),
                css3transition = dom.cssName("transition");
            el.style[css3transition] = "height 0s ease";
            el.style.height = "0%";
            /*dom("start").onmousedown = function(){ }*/
        }

        function change15() {
            var el = dom("change15"),
                css3transition = dom.cssName("transition");
            el.style[css3transition] = "height 0.35s ease";
            el.style.height = "100%";
            /*dom("start").onmousedown = function(){ }*/
        }

        function restore15() {
            var el = dom("change15"),
                css3transition = dom.cssName("transition");
            el.style[css3transition] = "height 0s ease";
            el.style.height = "0%";
            /*dom("start").onmousedown = function(){ }*/
        }

        function change16() {
            var el = dom("change16"),
                css3transition = dom.cssName("transition");
            el.style[css3transition] = "height 0.35s ease";
            el.style.height = "100%";
        }

        function restore16() {
            var el = dom("change16"),
                css3transition = dom.cssName("transition");
            el.style[css3transition] = "height 0s ease";
            el.style.height = "0%";
        }
    }
    function random() {
        var randomNum = diff%16;
        switch (randomNum) {
            case 0 :
                clearTimeout(time);
                document.getElementById('change1').style.backgroundColor = '#5ACDB1';
                change1();
                clearTimeout(time1);
                var time1=setTimeout(function () {
                    document.getElementById('color1').style.backgroundColor = '#5ACDB1';
                },350)

                var time=setTimeout(function () {
                    restore1();
                },350)
                /*clearTimeout(time);*/
                break;
            case 1 :
                clearTimeout(time);
                document.getElementById('change2').style.backgroundColor = '#FFAFAF';
                change2();
                clearTimeout(time1);
                var time1=setTimeout(function () {
                    document.getElementById('color1').style.backgroundColor = '#FFAFAF';
                },350)

                var time=setTimeout(function () {
                    restore2();
                },350)
                /*clearTimeout(time);*/
                break;
            case 2 :
                clearTimeout(time);
                document.getElementById('change3').style.backgroundColor = '#829BD4';
                change3();
                clearTimeout(time1);
                var time1=setTimeout(function () {
                    document.getElementById('color1').style.backgroundColor = '#829BD4';
                },350)

                var time=setTimeout(function () {
                    restore3();
                },350)
                /*clearTimeout(time);*/
                break;
            case 3 :
                clearTimeout(time);
                document.getElementById('change4').style.backgroundColor = '#B3D2BE';
                change4();
                clearTimeout(time1);
                var time1=setTimeout(function () {
                    document.getElementById('color1').style.backgroundColor = '#B3D2BE';
                },350)

                var time=setTimeout(function () {
                    restore4();
                },350)
                /*clearTimeout(time);*/
                break;
            case 4 :
                clearTimeout(time);
                document.getElementById('change5').style.backgroundColor = '#5AC6D7';
                change5();
                clearTimeout(time1);
                var time1=setTimeout(function () {
                    document.getElementById('color1').style.backgroundColor = '#5AC6D7';
                },350)

                var time=setTimeout(function () {
                    restore5();
                },350)
                /*clearTimeout(time);*/
                break;
            case 5 :
                clearTimeout(time);
                document.getElementById('change6').style.backgroundColor = '#FC8FF4';
                change6();
                clearTimeout(time1);
                var time1=setTimeout(function () {
                    document.getElementById('color1').style.backgroundColor = '#FC8FF4';
                },350)

                var time=setTimeout(function () {
                    restore6();
                },350)
                /*clearTimeout(time);*/
                break;
            case 6 :
                clearTimeout(time);
                document.getElementById('change7').style.backgroundColor = '#FAAD90';
                change7();
                clearTimeout(time1);
                var time1=setTimeout(function () {
                    document.getElementById('color1').style.backgroundColor = '#FAAD90';
                },350)

                var time=setTimeout(function () {
                    restore7();

                },350)
                /*clearTimeout(time);*/
                break;
            case 7 :
                clearTimeout(time);
                document.getElementById('change8').style.backgroundColor = '#538EB8';
                change8();
                clearTimeout(time1);
                var time1=setTimeout(function () {
                    document.getElementById('color1').style.backgroundColor = '#538EB8';
                },350)

                var time=setTimeout(function () {
                    restore8();

                },350)
                /*clearTimeout(time);*/
                break;
            case 8 :
                clearTimeout(time);
                document.getElementById('change9').style.backgroundColor = '#D29577';
                change9();
                clearTimeout(time1);
                var time1=setTimeout(function () {
                    document.getElementById('color1').style.backgroundColor = '#D29577';
                },350)

                var time=setTimeout(function () {
                    restore9();

                },350)
                /*clearTimeout(time);*/
                break;
            case 9 :
                clearTimeout(time);
                document.getElementById('change10').style.backgroundColor = '#8E8478';
                change10();
                clearTimeout(time1);
                var time1=setTimeout(function () {
                    document.getElementById('color1').style.backgroundColor = '#8E8478';
                },350)

                var time=setTimeout(function () {
                    restore10();

                },350)
                /*clearTimeout(time);*/
                break;
            case 10 :
                clearTimeout(time);
                document.getElementById('change11').style.backgroundColor = '#42A5BD';
                change11();
                clearTimeout(time1);
                var time1=setTimeout(function () {
                    document.getElementById('color1').style.backgroundColor = '#42A5BD';
                },350)

                var time=setTimeout(function () {
                    restore11();
                },350)
                /*clearTimeout(time);*/
                break;
            case 11 :clearTimeout(time);
                document.getElementById('change12').style.backgroundColor = '#636274';
                change12();
                clearTimeout(time1);
                var time1=setTimeout(function () {
                    document.getElementById('color1').style.backgroundColor = '#636274';
                },350)

                var time=setTimeout(function () {
                    restore12();

                },350)
                /*clearTimeout(time);*/
                break;
            case 12 :
                clearTimeout(time);
                document.getElementById('change13').style.backgroundColor = '#A2E062';
                change13();
                clearTimeout(time1);
                var time1=setTimeout(function () {
                    document.getElementById('color1').style.backgroundColor = '#A2E062';
                },350)

                var time=setTimeout(function () {
                    restore13();

                },350)
                /*clearTimeout(time);*/
                break;
            case 13 :clearTimeout(time);
                document.getElementById('change14').style.backgroundColor = '#E2E174';
                change14();
                clearTimeout(time1);
                var time1=setTimeout(function () {
                    document.getElementById('color1').style.backgroundColor = '#E2E174';
                },350)

                var time=setTimeout(function () {
                    restore14();

                },350)
                /*clearTimeout(time);*/
                break;
            case 14 :
                clearTimeout(time);
                document.getElementById('change15').style.backgroundColor = '#7DAD55';
                change15();
                clearTimeout(time1);
                var time1=setTimeout(function () {
                    document.getElementById('color1').style.backgroundColor = '#7DAD55';
                },350)

                var time=setTimeout(function () {
                    restore15();

                },350)
                /*clearTimeout(time);*/
                break;
            case 15 :
                clearTimeout(time);
                document.getElementById('change16').style.backgroundColor = '#B2D239';
                change16();
                clearTimeout(time1);
                var time1=setTimeout(function () {
                    document.getElementById('color1').style.backgroundColor = '#B2D239';
                },350)

                var time=setTimeout(function () {
                    restore16();
                },350)
                /*clearTimeout(time);*/
                break;
        }
    }


    /*可均衡获取 0 到 15 的随机整数,并更换颜色*/

}