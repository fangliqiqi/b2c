<template>
	<view>
		<view>
			<view class="cu-bar  search bg-white">
				<view class="search-form round">
					<text class="cuIcon-search"></text>
					<input @focus="InputFocus" @blur="InputBlur" :adjust-position="false" type="text" placeholder="搜索我的订单" confirm-type="search"></input>
				</view>
			</view>
			<scroll-view scroll-x class="bg-white nav margin-bottom-sm">
				<view class="flex text-center">
					<view class="cu-item flex-sub" :class="0==TabCur?'text-red cur':''"   @tap="tabSelect" :data-id="0">
						全部
					</view>
					<view class="cu-item flex-sub" :class="1==TabCur?'text-red cur':''"   @tap="tabSelect" :data-id="1">
						待付款
					</view>
					<view class="cu-item flex-sub" :class="2==TabCur?'text-red cur':''"   @tap="tabSelect" :data-id="2">
						待收货
					</view>
					<view class="cu-item flex-sub" :class="3==TabCur?'text-red cur':''"   @tap="tabSelect" :data-id="3">
						待评价
					</view>
					<view class="cu-item flex-sub" :class="4==TabCur?'text-red cur':''"   @tap="tabSelect" :data-id="4">
						已取消
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="order-list">
			<view class="order_card padding bg-white margin-bottom-sm" v-for="(product,index) in order" :key="index" >
				<block v-if="product.status==1">
					<view class="order_card_head flex justify-between align-center">
						<view class="shop_name">当右<view class="cuIcon-right"></view></view>
						<view class="text-red">等待付款</view>
					</view>
					<view @tap="toDetail(product.sn)" class="order_card_main flex justify-between align-center">
						<image class="basis-xs" :src="product.pic" mode="widthFix"></image>
						<view class="basis-lg order_product_inf padding-left">{{product.name}}</view>
						<view class="basis-xs text-right text-price text-red">{{product.price}}</view>
					</view>
					<view class="flex justify-end ">
						<button class="cu-btn  round line-red">待付款</button>
					</view>
				</block>
				<block v-else-if="product.status==2">
					<view class="order_card_head flex justify-between align-center" >
						<view class="shop_name">当右<view class="cuIcon-right"></view></view>
						<view class="text-red">等待收货</view>
					</view>
					<view @tap="toDetail(product.sn)" class="order_card_main flex justify-between align-center">
						<image class="basis-xs" :src="product.pic" mode="widthFix"></image>
						<view class="basis-lg order_product_inf padding-left">{{product.name}}</view>
						<view class="basis-xs text-right text-price text-red">{{product.price}}</view>
					</view>
					<view class="flex justify-end ">
						<button class="cu-btn  round line">查看物流</button>
						<button class="cu-btn  round line-red margin-left-sm">确认收货</button>
					</view>
				</block>
				<block v-else-if="product.status==3">
					<view class="order_card_head flex justify-between align-center">
						<view class="shop_name">当右<view class="cuIcon-right"></view></view>
						<view class="text">已完成</view>
					</view>
					<view @tap="toDetail(product.sn)" class="order_card_main flex justify-between align-center">
						<image class="basis-xs" :src="product.pic" mode="widthFix"></image>
						<view class="basis-lg order_product_inf padding-left">{{product.name}}</view>
						<view class="basis-xs text-right text-price text-red">{{product.price}}</view>
					</view>
					<view class="flex justify-end ">
						<button class="cu-btn  round line-red">开始评价</button>
					</view>
				</block>
				<block v-else-if="product.status==4">
					<view class="order_card_head flex justify-between align-center">
						<view class="shop_name">当右<view class="cuIcon-right"></view></view>
						<view class="text">已取消</view>
					</view>
					<view @tap="toDetail(product.sn)" class="order_card_main flex justify-between align-center">
						<image class="basis-xs" :src="product.pic" mode="widthFix"></image>
						<view class="basis-lg order_product_inf padding-left">{{product.name}}</view>
						<view class="basis-xs text-right text-price text-red">{{product.price}}</view>
					</view>
					<view class="flex justify-end">
						<button class="cu-btn round line-red">再次购买</button>
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
				InputBottom: 0,
				TabCur: 0,
				all:true,
				scrollLeft: 0,
				order:[
					{
						sn:1,
						pic:'http://img13.360buyimg.com/mobilecms/s372x372_jfs/t1/7588/17/14015/324015/5c5159ebE09d77e8a/ddb28657aa4cbf94.jpg',
						name:'戴尔（DELL）S2319HS 23英寸IPS屏三面微边框 旋转升降 广视角 不闪屏个人商务 电脑显示器（带HDMI线',
						price:'999',
						status:1
					},
					{
						sn:2,
						pic:'http://img13.360buyimg.com/mobilecms/s372x372_jfs/t1/7588/17/14015/324015/5c5159ebE09d77e8a/ddb28657aa4cbf94.jpg',
						name:'戴尔（DELL）S2319HS 23英寸IPS屏三面微边框 旋转升降 广视角 不闪屏个人商务 电脑显示器（带HDMI线',
						price:'999',
						status:2
					},
					{
						sn:3,
						pic:'http://img13.360buyimg.com/mobilecms/s372x372_jfs/t1/7588/17/14015/324015/5c5159ebE09d77e8a/ddb28657aa4cbf94.jpg',
						name:'戴尔（DELL）S2319HS 23英寸IPS屏三面微边框 旋转升降 广视角 不闪屏个人商务 电脑显示器（带HDMI线',
						price:'999',
						status:2
					},
					{
						sn:4,
						pic:'http://img13.360buyimg.com/mobilecms/s372x372_jfs/t1/7588/17/14015/324015/5c5159ebE09d77e8a/ddb28657aa4cbf94.jpg',
						name:'戴尔（DELL）S2319HS 23英寸IPS屏三面微边框 旋转升降 广视角 不闪屏个人商务 电脑显示器（带HDMI线',
						price:'999',
						status:3
					}
				]
			};
		},
		methods: {
			InputFocus(e) {
				this.InputBottom = e.detail.height
			},
			InputBlur(e) {
				this.InputBottom = 0
			},
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
			toDetail(sn){
				uni.navigateTo({
					url:"/pages/user/order/order-details/order-details?sn="+sn,
				})
			}
		},
		onLoad(options) {
			console.log(options);
			if(options.status!=undefined){
				this.TabCur = options.status;
			}
		},
		
	}
</script>

<style>
	.order-top-nav{
		/* position: fixed;
		top: 0;
		width: 100%;
		z-index: 1; */
	}
	.order-list{
		height: calc(100vh - 190rpx);
		overflow-y: auto;
	}
	.order_card{
		border-radius:30rpx;
	}
	.order_card_head{
		width:100%;
		height:45rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.shop_name{
		display: flex;
		align-items: center;
	}
	.order_card_main{
		width:100%;
		height:200rpx;
	}
	.order_product_inf{
		overflow:hidden;
		text-overflow:ellipsis;
		line-height:40rpx;
		display:-webkit-box; 
		-webkit-box-orient:vertical;
		-webkit-line-clamp:2;
	}
</style>
