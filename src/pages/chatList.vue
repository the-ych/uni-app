<template>
	<uni-list>
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
		this.me = JSON.parse(uni.getStorageSync('user'))
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
				lastMessage.body ? lastMessage.sender.name + ': ' + lastMessage.body : '尚無訊息'
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