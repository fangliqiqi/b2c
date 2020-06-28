<template>
	<view class="dy-top-search">
		<input type="text" disabled="true" placeholder="搜索商品关键词"/>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	.dy-top-search{
		width: 100%;
	}
	
	.dy-top-search input{
		width: 100%;
		background-color: #F0F0F0;
		height: 60rpx;
		border-radius: 60rpx;
		background-image: url(../../static/images/sousuo.png);
		background-repeat: no-repeat;
		background-size: 1em 1em;
		background-position: 1em center;
		padding-left: 3em;
	}
</style>
