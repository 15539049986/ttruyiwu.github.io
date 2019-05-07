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
	$(".b,.b1,.b2").hover(function(){
		$(this).children("p").children("img").css({'transform':'scale(1.2)',"transition":' all 1s'})
	},function(){
		$(this).children("p").children("img").css({'transform':'scale(1)',"transition":' all 1s'})
	})
	$(".hz").hover(function(){
		$(this).children("p").children("img").css({'transform':'scale(1.2)',"transition":' all 1s'})
		$(this).children(".ck").css({'transform':'translateX( 200%)',"transition":' all 1s'})
	},function(){
		$(this).children("p").children("img").css({'transform':'scale(1)',"transition":' all 1s'})
		$(this).children(".ck").css({'transform':'translateX( 0)',"transition":' all 1s'})
	})
	$(".hzz").hover(function(){
		$(this).children("p").children("img").css({'transform':'scale(1.2)',"transition":' all 1s'})
		$(this).children(".ck").css({'transform':'translateX( 100%)',"transition":' all 0.5s'})
	},function(){
		$(this).children("p").children("img").css({'transform':'scale(1)',"transition":' all 1s'})
		$(this).children(".ck").css({'transform':'translateX( 0)',"transition":' all 0.5s'})
	})
	$(".hz2").hover(function(){
		$(this).children("p").children("img").css({'transform':'scale(1.2)',"transition":' all 1s'})
		$(this).children(".ck1").css({'transform':'translateX( 100%)',"transition":' all 1s'})
	},function(){
		$(this).children("p").children("img").css({'transform':'scale(1)',"transition":' all 1s'})
		$(this).children(".ck1").css({'transform':'translateX( 0)',"transition":' all 1s'})
	})
	$(".hzz2").hover(function(){
		$(this).children("p").children("img").css({'transform':'scale(1.2)',"transition":' all 1s'})
		$(this).children(".ck1").css({'transform':'translateX( 200%)',"transition":' all 0.5s'})
	},function(){
		$(this).children("p").children("img").css({'transform':'scale(1)',"transition":' all 1s'})
		$(this).children(".ck1").css({'transform':'translateX( 0)',"transition":' all 0.5s'})
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
        