<template>
	<view :style="'font-size:'+base_size">
		<view class="swiper-box">
			<swiper class="screen-swiper" :indicator-dots="false" :circular="true" interval="5000" duration="500" @change="swiperChange">
				<swiper-item v-for="(item,index) in swiperList" :key="index">
					<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
					<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
				</swiper-item>
			</swiper>
			<view class="swiper-dot">{{swiperIndex}}/{{swiperList.length}}</view>
		</view>
		<view class="product-intro">
			<view class="flex">
				<view class="flex-twice flex">
					<view class="text-price text-red product-price">4999</view>
				</view>
				<view class="flex-sub flex justify-end">
					<view class="favoriat">
						<view class="favorit-icon"><image mode="widthFix" src="../../../static/images/favorites.png"></image></view>
						<view class="favorit-text"><text>收藏</text></view>
					</view>
				</view>
			</view>
			<view class="product-name">【秒杀精选】联想小新air14新款锐龙R5四核全高清屏窄边框超轻高性能轻薄潮青春办公游戏笔记本电脑 升级版 R5-3500U 8G 1TB固态 银色  IPS屏幕 Vega8高性能显卡</view>
		</view>
		<view class="prodcut-option">
			<view class="flex">
				<view class="prodcut-option-t">已选</view>
				<view class="text-gray prodcut-option-ct">魅海蓝，全网通（6GB 64GB），官方标配，1个</view>
			</view>
			<view></view>
		</view>
		<view class="cu-modal bottom-modal " :class="modalName=='bottomModal'?'show':''">
			<view class="cu-dialog">
				<view class="padding option-modal">
					<view class="flex">
						<image class="sku-thumb" :src="product.sku_thumb"></image>
						<view class="price-box flex align-end padding-left">
							<view class="text-price text-red padding-right">{{product.sku_price}}</view>
							<view class="text-price text-red">{{product.sku_price}}</view>
						</view>
					</view>
					<view class="attr-list">
						<block v-for="(item,index) in product.attrs" :key="index">
							<view class="attr-box">
								<view class="attr-name">{{item.attr_name}}</view>
								<view class="attr-value-box padding-top">
									<block v-for="(value,index2) in item.values" :key="index2">
										<block v-if="product.values.indexOf(value.value)>-1">
											<view class="attr-value active" @tap="choseAttr" :data-attr="item.attr_name" :data-val="value.value">{{value.value}}</view>
										</block>
										<block v-else>
											<view class="attr-value" @tap="choseAttr" :data-attr="item.attr_name" :data-val="value.value">{{value.value}}</view>
										</block>
										
									</block>
								</view>
							</view>
						</block>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	var api = require('@/common/dy_mwx_base.js');
	export default {
		data() {
			return {
				swiperIndex:1,
				swiperList: [],
				modalName:'bottomModal',
				product:{},
			}
		},
		methods: {
			swiperChange(e){
				this.swiperIndex = e.detail.current+1;
			},
			getDetail(){
				var _this = this;
				api.net.post({
					url:"product.detail",
					data:{sku:'574091202005182086'},
					callback:function(res){
						console.log(res);
						if (res.data.code==0&&res.data.item!=null) {
							_this.product = res.data.item;
							var images = _this.product.images.split(',');
							for (var i=0;i<images.length;i++) {
								_this.swiperList.push({
									index: i,
									type: 'image',
									url: images[i],
								});
							}
						}
					}
				});
			},
			choseAttr(e){
				
				var data = e.target.dataset;
				console.log(data);
			}
		},
		onLoad(){
			this.getDetail();
		}
	}
</script>
	
<style>
	.swiper-box{
		position: relative;
	}
	
	.screen-swiper{
		height: 750rpx;
	}
	
	.swiper-dot{
		width: 88rpx;
		height: 56rpx;
		line-height: 56rpx;
		font-size: 0.85em;
		opacity:0.7 ;
		color: #fff;
		background: #000;
		position: absolute;
		text-align: center;
		border-radius: 56rpx;
		bottom: 30rpx;
		right: 20rpx;
	}
	.product-intro{
		padding:20rpx calc(4vw) 20rpx calc(4vw);
		background-color: #FFFFFF;
		border-radius: 0 0 20rpx 20rpx;
	}
	.product-old-price{
		text-decoration: line-through;
		font-size: 1em;
		line-height: 3em;
	}
	.product-price{
		font-size: 2em;
		height: 2em;
		line-height: 2em;
	}
	
	.favorit-icon{
		width: 2em;
		height: 2em;
		
	}
	.favorit-text{
		width: 2em;
		font-size: 0.8em;
		height: 1em;
		line-height: 1em;
		text-align: center;
	}
	
	.favoriat{
		width: 2em;
		height: 2em;
		text-align: center;
	}
	
	.product-name{
		font-size: 1em;
		font-weight: bold;
	}
	
	.prodcut-option{
		background-color: #FFFFFF;
		padding:20rpx calc(4vw) 20rpx calc(4vw);
		border-radius: 20rpx;
		margin-top: 20rpx;
	}
	
	.prodcut-option-t {
		width: 3em;
		color: #000000;
		font-weight: 700;
	}
	
	.prodcut-option-ct {
		font-size: 0.9em;
		line-height: 1.7em;
	}
	
	.option-modal{
		border-radius: 20rpx 20rpx 0 0;
		min-height: calc(60vh);
	}
	
	.sku-thumb{
		width: 200rpx;
		height: 200rpx;
	}
	
	.attr-list{
		text-align: left;
		margin-top: 20rpx;
		font-size:0.9em;
	}
	.attr-box{
		margin-top: 40rpx;
	}
	.attr-name{
		font-weight: bold;
	}
	.attr-value{
		color: #666;
		background-color: #E5E5E5;
		/* border: 2rpx solid #CCCCCC; */
		padding: 0rpx 30rpx;
		margin: 10rpx;
		border-radius: 1em;
		height: 2.4em;
		line-height: 2.4em;
		font-size:0.86em;
		display: inline-flex;
	}
	.attr-box .active{
		color: #F43F3B;
		border: 2rpx solid #F43F3B;
		background-color: #F9D3D7;
	}
</style>
