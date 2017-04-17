// JavaScript Document
$(".ly_regwrap input,.ly_passwordbox input,.ly_openuser input").each(function(){
	$(this).focus(function(){
		$(this).parent().parent().addClass("focusbox");
	}).blur(function(){
		$(this).parent().parent().removeClass("focusbox");
	})
})
//进度条
	$(".progress").map(function(){
		var _this = this,
			leftBar = $(_this).find(".left-bar").children(".half-circle"),
			rightBar = $(_this).find(".right-bar").children(".half-circle"),
			text = $(_this).find(".plustxt"),
			num = $(_this).attr("pro"),
			timeid,
			i = 0,
			edg = -3.6;
		timeid = setInterval(function(){
			if(num <= 50){
				if(i < num){
					leftBar.css("transform","rotate("+edg*i+"deg)");
					text.text(i+"%");
					i++;
				}else{
					leftBar.css("transform","rotate("+edg*num+"deg)");
					text.text(num+"%");
					clearInterval(timeid);
				}
			}else{
				if(i <= 50){
					leftBar.css("transform","rotate("+edg*i+"deg)");
					text.text(i+"%");
					i++;
				}else if(i > 50 && i < num){
					leftBar.css("transform","rotate("+edg*50+"deg)");
					rightBar.css("transform","rotate("+edg*(i-50)+"deg)");
					text.text(i+"%");
					i++;
				}else{
					rightBar.css("transform","rotate("+edg*(num-50)+"deg)");
					text.text(num+"%");
					clearInterval(timeid);
				}
			}
		},30);
	})
/*======我要理财=====*/
$(".ly_myselect").click(function(e){
	$(this).children("ul").slideDown();
	e.stopPropagation();
})
$(".ly_myselect li").each(function(){
	$(this).click(function(e){	
		$(this).parent().prev().prev().text($(this).text())
		$(this).parent().slideUp();
		e.stopPropagation();
	})
})
$("body").click(function(){
	$(".ly_myselect ul").slideUp();
})
/*==========*/
borrowset('ly_borrowset','li')
function borrowset(icoclass,li){

	$("." +icoclass +" "+li).each(function(){
	$(this).mousedown(function(){
	$("." +icoclass +"  div").hide();
	
	 if($(this).children().children('i').hasClass("icoshow"))
	 {$("." +icoclass +"  i").removeClass("icoshow");
		$(this).children().children('i').removeClass("icoshow");
		$(this).next("div").hide();
	}
	else{
		$("." +icoclass +"  i").removeClass("icoshow");
		$(this).children().children('i').addClass("icoshow");
		$(this).next("div").show();
		}
	})
	})
}
/*====9.2新增===*/
$(function(){
	$(".ly-regbox-ibox").click(function(){
		if($(this).next("div").is(":hidden"))
		{
			$(this).next("div").slideDown();
			$(this).find("i").addClass("iready-box");
		}else{
			$(this).next("div").slideUp();
			$(this).find("i").removeClass("iready-box");
		}
	})
})
$(function(){
	$(".ly_myselbox li").each(function(){
		$(this).click(function(){
			$(".ly_myselbox li").removeClass("myselshow");
		
			if($(this).find("i").hasClass("fast"))
			{
				$(this).addClass("myselshow");
				$(this).find("i").removeClass("fast")
				$(this).find("i").addClass("second")
				
			}else{
				
			 	if($(this).find("i").hasClass("second"))
			 	{
			 		$(this).find("i").removeClass("second")
					$(this).removeClass("myselshow");
			 	}else{
					$(this).addClass("myselshow");
					$(this).find("i").removeClass("second");
					$(this).find("i").addClass("fast");
			 		
					
			 	}
			}
		})
	})
})
function windivmax(idclassbox,id_class,id_close)
{
	var $w=$(window).width(),
	 $h=$(window).height(),
	  $H=$(document).height(),
	  $mw=$("."+id_class).width(),
	 $mh=$("."+id_class).height(),
	 strtop=($h-$mh)/2,
	 strleft=($w-$mw)/2;
	$("."+idclassbox).css("height",$H+'px').show();
	 $("."+id_class).css("left",strleft+'px').css("top",strtop+'px').show();
	 $("."+id_close).click(function(){
		$("."+id_class).hide();
		$("."+idclassbox).hide();
		$(".windivlist>li").hide();
		$(".windivlist>li").eq(0).show();
	})

}
$(function(){
	$(".ly_borrowbnt").click(function(){
		windivmax("windivbox","windivwrap","winclose")
	})
	
})
$(function(){
	var streq=	$(".windivlist>li");
	streq.eq(0).show();
	streq.eq(0).click(function(){
		if(streq.eq(1).is(":hidden")){
		streq.show();
		}else{
			streq.hide();
			streq.eq(0).show();
			}
	})
	
})
$(function(){
	$(".ly_bankadd").click(function(){
		var stringbank="<ul><li> <div class=\"ly_bankdiv\"> <i>新卡开户行</i><input type=\"text\" placeholder=\"请输入开户行\" /></div> </li>"
                stringbank+="<li><div class=\"ly_bankdiv\"><i>新卡支行</i><input type=\"text\" placeholder=\"请输入新卡支行\" /> </div></li>"
            stringbank+="<li><div class=\"ly_bankdiv\"><i>新卡号</i><input type=\"text\" placeholder=\"请输入新卡号\" /></div></li></ul>"
		$(".ly_bankli").append(stringbank);
	})
})
$(function(){
	$(".iselbank").click(function(){
		if($(".ly_imgboxsrc").is(":hidden"))
		{
			$(".ly_imgboxsrc").slideDown();
			
			
		}else
		{
			$(".ly_imgboxsrc").slideUp();
			
		}
	})
})