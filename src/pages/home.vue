<template>
	<view class="content">
		<view>
			<uni-card :isFull="true" style="margin: 40rpx 40rpx" v-for="(h, i) in homeInfo" :key="i">
				<uni-swiper-dot class="uni-swiper-dot-box" @click="(e)=>clickSwipe(i,e)" :info="h.photos"
				                :current="swipeCurrent[i]"
				                mode="round" field="content">
					<swiper class="swiper-box" :current="swipeDotIndex[i]" @change="(e)=>swipeChange(i,e)">
						<swiper-item v-for="(item, index) in h.photos" :key="`${i}-${index}`">
							<view class="swiper-item">
								<image :src="endpoint + '/storage/' + item.path"></image>
							</view>
						</swiper-item>
					</swiper>
				</uni-swiper-dot>
				<view style="display: flex;flex-direction: row;align-content: center">
					<view>
						<image style="background-color: black; height: 50px;width: 50px;border-radius: 50%;" :src="h.profile.avatar"></image>
					</view>
					<view style="margin-left: 30rpx;align-self: center">
						<text style="text-align: left;font-size: 16pt;">
							{{ h.name }}
						</text>
					</view>
				</view>
				<template v-slot:actions>
					<view class="card-actions">
						<view class="card-actions-item" @click="actionsClick('点赞')">
							<uni-icons type="heart-filled" size="18" color="#999"></uni-icons>
							<text class="card-actions-item-text">喜歡</text>
						</view>
						<view class="card-actions-item" @click="actionsClick('评论')">
							<uni-icons type="closeempty" size="18" color="#999"></uni-icons>
							<text class="card-actions-item-text">不喜歡</text>
						</view>
					</view>
				</template>
			</uni-card>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			endpoint: process.env.VUE_APP_API_ENDPOINT,
			homeInfo: [],
			swipeCurrent: {},
			swipeDotIndex: {}
		};
	},
	onLoad() {
		const access_token = uni.getStorageSync('access_token')
		if (!access_token) {
			uni.reLaunch({
				url: '/pages/me?action=toast&message=您尚未登入&type=error'
			})
		}
		uni.request({
			url: process.env.VUE_APP_API_ENDPOINT + '/api/relation/home',
			header: {
				'Authorization': `Bearer ${access_token}`,
				'Accept': 'application/json'
			},
			success: (res) => {
				if (res.statusCode !== 200) {
					console.log(res.data.message)
				} else {
					console.log(res.data)
					res.data.data.forEach((t, i) => {
						this.swipeCurrent[i] = 0
						this.swipeDotIndex[i] = 0
					})
					this.homeInfo = res.data.data
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
	methods: {
		swipeChange(i, e) {
			this.$set(this.swipeCurrent, i, e.detail.current)
			this.$forceUpdate();
		},
		clickSwipe(i, e) {
			this.$set(this.swipeDotIndex, i, e)
			this.$forceUpdate();
		}
	}
};
</script>

<style>
.content {
	text-align: center;
	height: 400rpx;
	margin-top: 20rpx;
}

.card-actions {
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	height: 45px;
	border-top: 1px #eee solid;
}

.card-actions-item {
	display: flex;
	flex-direction: row;
	align-items: center;
}

.card-actions-item-text {
	font-size: 12px;
	color: #666;
	margin-left: 5px
}

.cover-image {
	flex: 1;
	height: 150px
}

.swiper-box {
	margin-bottom: 50rpx;
	height: 200px;
}

.swiper-item {
	/* #ifndef APP-NVUE */
	display: flex;
	/* #endif */
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 200px;
	color: blue;
}
</style>
