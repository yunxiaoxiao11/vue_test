export default {
  install(Vue) {
    // 自定义指令
    Vue.directive('big', function (element, binding) {
      element.innerText = binding.value * 10
    })

    // 全局过滤器
    Vue.filter('slice_str', function (value) {
      return value.slice(0, 3)
    })

    // 混入
    Vue.mixin({
      data() {
        return {
          x: 100
        }
      }
    })

    // 给Vue原型添加一个hello方法
    Vue.prototype.hello = () => {
      alert('欢迎')
    }
  }
}