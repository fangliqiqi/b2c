<template>
	<view>
		<view class="coupon_head">
			<scroll-view scroll-x class="bg-white nav">
				<view class="flex text-center">
					<view class="cu-item flex-sub" :class="0==TabCur?'text-red cur':''"   @tap="tabSelect" :data-id="0">
						待使用4
					</view>
					<view class="cu-item flex-sub" :class="1==TabCur?'text-red cur':''"   @tap="tabSelect" :data-id="1">
						即将过期1
					</view>
					<view class="cu-item flex-sub" :class="2==TabCur?'text-red cur':''"   @tap="tabSelect" :data-id="2">
						已使用1
					</view>
					<view class="cu-item flex-sub" :class="3==TabCur?'text-red cur':''"   @tap="tabSelect" :data-id="3">
						已过期2
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="padding-sm">
			<view class=" margin-bottom-sm " v-for="(content,index) in coupon" :key="index">
				<block v-if="content.status==1">
					<view class="bg-white coupon_card flex justify-between align-center padding">
						<view class="flex-sub flex flex-direction align-center">
							<view class="flex text-red justify-center">￥<view class="text-lg text-bold">{{content.price}}</view></view>
							<view class="text-red text-sm">{{content.condition}}</view>
						</view>
						<view class="flex-twice margin-left-sm margin-right-sm">
							<view class="text-cut  text-bold text-black">{{content.name}}</view>
							<view class="text-xs text-gray margin-top-sm">{{content.time}}</view>
						</view>
						<view class="flex-sub text-right">
							<button class="cu-btn line-red round">去使用</button>
						</view>
					</view>
				</block>
				<block v-if="content.status==2">
					<view class="bg-white coupon_card flex justify-between align-center padding">
						<view class="flex-sub flex flex-direction align-center">
							<view class="flex text-red justify-center">￥<view class="text-lg text-bold">{{content.price}}</view></view>
							<view class="text-red text-sm">{{content.condition}}</view>
						</view>
						<view class="flex-twice margin-left-sm margin-right-sm">
							<view class="text-cut  text-bold text-black">{{content.name}}</view>
							<view class="text-xs text-gray margin-top-sm">{{content.time}}</view>
						</view>
						<view class="flex-sub text-right">
							<view class="text-red text-sm text-center margin-bottom-xs">剩8小时</view>
							<button class="cu-btn line-red round">去使用</button>
						</view>
					</view>
				</block>
				<block v-if="content.status==3">
					<view class="bg-white coupon_card flex justify-between align-center padding">
						<view class="flex-sub flex flex-direction align-center text-gray">
							<view class="flex  justify-center">￥<view class="text-lg text-bold">{{content.price}}</view></view>
							<view class=" text-sm">{{content.condition}}</view>
						</view>
						<view class="flex-twice margin-left-sm margin-right-sm text-gray">
							<view class="text-cut  text-bold ">{{content.name}}</view>
							<view class="text-xs text-gray margin-top-sm">{{content.time}}</view>
						</view>
						<view class="flex-sub text-right">
							<button class="cu-btn  round line-red" disabled>已使用</button>
						</view>
					</view>
				</block>
				<block v-if="content.status==4">
					<view class="bg-white coupon_card flex justify-between align-center padding">
						<view class="flex-sub flex flex-direction align-center text-gray">
							<view class="flex  justify-center">￥<view class="text-lg text-bold">{{content.price}}</view></view>
							<view class=" text-sm">{{content.condition}}</view>
						</view>
						<view class="flex-twice margin-left-sm margin-right-sm text-gray">
							<view class="text-cut  text-bold ">{{content.name}}</view>
							<view class="text-xs text-gray margin-top-sm">{{content.time}}</view>
						</view>
						<view class="flex-sub text-right">
							<button class="cu-btn  round line-red" disabled>已过期</button>
						</view>
					</view>
				</block>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				TabCur: 0,
				scrollLeft: 0,
				coupon:[
					{
						price:100,
						condition:'满125元使用',
						name:'仅限美妆护肤品使用',
						time:'2020.05.01-2020.05.15',
						status:'1'
					},
					{
						price:10,
						condition:'无门槛使用',
						name:'仅限生活用品',
						time:'2020.05.01-2020.05.15',
						status:'1'
					},
					{
						price:10,
						condition:'无门槛使用',
						name:'苹果旗舰店',
						time:'2020.05.01-2020.05.15',
						status:'2'
					},
					{
						price:20,
						condition:'无门槛使用',
						name:'苹果旗舰店',
						time:'2020.05.01-2020.05.15',
						status:'3'
					},
					{
						price:100,
						condition:'无门槛使用',
						name:'苹果旗舰店',
						time:'2020.05.01-2020.05.15',
						status:'4'
					}
				]
			}
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
			}
		},
	}
	
</script>

<style>
	.coupon_card{
		border-radius:20rpx;
		height:180rpx;
	}
</style>
