<template>
	<view>
		<swiper class="screen-swiper dy-swiper-nav" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :indicator-color="dotColor" :indicator-active-color="dotCheckColor">	
			<swiper-item v-for="(item,index) in menus.length/limit" :key="index" v-if="menus.length/limit>0">
				<view class="">
					<view class="grid text-center" :class="'col-5'">
						<view v-for="(item2,index2) in menus" :key="index2" class="text-center" v-if="index2>=index*limit && index2<(index+1)*limit">
							<view class="nav-image text-center"><image :src="item2.img"></image></view>
							<view class="dy-nav-title">{{item2.title}}</view>
						</view>
					</view>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dotStyle:true,
				dotColor:'#999999',
				dotCheckColor:'#e54d42',
				limit:10,
				menus:[
					{
						img:'http://m.360buyimg.com/mobilecms/s120x120_jfs/t1/84753/1/16651/5549/5e7d5f9eE492c3864/4b9963fe16fae211.png',
						title:'当右超市'
					},
					{
						img:'http://m.360buyimg.com/mobilecms/s120x120_jfs/t1/95626/6/16650/5992/5e7d5fdeE251a8742/d29fcc84ee0211f7.png',
						title:'数码电器'
					},
					{
						img:'http://m.360buyimg.com/mobilecms/s120x120_jfs/t1/105719/14/16594/7294/5e7d605eE007a21e7/63392310fbb001a4.png',
						title:'当右服饰'
					},
					{
						img:'http://m.360buyimg.com/mobilecms/s120x120_jfs/t1/104104/6/16755/5068/5e7d6202E212fcc22/3fda8f7d8b63b55f.png',
						title:'当右生鲜'
					},
					{
						img:'http://m.360buyimg.com/mobilecms/s120x120_jfs/t1/96727/8/16477/5183/5e7d6249E4730c38a/0f70da903eded263.png',
						title:'当右到家'
					},
					{
						img:'http://m.360buyimg.com/mobilecms/s120x120_jfs/t1/96542/9/16707/3569/5e7d62bcE5c4ee6a7/3bf6ac36ac9f17d9.png',
						title:'充值缴费'
					},
					{
						img:'http://m.360buyimg.com/mobilecms/s120x120_jfs/t1/86437/25/16675/6585/5e7d62e4E1095d733/d0d685ed0477d268.png',
						title:'当右拼购'
					},
					{
						img:'http://m.360buyimg.com/mobilecms/s120x120_jfs/t1/110232/17/10270/4813/5e7d6310E79c9cb8d/6786eed1b786c010.png',
						title:'领券'
					},
					{
						img:'http://m.360buyimg.com/mobilecms/s120x120_jfs/t1/96795/33/16662/4749/5e7d6385Ec31e4b29/f36c778122286405.png',
						title:'赚钱'
					},
					{
						img:'http://m.360buyimg.com/mobilecms/s120x120_jfs/t1/99304/34/16507/5170/5e7ccacaE08d0d35d/ea8a30610a682386.png',
						title:'美妆'
					},
					{
						img:'http://m.360buyimg.com/mobilecms/s120x120_jfs/t1/84753/1/16651/5549/5e7d5f9eE492c3864/4b9963fe16fae211.png',
						title:'当右超市'
					},
					{
						img:'http://m.360buyimg.com/mobilecms/s120x120_jfs/t1/95626/6/16650/5992/5e7d5fdeE251a8742/d29fcc84ee0211f7.png',
						title:'数码电器'
					},
					{
						img:'http://m.360buyimg.com/mobilecms/s120x120_jfs/t1/105719/14/16594/7294/5e7d605eE007a21e7/63392310fbb001a4.png',
						title:'当右服饰'
					},
					{
						img:'http://m.360buyimg.com/mobilecms/s120x120_jfs/t1/104104/6/16755/5068/5e7d6202E212fcc22/3fda8f7d8b63b55f.png',
						title:'当右生鲜'
					},
					{
						img:'http://m.360buyimg.com/mobilecms/s120x120_jfs/t1/96727/8/16477/5183/5e7d6249E4730c38a/0f70da903eded263.png',
						title:'当右到家'
					},
					{
						img:'http://m.360buyimg.com/mobilecms/s120x120_jfs/t1/96542/9/16707/3569/5e7d62bcE5c4ee6a7/3bf6ac36ac9f17d9.png',
						title:'充值缴费'
					},
					{
						img:'http://m.360buyimg.com/mobilecms/s120x120_jfs/t1/86437/25/16675/6585/5e7d62e4E1095d733/d0d685ed0477d268.png',
						title:'当右拼购'
					},
					{
						img:'http://m.360buyimg.com/mobilecms/s120x120_jfs/t1/110232/17/10270/4813/5e7d6310E79c9cb8d/6786eed1b786c010.png',
						title:'领券'
					},
					{
						img:'http://m.360buyimg.com/mobilecms/s120x120_jfs/t1/96795/33/16662/4749/5e7d6385Ec31e4b29/f36c778122286405.png',
						title:'赚钱'
					},
					{
						img:'http://m.360buyimg.com/mobilecms/s120x120_jfs/t1/98535/20/16481/5760/5e7d646aE9b72c32e/8e063cfb6bad4654.png',
						title:'全部'
					},
				]
			};
		}
	}
</script>

<style>
.dy-swiper-nav{
	width: 100%;
	min-height: 370rpx;
	border-radius: 10rpx;
	overflow: hidden;
}
.dy-swiper-nav .nav-image{
	width: 100%;
	margin-top: 30rpx;
}
.dy-swiper-nav .nav-image image{
	height: 80rpx;
	width: 80rpx;
	display: inline-block;
}

.dy-swiper-nav .dy-nav-title{
	font-size: 0.8em;
	margin-top: 10rpx;
	color: #666666;
}
</style>
