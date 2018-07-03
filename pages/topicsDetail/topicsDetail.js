Page({
  data: {
    title: '分类',
    topics: [],
    hidden: false
  },
  goToDetail(event) {
    const id = event.currentTarget.id;
    const url = '../post/post?id=' + id;
    wx.navigateTo({
      url: url,
    })
  },
  fetchData(id) {
    const that = this;
    wx.request({
      url: 'https://www.v2ex.com/api/topics/show.json?node_id=' + id,
      success(res) {
        that.setData({
          topics: res.data
        })
        console.log(res.data)
        setTimeout(() => {
          that.setData({ hidden: true });
        }, 300)
      }
    })
  },
  onLoad: function (options) {
    this.fetchData(options.id);
  },
})