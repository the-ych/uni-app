<template>
	<view class="content">
		{{ posts }}

		<UniFab ref="fab" :pattern="pattern" :content="content" horizontal="right" vertical="bottom"
		        :direction="direction" @trigger="fabTrigger"/>
	</view>
</template>

<script>
import request from "../common/request";
import UniFab from "../uni_modules/uni-fab/components/uni-fab/uni-fab";

export default {
	components: {UniFab},
	data() {
		return {
			posts: [],
			direction: 'horizontal',
			pattern: {
				color: '#7A7E83',
				backgroundColor: '#fff',
				selectedColor: '#007AFF',
				buttonColor: '#007AFF',
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
			]
		};
	},
	onLoad() {
		uni.showLoading({
			title: '加载中'
		});
		this.fetchData()
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
		fabTrigger(data){
			uni.navigateTo({
				url: `/pages/post/create?anonymous=${data.index}`
			})
		}
	}
};
</script>

<style>
.content {
	text-align: center;
	height: 400rpx;
	padding-bottom: 50rpx;

	display: flex;
	flex-direction: column;
}
</style>
