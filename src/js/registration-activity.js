/**
 * @Author: jeCyu
 * @Date: 2017-12-02 2:08:51 pm 
 * @Modified By: jeCyu 
 * @Last Modified time: 2017-12-02 3:24:44 pm 
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

    },

    // 表单验证
    valia: function () {

    },
    // 提交表单
    submit: function () {
        var _this = this;
        var formData = {
            name: $.trim($('#name').val()),
            age: $.trim($('#age').val()),
            sex: $.trim($('#sex').val()),
            occupation: $.trim($('#occupation').val()),
            email: $.trim($('#email').val()),
            qq: $.trim($('#qq').val()),
            address: $.trim($('#address').val()),
            msn: $.trim($('#msn').val()),
            character: $.trim($('#character').val())
        }
    },
}

$(document).ready(
    page.init()
);