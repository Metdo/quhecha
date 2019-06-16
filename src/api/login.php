<?php
    // 后端接收数据，存入数据库

    // 连接数据库
    include 'conn.php';

    // 接收数据
    $LoginName = isset($_POST['Login_name']) ? $_POST['Login_name'] : '';
    // var_dump($_GET);
    $psw = isset($_POST['psw']) ? $_POST['psw'] : '';

    //写sql语句
    $sql = "SELECT * FROM tea_name WHERE Login_name= '$LoginName' AND psw='$psw'";
    //执行sql语句
    $res = $conn->query($sql);
    // var_dump($res);
    //查找得到，就可以登录
    if($res->num_rows){
        echo "yes";
    }else{
        echo "no";
    }
    //关闭
    // $res->close();
    // $cons->close();



?>