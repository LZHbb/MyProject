var jsUtil = {
	// 锚标记的滑动效果
	// t为上下调整间距，可为正为负
	mao:function(id,t){
		var p = 0;
		if(t){p = t;}
		$("html,body").animate({scrollTop:$("#"+id).offset().top+p},500);
	}
}