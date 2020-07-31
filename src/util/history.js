import wepy from 'wepy'
// 1,2,3,4
// 获取搜索历史
export function get() {
    let history = wepy.getStorageSync('search_history')
    console.log(history)
    if (!history) {
        return []
    } else {
        // 4,3,2,1
        return history.reverse()
    }
}

// 清除搜索历史
export function clear() {
    wepy.removeStorageSync('search_history')
    return []
}

// 设置搜索历史
export function set(keywords) {
    // 4,3,2,1
    let history = get()
    if (history.length >= 3) {
        // 4,3,2
        history.pop()
        // 2,3,4
        history.reverse()
        // 2,3,4,5
        history.push(keywords)
        // 2,3,4,5
        wepy.setStorageSync('search_history', history)
    } else {
        // 1,2,3
        history.reverse()
        // 1,2,3,4
        history.push(keywords)
        wepy.setStorageSync('search_history', history)
    }

    // 5,4,3,2
    return history.reverse()
}
