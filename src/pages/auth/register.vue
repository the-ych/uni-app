<template>
	<view class="content">
		<view style="margin-top: 30rpx;margin-left: 30rpx;margin-right: 30rpx;">
			<uni-steps :options="steps" :active="currentStep"></uni-steps>

			<uni-forms ref="form" :modelValue="formData" :rules="rules" style="margin-top: 50rpx;">
				<view v-if="currentStep === 0">
					<uni-forms-item label="信箱" name="email">
						<uni-easyinput type="text" v-model="formData.email" placeholder="請輸入電子郵件" />
					</uni-forms-item>
					<uni-forms-item label="密碼" name="password">
						<uni-easyinput type="password" v-model="formData.password" placeholder="請輸入密碼" />
					</uni-forms-item>
				</view>
				<view v-if="currentStep === 1">
					<uni-forms-item label="姓名" name="name">
						<uni-easyinput type="text" v-model="formData.name" placeholder="請輸入您的姓名" />
					</uni-forms-item>
					<uni-forms-item label="性別" name="gender">
						<uni-data-picker placeholder="選擇你的性別" popup-title="請選擇性別" :localdata="genderSelection"
							v-model="formData.gender">
						</uni-data-picker>
					</uni-forms-item>
				</view>
				<view v-if="currentStep === 2">
					<uni-card title="選擇要顯示的照片" :isFull="true">
						<view style="padding: 10px;padding-top: 0;">
							<uni-file-picker fileMediatype="image" ref="imageUploader" limit="3" title="最多3張照片"
								mode="grid" :autoUpload="false" @select="selectImg($event)" @delete="delImg($event)">
							</uni-file-picker>
						</view>
					</uni-card>
				</view>
			</uni-forms>
		</view>

		<view style="width: auto;position:fixed;bottom:0;left: 5rpx;right: 5rpx;">
			<button @click="currentStep--" v-if="currentStep!==0" class="action-button">上一步</button>
			<button @click="currentStep++" v-if="currentStep!==steps.length-1" class="action-button">下一步</button>
			<button type="primary" @click="submit" v-if="currentStep===steps.length-1" class="action-button">提交</button>
		</view>
	</view>
</template>

<script>
	const config = require('../../config.json')
	export default {
		data() {
			return {
				title: '登入 / 註冊',
				genderSelection: [{
					value: '男',
					text: "男生"
				}, {
					value: '女',
					text: "女生"
				}],
				formData: {
					name: '',
					email: '',
					password: '',
					gender: '男'
				},
				rules: {
					name: {
						rules: [{
								required: true,
								errorMessage: '請輸入姓名',
							},
							{
								minLength: 2,
								maxLength: 4,
								errorMessage: '名字長度在 2 ~ 4 個字才正常',
							}
						]
					},
					// 对email字段进行必填验证
					email: {
						rules: [{
							format: 'email',
							errorMessage: '請輸入正確的電子信箱',
						}]
					},
					password: {
						rules: [{
							required: true,
							errorMessage: '請輸入密碼',
						}]
					},
					gender: {
						rules: [{
							required: true,
							errorMessage: '請選擇性別',
						}]
					}
				},
				images: [],
				steps: [{
					title: '帳號資料'
				}, {
					title: '基本資料'
				}, {
					title: '上傳照片'
				}],
				currentStep: 0,
				device_name: '',
			}
		},
		onLoad(options) {
			this.formData.email = options.email
			this.formData.password = options.password

			uni.getSystemInfo({
				success: (res) => {
					this.device_name = (res.brand ? res.brand : '') + (res.model ? res.model : '') + ' ' + (res
						.deviceId ? res.deviceId : '')
				}
			})
		},
		methods: {
			submit() {
				const {
					name,
					email,
					gender,
					password
				} = this.formData
				uni.showLoading({
					title: '上傳中'
				})
				uni.request({
					url: config.endpoint + '/api/auth/register',
					header: {
						'Accept': 'application/json'
					},
					method: "POST",
					data: {
						name,
						email,
						password,
						gender,
						device_name: this.device_name
					},
					success: (res) => {
						if (res.statusCode === 200) {
							uni.setStorageSync('access_token', res.data.access_token)
							uni.setStorageSync('name', name)

							let image_uploaded = 0
							const image_length = this.images.length
							this.images.forEach((image) => {
								uni.uploadFile({
									url: config.endpoint + '/api/photo',
									header: {
										'Accept': 'application/json',
										'Authorization': `Bearer ${uni.getStorageSync('access_token')}`
									},
									filePath: image,
									name: "photo",
									complete(){
										if(image_uploaded === image_length - 1) {
											uni.switchTab({
												url: '/pages/me?action=toast&message=註冊成功'
											})
										} else {
											image_uploaded++;
										}
									},
									fail(res){
										alert('error')
									}
								})
							})
						} else {
							alert('error' + res.data.message)

							uni.hideLoading({
								title: '上傳中'
							})
						}
					},
					fail: (res) => {
						alert('error' + res)

						uni.hideLoading({
							title: '上傳中'
						})
					}
				})
				// TODO: 上傳圖片
			},
			selectImg(e) {
				this.images = this.images.concat(e.tempFilePaths)
			},
			delImg(e) {
				this.images = this.images.filter(item => item !== e.tempFilePath)
			}
		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
		padding: 10rpx;
	}

	.action-button {
		margin: 20rpx;
	}
</style>
