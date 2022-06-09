const Layout = () => [
  {
    icon: 'las la-chart-area',
    name: 'Dashboard',
  },
  {
    icon: 'las la-user-circle',
    name: 'User',
  },
  {
    icon: 'las la-car',
    name: 'Vehicle',
  },
  {
    icon: 'las la-hand-holding-usd',
    name: 'Rent',
  },
  {
    icon: 'las la-user-plus',
    name: 'User 1',
    child: [
      {
        icon: 'las la-user-plus',
        name: 'User 2'
      },
      {
        icon: 'las la-user-plus',
        name: 'User 3'
      },
      {
        icon: 'las la-user-plus',
        name: 'User 4'
      },
    ]
  }
];
export default Layout;
