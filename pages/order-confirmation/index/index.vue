<template>
	<view>
		<view class="flex justify-between align-center  padding-left padding-right padding-bottom-sm padding-top-sm bg-purple ">
			<view class="text-sm">如需切换门店自提点，请回首页切换</view>
			<button class="round cu-btn sm bg-white text-purple">去切换</button>		
		</view>
		<view class="padding-left padding-right confir_main">
			<view class="bg-white padding-sm radius margin-top-sm dashed">
				<view class="flex  align-center">
					<view class="text-sm text-purple round padding-xs bg-gray margin-right-xs">自提点</view>
					<view class="text-sm text-gray">{{address}}</view>
				</view>
				<view class="text-bold margin-top-xs margin-bottom-sm">{{store}}</view>
				<view class="flex align-center">
					<view class="round margin-right-sm cu-btn line-black ">
						<text class="cuIcon-dianhua margin-right-xs text-purple"></text><text>联系门店</text>
					</view>
					<view class="round  cu-btn line-black">
						<text class="cuIcon-locationfill margin-right-xs text-purple"></text><text>使用导航</text>
					</view>
				</view>
			</view>
			<view class="bg-white padding-sm radius margin-top-sm">
				<view class="flex  align-center justify-between">
					<text>自提时间</text>
					<picker mode="multiSelector" @change="MultiChange" @columnchange="MultiColumnChange" :value="multiIndex" :range="multiArray">
						<view class="picker text-purple">
							{{multiArray[0][multiIndex[0]]}} {{multiArray[1][multiIndex[1]]}}
						</view>
					</picker>
				</view>
				<view class="padding-top padding-bottom flex justify-between align-center">
					<view class="img_list flex basis-xl">
						<view v-for="(img,index) in order" :key="index">
							<view class="img"><image :src="img.pic" mode="widthFix"></image></view>
						</view>
					</view>
					<view class="basis-xs">
						<navigator url="../order-list/order-list">
							<text>共5件</text>
							<text class="cuIcon-right margin-left-sm"></text>
						</navigator>
						
					</view>
				</view>
				<view class="radius bg-purple light flex align-center padding-bottom-xs padding-top-xs padding-left-sm padding-right-sm">
					<checkbox class="round purple checkbox"></checkbox>
					<view class="text-black">
						我已同意
						<text class="text-purple">《用户自提服务协议》</text>
					</view>
				</view>	
			</view>
			<view class="flex justify-between align-center bg-white padding radius margin-top-sm">
				<text >商品金额</text>
				<view class="text-price text-lg">50</view>
			</view>
			<view class="flex justify-between align-center bg-white padding radius margin-top-sm">
				<text class="text-sm">优惠券</text>
				<view class="text-red">-<text class="text-price margin-left-xs">6</text><text class="cuIcon-right text-gray"></text></view>
			</view>
			<view class="flex justify-between align-center bg-white padding radius margin-top-sm">
				<text class="text-sm">优惠价</text>
				<view class=" text-red" >- <text class="text-price margin-left-xs">9</text></view>
			</view>
			<view class="flex justify-between align-center bg-white padding radius margin-top-sm">
				<text class="text-sm">您的手机号码</text>
				<view class=" text-purple " >18355196899 <text class="cuIcon-right text-gray"></text></view>
			</view>
			<view class="bg-white radius padding-left padding-right margin-top-sm ">
				<radio-group class="block" @change="RadioChange">
					<view class="flex justify-between padding-top-sm padding-bottom-sm solid-bottom">
						<view class="text-xl">
							<text class="cuIcon-weixin text-green margin-right-sm"></text>
							<text class="text-df">微信</text>
						</view>
						<radio class="round purple checkbox" :class="radio=='A'?'checked':''" :checked="radio=='A'?true:false" value="A"></radio>
					</view>
					<view class="flex justify-between padding-top-sm padding-bottom-sm">
						<view class="text-xl">
							<text class="cuIcon-recharge text-red margin-right-sm"></text>
							<text class="text-df">会员支付(余额￥0.00)</text>
						</view>
						<text class="text-df text-red">当前余额不足</text>
						<!-- <radio class="purple checkbox" :class="radio=='B'?'checked':''" :checked="radio=='B'?true:false" value="B"></radio> -->
					</view>
				</radio-group>
			</view>
		</view>
		<view class="empty"></view>
		<view class="confir_foot padding-left padding-right bg-white shadow shadow-lg flex justify-between align-center">
			<view class="text-lg">实付金额<text class="text-price text-red margin-left-sm text-xl">35</text></view>
			<button class="round cu-btn bg-purple">去付款</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			const date = new Date()
			const months = []
			const month = date.getMonth() + 1
			const days = []
			const day = date.getDate()+1
			return {
				address:'天智路国轩K西嘉3栋101室',
				store:'谊品生鲜国轩K西嘉店',
				multiArray: [
					['明天'+month+'月'+day+'日' ],
					['09:00-12:00','12:00-19:00']
				],
				multiIndex: [0, 0],
				order:[
					{pic:'https://img14.360buyimg.com/n0/jfs/t1/71359/20/4228/396815/5d258533E4f1f667c/5d886c903c0d3ab3.jpg'},
					{pic:'https://img14.360buyimg.com/n0/jfs/t1/128246/24/1749/445220/5ebf43cfEbd3d072c/a8dee1e0e479b411.jpg'},
					{pic:'https://img14.360buyimg.com/n0/jfs/t1/78393/27/10662/103739/5d81e32cE2298bbd9/46e9fafff567e063.jpg'},
					{pic:'https://img14.360buyimg.com/n0/jfs/t1/43046/23/13892/229041/5d70d34fE0e6bb41d/a9d466fa5b4d24b0.jpg'},
					{pic:'https://img14.360buyimg.com/n0/jfs/t1/71359/20/4228/396815/5d258533E4f1f667c/5d886c903c0d3ab3.jpg'},
				],
				
			}
		},
		methods: {
			MultiChange(e) {
				this.multiIndex = e.detail.value
			},
			MultiColumnChange(e) {
				let data = {
					multiArray: this.multiArray,
					multiIndex: this.multiIndex
				};
				data.multiIndex[e.detail.column] = e.detail.value;

				this.multiArray = data.multiArray;
				this.multiIndex = data.multiIndex;
			},
			RadioChange(e) {
				this.radio = e.detail.value
			},
			
		}
	}
</script>

<style>
	.confir_main{
		margin-bottom:150rpx;
	}
	.dashed{
		border-bottom:2px dashed purple;
	}
	.img_list{
		overflow-y: auto;
	}
	.img{
		width:120rpx;
		margin-right: 10rpx;
	}
	.checkbox{
		transform: scale(0.6,0.6);
	}
	.empty{
		height:50rpx;
	}
	.confir_foot{
		position: fixed;
		bottom: 0;
		left: 0;
		width:100%;
		height:100rpx;
		box-shadow: 0px 0px 5px rgba(103, 57, 182, 0.2);
	}
</style>
