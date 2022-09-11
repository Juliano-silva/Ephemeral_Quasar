
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('../components/Api_interna/MyInterna.vue')},
      { path: 'MySenha',component: () => import('../components/Gerador de senha/MySenha')},
      { path: 'MyGalaxy',component: () => import('../components/Galaxia/MyGalaxy')},
      { path: 'MyTempo',component: () => import('../components/Previsão do Tempo/MyTempo')},
      { path: 'MyForum',component: () => import('../components/forum/MyForum')}
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
