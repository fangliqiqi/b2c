<template>
	<view>
		<form>
			<view class="cu-form-group margin-top ">
				<view class="title"><text class="text-red">*</text>公司抬头</view>
				<input placeholder="请输入公司抬头名称" name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title"><text class="text-red">*</text>公司税号</view>
				<input placeholder="请输入公司税号" name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">公司地址</view>
				<input placeholder="请输入公司地址" name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">公司电话</view>
				<input placeholder="请输入公司电话" name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">开户银行</view>
				<input placeholder="请输入开户行名称" name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">开户账号</view>
				<input placeholder="请输入开户账号" name="input"></input>
			</view>
			<view class="cu-form-group margin-top ">
				<view class="title">设为默认</view>
				<switch class='red' @change="SwitchA" :class="switchA?'checked':''" :checked="switchA?true:false"></switch>
			</view>
			<view class="padding flex flex-direction">
				<button class="cu-btn bg-red lg">保存</button>
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				switchA: true
			}
		},
		methods: {
			SwitchA(e) {
				this.switchA = e.detail.value
			}
		}
	}
</script>

<style>
	.cu-form-group .title {
		min-width: calc(4em + 15px);
	}
</style>
