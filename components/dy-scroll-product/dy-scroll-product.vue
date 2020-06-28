<template>
	<view>
		<scroll-view scroll-x="true" show-scrollbar="false">
			<view class="flex">
				<view v-for="(item,index) in products" :key="index" class="padding-left">
					<view><image :src="item.pic" mode="widthFix"></image></view>
					<view class="text-price text-red">{{item.price}}</view>
					<view class="text-price text-gray dy-old-price">{{item.old_price}}</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				products:[
					{
						pic:"https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/105827/27/18009/150554/5e8ed147E5102b78e/fee5f637ade39c9c.jpg",
						name:'Iphone 11 pro',
						old_price:'5999',
						price:'5499'
					},
					{
						pic:"https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/105827/27/18009/150554/5e8ed147E5102b78e/fee5f637ade39c9c.jpg",
						name:'Iphone 11 pro',
						old_price:'5999',
						price:'5499'
					},
					{
						pic:"https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/105827/27/18009/150554/5e8ed147E5102b78e/fee5f637ade39c9c.jpg",
						name:'Iphone 11 pro',
						old_price:'5999',
						price:'5499'
					},
					{
						pic:"https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/105827/27/18009/150554/5e8ed147E5102b78e/fee5f637ade39c9c.jpg",
						name:'Iphone 11 pro',
						old_price:'5999',
						price:'5499'
					},
					{
						pic:"https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/105827/27/18009/150554/5e8ed147E5102b78e/fee5f637ade39c9c.jpg",
						name:'Iphone 11 pro',
						old_price:'5999',
						price:'5499'
					},{
						pic:"https://wqimg.jd.com/imgproxy/n7/s150x150_jfs/t1/105827/27/18009/150554/5e8ed147E5102b78e/fee5f637ade39c9c.jpg",
						name:'Iphone 11 pro',
						old_price:'5999',
						price:'5499'
					}
				]
			};
		},
		methods:{
			toDetail(){
				uni.showToast({
					icon:"none",
					title:'ceshi'
				})
			}
		}
	}
</script>

<style>
	image{
		width: 170rpx;
		height: 170rpx;
		margin-bottom: 20rpx;
	}
	.dy-old-price{
		font-size: 0.8em;
		text-decoration: line-through;
	}
</style>
