Nova.booting((Vue, router, store) => {
  Vue.component('index-remote-video', require('./components/IndexField'))
  Vue.component('detail-remote-video', require('./components/DetailField'))
  Vue.component('form-remote-video', require('./components/FormField'))
  Vue.component('youtube-url', require('./components/YouTubeUrl'))
  Vue.component('youtube-entity', require('./components/YouTubeEntity'))
  Vue.component('youtube', require('./components/YouTube'))
})
