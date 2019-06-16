{/* <script type="text/javascript"> */ }

$(function () {
    var resc = location.search.slice(1);
    // console.log(resc);


    $.ajax({
        type: 'post',
        url: '../api/goods_tea.php',
        data: 'id=' + resc, // 拼接
        // 成功的回调
        success: function (res) {
            console.log(res);
            create(res);
        }
        
    });


    // 数据渲染
    function create(res) {
        // 把字符串转为对象
        var arr = JSON.parse(res);
        // console.log(arr);

        var tex = arr.map(function (itme) {
            return`<h1 id="lgoodname">
                            ${itme.name}
                            <span id="emailkc"></span>
                            <input id="pdataID" type="hidden" value="06f6c387-5fd8-4d03-bd92-73e88e5f805f">
                            <input id="pID" type="hidden" value="421e3795-c740-476d-b5ae-d1a3232a5543">
                        </h1>

                        <ul class="txtbox_pri">
                            <li class="t1" id="salePriceExplain">活动价</li>
                            <li class="t2">¥<strong id="salePrice">${itme.pri}</strong></li>
                            <li class="t3" style="display: none;">
                                <span>特享</span>
                                <font id="saleMessage"></font>
                            </li>
                            <li class="t4">和茶价 ¥<del id="hechaPrice">${itme.tea_price}</del></li>
                            <li class="t5">市场价 ¥<del id="marketPrice">${itme.price}</del></li>
                            <div class="clear line20">
                            </div>
                            <div class="SecDiv" style="display:none;" id="timer"></div>
                        </ul>

                        <!-- 第二个ul内容 -->
                        <ul class="txtbox_info1">
                            <li class="info1_t1">
                                <p class="info_left">
                                    配 送 至&nbsp;:</p>
                                <div class="zoli">
                                    <div class="zox ixpop">
                                        <a href="###"><span id="showproname">福建省</span></a>
                                        <div class="ixbox" id="dq">
                                            <p>
                                                <a href="###">吉林省</a>
                                                <a href="###">北京</a>
                                                <a href="###">内蒙古</a>
                                                <a href="###">云南省</a>
                                                <a href="###">上海</a>
                                                <a href="###">四川省</a>
                                                <a href="###">天津</a>
                                                <a href="###">宁夏</a>
                                                <a href="###">安徽省</a>
                                                <a href="###">山东省</a>
                                                <a href="###">山西省</a>
                                                <a href="###">广东省</a>
                                                <a href="###">广西</a>
                                                <a href="###">新疆</a>
                                                <a href="###">江苏省</a>
                                                <a href="###">江西省</a>
                                                <a href="###">河北省</a>
                                                <a href="###">河南省</a>
                                                <a href="###">浙江省</a>
                                                <a href="###">海南省</a>
                                                <a href="###">湖北省</a>
                                                <a href="###">湖南省</a>
                                                <a href="###">甘肃省</a>
                                                <a href="###">福建省</a>
                                                <a href="###">西藏</a>
                                                <a href="###">贵州省</a>
                                                <a href="###">辽宁省</a>
                                                <a href="###">重庆</a>
                                                <a href="###">陕西省</a>
                                                <a href="###">青海省</a>
                                                <a href="###">黑龙江省</a>
                                                <a href="###">海外</a>
                                            </p>
                                        </div>
                                        <!--[if lte IE 6]></td></tr></table></a><![endif]-->
                                    </div>
                                </div>
                                <p class="zoi" id="showSaleRule">运费 ¥6 </p>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <p class="zom">
                                    <span id="quehuo">&nbsp;<span style="color:red;">还剩10件<span></span></span></span>
                                </p>
                                <div class="clear">
                                </div>
                            </li>
                            <li class="info1_t2">
                                <p class="info_left"> 顾客评分：</p>
                                <p>
                                    <!--fzh-->
                                    <span id="avgcomment">
                                        <span class="xstars bg">
                                            <a href="#comment" onclick="return go_comment_focus()">
                                                <span title="4.75分">&nbsp;</span></a>
                                        </span>
                                        4.75分
                                    </span>
                                </p>
                                (&nbsp;<span id="total_com_num" class="link1"><a href="#comment"
                                        onclick="return go_comment_focus()">已有<span
                                            id="productNumber">${itme.com}</span>人评论</a></span>&nbsp;)
                            </li>
                        </ul>

                        <!-- 第三个ul内容 -->
                        <ul class="txtbox_info2">
                            <li class="info2_t1">
                                <p class="info_left"> 品牌商家：</p>
                                <p>滋恩</p>
                            </li>
                            <li class="info2_t2">
                                <p class="info_left"> 产地：</p>
                                <p>福建南平</p>
                            </li>
                            <li class="info2_t3">
                                <p class="info_left"> 等级：</p>
                                <p>特级</p>
                            </li>
                            <li class="info2_t4">
                                <p class="info_left"> 保质期：</p>
                                <p>3年</p>
                            </li>
                            <li class="info2_t7">
                                <p class="info_left"> 产品编号：</p>
                                <p>hcw005588</p>
                            </li>
                            <li class="info2_t5">
                                <p class="info_left"> 产品规格：</p>
                                <p>${itme.specification}</p>
                            </li>
                            <li class="info2_t6 tt">
                                <p class="info_left"> 存储方法：</p>
                                <p>存放于清洁、通风、避光、干燥、无异味环境。</p>
                            </li>

                            <div class="clear">
                            </div>
                        </ul>

                        <!-- 第四个ul -->
                        <ul class="txtbox_info3">
                            <li class="info3_t1 crz">
                                <p class="info_left">
                                    我要购买：
                                </p>
                                <div class="goods_inp">
                                    <input id="goodsnum" style="text-align: center" name="goodsnum" value="1"
                                        type="text">
                                    <i class="goods_add">+</i> <i class="goods_min">-</i>
                                </div>
                                <p>
                                    件
                                </p>
                                <p class="goods_inp_info">
                                    <span style="display: none;">最多只能购买99件</span>
                                </p>
                            </li>
                            <!--立即购买-->
                            <li class="buy" id="nowbuy">
                                <a id="NowShop" target="_blank" href="###">
                                    <img src="../images/goodsinfo_buy1.png">
                                </a>
                            </li>
                            <!--加入购物车-->
                            <li class="buy" id="nowcart">
                                <a id="AddShopCart" href="###">
                                    <img src="../images/goodsinfo_buy2.png">
                                </a>
                            </li>
                            <div class="clear">
                            </div>
                        </ul>`
        }).join('');
        // console.log(tex);
        $('.shareto_txtbox').html(tex);

        //加入购物车
        $("#AddShopCart").click(function () {
            $.ajax({
                type: "post",
                url: "../api/add.php",
                data: {
                    "id": resc,
                    "num": 1,
                },
                success: function (res) {
                    // console.log(res);
                    window.open('cart.html');
                }
            })
            alert("加入成功");
        })

    }
// console.log(resc);

    // 放大镜渲染

    // function create(res) {
    //     // 把字符串转为对象
    //     var arr = JSON.parse(res);
    //     console.log(arr);
    //     var tex = arr.map(function (itme) {
    //         var img1 = (item.img).split("&")[0]; //切割图片
    //         var img2 = (item.img).split("&")[1]; //切割图片
    //         var img3 = (item.img).split("&")[2]; //切割图片
    //         var img4 = (item.img).split("&")[3]; //切割图片
    //         var img5 = (item.img).split("&")[4]; //切割图片
    //     });
    // }


    
});










// 放大镜
; (function () {

    










    /**
    *
    *	作者	: 老可
    * 	日期	: 改：2015-10-13
    *	版本	: v1.6
    *	QQ  	: 279662403 群 246502174
    * 	兼容性  : IE6+ 
    *   ******* :1. 更改获取图片方式，以小图li为基础通过自定义属性data-lsrc和data-maxSrc来获取,
                 2. 修复safari bug
    */

    var EventUtil, Get, Element;
    EventUtil = {
        addHandler: function (ele, type, handler) {
            if (ele.addEventListener) {
                ele.addEventListener(type, handler, false)
            } else if (ele.attachEvent) {
                ele.attachEvent("on" + type, handler)
            } else {
                ele["on" + type] = handler;
            }
        },
        removeHandler: function (element, type, handler) {
            if (element.removeEventListener) {
                element.removeEventListener(type, handler, false);
            } else if (element.detachEvent) {
                element.detachEvent("on" + type, handler);
            } else {
                element["on" + type] = null;
            }
        },
        getEvent: function (event) {
            return event ? event : window.event;
        },
        getTarget: function (event) {
            return event.target || event.srcElement;
        },
        preventDefault: function (event) {
            if (event.preventDefault) {
                event.preventDefault();
            } else {
                event.returnValue = false;
            }
        },
        stopPropagation: function (event) {
            if (event.stopPropagation) {
                event.stopPropagation();
            } else {
                event.cancelBubble = true;
            }
        }
    };

    Get = {
        byId: function (id) {
            return typeof id === "string" ? document.getElementById(id) : id
        },
        byClass: function (sClass, oParent) {
            var aClass = [];
            var reClass = new RegExp("(^| )" + sClass + "( |$)");
            var aElem = this.byTagName("*", oParent);
            for (var i = 0; i < aElem.length; i++) reClass.test(aElem[i].className) && aClass.push(aElem[i]);
            return aClass
        },
        byTagName: function (elem, obj) {
            return (obj || document).getElementsByTagName(elem)
        }
    };

    Element = {
        hasClass: function (obj, name) {
            return (' ' + obj.className + ' ').indexOf(' ' + name + ' ') > -1 ? true : false;
        },
        addClass: function (obj, name) {
            if (this.hasClass(obj, name)) return;
            obj.className += ' ' + name;
        },
        removeClass: function (obj, name) {
            obj.className = obj.className.replace(new RegExp('(^|\\s)' + name + '(?:\\s|$)'), '$1').replace(/\s{1,}/g, ' ');
        }
    }

    function MagnifierF() {
        this.init.apply(this, arguments);
    }

    MagnifierF.prototype = {
        init: function (id) {
            var _is = this;
            this.magWrap = Get.byId(id);
            this.magMain = this.magWrap.children[0];
            this.mW = this.magMain.offsetWidth;
            this.mH = this.magMain.offsetHeight;
            this.magImg = this.magMain.getElementsByTagName('img')[0];
            this.mImgSrc = this.magImg.getAttribute('data-src');

            this.specBox = Get.byClass("spec-items", this.magWrap)[0];
            this.specUl = this.specBox.getElementsByTagName('ul')[0];
            this.specItem = this.specBox.getElementsByTagName('li');


            _is.specFn();
            _is.setEventFn().dragEvent();



        },
        setEleFn: function () {
            var _is = this,
                _html1 = "",
                oFrag = document.createDocumentFragment(),
                oFrag2 = document.createDocumentFragment();

            if (_is.magMain.children[1]) {
                return;
            } else {
                _is.oMD = document.createElement('div');
                _is.oMD.className = "MagnifierDrag";
                _is.oMD.style.cssText = 'width:' + _is.mW / 2 + 'px;height:' + _is.mH / 2 + 'px;';
                _is.oMD.innerHTML = "&nbsp;";

                _is.oMP = document.createElement('div');
                _is.oMP.className = 'MagnifierPop';
                _is.oMP.style.cssText = 'width:' + _is.mW + 'px;height:' + _is.mH + 'px;right:' + (-_is.mW - 10) + 'px;';

                _is.oMI = document.createElement('div');
                _is.oMI.className = 'MagnifierImg';
                _is.oMI.style.cssText = 'width:' + _is.mW * 2 + 'px;height:' + _is.mH * 2 + 'px;';
                _html1 = '<img style="width:100%;height:100%;" src="' + _is.mImgSrc + '">'
                _is.oMI.innerHTML = _html1;

                _is.oMP.appendChild(_is.oMI)

                oFrag.appendChild(_is.oMD);
                oFrag2.appendChild(_is.oMP);

                _is.magMain.appendChild(oFrag);
                _is.magWrap.appendChild(oFrag2);

            }
        },
        removeFn: function (event) {
            var _is = this;
            var target = EventUtil.getTarget(event);

            if (target.nodeName == "IMG") {
                return;
            } else {
                _is.magMain.removeChild(_is.oMD);
                _is.magWrap.removeChild(_is.oMP);
            }
        },
        setMousemoveFn: function (event) {
            var _is = this,

                _WinScrTop = document.documentElement.scrollTop || document.body.scrollTop;
                _WinScrLeft = document.documentElement.scrollLeft || document.body.scrollLeft;

            _x = event.clientX + _WinScrLeft -
                (_is.magWrap.getBoundingClientRect().left + _WinScrLeft) - _is.oMD.offsetWidth / 2;

            _y = event.clientY + _WinScrTop -
                (_is.magMain.getBoundingClientRect().top + _WinScrTop) - _is.oMD.offsetHeight / 2;

            _l = _is.magMain.offsetWidth - _is.oMD.offsetWidth;
            _t = _is.magMain.offsetHeight - _is.oMD.offsetHeight;

            _l2 = - (_is.oMI.offsetWidth - _is.magMain.offsetWidth);
            _t2 = - (_is.oMI.offsetHeight - _is.magMain.offsetHeight);

            if (_x < 0) {
                _x = 0;
            }
            else if (_x > _l) {
                _x = _l;
            }

            if (_y < 0) {
                _y = 0;
            }
            else if (_y > _t) {
                _y = _t;
            }


            _is.oMD.style.left = _x + "px";
            _is.oMD.style.top = _y + "px";


            _bigx = _x / _l;
            _bigy = _y / _t;


            _is.oMI.style.left = _bigx * _l2 + "px";
            _is.oMI.style.top = _bigy * _t2 + "px";
        },
        setEventFn: function () {
            var _is = this,
                _x = 0,
                _y = 0,
                _l = 0,
                _t = 0,
                _bigx = 0,
                _bigy = 0,
                _l2 = 0,
                _t2 = 0;

            function handleEvent(event) {
                events = EventUtil.getEvent(event);
                switch (event.type) {
                    case "mouseover":
                        _is.setEleFn();
                        break;
                    case "mousemove":
                        if (_is.oMD) {
                            _is.setMousemoveFn(event);
                        }
                        break;
                    case "mouseout":
                        _is.removeFn(event);
                        break;
                }

            }
            return {
                dragEvent: function () {

                    EventUtil.addHandler(_is.magMain, "mouseover", handleEvent);
                    EventUtil.addHandler(_is.magMain, "mousemove", handleEvent);
                    EventUtil.addHandler(_is.magMain, "mouseout", handleEvent);
                }
            }

        },
        specFn: function () {
            var _is = this, _oSpImg, _oISrc, _oMaxSrc,
                oLBtn = Get.byClass("spe_leftBtn", _is.magWrap)[0],
                oRBtn = Get.byClass("spe_rightBtn", _is.magWrap)[0],
                oLiW = this.specUl.getElementsByTagName('li')[0].offsetWidth + 5,
                _len = _is.specItem.length,
                n = 0,
                l = null,
                r = null;

            function TabFn(event) {
                var target = EventUtil.getTarget(event),
                    i = 0;

                if (target.nodeName != "UL") {

                    if (target.nodeName == "IMG") {
                        target = target.parentNode;
                    }
                    for (; i < _len; i++) {
                        _is.specItem[i].className = '';
                    }
                    target.className = 'on';

                    _oSpImg = target.getElementsByTagName('img')[0];
                    _oISrc = _oSpImg.getAttribute('data-lsrc');
                    _oMaxSrc = _oSpImg.getAttribute('data-maxSrc');

                    //data-lsrc data-maxSrc
                    _is.magImg.setAttribute('src', _oISrc);
                    //_is.mImgSrc = _oMaxSrc;
                    _is.magImg.setAttribute('data-src', _oMaxSrc);
                    _is.mImgSrc = _is.magImg.getAttribute('data-src');
                }

            }
            EventUtil.addHandler(_is.specUl, "mouseover", TabFn);

            function moveFn(event) {
                var target = EventUtil.getTarget(event);

                if (target.className.indexOf("spe_rightBtn") > -1) {
                    r = ++n;
                    if (r > _len - 5)
                        Element.removeClass(target, "on");

                    if (r > _len - 4) {

                        n = _len - 4;
                        return false;
                    } else {

                        _is.buttur(_is.specUl, { left: -(r * oLiW) });
                        Element.addClass(oLBtn, "on");
                    }
                }
                if (target.className.indexOf("spe_leftBtn") > -1) {
                    l = --n;
                    if (l < 1)
                        Element.removeClass(target, "on");

                    if (l < 0) {

                        n = 0;
                        return false;
                    } else {

                        _is.buttur(_is.specUl, { left: -(l * oLiW) });
                        Element.addClass(oRBtn, "on");
                    }
                }
            }

            if (_len > 4) {

                Element.addClass(oRBtn, "on");
                EventUtil.addHandler(_is.magWrap, "click", moveFn);
            }



        },
        buttur: function (ele, obj) {

            window.clearTimeout(ele.timer);

            var _this = this,
                end = null;

            for (direc in obj) {

                var direc1 = direc.toLowerCase(),
                    strOffset = "offset" + direc1.substr(0, 1).toUpperCase() + direc1.substring(1).toLowerCase(),
                    target = obj[direc],
                    nSpeed = (target - ele[strOffset]) / 8;

                nSpeed = nSpeed >= 0 ? Math.ceil(nSpeed) : Math.floor(nSpeed);
                ele.style[direc1] = ele[strOffset] + nSpeed + "px";
                end += nSpeed;

            }

            if (end)

                if (typeof fnCallback == "function") {
                    fnCallback.call(ele);
                } else {

                    ele.timer = window.setTimeout(function () {
                        _this.buttur(ele, obj)
                    }, 20);

                }
        }

    }

    window['MagnifierF'] = function (id) {
        return new MagnifierF(id);
    }

})()


window.onload = function () {


    MagnifierF("MagnifierWrap2");

}
        // </script>