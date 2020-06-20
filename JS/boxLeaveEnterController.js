/*box leave&enter控制模块*/

{
    /*所有组件隐藏2s函数*/
    function o() {
        if (mouseDown == true) {
            allOnMouseDown();
        }
    }
    /*定义全局变量mouseDown*/
    var mouseDown = false;
    var inBox0;
    var inBox1;
    var inBox2;
    var inBox3;
    var inBox4;
    var inBox5;
    var inBox6;
    var inBox7;
    var inBox8;
    var inBox9;
    var inBox10;
    var inBox11;
    var inBox12;
    var inBox13;
    var inBox14;
    var inBox15;
    var inBox16;
    var inBox17;
    var inBox18;
    var inBox19;
    var inBox20;
    var inBox21;
    var inBox22;
    var inBox23;
    var inBox24;
    var inBox25;
    var inBox26;
    var inBox27;
    var inBox28;
    var inBox29;
    var inBox30;
    var inBox31;

    /*color元素的mouse事件*/
    window.onload = function colorMouseDown() {
        var obj = document.getElementById("color");
        obj.addEventListener("mousedown", down);
        obj.addEventListener("mouseup", up);
        /*obj.addEventListener("mouseover",move);*/

        var box0 = document.getElementById("box0");
        box0.addEventListener("mouseenter", enter0);
        box0.addEventListener("mouseleave", leave0);

        var box1 = document.getElementById('box1');
        box1.addEventListener('mouseenter', enter1);
        box1.addEventListener('mouseleave', leave1);

        var box2 = document.getElementById('box2');
        box2.addEventListener('mouseenter', enter2);
        box2.addEventListener('mouseleave', leave2);

        var box3 = document.getElementById('box3');
        box3.addEventListener('mouseenter', enter3);
        box3.addEventListener('mouseleave', leave3);

        var box4 = document.getElementById('box4');
        box4.addEventListener('mouseenter', enter4);
        box4.addEventListener('mouseleave', leave4);

        var box5 = document.getElementById('box5');
        box5.addEventListener('mouseenter', enter5);
        box5.addEventListener('mouseleave', leave5);

        var box6 = document.getElementById('box6');
        box6.addEventListener('mouseenter', enter6);
        box6.addEventListener('mouseleave', leave6);

        var box7 = document.getElementById('box7');
        box7.addEventListener('mouseenter', enter7);
        box7.addEventListener('mouseleave', leave7);

        var box8 = document.getElementById('box8');
        box8.addEventListener('mouseenter', enter8);
        box8.addEventListener('mouseleave', leave8);

        var box9 = document.getElementById('box9');
        box9.addEventListener('mouseenter', enter9);
        box9.addEventListener('mouseleave', leave9);

        var box10 = document.getElementById('box10');
        box10.addEventListener('mouseenter', enter10);
        box10.addEventListener('mouseleave', leave10);

        var box11 = document.getElementById('box11');
        box11.addEventListener('mouseenter', enter11);
        box11.addEventListener('mouseleave', leave11);

        var box12 = document.getElementById('box12');
        box12.addEventListener('mouseenter', enter12);
        box12.addEventListener('mouseleave', leave12);

        var box13 = document.getElementById('box13');
        box13.addEventListener('mouseenter', enter13);
        box13.addEventListener('mouseleave', leave13);

        var box14 = document.getElementById('box14');
        box14.addEventListener('mouseenter', enter14);
        box14.addEventListener('mouseleave', leave14);

        var box15 = document.getElementById('box15');
        box15.addEventListener('mouseenter', enter15);
        box15.addEventListener('mouseleave', leave15);

        var box16 = document.getElementById('box16');
        box16.addEventListener('mouseenter', enter16);
        box16.addEventListener('mouseleave', leave16);

        var box17 = document.getElementById('box17');
        box17.addEventListener('mouseenter', enter17);
        box17.addEventListener('mouseleave', leave17);

        var box18 = document.getElementById('box18');
        box18.addEventListener('mouseenter', enter18);
        box18.addEventListener('mouseleave', leave18);

        var box19 = document.getElementById('box19');
        box19.addEventListener('mouseenter', enter19);
        box19.addEventListener('mouseleave', leave19);

        var box20 = document.getElementById('box20');
        box20.addEventListener('mouseenter', enter20);
        box20.addEventListener('mouseleave', leave20);

        var box21 = document.getElementById('box21');
        box21.addEventListener('mouseenter', enter21);
        box21.addEventListener('mouseleave', leave21);

        var box22 = document.getElementById('box22');
        box22.addEventListener('mouseenter', enter22);
        box22.addEventListener('mouseleave', leave22);

        var box23 = document.getElementById('box23');
        box23.addEventListener('mouseenter', enter23);
        box23.addEventListener('mouseleave', leave23);

        var box24 = document.getElementById('box24');
        box24.addEventListener('mouseenter', enter24);
        box24.addEventListener('mouseleave', leave24);

        var box25 = document.getElementById('box25');
        box25.addEventListener('mouseenter', enter25);
        box25.addEventListener('mouseleave', leave25);

        var box26 = document.getElementById('box26');
        box26.addEventListener('mouseenter', enter26);
        box26.addEventListener('mouseleave', leave26);

        var box27 = document.getElementById('box27');
        box27.addEventListener('mouseenter', enter27);
        box27.addEventListener('mouseleave', leave27);

        var box28 = document.getElementById('box28');
        box28.addEventListener('mouseenter', enter28);
        box28.addEventListener('mouseleave', leave28);

        var box29 = document.getElementById('box29');
        box29.addEventListener('mouseenter', enter29);
        box29.addEventListener('mouseleave', leave29);

        var box30 = document.getElementById('box30');
        box30.addEventListener('mouseenter', enter30);
        box30.addEventListener('mouseleave', leave30);

        var box31 = document.getElementById('box31');
        box31.addEventListener('mouseenter', enter31);
        box31.addEventListener('mouseleave', leave31);
    };
    /*监听color元素down事件，mouseDown置为true*/
    function down() {
        mouseDown = true;
    }

    /*监听到color元素up事件，mouseDown置为false*/
    function up() {
        mouseDown = false;
    }



    function play(index) {

        var audio = document.createElement('audio');//生成一个audio元素
        audio.preload=true;
        switch (index) {
            case 1:audio.src = '../music/1.mp3'; //音乐的路径
                break;
            case 2:audio.src = '../music/2.mp3'; //音乐的路径
                break;
            case 3:audio.src = '../music/3.mp3'; //音乐的路径
                break;
            case 4:audio.src = '../music/4.mp3'; //音乐的路径
                break;
            case 5:audio.src = '../music/5.mp3'; //音乐的路径
                break;
            case 6:audio.src = '../music/6.mp3'; //音乐的路径
                break;
            case 7:audio.src = '../music/7.mp3'; //音乐的路径
                break;
            case 8:audio.src = '../music/8.mp3'; //音乐的路径
                break;
            case 9:audio.src = '../music/9.mp3'; //音乐的路径
                break;
            case 10:audio.src = '../music/10.mp3'; //音乐的路径
                break;
            case 11:audio.src = '../music/11.mp3'; //音乐的路径
                break;
            case 12:audio.src = '../music/12.mp3'; //音乐的路径
                break;
            case 13:audio.src = '../music/13.mp3'; //音乐的路径
                break;
            case 14:audio.src = '../music/14.mp3'; //音乐的路径
                break;
            case 15:audio.src = '../music/15.mp3'; //音乐的路径
                break;
            case 16:audio.src = '../music/16.mp3'; //音乐的路径
                break;
            case 17:audio.src = '../music/17.mp3'; //音乐的路径
                break;
            case 18:audio.src = '../music/18.mp3'; //音乐的路径
                break;
            case 19:audio.src = '../music/19.mp3'; //音乐的路径
                break;
            case 20:audio.src = '../music/20.mp3'; //音乐的路径
                break;
            case 21:audio.src = '../music/21.mp3'; //音乐的路径
                break;
            case 22:audio.src = '../music/22.mp3'; //音乐的路径
                break;
            case 23:audio.src = '../music/23.mp3'; //音乐的路径
                break;
            case 24:audio.src = '../music/24.mp3'; //音乐的路径
                break;
            case 25:audio.src = '../music/25.mp3'; //音乐的路径
                break;
            case 26:audio.src = '../music/26.mp3'; //音乐的路径
                break;
            case 27:audio.src = '../music/27.mp3'; //音乐的路径
                break;
            case 28:audio.src = '../music/28.mp3'; //音乐的路径
                break;
            case 29:audio.src = '../music/29.mp3'; //音乐的路径
                break;
            case 30:audio.src = '../music/30.mp3'; //音乐的路径
                break;
            case 31:audio.src = '../music/31.mp3'; //音乐的路径
                break;
            case 32:audio.src = '../music/32.mp3'; //音乐的路径
                break;

        }
        audio.autoplay=true;

    }


    function enter0() {
        if (mouseDown == true) {
            play(1);
            inBox0 = true;
            box0Opacity();
        }
    }

    function leave0() {

        if (mouseDown == true) {
            inBox0 = false;
        }
    }

    function enter1() {
        if (mouseDown == true) {
            play(2);
            inBox1 = true;
            box1Opacity();
        }
    }

    function leave1() {
        if (mouseDown == true) {
            inBox1 = false;

        }
    }

    function enter2() {
        if (mouseDown == true) {
            play(3);
            inBox2 = true;
            box2Opacity();
        }
    }

    function leave2() {
        if (mouseDown == true) {
            inBox2 = false;

        }
    }

    function enter3() {
        if (mouseDown == true) {

            play(4);
            inBox3 = true;
            box3Opacity()
        }
    }

    function leave3() {
        if (mouseDown == true) {
            inBox3 = false;

        }
    }

    function enter4() {
        if (mouseDown == true) {

            play(5);
            inBox4 = true;
            box4Opacity();
        }
    }

    function leave4() {
        if (mouseDown == true) {
            inBox4 = false;

        }
    }

    function enter5() {
        if (mouseDown == true) {

            play(6);
            inBox5 = true;
            box5Opacity();
        }
    }

    function leave5() {
        if (mouseDown == true) {
            inBox5 = false;

        }
    }

    function enter6() {
        if (mouseDown == true) {

            play(7);
            inBox6 = true;
            box6Opacity();
        }
    }

    function leave6() {
        if (mouseDown == true) {
            inBox6 = false;

        }
    }

    function enter7() {
        if (mouseDown == true) {

            play(8);
            inBox7 = true;
            box7Opacity();
        }
    }

    function leave7() {
        if (mouseDown == true) {
            inBox7 = false;

        }
    }

    function enter8() {
        if (mouseDown == true) {

            play(9);
            inBox8 = true;
            box8Opacity();
        }
    }

    function leave8() {
        if (mouseDown == true) {
            inBox8 = false;

        }
    }

    function enter9() {
        if (mouseDown == true) {
            play(10);
            inBox9 = true;
            box9Opacity();
        }
    }

    function leave9() {
        if (mouseDown == true) {
            inBox9 = false;
        }
    }

    function enter10() {
        if (mouseDown == true) {
            play(11);
            inBox10 = true;
            box10Opacity();
        }
    }

    function leave10() {
        if (mouseDown == true) {
            inBox10 = false;

        }
    }

    function enter11() {
        if (mouseDown == true) {

            play(12);
            inBox11 = true;
            box11Opacity();
        }
    }

    function leave11() {
        if (mouseDown == true) {
            inBox11 = false;

        }
    }

    function enter12() {
        if (mouseDown == true) {

            play(13);
            inBox12 = true;
            box12Opacity();
        }
    }

    function leave12() {
        if (mouseDown == true) {
            inBox12 = false;

        }
    }

    function enter13() {
        if (mouseDown == true) {

            play(14);
            inBox13 = true;
            box13Opacity();
        }
    }

    function leave13() {
        if (mouseDown == true) {
            inBox13 = false;

        }
    }

    function enter14() {
        if (mouseDown == true) {

            play(15);
            inBox14 = true;
            box14Opacity();
        }
    }

    function leave14() {
        if (mouseDown == true) {
            inBox14 = false;

        }
    }

    function enter15() {
        if (mouseDown == true) {

            play(16);
            inBox15 = true;
            box15Opacity();
        }
    }

    function leave15() {
        if (mouseDown == true) {
            inBox15 = false;

        }
    }

    function enter16() {
        if (mouseDown == true) {

            play(17);
            inBox16 = true;
            box16Opacity();
        }
    }

    function leave16() {
        if (mouseDown == true) {
            inBox16 = false;

        }
    }

    function enter17() {
        if (mouseDown == true) {

            play(18);
            inBox17 = true;
            box17Opacity();
        }
    }

    function leave17() {
        if (mouseDown == true) {
            inBox17 = false;

        }
    }

    function enter18() {
        if (mouseDown == true) {

            play(19);
            inBox18 = true;
            box18Opacity();
        }
    }

    function leave18() {
        if (mouseDown == true) {
            inBox18 = false;

        }
    }

    function enter19() {
        if (mouseDown == true) {

            play(20);
            inBox19 = true;
            box19Opacity();
        }
    }

    function leave19() {
        if (mouseDown == true) {
            inBox19 = false;

        }
    }

    function enter20() {
        if (mouseDown == true) {

            play(21);
            inBox20 = true;
            box20Opacity();
        }
    }

    function leave20() {
        if (mouseDown == true) {
            inBox20 = false;

        }
    }

    function enter21() {
        if (mouseDown == true) {

            play(22);
            inBox21 = true;
            box21Opacity();
        }
    }

    function leave21() {
        if (mouseDown == true) {
            inBox21 = false;

        }
    }

    function enter22() {
        if (mouseDown == true) {

            play(23);
            inBox22 = true;
            box22Opacity();
        }
    }

    function leave22() {
        if (mouseDown == true) {
            inBox22 = false;

        }
    }

    function enter23() {
        if (mouseDown == true) {

            play(24);
            inBox23 = true;
            box23Opacity();
        }
    }

    function leave23() {
        if (mouseDown == true) {
            inBox23 = false;

        }
    }

    function enter24() {
        if (mouseDown == true) {

            play(25);
            inBox24 = true;
            box24Opacity();
        }
    }

    function leave24() {
        if (mouseDown == true) {
            inBox24 = false;

        }
    }

    function enter25() {
        if (mouseDown == true) {

            play(26);
            inBox25 = true;
            box25Opacity();
        }
    }

    function leave25() {
        if (mouseDown == true) {
            inBox25 = false;

        }
    }

    function enter26() {
        if (mouseDown == true) {

            play(26);
            inBox26 = true;
            box26Opacity();
        }
    }

    function leave26() {
        if (mouseDown == true) {
            inBox26 = false;

        }
    }

    function enter27() {
        if (mouseDown == true) {

            play(27);
            inBox27 = true;
            box27Opacity();
        }
    }

    function leave27() {
        if (mouseDown == true) {
            inBox27 = false;

        }
    }

    function enter28() {
        if (mouseDown == true) {

            play(29);
            inBox28 = true;
            box28Opacity();
        }
    }

    function leave28() {
        if (mouseDown == true) {
            inBox28 = false;

        }
    }

    function enter29() {
        if (mouseDown == true) {

            play(30);
            inBox29 = true;
            box29Opacity();
        }
    }

    function leave29() {
        if (mouseDown == true) {
            inBox29 = false;

        }
    }

    function enter30() {
        if (mouseDown == true) {

            play(31);
            inBox30 = true;
            box30Opacity();
        }
    }

    function leave30() {
        if (mouseDown == true) {
            inBox30 = false;

        }
    }

    function enter31() {
        if (mouseDown == true) {
            play(32);
            inBox31 = true;
            box31Opacity();
        }
    }

    function leave31() {
        if (mouseDown == true) {
            inBox31 = false;
        }
    }
}