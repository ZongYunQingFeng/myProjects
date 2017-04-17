/*============= banner图 ===============*/
$(function(){
	var list = $(".m_slide_list"),
	       liList = $(".m_slide_list li"),
	       cur = $(".m_slide_cur ul"),
	       curBox = $(".m_slide_cur"),
	       bodyWidth = $("body").width(),//banner的显示宽度
	       curIndex = 0;
	
	for(var i=0;i<liList.length;i++){
		cur.append("<li></li>");
	}
	/*-----------让banner图显示中间位置--------------*/
	liList.each(function(index){
		liList.eq(index).css("background","url("+liList.eq(index).attr("_src")+") center");
	});
	/*---------初始化banner图------------*/
	liList.eq(curIndex).css("opacity","1");
	/*---------初始化按钮------------*/
	var curList = cur.find("li");
	curList.eq(curIndex).addClass("m_cur_on");

	/*-------------------按钮点击------------*/
	curList.click(function(){
		var index = $(this).index();
		if(index != curIndex){
			curList.removeClass("m_cur_on").eq(index).addClass("m_cur_on");
			liList.eq(curIndex).stop().animate({
				"opacity":0
			},1500);
			liList.eq(index).stop().animate({
				"opacity":1
			},1500);
			curIndex = index;
		}
	});
	function slidePrev(curIndex){
		var index = curIndex-1;
		if(curIndex == 0){
			index = liList.length-1;
		} 
		bannerSlide(curIndex, index);
		return index;
	}
	function slideNext(curIndex){
		var index = curIndex+1;
		if(curIndex == liList.length-1){
			index = 0;
		} 
		bannerSlide(curIndex, index);
		return index;
	}
	function bannerSlide(curIndex, index){
		curList.removeClass("m_cur_on").eq(index).addClass("m_cur_on");
		liList.eq(curIndex).stop().animate({
			"opacity":0
		},1500);
		liList.eq(index).stop().animate({
			"opacity":1
		},1500);
	}

	/*----------自动切换------------*/
	var wrapper = $(".m_slide_wrapper"),
	       timeLock;
	function start(){
		timeLock = setInterval(function(){
       			 curIndex = slideNext(curIndex);
	    	},5000)
	}
	start();
	wrapper.hover(
		function(){
			clearInterval(timeLock);
		},
		function(){
			start();
		}
	);
});

/*============ 线性进度条 ============*/
$(function(){
	jdt($(".m_index_jd"));
});
function jdt($obj){
	$obj.map(function(){
	    	var num=$(this).siblings('em').attr("probar"),
		        timeid;
	    	var str = "progres",
	    	        len = num.length,
	    	        //nuu = num.substr(len-2,2),
	        	        i=0;
	    	var that=$(this).children('span');
	    	var offsetTop=$(this).offset().top-550,
	    	        fn;
	    
		that.css("width",num+'%');

		$(window).bind("scroll",fn=function(){
			
			if($(window).scrollTop()>offsetTop){
				$(window).unbind("scroll",fn)
				timeid=setInterval(function(){
					if(i<=num){
				        		that.css("width",i+'%');
				       	 	//that.parent().siblings('em').text(i+'.'+nuu+"%");
				       	 	that.parent().siblings('em').text(i+"%");
				        		i++;
					}else{
				        		clearInterval(timeid);
					}
				},15);
			}
		});	
	});
}

/*============ 按钮点击滚动 ============*/
$(function(){
	objScroll($(".m_scroll1"), prev=$(".m_prev1"), $(".m_next1"), 4);
	objScroll($(".m_scroll2"), prev=$(".m_prev2"), $(".m_next2"), 4);
});
function objScroll($ul, $prev, $next, x){
	var pic=$ul.children("li"),
		len=pic.length,
		margin=parseInt(pic.css("margin-right")),
		width=pic.eq(0).outerWidth()+margin,
		n=len/x,
		i=0;

	$next.click(function(){
		if(n>1){
			if(!$ul.is(":animated")){
				if(i<n-1){
					$ul.animate({"left":"-="+width*x},500);
					i++;
					prev.removeClass("click");
					if (i>n-1) {
						$(this).addClass("click");
					};
				}
			}
		}
	})
	$prev.click(function(){
		if(i>0){
			if(!$ul.is(":animated")){
				$ul.animate({"left":"+="+width*x},500);
				i--;
				$next.removeClass("click");
				if (i==0) {
					$(this).addClass("click");
				};
			}
		}
	});	
}

$(function(){
	$(".m_index_box5 ul").each(function(index,it){
		$(it).find("li").last().css("border","none");
	});
	$(".m_check").click(function(){
		$(this).find("i").toggleClass("on");
	});
	$(".m_user_zl>div").last().css("border","none");
});

/*============ 返回顶部 ===========*/
$(function(){
	var $goTop = $(".top"),
	        topHeight = 0;
	$goTop.hide();
	$(window).scroll(function(){
		if($(window).scrollTop()>0){
			$goTop.show();
		}
		topHeight = $(window).scrollTop();
	});

	$goTop.click(function(){
		var time = setInterval(function(){
			if($(window).scrollTop() > 0){
				var h = 0;
				h = Math.ceil(0.1*(topHeight-h));
				$(window).scrollTop(topHeight-h);
			} else {
				$goTop.hide();
				clearInterval(time);
			}
		},10);
	});
});

/*=========== 选项卡 ===========*/
$(function(){
	var tabs = $(".m_tab");
	tabs.each(function(index,it){
		$(it).click(function(){
			$(".m_tabBox").hide().eq(index).show();
			tabs.removeClass("on").eq(index).addClass("on");
		});
	});
});

/*--------------输入框提示js---------------*/
$(function(){
	var box = $(".m_input_box"),
	       warm = $(".m_input_warm"),
	       text = $(".m_input_text");

	warm.each(function(index){
		warm.eq(index).click(function(){
			$(this).siblings(".m_input_text").focus();
			toggleClick($(this).siblings(".m_input_text"));
		});
	});

	text.each(function(index){
		toggleClick(text.eq(index));
	});
});

function toggleClick($text){
	$text.focusout(function(){
		if($text.val() == ""){
			$text.siblings(".m_input_warm").show();
		}
		$text.removeClass("m_input_textF");
	});
	$text.focus(function(){
		$text.siblings(".m_input_warm").hide();
		$text.addClass("m_input_textF");
	});
}

$(function(){
	$(".m_zc_close").click(function(){
		$(".m_mask").hide();
		$(".m_zc_tc").hide();
		$(".m_jsq").hide();
	});

	$(".m_jsq_open").click(function(){
		$(".m_jsq").show();
		$(".m_mask").show();
	});

	$(".m_sc_btn1").click(function(){
		$(".m_qd").show();
		$(".m_mask").show();
	});
	$(".m_qd_sure").click(function(){
		$(".m_qd").hide();
		$(".m_mask").hide();
	});
});

$(function(){
	var menuA = $(".m_user_ulB>li>a");
	$(".m_user_ulB .on").find("em").text("-");
	menuA.each(function(index, it){
		$(it).click(function(){
			menuA.siblings(".m_user_menuS").stop(false,true).slideUp();
			menuA.find("em").text("+");
			if($(it).siblings(".m_user_menuS").is(":hidden")){
				$(it).siblings(".m_user_menuS").stop(false,true).slideDown();
				$(it).find("em").text("-");
			}
		});
	});
});

/*================ 图片显示 ===============*/
$(function(){
	var curIndex = 0;
	$(".m_bdxq_imgWrapper a").each(function(index,it){
		$(it).click(function(){
			$(".m_mask").show();
			$(".m_img").show();

			var imgs = $(it).parents(".m_bdxq_imgWrapper").find("img");
			for(var i=0;i<6;i++){
				var src = imgs.eq(i).attr("src");
				$(".m_img_list").append("<li><span></span><img src='"+src+"'></li>");
			}
			var n = Math.floor((index+1)/6);
			        

			if((index+1)%6 == 0){
				x = 5
			} else {
				x = index-n*6;
			}

			banner($(".m_img_prev"), $(".m_img_next"), $(".m_img_wrapper"), $(".m_img_curBox"), $(".m_img_list"),x);
		});	
	});

	$(".m_img_close").click(function(){
		$(".m_mask").hide();
		$(".m_img").hide();
		$(".m_img_list li").remove();
		$(".curUl li").remove();
	});

	function banner ($prev, $next, $wrapper, $curBox, $imgList, x){

		var liWidth = $imgList.find("li").eq(0).width(),
	 	       curIndex = x,
		        liList = $imgList.find("li");

		/*---------- 初始化按钮 -----------*/
		for(var i=0;i<liList.length;i++){
			$curBox.find(".curUl").append("<li></li>");
		}
		var curlis = $curBox.find("li");
		curlis.eq(x).addClass("m_cur_on");
		$curBox.css("margin-left",-$curBox.width()/2);
		/*--------------- end -----------*/
		
		for(var i=0;i<x;i++){
			$imgList.css({"margin-left":"0"}).children().eq(0).appendTo($imgList);
		}

		$next.click(function(){
			nextSlide();
		});
		function nextSlide(){
			if(!$imgList.is(":animated")){
				$imgList.stop(true,false).animate({
					"margin-left":-liWidth
				},500, function(){
					$imgList.css({"margin-left":"0"}).children().eq(0).appendTo($imgList);
				});
			}
			if(curIndex < $imgList.find("li").length-1){
				curIndex++;
			} else {
				curIndex = 0;
			}
			curlis.removeClass("m_cur_on").eq(curIndex).addClass("m_cur_on");
			return curIndex;
		}
		$prev.click(function(){
			if(!$imgList.is(":animated")){
				$imgList.css({"margin-left":"0"}).children().last().prependTo($imgList);
				$imgList.stop(true,false).css("margin-left",-liWidth+"px").animate({"margin-left":0},500);
			}
			if(curIndex > 0){
				curIndex--;
			} else {
				curIndex = $imgList.find("li").length-1;
			}
			curlis.stop(true,false).removeClass("m_cur_on").eq(curIndex).addClass("m_cur_on");
		});

		curlis.each(function(index){
			curlis.eq(index).click(function(){
				var n = Math.abs(curIndex-index);
				if(curIndex>=index){
					if(!$imgList.is(":animated")){
						for(var i=0;i<n;i++){
							$imgList.css({"margin-left":"0"}).children().last().prependTo($imgList);
						}
						$imgList.stop(true,false).css("margin-left",-liWidth*n+"px").animate({"margin-left":0},500);
					}
				} else {
					if(!$imgList.is(":animated")){
						$imgList.stop(true,false).animate({
							"margin-left":-liWidth*n
						},500, function(){
							for(var i=0;i<n;i++){
								$imgList.css({"margin-left":"0"}).children().eq(0).appendTo($imgList);
							}
						});
					}
				}
				curlis.removeClass("m_cur_on").eq(index).addClass("m_cur_on");
				curIndex = index;
			});
		});
	}
});

