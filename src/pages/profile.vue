<template>
	<scroll-view>
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6 block">為了讓您在使用 YCH 時體驗更好、匹配到更適合的人，請您務必詳細填寫</text>
			<view class="text-small">可以參考
				<uni-link class="ml-small-space" href="https://policy.hsuan.app" text="隱私權政策"/>
			</view>
		</uni-card>

		<uni-group title="個人資料">
			<uni-forms :modelValue="profileForm" @validate="showProfileUpdate" :rules="profileRules">
				<uni-forms-item label="姓名" name="name">
					<uni-easyinput type="text" v-model="me.name" disabled suffix-icon="false"
					               :input-border="false" :styles="{disableColor: 'white'}"/>
				</uni-forms-item>
				<uni-forms-item label="性別" name="gender">
					<uni-easyinput type="text" v-model="me.gender" disabled suffix-icon="false"
					               :input-border="false" :styles="{disableColor: 'white'}"/>
				</uni-forms-item>
				<uni-forms-item label="自我介绍" name="introduction" required>
					<uni-easyinput type="textarea" v-model="profileForm.profile.introduction" placeholder="请输入自我介绍"
					               suffix-icon="false"/>
				</uni-forms-item>
			</uni-forms>
			<button v-if="update_profile_show">更新</button>
		</uni-group>

		<uni-group title="我想找">
		</uni-group>
	</scroll-view>
</template>

<script>
import UniEasyinput from "../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput";

export default {
	name: "profile",
	components: {
		UniEasyinput
	},
	data() {
		return {
			me: {},
			profileForm: {},
			profileRules: {
				introduction: {
					required: true
				}
			},
			update_profile_show: false
		}
	},
	methods: {
		showProfileUpdate() {
			this.update_profile_show = true
		}
	},
	onLoad() {
		const me = uni.getStorageSync('user')
		console.log(me)
		this.me = me
		this.profileForm = me
	}
}
</script>