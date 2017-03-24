$(function(){
$(".insuranceBOX1, .insuranceBOX2").click(function() {
return false;	
	})
});

$(function(){
/*判斷手機系統是Android還是IOS*/
if(navigator.userAgent.match(/android/i)){
	//如果是Android的話
	$("buttonbar").attr("style","display:block")
}else if(navigator.userAgent.match(/(iphone|ipad|ipod);?/i)){
	//如果是IOS的話
	$("buttonbar").attr("style","display:none")
}else if(navigator.userAgent.match("Chrome")){
    //其他，電腦的瀏覽器
	$(buttonbar).attr("style","display:block")
}else if(navigator.userAgent.match("Safari")){
    //其他，電腦的瀏覽器
	$(buttonbar).attr("style","display:none")
}
});
