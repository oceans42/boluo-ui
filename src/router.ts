import { createWebHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'

import { h } from 'vue';
import Markdown from './components/Markdown.vue';

// const history = createWebHashHistory()
const history = createWebHistory() // 用 history 模式
const md = filename => h(Markdown, { path: `../markdown/${filename}.md`, key: filename })
export const router = createRouter({
  history: history,
  routes: [
    { path: '/', component: Home }, // 根路径
    {
      path: '/doc',
      component: Doc,
      children: [ // 子路由
        { path: '', redirect: '/doc/intro' },
        { path: "intro", component: md('intro') },
        { path: "get-started", component: md('get-started') },
        { path: "install", component: md('install') },
        { path: 'switch', component: SwitchDemo },
        { path: 'button', component: ButtonDemo },
        { path: 'dialog', component: DialogDemo },
        { path: 'tabs', component: TabsDemo }
      ]
    }
  ]
})