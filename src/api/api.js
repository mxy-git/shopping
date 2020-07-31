import request from '../util/request.js'

/**
 * 获取拼多多小程序信息
 */
export function getPddWeAppInfo(data) {
    return request({
        url: '/duoke/getWeAppPath',
        method: 'get',
        data: data
    })
}

export function error_report(data) {
    return request({
        url: '/system/error_report',
        method: 'post',
        data: data
    })
}

/**
 *  登录
 */
export function completeUserInfo(data) {
    return request({
        url: '/user/complete',
        method: 'POST',
        data: data
    })
}

export function login2(data) {
    return request({
        url: '/user/login',
        method: 'POST',
        data: data
    })
}

export function userIsExist(data) {
    return request({
        url: '/user/isUser',
        method: 'POST',
        data: data
    })
}

/**
 * 注册 - 获取用户pid
 */
export function getPid() {
    return request({
        url: '/user/getUserPid',
        method: 'get'
    })
}
/**
 * 注册 - 注册
 */
export function register() {
    return request({
        url: '/user/register',
        method: 'post'
    })
}

/**
 * 弹窗逻辑
 */
export function coverLogic() {
    return request({
        url: '/index/cover_logic',
        method: 'get'
    })
}

/**
 * 公告消息
 */
export function notice() {
    return request({
        url: '/index/notice',
        method: 'get'
    })
}

/**
 * 完善用户信息
 */
export function login(data) {
    return request({
        url: '/user/code',
        method: 'POST',
        data: data
    })
}

export function isRequire() {
    return request({
        url: '/system/is_require',
        method: 'get'
    })
}

/**
 * 首页 - 获取菜单
 */
export function getIndexTags(data) {
    return request({
        url: '/duoke/tags',
        method: 'get',
        data: data
    })
}
/**
 * 首页 - 获取子菜单
 */
export function apiSubTags(data) {
    return request({
        url: '/duoke/getSubTags',
        method: 'get',
        data: data
    })
}

/**
 * 首页 - 获取banner
 */
export function getIndexBanner() {
    return request({
        url: '/duoke/banner',
        method: 'get'
    })
}

/**
 * 首页 - 获取category
 */
export function getQuicklyStyle(data) {
    return request({
        'url': '/index/actionList',
        'method': 'get',
        'data': data
    })
}

/**
 * 首页获取未读消息的数量
 */
export function getUnReadMessageCount() {
    return request({
        url: '/message/getUnReadMessageCount',
        method: 'post'
    })
}

/**
 * 获取广告
 */
export function getAd() {
    return request({
        url: '/index/ad',
        method: 'get'
    })
}

/**
 * 消息列表,用于消息页面
 */
export function apiMessage(data) {
    return request({
        url: '/message/getList',
        method: 'post',
        data: data
    })
}

/**
 * 首页 - 头条消息列表
 */
export function getIndexDknews() {
    return request({
        url: '/message/indexDkNews',
        method: 'post'
    })
}

/**
 * duoke头条消息列表
 */
export function apiDknewsList(data) {
    return request({
        url: '/message/dknewsList',
        method: 'post',
        data: data
    })
}

/**
 * 官方消息列表
 */
export function officialMassageList(data) {
    return request({
        url: '/message/officialMassageList',
        method: 'post',
        data: data
    })
}

/**
 *消息详情
 */
export function massageDetail(data) {
    return request({
        url: '/message/massageDetail',
        method: 'post',
        data: data
    })
}

/**
 * 文章列表
 */
export function apiArticleList(data) {
    return request({
        url: '/article/articleList',
        method: 'post',
        data: data
    })
}

/**
 * 公告/消息的详情
 */
export function apiMessageDetail(data) {
    return request({
        url: '/article/articleDetail',
        method: 'post',
        data: data
    })
}

/**
 * 拼客学院课堂导航
 */
export function SchoolNav() {
    return request({
        url: '/school/getNav',
        method: 'get'
    })
}

/*
* 拼客学院banner
*/
export function SchooleBanner(data) {
    return request({
        url: '/school/getBanner',
        method: 'get',
        data: data
    })
}

/**
 * 优选菜单
 */
export function apiBestMenu() {
    return request({
        url: '/index/bestMenu',
        method: 'get'
    })
}

/**
 * 优选商品列表
 */
export function apiBestGoodsList(data) {
    return request({
        url: '/index/BestGoodsList',
        method: 'get',
        data: data
    })
}

/**
 * 优选banner
 */
export function apiBestBanner(data) {
    return request({
        url: '/index/bestBanner',
        method: 'get',
        data: data
    })
}

/**
 * 收藏
 */
export function collection(data) {
    return request({
        url: '/user/collection',
        method: 'post',
        data: data
    })
}

/**
 * 取消收藏
 */
export function unCollection(data) {
    return request({
        url: '/user/unCollection',
        method: 'post',
        data: data
    })
}

/**
 * 我的收藏列表
 */
export function getCollectionList(data) {
    return request({
        url: '/user/collectionList',
        method: 'get',
        data: data
    })
}

/**
 * 发现
 */
export function apiGetDiscover(data) {
    return request({
        url: '/discover/getlist',
        method: 'get',
        data: data
    })
}

/**
 * 发现 - 分享计数
 */
export function discoverShare(data) {
    return request({
        url: '/discover/discoverShare',
        method: 'post',
        data: data
    })
}

/**
 * 获取-h5分享二维码
 */
export function getShareH5Qrcode(data) {
    return request({
        url: '/index/discoverShareQrcode',
        method: 'post',
        data: data
    })
}

/**
 * 商品详情 - 根据短链接和商品id获取分享h5的二维码
 */
export function getShareH5QrcodeByLink(data) {
    return request({
        url: '/index/goodsDetailShareQrcodeByLink',
        method: 'post',
        data: data
    })
}

// 生成每日必拼的小程序码
export function getShareWeappQrcode(data) {
    return request({
        url: '/index/getShareWeappQrcode',
        method: 'post',
        data: data
    })
}

/**
 * 获取商品列表
 */
export function getGoodsList(data) {
    let userinfo = wx.getStorageSync('userinfo')
    data.role = userinfo.role || 0
    return request({
        url: '/duoke/goodsList',
        method: 'post',
        data: data
    })
}

/**
 * 首页获取推荐商品
 */
export function getRecommend(data) {
    return request({
        url: '/duoke/index_recommend',
        method: 'post',
        data: data
    })
}

/**
 * 获取商品详情
 */
export function apiGoodsDetail(data) {
    return request({
        url: '/duoke/goodsdetail',
        method: 'post',
        data: data
    })
}

/**
 * 获取推荐商品
 */
export function apiGoodsRecommend(data) {
    return request({
        url: '/duoke/recommend',
        method: 'get',
        data: data
    })
}

/**
 * 获取商品评论
 */
export function apiGetComment(data) {
    return request({
        url: '/system/commentList',
        method: 'post',
        data: data
    })
}

/**
 * 获取店铺列表
 */
export function apiShopList(data) {
    return request({
        url: '/duoke/shopList',
        method: 'get',
        data: data
    })
}

/**
 * 获取好店列表
 */
export function getHaodianList(data) {
    return request({
        url: '/mall/haodian',
        method: 'post',
        data: data
    })
}

/**
 * 获取店铺信息
 */
export function getMallInfo(data) {
    return request({
        url: '/mall/info',
        method: 'post',
        data: data
    })
}

/**
 * 获取品牌类型
 */
export function getPinpaiCategory() {
    return request({
        url: '/mall/pinpai_category',
        method: 'get'
    })
}

/**
 * 获取品牌的列表
 */
export function getPinpaiShopList(data) {
    return request({
        url: '/mall/pinpai_shop',
        method: 'get',
        data: data
    })
}

/**
 * 获取店铺商品列表
 */
export function apiMallGoodsList(data) {
    return request({
        url: '/duoke/getMallGoodsList',
        method: 'post',
        data: data
    })
}

/**
 * 获取今日排行榜
 */
export function apiRank(data) {
    let userinfo = wx.getStorageSync('userinfo')
    data.role = userinfo.role
    return request({
        url: '/duoke/rank',
        method: 'get',
        data: data
    })
}

/**
 * 搜索 - 热门搜索
 */
export function apiHotSearchList() {
    return request({
        url: '/search/hotlist',
        method: 'get'
    })
}

/**
 * 搜索 - 搜索商品
 */
export function apiQuery(data) {
    return request({
        url: '/duoke/goodsList',
        method: 'get',
        data: data
    })
}

/**
 * 分享 - 获取分享内容
 */
export function getShare(data) {
    return request({
        url: '/system/share',
        method: 'get',
        data: data
    })
}

/**
 * 分享 - 邀请好友 - 背景列表
 */
export function getShareBgList() {
    return request({
        url: '/system/getShareBgList',
        method: 'get'
    })
}

/**
 * 分享 - 邀请好友 - 邀请普通用户二维码
 */
export function getInviteUserQrcode() {
    return request({
        url: '/system/getInviteUserQrcode',
        method: 'get'
    })
}

/**
 * 分享 - 邀请好友 - 专属邀请二维码
 */
export function getInviteJoinQrcode() {
    return request({
        url: '/system/getInviteJoinVipQrcode',
        method: 'get'
    })
}

/**
 * 主题 - 主题列表
 */
export function apiThemeList(data) {
    return request({
        url: '/duoke/getThemeList',
        method: 'get',
        data: data
    })
}

/**
 * 主题 - 主题详情
 */
export function getThemeGoodsList(data) {
    return request({
        url: '/duoke/getThemeGoodsList',
        method: 'get',
        data: data
    })
}

// 获取主题的详情
export function getThemeInfo(data) {
    return request({
        url: '/duoke/getThemeInfo',
        method: 'post',
        data: data
    })
}

/**
 * 用户 - 获取用户信息
 */
export function getUserInfo(params) {
    return request({
        url: '/user/getinfo',
        method: 'get',
        data: params
    })
}

/**
 * 用户中心 - 获取导航
 */
export function getUserNavButton(params) {
    return request({
        url: '/system/nav2',
        method: 'get',
        data: params
    })
}

/**
 * 获取简单的收益
 */
export function getProfitSample() {
    return request({
        url: '/user/MePageProfit',
        method: 'get'
    })
}

/**
 * 获取简单的收益
 */
export function getBargainOfMe() {
    return request({
        url: '/user/getBargainOfMe',
        method: 'get'
    })
}

/**
 * 获取详细的收益
 */
export function getProfitDetail() {
    return request({
        url: '/user/meDetailProfit',
        method: 'get'
    })
}

/**
 * 获取用户的订单列表
 */
export function getOrderList(data) {
    return request({
        url: '/user/orderList',
        methods: 'get',
        data: data
    })
}

/**
 * 获取用户余额
 */
export function getUserBalance() {
    return request({
        url: '/user/balance',
        method: 'post'
    })
}

/**
 * 获取用户用户已经用户vip的等级信息
 */
export function getVipInfo() {
    return request({
        url: '/user/level',
        method: 'get'
    })
}
/**
 * 升级拼客长
 */
export function upLevel() {
    return request({
        url: '/user/upLevel',
        method: 'post'
    })
}

/**
 * 提现 - 获取提现描述
 */
export function getWithdrawalDesc() {
    return request({
        url: '/system/getWithdrawalDesc',
        method: 'get'
    })
}

/**
 * 提现 - 提现操作
 */
export function withdraw(data) {
    return request({
        url: '/user/withdraw',
        method: 'post',
        data: data
    })
}
/**
 * 提现列表
 */
export function withdrawalList(data) {
    return request({
        url: '/user/withdrawalList',
        method: 'post',
        data: data
    })
}

// 获取好友列表
export function getFriendsList(param) {
    return request({
        url: '/user/getFriendsList',
        method: 'post',
        data: param
    })
}

// 获取好友数量
export function getFriendsCount() {
    return request({
        url: '/user/getFriendsCount',
        method: 'get'
    })
}

/**
 * 设置联系方式
 */
export function setConnect(data) {
    return request({
        url: '/user/setConnect',
        method: 'post',
        data: data
    })
}
export function getMyConnect() {
    return request({
        url: '/user/getMyConnect',
        method: 'get'
    })
}

export function adredirect() {
    return request({
        url: '/index/adredirect',
        method: 'get'
    })
}

/**
 * 获取客服信息
 */
export function kefuMsg() {
    return request({
        url: '/index/kefuMsg',
        method: 'post'
    })
}

/**
 * 抽奖列表
 */
export function luckList(data) {
    return request({
        url: '/index/lucklist',
        method: 'get',
        data: data
    })
}

/**
 * 抽奖详情
 */
export function luckDetail(data) {
    return request({
        url: '/index/luckDetail',
        method: 'post',
        data: data
    })
}

export function luckJoinCount(data) {
    return request({
        url: '/index/luckJoinCount',
        method: 'get',
        data: data
    })
}

export function luckJoinUser(data) {
    return request({
        url: '/index/luckJoinUser',
        method: 'get',
        data: data
    })
}

export function getWxhao() {
    return request({
        url: '/index/getKefu',
        method: 'get'
    })
}

/**
 * 参与抽奖
 */
export function luckJoin(data) {
    return request({
        url: '/index/luckJoin',
        method: 'post',
        data: data
    })
}

/**
 * 添加抽奖
 */
export function addLuckJoin(data) {
    return request({
        url: '/index/luckJoin',
        method: 'post',
        data: data
    })
}

/**
 * 广告错误上报
 */
export function adError(data) {
    return request({
        url: '/system/adError',
        method: 'post',
        data: data
    })
}

// 获取免单列表
export function mdList() {
    return request({
        url: '/md/getList?debug=1',
        method: 'get'
    })
}

// 获取免单详情
export function mdDetail(data) {
    return request({
        url: '/md/detail',
        method: 'post',
        data: data
    })
}

/**
 * 获取拼多多小程序信息
 */
export function getMdPddWeAppInfo(data) {
    return request({
        url: '/md/getWeAppPath',
        method: 'get',
        data: data
    })
}
/**
 * 获取免单的二维码
 */
export function getMdQrcode(data) {
    return request({
        url: '/md/getMdQrcode',
        method: 'get',
        data: data
    })
}

export function getBargainList(data) {
    return request({
        url: '/bargain/getBargainList',
        method: 'get',
        data: data
    })
}

export function getBargainDetail(data) {
    return request({
        url: '/bargain/bargainDetail',
        method: 'post',
        data: data
    })
}

export function userExistBargainForGoods(data) {
    return request({
        url: '/bargain/userExistBargainForGoods',
        method: 'post',
        data: data
    })
}

// 砍价
export function kanjia(data) {
    return request({
        url: '/bargain/doBargain',
        method: 'post',
        data: data
    })
}

// 获取砍价的商品的跳转信息
export function getBargainPddInfo(data) {
    return request({
        url: '/bargain/getWeAppPath',
        method: 'post',
        data: data
    })
}

// 获取参与砍价商品的信息
export function getBargainUserRecord(data) {
    return request({
        url: '/bargain/getBargainUserRecord',
        method: 'post',
        data: data
    })
}

// 获取我的砍价列表
export function getMyBargainList(data) {
    return request({
        url: '/bargain/getMyBargainList',
        method: 'post',
        data: data
    })
}

// 获取我的返现列表
export function getMyFanxianList(data) {
    return request({
        url: '/bargain/getMyFanxianList',
        method: 'post',
        data: data
    })
}

// 店铺收藏tigger
export function collectionMallTigger(data) {
    return request({
        url: '/user/collectMallTigger',
        method: 'post',
        data: data
    })
}

export function collectionMallStatus(data) {
    return request({
        url: '/user/collectionMallStatus',
        method: 'post',
        data: data
    })
}

// 获取我的店铺收藏列表
export function collectionMallList(data) {
    return request({
        url: '/user/collectionMallList',
        method: 'post',
        data: data
    })
}

export function getBargainPoster(data) {
    return request({
        url: '/bargain/buildBargainPoster',
        method: 'get',
        data: data
    })
}

// 主题推广链接生成
export function theme_prom_url_generate(data) {
    return request({
        url: '/theme/theme_prom_url_generate',
        method: 'post',
        data: data
    })
}

// 店铺推广链接生成
export function mall_url_gen(data) {
    return request({
        url: '/mall/mall_url_gen',
        method: 'post',
        data: data
    })
}

// login launch
export function login_launch() {
    return request({
        url: '/system/login_launch',
        method: 'get',
    })
}

// 手机注册登录
export function phoneRegister(data) {
    return request({
        url: '/system/phoneRegister',
        method: 'post',
        data: data
    })
}
