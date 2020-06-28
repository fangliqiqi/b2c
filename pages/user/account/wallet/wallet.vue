<template>
	<view>
		<view>
			<view class="padding">
				<view class="wallet_card bg-gradual-purple padding-top ">
					<view class="flex justify-end padding-right">
						<view class="detailed">明细</view>
					</view>
					<view>
						<view class="text-xl text-center ">余额(元)</view>
						<view class="flex justify-center align-center  padding-top padding-bottom">￥<view class="text-xxl margin-left-xs">{{money}}</view></view>
					</view>
					<view class="flex wallet_foot">
						<view class="flex-sub flex justify-center align-center solid-right" ><view class="cuIcon-recharge margin-right-sm icon_size"></view>充值</view>
						<view class="flex-sub flex justify-center align-center"><view class="cuIcon-vipcard margin-right-sm icon_size"></view>提现</view>
					</view>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				money:2333,
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.wallet_card{
		width:100%;
		height:300rpx;
		border-radius: 30rpx;
	}
	.detailed{
		text-decoration:underline;
	}
	.wallet_foot{
		width:100%;
		height:70rpx;
		border-top: 1px solid #FFFFFF;
	}
	.solid-right{
		border-right: 1px solid #FFFFFF;
	}
	.icon_size{
		font-size:40rpx;
	}
	
</style>
