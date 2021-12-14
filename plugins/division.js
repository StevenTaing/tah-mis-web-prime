export default (context, inject) => {
  // const division = context.route.path.split('/')[1];
  const items = [
    {
      id: 'ADM',
      name: 'System Administrator',
      icon: 'mdi-wrench',
      to: '/',
      color: 'blue-grey darken-3'
    },
    {
      id: 'MGT',
      name: 'Management',
      icon: 'mdi-chart-line',
      to: '/MGT',
      color: 'orange darken-4'
    },
    {
      id: 'ACC',
      name: 'Accounting Management',
      icon: 'mdi-table-edit',
      to: '/ACC',
      color: 'pink darken-3'
    },
    {
      id: 'CRM',
      name: 'Customer Relationship Management',
      icon: 'mdi-cash-multiple',
      to: '/CRM',
      color: 'purple darken-3'
    },
    {
      id: 'SCM',
      name: 'Supply Chain Management',
      icon: 'mdi-truck',
      to: '/SCM',
      color: 'brown darken-2'
    },
    {
      id: 'ITM',
      name: 'Inventory Management',
      icon: 'mdi-server',
      to: '/ITM',
      color: 'green darken-4'
    },
    {
      id: 'CSM',
      name: 'Customer Service Management',
      icon: 'mdi-headset',
      to: '/CSM',
      color: 'indigo darken-3'
    },
    {
      id: 'ITT',
      name: 'Information Technology Team',
      icon: 'mdi-server-network',
      to: '/ITT',
      color: 'deep-orange accent-4'
    },
    {
      id: 'HWT',
      name: 'Hardware Team',
      icon: 'mdi-printer',
      to: '/HWT',
      color: 'teal darken-1'
    },
    {
      id: 'HRM',
      name: 'Human Resource Management',
      icon: 'mdi-folder-account',
      to: '/HRM',
      color: 'red darken-3'
    }
  ];
  inject('division', items);
  context.$division = items;
};
