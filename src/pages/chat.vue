<template>
	<!-- https://blog.csdn.net/m0_67391677/article/details/123431898 -->
	<view class="content">

		<!-- 聊天内容 -->
		<scroll-view class="chat" scroll-y="true" scroll-with-animation="true" :scroll-into-view="scrollToView">
			<view class="chat-main" :style="{paddingBottom:inputh+'px'}">
				<view class="chat-ls" v-for="(item,index) in msg" :key="index" :id="'msg'+ index">
					<view class="chat-time" v-if="item.created_at !== ''">{{ changeTime(item.created_at) }}</view>

					<!-- 對方傳的訊息 -->
					<view class="msg-m msg-left" v-if="!item.is_sender">
						<image class="user-img" :src="friend.avatar"/>

						<!-- 文字 -->
						<view class="message" v-if="item.type === 'text'">
							<view class="msg-text">{{ item.body }}</view>
						</view>

						<!--
						<view class="message" v-if="item.TextType === 1" @tap="previewImg(item.body)">
							<image :src="item.sendText" class="msg-img" mode="widthFix"></image>
						</view>
						
						<view class="message" v-if="item.TextType === 3" @tap="openLocation(item.body)">
							<view class="msg-map">
								<view class="map-name">{{ item.sendText.name }}</view>
								<view class="map-address">{{ item.sendText.address }}</view>

								<map class="map" :longitude="item.sendText.longitude" :latitude="item.sendText.latitude"
								     :markers="covers(item.sendText)"></map>
							</view>
						</view> -->
					</view>

					<!-- 自己傳的訊息 -->
					<view class="msg-m msg-right" v-if="item.is_sender">
						<image class="user-img" :src="me.avatar"></image>

						<view class="message" v-if="item.type === 'text'">
							<view class="msg-text">{{ item.body }}</view>
						</view>

						<!--
						<view class="message" v-if="item.TextType === 1" @tap="previewImg(item.sendText)">
							<image :src="item.sendText" class="msg-img" mode="widthFix"></image>
						</view>

						<view class="message" v-if="item.TextType === 3" @tap="openLocation(item.sendText)">
							<view class="msg-map">
								<view class="map-name">{{ item.sendText.name }}</view>
								<view class="map-address">{{ item.sendText.address }}</view>
								<map class="map" :longitude="item.sendText.longitude" :latitude="item.sendText.latitude"
								     :markers="covers(item.sendText)"></map>
							</view>
						</view>-->
					</view>
				</view>
			</view>
		</scroll-view>
		<submit @inputs="inputs" @heights="heights"></submit>
	</view>
</template>

<script>
import dateTime from '../common/dateTime.js';
import submit from '../components/submit.vue';
import request from "../common/request";
import moment from "../common/moment";

/**
 * 滾動到最下
 * */
function scrollToBottom(thisRef) {
	thisRef.scrollToView = ''
	thisRef.$nextTick(function () {
		thisRef.scrollToView = 'msg' + (thisRef.msg.length - 1)
	})
}

export default {
	data() {
		return {
			id: 0,
			friend: {},
			me: {},
			msg: [],
			imgMsg: [],
			scrollToView: '',
			oldTime: new Date(),
			inputh: '70'
		}
	},
	onShow() {
		/*
		for (var i = 0; i < this.msg.length; i++) {
			//时间间隔处理
			if (i < this.msg.length - 1) { //这里表示头部时间还是显示一下
				let t = dateTime.spaceTime(this.oldTime, this.msg[i].createTime);
				if (t) {
					this.oldTime = t;
				}
				this.msg[i].createTime = t;
			}
			// 获取图片，为下面的预览做准备
			if (this.msg[i].TextType === 1) {
				this.imgMsg.unshift(this.msg[i].sendText)
			}
			this.unshiftmsg.unshift(this.msg[i]);
		}*/
	},
	onLoad(options) {
		this.id = options.id
		this.friend = JSON.parse(options.friend)
		this.me = uni.getStorageSync('user')
		this.fetchData(options.id)

		getApp().globalData.Echo
			.private('App.Models.User.' + this.me.id)
			.notification((notification) => {
				if (notification.type === 'conversation.message') {
					this.msg.push(notification.message)
					scrollToBottom(this)
				}
			});
		uni.setNavigationBarTitle({
			title: this.friend.name
		});

		setTimeout(() => {
			scrollToBottom(this)
		}, 200)
	},
	components: {
		submit,
	},
	methods: {
		fetchData(id) {
			const that = this
			request({
				url: `/api/chat/${id}`,
				method: "GET",
				auth: true,
				success(res) {
					if (res.statusCode !== 200) {
						console.log(res.data.message)
					} else {
						that.msg = res.data.data
					}
				}
			})
		},
		changeTime(date) {
			return moment(date).fromNow();
		},
		// 进行图片的预览
		previewImg(e) {
			let index = 0;
			for (let i = 0; i < this.imgMsg.length; i++) {
				if (this.imgMsg[i] === e) {
					index = i;
				}
			}
			console.log("index", index)
			// 预览图片
			uni.previewImage({
				current: index,
				urls: this.imgMsg,
				longPressActions: {
					itemList: ['发送给朋友', '保存图片', '收藏'],
					success: function (data) {
						console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
					},
					fail: function (err) {
						console.log(err.errMsg);
					}
				}
			});
		},
		//地图定位
		covers(e) {
			let map = [{
				latitude: e.latitude,
				longitude: e.longitude,
				//iconPath: '../../../static/logo.png'
			}]
			return (map);
		},
		//跳转地图信息
		openLocation(e) {
			uni.openLocation({
				latitude: e.latitude,
				longitude: e.longitude,
				name: e.name,
				address: e.address,
				success: function () {
					console.log('success');
				}
			});
		},
		/**
		 * @description 傳送訊息到後端
		 * @param message: 訊息
		 * */
		sendMessage(message) {
			request({
				url: `/api/chat/${this.id}/send`,
				method: "POST",
				data: {
					message
				},
				success(res) {
					if (res.statusCode !== 200) {
						console.log(res.data.message)
					}
				}
			})
		},
		//接受输入内容
		inputs(e) {
			let data = {
				"is_sender": 1,
				"id": 1,
				"body": e.message,
				"type": "text",
				"data": [],
				"created_at": new Date().toISOString(),
				"sender": this.me
			};

			this.sendMessage(e.message)

			this.msg.push(data);
			this.$nextTick(function () {
				this.scrollToView = 'msg' + (this.msg.length - 1)
			})
			if (e.type === 'image') {
				this.imgMsg.push(e.message);
			}
			console.log(e)
		},
		//输入框高度
		heights(e) {
			console.log("高度:", e)
			this.inputh = e;
			scrollToBottom(this);
		}
	}
}
</script>

<style lang="scss">
page {
	height: 100%;
}


.place-bottom {
	position: fixed;
	bottom: var(--window-bottom);
	left: 0;
	right: 0;
	height: calc(0.5 * 125rpx);
	line-height: calc(0.5 * 100rpx);
	background: #fff;
}

.content {
	height: 100%;
	background-color: rgba(244, 244, 244, 1);
}

.chat {
	height: 100%;

	.chat-main {
		padding-left: 32rpx;
		padding-right: 32rpx;
		padding-top: 20rpx;
		// padding-bottom: 120rpx;  //获取动态高度
		display: flex;
		flex-direction: column;
	}

	.chat-ls {
		.chat-time {
			font-size: 24rpx;
			color: rgba(39, 40, 50, 0.3);
			line-height: 34rpx;
			padding: 10rpx 0rpx;
			text-align: center;
		}

		.msg-m {
			display: flex;
			padding: 20rpx 0;

			.user-img {
				flex: none;
				width: 80rpx;
				height: 80rpx;
				border-radius: 20rpx;
			}

			.message {
				flex: none;
				max-width: 480rpx;
			}

			.msg-text {
				font-size: 32rpx;
				color: rgba(39, 40, 50, 1);
				line-height: 44rpx;
				padding: 18rpx 24rpx;
			}

			.msg-img {
				max-width: 400rpx;
				border-radius: 20rpx;
			}

			.msg-map {
				background: #fff;
				width: 464rpx;
				height: 284rpx;
				overflow: hidden;

				.map-name {
					font-size: 32rpx;
					color: rgba(39, 40, 50, 1);
					line-height: 44rpx;
					padding: 18rpx 24rpx 0 24rpx;
					//下面四行是单行文字的样式
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 1;
					overflow: hidden;
				}

				.map-address {
					font-size: 24rpx;
					color: rgba(39, 40, 50, 0.4);
					padding: 0 24rpx;
					//下面四行是单行文字的样式
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 1;
					overflow: hidden;
				}

				.map {
					padding-top: 8rpx;
					width: 464rpx;
					height: 190rpx;
				}
			}

			.voice {
				// width: 200rpx;
				min-width: 100rpx;
				max-width: 400rpx;
			}

			.voice-img {
				width: 28rpx;
				height: 36rpx;
			}
		}

		.msg-left {
			flex-direction: row;

			.msg-text {
				margin-left: 16rpx;
				background-color: #fff;
				border-radius: 0rpx 20rpx 20rpx 20rpx;
			}

			.ms-img {
				margin-left: 16rpx;
			}

			.msh-map {
				margin-left: 16rpx;
				border-radius: 0rpx 20rpx 20rpx 20rpx;
			}

			.voice {
				text-align: right;

			}

			.voice-img {
				float: left;
				transform: rotate(180deg);
				width: 28rpx;
				height: 36rpx;
				padding-bottom: 4rpx;
			}
		}

		.msg-right {
			flex-direction: row-reverse;

			.msg-text {
				margin-right: 16rpx;
				background-color: rgba(255, 228, 49, 0.8);
				border-radius: 20rpx 0rpx 20rpx 20rpx;
			}

			.ms-img {
				margin-right: 16rpx;
			}

			.msh-map {
				margin-left: 16rpx;
				border-radius: 20rpx 0rpx 20rpx 20rpx;
			}

			.voice {
				text-align: left;

			}

			.voice-img {
				float: right;
				padding: 4rpx;
				width: 28rpx;
				height: 36rpx;
			}
		}
	}
}
</style>
