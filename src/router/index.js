import Vue from 'vue'
import Router from 'vue-router'
import Mine from '@/pages/Mine'
import NewbieTask from '@/pages/NewbieTask'
import DailyTasks from '@/pages/DailyTasks'
import DisplayOrder from '@/pages/DisplayOrder'
import Shoppingjf from '@/pages/Shoppingjf'
import Friendjf from '@/pages/Friendjf'
import MyPoint from '@/pages/MyPoint'
import MyHappyB from '@/pages/MyHappyB'
import MyInvitation from '@/pages/MyInvitation'
import InvitingFriends from '@/pages/InvitingFriends'
import SignIn from '@/pages/SignIn'
import VipCenter from '@/pages/VipCenter'
import GetCash from '@/pages/childrenPages/GetCash'

Vue.use(Router)

export default new Router({
   //mode: 'history',
  routes: [
    {
      path: '/',
      component: Mine
    },
    {
      path: '/NewbieTask',
      component: NewbieTask
    },{
      path: '/DailyTasks',
      component: DailyTasks
    },
    {
      path: '/DisplayOrder',
      component: DisplayOrder
    },
    {
      path: '/Shoppingjf',
      component: Shoppingjf
    },
    {
      path: '/Friendjf',
      component: Friendjf
    },
    {
      path: '/MyPoint',
      component: MyPoint
    },
    {
      path: '/MyHappyB',
      component: MyHappyB
    },
    {
      path: '/MyInvitation',
      component: MyInvitation
    },
    {
      path: '/InvitingFriends',
      component: InvitingFriends
    },
    {
      path: '/SignIn',
      component: SignIn
    },
    {
      path: '/VipCenter',
      component: VipCenter
    },
    {
      path: '/childrenPages/GetCash',
      component: GetCash
    }
  ]
})
