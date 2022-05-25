<template>
	<uni-list>
		<uni-list-item
			v-for="chat in chats" :key="chat.id"
			:title="chat.name"
			:note="chat.lastMessage"
			showArrow
			thumb="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"
			thumb-size="lg"
			:rightText="chat.updated_at"
		/>
	</uni-list>
</template>

<script>
import UniList from "../uni_modules/uni-list/uni-list";
import UniListItem from "../uni_modules/uni-list-item/uni-list-item";

export default {
	name: "chatList",
	data() {
		return {
			chats: [
				{
					chat_type: 'user',
					noreadnum: '',
					data: '',
					name: 'test',
					id: '566',
					avatar: '',
					lastMessage:'笨蛋： 我是笨蛋',
					updated_at: '十分鐘前'
				}
			],
			options: []
		}
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