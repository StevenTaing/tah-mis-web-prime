export default (context, inject) => {
  // const division = context.route.path.split('/')[1];
  const items = [
    {
      id: 'ADM',
      name: 'System Administrator',
      icon: 'pi pi-cog',
      to: '/adm',
      color: 'blue-grey darken-3',
    },
    {
      id: 'MGT',
      name: 'Management',
      icon: 'pi pi-chart-line',
      to: '/mgt',
      color: 'orange darken-4',
    },
    {
      id: 'ACC',
      name: 'Accounting Management',
      icon: 'pi pi-credit-card',
      to: '/acc',
      color: 'pink darken-3',
    },
    {
      id: 'CRM',
      name: 'Customer Relationship Management',
      icon: 'pi pi-sitemap',
      to: '/crm',
      color: 'purple darken-3',
    },
    {
      id: 'SCM',
      name: 'Supply Chain Management',
      icon: 'pi pi-qrcode',
      to: '/scm',
      color: 'brown darken-2',
    },
    {
      id: 'ITM',
      name: 'Inventory Management',
      icon: 'pi pi-inbox',
      to: '/itm',
      color: 'green darken-4',
    },
    {
      id: 'CSM',
      name: 'Customer Service Management',
      icon: 'pi pi-heart',
      to: '/csm',
      color: 'indigo darken-3',
    },
    {
      id: 'ITT',
      name: 'Information Technology Team',
      icon: 'pi pi-server',
      to: '/itt',
      color: 'deep-orange accent-4',
    },
    {
      id: 'HWT',
      name: 'Hardware Team',
      icon: 'pi pi-print',
      to: '/hwt',
      color: 'teal darken-1',
    },
    {
      id: 'HRM',
      name: 'Human Resource Management',
      icon: 'pi pi-id-card',
      to: '/hrm',
      color: 'red darken-3',
    },
  ];
  inject('division', items);
  context.$division = items;
};
