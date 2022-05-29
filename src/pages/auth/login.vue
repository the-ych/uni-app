<template>
	<view class="content">
		<image
			style="position: absolute;z-index: -1;left: 0;right: 0;bottom: 0;width: 100%;height: 100%;"
			src="@/static/images/bg.jpg"
		/>
		<view style="margin-top: 50%;">
			<image src="@/static/images/logo.png"/>
		</view>

		<view style="margin-top: 30rpx;margin-left: 30rpx;margin-right: 30rpx;background-color: lightblue;padding: 30rpx;border-radius: 30rpx;">

			<uni-forms ref="form" :modelValue="formData" :rules="rules">
				<uni-forms-item label="信箱" name="email">
					<uni-easyinput type="text" v-model="formData.email" placeholder="請輸入電子信箱"/>
				</uni-forms-item>
				<uni-forms-item label="密碼" name="password">
					<uni-easyinput type="password" v-model="formData.password" placeholder="請輸入密碼" @confirm="submit"/>
				</uni-forms-item>
				<button @click="submit">登入 / 註冊</button>
			</uni-forms>

		</view>
		<uni-popup ref="askRegisterDialog" type="dialog">
			<uni-popup-dialog type="error" cancelText="取消" confirmText="註冊" title="帳號不存在" content="您輸入的帳號不存在,請註冊或重新輸入"
			                  @confirm="dialogConfirm" @close="dialogClose"></uni-popup-dialog>
		</uni-popup>
	</view>
</template>

<script>
export default {
	data() {
		return {
			formData: {
				name: '',
				email: '',
				password: ''
			},
			device_name: '',
			rules: {
				email: {
					rules: [{
						required: true,
						format: 'email',
						errorMessage: '請輸入正確的信箱',
					}]
				},
				password: {
					rules: [{
						required: true,
						errorMessage: '請輸入密碼',
					}]
				}
			}
		}
	},
	onLoad() {
		uni.getSystemInfo({
			success: (res) => {
				this.device_name = (res.brand ? res.brand : '') + (res.model ? res.model : '') + ' ' + (res
					.deviceId ? res.deviceId : '')
			}
		})
	},
	methods: {
		submit() {
			this.$refs.form.validate().then(res => {

				const {
					email,
					password
				} = this.formData
				console.log(this.device_name)
				uni.request({
					url: process.env.VUE_APP_API_ENDPOINT + '/api/auth/login',
					header: {
						'Accept': 'application/json'
					},
					method: "POST",
					data: {
						email,
						password,
						device_name: this.device_name
					},
					success: (res) => {
						if (res.statusCode === 401 && res.data.error === 'auth/invalid-account') {
							this.$refs.askRegisterDialog.open()
						} else if (res.statusCode === 200) {
							uni.setStorageSync('access_token', res.data.access_token)
							uni.setStorageSync('user', res.data.data)
							uni.reLaunch({
								url: '/pages/me?action=toast&message=登入成功'
							});
						} else {
							uni.showToast({
								title: res.data.message,
								icon: "error",
								mask: true
							})
						}
					},
					fail: (res) => {
						uni.showToast({
							title: res,
							icon: "error",
							mask: true
						})
					}
				})
			}).catch(err => {
				console.log('表单错误信息：', err);
			})
		},
		dialogClose() {
			this.$refs.askRegisterDialog.close()
		},
		dialogConfirm() {
			uni.navigateTo({
				url: `/pages/auth/register?email=${this.formData.email}&password=${this.formData.password}`
			})
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
</style>
