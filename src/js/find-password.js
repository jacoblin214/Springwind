/**
 * @Author: jeCyu
 * @Date: 2017-12-02 2:08:51 pm 
 * @Modified By: jeCyu 
 * @Last Modified time: 2017-12-07 5:54:00 pm 
 */
// 逻辑
// 1.点击下一步，验证成功
// 2.判断当前所处状态

'use strict';

var page = {
    // 当前所处的步骤
    step: 1,
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

        // 绑定各个步骤按钮点击事件
        $('input[data-step="toSecurity"]').on('click', function() {
            $('.form-2').show()
                .siblings('.form').hide();
            $('.item-step-2').addClass('active')
                .siblings('.mod-sub-item').removeClass('active');
        });
        
        $('button[data-step="toAccount"]').on('click', function() {
            $('.form-1').show()
                .siblings('.form').hide();
            $('.item-step-1').addClass('active')
                .siblings('.mod-sub-item').removeClass('active');
        });
        
        $('button[data-step="toReset"]').on('click', function() {
            $('.form-3').show()
                .siblings('.form').hide();
            $('.item-step-3').addClass('active')
                .siblings('.mod-sub-item').removeClass('active');
        });

        // 确认修改
        $('input[data-step="confirmReset"]').on('click', function(){
            var newPassword     = $.trim($('#newPassword').val());
            var confirmPassword = $.trim($('#confirmPassword').val()); 

            if (_this.formValid.isValidLength(newPassword, 6, 14)) {
                console.log('pass');
                alert('')
            } 
            // 确认密码是否一致
            if (newPassword === confirmPassword) {
                window.location.href = '../html/reset-success.html';
            }
            
        });

    },

    // 表单验证
    formValid: {
        // 判断用户输入的字符长度是否满足要求
        isValidLength: function(str, len1, len2) {
            // 把32bit编码的中文字符的一个汉字转为两个英文字符
            str = str.replace(/[xd800-xffff]/g, 'a');
            // 把16bit字符串中的一个汉字转为两个英文字符
            str = str.replace(/[\u4000-\u9fa5]/g, 'aa');
            if (len1 <= str.length && str.length <= len2) {
                return true;
            }
            return false;
        },

        // 表单字段的验证，支持非空、手机号、邮箱的判断
        validate: function(str, type) {
            // trim可以转换非字符串为字符串，及去除字符串的前后空格
            var str = str.trim();
            // 非空验证
            if ('require' === type) {
                return !!str;
            }

            // 用户名验证，3~10个字符，只能是字母、数字、下划线
            if ('username' === type) {
                return /^[A-Za-z_0-9]{3,10}$/.test(str);
            }

            // 密码验证，6-15个字符，至少包括大写，小写，下划线，数字两种 
            if ('password' === type) {
                if (str.length < 6 || str.length > 16) {
                    return false;
                }

                // 包含上述四种以外的字符，返回false
                if (/[^A-Za-z_0-9]/.test(str)) {
                    return false;
                }

                // 如果全为大写、小写、下划线、数字,false
                if (/(^[a-z]+$)|(^[A-Z]+$)|(^_+$)|(^\d+$)/g.test(str)) {
                    return false;
                }

                return true;
            }

            // 手机号验证
            if ('phone' === type) {
                return /^1\d{10}$/.test(str);
            }
            // 邮箱格式验证
            if ('email' === type) {
                return /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(str);
            }
        }
    },
    // 提交表单
    submit: function () {
        var _this = this;
        var formData = {
            account: $.trim($('#account').val()),    
            newPassword: $.trim($('#newPassword').val())    
        }

        return formData;
    }
}

$(document).ready(
    page.init()
);