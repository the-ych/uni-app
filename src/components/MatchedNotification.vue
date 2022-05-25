<template>
	<view class="container">
		<view class="read">
			<text v-if="this.notification.read_at === null">●</text>
		</view>
		<view class="icon">

		</view>
		<view class="title_message_container">
			<view class="title">
				{{ this.notification.data.title }}
			</view>
			<view class="message">
				{{ this.notification.data.message }}
			</view>
		</view>
	</view>
</template>

<script>
import request from "../common/request";

export default {
	name: "MatchedNotification",
	props: ['notification'],
	data() {
		return {}
	},
	methods: {}
}
</script>

<style scoped>
.container {
	color: black;
	margin: 30rpx;
	text-align: left;
	display: flex;
	flex-direction: row;
}

.title_message_container {
	display: flex;
	flex-direction: column;
}

.title {
	font-size: 14pt;
	font-weight: bold;
}

.icon {
	height: 80rpx;
	width: 80rpx;
}

.message {
	font-size: 12pt;

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