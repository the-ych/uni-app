<template>
	<view class="content">
		<view style="margin-top: 30rpx;margin-left: 30rpx;margin-right: 30rpx;">
			<uni-forms ref="form" :modelValue="formData" :rules="rules" style="margin-top: 50rpx;">
				<uni-forms-item label="學校" name="name" required>
					<uni-easyinput type="text" v-model="formData.name" placeholder="請輸入您的學校" suffix-icon="false"/>
				</uni-forms-item>
				<uni-forms-item label="系名" name="department" required>
					<uni-easyinput type="text" v-model="formData.department" placeholder="請輸入您的「系」名稱"
					               suffix-icon="false"/>
				</uni-forms-item>
				<uni-forms-item label="教育程度" name="department" required>
					<uni-data-checkbox placeholder="選擇你的教育程度" v-model="formData.level" :localdata="levelSelection"/>
				</uni-forms-item>
				<uni-card title="上傳學生證圖片" :isFull="true">
					<view style="padding: 10px;padding-top: 0;">
						<uni-file-picker fileMediatype="image" ref="imageUploader" limit="1" title="最多1張證明"
						                 mode="grid" :autoUpload="false" @select="selectImg($event)"
						                 @delete="delImg($event)">
						</uni-file-picker>
					</view>
				</uni-card>
			</uni-forms>
		</view>

		<view style="width: auto;position:fixed;bottom:0;left: 5rpx;right: 5rpx;">
			<button type="primary" @click="submit" class="action-button">提交申請</button>
		</view>
	</view>
</template>

<script>
import UniCard from "../../uni_modules/uni-card/components/uni-card/uni-card";

export default {
	data() {
		return {
			levelSelection: [{
				value: '高中',
				text: "高中"
			}, {
				value: '學士',
				text: "學士"
			}, {
				value: '碩士',
				text: "碩士"
			}, {
				value: '博士',
				text: "博士"
			}],
			formData: {
				name: '',
				department: '',
				level: ''
			},
			rules: {
				name: {
					rules: [
						{
							required: true,
							errorMessage: '請輸入學校名稱',
						}
					]
				},
				department: {
					rules: [{
						required: true,
						errorMessage: '請輸入系所名稱',
					}]
				},
				level: {
					rules: [{
						required: true,
						errorMessage: '請選擇教育程度',
					}]
				}
			},
			image: null,
		}
	},
	components: {
		UniCard
	},
	methods: {
		submit() {
			this.$refs.form.validate();
			const {
				name,
				department,
				level
			} = this.formData

			if (this.image === null) {
				uni.showToast({
					title: '上傳證明才能申請',
					icon: 'error'
				})
				return
			}

			uni.showLoading({
				title: '上傳中'
			})
			console.log(1)
			uni.uploadFile({
				url: process.env.VUE_APP_API_ENDPOINT + '/api/prove/school',
				header: {
					'Accept': 'application/json',
					'Authorization': `Bearer ${uni.getStorageSync('access_token')}`
				},
				filePath: this.image,
				name: "proof",
				formData: {
					name,
					department,
					level,
				},
				success(res) {
					if(res.statusCode !== 200) {
						uni.hideLoading()
						uni.showToast({
							title: res.data,
							icon: "error",
							mask: true
						})
						return 
					}
					uni.reLaunch({
						url: '/pages/me?action=toast&message=已提交申請'
					})
				},
				fail(res) {
					uni.showToast({
						title: res,
						icon: "error",
						mask: true
					})
				}
			})
		},
		selectImg(e) {
			console.log(e)
			this.image = e.tempFilePaths[0]
		},
		delImg(e) {
			this.image = null
		}
	}
}
</script>

<style>
.content {
	text-align: center;
	height: 400rpx;
	padding: 10rpx;
}

.action-button {
	margin: 20rpx;
}
</style>
