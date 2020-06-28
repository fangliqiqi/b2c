<template>
	<view>
		<view class="cu-list menu set_card bg-white margin-top" :class="[menuBorder?'sm-border':'',menuCard?'card-menu margin-top':'']">
			<navigator class="cu-item arrow head_portrait" url="" open-type="redirect"  hover-class="none">
				<view class="content">
					<text>设置6位支付密码</text>
				</view>		
			</navigator>
			<navigator class="cu-item arrow" url="../list/list" open-type="redirect"  hover-class="none">
				<view class="content">
					<text>忘记6位支付密码</text>
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
