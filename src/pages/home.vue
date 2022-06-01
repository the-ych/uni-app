<template>
	<view class="content">
		<view
			:style="{position:'fixed',right: 0,left: 0, zIndex:888,top: 0,paddingTop:statusbarHeight + 'px', backgroundColor: '#F7B3CD'}">
			<uni-search-bar
				id="searchBar"
				class="uni-mt-10" radius="5" placeholder="搜尋看看～" clearButton="none" cancelButton="none"
				bgColor="#F7B3CD"
				@focus="searchBg=true" @blur="searchBg=false"
			/>
		</view>
		<view v-if="searchBg"
		      :style="`position: fixed;top: ${searchBgTop}px;bottom: 0;left: 0;right: 0;background-color: #D2D7D3;z-index: 999;padding-top: 30rpx;`"
		>
			今日熱搜
		</view>
		<scroll-view :style="{paddingTop: searchBgTop+'px', paddingBottom: 'var(--window-bottom)'}">
			<uni-card :title="post.title" :isFull="true"
			          :extra="post.anonymous ? '匿名提問' :'一般文章'"
			          :thumbnail="post.avatar"
			          :class="{'mt-20':i!==0}"
			          v-for="(post, i) in posts" :key="post.id"
			>
				<text class="uni-body">{{ post.content }}</text>
				<view slot="actions" class="card-actions"
				      style="margin-top: 30rpx;">
					<view class="card-actions-item" style="display: flex;flex-direction: row;align-items: center;"
					      @click="sendLike(i, post.id)">
						<image v-if="!post.reacted_by_me" src="@/static/icons/heart-3-line.png"
						       style="width: 30rpx;height: 30rpx;"></image>
						<image v-if="post.reacted_by_me" src="@/static/icons/heart-3-fill.png"
						       style="width: 30rpx;height: 30rpx;"></image>
						<text style="font-size: 12pt;margin-left: 20rpx;">({{ post.reactions_count }})</text>
					</view>
					<view class="card-actions-item" style="display: flex;flex-direction: row;align-items: center;"
					      @click="gotoPost(post.id)">
						<image src="@/static/icons/discuss-line.png" style="width: 30rpx;height: 30rpx;"></image>
						<text style="font-size: 12pt;margin-left: 20rpx;">({{ post.comments_count }})</text>
					</view>
					<view class="card-actions-item">
						<image src="@/static/icons/more-fill.png" style="width: 30rpx;height: 30rpx;"></image>
					</view>
				</view>
			</uni-card>

			<UniFab ref="fab" :pattern="pattern" :content="content" horizontal="right" vertical="bottom"
			        :direction="direction" @trigger="fabTrigger"/>
		</scroll-view>
	</view>
</template>

<script>
import request from "../common/request";
import UniFab from "../uni_modules/uni-fab/components/uni-fab/uni-fab";
import UniCard from "../uni_modules/uni-card/components/uni-card/uni-card";
import UniEasyinput from "../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput";

export default {
	components: {UniEasyinput, UniFab, UniCard},
	data() {
		return {
			posts: [],
			searchBg: false,
			direction: 'horizontal',
			searchBgTop: 40,
			pattern: {
				color: '#7A7E83',
				backgroundColor: '#fff',
				selectedColor: '#F7B3CD',
				buttonColor: '#F7B3CD',
				iconColor: '#fff'
			},
			content: [
				{
					iconPath: '/static/icons/article-line.png',
					selectedIconPath: '/static/icons/article-fill.png',
					text: '發文',
					active: false
				},
				{
					iconPath: '/static/icons/questionnaire-line.png',
					selectedIconPath: '/static/icons/questionnaire-fill.png',
					text: '匿名提問',
					active: false
				},
			],
			statusbarHeight: '47px'
		};
	},
	onLoad(options) {
		if (options.action === 'toast') {
			if (options.type) {
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
		uni.showLoading({
			title: '加载中'
		})

		setTimeout(() => {
			this.statusbarHeight = uni.getSystemInfoSync().statusBarHeight

			const query = uni.createSelectorQuery().in(this)
			query.select('#searchBar').boundingClientRect(data => {
				this.searchBgTop = data.height + this.statusbarHeight
			}).exec();
		}, 100)

		this.fetchData()
	},
	mounted() {
	},
	methods: {
		fetchData() {
			request({
				url: '/api/posts',
				auth: true,
				success: (res) => {
					uni.hideLoading({
						title: '加载中'
					});
					if (res.statusCode !== 200) {
						console.log(res.data.message)
					} else {
						this.posts = res.data
					}
				},
			})
		},
		fabTrigger(data) {
			uni.navigateTo({
				url: `/pages/post/create?anonymous=${data.index}`
			})
		},
		sendLike(index, id) {
			const that = this
			request({
				url: `/api/posts/${id}/like`,
				method: 'POST',
				auth: true,
				success(res) {
					if (res.statusCode !== 200) {
						uni.showToast({
							title: res.data.message,
							icon: 'error'
						})
					}
					that.$set(that.posts, index, res.data.data)
				}
			})
		},
		gotoPost(id) {
			uni.navigateTo({
				url: `/pages/post/show?post=${id}`
			})
		}
	}
};
</script>

<style>
.content {
	text-align: center;
	background-color: rgb(250, 250, 250);
	height: calc(100vh - var(--window-bottom));
}

.mt-20 {
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
