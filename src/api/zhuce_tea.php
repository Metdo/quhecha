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

    $name = isset($_POST['name']) ? $_POST['name'] : '';


    //写sql语句
        // $sql2 = "INSERT INTO tea_name(Login_name,psw) VALUES('$LoginName','$psw')";
        $sql2 = "INSERT INTO tea_name(Login_name,name,psw,email) VALUES('$LoginName','$name','$psw','$email')";
        //执行语句
        $res = $conn->query($sql2);//insert update delete语句都是返回布尔值 select返回结果集

        // var_dump($res);
        // echo $res;
        if($res){
            //插入成功
            echo "yes";
        }else{
            //失败
            echo "no";
        }

    // $res->close();//关闭结果集
	// $cons->close();//关闭数据库连接


?>