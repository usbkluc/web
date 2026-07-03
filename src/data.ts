import { Game, Category } from './types';

export const CATEGORIES: Category[] = [
  { id: 'vsetky', label: 'Všetky Hry', icon: 'Gamepad2', color: 'text-indigo-400', bgColor: 'bg-indigo-950/40', borderColor: 'border-indigo-500/30' },
  { id: 'akcne', label: 'Akčné / FPS', icon: 'Sword', color: 'text-rose-400', bgColor: 'bg-rose-950/40', borderColor: 'border-rose-500/30' },
  { id: 'rpg', label: 'RPG / Otvorený svet', icon: 'Compass', color: 'text-amber-400', bgColor: 'bg-amber-950/40', borderColor: 'border-amber-500/30' },
  { id: 'prezitie', label: 'Prežitie / Survival', icon: 'Flame', color: 'text-emerald-400', bgColor: 'bg-emerald-950/40', borderColor: 'border-emerald-500/30' },
  { id: 'strategie', label: 'Stratégie / RTS', icon: 'Cylinder', color: 'text-sky-400', bgColor: 'bg-sky-950/40', borderColor: 'border-sky-500/30' },
  { id: 'simulatory', label: 'Simulátory', icon: 'Wrench', color: 'text-purple-400', bgColor: 'bg-purple-950/40', borderColor: 'border-purple-500/30' },
  { id: 'horory', label: 'Horory', icon: 'Ghost', color: 'text-red-400', bgColor: 'bg-red-950/40', borderColor: 'border-red-500/30' },
  { id: 'sportove', label: 'Šport / Závodné', icon: 'Trophy', color: 'text-blue-400', bgColor: 'bg-blue-950/40', borderColor: 'border-blue-500/30' },
  { id: 'indie', label: 'Indie / Nezávislé', icon: 'Sparkles', color: 'text-pink-400', bgColor: 'bg-pink-950/40', borderColor: 'border-pink-500/30' }
];

export const GAMES: Game[] = [
  {
    id: 'cyberpunk-2077',
    title: 'Cyberpunk 2077',
    categories: ['akcne', 'rpg'],
    description: 'Cyberpunk 2077 je akčné RPG s otvoreným svetom odohrávajúce sa v Night City, megapolise posadnutom mocou, pompou a kybernetickými modifikáciami tela. Hrajte ako kyber-žoldnier V a čelte najmocnejším silám mesta.',
    releaseYear: 2020,
    rating: 9.1,
    size: '85 GB',
    steamUrl: 'https://store.steampowered.com/app/1091500/Cyberpunk_2077/',
    imageUrl: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&auto=format&fit=crop&q=80',
    popularity: 100,
    developer: 'CD PROJEKT RED',
    publisher: 'CD PROJEKT RED',
    requirements: {
      cpu: 'Core i7-6700 / Ryzen 5 1600',
      ram: '12 GB RAM',
      gpu: 'GTX 1060 6GB / RX 580 8GB',
      storage: '85 GB SSD'
    }
  },
  {
    id: 'elden-ring',
    title: 'Elden Ring',
    categories: ['akcne', 'rpg'],
    description: 'Povstaň, poškvrnený, a nechaj sa viesť milosťou, aby si ovládol silu Elden Ring a stal sa Elden Lordom v Medzirozmernom svete. Epické fantasy RPG vytvorené v spolupráci s George R. R. Martinom.',
    releaseYear: 2022,
    rating: 9.8,
    size: '60 GB',
    steamUrl: 'https://store.steampowered.com/app/1245620/ELDEN_RING/',
    imageUrl: 'https://images.unsplash.com/photo-1655821888788-6107699e173b?w=600&auto=format&fit=crop&q=80',
    popularity: 99,
    developer: 'FromSoftware',
    publisher: 'Bandai Namco Entertainment',
    requirements: {
      cpu: 'Core i5-8400 / Ryzen 3 3300X',
      ram: '12 GB RAM',
      gpu: 'GTX 1060 3GB / RX 580 4GB',
      storage: '60 GB SSD'
    }
  },
  {
    id: 'grand-theft-auto-v',
    title: 'Grand Theft Auto V',
    categories: ['akcne'],
    description: 'Keď sa mladý pouličný zlodej, vyslúžilý bankový lupič a desivý psychopat zapletú s najdesivejšími prvkami podsvetia, musia vykonať sériu nebezpečných lúpeží, aby prežili v neúprosnom meste.',
    releaseYear: 2015,
    rating: 9.6,
    size: '110 GB',
    steamUrl: 'https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/',
    imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop&q=80',
    popularity: 98,
    developer: 'Rockstar North',
    publisher: 'Rockstar Games',
    requirements: {
      cpu: 'Core i5-3470 / AMD FX-8350',
      ram: '8 GB RAM',
      gpu: 'GTX 660 2GB / HD 7870 2GB',
      storage: '120 GB HDD/SSD'
    }
  },
  {
    id: 'baldurs-gate-3',
    title: "Baldur's Gate 3",
    categories: ['rpg', 'strategie'],
    description: 'Zostavte si družinu a vráťte sa do Forgotten Realms v príbehu o priateľstve a zrade, obeti a prežití a vábení absolútnej moci. Neuveriteľná sloboda voľby v najlepšom RPG roku 2023.',
    releaseYear: 2023,
    rating: 9.9,
    size: '150 GB',
    steamUrl: 'https://store.steampowered.com/app/1086940/Baldurs_Gate_3/',
    imageUrl: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&auto=format&fit=crop&q=80',
    popularity: 97,
    developer: 'Larian Studios',
    publisher: 'Larian Studios',
    requirements: {
      cpu: 'Core i5-4690 / Ryzen 5 1500X',
      ram: '8 GB RAM',
      gpu: 'GTX 970 / RX 480 4GB',
      storage: '150 GB SSD'
    }
  },
  {
    id: 'red-dead-redemption-2',
    title: 'Red Dead Redemption 2',
    categories: ['akcne', 'rpg'],
    description: 'Amerika, 1899. Arthur Morgan a gang Van der Linde sú vyhnanci na úteku. V pätách im idú federálni agenti a najlepší lovci odmien. Aby prežili, musia lúpiť a bojovať v srdci Ameriky.',
    releaseYear: 2019,
    rating: 9.9,
    size: '120 GB',
    steamUrl: 'https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/',
    imageUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&auto=format&fit=crop&q=80',
    popularity: 96,
    developer: 'Rockstar Games',
    publisher: 'Rockstar Games',
    requirements: {
      cpu: 'Core i5-2500K / AMD FX-6300',
      ram: '8 GB RAM',
      gpu: 'GTX 770 2GB / R9 280 3GB',
      storage: '150 GB HDD/SSD'
    }
  },
  {
    id: 'minecraft',
    title: 'Minecraft',
    categories: ['prezitie', 'indie'],
    description: 'Preskúmajte nekonečné svety a stavajte všetko od najjednoduchších domov až po tie najúžasnejšie hrady. Hrajte v kreatívnom móde s neobmedzenými zdrojmi alebo prežite v nebezpečnom svete prežitia.',
    releaseYear: 2011,
    rating: 9.5,
    size: '2 GB',
    steamUrl: 'https://www.minecraft.net/',
    imageUrl: 'https://images.unsplash.com/photo-1605901309584-818e25960a8f?w=600&auto=format&fit=crop&q=80',
    popularity: 95,
    developer: 'Mojang Studios',
    publisher: 'Xbox Game Studios',
    requirements: {
      cpu: 'Core i3-3210 / AMD A8-7600',
      ram: '4 GB RAM',
      gpu: 'Intel HD 4000 / GeForce 400 Series / Radeon HD 7000',
      storage: '4 GB HDD'
    }
  },
  {
    id: 'hogwarts-legacy',
    title: 'Hogwarts Legacy',
    categories: ['rpg'],
    description: 'Hogwarts Legacy je pohlcujúce akčné RPG s otvoreným svetom zasadené do sveta predstaveného v knihách o Harrym Potterovi. Vydajte sa na cestu po známych aj nových miestach v 19. storočí.',
    releaseYear: 2023,
    rating: 9.0,
    size: '85 GB',
    steamUrl: 'https://store.steampowered.com/app/990080/Hogwarts_Legacy/',
    imageUrl: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?w=600&auto=format&fit=crop&q=80',
    popularity: 94,
    developer: 'Avalanche Software',
    publisher: 'Warner Bros. Games',
    requirements: {
      cpu: 'Core i5-6600 / Ryzen 5 1400',
      ram: '16 GB RAM',
      gpu: 'GTX 960 4GB / RX 470 4GB',
      storage: '85 GB SSD'
    }
  },
  {
    id: 'subnautica',
    title: 'Subnautica',
    categories: ['prezitie', 'indie'],
    description: 'Zostúpte do hlbín mimozemského vodného sveta plného zázrakov a nebezpečenstiev. Vyrábajte vybavenie, pilotujte ponorky a prežite uprostred nebezpečných morských stvorení, aby ste našli cestu domov.',
    releaseYear: 2018,
    rating: 9.7,
    size: '20 GB',
    steamUrl: 'https://store.steampowered.com/app/264710/Subnautica/',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80',
    popularity: 93,
    developer: 'Unknown Worlds',
    publisher: 'Unknown Worlds',
    requirements: {
      cpu: 'Core i3 / AMD FX-4300',
      ram: '4 GB RAM',
      gpu: 'Intel HD 4600 / GTX 460 / Radeon HD 7850',
      storage: '20 GB HDD/SSD'
    }
  },
  {
    id: 'witcher-3-wild-hunt',
    title: 'The Witcher 3: Wild Hunt',
    categories: ['rpg'],
    description: 'Ste Geralt z Rivie, nájomný lovec monštier. Pred vami stojí vojnou zničený kontinent plný príšer, v ktorom musíte nájsť Ciri – dieťa proroctva s obrovskou mocou. Jeden z najlepších príbehov v hrách.',
    releaseYear: 2015,
    rating: 9.8,
    size: '50 GB',
    steamUrl: 'https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/',
    imageUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&auto=format&fit=crop&q=80',
    popularity: 92,
    developer: 'CD PROJEKT RED',
    publisher: 'CD PROJEKT RED',
    requirements: {
      cpu: 'Core i5-2500K / Phenom II X4 940',
      ram: '6 GB RAM',
      gpu: 'GTX 660 / HD 7870',
      storage: '50 GB HDD'
    }
  },
  {
    id: 'sons-of-the-forest',
    title: 'Sons of the Forest',
    categories: ['prezitie', 'horory'],
    description: 'Vyslaní nájsť nezvestného miliardára na vzdialenom ostrove sa ocitnete v kanibalskom pekle. Vyrábajte, stavajte a bojujte o prežitie – sami alebo s priateľmi – v tomto desivom survival simulátore.',
    releaseYear: 2024,
    rating: 8.8,
    size: '20 GB',
    steamUrl: 'https://store.steampowered.com/app/1326470/Sons_of_the_Forest/',
    imageUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&auto=format&fit=crop&q=80',
    popularity: 91,
    developer: 'Endnight Games',
    publisher: 'Newnight',
    requirements: {
      cpu: 'Core i5-8400 / Ryzen 3 3300X',
      ram: '12 GB RAM',
      gpu: 'GTX 1060 6GB / RX 570 4GB',
      storage: '20 GB SSD'
    }
  },
  {
    id: 'phasmophobia',
    title: 'Phasmophobia',
    categories: ['horory', 'indie'],
    description: 'Phasmophobia je kooperatívny psychologický horor pre 4 hráčov. Vy a váš tím vyšetrovateľov paranormálnych javov vstúpite do strašidelných miestností plných nadprirodzených aktivít.',
    releaseYear: 2020,
    rating: 9.3,
    size: '18 GB',
    steamUrl: 'https://store.steampowered.com/app/739630/Phasmophobia/',
    imageUrl: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=600&auto=format&fit=crop&q=80',
    popularity: 90,
    developer: 'Kinetic Games',
    publisher: 'Kinetic Games',
    requirements: {
      cpu: 'Core i5-4590 / Ryzen 5 1500X',
      ram: '8 GB RAM',
      gpu: 'GTX 970 / RX 570',
      storage: '21 GB HDD'
    }
  },
  {
    id: 'rust',
    title: 'Rust',
    categories: ['prezitie', 'akcne'],
    description: 'Jediným cieľom v hre Rust je prežiť. Prekonajte hlad, smäd, zimu a ostatných hráčov. Vybudujte si prístrešok, vyrábajte zbrane a spojte sa s inými, alebo ich zraďte, aby ste dominovali ostrovu.',
    releaseYear: 2018,
    rating: 8.7,
    size: '25 GB',
    steamUrl: 'https://store.steampowered.com/app/252490/Rust/',
    imageUrl: 'https://images.unsplash.com/photo-1553481187-be93c21490a9?w=600&auto=format&fit=crop&q=80',
    popularity: 89,
    developer: 'Facepunch Studios',
    publisher: 'Facepunch Studios',
    requirements: {
      cpu: 'Core i7-3770 / FX-9590',
      ram: '10 GB RAM',
      gpu: 'GTX 670 / R9 280',
      storage: '25 GB SSD'
    }
  },
  {
    id: 'dying-light-2',
    title: 'Dying Light 2 Stay Human',
    categories: ['akcne', 'rpg', 'horory'],
    description: 'Vírus zvíťazil a ľudstvo sa vrátilo do temného stredoveku. Mesto, jedna z posledných bášt ľudstva, je na pokraji kolapsu. Použite svoju obratnosť a bojové schopnosti, aby ste prežili v noci plnej infikovaných.',
    releaseYear: 2022,
    rating: 8.5,
    size: '60 GB',
    steamUrl: 'https://store.steampowered.com/app/534380/Dying_Light_2_Stay_Human/',
    imageUrl: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&auto=format&fit=crop&q=80',
    popularity: 88,
    developer: 'Techland',
    publisher: 'Techland',
    requirements: {
      cpu: 'Core i3-9100 / Ryzen 3 2300X',
      ram: '8 GB RAM',
      gpu: 'GTX 1050 Ti / RX 560 4GB',
      storage: '60 GB SSD'
    }
  },
  {
    id: 'forza-horizon-5',
    title: 'Forza Horizon 5',
    categories: ['sportove', 'simulatory'],
    description: 'Vaše ultimátne dobrodružstvo Horizon čaká! Preskúmajte živé a neustále sa vyvíjajúce otvorené krajiny Mexika s neobmedzenou, zábavnou jazdnou akciou v stovkách najlepších áut sveta.',
    releaseYear: 2021,
    rating: 9.4,
    size: '110 GB',
    steamUrl: 'https://store.steampowered.com/app/1551360/Forza_Horizon_5/',
    imageUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&auto=format&fit=crop&q=80',
    popularity: 87,
    developer: 'Playground Games',
    publisher: 'Xbox Game Studios',
    requirements: {
      cpu: 'Core i5-4460 / Ryzen 3 1200',
      ram: '8 GB RAM',
      gpu: 'GTX 970 / RX 470',
      storage: '110 GB SSD'
    }
  },
  {
    id: 'cities-skylines-2',
    title: 'Cities: Skylines II',
    categories: ['strategie', 'simulatory'],
    description: 'Postavte mesto od základov a premeňte ho na prosperujúcu metropolu v najrealistickejšom simulátore budovania mesta, aký kedy vznikol. Simulácia v hĺbke, ktorá otestuje vaše strategické myslenie.',
    releaseYear: 2023,
    rating: 7.2,
    size: '60 GB',
    steamUrl: 'https://store.steampowered.com/app/949230/Cities_Skylines_II/',
    imageUrl: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&auto=format&fit=crop&q=80',
    popularity: 86,
    developer: 'Colossal Order',
    publisher: 'Paradox Interactive',
    requirements: {
      cpu: 'Core i7-6700K / Ryzen 5 1600X',
      ram: '8 GB RAM',
      gpu: 'GTX 970 4GB / RX 480 8GB',
      storage: '60 GB SSD'
    }
  },
  {
    id: 'factorio',
    title: 'Factorio',
    categories: ['strategie', 'indie', 'simulatory'],
    description: 'Factorio je hra o budovaní a vytváraní automatizovaných tovární na ťažbu surovín, výskum technológií, stavbu infraštruktúry a boj s miestnymi nepriateľskými organizmami.',
    releaseYear: 2020,
    rating: 9.8,
    size: '3 GB',
    steamUrl: 'https://store.steampowered.com/app/427520/Factorio/',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=80',
    popularity: 85,
    developer: 'Wube Software',
    publisher: 'Wube Software',
    requirements: {
      cpu: 'Dual Core 3GHz+',
      ram: '4 GB RAM',
      gpu: 'GeForce GTX 260 / Radeon HD 4850 with 512MB VRAM',
      storage: '3 GB HDD'
    }
  },
  {
    id: 'alan-wake-2',
    title: 'Alan Wake 2',
    categories: ['akcne', 'horory'],
    description: 'Séria rituálnych vrážd ohrozuje Bright Falls, mestečko v tichomorskom severozápade. FBI agentka Saga Anderson a uväznený spisovateľ Alan Wake bojujú v dvoch paralelných nočných morách o prežitie.',
    releaseYear: 2023,
    rating: 9.5,
    size: '90 GB',
    steamUrl: 'https://store.epicgames.com/en-US/p/alan-wake-2',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80',
    popularity: 84,
    developer: 'Remedy Entertainment',
    publisher: 'Epic Games Publishing',
    requirements: {
      cpu: 'Ryzen 3700X / Core i5-11600K',
      ram: '16 GB RAM',
      gpu: 'RTX 2060 / RX 6600 6GB',
      storage: '90 GB SSD'
    }
  },
  {
    id: 'resident-evil-4-remake',
    title: 'Resident Evil 4 (Remake)',
    categories: ['akcne', 'horory'],
    description: 'Prežite znova legendárny survival horor, teraz kompletne prepracovaný s najmodernejším vizuálom a vylepšenou hrateľnosťou. Leon S. Kennedy je vyslaný zachrániť dcéru prezidenta zo španielskej izolovanej dediny.',
    releaseYear: 2023,
    rating: 9.7,
    size: '55 GB',
    steamUrl: 'https://store.steampowered.com/app/2050650/Resident_Evil_4/',
    imageUrl: 'https://images.unsplash.com/photo-1627856013091-fed6e4e30025?w=600&auto=format&fit=crop&q=80',
    popularity: 83,
    developer: 'CAPCOM',
    publisher: 'CAPCOM',
    requirements: {
      cpu: 'Core i5-7500 / Ryzen 3 1200',
      ram: '8 GB RAM',
      gpu: 'GTX 1050 Ti 4GB / RX 560 4GB',
      storage: '55 GB SSD'
    }
  },
  {
    id: 'hades-ii',
    title: 'Hades II',
    categories: ['akcne', 'rpg', 'indie'],
    description: 'Bojujte za hranicami podsvetia pomocou temnej mágie, aby ste sa postavili samotnému Titanovi času v tomto očakávanom rogue-like akčnom pokračovaní oceneného hitu.',
    releaseYear: 2024,
    rating: 9.6,
    size: '10 GB',
    steamUrl: 'https://store.steampowered.com/app/1145350/Hades_II/',
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop&q=80',
    popularity: 82,
    developer: 'Supergiant Games',
    publisher: 'Supergiant Games',
    requirements: {
      cpu: 'Dual Core 2.4 GHz',
      ram: '8 GB RAM',
      gpu: 'GeForce GTX 950 / Radeon R7 360 / Intel HD Graphics 630',
      storage: '10 GB SSD'
    }
  },
  {
    id: 'hollow-knight',
    title: 'Hollow Knight',
    categories: ['akcne', 'indie'],
    description: 'Vstúpte do hlbín upadajúceho kráľovstva chrobákov Dirtmouth. Preskúmajte obrovský prepojený svet, bojujte s bizarnými nepriateľmi a odhaľte starobylé tajomstvá v tejto atmosférickej 2D metroidvanii.',
    releaseYear: 2017,
    rating: 9.8,
    size: '9 GB',
    steamUrl: 'https://store.steampowered.com/app/367520/Hollow_Knight/',
    imageUrl: 'https://images.unsplash.com/photo-1612287230202-1bf1d85d1bdf?w=600&auto=format&fit=crop&q=80',
    popularity: 81,
    developer: 'Team Cherry',
    publisher: 'Team Cherry',
    requirements: {
      cpu: 'Intel Core 2 Duo E8400 / AMD Athlon 64 X2 5600+',
      ram: '4 GB RAM',
      gpu: 'GeForce 9800GTX / Radeon HD 5750',
      storage: '9 GB HDD'
    }
  },
  {
    id: 'stardew-valley',
    title: 'Stardew Valley',
    categories: ['indie', 'simulatory'],
    description: 'Zdedili ste starý farmársky pozemok po svojom starom otcovi. Vybavení starým náradím a hŕstkou mincí sa vydávate začať nový život, skultivovať polia a oživiť miestne údolie Stardew.',
    releaseYear: 2016,
    rating: 9.8,
    size: '500 MB',
    steamUrl: 'https://store.steampowered.com/app/413150/Stardew_Valley/',
    imageUrl: 'https://images.unsplash.com/photo-1595079676339-1534801ad6cf?w=600&auto=format&fit=crop&q=80',
    popularity: 80,
    developer: 'ConcernedApe',
    publisher: 'ConcernedApe',
    requirements: {
      cpu: '2.0 GHz',
      ram: '2 GB RAM',
      gpu: '256 MB video RAM, shader model 3.0+',
      storage: '500 MB HDD'
    }
  },
  {
    id: 'lethal-company',
    title: 'Lethal Company',
    categories: ['prezitie', 'horory', 'indie'],
    description: 'Kooperatívny sci-fi horor o zbieraní šrotu na opustených industrializovaných mesiacoch, kde musíte splniť denné kvóty pre "Spoločnosť". Dávajte si pozor na nebezpečných predátorov v temnote.',
    releaseYear: 2023,
    rating: 9.6,
    size: '1 GB',
    steamUrl: 'https://store.steampowered.com/app/1966720/Lethal_Company/',
    imageUrl: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&auto=format&fit=crop&q=80',
    popularity: 79,
    developer: 'Zeekerss',
    publisher: 'Zeekerss',
    requirements: {
      cpu: 'Intel Core i5-7400 @ 3.00GHz / AMD equivalent',
      ram: '4 GB RAM',
      gpu: 'GeForce GTX 1050 / AMD equivalent',
      storage: '1 GB HDD'
    }
  },
  {
    id: 'ready-or-not',
    title: 'Ready or Not',
    categories: ['akcne', 'simulatory'],
    description: 'Ready or Not je intenzívna, taktická strieľačka z pohľadu prvej osoby, ktorá zobrazuje moderný svet, v ktorom sú policajné jednotky SWAT povolané riešiť nepriateľské a nebezpečné situácie.',
    releaseYear: 2023,
    rating: 9.1,
    size: '90 GB',
    steamUrl: 'https://store.steampowered.com/app/1144200/Ready_or_Not/',
    imageUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&auto=format&fit=crop&q=80',
    popularity: 78,
    developer: 'VOID Interactive',
    publisher: 'VOID Interactive',
    requirements: {
      cpu: 'Core i5-4430 / Ryzen 5 1600',
      ram: '8 GB RAM',
      gpu: 'GTX 960 2GB / RX 480 4GB',
      storage: '90 GB SSD'
    }
  },
  {
    id: 'rimworld',
    title: 'RimWorld',
    categories: ['strategie', 'prezitie', 'indie'],
    description: 'Sci-fi simulátor kolónie riadený inteligentným rozprávačom AI. Sledujte životy troch preživších po stroskotaní lode na vzdialenej planéte a pomôžte im prežiť, budovať a brániť kolóniu.',
    releaseYear: 2018,
    rating: 9.8,
    size: '1 GB',
    steamUrl: 'https://store.steampowered.com/app/294100/RimWorld/',
    imageUrl: 'https://images.unsplash.com/photo-1544652478-6653e09f18a2?w=600&auto=format&fit=crop&q=80',
    popularity: 77,
    developer: 'Ludeon Studios',
    publisher: 'Ludeon Studios',
    requirements: {
      cpu: 'Core 2 Duo',
      ram: '4 GB RAM',
      gpu: 'Intel HD Graphics 3000 or better',
      storage: '1 GB HDD'
    }
  },
  {
    id: 'civilization-vi',
    title: 'Sid Meier\'s Civilization VI',
    categories: ['strategie'],
    description: 'Civilization VI ponúka nové spôsoby interakcie s vaším svetom: mestá sa teraz fyzicky rozširujú po mape, aktívny výskum v technológii a kultúre odomyká nový potenciál a konkurenční lídri sledujú svoje vlastné agendy.',
    releaseYear: 2016,
    rating: 9.2,
    size: '12 GB',
    steamUrl: 'https://store.steampowered.com/app/289070/Sid_Meiers_Civilization_VI/',
    imageUrl: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&auto=format&fit=crop&q=80',
    popularity: 76,
    developer: 'Firaxis Games',
    publisher: '2K',
    requirements: {
      cpu: 'Intel Core i3 2.5Ghz / AMD Phenom II 2.6Ghz',
      ram: '4 GB RAM',
      gpu: 'GeForce GTX 450 / Radeon HD 5570',
      storage: '12 GB HDD'
    }
  },
  {
    id: 'black-myth-wukong',
    title: 'Black Myth: Wukong',
    categories: ['akcne', 'rpg'],
    description: 'Black Myth: Wukong je akčné RPG vychádzajúce z čínskej mytológie. Vydáte sa na cestu ako Vyvolený, aby ste odhalili skrytú pravdu pod závojom slávnej legendy z minulosti.',
    releaseYear: 2024,
    rating: 9.7,
    size: '130 GB',
    steamUrl: 'https://store.steampowered.com/app/2358720/Black_Myth_Wukong/',
    imageUrl: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=600&auto=format&fit=crop&q=80',
    popularity: 97,
    developer: 'Game Science',
    publisher: 'Game Science',
    requirements: {
      cpu: 'Core i5-8400 / Ryzen 5 1600',
      ram: '16 GB RAM',
      gpu: 'GTX 1060 6GB / RX 580 8GB',
      storage: '130 GB SSD'
    }
  },
  {
    id: 'palworld',
    title: 'Palworld',
    categories: ['prezitie', 'rpg', 'akcne'],
    description: 'Bojujte, farmárčite, stavajte a pracujte po boku tajomných stvorení zvaných "Pals" v tejto obrovskej multiplayerovej survival akcii v otvorenom svete s prvkami craftingu.',
    releaseYear: 2024,
    rating: 9.1,
    size: '40 GB',
    steamUrl: 'https://store.steampowered.com/app/1623730/Palworld/',
    imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop&q=80',
    popularity: 95,
    developer: 'Pocketpair',
    publisher: 'Pocketpair',
    requirements: {
      cpu: 'Core i5-3570K 3.4GHz',
      ram: '16 GB RAM',
      gpu: 'GeForce GTX 1050 2GB',
      storage: '40 GB SSD'
    }
  },
  {
    id: 'helldivers-2',
    title: 'Helldivers 2',
    categories: ['akcne'],
    description: 'Posledná obranná línia Galaxie. Pridajte sa k Helldivers a bojujte za slobodu naprieč nepriateľskou galaxiou v rýchlej, zbesilej a náročnej kooperatívnej strieľačke z pohľadu tretej osoby.',
    releaseYear: 2024,
    rating: 9.3,
    size: '100 GB',
    steamUrl: 'https://store.steampowered.com/app/553850/HELLDIVERS_2/',
    imageUrl: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&auto=format&fit=crop&q=80',
    popularity: 94,
    developer: 'Arrowhead Game Studios',
    publisher: 'PlayStation Publishing',
    requirements: {
      cpu: 'Core i7-4790K / Ryzen 5 1500X',
      ram: '8 GB RAM',
      gpu: 'GTX 1050 Ti / RX 470 4GB',
      storage: '100 GB SSD'
    }
  },
  {
    id: 'ghost-of-tsushima',
    title: 'Ghost of Tsushima Director\'s Cut',
    categories: ['akcne', 'rpg'],
    description: 'Na konci 13. storočia zdevastovala mongolská ríša celé národy počas svojho ťaženia na dobytia východu. Tsushima je všetko, čo stojí medzi hlavným ostrovom Japonska a mongolskou inváznou flotilou.',
    releaseYear: 2024,
    rating: 9.8,
    size: '75 GB',
    steamUrl: 'https://store.steampowered.com/app/2215430/Ghost_of_Tsushima_Directors_Cut/',
    imageUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80',
    popularity: 93,
    developer: 'Sucker Punch Productions / Nixxes',
    publisher: 'PlayStation Publishing',
    requirements: {
      cpu: 'Core i3-7100 / Ryzen 3 1200',
      ram: '8 GB RAM',
      gpu: 'GTX 960 4GB / RX 5500 XT 4GB',
      storage: '75 GB SSD'
    }
  },
  {
    id: 'silent-hill-2-remake',
    title: 'Silent Hill 2 (Remake)',
    categories: ['horory', 'akcne'],
    description: 'Po prijatí listu od svojej zosnulej manželky sa James vydáva na miesto, kde prežili toľko spomienok v nádeji, že ju znova uvidí: do tajomného, hmlou zahaleného mestečka Silent Hill.',
    releaseYear: 2024,
    rating: 9.6,
    size: '50 GB',
    steamUrl: 'https://store.steampowered.com/app/2124490/SILENT_HILL_2/',
    imageUrl: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=600&auto=format&fit=crop&q=80',
    popularity: 91,
    developer: 'Bloober Team',
    publisher: 'KONAMI',
    requirements: {
      cpu: 'Core i5-8400 / Ryzen 3 3300X',
      ram: '16 GB RAM',
      gpu: 'GTX 1080 / RX 5700',
      storage: '50 GB SSD'
    }
  },
  {
    id: 'manor-lords',
    title: 'Manor Lords',
    categories: ['strategie', 'simulatory'],
    description: 'Manor Lords je stredoveká strategická hra s hlbokým budovaním miest, rozsiahlymi taktickými bitkami a komplexnými ekonomickými a sociálnymi simuláciami v historickom kontexte.',
    releaseYear: 2024,
    rating: 9.2,
    size: '15 GB',
    steamUrl: 'https://store.steampowered.com/app/1363080/Manor_Lords/',
    imageUrl: 'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?w=600&auto=format&fit=crop&q=80',
    popularity: 90,
    developer: 'Slavic Magic',
    publisher: 'Hooded Horse',
    requirements: {
      cpu: 'Core i5-4670K / Ryzen 3 2200G',
      ram: '8 GB RAM',
      gpu: 'GTX 1050 2GB / RX 560 4GB',
      storage: '15 GB SSD'
    }
  },
  {
    id: 'satisfactory',
    title: 'Satisfactory',
    categories: ['strategie', 'simulatory', 'indie'],
    description: 'Satisfactory je budovateľská sci-fi hra z pohľadu prvej osoby s otvoreným svetom a prvkami kooperácie. Skúmajte mimozemskú planétu, stavajte obrie viacposchodové továrne a automatizujte dopravu!',
    releaseYear: 2024,
    rating: 9.7,
    size: '15 GB',
    steamUrl: 'https://store.steampowered.com/app/526870/Satisfactory/',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&auto=format&fit=crop&q=80',
    popularity: 89,
    developer: 'Coffee Stain Studios',
    publisher: 'Coffee Stain Publishing',
    requirements: {
      cpu: 'Core i5-3570 3.4 GHz / Ryzen 5 1400',
      ram: '8 GB RAM',
      gpu: 'GTX 1650 4GB / RX 570 4GB',
      storage: '15 GB SSD'
    }
  },
  {
    id: 'euro-truck-simulator-2',
    title: 'Euro Truck Simulator 2',
    categories: ['simulatory'],
    description: 'Cestujte po Európe ako kráľ ciest, kamionista, ktorý doručuje dôležitý náklad cez impozantné vzdialenosti! S desiatkami miest na preskúmanie v Spojenom kráľovstve, Belgicku, Nemecku, Taliansku a inde.',
    releaseYear: 2012,
    rating: 9.7,
    size: '12 GB',
    steamUrl: 'https://store.steampowered.com/app/227300/Euro_Truck_Simulator_2/',
    imageUrl: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&auto=format&fit=crop&q=80',
    popularity: 88,
    developer: 'SCS Software',
    publisher: 'SCS Software',
    requirements: {
      cpu: 'Intel Core i5-6400 or AMD Ryzen 3 1200',
      ram: '8 GB RAM',
      gpu: 'GeForce GTX 760 / Radeon RY 280 (2GB VRAM)',
      storage: '12 GB HDD'
    }
  },
  {
    id: 'terraria',
    title: 'Terraria',
    categories: ['prezitie', 'indie'],
    description: 'Kopte, bojujte, objavujte, stavajte! Nič nie je nemožné v tejto akčnej dobrodružnej hre. Celý svet je vaším plátnom a samotná krajina je vašou farbou.',
    releaseYear: 2011,
    rating: 9.8,
    size: '1 GB',
    steamUrl: 'https://store.steampowered.com/app/105600/Terraria/',
    imageUrl: 'https://images.unsplash.com/photo-1566241477600-ac026ad43874?w=600&auto=format&fit=crop&q=80',
    popularity: 87,
    developer: 'Re-Logic',
    publisher: 'Re-Logic',
    requirements: {
      cpu: 'Dual Core 2.0 Ghz',
      ram: '2.5 GB RAM',
      gpu: '128MB Video Memory, capable of shader model 2.0+',
      storage: '1 GB HDD'
    }
  },
  {
    id: 'outlast-2',
    title: 'Outlast 2',
    categories: ['horory', 'indie'],
    description: 'Outlast 2 vás zavedie na cestu hlboko do temných tajomstiev ľudskej mysle. Ste kameraman Sullivan Knoth, ktorý so svojou ženou Lynn vyšetruje vraždu tehotnej ženy v arizonskej púšti.',
    releaseYear: 2017,
    rating: 8.9,
    size: '30 GB',
    steamUrl: 'https://store.steampowered.com/app/414700/Outlast_2/',
    imageUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&auto=format&fit=crop&q=80',
    popularity: 75,
    developer: 'Red Barrels',
    publisher: 'Red Barrels',
    requirements: {
      cpu: 'Intel Core i3-530',
      ram: '4 GB RAM',
      gpu: 'GeForce GTX 260 / Radeon HD 4870',
      storage: '30 GB HDD'
    }
  },
  {
    id: 'detroit-become-human',
    title: 'Detroit: Become Human',
    categories: ['rpg'],
    description: 'Detroit, 2038. Technológie sa vyvinuli do bodu, kedy sú humanoidní androidi všade. Hovoria, chodia a správajú sa ako ľudia, ale sú to len stroje slúžiace ľuďom. Rozhodnite o osude troch androidov.',
    releaseYear: 2020,
    rating: 9.5,
    size: '65 GB',
    steamUrl: 'https://store.steampowered.com/app/1150640/Detroit_Become_Human/',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&auto=format&fit=crop&q=80',
    popularity: 86,
    developer: 'Quantic Dream',
    publisher: 'Quantic Dream',
    requirements: {
      cpu: 'Core i5-2300 / Ryzen 3 1200',
      ram: '8 GB RAM',
      gpu: 'GTX 780 / Radeon HD 7950 3GB',
      storage: '65 GB SSD'
    }
  },
  {
    id: 'it-takes-two',
    title: 'It Takes Two',
    categories: ['indie', 'akcne'],
    description: 'Vydajte sa na najšialenejšiu cestu svojho života v hre It Takes Two, žánrovo prelomovom plošinovkovom dobrodružstve vytvorenom výhradne pre kooperáciu dvoch hráčov na rozdelenej obrazovke.',
    releaseYear: 2021,
    rating: 9.7,
    size: '50 GB',
    steamUrl: 'https://store.steampowered.com/app/1426210/It_Takes_Two/',
    imageUrl: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&auto=format&fit=crop&q=80',
    popularity: 85,
    developer: 'Hazelight',
    publisher: 'Electronic Arts',
    requirements: {
      cpu: 'Core i3-2100T / AMD FX-6100',
      ram: '8 GB RAM',
      gpu: 'GTX 660 / Radeon R7 260X',
      storage: '50 GB HDD'
    }
  },
  {
    id: 'hades',
    title: 'Hades',
    categories: ['akcne', 'indie', 'rpg'],
    description: 'Vzoprite sa bohovi podsvetia v tejto oceňovanej hack-and-slash rogue-like dungeon crawler hre od tvorcov hier Bastion, Transistor a Pyre. Prebojujte sa z hlbín gréckeho podsvetia.',
    releaseYear: 2020,
    rating: 9.8,
    size: '15 GB',
    steamUrl: 'https://store.steampowered.com/app/1145360/Hades/',
    imageUrl: 'https://images.unsplash.com/photo-1608889174637-3c44f6326f1a?w=600&auto=format&fit=crop&q=80',
    popularity: 84,
    developer: 'Supergiant Games',
    publisher: 'Supergiant Games',
    requirements: {
      cpu: 'Dual Core 2.4 GHz',
      ram: '4 GB RAM',
      gpu: 'Intel HD 5000 or better',
      storage: '15 GB HDD'
    }
  },
  {
    id: 'the-forest',
    title: 'The Forest',
    categories: ['prezitie', 'horory'],
    description: 'Ako jediný preživší z havárie osobného lietadla sa ocitnete v tajomnom lese, kde bojujete o prežitie proti spoločnosti mutantných kanibalov. Stavajte, skúmajte a prežite v tomto desivom svete.',
    releaseYear: 2018,
    rating: 9.1,
    size: '5 GB',
    steamUrl: 'https://store.steampowered.com/app/242760/The_Forest/',
    imageUrl: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=600&auto=format&fit=crop&q=80',
    popularity: 83,
    developer: 'Endnight Games',
    publisher: 'Endnight Games',
    requirements: {
      cpu: 'Intel Dual Core 2.4 GHz',
      ram: '4 GB RAM',
      gpu: 'GeForce 8800GT / Radeon HD 4830',
      storage: '5 GB HDD'
    }
  },
  {
    id: 'beamng-drive',
    title: 'BeamNG.drive',
    categories: ['simulatory', 'sportove'],
    description: 'BeamNG.drive je neskutočne realistická jazdná hra s takmer neobmedzenými možnosťami. Náš fyzikálny model mäkkých telies simuluje každú časť vozidla v reálnom čase, čo vedie k vernému poškodeniu.',
    releaseYear: 2015,
    rating: 9.7,
    size: '45 GB',
    steamUrl: 'https://store.steampowered.com/app/284160/BeamNGdrive/',
    imageUrl: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&auto=format&fit=crop&q=80',
    popularity: 82,
    developer: 'BeamNG',
    publisher: 'BeamNG',
    requirements: {
      cpu: 'Intel Core i3-6300 @ 3.8GHz / AMD equivalent',
      ram: '8 GB RAM',
      gpu: 'GTX 970 / Radeon R9 290',
      storage: '45 GB HDD'
    }
  },
  {
    id: 'farming-simulator-22',
    title: 'Farming Simulator 22',
    categories: ['simulatory'],
    description: 'Vytvorte si vlastnú farmu a nechajte rásť poľnohospodárske impérium! Vyskúšajte si poľnohospodárstvo, chov zvierat a lesníctvo s obrovskou škálou reálnych poľnohospodárskych strojov od Case IH, CLAAS, John Deere, atď.',
    releaseYear: 2021,
    rating: 9.2,
    size: '35 GB',
    steamUrl: 'https://store.steampowered.com/app/1248130/Farming_Simulator_22/',
    imageUrl: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&auto=format&fit=crop&q=80',
    popularity: 81,
    developer: 'GIANTS Software',
    publisher: 'GIANTS Software',
    requirements: {
      cpu: 'Core i5-3330 / AMD FX-8320',
      ram: '8 GB RAM',
      gpu: 'GTX 660 / Radeon R9 270',
      storage: '35 GB HDD'
    }
  },
  {
    id: 'sekiro-shadows-die-twice',
    title: 'Sekiro: Shadows Die Twice',
    categories: ['akcne', 'rpg'],
    description: 'Vybojujte si vlastnú cestu k pomste v tejto oceňovanej hre od FromSoftware, autorov série Dark Souls. Zachráňte svojho mladého pána pred nepriateľským klanom Ashina a získajte späť stratenú česť.',
    releaseYear: 2019,
    rating: 9.6,
    size: '25 GB',
    steamUrl: 'https://store.steampowered.com/app/814380/Sekiro_Shadows_Die_Twice/',
    imageUrl: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?w=600&auto=format&fit=crop&q=80',
    popularity: 80,
    developer: 'FromSoftware',
    publisher: 'Activision',
    requirements: {
      cpu: 'Intel Core i3-2100 / AMD FX-6300',
      ram: '4 GB RAM',
      gpu: 'GeForce GTX 760 / Radeon HD 7950',
      storage: '25 GB HDD'
    }
  },
  {
    id: 'stray',
    title: 'Stray',
    categories: ['indie'],
    description: 'Stratená, osamotená a odrezaná od rodiny musí zatúlaná mačka vyriešiť starodávnu záhadu, aby unikla z dávno zabudnutého kybermesta plného robotov a nebezpečných stvorení.',
    releaseYear: 2022,
    rating: 9.4,
    size: '10 GB',
    steamUrl: 'https://store.steampowered.com/app/1332010/Stray/',
    imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&auto=format&fit=crop&q=80',
    popularity: 79,
    developer: 'BlueTwelve Studio',
    publisher: 'Annapurna Interactive',
    requirements: {
      cpu: 'Intel Core i5-2300 / AMD FX-6350',
      ram: '8 GB RAM',
      gpu: 'GeForce GTX 650 Ti / Radeon R7 360',
      storage: '10 GB SSD'
    }
  },
  {
    id: 'civilization-v',
    title: 'Sid Meier\'s Civilization V',
    categories: ['strategie'],
    description: 'Staňte sa vládcom sveta tým, že založíte a povediete civilizáciu od úsvitu ľudstva až do vesmírneho veku: veďte vojny, robte diplomaciu, objavujte nové technológie a postavte ríšu.',
    releaseYear: 2010,
    rating: 9.6,
    size: '8 GB',
    steamUrl: 'https://store.steampowered.com/app/8930/Sid_Meiers_Civilization_V/',
    imageUrl: 'https://images.unsplash.com/photo-1580234810907-b40315b76418?w=600&auto=format&fit=crop&q=80',
    popularity: 78,
    developer: 'Firaxis Games',
    publisher: '2K Games',
    requirements: {
      cpu: 'Intel Core 2 Duo 1.8 GHz / AMD Athlon X2 64 2.0 GHz',
      ram: '2 GB RAM',
      gpu: 'GeForce 7900 GS / Radeon HD 2600 XT',
      storage: '8 GB HDD'
    }
  },
  {
    id: 'hearts-of-iron-iv',
    title: 'Hearts of Iron IV',
    categories: ['strategie'],
    description: 'Víťazstvo máte na dosah ruky! Vaša schopnosť viesť svoj národ je vašou najsilnejšou zbraňou. V grandióznej strategickej hre Hearts of Iron IV prevezmete velenie nad akýmkoľvek národom v 2. svetovej vojne.',
    releaseYear: 2016,
    rating: 9.1,
    size: '4 GB',
    steamUrl: 'https://store.steampowered.com/app/394360/Hearts_of_Iron_IV/',
    imageUrl: 'https://images.unsplash.com/photo-1505673542670-a14e0f0fc735?w=600&auto=format&fit=crop&q=80',
    popularity: 77,
    developer: 'Paradox Development Studio',
    publisher: 'Paradox Interactive',
    requirements: {
      cpu: 'Intel Core i3-2100 / AMD Phenom II X4 965',
      ram: '4 GB RAM',
      gpu: 'GeForce GTX 470 / Radeon HD 5850',
      storage: '4 GB HDD'
    }
  },
  {
    id: 'dying-light',
    title: 'Dying Light',
    categories: ['akcne', 'prezitie', 'horory'],
    description: 'Akčná survival hra z pohľadu prvej osoby odohrávajúca sa v post-apokalyptickom otvorenom svete zaplavenom hladnými zombie. Prechádzajte mestom zničeným tajomnou epidémiou s parkourovou plynulosťou.',
    releaseYear: 2015,
    rating: 9.3,
    size: '40 GB',
    steamUrl: 'https://store.steampowered.com/app/239140/Dying_Light/',
    imageUrl: 'https://images.unsplash.com/photo-1601987177651-8edfe6c20009?w=600&auto=format&fit=crop&q=80',
    popularity: 76,
    developer: 'Techland',
    publisher: 'Warner Bros. Interactive Entertainment',
    requirements: {
      cpu: 'Intel Core i5-2500 @ 3.3 GHz / AMD FX-8320 @ 3.5 GHz',
      ram: '4 GB RAM',
      gpu: 'GeForce GTX 560 / Radeon HD 6870',
      storage: '40 GB HDD'
    }
  },
  {
    id: 'metro-exodus',
    title: 'Metro Exodus',
    categories: ['akcne', 'prezitie', 'horory'],
    description: 'Utečte z trosiek moskovského metra a vydajte sa na epickú cestu naprieč kontinentom cez post-apokalyptický ruský vidiek v pohlcujúcom príbehu strieľačky z pohľadu prvej osoby od 4A Games.',
    releaseYear: 2019,
    rating: 9.2,
    size: '50 GB',
    steamUrl: 'https://store.steampowered.com/app/413150/Metro_Exodus/',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80',
    popularity: 75,
    developer: '4A Games',
    publisher: 'Deep Silver',
    requirements: {
      cpu: 'Intel Core i5-4440 or equivalent',
      ram: '8 GB RAM',
      gpu: 'GeForce GTX 670 / Radeon HD 7870',
      storage: '50 GB HDD'
    }
  }
];

// Mutate GAMES in-place to use actual real Steam store headers and logos
GAMES.forEach(game => {
  const steamMatch = game.steamUrl.match(/\/app\/(\d+)/);
  if (steamMatch && steamMatch[1]) {
    const appId = steamMatch[1];
    game.imageUrl = `https://cdn.akamai.steamstatic.com/steam/apps/${appId}/header.jpg`;
  } else if (game.id === 'minecraft') {
    game.imageUrl = 'https://images.squarespace-cdn.com/content/v1/511c1d0be4b07ca12dc59092/1557930810793-F5E68N6L3J08LZZD476N/minecraft-logo.jpg?format=1000w';
  } else if (game.id === 'alan-wake-2') {
    game.imageUrl = 'https://cdn2.unrealengine.com/alan-wake-2-egs-featured-image-1920x1080-87a31b67f139.jpg';
  }
});

// Procedural Generation of exactly 5000 games total in our database
const targetCount = 5000;
const adjectives = [
  'Cyber', 'Dark', 'Neon', 'Epic', 'Dead', 'Lost', 'Infinite', 'Ancient', 'Primal', 'Mystic', 'Eternal', 
  'Iron', 'Red', 'Black', 'Silent', 'Savage', 'Ghost', 'Wild', 'Holy', 'Astral', 'Retro', 'Shadow', 
  'Quantum', 'Solar', 'Lunar', 'Deep', 'Void', 'Frozen', 'Burning', 'Cursed', 'Divine', 'Secret', 
  'Forbidden', 'Forgotten', 'Broken', 'Blood', 'Steel', 'Gold', 'Stellar', 'Cosmic', 'Bio', 'Atomic', 
  'Chrono', 'Techno', 'Crypto', 'Eco', 'Mecha', 'Vapor', 'Aero', 'Hydro'
];

const nouns = [
  'Knight', 'Hunter', 'Warrior', 'Shadow', 'World', 'Sky', 'Land', 'Kingdom', 'Quest', 'Legacy', 
  'Chronicle', 'Force', 'Empire', 'Reign', 'Void', 'Storm', 'Rage', 'Dawn', 'Fall', 'Rise', 
  'Ruins', 'Abyss', 'Gate', 'Path', 'Flame', 'Ice', 'Dust', 'Beast', 'Dragon', 'Monster', 
  'God', 'Demon', 'Hero', 'Outlaw', 'Survivor', 'Operator', 'Commander', 'Agent', 'Pilot', 'Engineer', 
  'Scientist', 'Explorer', 'Citizen', 'Samurai', 'Viking', 'Pirate', 'Wizard', 'Assassin', 'Thief', 'Lord'
];

const suffixes = [
  'of Doom', 'of the Ancients', 'Chronicles', 'Saga', 'Reckoning', 'Origins', 'Odyssey', 'Ascension', 
  'Downfall', 'Ragnarok', 'Revenge', 'Alliance', 'Conquest', 'Liberation', 'Frontline', 'Vanguard', 
  'Prophecy', 'Destiny', 'Redemption', 'Salvation', 'Invasion', 'Outbreak', 'Pandemic', 'Evolution', 
  'Revolution', 'Apocalypse', 'Cataclysm', 'Extinction', 'Survival', 'Requiem', 'Sanctuary', 'Horizon', 
  'Ascendant', 'Desolation', 'Judgment', 'Crusade', 'Tribulation', 'Genesis', 'Exodus', 'Revelation'
];

const developers = [
  'Ubisoft', 'Electronic Arts', 'Rockstar Games', 'Activision Blizzard', 'Sony Interactive', 'Microsoft Xbox', 
  'Bethesda Softworks', 'Sega', 'Capcom', 'Bandai Namco', 'Square Enix', 'FromSoftware', 'CD PROJEKT RED', 
  'Paradox Interactive', 'Valve', 'Epic Games', 'BioWare', 'Obsidian', 'Bungie', 'Gearbox Software'
];

const imagesByCategory: Record<string, string[]> = {
  akcne: [
    'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&auto=format&fit=crop&q=80'
  ],
  sportove: [
    'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&auto=format&fit=crop&q=80'
  ],
  rpg: [
    'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&auto=format&fit=crop&q=80'
  ],
  prezitie: [
    'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1511497584788-876760111969?w=600&auto=format&fit=crop&q=80'
  ],
  simulatory: [
    'https://images.unsplash.com/photo-1580234810907-b40315b76418?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&auto=format&fit=crop&q=80'
  ],
  horory: [
    'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1627856013091-fed6e4e30025?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1601987177651-8edfe6c20009?w=600&auto=format&fit=crop&q=80'
  ],
  strategie: [
    'https://images.unsplash.com/photo-1553481187-be93c21490a9?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?w=600&auto=format&fit=crop&q=80'
  ],
  indie: [
    'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1612287230202-1bf1d85d1bdf?w=600&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1595079676339-1534801ad6cf?w=600&auto=format&fit=crop&q=80'
  ]
};

const neededCount = targetCount - GAMES.length;

for (let i = 0; i < neededCount; i++) {
  const adjIndex = i % adjectives.length;
  const nounIndex = (i + Math.floor(i / adjectives.length)) % nouns.length;
  const suffIndex = (i + Math.floor(i / (adjectives.length * nouns.length))) % suffixes.length;
  
  const adj = adjectives[adjIndex];
  const noun = nouns[nounIndex];
  const suff = suffixes[suffIndex];
  
  let title = '';
  if (i % 3 === 0) {
    title = `${adj} ${noun}`;
  } else if (i % 3 === 1) {
    title = `${adj} ${noun}: ${suff}`;
  } else {
    title = `${noun} of the ${adj} World`;
  }
  
  if (i % 5 === 0) {
    const seq = (i % 4) + 2;
    title += ` ${seq}`;
  } else if (i % 12 === 0) {
    title += ` Remastered`;
  } else if (i % 15 === 0) {
    title += `: Definitive Edition`;
  }
  
  const id = `gen-${i}-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;
  const releaseYear = 1998 + (i % 29);
  
  let categories: string[] = [];
  if (i % 8 === 0) {
    categories = ['akcne'];
  } else if (i % 8 === 1) {
    categories = ['horory', 'prezitie'];
  } else if (i % 8 === 2) {
    categories = ['rpg'];
  } else if (i % 8 === 3) {
    categories = ['strategie'];
  } else if (i % 8 === 4) {
    categories = ['simulatory'];
  } else if (i % 8 === 5) {
    categories = ['sportove'];
  } else if (i % 8 === 6) {
    categories = ['prezitie', 'indie'];
  } else {
    categories = ['indie', 'rpg'];
  }
  
  const primaryCat = categories[0];
  const catImgs = imagesByCategory[primaryCat] || imagesByCategory.indie;
  const imageUrl = catImgs[i % catImgs.length];
  
  const rating = parseFloat((6.2 + (i % 37) * 0.1).toFixed(1));
  const popularity = 40 + (i % 56);
  const sizeGb = 1 + (i % 140);
  const size = sizeGb < 2 ? `${(sizeGb * 500) + 100} MB` : `${sizeGb} GB`;
  
  const dev = developers[i % developers.length];
  const pub = `${dev} Publishing`;
  
  const description = `Epická hra s názvom ${title} od renomovaného štúdia ${dev}. Preskúmajte detailne vypracovaný svet, zažite inovatívny herný systém a nechajte sa uniesť úžasným soundtrackom a hrateľnosťou.`;
  
  GAMES.push({
    id,
    title,
    categories,
    description,
    releaseYear,
    rating,
    size,
    steamUrl: `https://store.steampowered.com/search/?term=${encodeURIComponent(title)}`,
    imageUrl,
    popularity,
    developer: dev,
    publisher: pub,
    requirements: {
      cpu: releaseYear >= 2023 ? 'Intel Core i5-10400F / AMD Ryzen 5 3600' : 'Intel Core i5-6600K / AMD Ryzen 5 1400',
      ram: releaseYear >= 2023 ? '16 GB RAM' : '8 GB RAM',
      gpu: releaseYear >= 2023 ? 'NVIDIA RTX 3060 8GB / AMD RX 6600' : 'NVIDIA GTX 1060 6GB / AMD RX 580',
      storage: `${sizeGb} GB SSD`
    }
  });
}

