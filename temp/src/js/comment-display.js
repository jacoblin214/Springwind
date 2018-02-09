/**
 * @Author: jecyu
 * @Date: 2017-12-04 11:03:40 am
 * @Modified By: jeCyu
 * @Last Modified time: 2017-12-05 6:23:03 pm
 */

"use strict";

var page = {
  init: function() {
    this.onload();
    this.bindEvent();
  },
  onload: function() {},
  // 绑定事件
  bindEvent: function() {
    // 缓存page对象
    var _this = this;
    // 获取规定输入字数的maxlength值
    var $maxlength = $("#postContent").attr("maxlength");

    // 用户输入文字，实时显示剩余字数
    $("#postContent").on("input", function() {
      var remainWords = $maxlength - $("#postContent").val().length;
      $(".word-remain").text(remainWords);
    });

    // 点击评论，渲染评论入列表中
    $("#submit").on("click", function() {
      // 内容不为空
      if (!!$("#postContent").val().length) {
        _this.submit();
      }
    });
  },

  // 表单验证
  validate: function() {},

  // 提交评论
  submit: function() {
    var _this = this;
    var formData = {
      postContent: $.trim($("#postContent").val())
    };
    var commentHtml = "";
    // 当前时间
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    var time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    // 个位数时，添加0占位
    if (dd < 10) {
      dd = "0" + dd;
    }

    if (mm < 10) {
      mm = "0" + mm;
    }

    today = yyyy + "-" + mm + "-" + dd + " " + time;

    commentHtml = '<li class="comment-item">';
    commentHtml += '<h4 class="title">';
    commentHtml += '<span class="comment-time">' + today + "</span>";
    commentHtml +=
      '<span class="comment-person">' + " " + "网心空：" + "</span>";
    commentHtml += "</h4>";
    commentHtml += '<p class="content">' + formData.postContent + "</p>";
    commentHtml += "</li>";

    $(".comments-list").append(commentHtml);
  }
};

$(document).ready(page.init());
