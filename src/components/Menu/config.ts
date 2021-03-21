import { MenuEntry } from '@mangofarm/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Swap',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Swap',
        href: 'https://exchange.pancakeswap.finance/#/swap?inputCurrency=0x3d29cdb00cb183a0aeceea4fb73f55e1450af3d4&outputCurrency=ETH',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/add/ETH/0x3d29cdb00cb183a0aeceea4fb73f55e1450af3d4',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
   {
     label: 'Juice',
     icon: 'PoolIcon',
     href: '/lemon',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://info.pancakeswap.finance/',
      },
      {
        label: 'Tokens',
        href: 'https://info.pancakeswap.finance/token/0x3d29cdb00cb183a0aeceea4fb73f55e1450af3d4',
      },
      {
        label: 'Pairs',
        href: 'https://info.pancakeswap.finance/pair/0xB0361a92E2646F9F11f1670484f09D585fe4a419',
      },
      {
        label: 'Accounts',
        href: 'https://info.pancakeswap.finance/accounts',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/lemonfarmbsc/',
      },
    ],
  },
]

export default config
