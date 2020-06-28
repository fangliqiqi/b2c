import QQMapWX from './qqmap-wx-jssdk.min.js';
import validate from './validate.js';
var baseUrl = "http://dev.daounion.com:4080/";

var apiUrl = baseUrl+"api-2.0/wxShop/";

var common={
	/**
	 * @param {Object} parma 
	 * @param {String} act M
	 * @param {bool} jump
	  *@param {String} msg
	 */
	checkLogin:function(parma){
		var token = uni.getStorageSync("user_token");
		if (token) {
			return token;
		}
		if (parma.act==undefined) {
			parma.act=='T'
		}
		if (parma.act=='M') {
			if(parma.msg==undefined){
				parma.msg = "您需要登录才能访问此内容";
			}
			if(parma.url==undefined){
				parma.url = "/pages/user/login/wxLogin";
			}
			uni.showModal({
				title:'提示',
				content:parma.msg,
				showCancel:true,
				confirmText:"现在登录",
				cancelText:"稍后登录",
				success:function(res){
					if (res.confirm) {
						uni.navigateTo({
							url:parma.url
						});
					}
				}
			})
		} else if (parma.act=='T') {
			if(parma.msg==undefined){
				parma.msg = "您需要登录才能访问此内容";
			}
			if(parma.url==undefined){
				parma.url = "/pages/user/login/login";
			}
			if(parma.jump==undefined){
				parma.jump = false;
			}
			if (parma.jump) {
				setTimeout(function(){
					uni.navigateTo({
						url:parma.url
					});
				},300)
			} else {
				uni.showToast({
					icon:'none',
					title:parma.msg,
				})
			}
		}
		return '';
	},
	initQQMap(){
		return new QQMapWX({
            key: 'GILBZ-SI7EW-JEOR3-OW6EK-NRFXE-AJFZG'
        });
	},
	
	cutstr(str, len) {
		var str_length = 0;
		var str_len = 0;
		var str_cut = new String();
		str_len = str.length;
		for (var i = 0; i < str_len; i++) {
			var a = str.charAt(i);
			str_length++;
			if (escape(a).length > 4) {
				//中文字符的长度经编码之后大于4
				str_length++;
			}
			str_cut = str_cut.concat(a);
			if (str_length >= len) {
				str_cut = str_cut.concat("...");
				return str_cut;
			}
		}
		//如果给定字符串小于指定长度，则返回源字符串；
		if (str_length < len) {
			return str;
		}
	},
	urlTobase64(data) {
		console.log(data.url);
		uni.getFileSystemManager().readFile({
			filePath: data.url, //选择图片返回的相对路径
			encoding: 'base64', //编码格式
			success: res => { //成功的回调
				let base64 = res.data //不加上这串字符，在页面无法显示的哦
				data.callback(base64);
			}
		})
	},
	GetNextMonthDay(date, monthNum) {
		 var dateArr = date.split('-');
		 var year = dateArr[0]; //获取当前日期的年份
		 var month = dateArr[1]; //获取当前日期的月份
		 var day = dateArr[2]; //获取当前日期的日
		 var days = new Date(year, month, 0);
		 days = days.getDate(); //获取当前日期中的月的天数
		 var year2 = year;
		 var month2 = parseInt(month) + parseInt(monthNum);
		 if (month2 > 12) {
			 year2 = parseInt(year2) + parseInt((parseInt(month2) / 12 == 0 ? 1 : parseInt(month2) / 12));
			 month2 = parseInt(month2) % 12;
		 }
		 var day2 = day;
		 var days2 = new Date(year2, month2, 0);
		 days2 = days2.getDate();
		 if (day2 > days2) {
			 day2 = days2;
		 }
		 if (month2 < 10) {
			 month2 = '0' + month2;
		 }

		 var t2 = year2 + '-' + month2 + '-' + day2;
		 return t2;
	 },
	 wxLogin(param = {}){
		 uni.login({
		 	provider:"weixin",
			success:function(loginRes){
				var _param = param
				net.post({
					url:"public.wxMLogin",
					data:{code:loginRes.code},
					callback:function(res){
						uni.setStorageSync("openid",res.data.item.openid);
						uni.setStorageSync("session_key",res.data.item.session_key);
						if (_param.callback!=undefined) {
							_param.callback(res);
						}
					}
				})
			}
		 })
	 },
	 setFontSize(res){
		 var fontSize = uni.getStorageSync("baseFontSize");
		 if(!fontSize){
			 res.fontSize = '28rpx';
		 } else {
			 res.fontSize = fontSize;
		 }
	 },
	 setFontSizeToBase(fontSize){
		 uni.setStorageSync("baseFontSize",fontSize);
	 },
	 getBannerUrl(target,type){
		 if (type>0 && (target!=''&&id!=null)){
			 if (type==1) {
				 return "/pages/esbuy/shop/product/product?item="+target;
			 } else if (type==2){
				 return "/pages/esbuy/local/coupon/coupon?item="+target;
			 } else if (type==3){
				 return "/pages/article/content/content?id="+target;
			 }
		 }
		 return false
	 },
}

var net = {
	getUrl:function(key){
		if (key=='upImg') {
			return baseUrl + 'upload-img.html';
		} else {
			var url = key.replace(/\./,'/');
			return apiUrl+url+'.html';
		}
		
	},
	post:function(param){
		param.data.perform = 1;
		uni.showLoading({
			title: '正在加载'
		})
		uni.request({
			url:this.getUrl(param.url),
			data:param.data,
			method:'POST',
			header:{
				'content-type': 'application/x-www-form-urlencoded',
			},
			success:function(res){
				uni.hideLoading();
				if (res.data.code==0) {
					param.callback(res);
				} else if(res.data.code==100) {
					uni.showToast({
						icon:'none',
						title:res.data.message,
					})
					uni.removeStorageSync("user_token");
				} else if(res.data.code==101) {
					uni.showToast({
						icon:'none',
						title:res.data.message,
					})
					if(param.haslogin){
						uni.showModal({
							title:'提示',
							content:"登录已过期，请重新登录",
							showCancel:true,
							confirmText:"现在登录",
							cancelText:"稍后登录",
							success:function(res){
								if (res.confirm) {
									uni.navigateTo({
										url:"/pages/user/login/login"
									});
								}
							}
						})
					}
					uni.removeStorageSync("user_token");
				} else if(res.data.code==102) {
					uni.showToast({
						icon:'none',
						title:"请先登录！",
					});
					setTimeout(function(){
						uni.navigateTo({
							url:"/pages/user/login/login"
						});
					},300);
					
				} else {
					uni.showToast({
						icon:'none',
						title:res.data.message,
					})
				}
			},
			fail:function(){
				uni.hideLoading();
			},
			complete:function(){
				if (param.type=="refresh"){
					uni.stopPullDownRefresh();
				}
				if (param.upLock) {
					param.upObj.upload_lock = false;
				}
			}
		})
	}
}

module.exports = {
	baseUrl:baseUrl,
	net:net,
	common:common,
	validate:validate.validate
}