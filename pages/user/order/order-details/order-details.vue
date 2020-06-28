<template>
	<view>
		<view class="bg-gradual-red flex align-center padding">
			<view class="text-xl">
				<view class="cuIcon-roundcheckfill text-white margin-right-sm"></view>
			</view>
			<view>
				<view class="text-bold margin-bottom-xs">已签收</view>
				<view class="text-sm">您的单已签收，祝您购物愉快</view>
			</view>
		</view>
		<view class="cu-list menu bg-white">
			<navigator class="cu-item arrow logistics" url="../logistics/logistics"   hover-class="none">
				<view class="content flex align-center">
					<view class="text-xl margin-right-sm">
						<view class="cuIcon-deliver_fill text-gray"></view>
					</view>
					<view class="padding-bottom-sm padding-top-sm">
						<view class="logistics_inf text-black">您的快递已有快递点签收。如有疑问您可以联系配送员【王小鹏，15986365478】确认。感谢你的信任与支持</view>
						<view class="text-gray text-sm">2020-02-12 10:04:16</view>
					</view>
				</view>
			</navigator>
			<view class="cu-item">
				<view class="content flex align-center">
					<view class="text-xl margin-right-sm">
						<view class="cuIcon-locationfill text-gray"></view>
					</view>
					<view class="padding-bottom-sm padding-top-sm">
						<view class="text-black">张丽 183****8695</view>
						<view class="logistics_inf text-gray text-sm">安徽省合肥市高新区天智路原创动漫园1586-1596室</view>
					</view>
				</view>
			</view>
		</view>
		<view class="radius margin-top margin-bottom bg-white padding-left " v-for="(items,index) in order.shop">
			<view class="padding-top-sm padding-bottom-sm padding-right flex justify-between align-center">
				<view class="flex align-center text-xl">
					<view class="cuIcon-shop margin-right-xs"></view>
					<view class="text-black text-df">{{items.shopname}}</view>
				</view>
				<view class="text-gray text-sm">共计2件商品</view>
			</view>
			<view class="product padding-right">
				<view class="padding-top-xs padding-bottom-xs flex justify-between align-center" v-for="(item,index) in items.product" :key = 'index' >
					<view class="pro_image margin-right-sm flex justify-center align-center">
						<image :src="item.pic" mode="widthFix" ></image>
					</view>
					<view class="basis-xl text-cut">
						<view class='text-black  text-cut'>{{item.name}}</view>
						<view class="text-gray text-sm margin-top-xs margin-bottom-sm">{{item.spe}}</view>
						<view class="flex justify-between align-center">
							<view class='text-price text-red text-bold'>{{item.price}}</view>
							<view class="text-gray text-sm">×{{item.num}}</view>
						</view>
					</view>
				</view>
			</view>
			<view class="padding-sm text-center text-xl">
				<text class="cuIcon-mark margin-right-xs text-black"></text>
				<text class="text-sm text-gray">联系客服</text>
			</view>
		</view>
		<view class="radius bg-white padding-left padding-bottom-sm padding-top-sm margin-bottom">
			<view>
				<view class="text-gray padding-bottom-sm">订单编号：<text class="text-black">110388233097</text></view>
				<view class="text-gray padding-bottom-sm">下单时间：<text class="text-black">2020-01-27 07:14:23</text></view>
				<view class="text-gray padding-bottom-sm">支付方式：<text class="text-black">在线支付</text></view>
				<view class="text-gray padding-bottom-sm">配送方式：<text class="text-black">普通快递</text></view>
			</view>
			<view class="invoice padding-top-sm padding-bottom-sm padding-right ">
				<navigator url="" class="flex justify-between align-center">
					<view class="text-gray">电子发票：<text class="text-black">已开票</text></view>
					<view class="text-gray text-sm">查看发票<text class="cuIcon-right"></text></view>
				</navigator>
			</view>
			<view class="padding-top-sm padding-right">
				<view class="flex justify-between align-center padding-bottom-sm text-black ">
					<view>商品金额</view>
					<view class="text-price">7489.00</view>
				</view>
				<view class="flex justify-between align-center padding-bottom-sm text-black">
					<view>运费</view>
					<view>+<text class="text-price margin-left-xs">0.00</text></view>
				</view>
				<view class="flex justify-between align-center padding-bottom-sm text-black" >
					<view>商品优惠</view>
					<view>-<text class="text-price margin-left-xs">0.00</text></view>
				</view>
				<view class="flex justify-end align-center text-lg text-black text-bold">
					实付金额：<text class="text-price text-red margin-left-xs">7489.00</text>
				</view>
			</view>
		</view>
		<view class="empty"></view>
		<view class="order_foot shadow bg-white flex justify-end align-center padding-right">
			<button class="cu-btn round line-black">删除订单</button>
			<button class="cu-btn round line-black">看相似</button>
			<button class="cu-btn round line-red">再次购买</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				order:{
						sn:1,
						shop:[
							{
								shopname:'店1',
								product:[
									{
										pic:'https://img14.360buyimg.com/n0/jfs/t1/59022/28/10293/141808/5d78088fEf6e7862d/68836f52ffaaad96.jpg',
										name:'Apple iPhone 11 (A2223) 128GB 黑色 移动联通电信4G手机 双卡双待',
										spe:'黑色 128G 官方套餐',
										price:'5999.00',
										num:'1',
									},
									{
										pic:'https://img14.360buyimg.com/n0/jfs/t1/59022/28/10293/141808/5d78088fEf6e7862d/68836f52ffaaad96.jpg',
										name:'Apple iPhone 11 (A2223) 128GB 黑色 移动联通电信4G手机 双卡双待',
										spe:'黑色 128G 官方套餐',
										price:'3000.00',
										num:'1',
									}
								]
							},
						]
					},
					
			}
		},
		methods: {
			
		},
		onLoad(options) {
			console.log(options.sn);	
		},
	}
</script>

<style>
	
	.logistics_inf{
		overflow:hidden;
		text-overflow:ellipsis;
		line-height:40rpx;
		display:-webkit-box; 
		-webkit-box-orient:vertical;
		-webkit-line-clamp:2;
	}
	.radius{
		border-radius: 30rpx;
	}
	.product{
		border-top: 1px solid #E5E5E5;
		border-bottom: 1px solid #E5E5E5;
	}
	.pro_image{
		width:20%;
	} 
	.invoice{
		border-top: 1px solid #E5E5E5;
		border-bottom: 1px solid #E5E5E5;
	}
	.empty{
		width:100%;
		height:120rpx;
	}
	.order_foot{
		width:100%;
		height:120rpx;
		border-top: 1px solid #E5E5E5;
		position: fixed;
		bottom: 0;
		left: 0;
	}
	.order_foot button{
		width:175rpx;
		margin-left:20rpx;
	}
</style>
