import App from './App.vue'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()

// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'

// #ifdef H5
import './registerServiceWorker'
// #endif

export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif