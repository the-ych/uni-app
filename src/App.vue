<script>
import Echo from 'laravel-echo-uni';
export default {
	onLaunch: function () {
		console.log('App Launch');
		
		this.globalData.Pusher = require('pusher-js');
		this.globalData.Echo = new Echo({
			broadcaster: 'pusher',
			wsHost: process.env.VUE_APP_WS_HOST,
			wsPort: 6001,
			key: process.env.VUE_APP_PUSHER_APP_KEY,
			cluster: process.env.VUE_APP_PUSHER_APP_CLUSTER,
			forceTLS: false
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

<style>
/*每个页面公共css */
</style>
