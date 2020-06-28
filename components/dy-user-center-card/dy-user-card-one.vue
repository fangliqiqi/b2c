<template>
	<view>
		<view class="dy-user-center flex">
			<view class="dy-user-avatar">
				<image :src="userInfo.avatar"></image>
			</view>
			<view class="dy-user-info">
				<view class="dy-user-nick">{{userInfo.nick}}</view>
				<view class="flex">
					<view class="dy-user-tag">{{userInfo.level}}</view>
					<view class="dy-user-tag m-l-20">{{userInfo.level}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			userInfo:{
				type:Object,
				default:function () {
					return {
						avatar:'http://gss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/50da81cb39dbb6fd418d16c70b24ab18962b3778.jpg',
						nick:'当右',
						level:'白金用户'
					}
				}
			},
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>
 .dy-user-center{
	 width: 100%;
 }
.dy-user-center .dy-user-avatar{
  width: 6em;
  height: 6em;
  border-radius: 3em;
  overflow: hidden;
  border: 4rpx #FFFFFF solid;
}
.dy-user-center .dy-user-avatar image{
	width: 6em;
	height: 6em;
}
.dy-user-info{
	margin-top: 1em;
	margin-left: 1em;
}
.dy-user-info .dy-user-nick{
	font-size: 1.8em;
	color: #F0F0F0;
}

.m-l-20{
	margin-left: 20rpx;
}
.dy-user-info .dy-user-tag{
	margin-top: 1em;
	font-size: 0.8em;
	height: 1.6em;
	line-height: 1.4em;
	border: #3B4144 1rpx solid;
	border-radius: 0.8em;
	padding-left: 20rpx;
	padding-right: 20rpx;
	background-color: #FFFFFF;
}
</style>
