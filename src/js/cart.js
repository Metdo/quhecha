$(function() {

    // 登陆状态
    //接受kookie
    var names = getCookie('Login_name');
    // console.log(names);
    if(names){
        //登录后传id
        $('.register').html(names + '欢迎来到和茶网！');
        $('#loginLink').html('[退出]').css('cursor','pointer');
        // $('#con3').css('display','none');

            //退出登录 清除kookie
        $('#loginLink').click(function(){
            removeCookie('Login_name');
            location.href = 'indexe.html';
        })
    }else{//刷新页面
        $('.register').html('免费注册');
        $('#loginLink').html('登录').css('cursor','pointer');
        // .attr('href','login.html');
    //    window.open("login.html"); 
        $("#loginLink").on("click", function () {
            window.open('login.html');
        })    
    }


    //渲染的数据
    $.ajax({
        type: "post",
        url: "../api/cart.php",
        success: function (res) {
            // console.log(res);
            create(res);
        }
    })


    function create(res) {
        // 把字符串转为对象
        var arr = JSON.parse(res);
        // console.log(arr);
        
        var tex = arr.map(function (itme) {
            // console.log(itme);
            var img = (itme.img).split("&")[0];//切割图片
            var discount_price = itme.price - itme.pri;// 折扣价
            var price = itme.pri * itme.num;// 当前商品数量总价

            return `<li class="pro" data-id="${itme.id}">
                        <p class="ce">
                            <input type="checkbox" name="ckb" id="">
                        </p>

                        <p class="pro_img">
                            <a href="###">
                                <img src="${img}">
                            </a>
                        </p>

                        <p class="txt">
                            ${itme.title}
                        </p>

                        <p class="mpri">
                            <del> ${itme.price}</del>
                            <strong class="price">${itme.pri}</strong>
                        </p>

                        <p class="save">
                            <strong>${discount_price}</strong>
                            <small>${itme.discount}折</small>
                        </p>
                            
                        <p class="sunm">
                            <i class="goods_min">-</i>
                            <input class="goodsnum" name="goodsnum" data-num="${itme.kucun}"value="1" type="text" >
                            <i class="goods_add">+</i>
                            
                        </p>

                        <p class="pri">
                            <strong class="prices"> ${price}</strong>
                        </p>

                        <p class="st">
                            <span class="del">X</span>
                        </p>
                    </li>`
        }).join();
        // console.log(tex);
       // $('.ShoppingCartList').html(tex);
       $('.ShoppingCartList .txd').after(tex);

    }







    /*
      购物车功能分析：
            * 数量变化：加减数量、手动修改数量
            * 数量变小计跟着变
            * 删除当行
            * 全选
            * 总数量和总价格
            * 全删
    */


    // 1、数量变化 数量加减，手动输入数量
    // 加数量
    $("#ShoppingCartList").on("click",".goods_add",function () {
        // var id = $(item).parent().data("id");
        var num = $(this).prev().val();// 上一个兄弟节点的数量
        // console.log(num);
        var kucun = $(this).prev().data('num');// 库存量
        num++;// 每次加一
        // 设置上限 最大为库存量
        if (num>=kucun) {
            num = kucun;
        }
        $(this).prev().val(num);// 重新赋值
        total($(this));// 刷新小计
        // request("add", id, num);
    });



    // 减数量
    $("#ShoppingCartList").on("click", ".goods_min", function () {
        // var id = $(item).parent().data("id");
        var num = $(this).next().val();// 下一个兄弟节点的数量
        // var num = $(this).prev().prev().val();
        console.log(num);
        num--;// 每次加一
        // 设置下限 最小为1
        if (num <= 1) {
            // console.log("+++")
           $(this).attr("disabled",true);
            num = 1;
        }
        $(this).next().val(num);// 重新赋值
        total($(this));// 刷新小计
        // request("add", id, num);
    });


    // 手动出入数量
        // 点击表单的时候把表单内容置空 ,
        $('#ShoppingCartList').on('click', '.goodsnum', function () {
            $(this).val("");
           
        })

         
        $('#ShoppingCartList').on('input', '.goodsnum', function () {
            // var id = $(item).parent().data("id");
            var num = $(this).val();//表单内容
            var kucun = $(this).data('num');
            // 设置上限下限
            if(num <= 1) {
                num = 1;
            } else if (num >= kucun) {
                num = kucun;
            }
  
            $(this).val(num);// 重新赋值
            total($(this));// 刷新小计
            // request("add", id, num);
        });



        // 2、小计的计算
    function total(now) {
        // 找到数量
        var num = $(now).parent().find('.goodsnum').val();
        
        // 找到单价
        var price = $(now).parent().parent().find(".price").text();// 父元素的上两个兄弟节点的子节点
        
        // 小计=数量*单价
        var xiaoji = (num * price).toFixed(2);// 保留两位小数
        // console.log(num,price,xiaoji);
        $(now).parent().next().find(".prices").html(xiaoji);// 渲染出结果
        all(); // 刷新总数量和总价格
    }


    // 3、删除单行
    $('#ShoppingCartList').on('click', '.st', function () {
        var res = confirm('确定要删除？');// 确认框，确认当前操作
        if(res) {
            $(this).parent().remove();// 移除被选元素的数据和事件。
        }
        update();// 全删了隐藏商铺、积分
        var id = $(this).parent().data("id");
        // console.log(id);
        $.ajax({
            type: "post",
            url: "../api/cart.php",
            data: {
                "types": "del",
                "id": id,
            },
            success: function (res) {
                // console.log(res);
                if(res) {
                    $(this).parent().remove();// 移除被选元素的数据和事件。
                }
            }
        })
    });



    // 判断当一个商品都没有了，就隐藏商铺、积分
    function update() {
        // var len = $('.goods_add').size();// 定义长度
        var len = $('.ShoppingCartList>.pro').size();// 定义长度
        console.log($('.ShoppingCartList>.pro'));
        console.log(len);
        if(len) {
            // console.log(1);
            $('.txb').show();// 商铺显示
            $('.txd').show();// 仓库显示
            $('#GiftList').show();// 积分显示

        } else {
            // console.log(0);
            $('.txb').hide();// 商铺隐藏
            $('.txd').hide();// 仓库隐藏
            $('#GiftList').hide();// 积分隐藏
        }
    }



    // 4、全选
    // 全选按钮控制全选
    $('.ck input').click(function () {
        // alert(213);
        var istrue = $('.ck input').prop('checked');// 获取当前表单状态，是否勾选
        $('.ce input').prop('checked', istrue);// 全选框勾选
        $('.cd input').prop('checked', istrue);// 商铺框勾选
        all();// 刷新总数量和总价格
    }); 

    // 商铺按钮控制商品全选
    $('.cd input').click(function () {
        // alert(213);
        var istrue = $('.cd input').prop('checked');// 获取当前表单状态，是否勾选
        $('.ce input').prop('checked', istrue);
        all();// 刷新总数量和总价格
    }); 



    // 计算总数量和总价格
    var arr = [];// 准备一个空数组装被勾选复选框的下标
    function all() {
        arr = [];// 存被勾选的复选框的下标
            // 遍历数组判断当前状态，是否被勾选
        $('.ce input').each(function (i, itme) {
            if($(itme).prop('checked')) {
                //被勾选了，把下标存起来
                arr.push(i);
            }
        });

        // 总数量
        var num = 0;
        // 总价格
        var price = 0;
            // 遍历数组
        arr.forEach(function (itme) {
            // 字符串类型转为数字类型
            num += $('.goodsnum').eq(itme).val() * 1;// 拿到数量表单的值
            price += $('.prices').eq(itme).text() * 1;
        });

        // console.log(num, price.toFixed(2));
        
        // 渲染到节点
        $('#pp').html(price.toFixed(2));// 总价格
        $('#totalprice').html(price.toFixed(2));// 总价格
    }



    // 5、点击复选框控制全选
    $('#ShoppingCartList').on('click', '.ce input', function () {
        // alert(3245);
        var len = $('.ce input:checked').size();
        var total = $('.ce input').size();
        if (len == total) {
            // 全部勾选了
            $('.ck input').prop('checked', true);// 全选框勾选
            $('.cd input').prop('checked', true);// 商铺框勾选
        } else {
            // 全选不勾选
            $('.ck input').prop('checked', false);// 全选框不勾选
            $('.cd input').prop('checked', false);// 商铺框不勾选
        }
        all();// 刷新总数量和总价格
    });



    //6、全删
    // $('.str').click(function () {
    //     var res = confirm('确定要删除？');
    //    if(res) {
    //        for (var i = arr.length - 1; i >= 0; i--) {//从数组的尾部开始删除
    //         console.log($('.pro').eq(arr[i]))
    //            $('.pro').eq(arr[i]).remove();
    //        }
    //     //    var id = $(this).parent().data("id");
    //     //    $.ajax({
    //     //         type: "post",
    //     //         url: "../api/cart.php",
    //     //         data: {
    //     //             "types": "del",
    //     //             "id": id
    //     //         },
    //     //         success: function (res) {
    //     //             console.log(res);
    //     //             if(res) {
    //     //                 for (var i = arr.length - 1; i >= 0; i--) {//从数组的尾部开始删除
    //     //                     console.log($('.pro').eq(arr[i]))
    //     //                     $('.pro').eq(arr[i]).remove();
    //     //                 }
    //     //             }
    //     //         }
    //     //     })
    //        all();//刷新总数量和总价格
    //        update();// 全删了隐藏商铺、积分
    //    } 
    // });


    // 全删
    $('.str').on('click',function() {
        // alert(123)
        var arr1 = []; // 准备一个空数组用于存放勾选的复选框
        $('.ce input:checked').each(function(idx,item) {
            var id = $(item).parent().parent().data("id");
            console.log(id);
            arr1.push(id); // 在末尾添加
            console.log(arr1);
        });
        $(arr1).each(function (index, item) {
            console.log(item);
            del1(item);
            all();//刷新总数量和总价格
             // 全删了隐藏商铺、积分

        });
        all();//刷新总数量和总价格
        update();// 全删了隐藏商铺、积分
    });
    
    
    function del1(res1) {
        var res = confirm("您确定要删除吗？");
        if (res) {
            // $(this).parent().remove();
            // $(".ce input").filter("[name='choice']").parent().remove();
            $('.ce input:checked').parent().parent().remove();
        }
        update();// 全删了隐藏商铺、积分
        $.ajax({
            type: "post",
            url: "../api/cart.php",
            data: {
                "types": "del",
                "id": res1
            },
            success: function (res) {
                console.log(res);
            }
        })
        all();//刷新总数量和总价格
        
    }


    //数量
    function request(types, id, num) {
        $.ajax({
            type: "post",
            url: "../api/cart.php",
            data: {
                "types": types,
                "id": id,
                "num": num,
            },
            success: function (res) {
                console.log(res);
                // create(res)
            }
        }) 
    }


    // 继续购物
    $('.back').click(function() {
        window.open('list.html');
    });


});