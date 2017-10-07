import Vue from 'vue'
import Router from 'vue-router'
// import Hello from 'src/page/components/Hello'
const layzLoading = (path,parDir) => () => import(`src/page/${parDir?parDir:'main'}/${path}.vue`)
Vue.use(Router)
export default new Router({
  routes: [{
    path: '/',
    name: 'cordova',
    component: layzLoading('cordova')
  },
  {
    path: '/mainPanel',
    name: 'mainPanel',
    component: layzLoading('mainPanel')
  },
  {
    path: '/dragAndFlex',
    name: 'dragAndFlex',
    component: layzLoading('dragAndFlex', 'drag')
  },
  {
    path: '/divFlexPro',
    name: 'divFlexPro',
    component: layzLoading('divFlexPro', 'drag')
  },

  {
    path: '/dragConfig',
    name: 'dragConfig',
    component: layzLoading('dragConfig', 'drag')
  },
  {
    path: '/buttonWait',
    name: 'buttonWait',
    component: layzLoading('buttonWait')
  },
  {
    path: '/test',
    name: 'test',
    component: layzLoading('test')
  },
  {
    path: '/cssPro',
    name: 'cssPro',
    component: layzLoading('cssPro')
  }, {
    path: '/daping',
    name: 'daping',
    component: layzLoading('daping')
  }, {
    path: '/dataFrom',
    name: 'dataFrom',
    component: layzLoading('dataFrom')
  }, {
    path: '/drag',
    name: 'drag',
    component: layzLoading('drag', 'drag')
  }, {
    path: '/es6Pro',
    name: 'es6Pro',
    component: layzLoading('es6Pro')
  }, {
    path: '/flex',
    name: 'flex',
    component: layzLoading('flex')
  }, {
    path: '/functionalPro',
    name: 'functionalPro',
    component: layzLoading('functionalPro')
  }, {
    path: '/Hello',
    name: 'Hello',
    component: layzLoading('Hello')
  }, {
    path: '/jsxPro',
    name: 'jsxPro',
    component: layzLoading('jsxPro')
  }, {
    path: '/renderPro',
    name: 'renderPro',
    component: layzLoading('renderPro')
  }, {
    path: '/treePro',
    name: 'treePro',
    component: layzLoading('treePro')
  }, {
    path: '/video',
    name: 'video',
    component: layzLoading('video')
  }]
})
