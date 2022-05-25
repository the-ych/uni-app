<template>
	<view class="content">
		<view v-for="notification in notifications" :key="notification.id">
			<matched-notification
				v-if="notification.type.endsWith('MatchedNotification')"
				:notification="notification"
			></matched-notification>
		</view>
	</view>
</template>

<script>
import request from "../common/request";
import MatchedNotification from "../components/MatchedNotification";
export default {
	components: {
		MatchedNotification
	},
	data() {
		return {
			endpoint: process.env.VUE_APP_API_ENDPOINT,
			notifications: []
		};
	},
	onLoad() {
		uni.showLoading({
			title: '加载中'
		});
		this.fetchData()
	},
	methods: {
		fetchData() {
			request({
				url: '/api/notifications',
				auth: true,
				success: (res) => {
					uni.hideLoading({
						title: '加载中'
					});
					if (res.statusCode !== 200) {
						console.log(res.data.message)
					} else {
						this.notifications = res.data
					}
				}
			})
		},
		makeNotification(notification){
			return
		}
	}
};
</script>

<style>
.content {
	text-align: center;
	height: 400rpx;
	padding-bottom: 50rpx;

	display: flex;
	flex-direction: column;
}


.btns image {
	cursor: pointer;
	box-shadow: 4rpx 4rpx 2rpx rgba(0, 0, 0, 0.3);
	/*border: black 1px solid;*/
	border-radius: 50%;
	margin: 0 20rpx;
	width: 100rpx;
	height: 100rpx;
}
</style>
