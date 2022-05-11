<template>
	<view class="">
		<view class="center">
			<view class="logo" @click="auth" :hover-class="!logined ? 'logo-hover' : ''">
				<image class="logo-img" :src="avatarUrl"></image>
				<view class="logo-title">
					<text class="user-name">Hi，{{ logined ? name + ' 歡迎你使用YCH' : '您未登入' }}</text>
					<text class="go-login navigat-arrow" v-if="!logined"><i class="fa-solid fa-arrow-right"></i></text>
				</view>
			</view>
			<view class="center-list">
				<!--
				<view class="center-list-item border-bottom" v-show="logined && hasPwd" @click="goto">
					<text class="list-icon">&#xe60f;</text>
					<text class="list-text">修改密码</text>
					<text class="navigat-arrow">&#xe65e;</text>
				</view>-->
				<!-- #ifdef APP-PLUS -->
				<view v-if="logined" class="center-list-item border-bottom" @click="toInvite">
					<text class="list-icon">&#xe65f;</text>
					<text class="list-text">邀请好友</text>
					<text class="navigat-arrow">&#xe65e;</text>
				</view>
				<!-- #endif -->

				<!--<view class="center-list-item">
					<text class="list-icon">&#xe639;</text>
					<text class="list-text">新消息通知</text>
					<text class="navigat-arrow">&#xe65e;</text>
				</view>-->
			</view>
			<view class="center-list">
				<view class="center-list-item border-bottom">
					<text class="list-icon"><i class="fa-solid fa-circle-question"></i></text>
					<text class="list-text">帮助与反馈</text>
					<text class="navigat-arrow"><i class="fa-solid fa-chevron-right"></i></text>
				</view>
				<view class="center-list-item">
					<text class="list-icon"><i class="fa-solid fa-book"></i></text>
					<text class="list-text">服务条款及隐私</text>
					<text class="navigat-arrow"><i class="fa-solid fa-chevron-right"></i></text>
				</view>
			</view>
			<view class="center-list">
				<view class="center-list-item">
					<text class="list-icon"><i class="fa-solid fa-circle-info"></i></text>
					<text class="list-text">关于应用</text>
					<text class="navigat-arrow"><i class="fa-solid fa-chevron-right"></i></text>
				</view>
			</view>
			<view class="btn-row place-bottom">
				<button v-if="logined" class="primary" type="primary" :loading="logoutBtnLoading"
				        @tap="logout">登出
				</button>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			name: '',
			logined: false,
			avatarUrl: '../static/logo.png',
			logoutBtnLoading: false
		}
	},
	onLoad(options) {
		if (options.action === 'toast') {
			uni.showToast({
				title: options.message
			})
		}

		try {
			const value = uni.getStorageSync('access_token');
			if (value) {
				// 已登入
				this.logined = true
				this.name = uni.getStorageSync('name')
			}
		} catch (e) {
			// error
		}
	},
	methods: {
		auth() {
			if (!this.logined) {
				uni.navigateTo({
					url: '/pages/auth/login'
				})
			}
		},
		logout() {
			const access_token = uni.getStorageSync('access_token')
			uni.request({
				url: process.env.VUE_APP_API_ENDPOINT + '/api/auth/logout',
				method: "POST",
				data: {
					access_token
				},
				header: {
					'Authorization': `Bearer ${access_token}`
				},
				success(res) {
					if (res.statusCode === 200) {
						uni.removeStorageSync('access_token');
						uni.removeStorageSync('name');

						uni.reLaunch({
							url: '/pages/me?action=toast&message=登出成功'
						});
					}
				}
			})
		},
	}
}
</script>

<style>
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css);

.content {
	text-align: center;
	height: 400rpx;
	margin-top: 200rpx;
	padding: 10rpx;
}

.savepadding {
	padding-bottom: constant(safe-area-inset-bottom);
	padding-bottom: env(safe-area-inset-bottom);
	box-sizing: content-box;
}

/* ios底部安全距离-bottom*/
.savebottom {
	bottom: constant(safe-area-inset-bottom);
	bottom: env(safe-area-inset-bottom);
}

.place-bottom {
	position: fixed;
	bottom: var(--window-bottom);
	left: 0;
	right: 0;
	height: calc(0.5 * 200rpx);
	line-height: calc(0.5 * 200rpx);
	background: #fff;
}


page,
view {
	display: flex;
}

page {
	background-color: #f8f8f8;
}

button {
	width: 100%;
}

.center {
	flex-direction: column;
}

.logo {
	width: 750rpx;
	height: 240rpx;
	padding: 20rpx;
	box-sizing: border-box;
	background-color: #0faeff;
	flex-direction: row;
	align-items: center;
}

.logo-hover {
	opacity: 0.8;
}

.logo-img {
	width: 120rpx;
	height: 120rpx;
	border-radius: 150rpx;
}

.logo-title {
	height: 150rpx;
	flex: 1;
	align-items: center;
	justify-content: space-between;
	flex-direction: row;
	margin-left: 20rpx;
}

.user-name {
	height: 60rpx;
	line-height: 60rpx;
	color: #FFFFFF;
}

.go-login.navigat-arrow {
	color: #FFFFFF;
}

.login-title {
	height: 150rpx;
	align-items: self-start;
	justify-content: center;
	flex-direction: column;
	margin-left: 20rpx;
}

.center-list {
	background-color: #FFFFFF;
	margin-top: 20rpx;
	width: 750rpx;
	flex-direction: column;
}

.center-list-item {
	height: 90rpx;
	width: 750rpx;
	box-sizing: border-box;
	flex-direction: row;
	padding: 0rpx 20rpx;
}

.border-bottom {
	border-bottom-width: 1rpx;
	border-color: #c8c7cc;
	border-bottom-style: solid;
}

.list-icon {
	width: 40rpx;
	height: 90rpx;
	line-height: 90rpx;
	color: #0faeff;
	text-align: center;
	margin-right: 20rpx;
}

.list-text {
	height: 90rpx;
	line-height: 90rpx;
	color: #555;
	flex: 1;
	text-align: left;
}

.navigat-arrow {
	height: 90rpx;
	width: 40rpx;
	line-height: 90rpx;
	color: #555;
	text-align: right;
}
</style>
