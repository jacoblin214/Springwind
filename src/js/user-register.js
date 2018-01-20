/**
 * @Author: jeCyu
 * @Date: 2017-12-02 2:08:51 pm 
 * @Modified By: jeCyu 
 * @Last Modified time: 2017-12-06 6:32:42 pm 
 */
// 逻辑
// 1.显示隐藏密码

'use strict';

var page = {

    init: function () {
        this.onload();
        this.bindEvent();
    },
    onload: function () {
        // 初始化，密码不可见
        $('.show-hide i').addClass('show icon-eye');
    },
    // 绑定事件 
    bindEvent: function () {
        // 缓存page对象
        var _this = this;

        // 密码显示隐藏点击事件
        $('.show-hide i').click(function (e) {
            // 缓存当前单击对象
            var $this = $(this);

            if ($this.hasClass('show')) {
                $('.show-hide i').removeClass('show icon-eye')
                    .addClass('hide icon-eye1');
                $('#password').attr('type', 'text');
            } else {
                $('.show-hide i').removeClass('hide icon-eye1')
                    .addClass('show icon-eye');
                $('#password').attr('type', 'password');
            }

        });

        // 当点击提交时，自动把密码隐藏
        $('form input[type="submit"]').on('click', function () {
            $('.show-hide i').removeClass('hide icon-eye1')
                .addClass('show icon-eye');
            $('#password').attr('type', 'password');
        })


    },

    // 表单验证
    valia: function () {

    },
    // 提交表单
    submit: function () {
        var _this = this;
        var formData = {
            name: $.trim($('#name').val()),
            datebirth: $.trim($('#dateBirth').val()),
            age: $.trim($('#age').val()),
            sex: $.trim($('#sex').val()),
            school: $.trim($('#school').val()),
            education: $.trim($('#education').val()),
            profession: $.trim($('#profession').val()),
            dateAdmission: $.trim($('#dateAdmission').val()),
            email: $.trim($('#email').val()),
            qq: $.trim($('#qq').val()),
            address: $.trim($('#address').val()),
            msn: $.trim($('#msn').val()),
            character: $.trim($('#character').val()),
            resume: $.trim($('#resume').val()),
        }
    }
}

$(document).ready(
    page.init()
);