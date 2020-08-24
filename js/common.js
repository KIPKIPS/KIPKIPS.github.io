OnMenuClick = function () {
    var menu = document.getElementById("menu");
    if (menu.style.top == "-100%") {
        menu.style.animation = "moveDown 0.5s";
        menu.style.top = 0
        console.log(1)
    }
    else {
        menu.style.animation = "moveUp 0.5s";
        menu.style.top = "-100%";
        console.log(2)
    }
};