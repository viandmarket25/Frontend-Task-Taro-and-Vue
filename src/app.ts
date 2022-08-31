import { createApp } from 'vue'
import useNutUI from './plugins/nutui-taro'
import '@nutui/nutui-taro/dist/style.css'
import { createUI } from 'taro-ui-vue3'
// 引用全部组件样式
import 'taro-ui-vue3/dist/style/index.scss'
import { SetupCalendar, Calendar, DatePicker } from 'v-calendar';

// Setup plugin for defaults or `$screens` (optional)

import './app.scss'
import Taro from '@tarojs/taro'
import ajax from './plugins/ajax'
import store from './store/index'
// @ts-ignore

const App = createApp({
  async onLaunch() {


  },
  onShow() {}
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

useNutUI(App)

// 引用全部组件
const tuv3 = createUI()
App.use(tuv3)
App.use(store)


App.config.globalProperties.$ajax = ajax
App.config.globalProperties.$Taro = Taro

export default App
