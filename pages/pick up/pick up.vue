<template>
	<view>
		<view class="mask">
			<view class="card radius bg-white  flex flex-direction  align-center">
				<view class="round no_order bg-purple flex justify-center align-center">
					<image src="../../static/images/no_order.png" mode="widthFix"></image>
				</view>
				<view class="text-red text-lg text-bold">暂无可取商品</view>
				<view class="cu-btn round bg-red margin-top-sm ">去首页逛逛</view>
				<view class="order_number text-sm text-gray"></view>
				<view class="store flex flex-direction justify-center">
					<view class="text-black">{{store}}</view>
					<view class="text-gray text-sm margin-top-sm"></view>	
				</view>
			</view>
		</view>
		<view class='bg-white foot padding '>
			<view class="flex align-center padding-bottom"><text class="before bg-purple round margin-right-xs"></text>可取商品</view>
			<view  v-if='true' class="radius bg-gray light add margin-top text-xxl flex justify-center align-center">
				<text class="cuIcon-add text-black"></text>
			</view>
			<view class="img_list flex" v-else>
				<view v-for="(img,index) in order" :key="index">
					<view class="img radius margin-right-sm"><image :src="img.pic" mode="widthFix"></image></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				store:'谊品生鲜国轩K西嘉店',
				order:[
					{pic:'https://img14.360buyimg.com/n0/jfs/t1/71359/20/4228/396815/5d258533E4f1f667c/5d886c903c0d3ab3.jpg'},
					{pic:'https://img14.360buyimg.com/n0/jfs/t1/128246/24/1749/445220/5ebf43cfEbd3d072c/a8dee1e0e479b411.jpg'},
					{pic:'https://img14.360buyimg.com/n0/jfs/t1/78393/27/10662/103739/5d81e32cE2298bbd9/46e9fafff567e063.jpg'},
					{pic:'https://img14.360buyimg.com/n0/jfs/t1/43046/23/13892/229041/5d70d34fE0e6bb41d/a9d466fa5b4d24b0.jpg'},
					{pic:'https://img14.360buyimg.com/n0/jfs/t1/71359/20/4228/396815/5d258533E4f1f667c/5d886c903c0d3ab3.jpg'},
				]
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.mask{
		width:100%;
		height:75vh;
		background: rgba(0,0,0,0.5);
		overflow: hidden;
	}
	.card{
		width:75%;
		height:90%;
		margin:42rpx auto;
		overflow: hidden;
	}
	.order_number{
		width:100%;
		height:80rpx;
		line-height: 80rpx;
		text-align: center;
	}
	.no_order{
		width:300rpx;
		height:300rpx;
		margin:100rpx auto;	
	}
	.store{
		width:100%;
		flex:1;
		text-align: center;
		background-color:#FDE6D2;
	}
	.foot{
		width:100%;
		height:25vh;
	}
	.before{
		width:8rpx;
		height:30rpx;	
	}
	.add{
		width:140rpx;
		height:140rpx;
	}
	.img_list{
		overflow-y: auto;
	}
	.img{
		width:140rpx;
	}
</style>
