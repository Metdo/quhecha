/*
        列表页实现翻页：
            * 准备数据，做数据渲染(第一页)
            * 根据数据的条数和每页显示多少条，计算页数，生成页数
            * 点击对应的页数，可以换页
        列表页：
            * 排序
            跳转：点击内容跳转到详情页，把id带过去
 
*/

// 找节点
// var ulGoodsList = document.getElementById('ulGoodsList');
// var goods_img
$(function () {

    var ipage = 1; // 第几页，初始化为第一页
    var num = 12; // 每页12条数据

    // 排序设置 （排序依据传的参数，传什么就是什么排序）
    var types = ''; // price: 根据价格排序，shoucang: 根据收藏量排序
    // 升序 降序
    var order = ''; // up: 升序，down：降序
    var page = null;
    var tex = null;

    var type = '';


    // var p = new Promise(function (sucfn) {
    //     $.ajax({
    //         type: "get",
    //         url: "../api/list_tea.php",
    //         // data: 'page=' + ipage + '&num=' + num + '&type=' + types + '&order=' + order,
    //         async: true, //默认异步
    //         success: function (str) {
    //             sucfn(str);//拿到数据就返回到then那里做处理：防止嵌套太多出现回调地狱
    //             // console.log(str);
    //         }
    //     });
    // });

    // p.then(function (data) {//数据渲染写在then里面
    //     var arr = JSON.parse(data);
    //     // console.log(arr);
    //     var res = arr.data.map(function (item) {
    //         return `<li dadt-id="${item.id}">
    //                             <div class="goods">
    //                                 <div class="goods_img">
    //                                     <a href="###">
    //                                         <img src="${item.img}" alt="">
    //                                     </a>
    //                                 </div>

    //                                 <div class="goods_name">
    //                                     <a href="###">
    //                                         <span>${item.name}</span>
    //                                         <strong></strong>
    //                                     </a>
    //                                 </div>

    //                                 <div class="goods_pri">
    //                                     <span>￥${item.pri}</span>
    //                                 </div>
    //                                 <div class="goods_mpri">
    //                                     <small>${item.name_pri} ¥<del>${item.price}</del></small>
    //                                     <p class="mpri_com">
    //                                         <a href="###">${item.com}</a>人评论
    //                                     </p>
    //                                 </div>
    //                                 <div class="goods_buy">
    //                                     <a class="buy_go" href="###">${item.buy}</a>
    //                                     <a class="buy_cat" href="###">${item.shopping_trolley}</a>
    //                                 </div>
    //                             </div>

    //                         </li>`
    //     }).join('');
    //     $('#ulGoodsList').html(res);
    // });
    var tex = null;
    init(1);

    function init(page) {
        $.ajax({
            type: "get",
            url: "../api/list_tea.php",
            data: {
                "page": page,
                "num": num,
                "types": types,
                "order": order,
                "type": type,
                // "content1": $(".mohu").val(),
                // "text1": text1,
                // "text2": text2

            },
            success: function (res) {
                // console.log(res);
                create(res);
                // console.log(res);
            }

        })
    }

    // 数据渲染
    function create(res) {
        // console.log(res);

        var arr = JSON.parse(res);
        // console.log(arr.data);
        var res = arr.data.map(function (item) {

            var img1 = (item.img).split("&")[0]; //切割图片
            // console.log(img1);
            return `<li data-id="${item.id}">
                                <div class="goods">
                                    <div class="goods_img">
                                        <a href="###">
                                            <img src="${img1}" alt="">
                                        </a>
                                    </div>

                                    <div class="goods_name">
                                        <a href="###">
                                            <span>${item.name}</span>
                                            <strong></strong>
                                        </a>
                                    </div>

                                    <div class="goods_pri">
                                        <span>￥${item.pri}</span>
                                    </div>
                                    <div class="goods_mpri">
                                        <small>${item.name_pri} ¥<del>${item.price}</del></small>
                                        <p class="mpri_com">
                                            <a href="###">${item.com}</a>人评论
                                        </p>
                                    </div>
                                    <div class="goods_buy">
                                        <a class="buy_go" href="###">${item.buy}</a>
                                        <a class="buy_cat" href="###">${item.shopping_trolley}</a>
                                    </div>
                                </div>
                                
                            </li>`
        }).join('');
        // console.log(res);
        $('#ulGoodsList').html(res);



        //页数生成
        page = Math.ceil(arr.total / arr.num);
        // console.log(page);
        var html = "";
        for (var i = 0; i < page; i++) {
            html += '<a href="###">' + (i + 1) + '</a>';
        }
        // console.log(html);
        $("#pagestoolbar").html(html);
        var pagestoolbar = document.getElementById("pagestoolbar");
        pagestoolbar.children[arr.page - 1].className = "active";
        // console.log(arr.page)
        tex = arr.page;
        $("#pagestoolbar").get(0).children[arr.page - 1].className = "active"; //jQuery转原生
        // console.log($("#pagestoolbar"));
        // }
       


    }


     //点击页码切换到对应的内容
    $("#pagestoolbar").on("click", "a", function () {
        // alert(23333);
        var _this = this;
        tex = _this.innerHTML;

        // console.log(tex);
        var tg = $(this).text();
        // console.log(tg);
        init(tex);
        var t = $(this).parent().parent().find('.one').text();
        // console.log(t);
        t.innerHTML = tg;
        if (t = tg) {
            t = tg;
            init(tex);
            $(".one").text(tex);
        }
        // console.log($(this).parent().parent().find('.one').val());
    })


    //上一页
    $(".page_pr").on("click", function () {

        tex--;
        // console.log(tex, page);
        // if (tex <= 1 || tex > page) {
        //     tex = 1;
        //     init(tex);
        // } else {
        //     tex = 1;
        //     // tex = '';
        //     // $(".prev").css("cursor", "no-drop");
        // }
        console.log(tex);
        if (tex > 0) $(".one").text(tex);
        if (tex < 1) {
            tex = 1;
            return;
        }
        init(tex);
    })

    //下一页
    $(".page_nx").on("click", function () {
        // console.log(123)
        tex++;
        if (tex <= page) $(".one").text(tex);
        // console.log(tex,page)
        // // console.log(tex, page);
        // if (tex >= page-1) {
        //     console.log("_____");
        //     tex = page;
        //     init(tex);

        // } else {

        //     // $(".next").css("cursor", "no-drop");
        // }

        // init(tex);
        console.log(tex)

        if (tex > 6) {
            tex = 6;
            return;
        }
        init(tex);

    })

    //价格排序
    var isok = true;
    $("#priceo").on("click", function () {
        // console.log(123);
        type = "pri"; //根据价格进行排序
        console.log(types);
        if (isok) {
            //第一次点击：升序
            $("#priceo").css("desc", "display: none");
            order = 'ASC'; //升序
        } else {
            $("#priceo").css("asc", "display: block");
            order = 'DESC'; //降序
        }
        isok = !isok;
        init(1); //排序后默认的跳转到第一页
        // alert(123);
    })

    //评论排序
    var isok = true;
    $("#reviewo").on("click", function () {
        // console.log(123);
        type = "com"; //根据价格进行排序
        // console.log(types);
        if (isok) {
            //第一次点击：升序
            $("#reviewo").html("升序");
            order = 'ASC'; //升序
        } else {
            $("#reviewo").html("降序");
            order = 'DESC'; //降序
        }
        isok = !isok;
        init(1); //排序后默认的跳转到第一页
        // alert(123);
    })


    //点击li跳转到详情页
    // $("#ulGoodsList").on("click", "li", function () {
    //     // var uid = this.getAttribute('data-id');  
    //     var id = $(this).attr("data-id");
    //     // console.log(id);
    //     location.href = "goods.html?" + id;
    // })

    //点击图片跳转到详情页
    $("#ulGoodsList").on("click", ".goods_img", function () {
        // var uid = this.getAttribute('data-id');  
        var id = $(this).parent().parent().attr("data-id");
        // console.log(id);
        location.href = "goods.html?" + id;
    })

    //点击标题跳转到详情页
    $("#ulGoodsList").on("click", ".goods_name", function () {
        // var uid = this.getAttribute('data-id');  
        var id = $(this).parent().parent().attr("data-id");
        // console.log(id);
        location.href = "goods.html?" + id;
    })


    // 点击加入购物车
    var cartCount = 0;
    $('#ulGoodsList').on('click','.buy_cat',function () {
        // alert(2132);

        var id = $(this).parent().parent().parent().attr("data-id");
        console.log(id);



        var addImg = $(this).parent().parent().parent().parent('#ulGoodsList').find('img').eq($(this).parents("li").data("id")-1);
        // console.log($(this).index());

        console.log($(this).index(),$(this).parents("li").data("id"));
        // 克隆图片
        var cloneImg = addImg.clone();

        var cart = $('.goods_cart>a')
        
        // console.log(cartCount++);
        cloneImg.css({
            'width':'180px',
            'heigth':'180px',
            'position':'absolute',
            'top':addImg.offset().top,
            'left':addImg.offset().left,
            'z-index':'999',
            'opacity':'.5',
        }).appendTo($('body')).animate({
            'width':'25px',
            'heigth':'25px',
            'top':$('.cart').offset().top,
            'left':$('.cart').offset().left,
            'top': cart.offset().top,
            'left': cart.offset().left,
        },3000,function() {
            // 加入购物车后隐藏
            cloneImg.animate({
                'width':'0px',
                'heigth':'0px',
            },function() {
                $('#cartCount').html(++cartCount);
                $(this).detach();// 删除当前元素
            });
        });
        console.log($('goods_cart>.cartCount').html(++cartCount));

        $.ajax({
            type: "post",
            url: "../api/add.php",
            data: {
                "id": id,
                "num": 1,
            },
            success: function (res) {
                // console.log(res);
                // window.open('cart.html');
            }
        })
        // alert("加入成功");


        
    });


    // 点击购物车跳转到购物车页面
    $('.goods_cart >a').click(function() {
        window.open('cart.html');
    });
    

});