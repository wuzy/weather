function Weather() {};

Weather.prototype = {

  getWeather: function (city, callback) {
	    var that = this,
		    cities = Weather.cityParse(),
	        code = cities[city] ? cities[city] : 125,	
	        url = 'http://mat1.qq.com/weather/inc/minisite2_' + code + '.js';

		this.createJsonp(url, function (para) {
			var desc = that.weatherParse(para);
			callback(desc);
		});
	},
	
	createJsonp: function (url, callback) {
	    var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = url;

		script.onreadystatechange = function () {
		    if (script.readyState === 'loaded' || script.readyState === 'complete') {
			    callback(__minisite2__weather__);
			    script.onreadystatechange = null;
			    script.onload = null;
			}
		};

		script.onload = function () {
			callback(__minisite2__weather__);
			script.onreadystatechange = null;
			script.onload = null;
		};

		document.body.appendChild(script);
	},

	weatherParse: function (para) {
				  
		try {
		    var params = para.split(' ');
			var weather = {
			    city: params[0],
				temperature: params[1],
				range: params[2],
				describe: params[3]
			};

			return weather;
		} catch (e) {
		
		}
	}
};

Weather.cityParse = function () {
	    var cities = {},
	        prop,
			code,
			item;
	    
	    // 解析城市转为hash形式
		for (prop in this.city) {
		    item = Weather.city[prop];
			for (var city in item) {
				if (city !== '_') {
			        code = item[city];
					city = city.slice(0, -1);
				    cities[city] = code;
				}
			}
		}

		return cities;
	};

Weather.city =  {
		"北京市": {
			"_": 125,
			"北京市": 125
		},
		"上海市": {
			"_": 252,
			"上海市": 252
		},
		"天津市": {
			"_": 127,
			"天津市": 127,
			"塘沽区": 132
		},
		"重庆市" : {
			"_": 212,
			"奉节区": 201,
			"重庆市": 212,
			"涪陵区": 213
		},
		"香港": {
			"_": 1,
			"香港": 1
		},
		"澳门": {
			"_": 2,
			"澳门": 2
		},
		"台湾省": {
			"_": 280,
			"台北市": 280
		},
		"云南省": {
			"_": 179,
			"昭通市": 173,
			"丽江市": 174,
			"曲靖市": 175,
			"保山市": 176,
			"大理州": 177,
			"楚雄州": 178,
			"昆明市": 179,
			"瑞丽市": 180,
			"玉溪市": 181,
			"临沧市": 182,
			"思茅市": 184,
			"红河州": 185,
			"文山州": 369,
			"西双版纳州": 370,
			"德宏州": 371,
			"怒江州": 372,
			"迪庆州": 373
		},
		"内蒙古": {
			"_": 69,
			"呼伦贝尔市": 4,
			"兴安盟": 7,
			"锡林郭勒盟": 16,
			"巴彦淖尔市": 63,
			"包头市": 64,
			"呼和浩特市": 69,
			"锡林浩特市": 99,
			"通辽市": 101,
			"赤峰市": 106,
			"乌海市": 382,
			"鄂尔多斯市": 383,
			"乌兰察布市": 384
		},
		"吉林省": {
			"_": 103,
			"辽源市": 34,
			"通化市": 36,
			"白城市": 37,
			"松原市": 96,
			"长春市": 103,
			"吉林市": 104,
			"桦甸市": 109,
			"延边州": 110,
			"集安市": 118,
			"白山市": 119,
			"四平市": 385
		},
		"四川省": {
			"_": 166,
			"甘孜州": 162,
			"阿坝州": 163,
			"成都市": 166,
			"绵阳市": 167,
			"雅安市": 168,
			"峨眉山市": 170,
			"乐山市": 171,
			"宜宾市": 172,
			"巴中市": 199,
			"达州市": 200,
			"遂宁市": 204,
			"南充市": 205,
			"泸州市": 216,
			"自贡市": 359,
			"攀枝花市": 360,
			"德阳市": 361,
			"广元市": 362,
			"内江市": 363,
			"广安市": 364,
			"眉山市": 365,
			"资阳市": 366,
			"凉山州": 367
		},
		"宁夏": {
			"_": 78,
			"石嘴山市": 54,
			"银川市": 78,
			"吴忠市": 83,
			"固原市": 209
		},
		"安徽省": {
			"_": 248,
			"淮南市": 75,
			"马鞍山市": 76,
			"淮北市": 77,
			"铜陵市": 92,
			"滁州市": 95,
			"巢湖市": 100,
			"池州市": 102,
			"宣城市": 105,
			"亳州市": 238,
			"宿州市": 239,
			"阜阳市": 241,
			"六安市": 242,
			"蚌埠市": 243,
			"合肥市": 248,
			"芜湖市": 249,
			"安庆市": 253,
			"黄山市": 254
		},
		"山东省": {
			"_": 140,
			"德州市": 134,
			"滨州市": 135,
			"烟台市": 136,
			"聊城市": 139,
			"济南市": 140,
			"泰安市": 141,
			"淄博市": 142,
			"潍坊市": 143,
			"青岛市": 144,
			"济宁市": 146,
			"日照市": 147,
			"泰山市": 156,
			"枣庄市": 159,
			"东营市": 160,
			"威海市": 164,
			"莱芜市": 165,
			"临沂市": 183,
			"菏泽市": 206
		},
		"山西省": {
			"_": 84,
			"长治市": 9,
			"晋中市": 22,
			"朔州市": 70,
			"大同市": 72,
			"吕梁市": 80,
			"忻州市": 81,
			"太原市": 84,
			"阳泉市": 85,
			"临汾市": 88,
			"运城市": 93,
			"晋城市": 94,
			"五台山市": 381
		},
		"广东省": {
			"_": 292,
			"南雄市": 235,
			"韶关市": 283,
			"清远市": 284,
			"梅州市": 285,
			"肇庆市": 291,
			"广州市": 292,
			"河源市": 293,
			"汕头市": 294,
			"深圳市": 296,
			"汕尾市": 297,
			"湛江市": 300,
			"阳江市": 301,
			"茂名市": 302,
			"佛冈市": 322,
			"梅县市": 323,
			"电白市": 324,
			"高要市": 325,
			"珠海市": 330,
			"佛山市": 331,
			"江门市": 332,
			"东莞市": 334,
			"中山市": 335,
			"潮州市": 336,
			"揭阳市": 337,
			"云浮市": 338
		},
		"广西": {
			"_": 295,
			"桂林市": 232,
			"河池市": 281,
			"柳州市": 282,
			"百色市": 288,
			"贵港市": 289,
			"梧州市": 290,
			"南宁市": 295,
			"钦州市": 298,
			"北海市": 299,
			"防城港市": 339,
			"玉林市": 340,
			"贺州市": 341,
			"来宾市": 342,
			"崇左市": 343
		},
		"新疆": {
			"_": 28,
			"昌吉州": 19,
			"克孜勒苏柯尔克孜自治州": 20,
			"伊犁州": 21,
			"阿拉尔市": 23,
			"克拉玛依市": 24,
			"博尔塔拉州": 27,
			"乌鲁木齐市": 28,
			"吐鲁番市": 31,
			"阿克苏市": 32,
			"石河子市": 33,
			"喀什市": 35,
			"和田市": 39,
			"哈密市": 41,
			"奇台市": 52
		},
		"江苏省": {
			"_": 244,
			"无锡市": 43,
			"苏州市": 44,
			"盱眙市": 45,
			"赣榆市": 46,
			"东台市": 47,
			"高邮市": 53,
			"镇江市": 59,
			"泰州市": 61,
			"宿迁市": 62,
			"徐州市": 236,
			"连云港市": 237,
			"淮安市": 240,
			"南京市": 244,
			"扬州市": 245,
			"盐城市": 246,
			"南通市": 247,
			"常州市": 250
		},
		"江西省": {
			"_": 264,
			"庐山市": 111,
			"玉山市": 137,
			"贵溪市": 138,
			"广昌市": 145,
			"萍乡市": 153,
			"新余市": 154,
			"宜春市": 224,
			"赣州市": 234,
			"九江市": 258,
			"景德镇市": 259,
			"南昌市": 264,
			"鹰潭市": 265,
			"上饶市": 267,
			"抚州市": 273
		},
		"河北省": {
			"_": 82,
			"邯郸市": 3,
			"衡水市": 8,
			"石家庄市": 82,
			"邢台市": 86,
			"张家口市": 120,
			"承德市": 121,
			"秦皇岛市": 122,
			"廊坊市": 126,
			"唐山市": 128,
			"保定市": 130,
			"沧州市": 131
		},
		"河南省": {
			"_": 189,
			"安阳市": 89,
			"三门峡市": 188,
			"郑州市": 189,
			"南阳市": 192,
			"周口市": 193,
			"驻马店市": 197,
			"信阳市": 198,
			"开封市": 207,
			"洛阳市": 228,
			"平顶山市": 231,
			"焦作市": 251,
			"鹤壁市": 260,
			"新乡市": 304,
			"濮阳市": 305,
			"许昌市": 306,
			"漯河市": 307,
			"商丘市": 308,
			"济源市": 309
		},
		"浙江省": {
			"_": 255,
			"湖州市": 65,
			"嵊州市": 66,
			"平湖市": 67,
			"石浦市": 68,
			"宁海市": 71,
			"洞头市": 73,
			"舟山市": 74,
			"杭州市": 255,
			"嘉兴市": 256,
			"定海市": 257,
			"金华市": 261,
			"绍兴市": 262,
			"宁波市": 263,
			"衢州市": 266,
			"丽水市": 268,
			"台州市": 269,
			"温州市": 272
		},
		"海南省": {
			"_": 303,
			"海口市": 303,
			"三亚市": 344,
			"屯昌市": 345,
			"琼海市": 346,
			"儋州市": 347,
			"文昌市": 348,
			"万宁市": 349,
			"东方市": 350,
			"澄迈市": 351,
			"定安市": 352,
			"临高市": 353,
			"白沙黎族自治县": 354,
			"乐东黎族自治县": 355,
			"陵水黎族自治县": 356,
			"保亭黎族苗族自治县": 357,
			"琼中黎族苗族自治县": 358
		},
		"湖北省": {
			"_": 211,
			"襄樊市": 196,
			"荆门市": 202,
			"黄冈市": 203,
			"恩施州": 208,
			"武汉市": 211,
			"黄石市": 310,
			"鄂州市": 314,
			"孝感市": 315,
			"咸宁市": 316,
			"随州市": 317,
			"仙桃市": 318,
			"天门市": 319,
			"潜江市": 320,
			"神农架市": 321
		},
		"湖南省": {
			"_": 218,
			"张家界市": 214,
			"岳阳市": 215,
			"怀化市": 217,
			"长沙市": 218,
			"邵阳市": 222,
			"益阳市": 223,
			"郴州市": 233,
			"桑植市": 311,
			"沅陵市": 312,
			"南岳市": 313,
			"株洲市": 326,
			"湘潭市": 327,
			"衡阳市": 328,
			"娄底市": 329,
			"常德市": 387
		},
		"甘肃省": {
			"_": 57,
			"张掖市": 49,
			"金昌市": 50,
			"武威市": 51,
			"兰州市": 57,
			"白银市": 58,
			"定西市": 60,
			"平凉市": 90,
			"庆阳市": 91,
			"甘南市": 225,
			"临夏市": 229,
			"天水市": 377,
			"嘉峪关市": 378,
			"酒泉市": 379,
			"陇南市": 380
		},
		"福建省": {
			"_": 276,
			"莆田市": 107,
			"浦城市": 271,
			"南平市": 274,
			"宁德市": 275,
			"福州市": 276,
			"龙岩市": 277,
			"三明市": 278,
			"泉州市": 279,
			"漳州市": 286,
			"厦门市": 287
		},
		"西藏": {
			"_": 150,
			"那曲地区": 148,
			"日喀则地区": 149,
			"拉萨市": 150,
			"山南地区": 151,
			"阿里地区": 152,
			"昌都地区": 161,
			"林芝地区": 169
		},
		"贵州省": {
			"_": 227,
			"毕节市": 219,
			"遵义市": 220,
			"铜仁市": 221,
			"安顺市": 226,
			"贵阳市": 227,
			"黔西南州": 230,
			"六盘水市": 368
		},
		"辽宁省": {
			"_": 115,
			"葫芦岛市": 25,
			"盘锦市": 26,
			"辽阳市": 29,
			"铁岭市": 30,
			"阜新市": 108,
			"朝阳市": 112,
			"锦州市": 113,
			"鞍山市": 114,
			"沈阳市": 115,
			"本溪市": 116,
			"抚顺市": 117,
			"营口市": 123,
			"丹东市": 124,
			"瓦房店市": 129,
			"大连市": 133
		},
		"陕西省": {
			"_": 186,
			"榆林市": 79,
			"延安市": 87,
			"西安市": 186,
			"渭南市": 187,
			"汉中市": 190,
			"商洛市": 191,
			"安康市": 194,
			"铜川市": 374,
			"宝鸡市": 375,
			"咸阳市": 376
		},
		"青海": {
			"_": 56,
			"海北州": 48,
			"海南州": 55,
			"西宁市": 56,
			"玉树州": 155,
			"黄南州": 157,
			"果洛州": 158,
			"海西州": 195,
			"海东市": 210
		},
		"黑龙江省": {
			"_": 17,
			"大兴安岭地区": 5,
			"黑河市": 6,
			"齐齐哈尔市": 10,
			"绥化市": 11,
			"鹤岗市": 12,
			"佳木斯市": 13,
			"伊春市": 14,
			"双鸭山市": 15,
			"哈尔滨市": 17,
			"鸡西市": 18,
			"漠河市": 38,
			"大庆市": 40,
			"七台河市": 42,
			"牡丹江市": 97,
			"绥芬河市": 98
		}
};

var Util = {
	addEvent: function (element, type, handler) {
		if (element.addEventListener) {
			element.addEventListener(type, handler, false);
		} else if (element.attachEvent) {
			element.attachEvent('on' + type, handler);
	    }
	},

	getEvent: function (event) {
	    return event || window.event;
	},

	getTarget: function (event) {
	    return event.target || event.srcElement;
	},

	getComputedStyle: function (element) {
	    if (element.currentStyle) {
		    return element.currentStyle;
		} else {
		    return document.defaultView.getComputedStyle(element, null);
		}
	},

	getBoundingClientRect: function (element) {
	    var scrollTop = document.documentElement.scrollTop;
		var scrollLeft = document.documentElement.scrollLeft;
		
		if (element.getBoundingClientRect) {
		    if (typeof arguments.callee.offset != 'number') {
			    var temp = document.createElement('div');
				temp.style.cssText = 'position: absolute; left: 0; top: 0;';
				document.body.appendChild(temp);
				arguments.callee.offset = -temp.getBoundingClientRect().top - scrollTop;
				document.body.removeChild(temp);
				temp = null;
			}
			
			var rect = element.getBoundingClientRect();
			var offset = arguments.callee.offset;
			
			return {
			    left: rect.left + offset,
				rigth: rect.right + offset,
				top: rect.top + offset,
				bottom: rect.bottom + offset
			};
		} else {
		    var offset = this.getElementOffset(element);
			
			return {
			    left: offset.left - scrollLeft,
				right: offset.left + element.offsetWidth - scrollLeft,
				top: offset.top - scrollTop,
				bottom: offset.top + element.offsetWidth - scrollTop
			};
		}
	},
	
	getElementOffset: function (element) {
	    var actualLeft = element.offsetLeft;
		var actualTop = element.offsetTop;
		var current = element.offsetParent;
		
		while (current !== null) {
		    actualLeft += current.offsetLeft;
			actualTop += current.actualTop;
			current = current.offsetParent;
		}
		
		return {
		    left: actualLeft,
			top: actualTop
		};
	}
};
