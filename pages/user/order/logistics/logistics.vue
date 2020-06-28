<template>
	<view>
		<view class="order bg-white padding-top padding-left padding-bottom margin-bottom">
			<view class="text-gray">订单编号：<text class="text-black">109091419094</text></view>
			<view class="padding-bottom-sm padding-top-sm padding-right">
				<view class="flex"  v-for="(product,index) in order" :key="index">
					<view class="logis_img margin-right-xs">
						<image :src="product.pic" mode="widthFix"></image>
					</view>
					<view class="basis-xl">
						<view>{{product.name}}</view>
						<view class="text-gray text-sm">{{product.num}}件</view>
					</view>
				</view>
			</view>
			<view class="login_inf padding-top-sm">
				<view class="text-gray">运单号：<text class="text-black">1246895462546</text></view>
				<view class="text-gray">快递公司：<text class="text-black">韵达快递</text></view>
			</view>
		</view>
		
		<view class="cu-timeline padding-top-sm padding-bottom ">
			<view class="cu-item text-red">
				<view class=" text-red">
					您的快递已有快递点签收。如有疑问您可以联系配送员【王小鹏，15986365478】确认。感谢你的信任与支持
					<view class="text-gray text-sm margin-top-xs">2020-02-01 21:28:31</view>
				</view>
			</view>
			<view class="cu-item">
				<view class=" text-black">
					您的订单你到达合肥营业部
					<view class="text-gray text-sm margin-top-xs">2020-02-01 18:28:31</view>
				</view>
			</view>
			<view class="cu-item">
				<view class=" text-black">
					您的订单已被快递员取走，预计2月1日到达
					<view class="text-gray text-sm margin-top-xs">2020-01-31 20:28:31</view>
				</view>
			</view>
			<view class="cu-item">
				<view class=" text-black">
					您的订单已被快递员取走，预计2月1日到达
					<view class="text-gray text-sm margin-top-xs">2020-01-31 20:28:31</view>
				</view>
			</view>
			<view class="cu-item">
				<view class=" text-black">
					您的订单已被快递员取走，预计2月1日到达
					<view class="text-gray text-sm margin-top-xs">2020-01-31 20:28:31</view>
				</view>
			</view>
			<view class="cu-item">
				<view class=" text-black">
					您提交了订单，请等待系统确认
					<view class="text-gray text-sm margin-top-xs">2020-01-30 20:28:31</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				order:[
					{
						pic:'https://img14.360buyimg.com/n0/jfs/t1/59022/28/10293/141808/5d78088fEf6e7862d/68836f52ffaaad96.jpg',
						name:'Apple iPhone 11 (A2223) 128GB 黑色 移动联通电信4G手机 双卡双待',
						num:'1'
					},
					{
						pic:'https://img14.360buyimg.com/n0/jfs/t1/104812/35/17303/242507/5e848fb1E2c1d6eff/d2db1412dcce1d96.jpg',
						name:'荣耀Play4T Pro 麒麟810芯片 OLED屏幕指纹 4800万高感光夜拍三摄 22.5W超级快',
						num:'1'
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.logis_img{
		width:20%;
	}
	.login_inf{
		border-top: 1px solid #E5E5E5;
	}
</style>
