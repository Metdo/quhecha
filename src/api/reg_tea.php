<?php
    // 后端接收数据，存入数据库

    // 连接数据库
    include 'conn.php';

    // 接收数据
    $LoginName = isset($_POST['Login_name']) ? $_POST['Login_name'] : '';
    // var_dump($_GET);
    $psw = isset($_POST['psw']) ? $_POST['psw'] : '';
    $email = isset($_POST['email']) ? $_POST['email'] : '';
   
    // echo $LoginName;
    // 1、写sql语句

    // if($type == "tea_name") {
        $sql = "SELECT * FROM tea_name WHERE Login_name='$LoginName'";
        //  var_dump($sql);
         //执行sql语句
         $res = $conn->query($sql);//结果集
        //  var_dump($res);
         if($res->num_rows) {
             //存在，不给注册
             echo "no";
         }else{
             //不存在，可以注册
             echo "yes";
         };
    // }



    // if($type == "add"){
    //     //写sql语句
    //     // $sql2 = "INSERT INTO tea_name(Login_name,psw) VALUES('$LoginName','$psw')";
    //     $sql2 = "INSERT INTO tea_name(Login_name,pws,email) VALUES('$LoginName','$psw','$email');";
    //     //执行语句
    //     $res = $conn->query($sql2);//insert update delete语句都是返回布尔值 select返回结果集

    //     var_dump($res);
    //     // echo $res;
    //     if($res){
    //         //插入成功
    //         echo "yes";
    //     }else{
    //         //失败
    //         echo "no1";
    //     }
    // }

    // $sql = "INSERT INTO name_tea(Login_name,name,psw,confirm,answer,E_mail,) VALUES('$name','$psw')";

    // // 2、执行语句
    // $res = $conn->query($sql);

    // // 检测执行语句
    // // var_dump($res);

    // if($res) {
    //     // 存入成功
    //     echo 'yes';
    // }else{
    //     // 失败
    //     echo 'no';
    // }
    
    // $res->close();//关闭结果集
	// $cons->close();//关闭数据库连接

?>