<template>
	<uni-list>
		<template v-for="chat in chats">
			<uni-list-item
				:key="chat.id"
				:title="getFriend(chat.conversation.participants).name"
				:note="chat.conversation.last_message || '尚無訊息'"
				showArrow
				:thumb="getFriend(chat.conversation.participants).avatar"
				thumb-size="lg"
				thumb-style="border-radius: 50%;"
				:rightText="moment(chat.updated_at).fromNow()"
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
			chats: [
				/*{
					chat_type: 'user',
					noreadnum: '',
					data: '',
					name: 'test',
					id: '566',
					avatar: '',
					lastMessage:'笨蛋： 我是笨蛋',
					updated_at: '十分鐘前'
				}*/
			],
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
						that.chats = res.data.data
					}
				}
			})
		},
		getFriend(participants) {
			return participants.filter(x => x.messageable.id !== this.me.id)[0].messageable
		},
		goto(chat){
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