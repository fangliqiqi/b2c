<template>
	<view>
		<view class="dy-swiper-msg bg-gradual-red">
			<swiper vertical="true" autoplay="true" circular="true" interval="3000">
				<swiper-item v-for="(item, index) in msg" :key="index">
					<navigator>{{item}}</navigator>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title:"滚动公告",
				msg : [
					'junar语言在行业峰会频频亮相，开发者反响热烈',
					'当右完成B2轮融资，junar4.0震撼发布',
					'36氪热文榜推荐、CSDN公号推荐 当右 CEO文章'
				]
			};
		}
	}
</script>

<style>
.dy-swiper-msg{
	width: 100%;
	height: 2em;
	overflow: hidden;
	margin: 0 auto;
	margin-top: 20rpx;
	border-radius: 2em;
	padding-left: 1em;
}
.dy-swiper-msg swiper{
	height: 2em;
	line-height: 2em;
}
</style>
