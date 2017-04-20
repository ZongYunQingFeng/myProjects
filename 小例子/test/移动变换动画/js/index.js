/*//�Ӳ�ͬ����ʹ���ָ���ƹ���������ݣ�����������ʱ����������������µ����ݣ������ݱ�����ɫ��Ϊ��ɫ������Ҳ�����ʱ�����Ҳ����������µ����ݣ������ݱ�����ɫ��Ϊ��ɫ���Ϸ�������·�����ͬ���Ϸ���ɫΪ��ɫ���·���ɫΪ��ɫ
(function(){
    var $ = function(dom){
        return document.querySelector(dom);
    }
    var blockHoverer = $(".block_hoverer");


    //���ģ�������귽���жϵĹ���
    function getDirection(ev,that) {
        ev = ev || window.event;
        var parentNode = that.parentNode;
        //�����������
        var mx = ev.clientX-parentNode.offsetLeft,
            my = ev.clientY-parentNode.offsetTop;
        var el = that.offsetLeft,
            et = that.offsetTop,
            ew = that.clientWidth,
            eh = that.clientHeight;
        //���ε���������
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
    //���ݷ���ִ�ж�Ӧ�Ĳ���
    function changeBg(direction,content){
        //��Ҫ�仯��Ԫ��
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

    //�������
    blockHoverer.onmouseover = function(event){
        var direction = getDirection(event,this);
        var content = $(".block_content");
        changeBg(direction,content);
        var classVal = content.getAttribute("class");
        //�Ƴ�����
        classVal = classVal.replace(" trans","");
        content.setAttribute("class",classVal);
        //��ʼ����
        content.style.left = DIR_POS[direction].left;
        content.style.top = DIR_POS[direction].top;
        //���ù���
        content.setAttribute("class",classVal+" trans"); 
        content.style.left = 0;
        content.style.top = 0;
        console.log(content.getAttribute("class"));

    };
    //����Ƴ�
    blockHoverer.onmouseleave = function(){
        
    };
})();*/