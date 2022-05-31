<script>
import Echo from 'laravel-echo-uni';
import request from "./common/request";
import '@/styles/common.css';
export default {
	onLaunch: function () {
		console.log('App Launch');

		this.globalData.Pusher = require('pusher-js');
		this.globalData.Echo = new Echo({
			broadcaster: 'pusher',
			wsHost: process.env.VUE_APP_WS_HOST,
			wsPath: process.env.VUE_APP_WS_PATH,
			wsPort: process.env.VUE_APP_WS_PORT,
			key: process.env.VUE_APP_PUSHER_APP_KEY,
			cluster: process.env.VUE_APP_PUSHER_APP_CLUSTER,
			forceTLS: false,
			authorizer(channel, options) {
				return {
					authorize: (socketId, callback) => {
						request({
							method: "POST",
							auth: false,
							url: '/broadcasting/auth',
							data: {
								socket_id: socketId,
								channel_name: channel.name,
							},
							success(res) {
								callback(false, res.data);
							}
						})
					}
				};
			},
		});

		setTimeout(() => {
			uni.setTabBarBadge({
				index: 1,
				text: '31'
			});
			uni.showTabBarRedDot({
				index: 3
			});
		}, 1000);
	},
	onShow: function () {
		console.log('App Show');
	},
	onHide: function () {
		console.log('App Hide');
	}
};
</script>

<style lang="scss">
/*每个页面公共css */
@import "uview-ui/index.scss";
</style>
