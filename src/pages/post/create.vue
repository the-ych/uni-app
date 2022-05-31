<template>
	<view>
		<UniNoticeBar show-icon scrollable
		              text="網路非法外之地，文明發言，拒絕網路造謠；相互尊重，拒絕惡意引戰。"/>

		<view class="content">

			<view style="height: 100rpx;margin-bottom: 30rpx;display: flex;align-items: center;">
				<image :src="me.avatar" class="rounded" style="height: 100rpx;width: 100rpx;"/>
				<text style="margin-left: 30rpx;">{{ me.name }}</text>
			</view>

			<uni-forms ref="form" :model-value="formData" :rules="rules">
				<uni-forms-item label="類型" required>
					<UniSegmentedControl :current="formData.anonymous" :values="['發文', '匿名發問']" styleType="button"
					                     activeColor="#4cd964"></UniSegmentedControl>
				</uni-forms-item>
				<uni-forms-item label="標題" required>
					<uni-easyinput v-model="formData.title" placeholder="文章標題" suffix-icon="false"></uni-easyinput>
				</uni-forms-item>
				<uni-easyinput type="textarea" v-model="formData.content" placeholder="發文內容" suffix-icon="false"
				               auto-height/>
				<button style="font-size: 14pt;margin-top: 30rpx;" @click="submitPost">新增貼文</button>
			</uni-forms>
		</view>
	</view>
</template>

<script>
import UniForms from "../../uni_modules/uni-forms/components/uni-forms/uni-forms";
import UniFormsItem from "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item";
import UniEasyinput from "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput";
import UniNoticeBar from "../../uni_modules/uni-notice-bar/components/uni-notice-bar/uni-notice-bar";
import UniSegmentedControl
	from "../../uni_modules/uni-segmented-control/components/uni-segmented-control/uni-segmented-control";
import request from "../../common/request";

export default {
	components: {UniSegmentedControl, UniNoticeBar, UniForms, UniFormsItem, UniEasyinput},
	data() {
		return {
			formData: {},
			rules: {},
			me: {
				profile: {}
			}
		}
	},
	onLoad(options) {
		this.formData.anonymous = Number(options.anonymous ?? 0)
		this.me = uni.getStorageSync('user')
	},
	methods: {
		submitPost() {
			request({
				url: '/api/posts',
				method: "POST",
				auth: true,
				data: this.formData,
				success(res) {
					if(res.statusCode !== 200){
						console.log(res.data.message)
					} else {
						uni.reLaunch({
							url: '/pages/me?action=toast&message=發文成功'
						})
					}
				}
			})
		}
	}
}
</script>

<style>
.content {
	text-align: center;
	height: 400rpx;
	margin: 20rpx;
}
</style>
