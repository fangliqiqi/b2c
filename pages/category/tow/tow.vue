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
			<view class="cate-product">
				<scroll-view scroll-x="true">
					<view class="flex">
						<block v-for="(item,index) in next_categories" :key="index">
							<view class="cate-child-item">{{item.name}}</view>
						</block>
					</view>
				</scroll-view>
				<scroll-view scroll-y="true" class="cate-product-list">
					<view>
						<block v-for="(item,index) in productList" :key="index">
							<view class="flex list-product-item">
								<view class="flex-sub"><image :src="item.pic"></image></view>
								<view class="list-product-info flex-twice">
									<view class="list-product-name">{{item.name}}</view>
									<view class="flex flex-wrap list-product-price">
										<view class="flex-twice flex">
											<view class="text-price text-grey">{{item.old_price}}</view>
											<view class="text-price text-red">{{item.price}}</view>
										</view>
										<view class="flex-sub flex justify-end">
											<view> <image src="../../../static/images/jiarugouwuche.png"></image> </view>
										</view>
									</view>
								</view>
							</view>
						</block>
					</view>
				</scroll-view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				choseCate:0,
				productList:[
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
					}
				],
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
					},
					{
						name:'电脑办公'
					},
					{
						name:'电脑办公'
					},
					{
						name:'电脑办公'
					},
					{
						name:'电脑办公'
					},
					{
						name:'电脑办公'
					},
					{
						name:'电脑办公'
					},
					{
						name:'电脑办公'
					},
					{
						name:'电脑办公'
					},
					{
						name:'电脑办公'
					},
					{
						name:'电脑办公'
					},
					{
						name:'电脑办公'
					},
					{
						name:'电脑办公'
					},
					{
						name:'电脑办公'
					},
					{
						name:'电脑办公'
					},
					{
						name:'电脑办公'
					},
					{
						name:'电脑办公'
					},
					{
						name:'电脑办公'
					},
					{
						name:'电脑办公'
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
					url:'/pages/esbuy/shop/productList/productList?item='+id
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
		height: calc(100vh);
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
	
	.cate-product{
		width: calc(100vw - 152rpx);
		background: #F1F1F1;
		margin-top: 0.8em;
	}
	.cate-child-item{
		padding-left: 0.5em;
		padding-right: 0.5em;
		height: 2em;
		line-height: 2em;
		font-size: 1em;
		background-color: #E1D7F0;
		margin-left: 0.5em;
	}
	
	.cate-product-list{
		margin-top: 0.5em;
		padding-left: 1.5em;
		padding-right: 1.5em;
		height: calc(100vh - 3em);
		background-color: #FFFFFF;
	}


	.cate-product-list image{
		width: 5em;
		height: 5em;
	}
	
	.list-product-item{
		padding-top: 1em;
		padding-bottom: 1em;
		border-bottom: #F5F5F5 1px dashed;
	}
	
	.list-product-info{
		margin-left: 1em;
	}
	
	.list-product-name{
		margin-top: 0.5em;
		margin-bottom: 0.5em;
	}
	
	.list-product-info image{
		width: 2em;
		height: 2em;
	}
	
	.list-product-price{
		margin-top: 2em;
		line-height: 2.5em;
		height: 2em;
	}
	
	
</style>
