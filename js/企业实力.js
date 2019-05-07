$(function(){
	$(".nav-ul>ul>li").mouseenter(function(){
		$(this).children("div").show().end().siblings().children("div").hide();
	})
	$(".dian").click(function(){
		$(".dxia").show().animate({width:"300px"},500)
	})
	$(".sp1").click(function(){
		$(".dxia").hide().animate({width:"0px"},500)
	})
	$(".t").hover(function(){
		$(this).children(".tu").children("img").css({"transform":"rotate(360deg)","transition":' all 1s'})
	},function(){
		$(this).children(".tu").children("img").css({"transform":"rotate(-360deg)","transition":' all 1s'})
	})
	$(".img1").hover(function(){
		$(".img").show();
	},function(){
		$(".img").hide();
	})
	$(document).scroll(function(){
		var src=$(document).scrollTop();
		if(src>=35){
			$(".fan").show();				
		}else{
			$(".fan").hide()
		}
	})
	$(".fan").click(function(){
		$(document).scrollTop(0)
	})
})
