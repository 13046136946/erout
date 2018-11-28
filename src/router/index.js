import Vue from 'vue'
import Router from 'vue-router'
import Bookshelf from '../components/bookshelf.vue'
import Community from '../components/Community.vue'
import Bookcity from '../components/bookCity.vue'
import details from '../components/details.vue'
import app from '../widget/app.vue'
import visitant from '../widget/ visitant.vue'
import urban from '../widget/urban.vue'
import Fantasy from '../widget/Fantasy.vue'
import Game from '../widget/Game.vue'
import Free from '../widget/Free.vue'
import personal from '../widget/personal.vue'
import search from '../widget/search.vue'
import readbook from '../widget/readbook.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/app',
      component: app,
      children: [
        {path: '/bookshelf', component: Bookshelf},
        {path: '/community', component: Community},
        {path: '/bookcity', component: Bookcity}
      ]
    },
    {path: '/details', name: 'details', component: details},
    {path: '/visitant', component: visitant},
    {path: '/urban', component: urban},
    {path: '/Fantasy', component: Fantasy},
    {path: '/Game', component: Game},
    {path: '/Free', component: Free},
    {path: '/personal', component: personal},
    {path: '/search', component: search},
    {path: '/readbook', component: readbook}
  ]
})
