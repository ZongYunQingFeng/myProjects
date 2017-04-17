//新闻滚动
$(function(){
    function scroll(obj,height,spead){
        obj.animate({marginTop:-height+"px"},spead,function(){
            obj.css("margin-top","0").find("li:first").appendTo(obj);
        })
    }   
    var
        timeid,
        $ul=$(".l-zxgg-news>ul"),
        $li=$(".l-zxgg-news>ul>li"),
        height=$li.eq(0).height();
    $(".l-zxgg-news").hover(function(){
        clearInterval(timeid);
    },function(){
        timeid=setInterval(function(){
            scroll($ul,height,300);
        },1800)
    }).trigger("mouseleave");
})

//数据数字随机变化
$(function(){
    $(".l-num").map(function(){
        var realText=$(this).text(),                            //获取字符串内容
            newText=[realText.length],                          //新建一个数组，数组长度为上边获取字符串的长度
            timeid,
            the=$(this);

        var offsetTop2=$(this).offset().top;
        var fn;
        timeid=setInterval(function(){                          //间歇执行以下内容
            for(var i=0; i<realText.length; i++){
                if(/\d/.test(realText.charAt(i))){              //使用正则表达式获取字符串中的数字和符号   
                    newText[i]=Math.floor(Math.random()*10);    //用数组保存对应的数字和符号，将数字改为随机数字
                }else{
                    newText[i]=realText.charAt(i);
                }
            }
            var lastText="";                                    //新建一个空字符串
            for(var j=0;j<newText.length;j++){
                lastText=lastText+newText[j];                   //将数组里的值通过累加变成字符串
            }
            the.text(lastText);                                 //在网页中输出新形成字符串
        },120);
        setTimeout(function(){
            clearInterval(timeid);                              //1s后清除上边间歇执行的内容，并显示真实字符串
            the.text(realText);
        },1500);
        //
    });     //主要用到的知识：间歇方法setInterval,定时方法setTimeout,Math对象，取字符串中字符charAt(),string和array之间的转换...
});

//详情页面展开关闭
$(function(){
    $(".s_biaodetail").map(function(){
        var title=$(this).children("h3"),
            cont=$(this).children(".s_biaodetaimain"),
            arrow=title.find("i");
        title.click(function(){
            if(cont.is(":hidden")){
                title.addClass("clicked");
                cont.show();
                arrow.addClass("l-arrow-down").removeClass("l-arrow-up");
            }else{
                title.removeClass("clicked");
                cont.hide();
                arrow.addClass("l-arrow-up").removeClass("l-arrow-down");
            }
        });
    });
});

//0906
$(function(){
    $(".s_openbtn").click(function(){
        $(".s_fixedbg").show();
    });
    $(".s_closebtn").click(function(){
        $(this).parent().parent().hide();
    });
});