<template>
	<view class="prompt-popup-container" v-if="showInstallMessage">
		<view class="prompt-popup-wrapper">
			<view class="close-tip-btn">
				<uni-icons type="closeempty" size="20" class="close-icon" @click="onClick"></uni-icons>
			</view>
			Safari瀏覽器中點擊<image class="propmt-share-icon" mode="aspectFill" src="@/static/icons/Navigation_Action.png"></image>，選擇【添加到主螢幕】快速安裝
			<view class="triangle"></view>
		</view>
	</view>
</template>

<script>
const isIos = () => {
	const userAgent = window.navigator.userAgent.toLowerCase();
	return /iphone|ipad|ipod/.test(userAgent);
}

// Detects if device is in standalone mode
const isInStandaloneMode = () => {
	return ('standalone' in window.navigator) && (window.navigator.standalone)
}
export default {
	data() {
		return {
			showInstallMessage: false,
		}
	},
	mounted() {
		console.log(window.navigator.userAgent)
		const status = uni.getStorageSync('isCloseTip')
		if (!status) {
			this.init();
		}
	},
	methods: {
		init() {
			console.log(isIos())
			if (isIos() && !isInStandaloneMode()) {
				this.showInstallMessage = true;
			}
		},
		hide() {
			this.showInstallMessage = false;
		},
		onClick() {
			uni.setStorageSync("isCloseTip", "abcdedfs")
			this.hide();
		}
	}
}
</script>

<style lang="scss">
.prompt-popup-container {
	position: fixed;
	bottom: 30rpx;
	left: 40rpx;
	right: 40rpx;
	z-index: 1000;
	.prompt-popup-wrapper {
		position: relative;
		background-color: #E5E5E5;
		border-radius: 10rpx;
		padding: 10rpx 30rpx 30rpx 30rpx;
		.close-tip-btn {
			position: relative;
			line-height: 30rpx;
			height: 30rpx;
			.close-icon {
				position: absolute;
				top: 0;
				right: 0;
			}
		}
		.propmt-share-icon {
			width: 22.8rpx;
			height: 32.4rpx;
			margin: 0 8rpx;
		}
		.triangle {
			z-index: 999;
			border: 24rpx solid transparent;
			border-top: 24rpx solid #E5E5E5;
			position: absolute;
			left: 50%;
			bottom: -48rpx;
			transform: translateX(-50%);
		}
	}
}

</style>
