var bgmOn=true
function bgmDown(){
    if (bgmOn) {
        document.getElementById("bgmOF").innerHTML ="B A C K T R A C K : O F F"
        bgmOn=false
    }
    else{
        document.getElementById("bgmOF").innerHTML = "B A C K T R A C K : O N"
        bgmOn = true
    }
}

var feedOn = true
function feedDown() {
    if (feedOn) {
        document.getElementById("feedOF").innerHTML = "F E E D B A C K : O F F"
        feedOn = false
    }
    else {
        document.getElementById("feedOF").innerHTML = "F E E D B A C K : O N"
        feedOn = true
    }
}