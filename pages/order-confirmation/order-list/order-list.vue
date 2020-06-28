<template>
	<view>
		<view class="padding-top">
			<view class="solid-bottom padding bg-white flex justify-between align-center">
				<text>商品</text>
				<text>共5件商品</text>
			</view>
			<view class="bg-white padding-left padding-right ">
				<view v-for="(product,index) in order" :key='index'>
					<view class="flex justify-between align-center solid-bottom padding-top-xs padding-bottom-xs">
						<view class="img margin-right-xs" >
							<image :src="product.pic" mode="widthFix"></image>
						</view>
						<view class="basis-lg text-cut ">
							<view class="text-cut">{{product.name}}</view>
							<view class="flex text-sm text-gray">
								<view>单价：<text class="text-price">{{product.pri}}</text></view>
								<view class="margin-left-sm">数量：{{product.num}}</view>
							</view>
						</view>
						<view class="basis-xs text-right text-price text-lg">{{product.pri*product.num}}</view>
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
				order:[
					{
						pic:'https://img14.360buyimg.com/n0/jfs/t1/71359/20/4228/396815/5d258533E4f1f667c/5d886c903c0d3ab3.jpg',
						name:'格力高（glico）双层百力滋香脆饼干棒',
						pri:'10',
						num:'1'
					},
					{
						pic:'https://img14.360buyimg.com/n0/jfs/t1/128246/24/1749/445220/5ebf43cfEbd3d072c/a8dee1e0e479b411.jpg',
						name:'港荣蒸蛋糕 奶香味900g/箱 ',
						pri:'10',
						num:'1'
					},
					{
						pic:'https://img14.360buyimg.com/n0/jfs/t1/78393/27/10662/103739/5d81e32cE2298bbd9/46e9fafff567e063.jpg',
						name:'新希望 香蕉牛奶200ml*12盒 礼盒装',
						pri:'5',
						num:'2'
					},
					{
						pic:'https://img14.360buyimg.com/n0/jfs/t1/43046/23/13892/229041/5d70d34fE0e6bb41d/a9d466fa5b4d24b0.jpg',
						name:'韩国进口（SAMYANG） 三养辣鸡肉味拌面 700g',
						pri:'10',
						num:'1'
					},
					{
						pic:'https://img14.360buyimg.com/n0/jfs/t1/71359/20/4228/396815/5d258533E4f1f667c/5d886c903c0d3ab3.jpg',
						name:'格力高（glico）双层百力滋香脆饼干棒',
						pri:'10',
						num:'1'
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.solid-bottom{
		border-bottom: 1rpx solid #E5E5E5;
	}
	.img{
		width:120rpx;
	}
</style>
