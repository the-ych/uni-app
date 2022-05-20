const request = function (options) {
    options.url = process.env.VUE_APP_API_ENDPOINT + options.url;

    try {
        const token = uni.getStorageSync('access_token');
        if (token) {
            options.header = {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            };
        } else {
            if (options.auth && options.auth === true) {
                uni.reLaunch({
                    url: '/pages/me?action=toast&message=您尚未登入&type=error'
                })
                return;
            }
        }
    } catch (err) {
        console.log(err)
    }

    options.complete = (response) => {
        if (response.statusCode === 401) {
            uni.removeStorageSync('access_token')
            uni.reLaunch({
                url: '/pages/me?action=toast&message=您尚未登入&type=error'
            })
        }
    }

    if (!options.fail) {
        options.fail = (e) => {
            uni.showToast({
                title: e,
                icon: "error",
                mask: true
            })
        }
    }
    return uni.request(options);
}
export default request;