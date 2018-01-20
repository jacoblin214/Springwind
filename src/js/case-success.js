
//分页
$("#page").paging({
    pageNo: 1,
    totalPage: 9,
    totalSize: 300,
    callback: function (num) {
        // alert(num)
    }
});

/*
// 模拟ajax数据
//参数为当前页
ajaxTest(1);

function ajaxTest(num) {
    $.ajax({
        url: "table.json",
        type: "get",
        data: {},
        dataType: "json",
        success: function(data) {
            console.log(data);
            //分页
            $("#page").paging({
                pageNo: num,
                totalPage: data.totalPage,
                totalSize: data.totalSize,
                callback: function(num) {
                    ajaxTest(num)
                }
            })
        }
    })
}
*/