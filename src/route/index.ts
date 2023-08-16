import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'index',
        component: () => import('@/layout/index.vue'),
        // 所有的分类全都是layout的子路由
        children: [
            {
                path: '',
                name: 'login',
                component: () => import('@/views/login/index.vue'),
                meta: { requiresAuth: false, show: false, title: '登陆页面' },
            },
            // 上传文件嵌套进我的文件中，增加一个按钮
            {
                path: 'board',
                name: 'board',
                meta: {
                    requiresAuth: false,
                    show: true,
                    title: '首页内容',
                    icon: 'FolderOpened',
                },
                component: () => import('@/views/board/index.vue'),
            },
            {
                path: 'help',
                name: 'help',
                component: () => import('@/views/help/index.vue'),
                meta: {
                    requiresAuth: false,
                    show: true,
                    title: '帮助反馈',
                    icon: 'Service',
                },
            },
        ],
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

// 配置前置后置路由导航守卫
router.beforeEach(async (to, from, next) => {
    // 判断是否已经登陆，是的话，就直接到主页，否则还是登陆页
    console.log('to, from ,next', to, from, next)
    const gitToken = localStorage.getItem('gitToken')
        ? localStorage.getItem('gitToken')
        : ''
    if (to.path === '/') {
        if (gitToken) {
            next('/board')
        } else {
            //否则就继续
            next()
        }
    } else {
        // 不存在token，就跳转到登陆页
        if (gitToken) {
            // 存在token,就跳转到主页
            next()
        } else {
            //否则就继续
            next('/')
        }
    }
})

export default router
export { routes }
