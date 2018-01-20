/**
 * @Author: jeCyu
 * @Date: 2017-12-02 2:08:51 pm 
 * @Modified By: jeCyu 
 * @Last Modified time: 2017-12-07 6:41:44 pm 
 */
// 逻辑
// 1.倒计时
// 2.去登陆

'use strict';

var page = {

    init: function () {
        this.onload();
        this.bindEvent();
    },
    onload: function () {
        // 初始化
        $('.form-1').show()
            .siblings('.form').hide();
        $('.item-step-1').addClass('active')
            .siblings('.mod-sub-item').removeClass('.active');
    },
    // 绑定事件 
    bindEvent: function () {
        // 缓存page对象
        var _this = this;

        // 弹出登陆框
        $('#toLogin').click(function () {
            $('.modal').show();
            $('#passwordReset_Modal').hide();
        });
       
        var countdate = 5;
        // update the countdown every 1 second
        var timer = setInterval(function(){
            $('.countdown').html(countdate);
            // 时间倒数完毕，弹出登录框
            if (countdate < 0) {
                clearInterval(timer);
                $('.modal').show();
                $('#passwordReset_Modal').hide();
            }
            countdate--;            
        },1000);
    },

   
}

$(document).ready(
    page.init()
);