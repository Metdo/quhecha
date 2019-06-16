/*
Navicat MySQL Data Transfer

Source Server         : Mydatabase
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : tea

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2019-06-15 17:15:27
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for tea_cart
-- ----------------------------
DROP TABLE IF EXISTS `tea_cart`;
CREATE TABLE `tea_cart` (
  `id` int(11) NOT NULL,
  `img` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `pri` float DEFAULT NULL,
  `price` float DEFAULT NULL,
  `discount` float NOT NULL,
  `num` int(255) NOT NULL AUTO_INCREMENT,
  `kucun` int(255) DEFAULT NULL,
  PRIMARY KEY (`id`,`num`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tea_cart
-- ----------------------------
INSERT INTO `tea_cart` VALUES ('1', '../images/prolist1.JPG&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【滋恩】隽永大红袍50g*2罐特惠装', '59', '176', '3.4', '1', '50');
INSERT INTO `tea_cart` VALUES ('2', '../images/prolist2.JPG&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【滋恩】明前龙井牛皮纸包250g', '348', '599', '4.9', '1', '64');
INSERT INTO `tea_cart` VALUES ('3', '../images/prolist3.JPG&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【和茶原叶】明前西湖龙井牛皮纸包250g', '388', '699', '6.5', '1', '57');
INSERT INTO `tea_cart` VALUES ('4', '../images/prolist4.JPG&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【一品堂】菊花味小沱普洱熟茶150g*3', '69', '234', '2', '1', '45');
INSERT INTO `tea_cart` VALUES ('6', '../images/prolist6.JPG&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【一品堂】一品佳茶画100g*2普洱熟茶（07年）', '79', '216', '3', '1', '64');

-- ----------------------------
-- Table structure for tea_index
-- ----------------------------
DROP TABLE IF EXISTS `tea_index`;
CREATE TABLE `tea_index` (
  `id` int(11) NOT NULL,
  `img` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `title_name` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tea_index
-- ----------------------------
INSERT INTO `tea_index` VALUES ('1', '../images/pic40.png', '老客户了 依然非常喜欢 质量有保证 全五分 值得推荐 服务非 常周到 从这里购物心情愉快 话不多说了 总之老板很好。', '来自388****2614@qq.com', '茉莉花茶盒装100g &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|', '68');
INSERT INTO `tea_index` VALUES ('2', '../images/pic41.png', '发货很快，包装精致，没有破损，打开包装就能闻到一股茶 香味，茶叶很新鲜，干净无杂质，条索状实，汤色橙黄清澈， 茶香醇厚悠长，叶', '来自475****8@qq.com', '武夷大红袍 尊品礼盒 250g &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|', '328');
INSERT INTO `tea_index` VALUES ('3', '../images/pic42.png', '这台机子超好用，买办公茶时购买的，同事们使用喝都开始 爱喝茶了。又便捷智能，客户来公司接待都好奇问这是啥？ 涨面儿。打算买台小', '来自247****4609@qq.com', '立式大众型智能茶饮机（G2）&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|', '3980');

-- ----------------------------
-- Table structure for tea_list
-- ----------------------------
DROP TABLE IF EXISTS `tea_list`;
CREATE TABLE `tea_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `img` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `pri` float DEFAULT NULL,
  `name_pri` varchar(255) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `com` int(11) DEFAULT NULL,
  `buy` varchar(255) DEFAULT NULL,
  `shopping_trolley` varchar(255) DEFAULT NULL,
  `tea_price` float DEFAULT NULL,
  `specification` varchar(255) DEFAULT NULL,
  `kucun` int(11) DEFAULT NULL,
  `discount` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=69 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tea_list
-- ----------------------------
INSERT INTO `tea_list` VALUES ('1', '../images/prolist1.JPG&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【滋恩】隽永大红袍50g*2罐特惠装', '59', '市场价', '176', '34031', '立即购买', '加入购物车', '88', '50g*2', '50', '3.4');
INSERT INTO `tea_list` VALUES ('2', '../images/prolist2.JPG&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【滋恩】明前龙井牛皮纸包250g', '348', '市场价', '599', '0', '立即购买', '加入购物车', '499', '250g', '64', '4.9');
INSERT INTO `tea_list` VALUES ('3', '../images/prolist3.JPG&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【和茶原叶】明前西湖龙井牛皮纸包250g', '388', '市场价', '699', '1798', '立即购买', '加入购物车', '599', '250g', '57', '6.5');
INSERT INTO `tea_list` VALUES ('4', '../images/prolist4.JPG&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【一品堂】菊花味小沱普洱熟茶150g*3', '69', '市场价', '234', '0', '立即购买', '加入购物车', '199', '150g*3', '45', '2');
INSERT INTO `tea_list` VALUES ('5', '../images/prolist5.JPG&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【滋恩】勐海陈香普洱茶饼熟茶357g*2', '89', '市场价', '236', '45466', '立即购买', '加入购物车', '188', '357g*2', '50', '2.5');
INSERT INTO `tea_list` VALUES ('6', '../images/prolist6.JPG&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【一品堂】一品佳茶画100g*2普洱熟茶（07年）', '79', '市场价', '216', '679', '立即购买', '加入购物车', '168', '100g*2', '64', '3');
INSERT INTO `tea_list` VALUES ('7', '../images/prolist7.JPG&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【一品堂】糯米生沱民族风情布袋装150g*3', '69', '市场价', '234', '8806', '立即购买', '加入购物车', '88', '150g*3', '57', '5');
INSERT INTO `tea_list` VALUES ('8', '../images/prolist8.JPG&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【滋恩】茉莉花茶银毫牛皮纸袋60g', '56', '市场价', '108', '9350', '立即购买', '加入购物车', '66', '60g', '45', '1');
INSERT INTO `tea_list` VALUES ('9', '../images/prolist9.JPG&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【滋恩】黄山毛峰一级牛皮纸袋25g', '29', '市场价', '117', '26367', '立即购买', '加入购物车', '99', '25g', '50', '3.4');
INSERT INTO `tea_list` VALUES ('10', '../images/prolist10.JPG&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【滋恩】红枣干姜茶罐装40g', '39', '市场价', '46', '500', '立即购买', '加入购物车', '45', '40g', '64', '4.9');
INSERT INTO `tea_list` VALUES ('11', '../images/prolist11.JPG&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【滋恩】印象江南普洱熟茶饼357g*2饼', '45', '市场价', '138', '70', '立即购买', '加入购物车', '98', '50g*3', '57', '6.5');
INSERT INTO `tea_list` VALUES ('12', '../images/prolist12.JPG&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【一品堂】一品佳茶画100g*2普洱生茶（06年）', '69', '市场价', '188', '557', '立即购买', '加入购物车', '128', '250g', '45', '2');
INSERT INTO `tea_list` VALUES ('13', '../images/pic19.png&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【滋恩】明前西湖龙井牛皮纸包250g', '29', '市场价', '68', '234', '立即购买', '加入购物车', '178', '250g', '50', '2.5');
INSERT INTO `tea_list` VALUES ('14', '../images/pic20.png&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【滋恩】麦香活力茶罐装32g', '158', '市场价', '199', '34', '立即购买', '加入购物车', '166', '150g*4', '64', '3');
INSERT INTO `tea_list` VALUES ('15', '../images/pic21.png&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【滋恩】玫瑰荷叶茶罐装32g', '48', '市场价', '99', '755', '立即购买', '加入购物车', '77', '357g*3', '57', '5');
INSERT INTO `tea_list` VALUES ('16', '../images/pic31.png&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【一品堂】云南一品普洱生饼云南金奖（07年珍藏版）357g', '39', '市场价', '88', '345', '立即购买', '加入购物车', '298', '100g*3', '45', '1');
INSERT INTO `tea_list` VALUES ('17', '../images/pic23.png&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【一品堂】一品茶韵357g普洱熟茶（08年）', '49', '市场价', '89', '85', '立即购买', '加入购物车', '69', '150g*4', '50', '3.4');
INSERT INTO `tea_list` VALUES ('18', '../images/pic24.png&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【一品堂】一品佳茶画100g*2普洱熟茶（07年）', '99', '市场价', '189', '57', '立即购买', '加入购物车', '158', '60g', '64', '4.9');
INSERT INTO `tea_list` VALUES ('19', '../images/pic25.png&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【一品堂】糯米生沱民族风情布袋装150g*3', '166', '市场价', '236', '999', '立即购买', '加入购物车', '189', '25g', '57', '6.5');
INSERT INTO `tea_list` VALUES ('20', '../images/pic26.png&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【滋恩】易武醇韵普洱熟茶饼357g', '168', '市场价', '259', '213', '立即购买', '加入购物车', '222', '40g', '45', '2');
INSERT INTO `tea_list` VALUES ('21', '../images/pic27.png&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【滋恩】金针贡饼熟茶普洱饼357g', '199', '市场价', '578', '232', '立即购买', '加入购物车', '399', '50g*3', '50', '2.5');
INSERT INTO `tea_list` VALUES ('22', '../images/pic28.png&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【滋恩】特级大红袍牛皮纸袋装50g', '66', '市场价', '128', '343', '立即购买', '加入购物车', '100', '250g', '64', '3');
INSERT INTO `tea_list` VALUES ('23', '../images/pic29.png&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【滋恩】一级碧螺春罐装70g', '78', '市场价', '189', '4789', '立即购买', '加入购物车', '145', '250g', '57', '5');
INSERT INTO `tea_list` VALUES ('24', '../images/pic30.png&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【滋恩】特级茉莉花茶 长圆罐装 125g', '88', '市场价', '149', '978', '立即购买', '加入购物车', '119', '150g*4', '45', '1');
INSERT INTO `tea_list` VALUES ('25', '../images/list1.JPG&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【滋恩】隽永大红袍50g*3罐特惠装', '59', '市场价', '176', '23423', '立即购买', '加入购物车', '139', '357g*3', '50', '3.4');
INSERT INTO `tea_list` VALUES ('26', '../images/list2.JPG&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【滋恩】明前龙井牛皮纸包251g', '348', '市场价', '599', '543', '立即购买', '加入购物车', '488', '100g*3', '64', '4.9');
INSERT INTO `tea_list` VALUES ('27', '../images/list3.JPG&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【和茶原叶】明前西湖龙井牛皮纸包251g', '388', '市场价', '699', '5657', '立即购买', '加入购物车', '578', '150g*4', '57', '6.5');
INSERT INTO `tea_list` VALUES ('28', '../images/list4.JPG&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【一品堂】菊花味小沱普洱熟茶150g*4', '69', '市场价', '234', '199', '立即购买', '加入购物车', '199', '60g', '45', '2');
INSERT INTO `tea_list` VALUES ('29', '../images/list5.JPG&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【滋恩】勐海陈香普洱茶饼熟茶357g*3', '89', '市场价', '236', '683', '立即购买', '加入购物车', '156', '25g', '50', '2.5');
INSERT INTO `tea_list` VALUES ('30', '../images/list6.JPG&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【一品堂】一品佳茶画100g*2普洱熟茶（08年）', '79', '市场价', '216', '7354', '立即购买', '加入购物车', '134', '40g', '64', '3');
INSERT INTO `tea_list` VALUES ('31', '../images/list7.JPG&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【一品堂】糯米生沱民族风情布袋装150g*4', '69', '市场价', '234', '3253', '立即购买', '加入购物车', '99', '50g*4', '57', '5');
INSERT INTO `tea_list` VALUES ('32', '../images/list8.JPG&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【滋恩】易武醇韵普洱熟茶饼358g', '56', '市场价', '108', '574', '立即购买', '加入购物车', '66', '250g', '45', '1');
INSERT INTO `tea_list` VALUES ('33', '../images/list9.JPG&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【滋恩】金针贡饼熟茶普洱饼358g', '89', '市场价', '118', '456', '立即购买', '加入购物车', '77', '250g', '50', '3.4');
INSERT INTO `tea_list` VALUES ('34', '../images/list10.JPG&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【滋恩】特级大红袍牛皮纸袋装51g', '29', '市场价', '46', '567', '立即购买', '加入购物车', '97', '150g*5', '64', '4.9');
INSERT INTO `tea_list` VALUES ('35', '../images/prolist11.JPG&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【滋恩】一级碧螺春罐装71g', '45', '市场价', '138', '234', '立即购买', '加入购物车', '96', '357g*4', '57', '6.5');
INSERT INTO `tea_list` VALUES ('36', '../images/prolist5.JPG&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【滋恩】特级茉莉花茶 长圆罐装 126g', '69', '市场价', '188', '521', '立即购买', '加入购物车', '123', '100g*4', '45', '2');
INSERT INTO `tea_list` VALUES ('37', '../images/prolist1.JPG&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【滋恩】隽永大红袍50g*3罐特惠装', '128', '市场价', '188', '520', '立即购买', '加入购物车', '139', '150g*5', '50', '2.5');
INSERT INTO `tea_list` VALUES ('38', '../images/prolist2.JPG&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【滋恩】明前龙井牛皮纸包251g', '158', '市场价', '199', '1133', '立即购买', '加入购物车', '167', '60g', '64', '3');
INSERT INTO `tea_list` VALUES ('39', '../images/prolist3.JPG&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【和茶原叶】明前西湖龙井牛皮纸包251g', '48', '市场价', '99', '1414', '立即购买', '加入购物车', '67', '25g', '57', '5');
INSERT INTO `tea_list` VALUES ('40', '../images/prolist4.JPG&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【一品堂】菊花味小沱普洱熟茶150g*4', '39', '市场价', '88', '1314', '立即购买', '加入购物车', '54', '40g', '45', '1');
INSERT INTO `tea_list` VALUES ('41', '../images/prolist5.JPG&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【滋恩】勐海陈香普洱茶饼熟茶357g*3', '49', '市场价', '89', '2', '立即购买', '加入购物车', '65', '50g*4', '50', '3.4');
INSERT INTO `tea_list` VALUES ('42', '../images/prolist6.JPG&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【一品堂】一品佳茶画100g*2普洱熟茶（08年）', '99', '市场价', '189', '736', '立即购买', '加入购物车', '143', '250g', '64', '4.9');
INSERT INTO `tea_list` VALUES ('43', '../images/prolist7.JPG&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【一品堂】糯米生沱民族风情布袋装150g*4', '166', '市场价', '236', '3762', '立即购买', '加入购物车', '178', '250g', '57', '6.5');
INSERT INTO `tea_list` VALUES ('44', '../images/prolist8.JPG&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【滋恩】易武醇韵普洱熟茶饼358g', '168', '市场价', '259', '253', '立即购买', '加入购物车', '234', '150g*5', '45', '2');
INSERT INTO `tea_list` VALUES ('45', '../images/prolist9.JPG&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【滋恩】金针贡饼熟茶普洱饼358g', '199', '市场价', '578', '948', '立即购买', '加入购物车', '367', '357g*4', '50', '2.5');
INSERT INTO `tea_list` VALUES ('46', '../images/prolist10.JPG&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【滋恩】特级大红袍牛皮纸袋装51g', '66', '市场价', '128', '3436', '立即购买', '加入购物车', '76', '100g*4', '64', '3');
INSERT INTO `tea_list` VALUES ('47', '../images/prolist11.JPG&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【滋恩】一级碧螺春罐装71g', '78', '市场价', '189', '9848', '立即购买', '加入购物车', '136', '150g*5', '57', '5');
INSERT INTO `tea_list` VALUES ('48', '../images/prolist12.JPG&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【滋恩】特级茉莉花茶 长圆罐装 126g', '88', '市场价', '149', '457', '立即购买', '加入购物车', '121', '60g', '45', '1');
INSERT INTO `tea_list` VALUES ('49', '../images/pic19.png&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【滋恩】隽永大红袍50g*4罐特惠装', '59', '市场价', '176', '86', '立即购买', '加入购物车', '122', '25g', '50', '3.4');
INSERT INTO `tea_list` VALUES ('50', '../images/pic20.png&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【滋恩】明前龙井牛皮纸包252g', '348', '市场价', '599', '75', '立即购买', '加入购物车', '399', '40g', '64', '4.9');
INSERT INTO `tea_list` VALUES ('51', '../images/pic21.png&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【和茶原叶】明前西湖龙井牛皮纸包252g', '388', '市场价', '699', '576', '立即购买', '加入购物车', '543', '50g*5', '57', '6.5');
INSERT INTO `tea_list` VALUES ('52', '../images/pic30.png&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【一品堂】菊花味小沱普洱熟茶150g*5', '69', '市场价', '234', '643', '立即购买', '加入购物车', '154', '250g', '45', '2');
INSERT INTO `tea_list` VALUES ('53', '../images/pic23.png&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【滋恩】勐海陈香普洱茶饼熟茶357g*4', '89', '市场价', '236', '3456', '立即购买', '加入购物车', '157', '250g', '50', '2.5');
INSERT INTO `tea_list` VALUES ('54', '../images/pic24.png&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【一品堂】一品佳茶画100g*2普洱熟茶（09年）', '79', '市场价', '216', '324', '立即购买', '加入购物车', '159', '150g*6', '64', '3');
INSERT INTO `tea_list` VALUES ('55', '../images/pic25.png&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【一品堂】糯米生沱民族风情布袋装150g*5', '69', '市场价', '234', '12415', '立即购买', '加入购物车', '179', '357g*5', '57', '5');
INSERT INTO `tea_list` VALUES ('56', '../images/pic26.png&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【滋恩】易武醇韵普洱熟茶饼359g', '56', '市场价', '108', '523', '立即购买', '加入购物车', '85', '100g*5', '45', '1');
INSERT INTO `tea_list` VALUES ('57', '../images/pic27.png&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【滋恩】金针贡饼熟茶普洱饼359g', '89', '市场价', '118', '2342', '立即购买', '加入购物车', '93', '150g*6', '50', '3.4');
INSERT INTO `tea_list` VALUES ('58', '../images/pic28.png&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【滋恩】特级大红袍牛皮纸袋装52g', '29', '市场价', '46', '637', '立即购买', '加入购物车', '35', '60g', '64', '4.9');
INSERT INTO `tea_list` VALUES ('59', '../images/pic29.png&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【滋恩】一级碧螺春罐装72g', '45', '市场价', '138', '834', '立即购买', '加入购物车', '55', '25g', '57', '6.5');
INSERT INTO `tea_list` VALUES ('60', '../images/pic30.png&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【滋恩】特级茉莉花茶 长圆罐装 127g', '69', '市场价', '188', '34637', '立即购买', '加入购物车', '162', '40g', '45', '2');
INSERT INTO `tea_list` VALUES ('61', '../images/list1.JPG&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【滋恩】隽永大红袍50g*4罐特惠装', '128', '市场价', '188', '963', '立即购买', '加入购物车', '146', '50g*5', '50', '2.5');
INSERT INTO `tea_list` VALUES ('62', '../images/list10.JPG&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【滋恩】明前龙井牛皮纸包252g', '158', '市场价', '199', '4577', '立即购买', '加入购物车', '166', '250g', '64', '3');
INSERT INTO `tea_list` VALUES ('63', '../images/list3.JPG&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【和茶原叶】明前西湖龙井牛皮纸包252g', '48', '市场价', '99', '5862', '立即购买', '加入购物车', '66', '250g', '57', '5');
INSERT INTO `tea_list` VALUES ('64', '../images/list8.JPG&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【一品堂】菊花味小沱普洱熟茶150g*5', '39', '市场价', '88', '23', '立即购买', '加入购物车', '64', '150g*6', '45', '1');
INSERT INTO `tea_list` VALUES ('65', '../images/list7.JPG&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【滋恩】勐海陈香普洱茶饼熟茶357g*4', '49', '市场价', '89', '45', '立即购买', '加入购物车', '69', '357g*5', '50', '3.4');
INSERT INTO `tea_list` VALUES ('66', '../images/list6.JPG&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【一品堂】一品佳茶画100g*2普洱熟茶（09年）', '99', '市场价', '189', '5', '立即购买', '加入购物车', '138', '100g*5', '64', '4.9');
INSERT INTO `tea_list` VALUES ('67', '../images/list5.JPG&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【一品堂】糯米生沱民族风情布袋装150g*5', '166', '市场价', '236', '1', '立即购买', '加入购物车', '188', '150g*6', '57', '6.5');
INSERT INTO `tea_list` VALUES ('68', '../images/list4.JPG&../images/20150731035226.JPG&../images/20150731035231.JPG&../images/20150731035236.JPG&../images/20150731035241.JPG', '【滋恩】易武醇韵普洱熟茶饼359g', '56', '市场价', '259', '0', '立即购买', '加入购物车', '166', '60g', '45', '2');

-- ----------------------------
-- Table structure for tea_name
-- ----------------------------
DROP TABLE IF EXISTS `tea_name`;
CREATE TABLE `tea_name` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Login_name` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `psw` varchar(50) DEFAULT NULL,
  `confirm` int(11) DEFAULT NULL,
  `issue` varchar(255) DEFAULT NULL,
  `answer` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `data` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=35 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tea_name
-- ----------------------------
INSERT INTO `tea_name` VALUES ('1', '18870279862', '', '123456', null, '你的三围是?&你的电话号码是?&你的母亲叫什么名字?&你的父亲叫什么名字?&你的老婆叫什么名字?&你的老公叫什么名字?&你的出生年月日?', '', '', '', null);
INSERT INTO `tea_name` VALUES ('2', '123', null, '123', null, null, null, '123', null, null);
INSERT INTO `tea_name` VALUES ('22', '', null, 'w123123', null, null, null, '123@qq.com', null, null);
INSERT INTO `tea_name` VALUES ('21', '', null, '', null, null, null, '', null, null);
INSERT INTO `tea_name` VALUES ('20', '1234', null, '1234', null, null, null, '1234', null, null);
INSERT INTO `tea_name` VALUES ('32', '18770780888', '傻嗨', 'xw1234', null, null, null, '321@qq.com', null, null);
INSERT INTO `tea_name` VALUES ('31', '15870099297', null, 'ming123456', null, null, null, '1681223@qq.com', null, null);
INSERT INTO `tea_name` VALUES ('23', '', null, 'w123123', null, null, null, '123@ww.com', null, null);
INSERT INTO `tea_name` VALUES ('24', '', null, 'w123123', null, null, null, 'qwe@qq.com', null, null);
INSERT INTO `tea_name` VALUES ('25', '', null, 'zjk1234', null, null, null, '123@qq.com', null, null);
INSERT INTO `tea_name` VALUES ('26', '', null, 'z12345', null, null, null, '123@qq.xn', null, null);
INSERT INTO `tea_name` VALUES ('27', '', null, 'xw1234', null, null, null, '123@qq.xon', null, null);
INSERT INTO `tea_name` VALUES ('28', '18870780880', null, 'xw1234', null, null, null, '123@qq.xom', null, null);
INSERT INTO `tea_name` VALUES ('29', '123@qq.com', null, 'w12345', null, null, null, '123@qq.com', null, null);
INSERT INTO `tea_name` VALUES ('30', '1234@qq.com', null, 'xw1234', null, null, null, '123@qq.com', null, null);
INSERT INTO `tea_name` VALUES ('33', '111@qq.com', '110', 'xw1234', null, null, null, '111@qq.com', null, null);
INSERT INTO `tea_name` VALUES ('34', '123456@qq.com', 'yujian', 'xw1234', null, null, null, '123456@qq.com', null, null);
SET FOREIGN_KEY_CHECKS=1;
