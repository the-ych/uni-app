<template>
	<view class="content">
		<view style="padding-bottom: 50rpx;">
			<Tinder ref="tinder" key-name="id" :queue.sync="queue" :offset-y="10" @submit="onSubmit"
			        style="height: 65vh;margin: 0 50rpx;" v-if="queue.length">
				<template v-slot="scope">
					<view
						class="pic"
						:style="makeStyle(scope)"
					>
						<view style="margin: 0 20rpx;display: flex;flex-direction: row;align-content: center">
							<view>
								<image style="background-color: black; height: 50px;width: 50px;border-radius: 50%;"
								       :src="scope.data.profile.avatar+`?cache=${Math.random()}`"></image>
							</view>
							<view style="margin-left: 30rpx;align-self: start;">
								<text
									style="text-align: left;font-weight: bold;color: white;">
									{{ scope.data.name }}
								</text>
							</view>
						</view>
						<text style="margin: 0 20rpx;color: white;margin-bottom: 30rpx"></text>
					</view>
				</template>
			</Tinder>
			<view v-if="queue.length===0" style="padding: 50% 0;">
				<image src="@/static/images/logo.png"/>
				<text class="uni-h6 block">沒有人了QQ</text>
				<text class="uni-h6 block">快快邀請好友加入或調整你的設定</text>
			</view>
			<view class="btns" v-if="queue.length">
				<image src="@/static/buttons/hate.png" @click="btnClick('nope')"></image>
				<image src="@/static/buttons/super.png" @click="btnClick('super')"></image>
				<image src="@/static/buttons/like.png" @click="btnClick('like')"></image>
			</view>
		</view>
	</view>
</template>

<script>
import Tinder from "vue-tinder";
import request from "../common/request";

const source = [
	"AdelieBreeding_ZH-CN1750945258",
	"BlumenwieseNRW_ZH-CN4774429225",
	"NFLDfog_ZH-CN4846953507"
];

export default {
	components: {
		Tinder
	},
	data() {
		return {
			endpoint: process.env.VUE_APP_API_ENDPOINT,
			homeInfo: [],
			swipeCurrent: {},
			swipeDotIndex: {},
			cardHidden: {},

			queue: [],
			offset: 0,
			history: []
		};
	},
	onLoad() {
		uni.showLoading({
			title: '載入中'
		});
		this.fetchData()
	},
	methods: {
		fetchData() {
			request({
				url: '/api/home',
				auth: true,
				success: (res) => {

					uni.hideLoading({
						title: '載入中'
					});
					if (res.statusCode !== 200) {
						console.log(res.data.message)
					} else {
						console.log(res.data)
						res.data.data.forEach((t, i) => {
							this.swipeCurrent[i] = 0
							this.swipeDotIndex[i] = 0
							this.cardHidden[i] = false;
						})
						this.homeInfo = res.data.data
						this.queue = res.data.data
					}
				}
			})
		},
		/**
		 * @param type: 滑動類型（like右, nope左, super上滑）
		 * @param key: 內容key
		 * @param item: 目前滑過的內容
		 * */
		onSubmit({type, key, item}) {
			if (this.queue.length < 3) {
				this.fetchData();
			}
			this[type](item)
		},

		/**
		 * 用戶點擊按鈕時
		 * @param choice: 類型（like, nope, super）
		 * */
		async btnClick(choice) {
			this.$refs.tinder.decide(choice);
		},

		makeStyle(scope) {
			let ret = {}
			if(scope.data.photos?.[0]?.path) {
				ret['background-image'] = `url(${process.env.VUE_APP_API_ENDPOINT}/storage/${scope.data.photos?.[0]?.path})`
			}
			
			return {
				'background-color': `lightgray`,
				'width': '100%',
				'height': '100%',
				'background-size': 'cover',
				'background-position': 'center',
				'display': 'flex',
				'flex-direction': 'column',
				'justify-content': 'flex-end',
				'align-items': 'flex-start'
			}
		},

		swipeChange(i, e) {
			this.$set(this.swipeCurrent, i, e.detail.current)
			this.$forceUpdate();
		},
		clickSwipe(i, e) {
			this.$set(this.swipeDotIndex, i, e)
			this.$forceUpdate();
		},

		like({id, name}) {
			request({
				url: '/api/relationship/like',
				auth: true,
				method: "POST",
				data: {
					id: id
				},
				success: (res) => {
					if (res.statusCode !== 200) {
						console.log(res.data.message)
					} else {
						if (res.data.status === 'matched') {
							uni.showModal({
								title: '配對成功',
								content: '恭喜你成功與'+name+'配對 🥳',
								success: function (res) {
									if (res.confirm) {
										uni.switchTab({
											url: '/pages/chatList'
										})
									}
								}
							});
						}
					}
				}
			})
		},

		nope({id}) {
			request({
				url: '/api/relationship/hate',
				method: "POST",
				auth: true,
				data: {
					id: id
				},
				success: (res) => {
					if (res.statusCode !== 200) {
						console.log(res.data.message)
					} else {
						//this.cardHidden[id] = true
						//this.$forceUpdate();
					}
				}
			})
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

.btns {
	position: absolute;
	left: 0;
	right: 0;
	bottom: 30px;
	margin: auto;
	display: flex;
	align-items: center;
	justify-content: center;
	min-width: 300px;
	max-width: 355px;
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
