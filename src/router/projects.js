const leftLinks = [
  {
    path: '/projects/new',
    name: 'New Project'
  }
]

const rightLinks = [
  {
    path: 'support',
    name: 'Suggestion/Support'
  },
  {
    path: 'calendar',
    name: 'Calendar'
  }
]

const routes = (configRoute) => [
  {
    path: '/projects',
    name: 'Projects',
    props: {title: 'Projects'},
    meta: {
      title: 'Projects',
      roles: ['customer'],
      leftLinks: leftLinks,
      rightLinks: rightLinks
    },
    component: resolve => {
      require(['../components/projects/Projects.vue'], resolve)
    }
  },
  {
    path: '/projects/new',
    name: 'NewProject',
    props: {title: 'NewProject'},
    meta: {
      title: 'Projects',
      roles: ['customer'],
      leftLinks: leftLinks,
      rightLinks: rightLinks
    },
    component: resolve => {
      require(['../components/projects/Newproject.vue'], resolve)
    }
  }
]

export default routes