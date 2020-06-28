<template>
	<view :style="'font-size:'+base_size">
		<view class="bg-white flex justify-end padding">
			<view @tap="changeEdit">{{cartedittext}}</view>
		</view>
		<view class="cart-box">
			<view class="cart-product-list">
				<view v-for="(item,index) in cartProducts" :key="index" class="cart-product-detail flex">
					<view class="cart-product-check  flex align-center justify-center">
						<view><checkbox class='round red' :class="item.checked?'checked':''" :checked="item.checked?true:false" :value="item.id" :data-index="index" @tap="choseProduct"></checkbox></view>
					</view>
					<view class="cart-product-thump">
						<image :src="item.pic"></image>
					</view>
					<view class="cart-product-info">
						<view class="cart-product-name">{{item.name}}</view>
						<view class="cart-product-sku">{{item.sku}}</view>
						<view class="cart-product-price flex">
							<view class="flex-sub text-price text-red">{{item.price}}</view>
							<view class="flex-sub text-right cart-product-num text-gray">x {{item.num}}</view>
						</view>
					</view>
				</view>
			</view>		
		</view>
		
		<view class="cart-count flex" v-if="cartedit">
			<view class="flex-sub flex align-center">
				<view><checkbox class='round red' :class="allcheck?'checked':''" :checked="allcheck?true:false" value="all" @tap="choseAll"></checkbox></view>
				<view class="cart-chose-all">全选</view>
			</view>
			<view class="flex-sub flex justify-end">
				<view class="cart-go-check">删除</view>
			</view>
		</view>
		<view class="cart-count flex" v-else>
			<view class="flex-sub">
				<view><text>总计：</text><text class="text-price text-red cart-total-price">{{total}}</text></view>
			</view>
			<view class="flex-sub flex justify-end">
				<view class="cart-go-check" @tap="goCheckout">去结算</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				base_size:"28rpx",
				cartedit:false,
				cartedittext:"编辑",
				total:"9999",
				allcheck:false,
				cartProducts:[
					{
						id:1,
						name:"德国DEDAKJ 制氧机带雾化车载高原吸氧机家用老人孕妇氧气机 1SW（语音+雾化+除菌）",
						price:"1199.00",
						pic:"http://img10.360buyimg.com/mobilecms/s300x300_jfs/t1/98995/24/14779/151228/5e684410Eb613bd8e/97837b0e4aa57c4e.jpg",
						sku:"1SW（语音+雾化+除菌）",
						num:1,
						checked: true
					},
					{
						id:2,
						name:"二手9成新】Apple iPhone X 苹果x 二手手机 全面屏 面容识别 银色 256G 全网通",
						price:"3625.00",
						pic:"http://img10.360buyimg.com/mobilecms/s300x300_jfs/t1/107054/1/19570/282822/5e9ff13dE0f63db1b/32e6833be7bd0fbf.png",
						sku:"银色，256G 全网通",
						num:1,
						checked: false
					},
				]
			}
		},
		methods: {
			changeEdit:function(){
				if (this.cartedit==true) {
					this.cartedit=false;
					this.cartedittext = "编辑";
				} else {
					this.cartedit=true;
					this.cartedittext = "完成";
				}
			},
			choseProduct:function(e){
				var index = e.target.dataset.index;
				if (this.cartProducts[index].checked==true) {
					this.cartProducts[index].checked = false;
				} else {
					this.cartProducts[index].checked = true;
				}
				this.checkProduct();
			},
			choseAll:function(){
				if (this.allcheck == true) {
					this.allcheck = false;
					for(var i = 0;i<this.cartProducts.length;i++){
						this.cartProducts[i].checked = false;
					}
				} else {
					this.allcheck = true;
					for(var i = 0;i<this.cartProducts.length;i++){
						this.cartProducts[i].checked = true;
					}
				}
				this.countTotal;
				
			},
			checkProduct:function(){
				var allcheck = true;
				for(var i = 0;i<this.cartProducts.length;i++){
					if (this.cartProducts[i].checked==false) {
						allcheck = false;
					}
				}
				this.allcheck = allcheck;
				this.countTotal();
			},
			countTotal:function(){
				var total = 0.00;
				for(var i = 0;i<this.cartProducts.length;i++){
					if (this.cartProducts[i].checked==true) {
						total += parseFloat(this.cartProducts[i].price);
					}
				}
				this.total = total;
			},
			goCheckout:function(){
				uni.navigateTo({
					url:'/pages/checkout/checkout'
				})
			}
		},
		onReady() {
			this.checkProduct();
			this.countTotal();
		}
	}
</script>

<style>
	.cart-box{
		margin-top: 20rpx;
		
	}
	.cart-product-list{
		width: 100%;
		background-color: #FFFFFF;
	}
	.cart-product-detail{
		padding: 20rpx 0 20rpx 0;
	}
	.cart-product-check{
		width: 100rpx;
	}
	.cart-product-check checkbox{
	}
	.cart-product-thump{
		width: 200rpx;
		height: 200rpx;
	}
	.cart-product-thump image{
		width: 100%;
		height: 100%;
	}
	
	.cart-product-info{
		width: calc(100vw - 300rpx);
		padding-left: 30rpx;
	}
	.cart-product-name{
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
	
	.cart-product-price{
		padding-right: 20rpx;
	}
	
	.cart-product-price .text-price{
		font-size: 1.2em;
		height: 1.2em;
		line-height: 1.2em;
	}
	
	.cart-product-price .cart-product-num{
		font-size: 0.8em;
		height: 1.6em;
		line-height: 2.2em;
	}
	
	.cart-product-sku{
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
	
	.cart-count{
		background-color: #FFFFFF;
		position: absolute;
		bottom: 0;
		width: 100%;
		padding: 20rpx;
	}
	.cart-go-check{
		background-color: #F43F3B;
		color: #FFFFFF;
		height: 80rpx;
		width: 240rpx;
		border-radius: 40rpx;
		line-height: 80rpx;
		text-align: center;
	}
	
	.cart-total-price{
		font-size: 1.8em;
	}
	.cart-chose-all{
		height: 54rpx;
		line-height: 58rpx;
		margin-left: 20rpx;
		overflow: hidden;
	}
</style>
