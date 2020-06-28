<template>
	<view :style="'font-size:'+base_size">
		<view class="flex category-page">
			<scroll-view class="cate-nav" scroll-y="true">
				<view class="cate-nav-li" v-for="(item,index) in categories" :key="index">
					<view class="active-block" :class="choseCate==index?'':'noactive'"></view>
					<view class="cate-title" :class="choseCate==index?'active':''" @tap="changeCate(index)">
						{{item.name}}
					</view>
				</view>
			</scroll-view>
			<scroll-view class="cate-naxt-nav" scroll-y="true">
				<block v-for="(item,index) in next_categories" :key="index">
					<view class="yihuan-card">
						<view class="yihuan-card-title">
							{{item.name}}
						</view>
						<view class="yihuan-card-content grid col-3">
							<block v-for="(cate,index2) in item.child" :key="index2">
								<view class="text-center category-box" @tap="toList(cate.id)">
									<image :src="cate.icon"></image>
									<view class="cate-title-text">{{cate.name}}</view>
								</view>
							</block>
						</view>
					</view>
				</block>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				base_size:"28rpx",
				choseCate:0,
				next_categories:[],
				categories:[
					{
						name:'电脑办公',
						child:[
							{
								name:'电脑整机',
								child:[
									{
										id:3,
										icon:"http://img13.360buyimg.com/focus/s140x140_jfs/t11071/195/2462134264/9117/cd0688bf/5a17ba79N18b9f3d4.png",
										name:'笔记本',
									},
									{
										id:4,
										icon:'http://img10.360buyimg.com/focus/s140x140_jfs/t13252/193/948884668/3832/2cd704d4/5a17b918N0785e503.jpg',
										name:'平板电脑',
									},
									{
										id:5,
										icon:'http://img12.360buyimg.com/focus/s140x140_jfs/t14020/291/987624955/9068/5b27e263/5a17b978N2a93f7a9.jpg',
										name:'台式机',
									}
								]
							},
							{
								name:'外设产品'
							}
						]
					},
					{
						name:'男装',
						child:[
							{
								name:'男士外套',
								child:[
									{
										name:'夹克',
										icon:'http://img13.360buyimg.com/focus/s140x140_jfs/t12514/85/571462957/6214/29cdf637/5a0e9496Necd5bd0e.jpg'
									},
									{
										name:'风衣',
										icon:'http://img11.360buyimg.com/focus/s140x140_jfs/t11590/82/2013872051/5874/83b5772d/5a0e947eN67f0e537.jpg'
									},
									{
										name:'单西',
										icon:'http://img11.360buyimg.com/focus/s140x140_jfs/t13726/86/616556756/6324/f6c3398e/5a0e9499N0e69037f.jpg'
									},
									{
										name:'牛仔外套',
										icon:'http://img14.360buyimg.com/focus/s140x140_jfs/t13741/61/559739137/10455/5ecf3c73/5a0e9474N8cbaefe7.jpg'
									},
									{
										name:'西服套装',
										icon:'http://img13.360buyimg.com/focus/s140x140_jfs/t13489/68/552491077/2495/7b517e4b/5a0e9483Na6231535.jpg'
									}
								]
							}
						]
					},
					{
						name:'女装',
						child:[
							{
								name:'上装',
								child:[
									{
										name:'打底衫',
										icon:'http://img12.360buyimg.com/focus/s140x140_jfs/t13357/141/724977729/3459/e3a3c8e1/5a127ee9Nbc443a5f.jpg'
									},
									{
										name:'短外套',
										icon:'http://img12.360buyimg.com/focus/s140x140_jfs/t16960/330/672781171/5066/76e6f8c9/5a9fbfdcNc891be87.jpg'
									},
									{
										name:'百搭衬衫',
										icon:'http://img14.360buyimg.com/focus/s140x140_jfs/t16126/212/2272437372/3302/c9af3547/5a9fbfa0N591929da.jpg'
									},
									{
										name:'风衣',
										icon:'http://img12.360buyimg.com/focus/s140x140_jfs/t15313/145/2476673176/2856/879136d7/5a9fc012N86f3fb22.jpg'
									},
									{
										name:'长袖T恤',
										icon:'http://img13.360buyimg.com/focus/s140x140_jfs/t16750/238/698160610/5156/5b1f25b/5a9fbfccN574cba12.jpg'
									},
									{
										name:'卫衣',
										icon:'http://img30.360buyimg.com/focus/s140x140_jfs/t11953/286/2195921828/5728/75b86d5b/5a127fbaN2780918c.jpg'
									},
									{
										name:'小西装',
										icon:'http://img20.360buyimg.com/focus/s140x140_jfs/t19156/326/678660620/3005/436c3bc0/5a9fc007N3ef48a88.jpg'
									},
									{
										name:'宽松卫衣',
										icon:'http://img11.360buyimg.com/focus/s140x140_jfs/t15667/299/2238226291/4404/19e817ba/5a9fbff4N02a4be7b.jpg'
									}
								]
							}
						]
					}
				]
			}
		},
		methods: {
			changeCate(index){
				this.choseCate = index;
				this.next_categories = this.categories[index].child;
			},
			toList(id){
				uni.navigateTo({
					url:'/pages/product/list/list?id=' + id
				})
			},
		},
		onLoad() {
			this.next_categories = this.categories[0]['child'];
		}
	}
</script>

<style>
	.cate-nav{
		width: 152rpx;
		height: calc(100vh - 228rpx);
	}
	
	.cate-nav .cate-nav-li{
		position: relative;
	}
	
	.cate-nav .cate-title{
		width: 152rpx;
		height: 86rpx;
		line-height: 86rpx;
		text-align: center;
		color: #333333;
		font-size: 1em;
	}
	
	.cate-nav .active{
		background: #FFFFFF;
		color: #fc812f;
	}
	
	.cate-nav .active-block{
		background: #fc812f;
		position: absolute;
		top:0;
		height: 86rpx;
		width: 6rpx;
		z-index: 1;
	}
	.cate-nav .noactive{
		display: none;
	}
	
	.cate-naxt-nav{
		height: calc(100vh - 228rpx);
		background-color: #FFFFFF;
	}
	
	.yihuan-card{
		margin-top: 0rpx;
		padding-left: 24rpx;
		padding-right: 24rpx;
	}
	
	.cate-naxt-nav .yihuan-card-title{
		background: none;
		height: 86rpx;
		line-height: 86rpx;
		text-align: left;
		color: #333333;
		font-size: 1em;
	}
	
	.yihuan-card .yihuan-card-content
	{	
		padding: 0;
		padding-bottom: 8rpx;
	}
	
	.yihuan-card-content image{
		width: 184rpx;
		height: 184rpx;
		padding-bottom: 20rpx;
	}
	
	.yihuan-card-content .category-box{
		padding-top: 8rpx;
		padding-bottom: 22rpx;
	}
	.cate-title-text{
		color: #000033;
		font-size: 1em;
		height: 1em;
		line-height: 1em;
	}
</style>
