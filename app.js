/**
 * 美美发app 入口文件
 * @author Perlou
 */

App({
  onLaunch: function () {
    console.log('This is Launch, 只触发一次')
  },
  onShow: function () {
    console.log('This is Show')
  },
  onHide: function () {
    console.log('This is Hide')
  },
  globalData: {
    hasLogin: false
  }
})
