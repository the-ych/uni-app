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
				<view v-if="logined" class="center-list-item border-bottom pointer" @click="toInvite">
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
				<view class="center-list-item border-bottom pointer">
					<text class="list-icon"><i class="fa-solid fa-circle-question"></i></text>
					<text class="list-text">幫助與意見回饋</text>
					<text class="navigat-arrow"><i class="fa-solid fa-chevron-right"></i></text>
				</view>
				<view class="center-list-item pointer" @click="openURL('https://policy.hsuan.app')">
					<text class="list-icon"><i class="fa-solid fa-book"></i></text>
					<text class="list-text">服務條款及隱私權條款</text>
					<text class="navigat-arrow"><i class="fa-solid fa-chevron-right"></i></text>
				</view>
			</view>
			<view class="center-list">
				<view class="center-list-item pointer">
					<text class="list-icon"><i class="fa-solid fa-circle-info"></i></text>
					<text class="list-text">關於YCH (v{{ APP_VERSION }})</text>
					<text class="navigat-arrow"><i class="fa-solid fa-chevron-right"></i></text>
				</view>
			</view>
			<view class="btn-row place-bottom">
				<button v-if="logined" class="primary" style="border-bottom-left-radius: 0;border-bottom-right-radius: 0;border-top-left-radius: 12pt;border-top-right-radius: 12pt;font-size: 16pt;" type="primary" :loading="logoutBtnLoading"
				        @tap="logout">登出
				</button>
			</view>
		</view>
		<promptInstall></promptInstall>
	</view>
</template>

<script>
import promptInstall from "../components/promptInstall";
import openURL from "../common/openURL";
const APP_VERSION = process.env.VUE_APP_VERSION
export default {
	components: {
		promptInstall
	},
	data() {
		return {
			name: '',
			logined: false,
			avatarUrl: '../static/logo.png',
			logoutBtnLoading: false,
			APP_VERSION
		}
	},
	onLoad(options) {
		if (options.action === 'toast') {
			if(options.type){
				uni.showToast({
					title: options.message,
					icon: options.type
				})
			} else {
				uni.showToast({
					title: options.message,
				})
			}
		}

		try {
			const user = JSON.parse(uni.getStorageSync('user'))
			const value = uni.getStorageSync('access_token');

			const avatar = user.profile.avatar;
			if (value) {
				// 已登入
				this.logined = true
				this.name = user.name
			}

			if(avatar){
				this.avatarUrl = avatar
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
					uni.removeStorageSync('access_token');
					uni.removeStorageSync('user');
					uni.reLaunch({
						url: '/pages/me?action=toast&message=登出成功'
					});
				}
			})
		},
		openURL
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
	height: 175rpx;
	padding: 20rpx;
	box-sizing: border-box;
	background-color: #F7B3CD;
	flex-direction: row;
	align-items: center;
}

.pointer {
	cursor: pointer;
}

.logo-hover {
	opacity: 0.8;
	cursor: pointer;
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
	color: #F7B3CD;
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
