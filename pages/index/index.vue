<template>
	<view :style="'font-size:'+base_size">
		<dyTopBg></dyTopBg>
		<view class="home-content">
			<dyTopSearch></dyTopSearch>
			<cardSwiper></cardSwiper>
			<dyScrollMsg></dyScrollMsg>
			<dySwiperNav></dySwiperNav>
			<view class="dy-home-miaosha">
				<view class="dy-home-miaosha-title">当右秒杀</view>
				<dyScrollProduct></dyScrollProduct>
			</view>
			<view class="home-products">
				<view class="home-products-title">当右精选</view>
				<dyProductList></dyProductList>
			</view>
		</view>
		
	</view>
</template>

<script>
	import dyTopBg from '@/components/dy-top-bg/dy-top-bg.vue';
	import cardSwiper from '@/components/dy-card-swiper/dy-card-swiper.vue';
	import dyTopSearch from '@/components/dy-top-search/dy-top-search.vue';
	import dyScrollMsg from '@/components/dy-scroll-msg/dy-scroll-msg.vue';
	import dySwiperNav from '@/components/dy-swiper-nav/dy-swiper-nav.vue';
	import dyScrollProduct from '@/components/dy-scroll-product/dy-scroll-product.vue';
	import dyProductList from '@/components/dy-pubu-product-list/dy-pubu-product-list.vue';
	
	export default {
		components: {
			dyTopBg,
			cardSwiper,
			dyTopSearch,
			dyScrollMsg,
			dySwiperNav,
			dyScrollProduct,
			dyProductList
		},
		data() {
			return {
				base_size:"28rpx",
				
			}
		},
		methods: {
		
		}
	}
</script>

<style>
	.home-content{
		width: calc(100vw - 40rpx);
		margin: 0 auto;
		overflow: hidden;
	}
	.dy-home-miaosha{
		width: 100%;
		background: #FFFFFF;
		border-radius: 10rpx;
		padding-bottom: 20rpx;
	}
	
	.dy-home-miaosha .dy-home-miaosha-title{
		font-size: 1em;
		height: 3em;
		line-height: 2.5em;
		padding-left: 1em;
		color: #E54D42;
	}
	.home-products{
		margin-top: 20rpx;
	}
	
	.home-products-title{
		font-size: 1.5em;
		color: #E54D42;
		text-align: center;
		margin-bottom: 20rpx;
	}
</style>
