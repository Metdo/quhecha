<?php
    include "conn.php";
    //接收前端数据
    $id = isset($_POST["id"]) ? $_POST["id"] : "";
    // echo $id;
    //写查询语句
    $sql = "SELECT * FROM tea_list WHERE id=$id";
    // echo $sql;
    //执行sql语句
    $res = $conn->query($sql);
    //需要的数据
    $content = $res->fetch_all(MYSQLI_ASSOC);
    //返回前端数据
    // var_dump($content)
    echo json_encode($content,JSON_UNESCAPED_UNICODE);

    // $res->close();//关闭结果集
    // $cons->close();//关闭数据库连接
?>