<template>
	<view>
		<view class="bg-white padding margin-bottom-sm">
			<view class=" margin-bottom-xs">问题类型</view>
			<radio-group class="block" @change="RadioChange">
				<view class="margin-top flex justify-start  align-center ">
					<view class="flex align-center">
						<radio  :class="radio=='C'?'checked':''" :checked="radio=='C'?true:false" value="C"></radio>
						<view class="title margin-left-xs text-sm">问题反馈</view>
					</view>
					<view class="flex align-center margin-left">
						<radio :class="radio=='D'?'checked':''" :checked="radio=='D'?true:false" value="D"></radio>
						<view class="title margin-left-xs text-sm">优化建议</view>
					</view>
				</view>
			</radio-group>
		</view>
		<view class="padding-left padding-right  bg-white margin-bottom-sm ">
			<view class="title padding-top-sm padding-bottom-sm solid-bottom">问题或者建议</view>
			<view class="uni-textarea padding-bottom">
				<textarea class="text-sm"  maxlength="-1" :disabled="modalName!=null" @input="textareaAInput" placeholder="请尽量详细的描述您的问题或者建议,如果方便可以在添加图片中上传截图等,我们会尽快进行解决,感谢您的反馈"></textarea>
			</view>
		</view>
		<view class="bg-white padding  margin-bottom-sm">
			<view class="flex justify-between align-center margin-bottom">
				<view>添加图片(选填)</view>
				<view class="action">
					{{imgList.length}}/4
				</view>
			</view>
			<view class="grid col-4 grid-square flex-sub">
				<view class="bg-img" v-for="(item,index) in imgList" :key="index" @tap="ViewImage" :data-url="imgList[index]">
				 <image :src="imgList[index]" mode="aspectFill"></image>
					<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
						<text class='cuIcon-close'></text>
					</view>
				</view>
				<view class="solids" @tap="ChooseImage" v-if="imgList.length<4">
					<text class='cuIcon-cameraadd'></text>
				</view>
			</view>
		</view>
		<view class="bg-white padding-left padding-right ">
			<view class="padding-top-sm padding-bottom-sm solid-bottom">联系方式(必填)</view>
			<view class="padding-bottom-sm padding-top-sm">
				<input class="text-sm" maxlength="11" type="number" placeholder="请留下您的手机号码,谢谢" name="input"></input>
			</view>
		</view>
		<view class="flex flex-direction padding">
			<button class="cu-btn lg bg-red">提交</button>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				radio: 'C',
				modalName: null,
				textareaAValue: '',
				imgList: [],
			}
		},
		methods: {
			RadioChange(e) {
				this.radio = e.detail.value
			},
			textareaAInput(e) {
				this.textareaAValue = e.detail.value
			},
			ChooseImage() {
				uni.chooseImage({
					count: 4, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: (res) => {
						if (this.imgList.length != 0) {
							this.imgList = this.imgList.concat(res.tempFilePaths)
						} else {
							this.imgList = res.tempFilePaths
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
					content: '确定要删除图片吗？',
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
	textarea{
		width:100%;
		height:220rpx;
	}
</style>
