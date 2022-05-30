<template>
	<scroll-view style="padding-bottom: 500rpx;">
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

		<uni-group title="我想找" style="padding-bottom: 300rpx;">
			<uni-forms ref="settingsFormRef" :modelValue="settingsForm">

				<uni-forms-item label="學校下限" name="school_min">
					<uni-data-select
						v-model="settingsForm.school_min"
						:localdata="schoolRankSelect"
						placeholder="請選擇學校下限"
						@change="showSettingsUpdate"
					></uni-data-select>
				</uni-forms-item>
				<uni-forms-item label="學校上限" name="school_max">
					<uni-data-select
						v-model="settingsForm.school_max"
						:localdata="schoolRankSelect"
						placeholder="請選擇學校上限"
						@change="showSettingsUpdate"
					></uni-data-select>
				</uni-forms-item>
			</uni-forms>
			<button v-if="update_settings_show" @click="updateSettings">更新找尋資料</button>
		</uni-group>
	</scroll-view>
</template>

<script>
import UniEasyinput from "../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput";
import request from "../common/request";
import UniIcons from "../uni_modules/uni-icons/components/uni-icons/uni-icons";
import UniListItem from "../uni_modules/uni-list-item/uni-list-item";
import UniList from "../uni_modules/uni-list/uni-list";
import UniDataSelect from "../uni_modules/uni-data-select/components/uni-data-select/uni-data-select";

export default {
	name: "profile",
	components: {
		UniListItem,
		UniIcons,
		UniEasyinput,
		UniList,
		UniDataSelect
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
			schoolRankSelect: [
				{value: 0, text: '臺大'},
				{value: 1, text: '清交'},
				{value: 2, text: '醫學'},
				{value: 3, text: '頂大'},
				{value: 4, text: '師範'},
				{value: 5, text: '四中'},
				{value: 6, text: '國立大學'},
			],
			settingsForm: {},
			settingsRules: {
				school_min: {
					rules: [{
						validateFunction: function (rule, value, data, callback) {
							// 這邊會這樣寫是因為 越好的學校數值越小
							if (data.school_max > data.school_min) {
								callback('請勿讓上限低於下限')
							}
							return true
						}
					}]
				},
				school_max: {
					rules: [{
						validateFunction: function (rule, value, data, callback) {
							if (data.school_max > data.school_min) {
								callback('請勿讓上限低於下限')
							}
							return true
						}
					}]
				},
			},
			user_school: '',
			update_profile_show: false,
			update_settings_show: false
		}
	},
	onReady() {
		this.$refs.settingsFormRef.setRules(this.settingsRules)
	},
	methods: {
		showProfileUpdate() {
			this.update_profile_show = true
		},
		showSettingsUpdate() {
			this.update_settings_show = true
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
		updateSettings() {
			this.$refs.settingsFormRef.validate().then(() => {
				const {
					school_max,
					school_min
				} = this.settingsForm
				request({
					url: '/api/settings/update',
					data: {
						school_max,
						school_min
					},
					method: "POST",
					success(res) {
						uni.setStorageSync('user', res.data.data)
						uni.showToast({
							title: '更新成功'
						})
					}
				})
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
				that.settingsForm = me.setting
				that.user_school = me.school ?? '尚無填寫學校或仍在審核'
				setTimeout(() => that.update_profile_show = false, 100)
				setTimeout(() => that.update_settings_show = false, 100)
			}
		})
	}
}
</script>