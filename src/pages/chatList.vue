<template>
	<uni-list>
		<template v-for="chat in chats">
			<uni-list-item
				:key="chat.id"
				:title="getRoomName(chat.conversation.participants)"
				:note="chat.conversation.last_message || '尚無訊息'"
				showArrow
				thumb="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"
				thumb-size="lg"
				:rightText="moment(chat.updated_at).fromNow()"
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
			options: []
		}
	},
	onLoad() {
		this.fetch()
	},
	methods: {
		fetch() {
			const that = this
			request({
				url: '/api/chat_list',
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
		getRoomName(participants) {
			return participants.filter(x => x.messageable.id !== JSON.parse(uni.getStorageSync('user')).id)[0].messageable.name
		},
		moment
	},
	components: {UniList, UniListItem}
}
</script>

<style scoped>

.chat-custom-text {
	font-size: 24rpx;
	color: #999;
}
</style>