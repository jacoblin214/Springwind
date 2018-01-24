/**
 * @Author: jecyu
 * @Date: 2017-12-06 10:33:18 am
 * @Modified By: jeCyu
 * @Last Modified time: 2017-12-07 9:34:05 am
 */

var page = {
    init: function() {
        this.onload();
    },
    onload: function() {
        this.bindEvent();
    },
    bindEvent: function() {
        var _this = this;
        // 切换语言
        $(".language-switch__btn").click(function() {
            $(this)
                .addClass("is-actived")
                .siblings("span")
                .removeClass("is-actived");
        });

        // 输入文字，点击搜索图标或“Enter”触发搜索
        $("#searchValue").keydown(function(e) {
            if (e.which === 13) {
                console.log("enter");
                event.preventDefault();
            }
            // console.log('enter');
        });

        $("#searchBtn").on("click", function(e) {
            console.log("click");
            $("#searchValue").keydown();
        });

        // back to top
        var $toTop = $("#toTop");
        // 监听页面滚动
        $(window).scroll(function() {
            if ($(window).scrollTop() > 100) {
                $toTop.fadeIn(1000);
            } else {
                $toTop.fadeOut(1000);
            }
        });

        $("#toTop").click(function() {
            $("body, html").animate({ scrollTop: 0 }, 1000);
        });
    }
};

$(document).ready(function() {});
// 立即执行
page.init();
