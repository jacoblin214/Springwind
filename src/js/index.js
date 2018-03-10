/*
 * @Author: Jecyu 
 * @Date: 2018-03-10 10:11:20 
 * @Last Modified by: Jecyu
 * @Last Modified time: 2018-03-10 15:39:50
 */

("use strict");

var cur_page = {
  init: function() {
    this.onload();
    this.bindEvent();
  },
  onload: function() {},
  // 绑定事件
  bindEvent: function() {
    // 缓存page对象
    var _this = this;

    var swiper = new Swiper(".swiper-container", {
      slidesPerView: 5,
      // spaceBetween: 30,
      slidesPerGroup: 3,
      loop: true,
      // loopFillGroupWithBlank: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });

    // 检测滚动条，实现数字滚动动画
    // 隔2秒检测一次滚动
    var data_sectionH = $(".section-data").offset().top;
    $(window).scroll(function() {
      var windowH = $(window).scrollTop();
      if (data_sectionH <= windowH) {
        console.log(windowH);
        setTimeout(function() {
          _this.dataAnimation();
        }, 500);
      }
    });
  },
  /**
   * 数字滚动动画
   */
  dataAnimation: function() {
    var options = {
      useEasing: true,
      useGrouping: true,
      separator: ",",
      decimal: "."
    };

    var demo = new CountUp("data-item1", 0, 12, 0, 2.5, options);
    if (!demo.error) {
      demo.start();
    } else {
      console.error(demo3.error);
    }
    var demo2 = new CountUp("data-item2", 0, 100, 0, 2.5, options);
    if (!demo2.error) {
      demo2.start();
    } else {
      console.error(demo3.error);
    }
    var demo3 = new CountUp("data-item3", 0, 1000, 0, 2.5, options);
    if (!demo3.error) {
      demo3.start();
    } else {
      console.error(demo3.error);
    }
    var demo4 = new CountUp("data-item4", 0, 100000, 0, 2.5, options);
    if (!demo4.error) {
      demo4.start();
    } else {
      console.error(demo.error);
    }
  }
};

$(document).ready(function() {
  cur_page.init();
});
