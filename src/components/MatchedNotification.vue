<template>
	<view class="container">
		<view class="read">
			<text v-if="this.notification.read_at === null">●</text>
		</view>
		<view class="icon-container">
			<image :src="this.notification.data.icon" class="icon"></image>
		</view>
		<view class="title_message_container">
			<view class="title">
				{{ this.notification.data.title }}
			</view>
			<view class="message">
				{{ this.notification.data.message }}
			</view>
			<view class="time">
				{{ time }}
			</view>
		</view>
	</view>
</template>

<script>
import moment from 'moment';

import 'moment/locale/zh-tw';

moment.locale('zh-tw');

export default {
	name: "MatchedNotification",
	props: ['notification'],
	data() {
		return {
			time: moment(this.notification.created_at).fromNow()
		}
	},
	methods: {}
}
</script>

<style scoped>
.container {
	color: black;
	margin: 10rpx 30rpx;
	text-align: left;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-items: center;
}

.title_message_container {
	display: flex;
	flex-direction: column;
}

.title {
	font-size: 14pt;
	font-weight: bold;
}

.icon-container {
	height: 100rpx;
	width: 50rpx;
	margin: 0 10rpx;
	display: flex;
	align-items: center;
}

.icon {
	height: 50rpx;
	width: 50rpx;
}

.message {
	font-size: 12pt;
}

.time {
	font-size: 10pt;
	color: grey;
}

.read {
	width: 25rpx;
	font-size: 12pt;
	height: 80rpx;
	color: #0faeff;
	display: flex;
	align-items: center;
}
</style>