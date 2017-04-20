/*//从不同方向使鼠标指针移过下面的内容，如从左侧移入时，由左侧匀速移入新的内容，新内容背景颜色变为黄色，如从右侧移入时，由右侧匀速移入新的内容，新内容背景颜色变为蓝色；上方移入和下方移入同理，上方颜色为红色，下方颜色为绿色
(function(){
    var $ = function(dom){
        return document.querySelector(dom);
    }
    var blockHoverer = $(".block_hoverer");


    //这个模块完成鼠标方向判断的功能
    function getDirection(ev,that) {
        ev = ev || window.event;
        var parentNode = that.parentNode;
        //鼠标的相对坐标
        var mx = ev.clientX-parentNode.offsetLeft,
            my = ev.clientY-parentNode.offsetTop;
        var el = that.offsetLeft,
            et = that.offsetTop,
            ew = that.clientWidth,
            eh = that.clientHeight;
        //矩形的中心坐标
        var dx = el+ew/2,
            dy = (et+eh/2);
        var left = mx - el,
            right = el + ew - mx,
            top = my - et,
            bottom = et + eh - my;
        var min = Math.min.apply(Math, [left, right, top, bottom]);
        if (min === left) {
                return "left";
        } else if (min === right) {
                return "right";
        } else if (min === top) {
                return "top"
        } else {
                return "bottom";
        }
    }
    //根据方向执行对应的操作
    function changeBg(direction,content){
        //需要变化的元素
        switch(direction){
            case "left": content.style.background = "orange";break;
            case "right": content.style.background = "blue";break;
            case "top": content.style.background = "red";break;
            case "bottom": content.style.background = "lime";break;
            default:
                break;
        }
    }
    var DIR_POS = { 
     left: { 
         top: '0', 
         left: '-100%' 
     }, 
     right: { 
         top: '0', 
         left: '100%' 
     }, 
     bottom: { 
         top: '100%', 
         left: '0' 
     }, 
     top: { 
         top: '-100%', 
         left: '0' 
     } 
    }; 

    //鼠标移入
    blockHoverer.onmouseover = function(event){
        var direction = getDirection(event,this);
        var content = $(".block_content");
        changeBg(direction,content);
        var classVal = content.getAttribute("class");
        //移除过渡
        classVal = classVal.replace(" trans","");
        content.setAttribute("class",classVal);
        //初始化块
        content.style.left = DIR_POS[direction].left;
        content.style.top = DIR_POS[direction].top;
        //启用过渡
        content.setAttribute("class",classVal+" trans"); 
        content.style.left = 0;
        content.style.top = 0;
        console.log(content.getAttribute("class"));

    };
    //鼠标移出
    blockHoverer.onmouseleave = function(){
        
    };
})();*/