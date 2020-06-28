<template>
	<view class="dy-pubu-product-list">
		<view class="dy-pubu-product" v-for="(product,index) in products" :key="index" :style="index==0?'margin-top:0':''" @tap="toDetail">
			<view><image :src="product.pic" mode="widthFix"></image></view>
			<view class="dy-pubu-product-title">{{product.name}}</view>
			<view class="text-price text-red">{{product.price}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				products:[
					{
						pic:'http://img13.360buyimg.com/mobilecms/s372x372_jfs/t1/7588/17/14015/324015/5c5159ebE09d77e8a/ddb28657aa4cbf94.jpg',
						name:'戴尔（DELL）S2319HS 23英寸IPS屏三面微边框 旋转升降 广视角 不闪屏个人商务 电脑显示器（带HDMI线',
						price:'999'
					},
					{
						pic:'http://img13.360buyimg.com/mobilecms/s372x372_jfs/t1/7588/17/14015/324015/5c5159ebE09d77e8a/ddb28657aa4cbf94.jpg',
						name:'戴尔（DELL）S2319HS 23英寸IPS屏三面微边框 旋转升降 广视角 不闪屏个人商务 电脑显示器（带HDMI线',
						price:'999'
					},
					{
						pic:'http://img13.360buyimg.com/mobilecms/s372x372_jfs/t1/7588/17/14015/324015/5c5159ebE09d77e8a/ddb28657aa4cbf94.jpg',
						name:'戴尔（DELL）S2319HS 23英寸IPS屏三面微边框 旋转升降 广视角 不闪屏个人商务 电脑显示器（带HDMI线',
						price:'999'
					},
					{
						pic:'http://img13.360buyimg.com/mobilecms/s372x372_jfs/t1/7588/17/14015/324015/5c5159ebE09d77e8a/ddb28657aa4cbf94.jpg',
						name:'戴尔（DELL）S2319HS 23英寸IPS屏三面微边框 旋转升降 广视角 不闪屏个人商务 电脑显示器（带HDMI线',
						price:'999'
					},
					{
						pic:'http://img13.360buyimg.com/mobilecms/s372x372_jfs/t1/7588/17/14015/324015/5c5159ebE09d77e8a/ddb28657aa4cbf94.jpg',
						name:'戴尔（DELL）S2319HS 23英寸IPS屏三面微边框 旋转升降 广视角 不闪屏个人商务 电脑显示器（带HDMI线',
						price:'999'
					},
					{
						pic:'http://img13.360buyimg.com/mobilecms/s372x372_jfs/t1/7588/17/14015/324015/5c5159ebE09d77e8a/ddb28657aa4cbf94.jpg',
						name:'戴尔（DELL）S2319HS 23英寸IPS屏三面微边框 旋转升降 广视角 不闪屏个人商务 电脑显示器（带HDMI线',
						price:'999'
					}
				]
			};
		},
		methods:{
			toDetail(){
				uni.navigateTo({
					url:'/pages/product/detail/detail'
				})
			}
		}
	}
</script>

<style>
.dy-pubu-product-list{
	-moz-column-count:2;
	/* Firefox */
		-webkit-column-count:2;
	/* Safari 和 Chrome */
		column-count:2;
	-moz-column-gap:20rpx;
	-webkit-column-gap:20rpx;
	column-gap:20rpx;
}
.dy-pubu-product-list .dy-pubu-product{
	padding: 20rpx;
	background-color: #FFFFFF;
	border-radius: 20rpx;
	margin-top: 20rpx;
}
.dy-pubu-product-list .dy-pubu-product image{
	width: 100%;
}

.dy-pubu-product-title{
	height: 3em;
	line-height: 1.5em;
	width: 100%;
	overflow:hidden;
	text-overflow: ellipsis;
}
</style>
