/**
 * @Author: jecyu
 * @Date: 2017-12-05 3:06:45 pm 
 * @Modified By: jeCyu 
 * @Last Modified time: 2017-12-05 3:06:46 pm 
 */
$(document).ready(function(){
	$('#changeDiv_1').mouseover(function(){
		$('#changeDiv_1').css("background-color","#c7c7c7");
		$('#ig1').attr("src","../images/changeDiv_1.png");
		$('#changeDiv_1_1').css("color","white");
	});
	$('#changeDiv_1').mouseout(function(){
		$('#changeDiv_1').css("background-color","white");
		$('#ig1').attr("src","../images/changeDiv1.png");
		$('#changeDiv_1_1').css("color","#c7c7c7");

	});
})