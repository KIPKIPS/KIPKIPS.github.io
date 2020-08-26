/**
 * Created by KIPKIPS on 2019/5/23.
 */
/*全屏函数*/
var isFull=false
function requestFullScreen(element) {
    var fullScreen = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;
    var quitFullScreenByDocument = document.exitFullScreen || document.mozCancelFullScreen || document.webkitExitFullscreen || element.msExitFullscreen;
    var quitFullScreenByElement = element.msExitFullscreen;
    if (!isFull) {
        fullScreen.call(element);
        isFull=true
    } 
    else {
        if (document) {
            quitFullScreenByDocument.call(document);
        }
        else{
            quitFullScreenByElement.call(element);
        }
        isFull = false;
    }
}