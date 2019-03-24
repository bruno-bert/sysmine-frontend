const Menu = [{
    header: 'Main'
  },
  {
    title: 'Dashboard',
    group: 'apps',
    icon: 'dashboard',
    name: 'Dashboard',
  },

  {
    title: 'Configuration',
    group: 'config',
    component: 'config',
    icon: 'fa-wrench',
    items: [{
        name: 'config-parameters',
        title: 'General Parameters',
        component: 'configuration/parameters'
      },
      {
        name: 'config-operators',
        title: 'Operators',
        component: 'configuration/operators'
      },
    ]
  },



  {
    title: 'Administration',
    group: 'apps',
    component: 'admin',
    icon: 'fa-superpowers',
    items: [{
      name: 'process-phases',
      title: 'Process - Phases',
      component: 'administration/process-phase'
    }, {
      name: 'document-status',
      title: 'Document - Status',
      component: 'administration/document-status'
    }, ]
  },

  {
    title: 'Maintenance',
    group: 'apps',
    component: 'maintenance',
    icon: 'fa-cogs',
    items: [{
      name: 'process',
      title: 'Maintain Processes',
      component: 'maintenance/process'
    }, ]
  }
];
// reorder menu
Menu.forEach((item) => {
  if (item.items) {
    item.items.sort((x, y) => {
      let textA = x.title.toUpperCase();
      let textB = y.title.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
  }
});

export default Menu;