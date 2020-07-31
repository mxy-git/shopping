import wepy from 'wepy'
export async function getAlbumInfo() {
    let setting = await wepy.getSetting()
    if (!setting.authSetting['scope.writePhotosAlbum']) {
        let res = await wepy.authorize({ scope: 'scope.writePhotosAlbum' }).catch(function (r) {
            return r
        })
        if (res.errMsg === 'authorize:ok') {
            return true
        } else {
            let res = wx.getSystemInfoSync()
            if (compareVersion(res.SDKVersion, '1.1.0') === -1) {
                wx.showModal({
                    title: '提示',
                    content: '版本过低请升级微信',
                    showCancel: false
                })
                return false
            } else {
                wepy.hideToast()
                console.log(res.SDKVersion, compareVersion(res.SDKVersion, '2.7.7'))
                if (compareVersion(res.SDKVersion, '2.7.7') === -1) {
                    wx.showModal({
                        title: '提示',
                        content: '需要您授权 [使用相册] 的权限',
                        confirmText: '去授权',
                        confirmColor: '#f67f43',
                        cancelText: '放弃',
                        cancelColor: '#666',
                        success(res) {
                            console.log(res)
                            if (res.confirm) {
                                wx.openSetting({
                                    success(res) {
                                        if (res.authSetting['scope.writePhotosAlbum'] === true) {
                                            console.log(true)
                                        } else {
                                            console.log(false)
                                        }
                                    }
                                })
                            }
                        }
                    })
                    return false
                } else {
                    let act = await wepy.showModal({
                        title: '提示',
                        content: '需要您授权 [使用相册] 的权限',
                        confirmText: '去授权',
                        confirmColor: '#f67f43',
                        cancelText: '放弃',
                        cancelColor: '#666'
                    })
                    console.log(act)
                    if (act.confirm) {
                        let setting = await wepy.openSetting()
                        console.log(setting)
                        if (setting.authSetting['scope.writePhotosAlbum'] === true) {
                            return true
                        } else {
                            return false
                        }
                    } else {
                        return false
                    }
                }
            }
        }
    } else {
        return true
    }
}

export function compareVersion(v1, v2) {
    v1 = v1.split('.')
    v2 = v2.split('.')
    const len = Math.max(v1.length, v2.length)

    while (v1.length < len) {
        v1.push('0')
    }
    while (v2.length < len) {
        v2.push('0')
    }

    for (let i = 0; i < len; i++) {
        const num1 = parseInt(v1[i])
        const num2 = parseInt(v2[i])

        if (num1 > num2) {
            return 1
        } else if (num1 < num2) {
            return -1
        }
    }

    return 0
}

// 转换
export function querystring2obj(url) {
    let queryArr = (url && url.split('&'))
    let query = {}
    for (var i = 0, len = queryArr.length; i < len; i++) {
        let key = queryArr[i].split('=')[0]
        let val = queryArr[i].split('=')[1]
        if (query.hasOwnProperty(key)) {
            if (!Array.isArray(query[key])) {
                query[key] = [query[key]]
                query[key].push(val)
            } else {
                query[key].push(val)
            }
            continue
        }
        query[key] = val
    }
    return query
}

// serialize
export function serialize(obj) {
    let str = []
    for (var item in obj) {
        if (obj.hasOwnProperty(item)) {
            str.push(encodeURIComponent(item) + '=' + encodeURIComponent(obj[item]))
        }
    }
    return str.join('&')
}

// 格式化时间
export function formatTime(time) {
    var hh = parseInt(time / 60 / 60 % 24, 10) // 计算剩余的小时数
    var mm = parseInt(time / 60 % 60, 10) // 计算剩余的分钟数
    var ss = parseInt(time % 60, 10) // 计算剩余的秒数

    if (hh < 10) {
        hh = '0' + hh
    }

    if (mm < 10) {
        mm = '0' + mm
    }

    if (ss < 10) {
        ss = '0' + ss
    }

    return {
        h: hh,
        m: mm,
        s: ss
    }
}
