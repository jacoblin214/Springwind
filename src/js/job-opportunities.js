// 逻辑
// 1.点击职位，进行二级联动显示详细对应详细信息
// 2.表单字段验证（公有js文件）
// 3.textarea自定义滚动条
'use strict';

var page = {
    data: {
        jobs:
            [
                {
                    "id": 1,
                    "title": "活动策划（实习）",
                    "money": "4k-7k",
                    "date": "2017-06-15"
                },
                {
                    "id": 1,
                    "title": "活动策划（实习）",
                    "money": "4k-7k",
                    "date": "2017-06-15"
                },
                {
                    "id": 1,
                    "title": "活动策划（实习）",
                    "money": "4k-7k",
                    "date": "2017-06-15"
                },
                {
                    "id": 1,
                    "title": "活动策划（实习）",
                    "money": "4k-7k",
                    "date": "2017-06-15"
                }
            ]
    },
    init: function () {
        this.onload();
        this.bindEvent();             
    },
    onload: function() {     
        this.renderHtml(this.data.jobs);
    },
    // 绑定事件 
    bindEvent: function () {
        // 缓存page对象
        var _this = this;

        // job切换点击事件
        $('.job-item').click(function (e) {
            // 缓存当前单击对象
            var $this = $(this);
            var jobId = $this.attr('data-job');
            
            if ($this.hasClass('active')) {
                return;
            }
            
            else {
                $this.addClass('active').siblings('.job-item')
                .removeClass('active');
                // console.log($('#' + jobId));
                $('#'+ jobId).show().siblings('.job-content').hide();
            }

        })

    },
    
    renderHtml: function (array) {
        var _this = this;
        var listHtml = '';

        for (var i = 0, len = array.length; i < len; i++) {
            listHtml += "<li class=\"job-item\" data-job=\"job-" + array[i].id + "\">",
            listHtml += "<div class=\"job-info\">";
            listHtml += "<h3 class=\"title\">" + array[i].title + "</h3>";
            listHtml += "<p class=\"text\">月薪：" + "<span class=\"salary\">" + array[i].money  + "</span>"+ "</p>";
            listHtml += "</div>";
            listHtml += "<div class=\"job-deliver\">";
            listHtml += "<span class=\"release-time\">" + array[i].date + "发布</span>";
            listHtml += "<a class=\"deliver-btn\" href=\"###\">投递</a>";
            listHtml += "</div>";
            listHtml += "</li>";
        }
     
        $('.job-list').html(listHtml);
    },
    // 表单验证
    valia: function() {
        
    },
    // 提交表单
    submit: function() {
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
    },
}

$(document).ready(
    page.init()
);