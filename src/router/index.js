import Vue from 'vue'
import Router from 'vue-router'

/** 底部导航路由模板 */
import one from '@/components/bottomNav/one'
import two from '@/components/bottomNav/two'

/** 内容路由模板 */
/** Monitor */
import Car from 'views/Monitor/Car'
import Monitor from 'views/Monitor/Monitor'
import Unload from 'views/Monitor/Unload'

/** CargoPersonnel */
import twotchild from 'views/CargoPersonnel/twotchild'

/** xxx */


Vue.use(Router)

export default new Router({
    mode:'history',
  routes: [

    {
      path: '/',
    //   name: 'one',
      component: one,
      children: [{
          path: '/',
          name: 'monitor',
          component: Monitor
        },
        {
          path: 'car',
          name: 'Car',
          component: Car,
        },
        {
          path: 'unload',
          name: 'unload',
          component: Unload
        },
      ]
    },
    {
      path: '/two',
    //   name: 'two',
      component: two,
      children:[
          {
            path: '/',
            name: 'twotchild',
            component: twotchild,
          }
      ]
    }

  ]
})
