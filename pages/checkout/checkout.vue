<template>
	<view>
		<view class="address-content flex">
			<view class="address"><text class="cuIcon-locationfill"></text>请添加收货地址</view>
		</view>
		<view class="check-products-list">
			<view class="check-product flex" v-for="(item,index) in orderProducts" :key="index">
				<view class="check-product-thump"><image :src="item.pic"></image></view>
				<view class="check-product-info">
					<view class="check-product-name">{{item.name}}</view>
					<view class="check-product-sku">{{item.sku}}</view>
					<view class="check-product-price flex">
						<view class="flex-sub text-price text-red">{{item.price}}</view>
						<view class="flex-sub text-right check-product-num text-gray">x {{item.num}}</view>
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
				orderProducts:[
					{
						id:1,
						name:"德国DEDAKJ 制氧机带雾化车载高原吸氧机家用老人孕妇氧气机 1SW（语音+雾化+除菌）",
						price:"1199.00",
						pic:"http://img10.360buyimg.com/mobilecms/s300x300_jfs/t1/98995/24/14779/151228/5e684410Eb613bd8e/97837b0e4aa57c4e.jpg",
						sku:"1SW（语音+雾化+除菌）",
						num:1,
					},
					{
						id:2,
						name:"二手9成新】Apple iPhone X 苹果x 二手手机 全面屏 面容识别 银色 256G 全网通",
						price:"3625.00",
						pic:"http://img10.360buyimg.com/mobilecms/s300x300_jfs/t1/107054/1/19570/282822/5e9ff13dE0f63db1b/32e6833be7bd0fbf.png",
						sku:"银色，256G 全网通",
						num:1,
					},
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.address-content {
		background-color: #FFFFFF;
		width: 100%;
	}
	.address-content .address{
		height: 100rpx;
		line-height: 100rpx;
		color: #999;
		background-color: #FFFFFF;
		width: 100%;
		padding-left: 20rpx;
	}
	
	.address-content .address::after {
	    font-family: cuIcon;
	    display: block;
	    content: "\E6A3";
	    position: absolute;
	    font-size: 1em;
	    color: #8799a3;
	    line-height: 100rpx;
	    width: 30rpx;
	    text-align: center;
	    top: 0;
	    bottom: 0;
	    right: 20rpx;
	    margin: auto;
	}
	
	.check-products-list{
		width: 100%;
		background-color: #FFFFFF;
		margin-top: 20rpx;
		border-radius: 10rpx;
	}
	.check-product{
		padding: 20rpx 0 20rpx 20rpx;
	}
	
	.check-product-thump{
		width: 200rpx;
		height: 200rpx;
	}
	.check-product-thump image{
		width: 100%;
		height: 100%;
	}
	
	.check-product-info{
		width: calc(100vw - 220rpx);
		padding-left: 30rpx;
	}
	.check-product-name{
		font-size: 1em;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		padding-right: 20rpx;
		word-break: break-all;
		margin-bottom: 10rpx;
	}
	
	.check-product-price{
		padding-right: 20rpx;
	}
	
	.check-product-price .text-price{
		font-size: 1.2em;
		height: 1.2em;
		line-height: 1.2em;
	}
	
	.check-product-price .check-product-num{
		font-size: 0.8em;
		height: 1.6em;
		line-height: 2.2em;
	}
	
	.check-product-sku{
		position: relative;
		background: #f7f7f7;
		padding: 0 10rpx 0 10rpx;
		height: 40rpx;
		line-height: 40rpx;
		font-size: 0.8em;
		color: #666;
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		flex: 1;
		border-radius: 8rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		margin-bottom: 10rpx;
		display: inline-block;
	}
	
</style>
