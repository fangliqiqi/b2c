<template>
	<view class="top-bg-content">
		<view :style="'background-color:'+bgcolor+';background-image:'+bgimg" :class="customer?'top-customer-bg':'top-bg'"></view>
	</view>
</template>

<script>
	export default {
		props:{
			bgcolor:{
				type:String,
				default:'#e54d42'
			},
			customer:String,
			bgimg:{
				type:String,
				default:'none'
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>
.top-bg-content{
	width: calc(100vw);
	height: calc(75vw);;
	overflow: hidden;
	position: absolute;
	top: 0;
	left: 0;
	z-index: -1;
}
.top-bg{
	position: absolute;
	width:  calc(200vw);
	height: calc(200vw);
	border-radius: calc(100vw);
	top: calc(-150vw);
	left : calc(-50vw);
	z-index: -1;
}

.top-customer-bg{
	position: absolute;
	width:  calc(400vw);
	height: calc(400vw);
	border-radius: calc(200vw);
	top: calc(-325vw);
	left : calc(-150vw);
	z-index: -1;
}
</style>
