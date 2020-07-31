import wepy from 'wepy'
import config from '../config.js'

// 合并对象
function extend(target, source) {
    // 下面循环的方式是在target上追加source的键值对，如果两者都存在相同的键，则保留值大的
    for (var key in source) {
        if (target[key] >= source[key]) {
            target[key] = target[key]
        } else {
            // esle的条件为target不存在该键或该键值空
            target[key] = source[key]
        }
    }
    return target
}

export default function (params, header) {
    if (params.data === undefined || !params.data) {
        delete params.data
    }

    if (config.hasOwnProperty('version')) {
        if (params.url.indexOf('?') !== -1) {
            params.url = config.api + params.url + '&version=' + config.version
        } else {
            params.url = config.api + params.url + '?version=' + config.version
        }
    } else {
        params.url = config.api + params.url
    }
    let userinfo = wepy.getStorageSync('userinfo')
    let token = userinfo.token || ''
    params.header = {
        'Authorization': token,
        'content-type': 'application/x-www-form-urlencoded'
    }

    // 请求头的设置支持
    if (header) {
        params.header = extend(params.header, header)
    }

    // 匿名函数,修改为同步请求
    return (async function () {
        let result = await wepy.request(params)
        if (result.statusCode !== 200) {
            wepy.showToast({
                title: '网络错误',
                icon: 'none',
                duration: 2000
            })
            return ''
        } else {
            if (result.data.code === 101) {
                // 重新调取登录
                let loginInfo = await wepy.login()
                let param2 = {
                    url: config.api + '/user/login?version=' + config.version,
                    data: {
                        code: loginInfo.code
                    },
                    method: 'POST'
                }
                console.log('重新发起请求')
                // 重新发送请求
                let response2 = await wepy.request(param2)
                if (response2 && response2.data.code === 200) {
                    wepy.setStorageSync('userinfo', response2.data.data)
                    params.header = {
                        'Authorization': response2.data.data.token,
                        'content-type': 'application/x-www-form-urlencoded'
                    }
                    let result2 = await wepy.request(params)
                    if (result2.statusCode !== 200) {
                        wepy.showToast({
                            title: '网络错误',
                            icon: 'none',
                            duration: 2000
                        })
                        return ''
                    } else {
                        return result2.data
                    }
                } else {
                    wepy.showToast({
                        title: response2.msg,
                        icon: 'none'
                    })
                    return ''
                }
            }

            return result.data
        }
    }())
}
