<template>
	<view>
		<view class="footprint_title padding flex justify-between align-center ">
			<view>共3条，最多为您保存50条</view>
			<view class="text-red" @tap="changeEdit">{{cartedittext}}</view>
		</view>
		<view>
			<view  class="footprint_card bg-white flex justify-between align-center padding-left padding-top"  v-for="(product,index) in footprint" :key="index">
				<view class="margin-right-sm" v-if="cartedit"><checkbox class='round red' :class="product.checked?'checked':''" :checked="product.checked?true:false" :value="product.id" :data-index="index" ></checkbox></view>
				<view class="footprint_img margin-right-sm padding-bottom">
					<image :src="product.pic" mode="widthFix"></image>
				</view>
				<view class="footprint_inf flex justify-between padding-right padding-bottom">
					<view class="footprint_name">{{product.name}}</view>
					<view class="flex justify-between align-center">
						<view class="text-price text-red">{{product.price}}</view>
						<button class="cu-btn line-blue round sm">查看相似</button>
					</view>
				</view>
			</view>
			<view class="footprint_foot padding-left  flex justify-between align-center" v-if="cartedit">
				<view class="flex-sub flex align-center">
					<view><checkbox class='round red' :class="allcheck?'checked':''" :checked="allcheck?true:false" value="all" @tap="choseAll"></checkbox></view>
					<view class="cart-chose-all margin-left-sm" >全选</view>
				</view>
				<view class="delete text-white bg-red">删除</view>
			</view>
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
				footprint:[
					{
						pic:'https://img14.360buyimg.com/n0/jfs/t1/48975/24/16741/337144/5de0913eE206334a5/32c2af4c117024c3.jpg',
						name:'惠普(HP)星14 青春版 14英寸轻薄窄边框笔记本电脑(R5-3500U 8G 256GSSD',
						price:'3499.00'
					},
					{
						pic:'https://img14.360buyimg.com/n0/jfs/t1/1072/17/7083/49654/5ba491a8Ea95301fb/800001c512d23f82.jpg',
						name:'苏泊尔supor砂锅汤锅炖锅3.2L新陶养生煲怡悦系列陶瓷煲EB32JAT01-R',
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
					for(var i = 0;i<this.footprint.length;i++){
						this.footprint[i].checked = false;
					}
				} else {
					this.allcheck = true;
					for(var i = 0;i<this.footprint.length;i++){
						this.footprint[i].checked = true;
					}
				}
			}
		}
	}
</script>

<style>
	.footprint_title{
		border-bottom: 1px solid #E5E5E5;
	}
	.footprint_card{
		width:100%;
		height:240rpx;
	}
	.footprint_img{
		width: 30%;
		height: 100%;
	}
	.footprint_img image{
		width: 100%;
		height: 100%;
	}
	.footprint_inf{
		width:70%;
		height:100%;
		border-bottom: 1px solid #E5E5E5;
		flex-direction: column;
	}
	.footprint_name{
		overflow:hidden;
		text-overflow:ellipsis;
		line-height:40rpx;
		display:-webkit-box; 
		-webkit-box-orient:vertical;
		-webkit-line-clamp:2;
	}
	.footprint_foot{
		width:100%;
		height:120rpx;
		background:rgba(255,255,255,0.8);
		border-top: 1px solid #EEEEEE;
		position: fixed;
		bottom: 0;
		left:0;
		z-index:999;
	}
	.delete{
		width:20%;
		height:100%;
		text-align: center;
		line-height: 120rpx;
	}
</style>
