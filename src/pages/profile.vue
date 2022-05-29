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
				<uni-forms-item label="學校" name="school">
					<view style="border: 1rpx grey solid;">
						<uni-list>
							<uni-list-item @click="applySchool" :title="user_school" text-style="font-size: 12pt;"
							               container-style="height: 15rpx;"></uni-list-item>
						</uni-list>
					</view>
				</uni-forms-item>
				<uni-forms-item label="自我介绍" name="introduction" required>
					<uni-easyinput type="textarea" v-model="profileForm.introduction" placeholder="请输入自我介绍"
					               suffix-icon="false"/>
				</uni-forms-item>
			</uni-forms>
			<button v-if="update_profile_show" @click="updateProfile">更新</button>
		</uni-group>

		<uni-group title="我想找">
		</uni-group>
	</scroll-view>
</template>

<script>
import UniEasyinput from "../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput";
import request from "../common/request";
import UniIcons from "../uni_modules/uni-icons/components/uni-icons/uni-icons";
import UniListItem from "../uni_modules/uni-list-item/uni-list-item";
import UniList from "../uni_modules/uni-list/uni-list";

export default {
	name: "profile",
	components: {
		UniListItem,
		UniIcons,
		UniEasyinput,
		UniList
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
			user_school: '',
			update_profile_show: false
		}
	},
	methods: {
		showProfileUpdate() {
			this.update_profile_show = true
		},
		updateProfile() {
			const {
				introduction
			} = this.profileForm
			request({
				url: '/api/profile/update',
				data: {
					introduction
				},
				method: "POST",
				success(res) {
					uni.setStorageSync('user', res.data.data)
					uni.showToast({
						title: '更新成功'
					})
				}
			})
		},
		applySchool() {
			uni.navigateTo({
				url: '/pages/prove/school'
			})
		}
	},
	onLoad() {
		const that = this
		request({
			url: '/api/user',
			success(res) {
				const me = res.data;
				uni.setStorageSync('user', me)
				that.me = me
				that.profileForm = me.profile
				that.user_school = me.school ?? '尚無填寫學校或仍在審核'
				setTimeout(() => that.update_profile_show = false, 100)
			}
		})
	}
}
</script>