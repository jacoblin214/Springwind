/**
 * @Author: jecyu
 * @Date: 2017-12-08 2:16:33 pm
 * @Modified By: jeCyu
 * @Last Modified time: 2017-12-08 2:16:34 pm
 */

//分页
$("#page").paging({
  pageNo: 1,
  totalPage: 9,
  totalSize: 300,
  callback: function(num) {
    // alert(num)
  }
});
