<template>
	<view>
		<view class="after-sales-top">
			<scroll-view scroll-x class="bg-white nav">
				<view class="flex text-center">
					<view class="cu-item flex-sub" :class="0==TabCur?'text-red cur':''"   @tap="tabSelect" :data-id="0">
						售后申请
					</view>
					<view class="cu-item flex-sub" :class="1==TabCur?'text-red cur':''"   @tap="tabSelect" :data-id="1">
						处理中
					</view>
					<view class="cu-item flex-sub" :class="2==TabCur?'text-red cur':''"   @tap="tabSelect" :data-id="2">
						售后评价
					</view>
					<view class="cu-item flex-sub" :class="3==TabCur?'text-red cur':''"   @tap="tabSelect" :data-id="3">
						申请记录
					</view>
				</view>
			</scroll-view>
			<view class="cu-bar search bg-white">
				<view class="search-form round">
					<text class="cuIcon-search"></text>
					<input @focus="InputFocus" @blur="InputBlur" :adjust-position="false" type="text" placeholder="商品名称/商品编号/订单编号/序列号" confirm-type="search"></input>
				</view>
			</view>
		</view>
		<view class="after-sales-list">
			<view class="bg-white margin-bottom-sm" v-for="(product,index) in order" :key="index">
				<block v-if="product.status==1">
					<view class="sales_head flex justify-between align-center padding">
						<view>当右</view>
					</view>
					<view class="sales_main padding flex justify-between align-center">
						<image class="basis-xs" :src="product.pic" mode="widthFix" ></image>
						<view class="sales_inf basis-xl padding-left">
							<view class="sales_inf_name">{{product.name}}</view>
							<view class="text-xs text-gray">数量：{{product.num}}</view>
						</view>
					</view>
					<view class="flex justify-end align-center padding-bottom-sm padding-right">
						<!-- <view >该商品已超过售后期<view class="cuIcon-info"></view></view> -->
						<button class="cu-btn  round line-red">申请售后</button>
					</view>
				</block>
				<block v-if="product.status==2">
					<view class="sales_head flex justify-between align-center padding">
						<view>当右</view>
						<view class="text-red">处理中</view>
					</view>
					<view class="sales_main padding flex justify-between align-center">
						<image class="basis-xs" :src="product.pic" mode="widthFix" ></image>
						<view class="sales_inf basis-xl padding-left">
							<view class="sales_inf_name">{{product.name}}</view>
							<view class="text-xs text-gray">数量：{{product.num}}</view>
						</view>
					</view>
					<view class="flex justify-end align-center padding-bottom-sm padding-right">
						<!-- <view >该商品已超过售后期<view class="cuIcon-info"></view></view> -->
						<button class="cu-btn  round line-red">查看进度</button>
					</view>
				</block>
				<block v-if="product.status==3">
					<view class="sales_head flex justify-between align-center padding">
						<view>当右</view>
						<view>已完成</view>
					</view>
					<view class="sales_main padding flex justify-between align-center">
						<image class="basis-xs" :src="product.pic" mode="widthFix" ></image>
						<view class="sales_inf basis-xl padding-left">
							<view class="sales_inf_name">{{product.name}}</view>
							<view class="text-xs text-gray">数量：{{product.num}}</view>
						</view>
					</view>
					<view class="flex justify-end align-center padding-bottom-sm padding-right">
						<!-- <view >该商品已超过售后期<view class="cuIcon-info"></view></view> -->
						<button class="cu-btn  round line">查看详情</button>
						<button class="cu-btn  round line-red margin-left">售后评价</button>
					</view>
				</block>
				<block v-if="product.status==4">
					<view class="sales_head flex justify-between align-center padding">
						<view>当右</view>
						<view>已完成</view>
					</view>
					<view class="sales_main padding flex justify-between align-center">
						<image class="basis-xs" :src="product.pic" mode="widthFix" ></image>
						<view class="sales_inf basis-xl padding-left">
							<view class="sales_inf_name">{{product.name}}</view>
							<view class="text-xs text-gray">数量：{{product.num}}</view>
						</view>
					</view>
					<view class="flex justify-end align-center padding-bottom-sm padding-right">
						<button class="cu-btn  round line">查看详情</button>
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
				order:[
					{
						pic:'http://img13.360buyimg.com/mobilecms/s372x372_jfs/t1/7588/17/14015/324015/5c5159ebE09d77e8a/ddb28657aa4cbf94.jpg',
						name:'戴尔（DELL）S2319HS 23英寸IPS屏三面微边框 旋转升降 广视角 不闪屏个人商务 电脑显示器（带HDMI线',
						num:'1',
						status:1
					},
					{
						pic:'http://img13.360buyimg.com/mobilecms/s372x372_jfs/t1/7588/17/14015/324015/5c5159ebE09d77e8a/ddb28657aa4cbf94.jpg',
						name:'戴尔（DELL）S2319HS 23英寸IPS屏三面微边框 旋转升降 广视角 不闪屏个人商务 电脑显示器（带HDMI线',
						num:'2',
						status:2
					},
					{
						pic:'http://img13.360buyimg.com/mobilecms/s372x372_jfs/t1/7588/17/14015/324015/5c5159ebE09d77e8a/ddb28657aa4cbf94.jpg',
						name:'戴尔（DELL）S2319HS 23英寸IPS屏三面微边框 旋转升降 广视角 不闪屏个人商务 电脑显示器（带HDMI线',
						num:'2',
						status:3
					},
					{
						pic:'http://img13.360buyimg.com/mobilecms/s372x372_jfs/t1/7588/17/14015/324015/5c5159ebE09d77e8a/ddb28657aa4cbf94.jpg',
						name:'戴尔（DELL）S2319HS 23英寸IPS屏三面微边框 旋转升降 广视角 不闪屏个人商务 电脑显示器（带HDMI线',
						num:'2',
						status:4
					}
					
				]
			};
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
			InputFocus(e) {
				this.InputBottom = e.detail.height
			},
			InputBlur(e) {
				this.InputBottom = 0
			}
		}
	}
</script>

<style>
	.after-sales-top{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 999;
	}
	.after-sales-list{
		margin-top: 210rpx;
	}
	.search{
		border-top: 1px solid #EEEEEE;
		border-bottom: 1px solid #EEEEEE;
	}
	.sales_head{
		width:100%;
		border-bottom: 1px solid #EEEEEE;
	}
	.sales_main{
		width:100%;
		min-height:200rpx;
	}
	.sales_inf_name{
		overflow:hidden;
		text-overflow:ellipsis;
		line-height:40rpx;
		display:-webkit-box; 
		-webkit-box-orient:vertical;
		-webkit-line-clamp:2;
	}
</style>
