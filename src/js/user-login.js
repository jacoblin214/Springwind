/**
 * @Author: jecyu
 * @Date: 2017-12-04 6:29:18 pm 
 * @Modified By: jeCyu 
 * @Last Modified time: 2017-12-05 10:00:30 am 
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

        // 点击“x”，清空用户名
        $('.reset').on('click', function () {
            $('#username').val('').focus();
        });
    },

    // 表单验证
    validate: function () {

    }

}

$(document).ready(
    page.init()
);