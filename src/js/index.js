$(function () {

    var p = new Promise(function (sucfn) {//写异步请求的代码
        $.ajax({
            type: "get",
            url: "../api/index_tea.php",
            async: true, //默认异步
            success: function (str) {
                sucfn(str);//拿到数据就返回到then那里做处理：防止嵌套太多出现回调地狱
                // console.log(str);
            }
        });
    });

    p.then(function (data) {//数据渲染写在then里面
        var arr = JSON.parse(data);
        // console.log(arr);
        var res = arr.map(function (item) {
            return `<li data-id="${item.id}">
                                <a href="###">
                                    <div class="comment_fig">
                                        <img src="${item.img}" alt="">
                                    </div>

                                    <div class="comment_txt">
                                        <p class="word">${item.title}</p>
                                        <p class="from">${item.name}</p>
                                        <p>
                                            ${item.title_name}
                                            <span>￥${item.price}</span>
                                        </p>
                                    </div>
                                </a>
                            </li>`;         
        }).join('');
        $('.interest').html(res);
    });


    //跳转登录注册
        // 注册
    $("#registerLink").on("click", function () {
        // location.href = "reg.html";
        window.open('html/reg.html');
    })
        // 登陆
    // $("#loginLink").on("click", function () {
    //     window.open('login.html');
    // })


    // console.log(getCookie('Login_name'));

    //传id给首页
        //接受kookie
        var names = getCookie('Login_name');
        console.log(names);
        if(names){
            //登录后传id
            $('.register').html(names + '欢迎来到和茶网！');
            $('#loginLink').html('[退出]').css('cursor','pointer');
            // $('#con3').css('display','none');

                //退出登录 清除kookie
            $('#loginLink').click(function(){
                removeCookie('Login_name');
                location.href = 'index.html';
            })
        }else{//刷新页面
            $('.register').html('免费注册');
            $('#loginLink').html('登陆').css('cursor','pointer');
            // .attr('href','login.html');
        //    window.open("login.html"); 
            $("#loginLink").on("click", function () {
                window.open('html/login.html');
            })    
        }

})