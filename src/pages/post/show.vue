<template>
	<view class="content" style="">
		<view style="display: flex; flex-direction: row;justify-content: space-between;align-items: center">
			<view style="height: 30px;display: flex;align-items: center;padding-top: 5px;">
				<u-avatar :src="post.avatar" style="margin-right: 10px;"></u-avatar>
				<text style="font-size: 12pt;">{{ post.user.name }}</text>
			</view>
			<text style="font-size: 10pt;text-align: left;color: grey">{{ moment(post.updated_at).fromNow() }}</text>
		</view>

		<text style="font-weight: 700;text-align: left;font-size: 25pt;margin: 20px 0;display: block;">
			{{ post.title }}
		</text>

		<text style="margin-bottom: 40px;font-size: 14pt;text-align: left;display: block;">{{ post.content }}</text>

		<u-gap height="1" bgColor="#bbb"></u-gap>
		<view style="margin: 10px 0;display: flex;flex-direction: row;align-items: center">
			<image v-if="!post.reacted_by_me" src="@/static/icons/heart-3-line.png"
			       style="width: 20px;height: 20px;"></image>
			<image v-if="post.reacted_by_me" src="@/static/icons/heart-3-fill.png"
			       style="width: 20px;height: 20px;"></image>
			<text style="margin-left: 5px;font-size: 10pt;margin-right: 15px;">{{ post.reactions_count }}</text>
			<image src="@/static/icons/discuss-fill.png"
			       style="width: 20px;height: 20px;"></image>
			<text style="margin-left: 5px;font-size: 10pt;">{{ post.reactions_count }}</text>
		</view>

		<view style="margin-top: 50px;">
			<u-row v-for="comment in post.comments" :key="comment.id" style="border: 0.5px lightgrey solid;padding: 10px;margin: 10px 0;">
				<u-avatar size="30" :src="comment.avatar" style="margin-right: 10px;"></u-avatar>
				{{ comment.content }}
			</u-row>
		</view>

		<view
			style="border-top:0.5px lightgrey solid;position: fixed; bottom: 0;right: 0;left: 0;display: flex;flex-direction: row;align-items:center;padding: 10px;">
			<u-avatar size="30" :src="me.avatar" style="margin-right: 10px;"></u-avatar>

			<u--input
				placeholder="留言...."
				border="surround"
				v-model="comment"
				@confirm="sendComment"
				confirmType="send"

			></u--input>
			<image @click="sendComment" src="@/static/icons/send-plane-fill.png" style="width: 30px;height: 30px;"></image>
		</view>
	</view>
</template>

<script>
import request from "../../common/request";
import moment from "../../common/moment";

export default {
	name: "show",
	data() {
		return {
			post: {},
			me: {},
			comment: ''
		}
	},
	onLoad(options) {
		const that = this
		that.me = uni.getStorageSync('user')
		request({
			url: `/api/posts/${options.post}?with=comments`,
			auth: true,
			success(res) {
				if (res.statusCode !== 200) {
					uni.showToast({
						title: res.data.message,
						icon: "error"
					})
				} else {
					that.post = res.data
					uni.setNavigationBarTitle({
						title: res.data.title
					})
				}
			}
		})
	},
	methods: {
		moment,
		sendComment() {
			const that = this
			const content = this.comment
			request({
				url: `/api/posts/${that.post.id}/comments`,
				method: "POST",
				auth: true,
				data: {content},
				success(res) {
					if (res.statusCode !== 200) {

					} else {
						that.comment = ''
						that.post.comments = res.data.data
					}
				}
			})
		}
	}
}
</script>

<style scoped>

.content {
	text-align: center;
	height: calc(100vh - var(--window-bottom));
	background-color: rgb(250, 250, 250);
	padding: 20px;
}

.bg-purple {
	background: #CED7E1;
}

.bg-purple-light {
	background: #e5e9f2;
}

.bg-purple-dark {
	background: #99a9bf;
}
</style>