$(function() {
    $("#Submit").on("click", function () {
        // var mail = $.trim($("#txtUserName").val());
        var mail = $("#txtUserName").val().trim();
        // console.log($("#txtUserName").val());
        // console.log(mail);
        if (getCookie("Login_name")) {
            //证明在登录状态，不给登录
            alert("先退出登录");
        } else {
            if (mail) {//非空验证
  
                $.ajax({
                    type: "post",
                    url: "../api/login.php",
                    data: {
                        "Login_name": $("#txtUserName").val(),
                        "psw": $("#txtPassword").val()
                    },
                    success: function (res) {
                        // console.log(res);
                      
                        if (res == "yes") {
                            location.href = "../index.html?";
                            alert("登录成功");
                            setCookie("Login_name", $("#txtUserName").val(), 2);
                        }else   {
                            alert("用户名或密码错误");
                        }
                    }
                })
                 
            
          }else{
            alert("用户名不能为空");
          }
        }

    })





});