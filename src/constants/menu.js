import { adminRoot } from './defaultValues';

const data = [
  {
    id: 'dashboard',
    icon: 'iconsminds-air-balloon-1',
    label: 'menu.dashboard',
    to: `${adminRoot}/dashboard`,
  },
  {
    id: 'account',
    icon: 'simple-icon-user',
    label: 'menu.account',
    to: '#',
    // roles: [UserRole.Admin, UserRole.Editor],
    subs: [
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.account.profile',
        to: `${adminRoot}/account`,
      },
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.account.team',
        to: `${adminRoot}/account/team`,
      },
    ],
  },
  {
    id: 'wallet',
    icon: 'simple-icon-wallet',
    label: 'menu.wallet',
    to: '#',
    // roles: [UserRole.Admin, UserRole.Editor],
    subs: [
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.wallet',
        to: `${adminRoot}/wallet`,
      },
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.wallet.deposits',
        to: `${adminRoot}/wallet/deposits`,
      },
      {
        icon: 'simple-icon-paper-plane',
        label: 'menu.wallet.withdrawals',
        to: `${adminRoot}/wallet/withdrawals`,
      },
    ],
  },
];
export default data;
