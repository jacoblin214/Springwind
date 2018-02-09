/**
 * @Author: jecyu
 * @Date: 2017-12-06 10:33:18 am
 * @Modified By: jeCyu
 * @Last Modified time: 2017-12-07 9:34:05 am
 */

/**
 * 语言切换
 */
function switchLanguage() {
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
}

/**
 * 实现导航栏下拉菜单
 */
function dropMenu() {
  // 找到导航中的链接
  var $nav_links = $(".nav__item > a");
  $nav_links.mousemove(function() {
    $(this)
      .next() // 找到下一个元素
      .show() // 下一个元素显示
      .parent() // 找到它的父辈元素
      .siblings() // 找到父辈元素的同辈元素
      .children("a")
      .next()
      .hide();
  });
}

/**
 * 搜索栏
 */
function searchBar() {
  $("#searchBtn").on("click", function(e) {
    console.log("click");
    $("#searchValue").keydown();
  });
}

/**
 * 點擊箭頭按鈕回到頂部
 * @param {string} backgroundColor 按鈕背景色
 * @param {string} color 前景色
 */
function setBackTotop(backgroundColor, color) {
  // 创建一个 toTop 标签
  var toTop_btn = document.createElement("div");
  // 转化为 jQuery 对象
  var $toTop_btn = $(toTop_btn);

  // 定位及样式初始化
  $toTop_btn.css({
    position: "fixed",
    zIndex: "9999",
    bottom: "100px",
    right: "50px",
    width: "50px",
    // height: "50px",
    lineHeight: "30px",
    background: backgroundColor,
    opacity: "0.8",
    fontSize: "30px",
    color: color,
    textAlign: "center",
    cursor: "pointer"
  });
  // 设置它的 id 属性
  $toTop_btn.attr("id", "toTop");
  // 插入到 body 中
  $toTop_btn.appendTo($("body"));
  $toTop_btn.html(" &#8593;");

  $("#toTop").on("click", function() {
    $("body, html").animate(
      {
        scrollTop: 0
      },
      1000
    );
  });

  // 根据滚动的长度来设置隐藏或显示
  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      $("#toTop").fadeIn();
    } else {
      $("#toTop").fadeOut();
    }
  });
}

/**
 * TODO 当前板块突出显示、导航链接、banner
 */
function highlightPage() {
  // 找到导航里所有的链接
  var $nav__links = $(".con-navbar a");
  $nav__links.each(function name(params) {});
}

/**
 * 获取导航栏的高度，给 body 设置一个上边距
 */
function setBodyMarginTop() {
  // 获取页面中的导航栏
  var $main_navbar = $(".con-navbar");
  // 取得导航栏的高度
  var nav_height = $main_navbar.height();

  // 设置 body 的上边距
  $("body").css("margin-top", nav_height);
}

$(document).ready(function() {
  // 切换语言
  switchLanguage();
  setBodyMarginTop();
  setBackTotop("#2cb5a7", "#fff");
});
