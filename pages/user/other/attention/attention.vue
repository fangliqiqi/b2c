<template>
	<view>
		<view class="collect_title padding  flex justify-between align-center">
			<view class="text-sm">您关注了<text class="text-red">1</text>个店铺</view>
			<view class="text-sm text-red" @tap="changeEdit">{{cartedittext}}</view>
		</view>
		<view>
			<view class="shop_card bg-white flex justify-between align-center margin-bottom-sm padding"  v-for="(shop,index) in attention" :key="index">
				<view class="margin-right-sm" v-if="cartedit"><checkbox class='round red' :class="shop.checked?'checked':''" :checked="shop.checked?true:false" :value="shop.id" :data-index="index" ></checkbox></view>
				<view class="shop_pic flex justify-center align-center">
					<image :src="shop.pic" mode="widthFix" ></image>
				</view>
				<view class="shop_inf padding-left">
					<view class="flex align-center">
						<view class="margin-right-sm">{{shop.name}}</view>
						<view class="shop_state text-xs text-white">{{shop.state}}</view>
					</view>
					<view class="text-gray text-xs margin-top-sm">{{shop.peo}}人关注店铺</view>
				</view>
			</view>
		</view>
		<view class="att_foot padding flex justify-between align-center" v-if="cartedit" >
			<view class=" flex-sub flex align-center">
				<view><checkbox class='round red' :class="allcheck?'checked':''" :checked="allcheck?true:false" value="all" @tap="choseAll"></checkbox></view>
				<view class="cart-chose-all margin-left-sm" >全选</view>
			</view>
			<view class="att-no  text-white bg-red">取消关注</view>
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
				attention:[
					{
						id:1,
						pic:'https://img10.360buyimg.com/imgzone/jfs/t17752/324/262367977/74875/fd9a74db/5a65c544N9fcaf6f7.png',
						name:'Apple产品自营旗舰店',
						state:'自营',
						peo:'2018万'	
					},
					{
						id:2,
						pic:'https://img10.360buyimg.com/imgzone/jfs/t17752/324/262367977/74875/fd9a74db/5a65c544N9fcaf6f7.png',
						name:'Apple产品自营旗舰店',
						state:'自营',
						peo:'2018万'	
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
					for(var i = 0;i<this.attention.length;i++){
						this.attention[i].checked = false;
					}
				} else {
					this.allcheck = true;
					for(var i = 0;i<this.attention.length;i++){
						this.attention[i].checked = true;
					}
				}
			}
		}
	}
</script>

<style>
	.shop_card{
		width:100%;
		height:150rpx;
	}
	.shop_pic{
		width:20%;
		height:100%;
	}
	.shop_inf{
		width:80%;
	}
	.shop_state{
		width:70rpx;
		height:30rpx;
		text-align:center;
		line-height:30rpx;
		background-color: red;
		border-radius:10rpx;
	}
	.att_foot{
		width:100%;
		height:120rpx;
		background:rgba(255,255,255,0.8);
		border-top: 1px solid #EEEEEE;
		position: fixed;
		bottom: 0;
		left:0;
		z-index:999;
	}
	.att-no{
		width:150rpx;
		height:68rpx;
		text-align: center;
		line-height: 70rpx;
		border-radius:10rpx;
	}
</style>
