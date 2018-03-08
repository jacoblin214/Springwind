/*
 * @Author: Jecyu 
 * @Date: 2018-02-27 10:30:10 
 * @Last Modified by: Jecyu
 * @Last Modified time: 2018-03-08 21:00:25
 */

/**
 * 定位到对应的 sectionId 部分
 * @param {*} sectionId
 */
function anchorPosition(sectionId) {
  // 获取对应 sectionId 的坐标
  var distance = $("#" + sectionId).offset().top;
  console.log(distance);
  var scroll = { scrollTop: distance };
  $("body, html").animate(scroll, 100);
  // $("body, html").animate({ scrollTop: 300 }, 100);
}

/* ================== 页面路由功能 =============== */

// 路由
window.Router = new Router();
window.Router.init();

// 定位section
var id_1 = "item1";
var id_2 = "item2";
var id_3 = "item3";
var id_4 = "item4";
var id_5 = "item5";

Router.route("/" + id_1, function() {
  anchorPosition(id_1);
});
Router.route("/" + id_2, function() {
  anchorPosition(id_2);
});
Router.route("/" + id_3, function() {
  anchorPosition(id_3);
});
Router.route("/" + id_4, function() {
  anchorPosition(id_4);
});
Router.route("/" + id_5, function() {
  anchorPosition(id_5);
});
