<template>
	<view :style="'font-size:'+base_size">
		<dyProductList></dyProductList>
	</view>
</template>

<script>
	import dyProductList from '@/components/dy-pubu-product-list/dy-pubu-product-list.vue';
	
	export default {
		components: {
			dyProductList
		},
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
