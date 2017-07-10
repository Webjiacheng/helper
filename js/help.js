$('#vedio_box li').on('mouseover',function(){
	$(this).find('div').css("display","block");
}).on('mouseout',function(){
	$(this).find('div').css("display","none");
})