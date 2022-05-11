<template>
	<view class="content">
		<view>
			<uni-card cover="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"
			          :isFull="true" style="margin: 0 20rpx"

			>
				<text>这是一个带封面和操作栏的卡片示例，此示例展示了封面插槽和操作栏插槽的用法。</text>
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
			beLiked: []
		};
	},
	onLoad() {
		const access_token = uni.getStorageSync('access_token')
		uni.request({
			url: process.env.VUE_APP_API_ENDPOINT + '/api/relation/be_liked',
			header: {
				'Authorization': `Bearer ${access_token}`,
				'Accept': 'application/json'
			},
			success: (res) => {
				if (res.statusCode !== 200) {
					console.log(res.data.message)
					uni.switchTab({
						url: '/pages/me'
					})
				} else {
					this.beLiked = res.data.data
				}
			},
			fail: (res) => {
				alert('error' + res)
			}
		})
	},
	methods: {}
};
</script>

<style>
.content {
	text-align: center;
	height: 400 upx;
	margin-top: 20 upx;
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
</style>
