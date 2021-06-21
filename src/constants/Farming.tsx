const Talents = [
  {
    nameEn: 'Freedom',
    nameVi: 'Tự Do',
    dayEn: 'Monday, Thursday',
    dayVi: 'Thứ hai, Thứ năm',
    characters: [
      { name: 'Amber', element: 'Pyro' },
      { name: 'Barbara', element: 'Hydro' },
      { name: 'Diona', element: 'Cryo' },
      { name: 'Klee', element: 'Pyro' },
      { name: 'Sucrose', element: 'Anemo' },
      { name: 'Tartaglia', element: 'Hydro' },
      { name: 'Traveler (Anemo)', element: 'Anemo' },
      { name: 'Traveler (Geo)', element: 'Geo' },
    ],
  },
  {
    nameEn: 'Prosperity',
    nameVi: 'Phồn Vinh',
    dayEn: 'Monday, Thursday',
    dayVi: 'Thứ hai, Thứ năm',
    characters: [
      { name: 'Keqing', element: 'Electro' },
      { name: 'Ningguang', element: 'Geo' },
      { name: 'Qiqi', element: 'Cryo' },
      { name: 'Xiao', element: 'Anemo' },
    ],
  },
  {
    nameEn: 'Resistance',
    nameVi: 'Kháng Chiến',
    dayEn: 'Tuesday, Friday',
    dayVi: 'Thứ ba, Thứ sáu',
    characters: [
      { name: 'Bennett', element: 'Pyro' },
      { name: 'Diluc', element: 'Pyro' },
      { name: 'Jean', element: 'Anemo' },
      { name: 'Mona', element: 'Hydro' },
      { name: 'Noelle', element: 'Geo' },
      { name: 'Razor', element: 'Electro' },
      { name: 'Traveler (Anemo)', element: 'Anemo' },
      { name: 'Traveler (Geo)', element: 'Geo' },
    ],
  },
  {
    nameEn: 'Diligence',
    nameVi: 'Chăm Chỉ',
    dayEn: 'Tuesday, Friday',
    dayVi: 'Thứ ba, Thứ sáu',
    characters: [
      { name: 'Chongyun', element: 'Cryo' },
      { name: 'Ganyu', element: 'Cryo' },
      { name: 'Xiangling', element: 'Pyro' },
    ],
  },
  {
    nameEn: 'Ballad',
    nameVi: 'Thơ Ca',
    dayEn: 'Wednesday, Saturday',
    dayVi: 'Thứ tư, Thứ bảy',
    characters: [
      { name: 'Albedo', element: 'Geo' },
      { name: 'Fischl', element: 'Electro' },
      { name: 'Kaeya', element: 'Cryo' },
      { name: 'Lisa', element: 'Electro' },
      { name: 'Rosaria', element: 'Cryo' },
      { name: 'Traveler (Anemo)', element: 'Anemo' },
      { name: 'Traveler (Geo)', element: 'Geo' },
      { name: 'Venti', element: 'Anemo' },
    ],
  },
  {
    nameEn: 'Gold',
    nameVi: 'Hoàng Kim',
    dayEn: 'Wednesday, Saturday',
    dayVi: 'Thứ tư, Thứ bảy',
    characters: [
      { name: 'Beidou', element: 'Electro' },
      { name: 'Xingqiu', element: 'Hydro' },
      { name: 'Xinyan', element: 'Pyro' },
      { name: 'Zhongli', element: 'Geo' },
    ],
  },
  {
    nameEn: 'Tail of Boreas',
    nameVi: 'Lông Vũ Bắc Phong',
    dayEn: 'Andrius',
    dayVi: 'Sói Bắc Phong',
    characters: [
      { name: 'Qiqi', element: 'Cryo' },
      { name: 'Venti', element: 'Anemo' },
      { name: 'Xingqiu', element: 'Hydro' },
    ],
  },
  {
    nameEn: 'Ring of Boreas',
    nameVi: 'Móng Vuốt Bắc Phong',
    dayEn: 'Andrius',
    dayVi: 'Sói Bắc Phong',
    characters: [
      { name: 'Barbara', element: 'Hydro' },
      { name: 'Keqing', element: 'Electro' },
      { name: 'Klee', element: 'Pyro' },
      { name: 'Mona', element: 'Hydro' },
    ],
  },
  {
    nameEn: 'Spirit Locket of Boreas',
    nameVi: 'Linh Hồn Bắc Phong',
    dayEn: 'Andrius',
    dayVi: 'Sói Bắc Phong',
    characters: [
      { name: 'Fischl', element: 'Electro' },
      { name: 'Kaeya', element: 'Cryo' },
      { name: 'Ningguang', element: 'Geo' },
      { name: 'Sucrose', element: 'Anemo' },
    ],
  },
  {
    nameEn: "Dvalin's Plume",
    nameVi: 'Lông Vũ Đông Phong',
    dayEn: 'Dvalin',
    dayVi: 'Phong Ma Long',
    characters: [
      { name: 'Bennett', element: 'Pyro' },
      { name: 'Diluc', element: 'Pyro' },
      { name: 'Jean', element: 'Anemo' },
    ],
  },
  {
    nameEn: "Dvalin's Claw",
    nameVi: 'Móng Vuốt Đông Phong',
    dayEn: 'Dvalin',
    dayVi: 'Phong Ma Long',
    characters: [
      { name: 'Lisa', element: 'Electro' },
      { name: 'Noelle', element: 'Geo' },
      { name: 'Razor', element: 'Electro' },
      { name: 'Xiangling', element: 'Pyro' },
    ],
  },
  {
    nameEn: "Dvalin's Sigh",
    nameVi: 'Hơi Thở Đông Phong',
    dayEn: 'Dvalin',
    dayVi: 'Phong Ma Long',
    characters: [
      { name: 'Amber', element: 'Pyro' },
      { name: 'Beidou', element: 'Electro' },
      { name: 'Chongyun', element: 'Cryo' },
      { name: 'Traveler (Anemo)', element: 'Anemo' },
      { name: 'Traveler (Geo)', element: 'Geo' },
    ],
  },
  {
    nameEn: 'Tusk of Monoceros Caeli',
    nameVi: 'Tôn Thiên Kình-Sừng',
    dayEn: 'Tartaglia',
    dayVi: 'Childe',
    characters: [
      { name: 'Albedo', element: 'Geo' },
      { name: 'Xinyan', element: 'Pyro' },
      { name: 'Zhongli', element: 'Geo' },
    ],
  },
  {
    nameEn: 'Shard of a Foul Legacy',
    nameVi: 'Đao Ma Vương-Mảnh Vỡ',
    dayEn: 'Tartaglia',
    dayVi: 'Childe',
    characters: [
      { name: 'Diona', element: 'Cryo' },
      { name: 'Tartaglia', element: 'Hydro' },
    ],
  },
  {
    nameEn: 'Shadow of the Warrior',
    nameVi: 'Linh Hồn Võ Luyện-Cô Độc',
    dayEn: 'Tartaglia',
    dayVi: 'Childe',
    characters: [
      { name: 'Ganyu', element: 'Cryo' },
      { name: 'Rosaria', element: 'Cryo' },
      { name: 'Xiao', element: 'Anemo' },
    ],
  },
]

const CharacterAscension = [
  {
    nameEn: 'Basalt Pillar',
    nameVi: 'Tháp Huyền Nham',
    characters: [
      { name: 'Albedo', element: 'Geo' },
      { name: 'Ningguang', element: 'Geo' },
      { name: 'Noelle', element: 'Geo' },
      { name: 'Zhongli', element: 'Geo' },
    ],
  },
  {
    nameEn: 'Cleansing Heart',
    nameVi: 'Trái Tim Thuần Khiết',
    characters: [
      { name: 'Barbara', element: 'Hydro' },
      { name: 'Mona', element: 'Hydro' },
      { name: 'Tartaglia', element: 'Hydro' },
      { name: 'Xingqiu', element: 'Hydro' },
    ],
  },
  {
    nameEn: 'Everflame Seed',
    nameVi: 'Ngọn Lửa Vĩnh Hằng',
    characters: [
      { name: 'Amber', element: 'Pyro' },
      { name: 'Bennett', element: 'Pyro' },
      { name: 'Diluc', element: 'Pyro' },
      { name: 'Klee', element: 'Pyro' },
      { name: 'Xiangling', element: 'Pyro' },
      { name: 'Xinyan', element: 'Pyro' },
    ],
  },
  {
    nameEn: 'Hoarfrost Core',
    nameVi: 'Hạt Nhân Cực Hàn',
    characters: [
      { name: 'Chongyun', element: 'Cryo' },
      { name: 'Diona', element: 'Cryo' },
      { name: 'Kaeya', element: 'Cryo' },
      { name: 'Qiqi', element: 'Cryo' },
    ],
  },
  {
    nameEn: 'Hurricane Seed',
    nameVi: 'Hạt Giống Bão',
    characters: [
      { name: 'Jean', element: 'Anemo' },
      { name: 'Sucrose', element: 'Anemo' },
      { name: 'Venti', element: 'Anemo' },
    ],
  },
  {
    nameEn: 'Lightning Prism',
    nameVi: 'Lăng Kính Sấm Sét',
    characters: [
      { name: 'Beidou', element: 'Electro' },
      { name: 'Fischl', element: 'Electro' },
      { name: 'Keqing', element: 'Electro' },
      { name: 'Lisa', element: 'Electro' },
      { name: 'Razor', element: 'Electro' },
    ],
  },
  {
    nameEn: 'Juvenile Jade',
    nameVi: 'Ngọc Chưa Chín',
    characters: [
      { name: 'Ganyu', element: 'Cryo' },
      { name: 'Xiao', element: 'Anemo' },
    ],
  },
  {
    nameEn: 'Damaged Mask',
    nameVi: 'Mặt Nạ Vỡ',
    characters: [
      { name: 'Chongyun', element: 'Cryo' },
      { name: 'Jean', element: 'Anemo' },
      { name: 'Noelle', element: 'Geo' },
      { name: 'Razor', element: 'Electro' },
      { name: 'Xingqiu', element: 'Hydro' },
      { name: 'Traveler (Anemo)', element: 'Anemo' },
      { name: 'Traveler (Geo)', element: 'Geo' },
    ],
  },
  {
    nameEn: 'Stained Mask',
    nameVi: 'Mặt Nạ Bẩn',
    image:
      'https://lh4.googleusercontent.com/EUU_elaj8cjUEQT7otvtgouwmHBZZE0MWsVGK2qyMT2MSco4Zqx_CzYA4-FGobo',
  },
  {
    nameEn: 'Ominous Mask',
    nameVi: 'Mặt Nạ Xui Xẻo',
    image:
      'https://lh6.googleusercontent.com/gD8qRmhtSm_78fbw4grcgzBXzvs-sGelc9Vmnxv3MHKYuwY2qtrOpmu9j9h7jJA',
  },
  {
    nameEn: 'Divining Scroll',
    nameVi: 'Bản Vẽ Hướng Dẫn',
    characters: [
      { name: 'Albedo', element: 'Geo' },
      { name: 'Barbara', element: 'Hydro' },
      { name: 'Klee', element: 'Pyro' },
      { name: 'Qiqi', element: 'Cryo' },
      { name: 'Traveler (Anemo)', element: 'Anemo' },
      { name: 'Traveler (Geo)', element: 'Geo' },
    ],
  },
  {
    nameEn: 'Sealed Scroll',
    nameVi: 'Bản Vẽ Phong Ấn',
    image:
      'https://lh6.googleusercontent.com/JqCippZ30DCxXe40rpRe53r-rneDmf3C5DZaA6mbH626Eeqx2zqiGx5wm3uH4fo',
  },
  {
    nameEn: 'Forbidden Curse Scroll',
    nameVi: 'Bản Vẽ Cấm Chú',
    image:
      'https://lh3.googleusercontent.com/AZU1Y6VQe-UArzIqgmsvICHgT333cWZTWEq79hnKcmmveygtcGl3AttbG0P2l9k',
  },
  {
    nameEn: 'Firm Arrowhead',
    nameVi: 'Mũi Tên Chắc Chắn',
    characters: [
      { name: 'Amber', element: 'Pyro' },
      { name: 'Diona', element: 'Cryo' },
      { name: 'Fischl', element: 'Electro' },
      { name: 'Xiao', element: 'Anemo' },
    ],
  },
  {
    nameEn: 'Sharp Arrowhead',
    nameVi: 'Mũi Tên Sắc Bén',
    image:
      'https://lh4.googleusercontent.com/wZ5ipzQBgp7seQs3nq9uQ8B2FjEo_T9nWaLmbUfyWHmWqOq96Vons26cko8J06s',
  },
  {
    nameEn: 'Weathered Arrowhead',
    nameVi: 'Mũi Tên Thiện Chiến',
    image:
      'https://lh3.googleusercontent.com/6sRVz-LqU7gLX_Ou8qvl4CJEsjAFIrucKT2RhMd-launsaCQQDZ0tHXl6j14b4U',
  },
  {
    nameEn: "Recruit's Insignia",
    nameVi: 'Phù Hiệu Tân Binh',
    characters: [
      { name: 'Diluc', element: 'Pyro' },
      { name: 'Ningguang', element: 'Geo' },
      { name: 'Tartaglia', element: 'Hydro' },
    ],
  },
  {
    nameEn: "Sergeant's Insignia",
    nameVi: 'Phù Hiệu Sĩ Quan',
    image:
      'https://lh3.googleusercontent.com/KIxiTwW2DPONUCZZB7LcYcr_XPmXcem7aT1FZkP3D8-VUYIFda5BrdmGd4yXrNQ',
  },
  {
    nameEn: "Lieutenant's Insignia",
    nameVi: 'Phù Hiệu Hiệu Úy',
    image:
      'https://lh5.googleusercontent.com/6AIDVRaX0YAmW09YMPWAfDlKPpXQBp2ow5z2SvNe4xdvI_1SShQ5J0tEPlpwUtQ',
  },
  {
    nameEn: 'Slime Condensate',
    nameVi: 'Dịch Slime',
    characters: [
      { name: 'Lisa', element: 'Electro' },
      { name: 'Venti', element: 'Anemo' },
      { name: 'Xiangling', element: 'Pyro' },
      { name: 'Zhongli', element: 'Geo' },
    ],
  },
  {
    nameEn: 'Slime Secretions',
    nameVi: 'Tinh Slime',
    image:
      'https://lh5.googleusercontent.com/LFTC_II__7hxOyCz4PiASewWDMA6DNNU-xqzzc-kautD5L6c_QIWZL-spCeZhMg',
  },
  {
    nameEn: 'Slime Concentrate',
    nameVi: 'Bột Slime',
    image:
      'https://lh6.googleusercontent.com/MjiGFiwU4kV0ldF-w2YkB8wU-4sCRXBNm7KnsM_JYkPKBvN6HMwJt8nQSDmeWXc',
  },
  {
    nameEn: 'Treasure Hoarder Insignia',
    nameVi: 'Ấn Quạ Tầm Bảo',
    characters: [
      { name: 'Beidou', element: 'Electro' },
      { name: 'Bennett', element: 'Pyro' },
      { name: 'Kaeya', element: 'Cryo' },
      { name: 'Xinyan', element: 'Pyro' },
    ],
  },
  {
    nameEn: 'Silver Raven Insignia',
    nameVi: 'Ấn Quạ Bạc Ẩn',
    image:
      'https://lh4.googleusercontent.com/3JLUREOQYxxqvFK6VuaJHqh2X6QX7m7sMILs4ZLSADa_Mur8g-lW8Og6Ai-usJo',
  },
  {
    nameEn: 'Golden Raven Insignia',
    nameVi: 'Ấn Quạ Trộm Vàng',
    image:
      'https://lh4.googleusercontent.com/k3QyKrxitl4Cq-Zx9avRzAI7Qml7sSqDRjwwFjWeMIWZS0jUADL3GTr-YyLZf8Y',
  },
  {
    nameEn: 'Whopperflower Nectar',
    nameVi: 'Mật Hoa Lừa Dối',
    characters: [
      { name: 'Ganyu', element: 'Cryo' },
      { name: 'Keqing', element: 'Electro' },
      { name: 'Mona', element: 'Hydro' },
      { name: 'Sucrose', element: 'Anemo' },
    ],
  },
  {
    nameEn: 'Shimmering Nectar',
    nameVi: 'Mật Hoa Lấp Lánh',
    image:
      'https://lh4.googleusercontent.com/KV-AA1A2lmpun0t0ji9-5Ea_chN6Et6pr50s0IjfqtJtelgOGqclPnLMFr6zQys',
  },
  {
    nameEn: 'Energy Nectar',
    nameVi: 'Mật Hoa Nguyên Tố',
    image:
      'https://lh3.googleusercontent.com/1TPgqyWGeo40xNtXTa-cpQYIwtbgOIF_7GfeaDiK1JMDgvMgqbgcYdRY9x8YDjU',
  },
  {
    nameEn: 'Calla Lily',
    nameVi: 'Hoa Calla Lily',
    characters: [
      { name: 'Diona', element: 'Cryo' },
      { name: 'Kaeya', element: 'Cryo' },
    ],
  },
  {
    nameEn: 'Cecilia',
    nameVi: 'Hoa Cecilia',
    characters: [
      { name: 'Albedo', element: 'Geo' },
      { name: 'Venti', element: 'Anemo' },
    ],
  },
  {
    nameEn: 'Cor Lapis',
    nameVi: 'Thạch Phách',
    characters: [
      { name: 'Chongyun', element: 'Cryo' },
      { name: 'Keqing', element: 'Electro' },
      { name: 'Zhongli', element: 'Geo' },
    ],
  },
  {
    nameEn: 'Dandelion Seed',
    nameVi: 'Hạt Bồ Công Anh',
    characters: [{ name: 'Jean', element: 'Anemo' }],
  },
  {
    nameEn: 'Glaze Lily',
    nameVi: 'Bách Hợp Lưu Ly',
    characters: [{ name: 'Ningguang', element: 'Geo' }],
  },
  {
    nameEn: 'Jueyun Chili',
    nameVi: 'Ớt Tuyệt Vân',
    characters: [{ name: 'Xiangling', element: 'Pyro' }],
  },
  {
    nameEn: 'Noctilous Jade',
    nameVi: 'Dạ Phách Thạch',
    characters: [{ name: 'Beidou', element: 'Electro' }],
  },
  {
    nameEn: 'Philanemo Mushroom',
    nameVi: 'Nấm Rơm Gió',
    characters: [
      { name: 'Barbara', element: 'Hydro' },
      { name: 'Klee', element: 'Pyro' },
      { name: 'Mona', element: 'Hydro' },
    ],
  },
  {
    nameEn: 'Qingxin',
    nameVi: 'Thanh Tâm',
    characters: [
      { name: 'Ganyu', element: 'Cryo' },
      { name: 'Xiao', element: 'Anemo' },
    ],
  },
  {
    nameEn: 'Silk Flower',
    nameVi: 'Hoa Nghê Thường',
    characters: [{ name: 'Xingqiu', element: 'Hydro' }],
  },
  {
    nameEn: 'Small Lamp Grass',
    nameVi: 'Tiểu Đăng Thảo',
    characters: [
      { name: 'Amber', element: 'Pyro' },
      { name: 'Diluc', element: 'Pyro' },
      { name: 'Fischl', element: 'Electro' },
    ],
  },
  {
    nameEn: 'Starconch',
    nameVi: 'Ốc Sao',
    characters: [{ name: 'Tartaglia', element: 'Hydro' }],
  },
  {
    nameEn: 'Valberry',
    nameVi: 'Quả Dâu Đỏ',
    characters: [
      { name: 'Lisa', element: 'Electro' },
      { name: 'Noelle', element: 'Geo' },
    ],
  },
  {
    nameEn: 'Violetgrass',
    nameVi: 'Túi Lưu Ly',
    characters: [
      { name: 'Qiqi', element: 'Cryo' },
      { name: 'Xinyan', element: 'Pyro' },
    ],
  },
  {
    nameEn: 'Windwheel Aster',
    nameVi: 'Cúc Cánh Quạt',
    characters: [
      { name: 'Bennett', element: 'Pyro' },
      { name: 'Traveler (Anemo)', element: 'Anemo' },
      { name: 'Traveler (Geo)', element: 'Geo' },
      { name: 'Sucrose', element: 'Anemo' },
    ],
  },
  {
    nameEn: 'Wolfhook',
    nameVi: 'Quả Móc Câu',
    characters: [{ name: 'Razor', element: 'Electro' }],
  },
]

export { Talents, CharacterAscension }
