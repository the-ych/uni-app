<template>
	<view class="index">
		<view class="grid">
			<view class="grid-c-06" v-for="item in beLiked" :key="item.id">
				<view class="panel">
					<image class="card-img card-list2-img" :src="item.img_src"></image>
					<text class="card-num-view card-list2-num-view">{{ item.img_num }}P</text>
					<view class="card-bottom row">
						<view class="car-title-view row">
							<text class="card-title card-list2-title">{{ item.title }}</text>
						</view>
						<view class="card-share-view"><i class="fa-solid fa-share"></i></view>
					</view>
				</view>
			</view>
		</view>
		<text class="loadMore">加载中...</text>
	</view>
</template>

<script>
export default {
	data() {
		return {
			beLiked: [{"id":"dongwu10","title":"\u52a8\u7269","name":"dongwu10","img_num":10,"img_src":"https:\/\/via.placeholder.com\/15x30.jpg"},{"id":"jianzhu07","title":"\u5efa\u7b51","name":"jianzhu07","img_num":10,"img_src":"https:\/\/img-cdn-qiniu.dcloud.net.cn\/tuku\/img\/jianzhu07.jpg"},{"id":"qiche01","title":"\u6c7d\u8f66","name":"qiche01","img_num":10,"img_src":"https:\/\/img-cdn-qiniu.dcloud.net.cn\/tuku\/img\/qiche01.jpg"},{"id":"meinv09","title":"\u7f8e\u5973","name":"meinv09","img_num":10,"img_src":"https:\/\/img-cdn-qiniu.dcloud.net.cn\/tuku\/img\/meinv09.jpg"},{"id":"dongwu01","title":"\u52a8\u7269","name":"dongwu01","img_num":10,"img_src":"https:\/\/img-cdn-qiniu.dcloud.net.cn\/tuku\/img\/dongwu01.jpg"}]
		}
	},
	onLoad() {
		const access_token = uni.getStorageSync('access_token')
		if (!access_token) {
			uni.reLaunch({
				url: '/pages/me?action=toast&message=您尚未登入&type=error'
			})
		} 
		uni.request({
			url: process.env.VUE_APP_API_ENDPOINT + '/api/relation/be_liked',
			header: {
				'Authorization': `Bearer ${access_token}`,
				'Accept': 'application/json'
			},
			success: (res) => {
				if (res.statusCode !== 200) {
					console.log(res.data.message)
				} else {
					//this.beLiked = res.data.data
				}
			},
			fail: (res) => {
				uni.showToast({
					title: res,
					icon: "error",
					mask: true
				})
			}
		})
	},
	methods: {}
}
</script>

<style>
@import "../../styles/common.css";

.content {
	text-align: center;
	height: 400rpx;
	margin-top: 200rpx;
}
</style>
