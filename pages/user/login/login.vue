<template>
	<view>
		<view class="login-form">
			<view class="mobile-login">
				<view class="input-group">
					<label class="mobile-pre">+86</label>
					<input class="input-item" type="number" @input="enterMobile" v-model="mobile" placeholder="请输入手机号码">
				</view>
				<view class="input-group">
					<input class="input-item" type="number" v-model="vcode" placeholder="输入验证码">
					<view class="cu-btn round" :class="sendbtn" @tap="sendSms">{{sendSmsText}}</view>
				</view>
				<view class="cu-btn round bg-red login-btn" @tap="login()">登录</view>
			</view>
		</view>
		<view class="other-login">
			<view class="other-login-title flex">
				<view class="line"></view>
				<view class="other-login-title-text bg-white">其他登录方式</view>
				<view class="line"></view>
			</view>
			<view class="flex justify-center margin-top-sm">
				<button class="text-center" open-type="getPhoneNumber" @getphonenumber="onGetUserPhone">
					<image src="/static/images/icon/weichat.png" class="img-icon image"></image>
					<view style="margin-top: 6rpx;">微信登录</view>
				</button>
			</view>
			<view class="margin-top-sm">若手机号未注册，会进入注册流程。注册即视为同意<text class="text-red">《当右用户注册协议》</text><text class="text-red">《当右隐私政策》</text></view>
		</view>
	</view>
</template>

<script>
	var api = require('@/common/dy_mwx_base.js');
	export default {
		data() {
			return {
				sendSmsText:'获取验证码',
				sended:true,
				discountTime:60,
				sendbtn:'bg-gray',
				mobile:'',
				vcode:''
			}
		},
		methods: {
			enterMobile(e){
				if (api.validate.checkPhone(this.mobile)){
					this.sendbtn = 'bg-red';
					this.sended = false;
				} else {
					this.sendbtn = 'bg-gray';
					this.sended = true;
				}
			},
			sendSms(){
				if (this.sended == true) {
					return false;
				}
				
				if (!api.validate.checkPhone(this.mobile)){
					uni.showToast({
						title:'请输入正确的手机号码',
						icon:'none'
					});
					return false;
				}
				
				var _this = this;
				_this.sended = true;
				_this.discountTime = 60;
				_this.sendSmsText = 60 + '秒后获取';
				this.sendbtn = 'bg-gray';
				this.discount();
			},
			discount(){
				if (this.discountTime>0) {
					var _this = this;
					setTimeout(function(){
						_this.discountTime--;
						_this.sendSmsText = _this.discountTime + '秒后获取';
						_this.discount();
					},1000);
				} else {
					this.sendSmsText = "获取验证码";
					this.sended = false;
					this.sendbtn = 'bg-red';
				}
			},
			login(){
				if (!api.validate.checkPhone(this.mobile)){
					uni.showToast({
						title:'请输入正确的手机号码',
						icon:'none'
					});
					return false;
				}
			},
			wxLogin(){
				
			},
			onGetUserPhone(phoneRes){
				if (phoneRes.detail.errMsg == "getPhoneNumber:ok") {
					console.log(phoneRes);
				} else {
					
				}
			}
		}
	}
</script>

<style>
page{
	background: #FFFFFF;
}
.login-form{
	width: 100%;
	padding: 30% 30rpx 30rpx 30rpx;
}

.input-group{
	width: 100%;
	border-bottom: #F1F1F1 2rpx solid;
	display: -webkit-box;
	display: -webkit-flex;
	display: flex;
	min-height: 100rpx;
	-webkit-box-align: center;
	-webkit-align-items: center;
	align-items: center;
}
.input-group label{
	min-width: calc(4em + 30px);
	
}
.input-group .mobile-pre{
	text-align: center;
	border-right: 2px solid #F1F1F1;
}

.input-group .input-item{
	-webkit-box-flex: 1; 
	-webkit-flex: 1;
	flex: 1;
	padding-left: 30rpx;
}
.other-login-title {
	position: relative;
}
.other-login-title .line{
	width: 40%;
	margin-top: 0.8em;
	height: 1rpx;
	border-bottom: 2rpx #F1F1F1 solid;
	z-index: 1;
}

.other-login-title-text{
	z-index: 2;
	width: 30%;
}

.input-group .cu-btn{
	min-width: 200rpx;
}

.login-btn{
	margin-top: 60rpx;
	width: 100%;
}
.other-login{
	font-size: 0.8em;
	position: absolute;
	bottom: 60rpx;
	width: 100%;
	padding: 0 30rpx 0 30rpx;
	text-align: center;
	color: #999999;
}
.img-icon {
	width: 96rpx;
	height: 96rpx;
}

</style>
