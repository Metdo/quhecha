$(function(){
    let namestatus=false;
    let pswstatus=false;
    let pswqrstatus=false;
    let haomastatus=false;
    let emailstatus=false;
   

    $(function(){
         $(".name").on("blur",function(){
            //判断正则   
            if(/^[\u4e00-\u9fa5\w]{4,16}$/.test($(".name").val())){
                $(".nametishi").css("color","green"); //满足，提示变为绿色
                //判断该用户是否存在
                exit();
            }else{
                $(".nametishi").css("color","red");
                let namestatus=false;
            }

            //判断是否存在该用户
            function exit(){
                $.ajax({
                        type:"post",
                        url:"../api/zhuce.php",
                        data:{
                            name:$(".name").val(),
                        },
                        success:function(res){
                            if(res=="yes"){
                                $(".nametishi").html("该名字可以注册");//满足，清空提示
                                namestatus=true;  //用户名条件都满足，改状态
                            }else if(res=="no"){  //存在该用户提示
                                $(".nametishi").html("这个名字太受欢迎了").css("color","red");
                            }
                        }
                    })
            }

         })

    
        //失焦判断密码正则,至少三位
        $(".psw").on("blur",function(){
                if(/^\d{3}$/.test($(".psw").val())){
                    $(".pswtishi").css("color","green");//满足条件，清空提示
                    pswstatus=true;
                }else{
                    $(".pswtishi").css("color","red");
                    pswstatus=false;
                }
        })

        //失焦确认密码
        $(".pswque").on("blur",function(){
            if($(".pswque").val()==$(".psw").val()){
                $(".pswquetishi").css("color","green");
                pswqrstatus=true;
            }else{
                $(".pswquetishi").css("color","red");
                pswqrstatus=false;
            }
        })

        //判断手机号正则
        $(".haoma").on("blur",function(){
            if( /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/.test($(".haoma").val())){
                $(".haomatishi").css("color","green");//满足条件，变绿
                haomastatus=true;
            }else{
                $(".haomatishi").css("color","red").html("请输入正确的手机号");
                haomastatus=false;
            }
        })

        //判断email正则
        $(".email").on("blur",function(){
            if( /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test($(".email").val())){
                $(".emailtishi").css("color","green");//满足条件，变绿
                emailstatus=true;
            }else{
                $(".emailtishi").css("color","red").html("请输入正确的邮箱号");
                emailstatus=false;
            }
        })
           
        
       
        // 点击判断验证码，验证码为空不给提交，验证码不为空，判断input状态是否满足条件,满足再发起请求
            var show_num = [];
            draw(show_num);

            $("#canvas").on('click',function(){
                draw(show_num);
            })
            $(".zhucebtn").on('click',function(){
                var val = $(".input-val").val().toLowerCase();
                var num = show_num.join("");
                if(val==''){
                    alert('请输入验证码！');
                }else if(val == num){
                    // alert('提交成功！');
                    //判断状态
                    if(namestatus==true && pswstatus==true &&  pswqrstatus==true && haomastatus==true && emailstatus==true){ 
                        $(".wanshan").html("");
                       if($(".tongyi").prop("checked")){
                            $.ajax({
                                type:"post",
                                url:"../api/zhuce.php",
                                data:{
                                    name:$(".name").val(),
                                    psw:$(".psw").val(),
                                    haoma:$(".haoma").val()
                                },
                                success:function(ress){
                                    // console.log(ress);
                                    document.cookie="user="+$(".name").val()+";path=/";
                                    // document.cookie="user="+$(".name").val('11111')+ ";path=/";
                                    location.href="../index1.html?user";
                                }
                            })
                       }else{
                           console.log(789)
                            $(".xieyitishi").html("请同意协议").css("color","red");
                       }
                    }else{
                        $(".wanshan").html("请完善信息");
                    }

                    $(".input-val").val('');

                }else{
                    alert('验证码错误！请重新输入！');
                    $(".input-val").val('');
                }
            })

        //生成并渲染出验证码图形
        function draw(show_num) {
            var canvas_width=$('#canvas').width();
            var canvas_height=$('#canvas').height();
            var canvas = document.getElementById("canvas");//获取到canvas的对象，演员
            var context = canvas.getContext("2d");//获取到canvas画图的环境，演员表演的舞台
            canvas.width = canvas_width;
            canvas.height = canvas_height;
            var sCode = "a,b,c,d,e,f,g,h,i,j,k,m,n,p,q,r,s,t,u,v,w,x,y,z,A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0";
            var aCode = sCode.split(",");
            var aLength = aCode.length;//获取到数组的长度
            
            for (var i = 0; i < 4; i++) {  //这里的for循环可以控制验证码位数（如果想显示6位数，4改成6即可）
                var j = Math.floor(Math.random() * aLength);//获取到随机的索引值
                // var deg = Math.random() * 30 * Math.PI / 180;//产生0~30之间的随机弧度
                var deg = Math.random() - 0.5; //产生一个随机弧度
                var txt = aCode[j];//得到随机的一个内容
                show_num[i] = txt.toLowerCase();
                var x = 10 + i * 20;//文字在canvas上的x坐标
                var y = 20 + Math.random() * 8;//文字在canvas上的y坐标
                context.font = "bold 23px 微软雅黑";

                context.translate(x, y);
                context.rotate(deg);

                context.fillStyle = randomColor();
                context.fillText(txt, 0, 0);

                context.rotate(-deg);
                context.translate(-x, -y);
            }
            for (var i = 0; i <= 5; i++) { //验证码上显示线条
                context.strokeStyle = randomColor();
                context.beginPath();
                context.moveTo(Math.random() * canvas_width, Math.random() * canvas_height);
                context.lineTo(Math.random() * canvas_width, Math.random() * canvas_height);
                context.stroke();
            }
            for (var i = 0; i <= 30; i++) { //验证码上显示小点
                context.strokeStyle = randomColor();
                context.beginPath();
                var x = Math.random() * canvas_width;
                var y = Math.random() * canvas_height;
                context.moveTo(x, y);
                context.lineTo(x + 1, y + 1);
                context.stroke();
            }
        }

        //得到随机的颜色值
        function randomColor() {
            var r = Math.floor(Math.random() * 256);
            var g = Math.floor(Math.random() * 256);
            var b = Math.floor(Math.random() * 256);
            return "rgb(" + r + "," + g + "," + b + ")";
        }
      
    })

    //注册选项卡
        $(".kuai").on("click",function(){
            $(".zhanghao").css("display","none");
            $(".shouji").css("display","block");
           
            $(".kuai").css({
                "background":"white",
                "border-top": "2px solid #C80F1E"
            })
            $(".man").css({
                "background":"#EEEEEE",
                "border-top": "2px solid #EEEEEE"
            })
        })

        $(".man").on("click",function(){
            $(".zhanghao").css("display","block");
            $(".shouji").css("display","none");

            $(".man").css({
                "background":"white",
                "border-top": "2px solid #C80F1E"
            })
            $(".kuai").css({
                "background":"#EEEEEE",
                "border-top": "2px solid #EEEEEE"
            })
           
        })
})