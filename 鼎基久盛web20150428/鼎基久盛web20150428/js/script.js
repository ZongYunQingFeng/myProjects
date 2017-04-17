// JavaScript Document
$(function(){
	
	$(".l_closebtn").click(function(){
		$(this).parent().hide();
	});
})

// 标题悬浮
$(function(){
	
	$(window).scroll(function(){
		if($(this).scrollTop() > 0){
			$(".l_navbg").css({"position":"fixed","top":0});
			$(".l_navbg1").css({"position":"fixed","top":0});
			}
		else{
			$(".l_navbg").css({"position":"absolute","top":"30px"})	
			$(".l_navbg1").css({"position":"fixed","top":0});
			}	
		});	
	})
//选项卡
$(function(){
	
	$('.tab_menu ul li').click(function(){
		var  index = $(".tab_menu ul li").index(this);
		$(this).addClass("on").siblings().removeClass("on");
		$('.tab_content>div').eq(index).show().siblings().hide();
	});
});

//选项卡
$(function(){
	
	$('.p_xxkh3 strong').click(function(){
		var  index = $(".p_xxkh3 strong").index(this);
		$(this).addClass("clicked").siblings().removeClass("clicked");
		$('.tab_content>div').eq(index).show().siblings().hide();
	});
});

//login
$(function(){

	$("#jkje").focus(function(){
			 $(this).val("");
			 })
	$("#jkje").blur(function(){
			
			var $txt=$(this).val();
			if($txt==""){
				$(this).val("0.00");
				}
			})

	$("#account").focus(function(){
			 $(this).val("");
			 })
	$("#account").blur(function(){
			
			var $txt=$(this).val();
			if($txt==""){
				$(this).val("请输入登录帐号");
				}
			})

	$("#psw").focus(function(){
		 $("#password").hide();
		 })
	$("#psw").blur(function(){
		
		var $txt=$("#psw").val();
		if($txt==""){
			$("#password").show();
			}
		})	
	$("#yzm").focus(function(){
			 $(this).val("");
			 })
	$("#yzm").blur(function(){
			
			var $txt=$(this).val();
			if($txt==""){
				$(this).val("请输入验证码");
				}
			})	
			
//注册
		$("#user").focus(function(){
			 $(this).val("");
			 })
		$("#user").blur(function(){
			
			var $txt=$(this).val();
			if($txt==""){
				$(this).val("请输入您的手机号码");
				}
			})	
		$("#code").focus(function(){
			 $(this).val("");
			 })
		$("#code").blur(function(){
			
			var $txt=$(this).val();
			if($txt==""){
				$(this).val("请输入您获取的验证码");
				}
			})	
			
		$("#password2").focus(function(){
			 $("#psw2").hide();
			 })
		$("#password2").blur(function(){
			
			var $txt=$("#password2").val();
			if($txt==""){
				$("#psw2").show();
				}
			})	
			
		$("#confirmpassword").focus(function(){
			 $("#confirmpsw").hide();
			 })
		$("#confirmpassword").blur(function(){
			
			var $txt=$("#confirmpassword").val();
			if($txt==""){
				$("#confirmpsw").show();
				}
			})	

});



//p_债权详情 zhai quan xiang qing 
$(function(){
	
	$(".p_oddbg tbody").map(function(){
		$(this).find("tr:odd").css("background-color","#eee");
	})
})
// p--文本框获取焦点
$(function(){

	$(".p_text").bind({ 
         focus:function(){ 
		    if (this.value == this.defaultValue){
				this.value="";
				}
			},
		blur:function(){
			if (this.value == ""){ 
                this.value = this.defaultValue; 
            }
        } 
    }); 
})
//********ye-start**********

//忘记密码选项卡
$(function(){

	public_select($(".y_wjul>li"),$(".y_wjtab"),"click");
})

	function public_select(control,scrolldiv,classname){
		scrolldiv.eq(0).show();
		control.eq(0).addClass(classname);
		control.click(function(){
			$(this).addClass(classname).siblings().removeClass(classname);
			var index=$(this).index();
			scrolldiv.hide().eq(index).show();	
		})
	}

    $(function(){

        $(".s_zhrtabselect").click(function(){
            var index=$(".s_zhrtabselect").index(this);
            $(".s_zhrtabselect").removeClass("clicked").eq(index).addClass("clicked");
            $(".s_zhrjytab").hide().eq(index).show();
        });
    });

//主页轮滚放大
$(function(){
	/*未元素的首尾添加补白*/
	var $panels				= $('#slider .scrollContainer > li');
	var $parent=$panels.parent();//或许当前li的最近一级的父元素
	var $length=$panels.length;//获取指定length值
	var $first=$panels.eq(0).clone().addClass("panel cloned").attr("id",'panel_'+($length+1));//获取第一个元素并复制
	var $last=$panels.eq($length-1).clone().addClass("cloned").attr("id",'panel_0');;//获取最后一个元素并复制
	$parent.append($first);//将li序列中的第一个添加到ul元素中的最后一个  $("#slide02").scrollLeft(0);
	$parent.prepend($last);//将li序列中的最后一个添加到ul元素中的第一个
	var totalPanels			= $(".scrollContainer").children().size();//所有子元素的数字，滚动元素的个数 7
	var regWidth			= $(".panel").css("width");//获取li元素的宽度
	var regImgWidth			= $(".panel img").css("width");//获取其中图片的宽度
	var movingDistance	    = 282;//每次移动的距离
	var curWidth			= 321;//当前中间li的宽度为350px
	var curHeight         =577;//当前中间li的高度未312  
	var curImgWidth  =285;
	var curImgHeight  =531;
	var othersW           =282;//其他li的宽度
	var othersH           =531;//高度
	var othersImgW           =282;//其他li的宽度
	var othersImgH           =531;//高度
	var $panels				= $('#slider .scrollContainer > li');//此处作用是将复制进来补白的元素重新赋值
	var $container			= $('#slider .scrollContainer');
	$panels.css({'float' : 'left','position' : 'relative'});
	$("#slider").data("currentlyMoving", false);//是否正在运动中
	$container.css('width', (($panels[0].offsetWidth+25) * $panels.length) + 60 ).css('left','0');//计算容器的总的宽度 PS：25为margin值 offsetWidth
	var scroll = $('#slider .scroll').css('overflow', 'hidden');
	function returnToNormal(element) {//li元素返回到正常状态
		$(element).animate({ width: othersW,height: othersH}).find("img").animate({width:othersImgW,height:othersImgH});
	};
	function growBigger(element) {//当前元素之间变大
		$(element).addClass("current").animate({ width: curWidth,height:curHeight}).siblings().removeClass("current")
		.end().find("img").animate({width:curImgWidth,height:curImgHeight})
	}
	//direction true = right, false = left
	function change(direction) {
		//if not at the first or last panel
		if((direction && !(curPanel < totalPanels-2)) || (!direction && (curPanel <= 1))) {
			return false;
		}	
		//if not currently moving
		if (($("#slider").data("currentlyMoving") == false)) {
			$("#slider").data("currentlyMoving", true);
			var next         = direction ? curPanel + 1 : curPanel - 1;
			var leftValue    = $(".scrollContainer").css("left");
			var movement	 = direction ? parseFloat(leftValue, 10) - movingDistance : parseFloat(leftValue, 10) + movingDistance;
			$(".scrollContainer").stop().animate({"left": movement}, function() {
				$("#slider").data("currentlyMoving", false);
			});
			returnToNormal("#panel_"+curPanel);
			growBigger("#panel_"+next);
			curPanel = next;
			//remove all previous bound functions
			$("#panel_"+(curPanel+1)).unbind();	
			//go forward
			$("#panel_"+(curPanel+1)).click(function(){ change(true); });
			//remove all previous bound functions															
			$("#panel_"+(curPanel-1)).unbind();
			//go back
			$("#panel_"+(curPanel-1)).click(function(){ change(false); }); 
			//remove all previous bound functions
			$("#panel_"+curPanel).unbind();
		}
	}
	// Set up "Current" panel and next and prev 设置当前元素和上下
	growBigger("#panel_1");	
	var curPanel = 1;
	$("#panel_"+(curPanel+1)).click(function(){ change(true);return false;});
	$("#panel_"+(curPanel-1)).click(function(){ change(false);return false;});
	//when the prev/next arrows are clicked
	$("#slider .next2").click(function(){ change(true);});	
	$("#slider .prev2").click(function(){ change(false);});
	$(window).keydown(function(event){//键盘方向键控制
		switch (event.keyCode) {
			case 13: //enter
				$(".next2").click();
			break;
			case 37: //prev arrow
				$(".prev2").click();
			break;
			case 39: //next arrow
				$(".next2").click();
			break;
		}
	});	
});