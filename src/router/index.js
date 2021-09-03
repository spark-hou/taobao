import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/AdobeFamily',
    name: 'AdobeFamily',
    component: () => import('../views/AdobeFamily.vue'),
  },
  {
    path: '/Activation',
    name: 'Activation',
    component: () => import('../views/Activation.vue'),
  },
  {
    path: '/CloseAntivirus',
    name: 'CloseAntivirus',
    component: () => import('../views/CloseAntivirus.vue'),
  },
  {
    path: '/DisableUpdate',
    name: 'DisableUpdate',
    component: () => import('../views/DisableUpdate.vue'),
  },
  {
    path: '/EnableUpdate',
    name: 'EnableUpdate',
    component: () => import('../views/EnableUpdate.vue'),
  },
  {
    path: '/win7and8',
    name: 'win7and8',
    component: () => import('../views/win7and8.vue'),
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('../views/detail.vue'),
  },
  {
    path: '/HtmlCssJs',
    name: 'HtmlCssJs',
    component: () => import('../views/HtmlCssJs.vue'),
  },
  {
    path: '/PythonClassesH',
    name: 'PythonClassesH',
    component: () => import('../views/PythonClassesH.vue'),
  },
  {
    path: '/BaiDuYun',
    name: 'BaiDuYun',
    component: () => import('../views/BaiDuYun.vue'),
  },
  {
    path: '/ScratchClassesY',
    name: 'ScratchClassesY',
    component: () => import('../views/ScratchClassesY.vue'),
  },
  {
    path: '/MemberMark',
    name: 'MemberMark',
    component: () => import('../views/MemberMark.vue'),
  },
];

const router = new VueRouter({
  mode: 'hash',
  routes,
});
// 路由守卫
router.beforeEach((to, from, next) => {
  console.log('-------beforeEach----------');
  next();
});

export default router;
