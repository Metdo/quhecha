(function() {

    // 注册 登入选项卡
    $(function()  {

        //找到按钮绑定事件
        $('.regbox_title li').click(function () {
            // console.log(123);
            $(this).attr('class', 'title_register') // 设置属性
                .siblings().attr('class', '');
                // 获得索引值 
                // console.log($(this).index());
            $('.regbox_list').find('ul') // 后代
                              .eq($(this).index()) // 获取下标索引
                              .css('display','none')
                              .siblings() // 当前元素的所有兄弟节点
                              .css('display', 'block')
            
        });

        
    });



})();