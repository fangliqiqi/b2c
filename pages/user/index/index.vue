<template>
	<view :style="'font-size:'+base_size">
		<dyTopBg customer="true" bgimg="linear-gradient(45deg, #f43f3b, #e54d42)"></dyTopBg>
		<view class="u-center-setting flex justify-end">
			<view class="u-center-msg"></view>
			<navigator url="../set/setlist/setlist">
				<view class="u-center-settings"></view>
			</navigator>
			
		</view>
		<view class="dy-ucenter-info">
			<userCard></userCard>
		</view>
		<view class="dy-ucenter-nav">
			<view class="grid text-center col-4">
				<view>
					<navigator url="../other/collection/collection">
						<view class="top-num">15</view>
						<view class="nav-title">收藏</view>
					</navigator>
				</view>
				<view>
					<navigator url="../other/attention/attention">
						<view class="top-num">3</view>
						<view class="nav-title">关注</view>	
					</navigator>	
				</view>
				<view>
					<navigator url="../other/footprint/footprint">
						<view class="top-num">99+</view>
						<view class="nav-title">足迹</view>
					</navigator>
					
				</view>
				<view>
					<navigator url="../other/coupon/coupon">
						<view class="top-num">2</view>
						<view class="nav-title">卡券</view>
					</navigator>
				</view>
				
			</view>
		</view>
		<view class="dy-ucenter-account">
			<view class="grid col-2">
				<view class=" bg-gradual-blue">
					<navigator class="flex padding" url="../account/points/points">
						<view><image src="../../../static/images/jifen.png"></image></view>
						<view>
							<view class="f2">5000</view>
							<view>积分</view>
						</view>
					</navigator>
						
				</view>
				<view class="bg-gradual-pink">
					<navigator class="flex padding" url="../account/wallet/wallet">
						<view><image src="../../../static/images/qianbao.png"></image></view>
						<view>
							<view class="f2">-----</view>
							<view>钱包</view>
						</view>
					</navigator>
					
				</view>
			</view>
		</view>
		<view class="dy-ucenter-order">
			<view class="grid col-5">
				<view>
					<navigator url="../order/payorder/payorder?status=1">
						<view><image src="/static/images/xinyongqia.png"></image></view>
						<view>待付款</view>
					</navigator>
				</view>
				<view>
					<navigator url="../order/payorder/payorder?status=2">
						<view><image src="/static/images/xiangbao.png"></image></view>
						<view>待收货</view>
					</navigator>
				</view>
				<view>
					<navigator url="../order/payorder/payorder?status=3">
						<view><image src="/static/images/liuyan.png"></image></view>
						<view>待评价</view>
					</navigator>
				</view>
				<view>
					<navigator url="../order/after-sales/after-sales">
						<view><image src="/static/images/tuikuan.png"></image></view>
						<view>退换/售后</view>
					</navigator>
				</view>
				<view>
					<navigator class="grid-last" url="../order/payorder/payorder?status=0">
						<view><image src="/static/images/dingdan.png"></image></view>
						<view class="text-red">全部订单</view>
					</navigator>
				</view>
			</view>
		</view>
		<view class="home-products">
			<view class="home-products-title">当右精选</view>
			<dyProductList></dyProductList>
		</view>
	</view>
</template>

<script>
	import dyTopBg from '@/components/dy-top-bg/dy-top-bg.vue';
	import userCard from '@/components/dy-user-center-card/dy-user-card-one.vue';
	import dyProductList from '@/components/dy-pubu-product-list/dy-pubu-product-list.vue';
	var api = require('@/common/dy_mwx_base.js');
	export default {
		components: {
			dyTopBg,
			userCard,
			dyProductList
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		onShow() {
			api.common.setFontSize(this);
			// this.token = api.common.checkLogin({act:'T',jump:true});
		},
		onLoad(option) {
		
		}
	}
</script>

<style>
.f2 {
	font-size: 2em;
}
.u-center-setting{
	margin-top: 160rpx;
	padding-right: calc(10vw);
}
.dy-ucenter-info{
	width: calc(80vw);
	margin: 0 auto;
}
.dy-ucenter-nav{
	width: calc(90vw);
	margin: 0 auto;
	margin-top: 30rpx;
}
.dy-ucenter-nav .top-num{
	font-size: 1.2em;
	color: #444;
}

.dy-ucenter-nav .nav-title{
	font-size: 0.9em;
	color: #444;
}

.dy-ucenter-order{
	width: calc(90vw);
	margin: 0 auto;
	margin-top: 20rpx;
	background-color: #FFFFFF;
	text-align: center;
	padding-top: 20rpx;
	padding-bottom: 20rpx;
	font-size: 0.8em;
	border-radius: 10rpx;
}
.dy-ucenter-account{
	width: calc(90vw);
	margin: 0 auto;
	margin-top: 20rpx;
	background-color: #FFFFFF;
	text-align: center;
	font-size: 0.8em;
	border-radius: 10rpx;
	overflow: hidden;
}

.dy-ucenter-order image{
	width: 2.5em;
	height: 2.5em;
	margin-bottom: 10rpx;
}

.dy-ucenter-account image{
	width: 3.5em;
	height: 3.5em;
	margin-right: 1em;
}
.dy-ucenter-order .grid-last,.dy-ucenter-account .grid-last{
	border-left: #E54D42 2rpx solid;
}

.home-products{
	width: calc(90vw);
	margin: 0 auto;
	margin-top: 20rpx;
}
	
.home-products-title{
	font-size: 1.2em;
	color: #E54D42;
	text-align: center;
	margin-bottom: 20rpx;
}

.u-center-msg{
	background-image: url(../../../static/images/xiaoxizhongxin.png);
	background-position: center;
	background-size: cover;
	width: 1.8em;
	height: 1.8em;
}	
.u-center-settings{
	margin-left: 0.8em;
	background-image: url(../../../static/images/shezhi.png);
	background-position: center;
	background-size: cover;
	width: 1.8em;
	height: 1.8em;
}
</style>
