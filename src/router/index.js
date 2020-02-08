import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const router = new Router({
    mode: process.env.IS_ELECTRON ? 'hash' : 'history',
    routes: [{
            path: '/',
            component: resolve => require(['../views/Home.vue'], resolve),
            name: 'admin',
            meta: {
                title: "后台管理"
            },
            children: [{
                    path: '/index',
                    component: resolve => require(['../views/index.vue'], resolve),
                    name: 'adminIndex',
                    meta: {
                        title: "后台主页"
                    }
                },
                {
                    path: '/case',
                    component: resolve => require(['../views/case.vue'], resolve),
                    name: 'case',
                    meta: {
                        title: "我的病例"
                    }
                }, {
                    path: '/help',
                    component: resolve => require(['../views/help.vue'], resolve),
                    name: 'help',
                    meta: {
                        title: "使用帮助"
                    }
                }, {
                    path: '/setting',
                    component: resolve => require(['../views/setting.vue'], resolve),
                    name: '系统设置'
                }, {
                    path: '/support',
                    component: resolve => require(['../views/support.vue'], resolve),
                    name: '技术支持'
                }
            ]
        },
        {
            path: '/report',
            component: resolve => require(['../views/report.vue'], resolve),
            name: 'report',
            meta: {
                title: "病例报告"
            }
        },

    ]
})


export default router