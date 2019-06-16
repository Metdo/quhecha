<?php
  include "conn.php";

  $name=isset($_POST["name"])?$_POST["name"]:"";
  $psw=isset($_POST["psw"])?$_POST["psw"]:"";
  $haoma=isset($_POST["haoma"])?$_POST["haoma"]:"";

  if($psw==""){
    $sql="SELECT * FROM zhuce WHERE user='$name'";
    $res=$conn->query($sql);
  
    if($res->num_rows!=0){
        echo "no";
    }else{
        echo "yes";
    }
  }else{
     $sql2="INSERT INTO zhuce (user,psw,haoma) VALUES('$name','$psw',$haoma)";
     $res2=$conn->query($sql2);
     if($res2=="true"){
          echo "ye";
     }else{
           echo "no";
     }
  }
  
?>