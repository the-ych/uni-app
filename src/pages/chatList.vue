<template>
	<view>
		<uni-list v-if="chats.length">
			<template v-for="chat in chats">
				<uni-list-item
					:key="chat.id"
					:title="getFriend(chat.conversation.participants).name"
					:note="makeNote(chat.conversation.last_message)"

					:thumb="getFriend(chat.conversation.participants).avatar"
					thumb-size="lg"
					thumb-style="border-radius: 50%;"
					:badge-text="String(unreadCount[chat.conversation.id].unread_count)"
					badge-type="error"
					:rightText="moment(chat.updated_at).fromNow()"
					right-text-style="font-size: 20rpx;"
					show-badge
					@click="goto(chat)"
				/>
			</template>
		</uni-list>

		<view v-if="chats.length===0" style="margin-top: 50%;display: flex; align-self: center;flex-direction: column;justify-content: center;align-items: center">
			<image src="@/static/images/logo.png"/>
			<text class="uni-h6 block">目前沒有人陪你聊天ＱＱ</text>
			<text class="uni-h6 block">請持續翻翻卡</text>
		</view>
	</view>
</template>

<script>
import UniList from "../uni_modules/uni-list/uni-list";
import UniListItem from "../uni_modules/uni-list-item/uni-list-item";
import request from "../common/request";
import moment from "moment";
import 'moment/locale/zh-tw';

moment.locale('zh-tw');

export default {
	name: "chatList",
	data() {
		return {
			chats: [],
			unreadCount: {},
			options: [],
			me: {}
		}
	},
	onLoad() {
		try {
			this.me = uni.getStorageSync('user')
		} catch (e) {
			uni.reLaunch({
				url: '/pages/me?action=toast&message=您尚未登入&type=error'
			})
		}
		this.fetch()
	},
	methods: {
		fetch() {
			const that = this
			request({
				url: '/api/chat/list',
				auth: true,
				success(res) {
					if (res.statusCode !== 200) {
						console.log(res.data.message)
					} else {
						that.unreadCount = res.data[1]
						that.chats = res.data[0].data
					}
				}
			})
		},
		makeNote(lastMessage) {
			return (
				lastMessage?.body ? lastMessage.sender.name + ': ' + lastMessage.body : '尚無訊息'
			)
		},
		getFriend(participants) {
			return participants.filter(x => x.messageable.id !== this.me.id)[0].messageable
		},
		goto(chat) {
			const friend = this.getFriend(chat.conversation.participants)
			uni.navigateTo({
				url: `/pages/chat?id=${chat.conversation_id}&friend=${JSON.stringify(friend)}`
			})
		},
		moment
	},
	components: {UniList, UniListItem}
}
</script>

<style scoped>
</style>