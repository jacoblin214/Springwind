/*
 * @Author: Jecyu 
 * @Date: 2018-02-27 10:30:10 
 * @Last Modified by: Jecyu
 * @Last Modified time: 2018-03-08 11:31:36
 */

/**
 * 更换 tab 内容
 * @param {*} tabNav
 * @param {*} tabConent
 * @param {string} bannerUrl 图片地址
 */
function changeTab(tabNav, tabConentID, bannerUrl) {
  // 遍历 a 链接，添加 active

  tabNav.each(function(index) {
    var tab_nav_attr = $(this).attr("href") + ""; // 加 '' 转为字符串
    if (tab_nav_attr.slice(2) === tabConentID) {
      $(this)
        .parent() // 它父亲 tab-item
        .addClass("is-actived")
        .siblings()
        .removeClass("is-actived");
    }
  });

  // 显示对应的 tab-content
  $("#" + tabConentID)
    .show()

    .siblings()
    .hide();

  // 显示对应的 banner
  // 找到 banner
  var $banner = $(".section-banner .banner");
  var $banner_img = $banner.find("img");
  // 图片地址
  $banner_img.attr("src", bannerUrl);
  page.backToTop();
}

/* ================== 页面路由功能 =============== */

// 路由
window.Router = new Router();
window.Router.init();

// 找到 tabs link
var $tabs_nav = $(".tab2-nav");
var $tabs_item_link = $tabs_nav.find(".tab2-nav__item  a");

// 操作tab
var tab_1 = "item1";
var tab_2 = "item2";
var tab_3 = "item3";
var tab_4 = "item4";

Router.route("/" + tab_1, function() {
  changeTab($tabs_item_link, tab_1);
});

Router.route("/" + tab_2, function() {
  changeTab($tabs_item_link, tab_2);
});

Router.route("/" + tab_3, function() {
  changeTab($tabs_item_link, tab_3);
});
Router.route("/" + tab_4, function() {
  changeTab($tabs_item_link, tab_4);
});

/* ============ 内部导航贴顶 ============== */
page.stickUpInternalNav($(".tab2-nav"));

/* ============= 上传文件 ================= */
$(document).ready(function() {
  $("#falseinput").click(function() {
    $("#fileinput").click();
  });
});
//  取得选择文件的信息，放置到指定的框中
$("#fileinput").change(function() {
  $(".user-item__upload-info").text($("#fileinput")[0].files[0].name);
});
