<template>
	<view>
		<view class="bg-white padding flex justify-around align-center">
			<button class="cu-btn round">促销</button>
			<button class="cu-btn round">降价</button>
			<button class="cu-btn round">有券</button>
			<button class="cu-btn round">有货</button>
		</view>
		<view>
			<view class="collect_title padding  flex justify-between align-center">
				<view class="text-sm">共<text class="text-red">2</text>件商品</view>
				<view class="text-sm text-red" @tap="changeEdit">{{cartedittext}}</view>
			</view>
			<view class="coll_card bg-white padding flex  align-center margin-bottom-sm" v-for="(product,index) in order" :key="index">
				<view class="margin-right-sm" v-if="cartedit"><checkbox class='round red' :class="product.checked?'checked':''" :checked="product.checked?true:false" :value="product.id" :data-index="index" ></checkbox></view>
				<view class="coll_image">
					<image :src="product.pic"></image>
				</view>
				<view class="padding-left">
					<view class="pro_name">{{product.name}}</view>
					<view class="text-gray text-xs">颜色：{{product.color}}</view>
					<view class="flex justify-between align-center">
						<view class="pro_price text-price text-red text-sm">{{product.price}}</view>
						<button class="cu-btn line-blue round sm">查看相似</button>
					</view>
				</view>
			</view>	
		</view>
		<view class="coll_foot padding flex justify-between align-center" v-if="cartedit" >
			<view class=" flex-sub flex align-center">
				<view><checkbox class='round red' :class="allcheck?'checked':''" :checked="allcheck?true:false" value="all" @tap="choseAll"></checkbox></view>
				<view class="cart-chose-all margin-left-sm" >全选</view>
			</view>
			<view class="coll-no  text-white bg-red">取消收藏</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cartedittext:'编辑',
				cartedit:false,
				allcheck:false,
				order:[
					{
						id:1,
						pic:'https://img14.360buyimg.com/n0/jfs/t1/111593/24/3809/228019/5eaa3ed5E764e7044/9f44f3d008f72636.jpg',
						name:'亿嘉IJARL 日式餐具套装陶瓷碗盘碟套装高温瓷家居送礼 18头健康瓷 日式餐具套装陶瓷碗盘碟套装高温瓷家居送礼',
						color:'兰草',
						price:'159.20'
					},
					{
						id:2,
						pic:'https://img14.360buyimg.com/n0/jfs/t24346/148/2197981015/261790/45226458/5b763e55Nc8d63305.jpg',
						name:'玉泉 韩式 中式 韩式 10头厨房陶瓷套件碟碗套装 餐具套装 高淳陶瓷 玉泉 韩式 中式 韩式 10头厨房陶瓷套件碟碗套装 餐具套装 高淳陶瓷',
						color:'10头蓝色',
						price:'99.00'
					},
					{
						id:2,
						pic:'https://img14.360buyimg.com/n0/jfs/t24346/148/2197981015/261790/45226458/5b763e55Nc8d63305.jpg',
						name:'玉泉 韩式 中式 韩式 10头厨房陶瓷套件碟碗套装 餐具套装 高淳陶瓷 玉泉 韩式 中式 韩式 10头厨房陶瓷套件碟碗套装 餐具套装 高淳陶瓷',
						color:'10头蓝色',
						price:'99.00'
					}
					
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
			choseAll:function(){
				if (this.allcheck == true) {
					this.allcheck = false;
					for(var i = 0;i<this.order.length;i++){
						this.order[i].checked = false;
					}
				} else {
					this.allcheck = true;
					for(var i = 0;i<this.order.length;i++){
						this.order[i].checked = true;
					}
				}
			}
		}
	}
</script>

<style>
	.coll_card{
		width:100%;
		height:320rpx;
	}
	.coll_image{
		flex:0 0 160rpx;
		height:160rpx;
	}
	.coll_image image{
		width:100%;
		height:100%;
	}
	.pro_name{
		overflow:hidden;
		text-overflow:ellipsis;
		line-height:40rpx;
		display:-webkit-box; 
		-webkit-box-orient:vertical;
		-webkit-line-clamp:2;
	}
	.coll_foot{
		width:100%;
		height:120rpx;
		background:rgba(255,255,255,0.8);
		border-top: 1px solid #EEEEEE;
		position: fixed;
		bottom: 0;
		left:0;
		z-index:999;
	}
	.coll-no{
		width:150rpx;
		height:68rpx;
		text-align: center;
		line-height: 70rpx;
		border-radius:10rpx;
	}
	
</style>
