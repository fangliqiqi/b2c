<template>
	<view>
		<view class=" flex justify-center align-center">
			<view class=" icon_bg cuIcon-unlock text-red  flex justify-center align-center"></view>
		</view>
		<view class="padding">
			<view>开通微信免密支付后，仅限在<text class="text-black text-bold">微信-发现-购物、当右小程序</text>使用，其他渠道暂不支持。</view>
			<view class="margin-top">以下账户将开通微信免密支付功能:</view>
			<view>账号：186596878954</view>
		</view>
		<view class="flex flex-direction margin-top padding">
			<button class="cu-btn lg bg-red">开通</button>
			<button class="cu-btn lg margin-top-xs">暂不开通</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.icon_bg{
		width:200rpx;
		height:200rpx;
		border-radius: 50%;
		background-color:#f9d3d7;
		margin:50rpx auto;
		font-size:80rpx;
	}
</style>
