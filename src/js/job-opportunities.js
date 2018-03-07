/*
 * @Author: Jecyu 
 * @Date: 2018-03-06 17:39:13 
 * @Last Modified by: Jecyu
 * @Last Modified time: 2018-03-07 14:58:29
 */

"use strict";

var cur_page = {
  data: {
    jobs: [
      {
        id: 1,
        title: "活动策划（实习）",
        money: "4k-7k",
        date: "2017-06-15"
      },
      {
        id: 1,
        title: "活动策划（实习）",
        money: "4k-7k",
        date: "2017-06-15"
      },
      {
        id: 1,
        title: "活动策划（实习）",
        money: "4k-7k",
        date: "2017-06-15"
      },
      {
        id: 1,
        title: "活动策划（实习）",
        money: "4k-7k",
        date: "2017-06-15"
      }
    ]
  },
  init: function() {
    this.onload();
    this.bindEvent();
  },
  onload: function() {
    this.prepareDeliver();
  },
  // 绑定事件
  bindEvent: function() {
    // 缓存page对象
    var _this = this;

    // job切换点击事件
    $(".job-item__summary").click(function(e) {
      $(this)
        .next()
        .toggle(500);
    });

    // 分页
    $("#page").paging({
      pageNo: 1,
      totalPage: 9,
      totalSize: 300,
      callback: function(num) {
        // alert(num)
      }
    });
  },
  /**
   * 投递的准备
   */
  prepareDeliver: function() {
    var _this = this;
    var deliver_modal = $("#deliver-modal")[0];
    // 这里要传入 DOM 对象，非 jQuery对象
    var layer = createFloatLayer(deliver_modal);

    // 登录状态
    var is_login = false;
    var has_resumed = false;
    // 取得浮出层标题
    var $deliver_modal_title = $(".deliver-modal__title .deliver-modal__link");
    // 取得浮出层底部
    var $deliver_modal_footer = $(".js-deliver-modal__footer");
    // 声明按钮的模板
    var btn_html = "";

    $(".job-item__btn").click(function(event) {
      event.stopPropagation();

      // 弹出框
      // 1.未登录
      if (is_login === false) {
        // 设置标题
        $deliver_modal_title
          .text("请登录后再投递，还没有账号，立即注册")
          .attr("href", "###");
        btn_html =
          '<a href="###" class="btn deliver-modal__btn">登录</a>' +
          '<a href="###" class="btn deliver-modal__btn">注册' +
          "</a>";
        $deliver_modal_footer.html(btn_html);
      }
      // 2.已登录
      if (is_login === true) {
        if (has_resumed) {
          // 2.1 有简历
          // 设置标题
          $deliver_modal_title
            .text("您正在向“活动策划”职位投递简历")
            .attr("href", "###");
          btn_html =
            '<a href="###" class="btn deliver-modal__btn">登录</a>' +
            '<a href="###" class="btn deliver-modal__btn">注册' +
            "</a>";
          $deliver_modal_footer.html(btn_html);
        } else {
          // 2.2 无简历
          // 设置标题
          $deliver_modal_title
            .text("您还没有可投递的简历，立即编辑")
            .attr("href", "###");
          btn_html =
            '<a href="###" class="btn deliver-modal__btn">查看简历</a>' +
            '<a href="###" class="btn deliver-modal__btn">投递' +
            "</a>";
          $deliver_modal_footer.html(btn_html);
          // 设置按钮
          btn_html =
            '<a href="###" class="btn deliver-modal__btn">编辑简历</a>';
          $deliver_modal_footer.html(btn_html);
        }
      }
      layer.show();
    });
  }
};

$(document).ready(function() {
  cur_page.init();
});
