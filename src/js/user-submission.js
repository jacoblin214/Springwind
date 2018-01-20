/**
 * @Author: jeCyu
 * @Date: 2017-12-02 5:34:58 pm 
 * @Modified By: jeCyu 
 * @Last Modified time: 2017-12-02 5:57:33 pm 
 */

'use strict';

var page = {

    init: function () {
        this.onload();
        this.bindEvent();
    },
    onload: function () {
    },
    // 绑定事件 
    bindEvent: function () {
        // 缓存page对象
        var _this = this;
        // 点击浏览按钮，触发单击input[id=attachfile]获取附件，回填路径
        $('#browser').on('click', function() {
            $('input[id=attachfile]').click()
                .on('change', function() {
                    $('#filepath').val($(this).val());
            });

        });
    },

    // 表单验证
    valia: function () {

    },
    // 提交表单
    submit: function () {
        var _this = this;
        var formData = {
            theme: $.trim($('#theme').val()),
            author: $.trim($('#author').val()),
            link: $.trim($('#link').val()),
            source: $.trim($('#source').val()),
            postContent: $.trim($('#postContent').val())
        }
    },
}

$(document).ready(
    page.init()
);