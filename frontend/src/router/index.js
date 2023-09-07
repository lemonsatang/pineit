import { createWebHistory, createRouter } from 'vue-router'
import Main from '@/views/Main.vue'


const routes = [

    {
        path: '/',
        name: 'Main',
        component: Main
    }, // Nomal Route
    {
        path: '/uc',
        name: 'UnderConstruction',
        component: () => import( /* webpackChunkName: 'UnderConstruction' */ '@/views/UnderConstruction.vue' )
    },
    {
        path: '/portfolio',
        name: 'Portfolio',
        component: () => import( /* webpackChunkName: 'Portfolio' */ '@/views/Portfolio.vue' )
    },
    {
        path: '/portfolio/:category/:id',
        name: 'PortfolioDetail',
        component: () => import( /* webpackChunkName: 'PortfolioDetail' */ '@/views/PortfolioDetail.vue' )
    },
    {
        path: '/solutiondev',
        name: 'SolutionDev',
        component: () => import( /* webpackChunkName: 'SolutionDev' */ '@/views/SolutionDev.vue' )
    },

    {
        path: '/sitedev',
        name: 'SiteDev',
        component: () => import( /* webpackChunkName: 'SiteDev' */ '@/views/SiteDev.vue' )
    },
    {
        path: '/map',
        name: 'Map',
        component: () => import( /* webpackChunkName: 'Map' */ '@/views/Map.vue' )
    },
    {
        path: '/certificate',
        name: 'Certificate',
        component: () => import( /* webpackChunkName: 'Certificate' */ '@/views/Certificate.vue' )
    },
    {
        path: '/history',
        name: 'History',
        component: () => import( /* webpackChunkName: 'History' */ '@/views/History.vue' )
    },

     // 고객센터

    {
        path: '/notice',
        name: 'Notice',
        component: () => import( /* webpackChunkName: 'Notice' */ '@/views/CsNotice.vue' )
    },
    {
        path: '/dataroom',
        name: 'Dataroom',
        component: () => import( /* webpackChunkName: 'Dataroom' */ '@/views/DataRoom.vue')
    },
    {
        path: '/news',
        name: 'News',
        component: () => import( /* webpackChunkName: 'News' */ '@/views/News.vue')
    },
    {
        path: '/reportdata',
        name: 'ReportData',
        component: () => import( /* webpackChunkName: 'ReportData' */ '@/views/ReportData.vue')
    },

    {
        path: '/notice/:id',
        name: 'NoticeDetail',
        component: () => import( /* webpackChunkName: 'NoticeDetail' */ '@/views/CsNoticeDetail.vue' )
    },
    {
        path: '/dataroom/:id',
        name: 'DataRoomDetail',
        component: () => import( /* webpackChunkName: 'DataRoomDetail' */ '@/views/DataRoomDetail.vue' ),
    },
    {
        path: '/news/:id',
        name: 'NewsDetail',
        component: () => import( /* webpackChunkName: 'NewsDetail' */ '@/views/NewsDetail.vue' )
    },
    {
        path: '/reportdata/:id',
        name: 'ReportDetail',
        component: () => import( /* webpackChunkName: 'ReportDetail' */ '@/views/ReportDetail.vue')
    },

    {
        path: '/dataroom/wr',
        name: 'DataRoomWr',
        component: () => import( /* webpackChunkName: 'DataRoomWr' */ '@/views/DataRoomWr.vue' )
    },
    {
        path: '/news/wr/',
        name: 'NewsWr',
        component: () => import( /* webpackChunkName: 'NewsWr' */ '@/views/NewsWr.vue' )
    },
    
    {
        path: '/reportdata/wr/',
        name: 'ReportWr',
        component: () => import( /* webpackChunkName: 'ReportWr' */ '@/views/ReportWr.vue' )
    },

    {
        path: '/notice/wr',
        name: 'NoticeWr',
        component: () => import( /* webpackChunkName: 'NoticeWr' */ '@/views/CsNoticeWr.vue' )
    },

    {
        path: '/admin/sptAdm/',
        name: 'SupportAdm',
        component: () => import( /* webpackChunkName: 'SupportAdm' */ '@/views/CsSupportAdm.vue' )
    },
    {
        path: '/cs/sptCs/',
        name: 'SupportCs',
        component: () => import( /* webpackChunkName: 'SupportCs' */ '@/views/CsSupportCs.vue' )
    },
    {
        path: '/cs/spt/:id',
        name: 'SupportDt',
        component: () => import( /* webpackChunkName: 'SupportDt' */ '@/views/CsSupportDt.vue' )
    },
    {
        path: '/cs/spt/write/',
        name: 'SupportWr',
        component: () => import( /* webpackChunkName: 'SupportWr' */ '@/views/CsSupportWr.vue' )
    },

    // 고객센터 끝

    {
        path: '/login',
        name: 'Login',
        component: () => import( /* webpackChunkName: 'Login' */ '@/views/Login.vue' )
    },

    //스마트 커팅

    {
        path: '/scs',
        name: 'scs',
        component: () => import( /* webpackChunkName: 'scs' */ '@/views/SCS.vue' )
    },


]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router