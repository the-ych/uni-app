<template>
	<view class="content" style="display: flex; flex-direction: column;">
		<view style="height: 50rpx;margin-bottom: 30rpx;display: flex;align-items: center;">
			<image :src="post.avatar" class="rounded" style="height: 50rpx;width: 50rpx;border: 2rpx black solid"/>
			<text style="font-size: 12pt;margin-left: 30rpx;">{{ post.user.name }}</text>
		</view>
		<text style="font-size: 10pt;text-align: left;">發文時間: {{ moment(post.created_at).fromNow() }} / 上次更新: {{ moment(post.updated_at).fromNow() }}</text>
		<text style="margin-top: 20rpx;font-size: 20pt;text-align: left;">{{ post.content }}</text>

		
	</view>
</template>

<script>
import request from "../../common/request";
import moment from "../../common/moment";

export default {
	name: "show",
	data() {
		return {
			post: {}
		}
	},
	onLoad(options) {
		const that = this
		request({
			url: `/api/posts/${options.post}?with=comments`,
			auth: true,
			success(res) {
				if (res.statusCode !== 200) {
					uni.showToast({
						title: res.data.message,
						icon: "error"
					})
				} else {
					that.post = res.data
					uni.setNavigationBarTitle({
						title: res.data.title
					})
				}
			}
		})
	},
	methods: {
		moment
	}
}
</script>

<style scoped>

.content {
	text-align: center;
	height: 400rpx;
	margin: 20rpx;
}
</style>