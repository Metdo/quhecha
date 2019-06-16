// $(function () {
//     var isok = false;//准备开关，用于判断是否是登录状态：false未登录 true登录状态   

//     // /^\w+([\-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)* | 1[3-9]\d{9}$/

    // $("#LoginAccount").on("blur", function () {
    //     // console.log($("#LoginAccount").val());
    //             // 非空验证
    //     var LoginAccount = $.trim($("#LoginAccount").val());
    //     if (LoginAccount) {
    //         if (checkReg.chinese(LoginAccount)) {//正则判断 //中文
    //         //     var reg = /^\w+([\-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)* | 1[3-9]\d{9}$/;
    //         //     var ress = reg.test(LoginAccount);
    //         // if (ress) {
    //             $.ajax({ //发起ajax请求
    //                 type: "post",
    //                 url: "../api/reg1_tea.php",
    //                 data: "name=" + $("#LoginAccount").val(),//把输入的用户名传给后端
    //                 success: function (res) {  //res后端返回的数据
    //                     // console.log(res);
    //                     if (res == "yes") {
    //                        $("#LoginAccount").parent().next().find("#loginaccount_notice").html("可用注册名").css("color", "#58bc58");

    //                         isok = true;
    //                     } else {
    //                         $("#LoginAccount").parent().next().find().html("该用户名已被占用").css("color", "red");
    //                         isok = false;
    //                     }
//                     }
//                 })
//             } else {
//                 $("#LoginAccount").next().html("中文").css("color", "red");
//             }
//         } else {
//             $("#LoginAccount").next().html("不能为空").css("color", "red");
//         }
//         // console.log($("#LoginAccount").parent().next().find("#loginaccount_notice").html());
//     });

//     // $('#ValidateCode').one(".blur", function () {
//     //     if ($('#ValidateCode').val() === $('.login_code').val()) {
//     //         console.log("验证码正确");
//     //     } else {
//     //         console.log("验证码错误");
//     //     }
//     // }) 
//     console.log($('#ValidateCode').val());
//     console.log($('.login_code').val());
// });

// $(function () {

//     console.log(234);

// var login_code = document.getElementsByTagName("login_code");

// });

/* jq */ 
// $(function(){
//     $('.int').blur(function() {
//         $.ajax({
//             type: "post",
//             url: "../api/reg_tea.php",
//             data: 'LoginName=' + $('.int').val(),
//             async: true,
//             // 成功的回调
//             success: function(str) {
//                 console.log(str);
//                 if (str == 'no') {
//                 }
//             }
//     })
//     })
    
// })     

window.onload = function () {

    

    //找节点
    var login = document.getElementById('regbox_login');
    // var login = document.getElementById('login_list');
    var inputs = login.getElementsByTagName('input');
    var Register = document.getElementById('Register'); // 提交按钮
    var infs = login.getElementsByClassName('inf'); // span的集合
    var Register = document.getElementById('Register');// 同意并注册
    var arr = [];//存验证通过的状态   ，假设如果通过就存1

    //1.表单验证
    for (var i = 0; i < inputs.length; i++) {//绑定索引
        inputs[i].index = i;
    }
    
    // 邮箱或手机号验证：
    inputs[0].onblur = function () {
        var mail = this.value.trim();
        // console.log(mail);
        if (mail) {
            //不为空：正则验证
            var reg = /^([\w-+&%.]+@[\w-+&%.]+\.[a-zA-Z]+)|(1[3-9]\d{9})$/;

            // var reg = /^\w+([\-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*&1[3-9]\d{9}$/;
            var res = reg.test(mail);
            // console.log(res);
            
            
            if (res) {
                ajax2({
                    type: "post",
                    url: "../api/reg_tea.php",
                    data: 'Login_name=' + mail,
                    async: true,
                    // 成功的回调
                    success: function(str) {
                        // console.log(str);
                        if(str == 'no') {
                            infs[0].innerHTML = '该用户名已被注册';
                            infs[0].style.color = 'red';
                            // inputs[this.index].isok = false;
                            arr[0] = 0;
                        }else {
                            infs[0].innerHTML = '可注册,登录名不能修改，请记住！';
                            infs[0].style.color = '#58BC58';
                            // inputs[0].isok = true;
                            arr[0] = 1;
                        }
                    }
                });

            }
            else if (mail.length < 3) {
                infs[0].innerHTML = '请输入有效账号';
                infs[0].style.color = 'red';
                // inputs[this.index].isok = false;
                arr[0] = 0;
            }
            else {
                //不通过
                infs[0].innerHTML = '登陆名必须是邮箱或者手机号';
                infs[0].style.color = 'red';
                // inputs[this.index].isok = false;
                arr[0] = 0;
            }

        } else {
            //空的
            infs[0].innerHTML = '不能为空';
            infs[0].style.color = 'red';
        }

    }


    // 昵称
    inputs[1].onblur = function () {

        var tel = inputs[1].value.trim();
        if (tel) {
            //不为空：正则验证
            // var reg = /^1[3-9]\d{9}$/;
            // var res = reg.test(tel);
            //						console.log(res);

            //通过
            infs[this.index].innerHTML = '昵称可以在用户中心修改！';
            infs[this.index].style.color = '#58BC58';
            // inputs[this.index].isok = true;
            arr[1] = 1;

        } else {
            //空的
            infs[this.index].innerHTML = '不能为空';
            infs[this.index].style.color = 'red';
            // inputs[this.index].isok = false;
        }
    }
    // console.log(inputs[5]);


    
    //密码：控制长度
    inputs[2].onblur = function () {
        var psw = inputs[2].value.trim();

        if (psw) {
            //不为空：正则  字母开头，总长度至少大于6位
            var reg = /^[a-zA-Z].{5,17}$/;
            // var reg = checkReg.psweasy(psw);
            var res = reg.test(psw);

            if (psw.length >= 6 && res) {
                //正则匹配成功 
                infs[this.index].innerHTML = '可以使用的密码';
                infs[this.index].style.color = '#58BC58';
                // inputs[this.index].isok = true;
                arr[2] = 1;
            } else {
                infs[this.index].innerHTML = '请输入6-16位字母开头,且不能为空。';
                infs[this.index].style.color = 'red';
                // inputs[this.index].isok = false;
                arr[2] = 0;
            }
            //						console.log(res);
        } else {
            infs[this.index].innerHTML = '请输入6-16位字母开头,且不能为空。';
            infs[this.index].style.color = 'red';
            // inputs[this.index].isok = false;
            arr[2] = 0;
        }
    }


    // 确认密码
    inputs[3].onblur = function () {
        var psw = inputs[2].value.trim();
        var confirm = inputs[3].value.trim();

        if (confirm) {
            //不为空：正则  字母开头，总长度至少大于6位
            var reg = /^[a-zA-Z].{5,17}$/;
            // var reg = checkReg.psweasy(psw);
            var res = reg.test(confirm);

            if (psw = confirm && res) {
                //正则匹配成功
                infs[this.index].innerHTML = '密码验证通过';
                infs[this.index].style.color = '#58BC58';
                // inputs[this.index].isok = true;
                arr[3] = 1;
            } else {
                infs[this.index].innerHTML = '密码不一致';
                infs[this.index].style.color = 'red';
                // inputs[this.index].isok = false;
                arr[3] = 0;
            }
            //						console.log(res);
        } else {
            infs[this.index].innerHTML = '请输入6-16位密码,且不能为空。';
            infs[this.index].style.color = 'red';
            // inputs[this.index].isok = false;
            arr[3] = 0;
        }
    }


    inputs[4].onblur = function () {
        arr[4] = 1;
    }
    // 邮箱验证
    inputs[5].onblur = function () {

        var Email = inputs[5].value.trim();
        if (Email) {
            //不为空：正则验证
            var reg = /^[\w-+&%.]+@[\w-+&%.]+\.[a-zA-Z]+$/;
            // var reg = checkReg.email(Email);

            var res = reg.test(Email);
            // console.log(res);
            if (res) {
                // ajax2({
                //     type: "get",
                //     url: "../api/zhuce_tea.php",
                //     data: 'email=' + Email,
                //     async: true,
                //     // 成功的回调
                //     success: function(str) {
                //         console.log(str);
                //         if(str) {
                //             //不通过
                //             infs[5].innerHTML = '请输入正确的Email格式';
                //             infs[5].style.color = 'red';
                //             // inputs[5].isok = false;
                //             arr[5] = 0;
                //         }else {
                //             //通过
                //             infs[5].innerHTML = '邮箱格式正确';
                //             infs[5].style.color = '#58BC58';
                //             // inputs[5].isok = true;
                //             arr[5] = 1;
                //         }
                //     }
                // });
                //通过
                infs[this.index].innerHTML = '邮箱格式正确';
                infs[this.index].style.color = '#58BC58';
                // inputs[this.index].isok = true;
                arr[5] = 1;
                // console.log(this.index);
            }
            else {
                //不通过
                infs[this.index].innerHTML = '请输入正确的Email格式';
                infs[this.index].style.color = 'red';
                // inputs[this.index].isok = false;
                arr[5] = 0;
            }

        } else {
            //空的
            infs[this.index].innerHTML = '请输入正确的Email格式';
            infs[this.index].style.color = 'red';
            // inputs[this.index].isok = false;
            arr[5] = 0;
        }
    }


    // 随机验证码
    // 找节点
    var ValidateCode = document.getElementById('ValidateCode');// 验证码输入表单
    var login_code = document.getElementsByClassName('login_code');// 随机验证码
    var login_code = document.getElementById('login_code');
    var chageImage = document.getElementById('chageImage');// 换一个

    //生成验证码(已经封装)，显示到按钮里面
    function init() {
        var html = randomCode();//存放验证码

        // console.log(html);
        login_code.value = html;//渲染
        // console.log(login_code.value);
    }
    init();

    //点击一次按钮切换一个新的验证码
    login_code.onclick = function () {
        init();
    }

    // chageImage.onclick = function() {
    //     login_code.value = html;
    //     init();
    // }

    $('#yanzhengma').val(randomCode());
	$('#chageImage').click(function() {
		$('#login_code').val(randomCode());
	})
    

    // console.log(infs[6]);
    // console.log(inputs[7]);
    inputs[7].onblur = function () {
        var Code = inputs[7].value.trim();


        if (Code) {
            var val1 = ValidateCode.value;
            var val2 = login_code.value;
            if (val1.toLowerCase() == val2.toLowerCase()) {
                //验证码通过
                // alert('验证码通过');
                infs[6].innerHTML = '验证码通过';
                infs[6].style.color = '#58BC58';
                // inputs[6].isok = true;
                arr[6] = 1;
            } else {
                //验证码不通过
                // alert('验证码不一致');
                infs[6].innerHTML = '验证码不一致';
                infs[6].style.color = 'red';
                // inputs[6].isok = false;
                arr[6] = 0;
            }

        } else {
            //空的
            infs[6].innerHTML = '请输入验证码';
            infs[6].style.color = 'red';
            // inputs[6].isok = false;
            arr[6] = 0;
            // alert('不能为空');
        }
    }


    

    Register.onclick = function() {
  
        var mail = inputs[0].value.trim();
        // console.log(mail)
        var tel = inputs[1].value.trim();
        var psw = inputs[2].value.trim();
        var Email = inputs[5].value.trim();
        var res = arr.every(function(item) {//返回布尔值，全部都是1才为真
            return item == 1;
        });
        // console.log(arr);
        
        //都通过才能跳转
        if(res && arr.length == 7) {
            $.ajax({
                type: "post",
                url: "../api/zhuce_tea.php",
                data: {
                    "Login_name": mail,
                    "name": tel,
                    "psw": psw,
                    "email": Email,
                },
                success: function (res) {
                    // console.log(res);
                    if (res == "yes") {
                        alert("注册成功");
                        // location.href = "reg.html?" + $("#uname").val();
                        // location.href = "reg.html?" + encodeURI($(".uname").val());

                        //证明上面的验证都通过了，可以跳转
                        location.href ='login.html?' + mail;
                    } else {
                        alert("注册失败");
                    }
                }
            })
           
        }else{
            alert('请完善信息');
        }
    }
    

}