<template>
	<view>
		<view>
			<scroll-view scroll-x class="bg-white nav margin-bottom-sm">
				<view class="flex">
					<view class="cu-item " :class="0==TabCur?'text-red cur':''"   @tap="tabSelect" :data-id="0">
						我的发票抬头
					</view>
					<view class="cu-item" :class="1==TabCur?'text-red cur':''"   @tap="tabSelect" :data-id="1">
						我的发票
					</view>
				</view>
			</scroll-view>
		</view>
		<view v-if="0==TabCur">
			<navigator class="flex align-center  padding bg-white text-xxl text-black" url="../add-invoice-header/add-invoice-header" open-type="redirect"  hover-class="none">
				<text class="cuIcon-add  margin-right-xs"></text>
				<text class="text-df">添加抬头</text>
			</navigator>
			<view class="padding-left padding-right bg-white">
				<navigator url="" class="solid-top solid-bottom padding-top padding-bottom" open-type="redirect"  hover-class="none">
					<view class="text-black">
						安徽果牛软件技术有限责任公司
						<text class="line-red solid padding-xs text-xs margin-left-xs">默认</text>
					</view>
					<view class="text-sm text-gray margin-top-xs">税号：91340104KJG568HJ2J</view>
				</navigator>
			</view>
		</view>
		<view v-if="1==TabCur" class="padding-left padding-right">
			<view class="margin-bottom-sm">共<text class="text-red">2</text>张</view>
			<view>
				<view v-for="(content,index) in invoice" :key="index" >
					<view class="invoice_card margin-bottom bg-white padding-sm">
						<view class="invoice_title padding-bottom-sm flex justify-between align-center">
							<view class="text-lg ">
								<text class="cuIcon-shop margin-right-xs"></text>
								<text class="text-df">当右</text>
							</view>
							<view class="text-red">已开具</view>
						</view>
						<view>
							<view  class="padding-top-sm flex justify-between align-center">
								<text class="text-gray">购买名称</text>
								<text>{{content.name}}</text>
							</view>
							<view class="padding-top-sm flex justify-between align-center">
								<text class="text-gray">开票金额</text>
								<text>{{content.pri}}</text>
							</view>
							<view class="padding-top-sm flex justify-between align-center">
								<text class="text-gray">开票时间</text>
								<text>{{content.time}}</text>
							</view>
						</view>
						
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
				TabCur: 0,
				invoice:[
					{
						name:'安徽果牛软件技术有点公司',
						pri:'65.50',
						time:'2020-05-01'
					},
					{
						name:'安徽果牛软件技术有点公司',
						pri:'70.00',
						time:'2020-03-01'
					}
				]
			}
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			}
		}
	}
</script>

<style>
	.invoice_card{
		border: 1px solid #fdcea4;
		border-radius: 15rpx;
	}
	.invoice_title{
		border-bottom: 1px dashed #fdcea4;
	}
</style>
