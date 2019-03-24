export default [

  {
    path: '*',
    meta: {
      public: true,
    },
    redirect: {
      path: '/404'
    }
  },
  {
    path: '/404',
    meta: {
      public: true,
    },
    name: 'NotFound',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/NotFound.vue`
    )
  },
  {
    path: '/403',
    meta: {
      public: true,
    },
    name: 'AccessDenied',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/Deny.vue`
    )
  },
  {
    path: '/500',
    meta: {
      public: true,
    },
    name: 'ServerError',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/Error.vue`
    )
  },
  {
    path: '/login',
    meta: {
      public: true,
    },
    name: 'Login',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/Login.vue`
    )
  },
  {
    path: '/',
    meta: {},
    name: 'Root',
    redirect: {
      name: 'Dashboard'
    }
  },
  {
    path: '/dashboard',
    meta: {
      breadcrumb: true
    },
    name: 'Dashboard',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/Dashboard.vue`
    )
  },


  {
    path: '/configuration/operators',
    meta: {
      breadcrumb: true
    },
    name: 'configuration/operators',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/configuration/Operator.vue`
    )
  },

  {
    path: '/configuration/parameters',
    meta: {
      breadcrumb: true
    },
    name: 'configuration/parameters',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/configuration/Parameters.vue`
    )
  },

  {
    path: '/administration/process-phase',
    meta: {
      breadcrumb: true
    },
    name: 'administration/process-phase',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/administration/ProcessPhase.vue`
    )
  },


  {
    path: '/administration/document-status',
    meta: {
      breadcrumb: true
    },
    name: 'administration/document-status',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/administration/DocumentStatus.vue`
    )
  },


  {
    path: '/maintenance/process',
    meta: {
      breadcrumb: true
    },
    name: 'maintenance/process',
    component: () => import(
      /* webpackChunkName: "routes" */
      `@/views/maintenance/Process.vue`
    )
  },


];