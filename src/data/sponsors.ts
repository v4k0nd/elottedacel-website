export type Sponsor = {
  name: string;
  nameRo?: string;
  logo: string;
  url?: string;
  tier: 'main' | 'supporter';
};

export const sponsors: Sponsor[] = [
  // Főtámogatók
  {
    name: 'Maros megyei tanács',
    nameRo: 'Consiliul Județean Mureș',
    logo: '/img/sponsors/council.png',
    url: 'https://www.cjmures.ro/',
    tier: 'main',
  },
  {
    name: 'Hetednapi Adventista Egyház',
    nameRo: 'Biserica Adventistă de Ziua a Șaptea',
    logo: '/img/sponsors/adventist.png',
    tier: 'main',
  },
  {
    name: 'Dél Erdélyi Egyházterület',
    logo: '/img/sponsors/del-erdely.png',
    url: 'https://www.facebook.com/delerdelyiadventistafiatalok/',
    tier: 'main',
  },

  // Támogatók
  {
    name: 'Bioeel',
    logo: '/img/sponsors/bioeel.png',
    url: 'https://bioeel.ro',
    tier: 'supporter',
  },
  {
    name: 'Kheprix SRL',
    logo: '/img/sponsors/kheprix.png',
    tier: 'supporter',
  },
  {
    name: 'Gumirex',
    logo: '/img/sponsors/gumirex.png',
    url: 'https://gumirex.ro',
    tier: 'supporter',
  },
  {
    name: 'IRMA Broderii',
    logo: '/img/sponsors/irma.png',
    url: 'https://irmabroderii.ro/home/',
    tier: 'supporter',
  },
  {
    name: '1001 Nyárádszereda',
    logo: '/img/sponsors/1001.png',
    url: 'https://www.facebook.com/1001nyaradszereda/',
    tier: 'supporter',
  },
  {
    name: 'Lanka',
    logo: '/img/sponsors/lanka.png',
    url: 'https://lanka.ro/',
    tier: 'supporter',
  },
  {
    name: 'Sym Automobile',
    logo: '/img/sponsors/sym.png',
    url: 'https://symautomobile.ro',
    tier: 'supporter',
  },
  {
    name: 'Bug Hunters',
    logo: '/img/sponsors/bug-hunters.png',
    url: 'https://www.facebook.com/p/BUGhunter-100057278806471/',
    tier: 'supporter',
  },
  {
    name: 'Plantavit',
    logo: '/img/sponsors/plantavit.png',
    url: 'https://www.facebook.com/p/Plantavit-Agro-61550931462134/',
    tier: 'supporter',
  },
  {
    name: 'Brutăria Genesis',
    logo: '/img/sponsors/genesis.png',
    url: 'https://genesisms.ro',
    tier: 'supporter',
  },
  {
    name: 'Criss Market',
    logo: '/img/sponsors/criss-market.png',
    url: 'https://www.facebook.com/p/Criss-Market-100082985809682/',
    tier: 'supporter',
  },
];