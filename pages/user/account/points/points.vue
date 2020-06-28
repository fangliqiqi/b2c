<template>
	<view>
		<view class="bg-gradual-blue padding points_card">
			<view class="flex justify-end">
				<button class="hope_notes cu-btn round line-white text-xs ">帮助说明</button>
			</view>
			<view class="text-white flex justify-center align-center padding-top-sm padding-bottom-sm">当前积分：<view class="text-xl text-white">{{allpoints}}</view></view>
			<view class="flex justify-center align-center padding-bottom-sm">
				<button class="sign_in round bg-white text-df text-red">签到领积分</button>
			</view>
			<view class="text-center text-sm">即将凑够1000积分，下单可抵10元，戳我领积分</view>
		</view>
		<view>
			<view class="padding text-center text-df text-lg text-bold">积分明细</view>
			<view>
				<view class="points_list bg-white flex justify-between align-center padding" v-for="(detailed,index) in points" :key="index">
					<view class="basis-xl text-cut">
						<view class="text-cut">{{detailed.name}}</view>
						<view class="text-gray text-xs margin-top-xs">{{detailed.time}}</view>
					</view>
					<view class="basis-xs text-red text-xxl text-right">+{{detailed.num}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				allpoints:180,
				points:[
					{
						name:'小程序签到领积分',
						time:'2020-05-01 09:02:00',
						num:'3'
					},
					{
						name:'购物送积分',
						time:'2020-05-01 09:02:00',
						num:'10'
					},
					{
						name:'评论送积分评论送积分评论送积分评论送积分basis-xs',
						time:'2020-05-01 09:02:00',
						num:'10'
					}	
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.points_card{
		width:100%;
		/* height:280rpx; */
		flex-direction: column;
	}
	.hope_notes{
		height:50rpx;
	}
	.sign_in{
		width:30%;
		height:60rpx;
		text-align: center;
		line-height: 60rpx;
	}
	.points_list{
		width:100%;
		height:100rpx;
		border-top: 1px solid #e5e5e5;
	}
</style>
