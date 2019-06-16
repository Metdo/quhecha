<?php 


    // 连接数据库
    include 'conn.php';


    // 查询所有数据，得到总条数
    $sql = "SELECT * FROM tea_index";

    // 执行语句
    $res = $conn->query($sql);
    // var_dump($res);

    // 需求数据
    $content = $res->fetch_all(MYSQLI_ASSOC);
    // var_dump($content);
 
    // 转成字符串，传给前端
    echo json_encode($content,JSON_UNESCAPED_UNICODE);
?>