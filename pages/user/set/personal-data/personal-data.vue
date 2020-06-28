<template>
	<view>
		<view class="cu-list menu bg-white " :class="[menuBorder?'sm-border':'',menuCard?'card-menu margin-top':'']">
			<view class="cu-item arrow">
				<view class="content flex justify-between align-center padding-xs" @click="chooseImage">
					<text>头像</text>
					<view class="cu-avatar lg round" style="background-image:url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589522551306&di=ecce6148164347a07a419a16ed551b1d&imgtype=0&src=http%3A%2F%2Fztd00.photos.bdimg.com%2Fztd%2Fw%3D700%3Bq%3D50%2Fsign%3D32f10cde88cb39dbc1c06556e02d7819%2Fd52a2834349b033bb48094ee1cce36d3d539bdfe.jpg);"></view>
				</view>	
			</view>
			<view class="cu-item ">
				<view class="content flex justify-between align-center">
					<text>用户名</text>
					<view class="text-sm text-gray">鹦鹉洲</view>
				</view>
			</view>
			<navigator class="cu-item arrow" url="" open-type="redirect"  hover-class="none">
				<view class="content flex justify-between align-center">
					<text>昵称</text>
					<view class="text-sm text-gray">芳草萋萋</view>
				</view>	
			</navigator>
			<view class="cu-form-group">
				<view class="title">性别</view>
				<picker @change="PickerChange" :value="index" :range="picker">
					<view class="picker">
						{{index>-1?picker[index]:'保密'}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class="title">出生日期</view>
				<picker mode="date" :value="date" start="1900-01-01" end="2100-01-01" @change="DateChange">
					<view class="picker">
						{{date}}
					</view>
				</picker>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index: -1,
				picker: ['保密', '男', '女'],
				date: '2000-01-01'
			}
		},
		methods: {
			PickerChange(e) {
				this.index = e.detail.value
			},
			DateChange(e) {
				this.date = e.detail.value
			},
		}
	}
</script>

<style>

</style>
