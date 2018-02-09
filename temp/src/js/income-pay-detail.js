// 实现日期排序
// 1.单击date-icon，判断当前状态：a: up b：down
// 2.默认为降序，假如当前状态为up，当用户点击该按钮，则更改图标激活状态
// 1.获取当前后端所有明细收支所有条目下分别存为一个对象，并分配ID
// 2.把所有条目push进数组里，然后通过日期（年-月-日）进行排序后，存进新的数组
// 3.获取数组里排好序的项目，进行渲染(可以考虑用js加动画缓慢过渡)
"use strict";

var page = {
  // 存储排序后的数组
  data: {},
  init: function() {
    this.bindEvent();
  },

  // 绑定事件
  bindEvent: function() {
    // 缓存page对象
    var _this = this;
    // 排序点击事件
    $("#sort-date i").on("click", function(e) {
      // 模拟从后端获取到的json数据

      var rows = [
        {
          date: "2016/01/30",
          name: "晨农文化",
          type: "人民币",
          unit: "5000"
        },
        {
          date: "2004/08/27",
          name: "张冬梅",
          type: "人民币",
          unit: "10, 000"
        },
        {
          date: "2015/08/27",
          name: "隋双戈、刘吉华",
          type: "电子产品",
          unit: "1"
        },
        {
          date: "2005/08/27",
          name: "深圳竹海心理咨询有限公司 常州金色百灵心理咨询有限公司",
          type: "优惠政策",
          unit: "10"
        },
        {
          date: "2016/08/27",
          name: "深圳市亚太典当行有限公司",
          type: "礼品",
          unit: "90"
        },
        {
          date: "2016/08/27",
          name: "助可一丰摄影设计公司",
          type: "资助",
          unit: "免费设计宣传资料"
        }
      ];

      // 缓存当前单击对象
      var $this = $(this);
      if ($this.hasClass("active")) {
        return;
      } else {
        $this
          .addClass("active")
          .siblings("i")
          .removeClass("active");
        _this.data.newArray = _this.sortDate($this.attr("id"), rows);
        // console.log(_this.data.newArray );
        _this.renderHtml(_this.data.newArray);
      }
    });

    // 分页
    $("#page").paging({
      pageNo: 1,
      totalPage: 9,
      totalSize: 300,
      callback: function(num) {
        // alert(num)
      }
    });
  },

  /**
   * 日期排序
   * @param {string} type
   * @param {string} array 排序数组
   * @return {array} 返回新的对象数组
   */
  sortDate: function(type, array) {
    // 升序
    if (type === "asc") {
      array.sort(function(a, b) {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      });
    }

    // 降序
    if (type === "desc") {
      array.sort(function(a, b) {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
    }

    return array;
  },
  renderHtml: function(array) {
    var _this = this;
    var listHtml = "";

    for (var i = 0, len = array.length; i < len; i++) {
      (listHtml += '<tr class="inout-item">'),
        (listHtml += "<td>" + array[i].date + "</td>");
      listHtml += "<td>" + array[i].name + "</td>";
      listHtml += "<td>" + array[i].type + "</td>";
      listHtml += '<td class="cell-unit">' + array[i].unit + "</td>";
      listHtml += "</tr>";
    }

    $(".tbody").html(listHtml);
  },
  // 加载列表
  loadList: function() {}
};

$(document).ready(page.init());
