<?php
    //引入cons.php,连接数据库
     include "conn.php";
     //接收前端数据

     $id = isset($_POST['id']) ? $_POST['id'] : '';// 列表页id，当前id
     $num = isset($_POST['num']) ? $_POST['num'] : '';// 数量
    // echo $id;

    // 查询列表页id数据
    $sql = "SELECT * FROM tea_list WHERE id=$id";
    // var_dump($sql);
    //执行sql语句
    $res = $conn->query($sql);
    // 需求数据
    $content = $res->fetch_all(MYSQLI_ASSOC);
    // var_dump($content);

    $img      = $content[0]['img'];// 图片
    $title    = $content[0]['name'];// 名字
    $pri      = $content[0]['pri'];// 现价
    $price    = $content[0]['price'];// 原价
    $discount = $content[0]['discount'];// 几折
    $kucun    = $content[0]['kucun'];// 库存量
    
    // // echo $img;
    // echo $title;

    // 查询购物车id
    $sql2 = "SELECT * FROM tea_cart WHERE id=$id";
    //执行sql语句
    $res2 = $conn->query($sql2);

    // 判断是否插入新商品到订单表，不存在才插
    if($res2->num_rows<1) {
        $sql2 = "INSERT INTO tea_cart(id,img,title,pri,price,discount,num,kucun) VALUES ($id,'$img','$title','$pri','$price','$discount','$num','$kucun')";
        //执行sql语句
        $res = $conn->query($sql2);
    }

    // $sql3 = "UPDATE tea_cart SET num='$num' WHERE id=$id";

    // $sql4 = "INSERT INTO tea_cart(id,img,title,pri,price,discount,num,kucun) VALUES ($id,'$img','$title','$pri','$price','$discount','$num','$kucun')";

    // // 判断是否插入新商品到订单表，不存在才插
    // if($res2->num_rows) {
        
    //     //执行sql语句
    //     $res3 = $conn->query($sql3);
    // }else {
    //     $res4 = $conn->query($sql4);
    // }




?>