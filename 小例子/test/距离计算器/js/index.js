(function() {
    
    var mX, mY, distance,
        $distance = $('#distance span'),
        $element  = $('#element');
    
    function calculateDistance(elem, mouseX, mouseY) {
        //No.1
        //��ʼд����
        //ģ�����ĵ�����
        var dx = elem.offset().left+25;
        var dy = elem.offset().top+25;
        console.log(dx,dy);
        var distance = Math.sqrt((dx-mouseX)*(dx-mouseX) + (dy-mouseY)*(dy-mouseY));
        return distance;
        //end_code
    }

    $(document).mousemove(function(e) {  
        //No.2
        //��ʼд����
        e = e||window.event;
        mX = e.clientX;
        mY = e.clientY;
        distance = calculateDistance($element, mX, mY);
        //end_code
        $distance.text(distance);         
    });
    

})();