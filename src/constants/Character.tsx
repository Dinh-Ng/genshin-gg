import ElementList from './Element'
import { BaseWeapon } from './Weapon'

const Anemo = ElementList[0].en
const Cryo = ElementList[1].en
const Electro = ElementList[2].en
// const Dendro = ElementList[3].en
const Geo = ElementList[4].en
const Hydro = ElementList[5].en
const Pyro = ElementList[6].en

const Bow = BaseWeapon[0].en
const Catalyst = BaseWeapon[1].en
const Claymore = BaseWeapon[2].en
const Polearm = BaseWeapon[3].en
const Sword = BaseWeapon[4].en
/**
 * SS : 6
 * S  : 5
 * A+ : 4
 * A  : 3
 * B  : 2
 * C  : 1
 */
const Characters = [
  {
    name: 'Amber',
    element: Pyro,
    weapon: Bow,
    tier: {
      mainDps: { single: 0, aoe: 0 },
      subDps: {
        single: 2,
        aoe: 1,
        commentEn:
          'Not that great, but still has access to a taunt and decent Burst on a 12s CD that works great vs some shields.',
        commentVi: '',
      },
      support: { buff: 0, heal: 0 },
    },
  },
  {
    name: 'Barbara',
    element: Hydro,
    weapon: Catalyst,
    tier: {
      mainDps: { single: 0, aoe: 0 },
      subDps: { single: 0, aoe: 0 },
      support: {
        buff: 0,
        heal: 2,
        commentEn: 'Similar to Qiqi but with worse healing.',
        commentVi: '',
      },
    },
  },
  {
    name: 'Beidou',
    element: Electro,
    weapon: Claymore,
    tier: {
      mainDps: { single: 0, aoe: 0 },
      subDps: {
        single: 2,
        aoe: 4,
        commentEn:
          "Extremely strong in AoE situations where you're able to consistently bounce her Burst damage, but loses A LOT of value in single target.",
        commentVi: '',
      },
      support: {
        buff: 0,
        heal: 2,
        commentEn:
          'Similar to Xingqiu, her parry + damage reduction from her Burst can provide a decent amount of survivability.',
        commentVi: '',
      },
    },
  },
  {
    name: 'Bennett',
    element: Pyro,
    weapon: Sword,
    tier: {
      mainDps: {
        single: 4,
        aoe: 2,
        commentEn:
          "Solid single target DPS due to being able to spam his skill inside his Burst circle, but is limited by its' AoE.",
        commentVi: '',
      },
      subDps: { single: 0, aoe: 0 },
      support: {
        buff: 5,
        heal: 5,
        commentEn:
          'Provides an almost permanent huge ATK buff and top tier survivability. Pretty much no reason not to run him on most teams.',
        commentVi: '',
      },
    },
  },
  {
    name: 'Chongyun',
    element: Cryo,
    weapon: Claymore,
    tier: {
      mainDps: { single: 0, aoe: 0 },
      subDps: {
        single: 3,
        aoe: 3,
        commentEn:
          'A really useful enabler for Diluc/Bennett with solid damage if you Melt his abilities.',
        commentVi: '',
      },
      support: { buff: 0, heal: 0 },
    },
  },
  {
    name: 'Diluc',
    element: Pyro,
    weapon: Claymore,
    tier: {
      mainDps: {
        single: 5,
        aoe: 5,
        commentEn:
          'High ratios, low CDs and Pyro infusion allow Diluc to consistently make use of Vaporise/Melt.',
        commentVi: '',
      },
      subDps: { single: 0, aoe: 0 },
      support: { buff: 0, heal: 0 },
    },
  },
  {
    name: 'Diona',
    element: Cryo,
    weapon: Bow,
    tier: {
      mainDps: { single: 0, aoe: 0 },
      subDps: { single: 0, aoe: 0 },
      support: {
        buff: 0,
        heal: 4,
        commentEn:
          'Provides a ton of survivability thanks to having both shields and healing in her kit. Better than Qiqi/Barbara since she actually generates particles.',
        commentVi: '',
      },
    },
  },
  {
    name: 'Fischl',
    element: Electro,
    weapon: Bow,
    tier: {
      mainDps: {
        single: 2,
        aoe: 1,
        commentEn:
          'Honestly, not that great as a Main DPS and is mostly carried by Oz even if you build Physical damage.',
        commentVi: '',
      },
      subDps: {
        single: 4,
        aoe: 2,
        commentEn:
          'Another unit that is able to deal high, consistent DPS without needing much field time, however struggles in AoE situations.',
        commentVi: '',
      },
      support: { buff: 0, heal: 0 },
    },
  },
  {
    name: 'Ganyu',
    element: Cryo,
    weapon: Bow,
    tier: {
      mainDps: {
        single: 6,
        aoe: 6,
        commentEn:
          "With less restrictions on how she deals damage, as well as her CC access (Freeze/Taunt), Ganyu's able to maintain her already high DPS much more consistently than other carries.",
        commentVi: '',
      },
      subDps: {
        single: 4,
        aoe: 5,
        commentEn:
          'Even with most of her power budget in her Aimed Shot, Ganyu is still able to work really well as a Sub DPS, especially in situations where there are multiple enemies close to each other.',
        commentVi: '',
      },
      support: { buff: 0, heal: 0 },
    },
  },
  {
    name: 'Jean',
    element: Anemo,
    weapon: Sword,
    tier: {
      mainDps: { single: 0, aoe: 0 },
      subDps: { single: 0, aoe: 0 },
      support: {
        buff: 5,
        heal: 4,
        commentEn:
          'VV access, solid skill ratio, cleanse access, heals. Able to fulfill a lot of support roles with just one slot.',
        commentVi: '',
      },
    },
  },
  {
    name: 'Kaeya',
    element: Cryo,
    weapon: Sword,
    tier: {
      mainDps: {
        single: 3,
        aoe: 3,
        commentEn: 'Overshadowed by Ganyu, but still a solid DPS for a permafreeze team.',
        commentVi: '',
      },
      subDps: {
        single: 3,
        aoe: 3,
        commentEn:
          'Similar to Chongyun, without the enabling but with a higher Burst ratio and better energy gen. Also works for Superconduct.',
        commentVi: '',
      },
      support: { buff: 0, heal: 0 },
    },
  },
  {
    name: 'Keqing',
    element: Electro,
    weapon: Sword,
    tier: {
      mainDps: {
        single: 3,
        aoe: 3,
        commentEn:
          "A solid DPS that is very flexible in how she can work with the rest of her team, however is also pretty stamina reliant if you're wanting to spam her charged attack.",
        commentVi: '',
      },
      subDps: { single: 0, aoe: 0 },
      support: { buff: 0, heal: 0 },
    },
  },
  {
    name: 'Klee',
    element: Pyro,
    weapon: Catalyst,
    tier: {
      mainDps: {
        single: 5,
        aoe: 4,
        commentEn:
          'Comparable with Diluc. Less energy reliant but more stamina reliant. Has difficulty triggering reactions but can instead set up Sub DPS.',
        commentVi: '',
      },
      subDps: { single: 0, aoe: 0 },
      support: { buff: 0, heal: 0 },
    },
  },
  {
    name: 'Lisa',
    element: Electro,
    weapon: Catalyst,
    tier: {
      mainDps: { single: 0, aoe: 0 },
      subDps: {
        single: 1,
        aoe: 1,
        commentEn:
          "Unless you run other Electro, you're forced into using her skill which is likely going to end up losing you DPS. The skill is decent AoE, but her Burst actually has no AoE damage per chain.",
        commentVi: '',
      },
      support: { buff: 0, heal: 0 },
    },
  },
  {
    name: 'Mona',
    element: Hydro,
    weapon: Catalyst,
    tier: {
      mainDps: { single: 0, aoe: 0 },
      subDps: {
        single: 3,
        aoe: 4,
        commentEn:
          'Ridiculous burst damage with a taunt that can help group enemies in AoE situations.',
        commentVi: '',
      },
      support: { buff: 0, heal: 0 },
    },
  },
  {
    name: 'Ningguang',
    element: Geo,
    weapon: Catalyst,
    tier: {
      mainDps: {
        single: 4,
        aoe: 2,
        commentEn:
          "Even at C0, Ningguang can dish out of a lot of damage due to high ratios and short animations. However, she's still limited by her element and low AoE DPS.",
        commentVi: '',
      },
      subDps: { single: 0, aoe: 0 },
      support: { buff: 0, heal: 0 },
    },
  },
  {
    name: 'Noelle',
    element: Geo,
    weapon: Claymore,
    tier: {
      mainDps: { single: 0, aoe: 0 },
      subDps: { single: 0, aoe: 0 },
      support: {
        buff: 0,
        heal: 1,
        commentEn:
          'Having to swap to Noelle and normal attack just to heal ends up hurting your overall team DPS quite a bit.',
        commentVi: '',
      },
    },
  },
  {
    name: 'Qiqi',
    element: Cryo,
    weapon: Sword,
    tier: {
      mainDps: { single: 0, aoe: 0 },
      subDps: { single: 0, aoe: 0 },
      support: {
        buff: 0,
        heal: 3,
        commentEn:
          "Provides the highest healing in the game, but has pretty low ratios and more importantly, doesn't generate any particles.",
        commentVi: '',
      },
    },
  },
  {
    name: 'Razor',
    element: Electro,
    weapon: Claymore,
    tier: {
      mainDps: {
        single: 3,
        aoe: 2,
        commentEn:
          "High single target DPS in his burst, but limits your ability to swap to other units and make the most of your SUB DPSes. Claymore reach isn't actually that high.",
        commentVi: '',
      },
      subDps: { single: 0, aoe: 0 },
      support: { buff: 0, heal: 0 },
    },
  },
  {
    name: 'Sucrose',
    element: Cryo,
    weapon: Catalyst,
    tier: {
      mainDps: { single: 0, aoe: 0 },
      subDps: { single: 0, aoe: 0 },
      support: {
        buff: 4,
        heal: 0,
        commentEn:
          'VV access, solid grouping and decent EM buff. Synergises well on a lot of teams.',
        commentVi: '',
      },
    },
  },
  {
    name: 'Tartaglia',
    element: Hydro,
    weapon: Bow,
    tier: {
      mainDps: {
        single: 3,
        aoe: 4,
        commentEn:
          'Even during his Skill, Tartaglia is surprisingly not that high single target DPS. However, he makes up for this with his AoE, great team set up and high energy gen/spammable burst.',
        commentVi: '',
      },
      subDps: { single: 0, aoe: 0 },
      support: { buff: 0, heal: 0 },
    },
  },
  {
    name: 'Traveler (Anemo)',
    element: Anemo,
    weapon: Sword,
    tier: {
      mainDps: { single: 0, aoe: 0 },
      subDps: { single: 0, aoe: 0 },
      support: {
        buff: 4,
        heal: 0,
        commentEn:
          'Similar to the above Anemo units, with a shorter CD but also clunkier Burst that needs to be played around to perform optimally.',
        commentVi: '',
      },
    },
  },
  {
    name: 'Traveler (Geo)',
    element: Geo,
    weapon: Sword,
    tier: {
      mainDps: { single: 0, aoe: 0 },
      subDps: {
        single: 3,
        aoe: 3,
        commentEn:
          'Free C6 boosts their value a lot compared other units. Their skill decent damage and the burst is essentially a permanent +10% Crit Rate if played well. Can be a bit clunky however.',
        commentVi: '',
      },
      support: { buff: 0, heal: 0 },
    },
  },
  {
    name: 'Venti',
    element: Anemo,
    weapon: Bow,
    tier: {
      mainDps: { single: 0, aoe: 0 },
      subDps: {
        single: 5,
        aoe: 6,
        commentEn:
          'High ratios, solid energy generation, team energy generation and VV access together make Venti arguably the strongest single target Sub DPS. Top tier AoE goes without saying.',
        commentVi: '',
      },
      support: {
        buff: 6,
        heal: 0,
        commentEn:
          'Solely trivialises any mob chambers in Abyss while reducing RES and providing your team with energy',
        commentVi: '',
      },
    },
  },
  {
    name: 'Xiangling',
    element: Pyro,
    weapon: Polearm,
    tier: {
      mainDps: {
        single: 2,
        aoe: 2,
        commentEn:
          "OK physical DPS that can work well if you haven't got any other options or prefer normal attack gameplay.",
        commentVi: '',
      },
      subDps: {
        single: 3,
        aoe: 4,
        commentEn:
          "Similar to Xingqiu, you end up having to invest a fair bit into ER which lowers her potential. Excellent AoE thanks to her Bursts' reach.",
        commentVi: '',
      },
      support: { buff: 0, heal: 0 },
    },
  },
  {
    name: 'Xiao',
    element: Anemo,
    weapon: Polearm,
    tier: {
      mainDps: { single: 0, aoe: 0 },
      subDps: { single: 0, aoe: 0 },
      support: { buff: 0, heal: 0 },
    },
  },
  {
    name: 'Xingqiu',
    element: Hydro,
    weapon: Sword,
    tier: {
      mainDps: { single: 0, aoe: 0 },
      subDps: {
        single: 4,
        aoe: 2,
        commentEn:
          'Due to his high Burst cost and long countdowns, you end up having to invest a lot his power budget into ER which hurts his DPS. Still a top tier enabler for Pyro units.',
        commentVi: '',
      },
      support: {
        buff: 0,
        heal: 2,
        commentEn:
          "Even though Xingqiu isn't run for his supporting abilities, I'd still like to highlight that he still provides a decent amount of damage reduction and healing that isn't reflected in his Sub DPS ranking.",
        commentVi: '',
      },
    },
  },
  {
    name: 'Xinyan',
    element: Pyro,
    weapon: Claymore,
    tier: {
      mainDps: { single: 0, aoe: 0 },
      subDps: {
        single: 1,
        aoe: 1,
        commentEn: 'Very long CDs, low energy gen and honestly, not that great damage.',
        commentVi: '',
      },
      support: { buff: 0, heal: 0 },
    },
  },
  {
    name: 'Zhongli',
    element: Geo,
    weapon: Polearm,
    tier: {
      mainDps: {
        single: 2,
        aoe: 2,
        commentEn:
          'Similar to Xiangling, an OK DPS that will likely jump up a tier (or two) once his changes come out in 1.3.',
        commentVi: '',
      },
      subDps: { single: 0, aoe: 0 },
      support: { buff: 0, heal: 0 },
    },
  },
  {
    name: 'Albedo',
    element: Geo,
    weapon: Sword,
    tier: {
      mainDps: { single: 0, aoe: 0 },
      subDps: {
        single: 4,
        aoe: 3,
        commentEn:
          'Despite being Geo, Albedo is still able to deal a ton of damage very consistently.',
        commentVi: '',
      },
      support: { buff: 0, heal: 0 },
    },
  },
  {
    name: 'Hu Tao',
    element: Pyro,
    weapon: Polearm,
    tier: {
      mainDps: { single: 0, aoe: 0 },
      subDps: {
        single: 4,
        aoe: 3,
        commentEn:
          'Despite being Geo, Albedo is still able to deal a ton of damage very consistently.',
        commentVi: '',
      },
      support: { buff: 0, heal: 0 },
    },
  },
  {
    name: 'Yanfei',
    element: Pyro,
    weapon: Catalyst,
    tier: {
      mainDps: { single: 0, aoe: 0 },
      subDps: {
        single: 4,
        aoe: 3,
        commentEn:
          'Despite being Geo, Albedo is still able to deal a ton of damage very consistently.',
        commentVi: '',
      },
      support: { buff: 0, heal: 0 },
    },
  },
  {
    name: 'Rosaria',
    element: Cryo,
    weapon: Polearm,
    tier: {
      mainDps: { single: 0, aoe: 0 },
      subDps: {
        single: 4,
        aoe: 3,
        commentEn:
          'Despite being Geo, Albedo is still able to deal a ton of damage very consistently.',
        commentVi: '',
      },
      support: { buff: 0, heal: 0 },
    },
  },
  {
    name: 'Eula',
    element: Cryo,
    weapon: Claymore,
    tier: {
      mainDps: { single: 0, aoe: 0 },
      subDps: {
        single: 4,
        aoe: 3,
        commentEn:
          'Despite being Geo, Albedo is still able to deal a ton of damage very consistently.',
        commentVi: '',
      },
      support: { buff: 0, heal: 0 },
    },
    isNew: true,
  },
]

export { Characters }
