<template>
	<view>
		<view class="cu-list menu set_card bg-white margin-bottom-sm" :class="[menuBorder?'sm-border':'',menuCard?'card-menu margin-top':'']">
			<navigator class="cu-item arrow head_portrait" url="../personal-data/personal-data"   hover-class="none">
				<view class="content flex align-center">
					<view class="cu-avatar lg round" style="background-image:url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589522551306&di=ecce6148164347a07a419a16ed551b1d&imgtype=0&src=http%3A%2F%2Fztd00.photos.bdimg.com%2Fztd%2Fw%3D700%3Bq%3D50%2Fsign%3D32f10cde88cb39dbc1c06556e02d7819%2Fd52a2834349b033bb48094ee1cce36d3d539bdfe.jpg);"></view>
					<view class="margin-left-sm ">
						<view>{{nickname}}</view>
						<view class="text-gray text-sm">用户名:{{username}}</view>
					</view>
				</view>	
			</navigator>
			<navigator class="cu-item arrow" url="../list/list"  hover-class="none">
				<view class="content">
					<text>地址管理</text>
				</view>	
			</navigator>
		</view>
		<view class="cu-list menu set_card bg-white margin-bottom-sm" :class="[menuBorder?'sm-border':'',menuCard?'card-menu margin-top':'']">
			<navigator class="cu-item arrow" url="../account-and-security/account-and-security"  hover-class="none">
				<view class="content">
					<text>账户与安全</text>
				</view>	
			</navigator>
			<navigator class="cu-item arrow" url="../invoice/invoice"   hover-class="none">
				<view class="content">
					<text>我的发票</text>
				</view>	
			</navigator>
			<navigator class="cu-item arrow" url="../paymen-password/paymen-password"   hover-class="none">
				<view class="content">
					<text>支付密码</text>
				</view>	
				<view class="action">
					<text class="text-grey text-sm">未设置</text>
				</view>
			</navigator>
			<navigator class="cu-item arrow" url="../secret-free-payment/secret-free-payment"   hover-class="none">
				<view class="content">
					<text>微信免密支付</text>
					<text class="cuIcon-info"></text>
				</view>	
				<view class="action">
					<text class="text-grey text-sm">去开通</text>
				</view>
			</navigator>
		</view>
		<view class="cu-list menu set_card bg-white margin-bottom-sm" :class="[menuBorder?'sm-border':'',menuCard?'card-menu margin-top':'']">
			<navigator class="cu-item arrow" url="../problem-feedback/problem-feedback"   hover-class="none">
				<view class="content">
					<text>问题反馈</text>
				</view>	
			</navigator>
			<navigator class="cu-item arrow" url="../list/list"   hover-class="none">
				<view class="content">
					<text>关于当右商城</text>
				</view>	
			</navigator>
		</view>
		<view class="padding margin-top flex flex-direction">
			<button class="cu-btn bg-white lg">退出登录</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				nickname:'芳草萋萋',
				username:'鹦鹉洲',
				menuBorder: false,
				menuArrow: false,
				menuCard: false
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.set_card{
		border-radius: 20rpx;
		overflow: hidden;
	}
	.head_portrait{
		height:120rpx;
	}
</style>
