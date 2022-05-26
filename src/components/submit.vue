<template>
	<view>
		<view class="submit">
			<view class="submit-chat">
				<view class="bt-img" @tap="more">
					<uni-icons :type="btnMoreIcon" size="50"></uni-icons>
				</view>
				<textarea
					auto-height
					class="chat-send btn"
					@focus="focus"
					v-model="msg"
				></textarea>
				<view class="bt-img" @tap="sendText">
					<uni-icons type="paperplane-filled" size="50"></uni-icons>
				</view>
			</view>
			<!-- 更多 -->
			<view class="more" :class="{displaynone:!ismore}">
				<view class="more-list" @tap="sendImg('album')">
					<image src=""></image>
					<view class="more-list-title">图片</view>
				</view>
				<view class="more-list" @tap="sendImg('camera')">
					<image src=""></image>
					<view class="more-list-title">拍照</view>
				</view>
				<view class="more-list" @tap="choseLocation">
					<image src=""></image>
					<view class="more-list-title">定位</view>
				</view>
				<view class="more-list">
					<image src=""></image>
					<view class="more-list-title">视频</view>
				</view>
				<view class="more-list">
					<image src=""></image>
					<view class="more-list-title">文件</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
// 引入组件
import UniIcons from "../uni_modules/uni-icons/components/uni-icons/uni-icons";
import UniEasyinput from "../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput";
// 录音
const recorderManager = uni.getRecorderManager();

export default {
	data() {
		return {
			ismore: false,
			voicebg: false,
			pageY: 0,
			msg: "",
			// 直接引用地址可能出不来，需要用require
			//toc: require('../../static/icon/allorder.png'),
			timer: '',
			vlength: 0,
			btnMoreIcon: 'plus'
		};
	},
	components: {
		UniEasyinput,
		UniIcons,
	},
	methods: {
		sendText() {
			this.send(this.msg, 'text')
		},
		//获取高度方法
		getElementHeight() {
			const query = uni.createSelectorQuery().in(this);
			query.select('.submit').boundingClientRect(data => {
				this.$emit('heights', data.height);
			}).exec();
		},
		//切换音频
		records() {
			//切换的时候关闭其他界面
			this.ismore = false
			//切换高度
			setTimeout(() => {
				this.getElementHeight();
			}, 10)
		},
		// 输入框聚焦
		focus() {
			//关闭其他项
			this.ismore = false;
			this.btnMoreIcon = 'plus'
			setTimeout(() => {
				this.getElementHeight()
			}, 10)
		},
		//更多功能
		more() {
			this.ismore = !this.ismore;
			this.btnMoreIcon = this.btnMoreIcon === 'minus' ? 'plus' : 'minus'
			//切换的时候关闭其他界面
			//this.toc = require("");
			setTimeout(() => {
				this.getElementHeight();
			}, 10)
		},
		//图片发送
		sendImg(e) {
			let count = 9;
			if (e === 'album') {
				count = 9;
			} else {
				count = 1;
			}
			uni.chooseImage({
				count: count, //默认9
				sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				sourceType: [e], //从相册选择
				// success: function (res) { //用function的方式会找不到send方法
				success: (res) => {
					console.log(JSON.stringify(res.tempFilePaths));
					const filePaths = res.tempFilePaths;
					for (let i = 0; i < filePaths.length; i++) {
						this.send(filePaths[i], 1)
					}
				}
			});
		},
		//获取位置
		choseLocation() {
			uni.chooseLocation({
				// success: function(res) {
				success: res => {
					let data = {
						name: res.name,
						address: res.address,
						latitude: res.latitude,
						longitude: res.longitude
					}
					this.send(data, 3);
					// console.log('位置名称：' + res.name);
					// console.log('详细地址：' + res.address);
					// console.log('纬度：' + res.latitude);
					// console.log('经度：' + res.longitude);

				}
			});
		},
		//发送
		send(msg, type) {
			let date = {
				message: msg,
				type: type
			}
			this.$emit('inputs', date);
			setTimeout(() => {
				this.msg = '';
			}, 0)
		}
	}
};
</script>

<style lang="scss" scoped>
.submit {
	background: rgba(220, 220, 220, 0.96);
	border-top: 1px solid rgba(39, 40, 50, 0.1);
	width: 100%;
	position: fixed;
	bottom: 0;
	z-index: 100;
	// padding-bottom: var(--status-bar-height);
	padding-bottom: env(safe-area-inset-bottom);
}

.displaynone {
	display: none;
}

.submit-chat {
	width: 100%;
	display: flex;
	align-items: flex-end;
	box-sizing: border-box;
	padding: 14rpx 14rpx;

	image {
		width: 56rpx;
		height: 56rpx;
		margin: 0 10rpx;
		flex: auto;
	}

	.btn {
		flex: auto;
		background-color: #fff;
		border-radius: 10rpx;
		padding: 20rpx;
		max-height: 160rpx;
		margin: 0 10rpx;
	}

	.chat-send {
		line-height: 20rpx;
	}

	.record {
		line-height: 44rpx;
		text-align: center;
		font-size: 20rpx;
		color: rgba(39, 40, 50, 0.6);
	}
}

.more {
	width: 100%;
	height: 436rpx;
	background: rgba(236, 237, 238, 1);
	box-shadow: 0px 11rpx 0px 0px rgba(0, 0, 0, 0.1);
	bottom: env(safe-area-inset-bottom);
	padding: 8rpx 20rpx;
	box-sizing: border-box;

	.more-list {
		width: 25%;
		text-align: center;
		float: left;
		padding-top: 32rpx;

		image {
			width: 72rpx;
			height: 72rpx;
			padding: 24rpx;
			background: rgba(255, 255, 255, 1);
			border-radius: 24rpx;
		}

		.more-list-title {
			font-size: 24rpx;
			color: rgba(39, 40, 50, 0.5);
			line-height: 34rpx;
		}
	}
}
</style>
