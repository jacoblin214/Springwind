/**
 * @Author: jecyu
 * @Date: 2017-12-06 10:33:18 am
 * @Modified By: jeCyu
 * @Last Modified time: 2017-12-07 9:34:05 am
 */

var page = {
  init: function() {
    this.onload();
    this.bindEvent();
  },
  onload: function() {
    // 初始化，密码不可见
    $(".show-hide").addClass("show icon-eye");
  },
  bindEvent: function() {
    this.prepareLogin();
    this.switchLanguage();
    this.setBackTotop("#2cb5a7", "#fff");
    this.setBodyMarginTop();
    this.backToTop();
    this.highlightPage();

    // 密码显示隐藏点击事件
    var isVisible = false;
    $(".show-hide").click(function(e) {
      // 缓存当前单击对象
      var $this = $(this);

      if (isVisible) {
        $(".show-hide")
          .removeClass("hide icon-eye1")
          .addClass("show icon-eye");
        $("#password").attr("type", "password");
        isVisible = false;
      } else {
        $(".show-hide")
          .removeClass("icon-eye")
          .addClass("icon-eye1");
        $("#password").attr("type", "text");
        isVisible = true;
      }
    });

    // 当点击提交时，自动把密码隐藏
    $('form input[type="submit"]').on("click", function() {
      $(".show-hide")
        .removeClass("icon-eye1")
        .addClass("icon-eye");
      $("#password").attr("type", "password");
    });

    // 服务通道
    // 找到tab导航
    var tab_nav_items = $(".tab-nav .tab-nav__item");
    tab_nav_items.each(function() {
      $(this).click(function(event) {
        console.log("click");
        // 取得里面的 data值
        var tab_target = $(this).attr("data-tab");
        console.log(tab_target);

        $(this)
          .addClass("tab-nav__item--is-actived")
          .siblings()
          .removeClass("tab-nav__item--is-actived");

        $("#" + tab_target)
          .show()
          .siblings()
          .hide();
      });
    });
  },
  prepareLogin: function() {
    var _this = this;
    var login_modal = $("#login_modal")[0];
    // 这里要传入 DOM 对象，非 jQuery对象
    var layer = createFloatLayer(login_modal);

    // 登录状态
    var is_login = false;
    var has_resumed = false;
    // 取得浮出层标题
    var $deliver_modal_title = $(".deliver-modal__title .deliver-modal__link");
    // 取得浮出层底部
    var $deliver_modal_footer = $(".js-deliver-modal__footer");
    // 声明按钮的模板
    var btn_html = "";

    // 1.未登录
    if (is_login === false) {
      $(".js-login-btn").click(function loginModal(event) {
        event.stopPropagation();
        layer.show();
      });
      $("#login_modal")
        .find(".close")
        .click(function() {
          layer.hide();
        });
    }
    // 2.已登录，点击则进入会员中心
    if (is_login === true) {
      window.location.href = "member-center.html";
    }
  },
  /**
   * 语言切换
   */
  switchLanguage: function() {
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
  },

  /**
   * 实现导航栏下拉菜单
   */
  dropMenu: function() {
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
  },
  /**
   * 搜索栏
   */
  searchBar: function() {
    $("#searchBtn").on("click", function(e) {
      console.log("click");
      $("#searchValue").keydown();
    });
  },
  /**
   * 點擊箭頭按鈕回到頂部
   * @param {string} backgroundColor 按鈕背景色
   * @param {string} color 前景色
   */
  setBackTotop: function(backgroundColor, color) {
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
  },
  /**
   * 当前板块突出显示、导航链接、banner
   */
  highlightPage: function() {
    // 找到导航里所有的链接
    var $nav__links = $(".con-navbar a");
    // 声明链接的 url 地址
    var link_url;
    $nav__links.each(function(index) {
      // 取得当前链接里的 href 属性
      link_url = $(this).attr("href");
      // 比较当前链接的 url 与当前页面的 url
      if (window.location.href.indexOf(link_url) != -1) {
        $(this)
          .parent(".nav__item")
          .addClass("is-actived")
          .siblings()
          .removeClass("is-actived");
        // 取得当前链接地址.的位置，去除 .html后缀
        var slice_end = link_url.indexOf(".");
        // // 设置 body 的 id 属性
        document.body.setAttribute("id", link_url.slice(0, slice_end));
      }
    });
  },
  /**
   * 获取导航栏的高度，给 body 设置一个上边距
   */
  setBodyMarginTop: function() {
    // 获取页面中的导航栏
    var $main_navbar = $(".con-navbar");
    // 取得导航栏的高度
    var nav_height = $main_navbar.height();

    // 设置 body 的上边距
    $("body").css("margin-top", nav_height);
  },
  /**
   * 回到顶部
   */
  backToTop: function(params) {
    $("body, html").animate({ scrollTop: 0 }, 100);
  },
  /**
   * 内部导航贴顶
   * @param {object} internalNav 内部导航节点
   */
  stickUpInternalNav: function(internalNav) {
    // 存储 page 对象
    var _this = this;
    var $tabs_nav = internalNav;
    // 检测是否存在
    if ($tabs_nav.length === 0) return false;
    // 复制一个新的 nav，用来 stickUp
    var $tabs_nav_clone = $tabs_nav
      .addClass("original") // 添加原始类
      .clone(true, true) // 复制一个副本及它的事件函数
      .addClass("cloned")
      .insertBefore($tabs_nav)
      .css("position", "fixed")
      .css("top", "0")
      .css("z-index", 500)
      .removeClass("original")
      .hide(); // 隐藏复制的tab-nav
    // 监听页面滚动，设置 stickUp
    var scrollIntervalId = setInterval(_this.setFixed(), 10);

    // $tabs_nav_clone 的处理
    $tabs_item_clone_link = $tabs_nav_clone.find("a");
    $tabs_item_clone_link.on("click", function() {
      $(this)
        .parent()
        .addClass("is-actived")
        .siblings()
        .removeClass("is-actived");
    });
  },
  /**
   * 设置 stickUp
   */
  setFixed: function() {
    var _this = this;
    var $orgNav = $(".original");

    // 元素上侧偏移 Document 顶部的距离
    _this.offsetH = $orgNav.offset().top;
    _this.offsetL = $orgNav.offset().left;
    _this.$orgNavW = $orgNav.width();

    // 监听页面滚动
    $(window).on("scroll", function() {
      var scrollT = $(this).scrollTop();
      if (scrollT >= _this.offsetH) {
        // 滚动条滑过导航栏，只显示 clone 后的导航栏
        $(".cloned")
          .css("left", _this.offsetL + "px")
          .css("top", "40px")
          // .css("width", "300px")
          .show();

        // 处理它的导航按钮
        $(".cloned")
          .find("li")
          .removeClass("is-actived");

        $orgNav.css("visibility", "hidden");
        // 绑定监听
      } else {
        // 滚动条没有滑过导航栏，只显示原始的导航栏
        $(".cloned").hide();
        $orgNav.css("visibility", "visible");
      }
    });
  },
  /**
   * 兼容的事件方法
   */
  addEvent: function(ele, event, handler) {
    if (ele.addEventListener) {
      ele.addEventListener(event, handler, false);
    } else if (ele.attachEvent) {
      ele.attachEvent("on" + event, handler);
    } else {
      ele["on" + event] = handler;
    }
  },
  removeEvent: function(ele, event, handler) {
    if (ele.removeEventListener) {
      ele.removeEventListener(event, handler, false);
    } else if (ele.detachEvent) {
      ele.detachEvent("on" + event, handler);
    } else {
      ele["on" + event] = null;
    }
  }
};

$(document).ready(function() {
  page.init();
});
