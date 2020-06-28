<template>
	<view>
		<view class="padding-sm" v-for="(product,index) in order" :key="index">
			<view class="radius bg-white padding">
				<view class="flex justify-between align-center">
					<view class="pro_image margin-right-xs"><image :src="product.pic" mode="widthFix"></image></view>
					<view class="text-cut">
						<view class="text-cut text-black">{{product.name}}</view>
						<view class="text-sm text-gray text-cut margin-top-xs">{{product.spe}}</view>
					</view>
				</view>
				<view class="text-lg padding-top-xs padding-bottom-xs flex align-center">
					<view class="text-df text-black margin-right-sm">描述相符</view>
					<view class="example-body">
						<uni-rate  :size="18" :value="0" :margin="3" :is-fill="false" />
					</view>
				</view>
				<textarea class="padding-sm text-df" value="" placeholder="请输入您对这件商品的评价,得积分还可以帮助更多想买的人" />
				<view>
					<view class="cu-bar bg-white">
						<view class="action">
							上传买家秀
						</view>
						<view class="action">
							{{product.imgList.length}}/4
						</view>
					</view>
					<view class="cu-form-group">
						<view class="grid col-4 grid-square flex-sub">
							<view class="bg-img" v-for="(item,index2) in product.imgList" :key="index2" @tap="ViewImage" :data-url="item">
							 <image :src="item" mode="aspectFill"></image>
								<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index2">
									<text class='cuIcon-close'></text>
								</view>
							</view>
							<view class="solids" @tap="ChooseImage" :data-index="index" v-if="product.imgList.length<4">
								<text class='cuIcon-cameraadd'></text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="padding-sm">
			<view class="bg-white radius padding">
				<view class="flex align-center margin-bottom-sm">
					<view class="text-black margin-right-sm">物流服务</view>
					<view class="example-body">
						<uni-rate :size="18" :value="0" :margin="3" :is-fill="false" />
					</view>
				</view>
				<view class="flex align-center margin-top-sm ">
					<view class="text-black margin-right-sm">服务态度</view>
					<view class="example-body">
						<uni-rate :size="18" :value="0" :margin="3" :is-fill="false" />
					</view>
				</view>
			</view>
		</view>
		<view class="padding-sm flex flex-direction">
			<button class="cu-btn bg-red lg">发布评论</button>
		</view>
	</view>
</template>

<script>
	import uniRate from '@/components/uni-rate/uni-rate.vue';
	export default {
		components: {
			uniRate,
		},
		data() {
			return {
				order:[
					{
						pic:'https://img14.360buyimg.com/n0/jfs/t1/74718/37/9744/61289/5d7808adE17d93839/43a1962b41270d97.jpg',
						name:'Apple iPhone 11 (A2223) 128GB 黑色 移动联通电信4G手机 双卡双待',
						spe:'黑色 128G 官方套餐',
						imgList: []	
					},
					{
						pic:'https://img14.360buyimg.com/n0/jfs/t1/104812/35/17303/242507/5e848fb1E2c1d6eff/d2db1412dcce1d96.jpg',
						name:'荣耀Play4T Pro 麒麟810芯片 OLED屏幕指纹 4800万高感光夜拍三摄 22.5W超级快',
						spe:'冰岛梦幻 全网通 官方标配',
						imgList: []	
					},
					
				],
				rate:[
					
				]
							
			}
		},
		methods: {
			ChooseImage(e) {
				var index = e.currentTarget.dataset.index
				uni.chooseImage({
					count: 4, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: (res) => {
						if (this.order[index].imgList != undefined) {
							this.order[index].imgList = this.order[index].imgList.concat(res.tempFilePaths)
						} else {
							this.order[index].imgList = res.tempFilePaths
						}
					}
				});
			},
			ViewImage(e) {
				uni.previewImage({
					urls: this.imgList,
					current: e.currentTarget.dataset.url
				});
			},
			DelImg(e) {
				uni.showModal({
					content: '确定要删除买家秀吗？',
					cancelText: '取消',
					confirmText: '确定',
					success: res => {
						if (res.confirm) {
							this.imgList.splice(e.currentTarget.dataset.index, 1)
						}
					}
				})
			}
		}
	}
</script>

<style>
	.radius{
		border-radius:30rpx;
	}
	.pro_image{
		width:15%;
		border-radius:20rpx;
	}
	.example-body {
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items:center;
		padding:0;
		font-size:14px; 
		background-color: #ffffff;
	}
	
	textarea{
		width:100%;
		height:200rpx;
		background-color: #F5F5F5;
	}
</style>
