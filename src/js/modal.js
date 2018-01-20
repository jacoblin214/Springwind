/**
 * @Author: jecyu
 * @Date: 2017-12-05 10:09:11 am 
 * @Modified By: jecyu 
 * @Last Modified time: 2017-12-07 1:58:06 pm 
 */

var page = {
    init: function () {
        this.onload();
    },
    onload: function () {
        this.bindEvent();
    },
    bindEvent: function () {
        var _this = this;
        _this.resetInput();

        // 点击登录modal弹出层
        $('#login').click(function () {
            _this.showModal();
            $('#passwordReset_Modal').hide();
            console.log('modal');
        });

        // 点击Modal框之外或“close”关闭Modal
        $('.modal').on('click', function () {
            _this.hideModal();
        });
        $('.close').on('click', function () {
            _this.hideModal();
        });
        $('.modal .modal-dialog').click(function (e) {
            e.stopPropagation();
        })

        // 点击登录遇到问题
        $('#loginBarrier').click(function () {
            $('#login_Modal').hide();
            // $('#passwordReset_Modal').show();
            $(window).location.href = '../html/find-password.html';
        });
    },
    showModal: function () {
        $('.modal').show();
    },
    hideModal: function () {
        $('.modal').hide();
    },
    /**
     * 清空用户输入值
     */
    resetInput: function () {
        // 点击“x”，清空用户名
        $('#login_Modal .reset').click(function () {
            $('#login_Modal #mod-username').val('').focus();
        })
        $('#passwordReset_Modal .reset').click(function () {
            $('#passwordReset_Modal #mod-username').val('').focus();
        })
    }
}

// 立即执行
page.init();

