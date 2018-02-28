/**
 * @Author: jecyu
 * @Date: 2018-01-18 5:57:49 pm
 * @Modified By: jeCyu
 * @Last Modified time: 2018-01-18 6:07:46 pm
 */

function Router() {
  this.routes = {};
  this.currentUrl = "";
}

/**
 * 存储路由更新时的回调到回调数组 routes 中，回调函数将负责对页面的更新
 * @param {*} path
 * @param {*} callback
 */
Router.prototype.route = function(path, callback) {
  this.routes[path] = callback || function() {};
};

/**
 * 执行当前 url 对应的回调函数，更新页面
 */
Router.prototype.refresh = function() {
  this.currentUrl = location.hash.slice(1) || "/";
  this.routes[this.currentUrl]();
};

/**
 * 监听浏览器 url hash 更新事件
 */
Router.prototype.init = function() {
  window.addEventListener("load", this.refresh.bind(this), false);
  window.addEventListener("hashchange", this.refresh.bind(this), false);
};
