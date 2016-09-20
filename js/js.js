//点击登录跳转首页
$("#dl").on("click",function(){
	$(".lead").hide();
})
//点击导航出现相应的页面
$("#two").hide();
$("#three").hide();
$("#four").hide();
$("#five").hide();
$(".nav").on("click","a",function(e){
	e.preventDefault();
	var id=$(this).attr("href");
	$(id).css({
		"-webkit-transform":"translateX(0)",
		"-webkit-transition":"all 2s"
	}).siblings().css({
		"-webkit-transform":"translateX(100%)",
		"-webkit-transition":"all 2s"
	});
	$(this).parent().addClass("xian").siblings().removeClass("xian");
	
})
$(".buy_nav").on("click","a",function(e){
	e.preventDefault();
	var id=$(this).attr("href");
	$(id).css({
		"-webkit-transform":"translateX(0)",
		/*"-webkit-transition":"all 2s"*/
	}).siblings().css({
		"-webkit-transform":"translateX(100%)",
		/*"-webkit-transition":"all 2s"*/
	});
	$(this).parent().addClass("xians").siblings().removeClass("xians");
	
})
$("#nav").on("click","a",function(e){
	e.preventDefault();
	var id=$(this).attr("href");
	$(id).css({
		"-webkit-transform":"translateX(0)",
		/*"-webkit-transition":"all 2s"*/
	}).siblings().css({
		"-webkit-transform":"translateX(100%)",
		/*"-webkit-transition":"all 2s"*/
	});
	$(this).css({
		"color":"#61b11f"
	}).siblings().css({
		"color":"#ccc"
	})
	if(id=="#shouye"){
		$("#one").show();
		$("#two").hide();
		$("#three").hide();
		$("#four").hide();
		$("#five").hide();
	}
	else if(id=="#tea"){
		$("#two").show();
		$("#one").hide();
		$("#three").hide();
		$("#four").hide();
		$("#five").hide();
	}
	else if(id=="#buy"){
		$("#three").show();
		$("#one").hide();
		$("#two").hide();
		$("#four").hide();
		$("#five").hide();
	}
	else if(id=="#fabu"){
		$("#four").show();
		$("#three").hide();
		$("#one").hide();
		$("#two").hide();
		$(".footer").hide();
		$("#five").hide();
	}
	else if(id=="#my"){
		$("#five").show();
		$("#four").hide();
		$("#three").hide();
		$("#one").hide();
		$("#two").hide();
	}
})
$("#close").on("click",function(){
	$(".footer").show();
	$("#shouye").css({
		"-webkit-transform":"translateX(0)",
		/*"-webkit-transition":"all 2s"*/
	}).siblings().css({
		"-webkit-transform":"translateX(100%)",
		/*"-webkit-transition":"all 2s"*/
	});
	$("#nav a").eq(0).css({
		"color":"#61b11f"
	}).siblings().css({
		"color":"#ccc"
	})
	$("#one").show();
	$("#two").hide();
	$("#three").hide();
	$("#four").hide();
})
//点击设置
$("#set").on("click",function(){
	location.href="set.html"
})
//点击个人资料
$("#m").on("click",function(){
	location.href="m.html"
})
//点击返回 返回上一页
$("#return").on("click",function(){
	history.go(-1);
})
//点击我的地址
$("#address").on("click",function(){
	location.href="address.html"
})