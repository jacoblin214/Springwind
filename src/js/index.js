// 轮播图切换
/* 内层图片滚动切换 */
$(".slideGroup .slideBox").slide({ mainCell: "ul", vis: 3, prevCell: ".sPrev", nextCell: ".sNext", effect: "leftLoop" });

/* 外层tab切换 */
$(".slideGroup").slide({ titCell: ".parHd li", mainCell: ".parBd" });
$(document).ready(function () {
    $('#btn2').click(function () {
        $('#btn2').css("color", "#fff");
        $('#btn2').css("background-color", "#C0C0C0");
        $('#btn1').css("color", "black");
        $('#btn1').css("background-color", "white");
    })
    $('#btn1').click(function () {
        $('#btn1').css("color", "#fff");
        $('#btn1').css("background-color", "#C0C0C0");
        $('#btn2').css("color", "black");
        $('#btn2').css("background-color", "white");
    })
});