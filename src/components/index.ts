import SvgIcon from './SvgIcon/index.vue'
import Pagination from './Pagination/index.vue'

const allGlobalComponents = { SvgIcon, Pagination }

export default {
  // 務必叫install
  install(app) {
    Object.entries(allGlobalComponents).forEach(([key, component]) => {
      app.component(key, component)
    })
  },
}
