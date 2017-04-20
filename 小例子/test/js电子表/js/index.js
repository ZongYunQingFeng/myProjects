function $(selector) { return document.querySelector(selector) }

var hh = hh || $('#hh'),
    mm = mm || $('#mm'),
    ss = ss || $('#ss');
//No.1
//¿ªÊ¼Ð´´úÂë
function update(){
    var newDate = new Date();
    hh.innerHTML = newDate.getHours();
    mm.innerHTML = newDate.getMinutes();
    ss.innerHTML = newDate.getSeconds();
    window.setInterval(function(){
      var newDate = new Date();
      hh.innerHTML = newDate.getHours();
      mm.innerHTML = newDate.getMinutes();
      ss.innerHTML = newDate.getSeconds();
    },1000);
}

update();

//end_code