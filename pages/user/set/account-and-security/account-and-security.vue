<template>
	<view>
		<view class="cu-list menu set_card bg-white " :class="[menuBorder?'sm-border':'',menuCard?'card-menu margin-top':'']">
			<navigator class="cu-item arrow head_portrait" url="" open-type="redirect"  hover-class="none">
				<view class="content flex flex-direction">
					<text>实名认证</text>
					<text class="text-sm text-gray">完成实名认证，保障安全享受更多服务</text>
				</view>	
			</navigator>
			<navigator class="cu-item arrow head_portrait" url="" open-type="redirect"  hover-class="none">
				<view class="content flex flex-direction">
					<text>修改手机号码</text>
					<text class="text-sm text-gray">若现使用手机有更换请尽快修改</text>
				</view>
				<view class="action">
					<text class="text-grey text-sm">183****5677</text>
				</view>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
