// JavaScript Document
$(function(){
	$(".ly_myselbox li").each(function(){
		$(this).click(function(){		
			if($(this).find("i").hasClass("fast"))
			{
				
				$(this).find("i").removeClass("fast")
				$(this).find("i").addClass("second")
				$(this).css("color","#e84c3d");
				
			}else{
				
			 	if($(this).find("i").hasClass("second"))
			 	{
			 		$(this).find("i").removeClass("second")
					$(this).css("color","#666666");
			 	}else{
					
					$(this).find("i").removeClass("second");
					$(this).find("i").addClass("fast");
					$(this).css("color","#e84c3d");
			 		
					
			 	}
			}
		})
	})
})
//进度条
$(function(){
		    $(".ly_zb_main").map(function(){
		        var $line = $(this).find(".ly_zb_reb"),
		            width = $line.width(),
		            $num = $(this).find(".ly_zb_num em");
		        $line.width(0).animate({"width":width},width*4);
		        var text = $num.text(),
		            timeid,
		            num = 0;
		        timeid = setInterval(function(){
		            if(num < text){
		                $num.text(num);
		                num++;
		            }else{
		                $num.text(num);
		                clearInterval(timeid);
		            }
		        },width*4/text);
		      
		    });
		    
		});

$(function(){
	$(".ly_borrowbox").click(function(){

		if($(this).next("div").is(":hidden"))
		{	
			$(this).children("span").eq(0).addClass("ly_borrowup");
			$(this).children("span").eq(1).removeClass("ly_borrowup");
			$(this).next("div").slideDown();
		}else
		{
			$(this).children("span").eq(1).addClass("ly_borrowup");
			$(this).children("span").eq(0).removeClass("ly_borrowup");
			$(this).next("div").slideUp();
		}
	})
})

$(function(){
	$(".ly_regdivbox input").focus(function(){
		$(this).parent().parent().css("border","1px solid #e84c3d")
	})
	.blur(function(){
		$(this).parent().parent().css("border","1px solid #dcdcdc")
	})
})
//模拟select
$(function(){
	selectMN($(".ly_sel_common"));
	function selectMN($select){
		$select.each(function(index, value){
			$select.eq(index).click(function(event){
				event.stopPropagation();
				selectUp($select);
				if($(this).children("ul").is(":hidden")){
					selectDown($(this));
				} else {
					selectUp($(this));
				}
				var selectLis = $(this).children("ul").find("li");
				selectLis.each(function(index){
					selectLis.eq(index).click(function(){
						$(this).parent().siblings("span").text($(this).text());
					
					});
				});
			});
		});
		$("body").click(function(){
			selectUp($select);
		});

		function selectUp($obj){
			$obj.children("ul").stop().slideUp(200);

		}
		function selectDown($obj){
			$obj.children("ul").stop().slideDown(200);
		}
	}
});
$(function(){
	var $span=$(".ly_topupSet span");
	var $img=$(".ly_topupWarp img");
switchbox($span,"ly_topupSelect");
switchbox($img,"ly_topupShow");
})
function switchbox(_obj,_class){
	_obj.each(function(){
		$(this).click(function(){
			_obj.removeClass(_class);
			$(this).addClass(_class);
			
		})
	})
}