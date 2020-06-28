<template>
	<view>
		<view class="bg-purple padding">
			<view class="padding-bottom  flex justify-between align-center">
				<view class="flex flex-direction">
					<text class="text-xl text-bold text-yellow">明天取</text>
					<text class="text-sm text-gray margin-top-xs">取货时间 2020-05-27  08:30-19:30</text>
				</view>
				<view class="cu-btn round bg-yellow ">再去逛逛</view>
			</view>
			<view class="bg-white radius padding-sm">
				<view class="text-lg ">{{store}}</view>
				<view class="text-sm text-gray padding-top-xs margin-bottom-xs">{{address}}</view>
				<view class="flex align-center margin-top-sm">
					<view class="round margin-right-sm cu-btn line-black ">
						<text class="cuIcon-dianhua margin-right-xs text-purple"></text><text>联系门店</text>
					</view>
					<view class="round  cu-btn line-black">
						<text class="cuIcon-locationfill margin-right-xs text-purple"></text><text>使用导航</text>
					</view>
				</view>
			</view>
		</view>
		<view class="padding-left padding-right">
			<view>
				<view v-for="(product,index) in order" :key="index">
					<view class="bg-white radius margin-top-sm padding-left-sm padding-right-sm">
						<view class="padding-top-sm padding-bottom flex align-center">
							<view class="img margin-right-sm"><image :src="product.pic" mode="widthFix"></image></view>
							<view class="text-cut">
								<text class="text-black margin-bottom-xs text-cut">{{product.name}}</text>
								<view class="text-sm text-gray margin-bottom-xs">
									规格：<text class=" margin-right-sm">{{product.pre}}</text>
									单位：<text>{{product.unit}}</text>
								</view>
								<view class="text-sm text-gray padding-left-sm flex ">
									<view>
										单价<text class="margin-right-xs">{{product.pri}}</text>|
									</view>
									<view class="margin-left-xs">
										数量<text class="text-red">×{{product.num}}</text>
									</view>
								</view>
							</view>
						</view>
						<view class="solid-top padding-top-sm padding-bottom-sm">
							实付<text class="text-price text-red margin-left-sm">{{product.pri*product.num}}</text>
						</view>
					</view>
				</view>
			</view>
			<view class="bg-white margin-top-sm radius padding-left-sm padding-right-sm">
				<view class="padding-top flex justify-between align-center">
					<text>商品原价</text>
					<text class="text-price">50</text>
				</view>
				<view class="padding-top-sm flex justify-between align-center" >
					<text>优惠券</text>
					<view>- <text class="text-price margin-left-xs">6</text></view>
				</view>
				<view class="padding-top-sm padding-bottom  flex justify-between align-center">
					<text>优惠价</text>
					<view>- <text class="text-price margin-left-xs">9</text></view>
				</view>
				<view class="solid-top padding-top-sm padding-bottom-sm flex justify-end align-center">
					<text>实付金额</text>
					<text class="text-price text-red text-lg margin-left-sm">35</text>
				</view>
			</view>
			<view class="bg-white margin-top-sm padding-top-sm radius padding-left-sm padding-right-sm">
				<view class="flex align-center padding-bottom-sm">
					<text>订单编号</text>
					<text class="text-gray margin-left-sm">41608456637</text>
				</view>
				<view class="flex align-center padding-bottom-sm">
					<text>取货时间</text>
					<text class="text-gray margin-left-sm">2020-05-27 08:30-19:30</text>
				</view>
				<view class="flex align-center padding-bottom-sm">
					<text>创建时间</text>
					<text class="text-gray margin-left-sm">2020-05-26 09:33:30</text>
				</view>
				<view class="flex align-center padding-bottom-sm">
					<text>订单付款时间</text>
					<text class="text-gray margin-left-sm">2020-05-26 09:33:35</text>
				</view>
				
			</view>
		</view>
		<view class="empty"></view>		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				address:'天智路国轩K西嘉3栋101室',
				store:'谊品生鲜国轩K西嘉店',
				order:[
					{
						pic:'https://img14.360buyimg.com/n0/jfs/t1/71359/20/4228/396815/5d258533E4f1f667c/5d886c903c0d3ab3.jpg',
						name:'格力高（glico）双层百力滋香脆饼干棒',
						pre:'430g',
						unit:'份',
						pri:'10',
						num:'1'
					},
					{
						pic:'https://img14.360buyimg.com/n0/jfs/t1/128246/24/1749/445220/5ebf43cfEbd3d072c/a8dee1e0e479b411.jpg',
						name:'港荣蒸蛋糕 奶香味900g/箱 ',
						pre:'900g',
						unit:'份',
						pri:'10',
						num:'1'
					},
					{
						pic:'https://img14.360buyimg.com/n0/jfs/t1/78393/27/10662/103739/5d81e32cE2298bbd9/46e9fafff567e063.jpg',
						name:'新希望 香蕉牛奶200ml*12盒 礼盒装',
						pre:'2400ml',
						unit:'份',
						pri:'5',
						num:'2'
					},
					{
						pic:'https://img14.360buyimg.com/n0/jfs/t1/43046/23/13892/229041/5d70d34fE0e6bb41d/a9d466fa5b4d24b0.jpg',
						name:'韩国进口（SAMYANG） 三养辣鸡肉味拌面 700g',
						pre:'700g',
						unit:'份',
						pri:'10',
						num:'1'
					},
					{
						pic:'https://img14.360buyimg.com/n0/jfs/t1/71359/20/4228/396815/5d258533E4f1f667c/5d886c903c0d3ab3.jpg',
						name:'格力高（glico）双层百力滋香脆饼干棒',
						pre:'430g',
						unit:'份',
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
	.img{
		width:120rpx;
	}
	.solid-top{
		border-top: 1px solid #E5E5E5;
	}
	.empty{
		height:100rpx;
	}
</style>
