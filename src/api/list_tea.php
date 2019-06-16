<?php 
    
 


    $page = isset($_GET['page']) ? $_GET['page'] : '1';
    $num = isset($_GET['num']) ? $_GET['num'] : '12';
    $types = isset($_GET['types']) ? $_GET['types'] : ''; 
    $type = isset($_GET['type']) ? $_GET['type'] : 'price';
    $order = isset($_GET['order']) ? $_GET['order'] : '';
    // echo $type;
    // echo $order;

    // 连接数据库
    include 'conn.php';

    //写查询语句 
	/*
	 	SELECT * FROM datalist LIMIT 0,12;
	 	
	 	page   num   index    求的量：起始下标
	 	1      12     0-11      0 
	 	2      12    12-23    11
	 	3      12     24-35    23
	 	
	 	公式：index = (page-1) * num
    */
    
    $index = ($page - 1) * $num;


    // $sql = "SELECT * FROM tea_list ORDER BY $type $order  LIMIT $index,$num";
    // echo $sql;

    // $sql = "SELECT * FROM tea_list LIMIT $index,$num";

    if($type) {
		//不为空：意味已经有值传过来，需要排序
		$sql = "SELECT * FROM tea_list ORDER BY $type $order  LIMIT $index,$num";
	}else {
		//空：没有传值过来，不需要排序
		$sql = "SELECT * FROM tea_list LIMIT $index,$num";
	}

    // 执行语句
    $res = $conn->query($sql); // 结果集
    // var_dump($res);

    // 需求数据
    $content = $res->fetch_all(MYSQLI_ASSOC);

    // 查询所有数据，得到总条数
    $sql2 = "SELECT * FROM tea_list";

    // 执行语句
    $res2 = $conn->query($sql2);

    // 获取到结果集的总条数
    // echo $res2->num_rows; 

    // 如果要传输多个数组，可以做成关联数组
    $datalist = array(
        'data' => $content,
        'total' => $res2->num_rows, // 数据总条数
        'page' => $page, // 页数
        'num' => $num, // 每页的数据
    );

    // 转成字符串，传给前端
    echo json_encode($datalist,JSON_UNESCAPED_UNICODE);


?>