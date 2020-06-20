
/*bgm开关函数*/
{
    var canPlay=false;
    function bgmOTF() {
        var text = document.getElementById("bgmOF").innerHTML;
        var audio = document.getElementById("a");
        if (text == "B A C K T R A C K  :  O N") {
            audio.play();
            canPlay=true;
        }
        else {
            audio.pause();
            canPlay=false;
        }
    }
}