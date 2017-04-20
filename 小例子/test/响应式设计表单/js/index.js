//将页面中的表单如果在移动设备上显示时，则将整个div的宽度设置为页面的100%；另当用户点击检查格式时，判断用户输入的内容格式是否正确以及是否为空，在出现错误时，将输入框颜色变红，并在输入框下方提示相关信息
function validate(str){ 
  //No.1
  //开始写代码
  var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
  if(reg.test(str)){
      return true;
  }else{
      var regPhone = /^1[3|4|5|8][0-9]\d{4,8}$/;
      if(regPhone.test(str)){
          return true;
      }else{
          return false;
      }
  }

  //end_code
} 

function check(){
  var user = document.getElementById("user").value.trim(); 
  //No.2
  //开始写代码
  if ( user!=""  ) {
    

    if (validate(user)) {
      document.getElementById("user").style.borderColor = "#CCC";
      document.getElementsByClassName("hint")[0].style.display = "none";
      document.getElementsByClassName("hint")[0].innerHTML = "";


    }else{
      document.getElementById("user").style.borderColor = "red";
      document.getElementsByClassName("hint")[0].style.display = "block";
      document.getElementsByClassName("hint")[0].innerHTML = "格式不正确！";


    }
  }else{
    document.getElementById("user").style.borderColor = "red";
    document.getElementsByClassName("hint")[0].style.display = "block";
    document.getElementsByClassName("hint")[0].innerHTML = "请输入内容！";


    
  }
  //end_code
}