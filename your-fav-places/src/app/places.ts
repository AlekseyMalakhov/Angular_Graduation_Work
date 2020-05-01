const places = [
  {
    id: 1,
    name: 'Lorem',
    author: 'Stipe Miocic',
    author_id: "stipe_miocic",
    img: '1.jpg',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius ornare est in porttitor. Nunc congue feugiat risus ut auctor. 
    Maecenas Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius ornare est in porttitor. Nunc congue feugiat risus ut auctor. Maecenas 
    orem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius ornare est in porttitor. Nunc congue feugiat risus ut auctor. 
    Maecenas Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius ornare est in porttitor. Nunc congue feugiat risus ut auctor. Maecenas`,
    coords: [700, 500],
  },
  {
    id: 2,
    name: 'Pharetra ',
    author: 'Stipe Miocic',
    author_id: "stipe_miocic",
    img: '2.jpg',
    description: `Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Habitant morbi tristique senectus et netus et malesuada. 
    Vulputate mi Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Habitant morbi tristique senectus et netus et malesuada. Vulputate mi 
    Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Habitant morbi tristique senectus et netus et malesuada. 
    Vulputate mi Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Habitant morbi tristique senectus et netus et malesuada. Vulputate mi`,
    coords: [1800, 100],
  },
  {
    id: 3,
    name: 'Fermentum',
    author: 'Stipe Miocic',
    author_id: "stipe_miocic",
    img: '3.jpg',
    description: `In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Adipiscing bibendum est ultricies integer quis auctor elit. Ut placerat orci 
    nulla pellentesque In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Adipiscing bibendum est ultricies integer quis auctor elit. 
    Ut placerat orci nulla pellentesque In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Adipiscing bibendum est ultricies integer quis auctor elit. Ut placerat orci 
    nulla pellentesque In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Adipiscing bibendum est ultricies integer quis auctor elit. 
    Ut placerat orci nulla pellentesque`,
    coords: [1300, 1000],
  },
  {
    id: 4,
    name: 'Mollis',
    author: 'Stipe Miocic',
    author_id: "stipe_miocic",
    img: '1.jpg',
    description: `Mollis aliquam ut porttitor, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Est ultricies integer quis auctor elit sed. Curabitur gravida arcu ac tortor dignissim. Semper eget duis at tellus at. Purus ut faucibus 
    pulvinar elementum. Eget felis eget nunc lobortis mattis aliquam faucibus purus in. Risus feugiat in ante metus dictum at. Faucibus a pellentesque 
    sit amet porttitor eget dolor morbi non. Porta lorem mollis aliquam ut porttitor leo a diam. Pulvinar elementum integer enim neque volutpat 
    ac tincidunt. Nunc aliquet bibendum enim facilisis gravida neque convallis. Id eu nisl nunc mi ipsum faucibus vitae.`,
    coords: [444, 444],
  },
  {
    id: 5,
    name: 'Malesuada',
    author: 'Stipe Miocic',
    author_id: "stipe_miocic",
    img: '2.jpg',
    description: `Ullamcorper malesuada, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    At urna condimentum mattis pellentesque id nibh. Sed viverra ipsum nunc aliquet. Vitae sapien pellentesque habitant morbi. Dui accumsan sit amet 
    nulla facilisi morbi tempus iaculis. Diam volutpat commodo sed egestas egestas fringilla phasellus. Elementum eu facilisis sed odio morbi quis 
    commodo odio aenean. Gravida dictum fusce ut placerat orci. Porta lorem mollis aliquam ut. Sapien et ligula ullamcorper malesuada proin libero 
    nunc consequat interdum. Aliquam id diam maecenas ultricies mi eget mauris pharetra et. Quis enim lobortis scelerisque fermentum dui faucibus.`,
    coords: [2242, 628],
  },
  {
    id: 6,
    name: 'Urna',
    author: 'Stipe Miocic',
    author_id: "stipe_miocic",
    img: '3.jpg',
    description: `Urna duis convallis convallis tellus, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Arcu ac tortor dignissim convallis aenean. Diam maecenas ultricies mi eget. Lectus arcu bibendum at varius vel pharetra vel turpis. Vestibulum 
    lectus mauris ultrices eros in. Ornare suspendisse sed nisi lacus sed. Elementum nisi quis eleifend quam adipiscing vitae proin. Urna duis 
    convallis convallis tellus. Lectus vestibulum mattis ullamcorper velit sed ullamcorper. Ac tortor dignissim convallis aenean et tortor. Nunc 
    vel risus commodo viverra maecenas accumsan lacus vel facilisis. Amet consectetur adipiscing elit pellentesque habitant.`,
    coords: [347, 738],
  },
  {
    id: 7,
    name: 'Porta',
    author: 'Stipe Miocic',
    author_id: "stipe_miocic",
    img: '4.jpg',
    description: `Mattis aliquam faucibus purus in massa, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo 
    elit at imperdiet dui. Proin fermentum leo vel orci porta non pulvinar neque. Dui ut ornare lectus sit amet est placerat in egestas. 
    Dictum fusce ut placerat orci nulla pellentesque dignissim enim sit. Ullamcorper velit sed ullamcorper morbi tincidunt. Imperdiet sed euismod 
    nisi porta lorem mollis aliquam. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Mattis aliquam faucibus purus in massa. Sit amet 
    est placerat in egestas erat imperdiet sed. Orci eu lobortis elementum nibh. Mattis pellentesque id nibh tortor id aliquet lectus proin.`,
    coords: [1936, 708],
  },
  {
    id: 8,
    name: 'Vitae',
    author: 'Stipe Miocic',
    author_id: "stipe_miocic",
    img: '5.jpg',
    description: `Cras semper auctor neque vitae tempus quam pellentesque nec, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus 
    arcu bibendum at varius vel pharetra vel turpis. Bibendum est ultricies integer quis auctor. Non diam phasellus vestibulum lorem sed risus. 
    Cras pulvinar mattis nunc sed blandit libero volutpat. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor. In fermentum posuere urna 
    nec tincidunt praesent semper. In ornare quam viverra orci sagittis eu volutpat odio. Cras semper auctor neque vitae tempus quam pellentesque nec. 
    At quis risus sed vulputate odio ut enim blandit volutpat. Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam. Enim eu turpis 
    egestas pretium aenean pharetra magna ac placerat.`,
    coords: [840, 145],
  },
  {
    id: 9,
    name: 'Venenatis',
    author: 'Stipe Miocic',
    author_id: "stipe_miocic",
    img: '1.jpg',
    description: `Volutpat consequat mauris nunc congue, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Cras fermentum odio eu feugiat pretium nibh. Viverra mauris in aliquam sem fringilla ut. Viverra aliquet eget sit amet tellus cras. 
    Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Ultrices tincidunt arcu non sodales neque sodales ut etiam sit. 
    Quis varius quam quisque id diam vel quam. Suspendisse sed nisi lacus sed. Et malesuada fames ac turpis. Id porta nibh venenatis cras sed felis. 
    Justo donec enim diam vulputate ut pharetra sit amet. Volutpat consequat mauris nunc congue.`,
    coords: [1872, 996],
  },
  {
    id: 10,
    name: 'Ullamcorper',
    author: 'Stipe Miocic',
    author_id: "stipe_miocic",
    img: '2.jpg',
    description: `Pharetra magna ac placerat vestibulum lectus mauris, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris 
    commodo quis imperdiet massa tincidunt nunc pulvinar. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris. Erat imperdiet 
    sed euismod nisi porta lorem mollis aliquam. Consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat. Pellentesque adipiscing 
    commodo elit at imperdiet dui accumsan sit amet. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Libero enim sed faucibus 
    turpis in eu mi bibendum. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Curabitur vitae nunc sed velit 
    dignissim sodales ut. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Justo laoreet sit amet cursus sit.`,
    coords: [857, 961],
  },
  {
    id: 11,
    name: 'Ipsum',
    author: 'Khabib Nurmagamedov',
    author_id: "khabib_nurmagamedov",
    img: '4.jpg',
    description: `imperdiet velit malesuada ex lobortis interdum. Fusce odio lectus, varius eget est non, porta aliquam sapien. Ut porta, eros in porttitor 
    imperdiet velit malesuada ex lobortis interdum. Fusce odio lectus, varius eget est non, porta aliquam sapien. Ut porta, eros in porttitor imperdiet 
    velit malesuada ex lobortis interdum. Fusce odio lectus, varius eget est non, porta aliquam sapien. Ut porta, eros in porttitor 
    imperdiet velit malesuada ex lobortis interdum. Fusce odio lectus, varius eget est non, porta aliquam sapien. Ut porta, eros in porttitor `,
    coords: [1000, 700],
  },
  {
    id: 12,
    name: 'Aliquet',
    author: 'Khabib Nurmagamedov',
    author_id: "khabib_nurmagamedov",
    img: '5.jpg',
    description: `Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Ut pharetra sit amet aliquam id diam maecenas ultricies. 
    Neque sodales ut etiam sit amet nisl. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Ut pharetra sit amet aliquam id diam maecenas 
    ultricies. Neque sodales ut etiam sit amet nisl. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Ut pharetra sit amet aliquam id diam maecenas ultricies. 
    Neque sodales ut etiam sit amet nisl. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Ut pharetra sit amet aliquam id diam maecenas 
    ultricies. Neque sodales ut etiam sit amet nisl.`,
    coords: [1600, 900],
  },
  {
    id: 13,
    name: 'Augue lacus',
    author: 'Khabib Nurmagamedov',
    author_id: "khabib_nurmagamedov",
    img: '1.jpg',
    description: `Augue lacus viverra vitae congue eu consequat ac felis donec. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. 
    Venenatis cras sed felis eget velit. Augue lacus viverra vitae congue eu consequat ac felis donec. Eleifend donec pretium vulputate sapien nec sagittis 
    aliquam malesuada. Venenatis cras sed felis eget velit. Augue lacus viverra vitae congue eu consequat ac felis donec. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. 
    Venenatis cras sed felis eget velit. Augue lacus viverra vitae congue eu consequat ac felis donec. Eleifend donec pretium vulputate sapien nec sagittis 
    aliquam malesuada. Venenatis cras sed felis eget velit.`,
    coords: [500, 900],
  },
  {
    id: 14,
    name: 'Massa',
    author: 'Khabib Nurmagamedov',
    author_id: "khabib_nurmagamedov",
    img: '1.jpg',
    description: `Proin nibh nisl condimentum id venenatis a condimentum vitae sapien incididunt ut labore et dolore magna aliqua. 
    Fermentum iaculis eu non diam phasellus vestibulum lorem sed. Tempor nec feugiat nisl pretium fusce id velit ut tortor. Lobortis mattis 
    aliquam faucibus purus in massa tempor. Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Vel orci porta non pulvinar neque. 
    Cras adipiscing enim eu turpis egestas pretium aenean. Sed augue lacus viverra vitae congue. Nunc mattis enim ut tellus elementum sagittis vitae 
    et leo. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien. At auctor urna nunc id cursus metus aliquam. Amet mattis vulputate enim 
    nulla aliquet porttitor lacus luctus accumsan.`,
    coords: [526, 19],
  },
  {
    id: 15,
    name: 'Habitant',
    author: 'Khabib Nurmagamedov',
    author_id: "khabib_nurmagamedov",
    img: '2.jpg',
    description: `Ut tellus elementum sagittis vitae et leo duis. incididunt ut labore et dolore magna 
    aliqua. Ultrices vitae auctor eu augue ut lectus. Sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Ipsum dolor 
    sit amet consectetur adipiscing elit. Ut tellus elementum sagittis vitae et leo duis. Quis ipsum suspendisse ultrices gravida dictum 
    fusce ut placerat. Ut sem nulla pharetra diam sit amet. Aliquam ultrices sagittis orci a scelerisque purus. Pretium fusce id velit ut 
    tortor pretium. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Id venenatis a condimentum vitae sapien pellentesque 
    habitant morbi. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et.`,
    coords: [2159, 438],
  },
  {
    id: 16,
    name: 'Egestas',
    author: 'Khabib Nurmagamedov',
    author_id: "khabib_nurmagamedov",
    img: '3.jpg',
    description: `Amet tellus cras adipiscing enim, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Egestas pretium aenean pharetra magna ac placerat. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Turpis massa sed elementum 
    tempus egestas sed sed. Risus ultricies tristique nulla aliquet enim tortor at. Amet tellus cras adipiscing enim. Tellus in metus vulputate eu 
    scelerisque. Morbi non arcu risus quis. Vitae congue eu consequat ac felis. Lacus suspendisse faucibus interdum posuere. Sit amet consectetur 
    adipiscing elit pellentesque habitant. Mattis enim ut tellus elementum sagittis.`,
    coords: [379, 1039],
  },
  {
    id: 17,
    name: 'Vestibulum',
    author: 'Khabib Nurmagamedov',
    author_id: "khabib_nurmagamedov",
    img: '4.jpg',
    description: `Enim ut tellus elementum sagittis vitae et leo duis ut incididunt ut labore et dolore magna aliqua. 
    Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt. Et malesuada fames ac turpis egestas integer eget aliquet. Varius 
    quam quisque id diam vel quam elementum pulvinar etiam. Enim ut tellus elementum sagittis vitae et leo duis ut. Iaculis eu non diam phasellus 
    vestibulum lorem sed risus ultricies. Ac tincidunt vitae semper quis lectus nulla. Enim sit amet venenatis urna cursus eget nunc scelerisque 
    viverra. Maecenas sed enim ut sem. Auctor urna nunc id cursus metus aliquam. Risus ultricies tristique nulla aliquet enim tortor. 
    Integer quis auctor elit sed vulputate mi.`,
    coords: [592, 677],
  },
  {
    id: 18,
    name: 'Bibendum',
    author: 'Khabib Nurmagamedov',
    author_id: "khabib_nurmagamedov",
    img: '5.jpg',
    description: `Tincidunt id aliquet risus feugiat in ante metus, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ullamcorper a lacus vestibulum sed arcu non odio. Amet consectetur adipiscing elit pellentesque habitant morbi tristique. Convallis convallis 
    tellus id interdum. Velit ut tortor pretium viverra suspendisse potenti nullam. Tincidunt id aliquet risus feugiat in ante metus. Scelerisque 
    felis imperdiet proin fermentum leo vel orci porta. Diam quam nulla porttitor massa id. Aliquet enim tortor at auctor urna nunc id. Faucibus 
    in ornare quam viverra orci. Ut ornare lectus sit amet est. Eu augue ut lectus arcu bibendum at varius vel.`,
    coords: [1353, 680],
  },
  {
    id: 19,
    name: 'Commodo',
    author: 'Khabib Nurmagamedov',
    author_id: "khabib_nurmagamedov",
    img: '1.jpg',
    description: `Commodo quis imperdiet massa tincidunt nunc. incididunt ut labore et dolore magna aliqua. 
    Enim eu turpis egestas pretium aenean pharetra. Cursus turpis massa tincidunt dui ut ornare lectus sit amet. Eu facilisis sed odio morbi quis 
    commodo odio aenean sed. Vehicula ipsum a arcu cursus vitae congue mauris. Ut etiam sit amet nisl. Commodo quis imperdiet massa tincidunt nunc. 
    Tortor id aliquet lectus proin nibh nisl condimentum id. Faucibus nisl tincidunt eget nullam. Id faucibus nisl tincidunt eget nullam. Tellus molestie 
    nunc non blandit massa enim nec dui. Curabitur gravida arcu ac tortor dignissim convallis aenean et.`,
    coords: [2209, 293],
  },
  {
    id: 20,
    name: 'Libero',
    author: 'Khabib Nurmagamedov',
    author_id: "khabib_nurmagamedov",
    img: '2.jpg',
    description: `Leo vel fringilla est ullamcorper eget nulla facilisi. Nulla 
    malesuada pellentesque elit eget gravida cum sociis natoque penatibus. labore et dolore magna aliqua. 
    Leo a diam sollicitudin tempor. Faucibus vitae aliquet nec ullamcorper sit amet. Pellentesque nec nam aliquam sem et. Sollicitudin ac orci 
    phasellus egestas tellus rutrum. Ornare arcu odio ut sem nulla pharetra. Leo vel fringilla est ullamcorper eget nulla facilisi. Nulla 
    malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Lectus magna fringilla urna porttitor rhoncus. Libero justo 
    laoreet sit amet. Nisi vitae suscipit tellus mauris a diam maecenas. Tortor consequat id porta nibh venenatis cras sed felis eget.`,
    coords: [1902, 279],
  },
  {
    id: 21,
    name: 'Dolor',
    author: 'Conor McGregor',
    author_id: "conor_mcgregor",
    img: '2.jpg',
    description: `Aliquam, lectus quam pharetra elit, nec facilisis tellus magna et ante. Curabitur ornare ac sem nec suscipit. Pellentesque est purus, 
    aliquam, lectus quam pharetra elit, nec facilisis tellus magna et ante. Curabitur ornare ac sem nec suscipit. Pellentesque est purus,  Aliquam, 
    lectus quam pharetra elit, nec facilisis tellus magna et ante. Curabitur ornare ac sem nec suscipit. Pellentesque est purus, 
    aliquam, lectus quam pharetra elit, nec facilisis tellus magna et ante. Curabitur ornare ac sem nec suscipit. Pellentesque est purus, `,
    coords: [1650, 600],
  },
  {
    id: 22,
    name: 'Magna',
    author: 'Conor McGregor',
    author_id: "conor_mcgregor",
    img: '3.jpg',
    description: `Magna fermentum iaculis eu non diam phasellus. Facilisis gravida neque convallis a cras semper auctor neque vitae. Nulla aliquet porttitor 
    lacus luctus. Magna fermentum iaculis eu non diam phasellus. Facilisis gravida neque convallis a cras semper auctor neque vitae. Nulla aliquet porttitor lacus luctus. Magna 
    fermentum iaculis eu non diam phasellus. Facilisis gravida neque convallis a cras semper auctor neque vitae. Nulla aliquet porttitor 
    lacus luctus. Magna fermentum iaculis eu non diam phasellus. Facilisis gravida neque convallis a cras semper auctor neque vitae. Nulla aliquet porttitor lacus luctus.`,
    coords: [2000, 500],
  },
  {
    id: 23,
    name: 'Interdum',
    author: 'Conor McGregor',
    author_id: "conor_mcgregor",
    img: '4.jpg',
    description: `Interdum velit euismod in pellentesque massa. Donec pretium vulputate sapien nec sagittis aliquam malesuada. Elementum integer enim neque 
    volutpat ac tincidunt vitae semper quis. Interdum velit euismod in pellentesque massa. Donec pretium vulputate sapien nec sagittis aliquam malesuada. 
    Elementum integer enim neque volutpat ac tincidunt vitae semper quis. Interdum velit euismod in pellentesque massa. Donec pretium vulputate sapien nec 
    sagittis aliquam malesuada. Elementum integer enim neque 
    volutpat ac tincidunt vitae semper quis. Interdum velit euismod in pellentesque massa. Donec pretium vulputate sapien nec sagittis aliquam malesuada. 
    Elementum integer enim neque volutpat ac tincidunt vitae semper quis.`,
    coords: [1200, 500],
  },
  {
    id: 24,
    name: 'Orci',
    author: 'Conor McGregor',
    author_id: "conor_mcgregor",
    img: '2.jpg',
    description: ` Orci ac auctor augue mauris augue neque. Pulvinar mattis do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec. Quis varius quam quisque id diam. Vestibulum morbi blandit cursus risus. 
    Sed libero enim sed faucibus turpis. Velit euismod in pellentesque massa placerat. Orci ac auctor augue mauris augue neque. Pulvinar mattis 
    nunc sed blandit libero volutpat sed cras. Quis hendrerit dolor magna eget est. Eget lorem dolor sed viverra ipsum nunc. Dignissim suspendisse 
    in est ante in. Pulvinar neque laoreet suspendisse interdum consectetur.`,
    coords: [1563, 1080],
  },
  {
    id: 25,
    name: 'Tortor',
    author: 'Conor McGregor',
    author_id: "conor_mcgregor",
    img: '1.jpg',
    description: `Et ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Purus sit amet volutpat consequat mauris labore et dolore magna aliqua. 
    Turpis nunc eget lorem dolor sed viverra. Vel risus commodo viverra maecenas accumsan lacus. Vulputate enim nulla aliquet porttitor. 
    Sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu.
      Et ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Purus sit amet volutpat consequat mauris. Purus in mollis nunc sed id. 
      Non arcu risus quis varius. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Sed velit dignissim sodales ut.`,
    coords: [1437, 172],
  },
  {
    id: 26,
    name: 'Viverra',
    author: 'Conor McGregor',
    author_id: "conor_mcgregor",
    img: '2.jpg',
    description: `Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Arcu felis bibendum ut tristique 
    et egestas quis ipsum suspendisse. 
    Consequat semper viverra nam libero justo laoreet sit. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. 
    Pharetra vel turpis nunc eget lorem dolor sed. Velit ut tortor pretium viverra suspendisse potenti. Eget nulla facilisi etiam dignissim diam 
    quis enim lobortis scelerisque. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Arcu felis bibendum ut tristique 
    et egestas quis ipsum suspendisse. Dignissim suspendisse in est ante. Proin sagittis nisl rhoncus mattis rhoncus. Id velit ut tortor pretium 
    viverra suspendisse. Ut tellus elementum sagittis vitae et leo duis ut.`,
    coords: [1403, 371],
  },
  {
    id: 27,
    name: 'Risus',
    author: 'Conor McGregor',
    author_id: "conor_mcgregor",
    img: '3.jpg',
    description: `Ac odio tempor orci dapibus ultrices in iaculis. In metus 
    vulputate eu scelerisque. 
    Nisi scelerisque eu ultrices vitae. Ultricies integer quis auctor elit sed. Nunc faucibus a pellentesque sit amet porttitor eget dolor morbi. 
    Risus viverra adipiscing at in. At auctor urna nunc id cursus metus aliquam eleifend. Ac odio tempor orci dapibus ultrices in iaculis. In metus 
    vulputate eu scelerisque. Rhoncus urna neque viverra justo nec ultrices. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. 
    Libero nunc consequat interdum varius. Donec ac odio tempor orci dapibus.`,
    coords: [1110, 847],
  },
  {
    id: 28,
    name: 'Sed',
    author: 'Conor McGregor',
    author_id: "conor_mcgregor",
    img: '4.jpg',
    description: `Sollicitudin nibh sit amet commodo nulla facilisi nullam. Purus non enim praesent 
    elementum facilisis leo vel. 
    Diam phasellus vestibulum lorem sed. Eget mauris pharetra et ultrices neque ornare. Senectus et netus et malesuada fames. Sagittis vitae et 
    leo duis ut diam. Justo laoreet sit amet cursus sit amet. Sed turpis tincidunt id aliquet. Erat pellentesque adipiscing commodo elit at imperdiet. 
    Adipiscing diam donec adipiscing tristique risus nec feugiat in. Sollicitudin nibh sit amet commodo nulla facilisi nullam. Purus non enim praesent 
    elementum facilisis leo vel. Pulvinar sapien et ligula ullamcorper malesuada.`,
    coords: [955, 422],
  },
  {
    id: 29,
    name: 'Etiam',
    author: 'Conor McGregor',
    author_id: "conor_mcgregor",
    img: '5.jpg',
    description: `Etiam erat velit scelerisque in dictum non consectetur a erat. Diam donec adipiscing 
    tristique risus. 
    Condimentum id venenatis a condimentum. Nibh tellus molestie nunc non blandit massa enim. Facilisi etiam dignissim diam quis. Consectetur 
    libero id faucibus nisl tincidunt eget nullam non nisi. Etiam erat velit scelerisque in dictum non consectetur a erat. Diam donec adipiscing 
    tristique risus. Nunc sed blandit libero volutpat sed cras ornare arcu dui. Convallis posuere morbi leo urna molestie at elementum eu facilisis. 
    Scelerisque mauris pellentesque pulvinar pellentesque. Nam libero justo laoreet sit amet cursus sit. Vestibulum sed arcu non odio euismod lacinia at quis.`,
    coords: [582, 300],
  },
  {
    id: 30,
    name: 'Elit',
    author: 'Conor McGregor',
    author_id: "conor_mcgregor",
    img: '1.jpg',
    description: `Auctor eu augue ut lectus arcu bibendum at varius. Imperdiet nulla malesuada 
    pellentesque elit eget. 
    Ridiculus mus mauris vitae ultricies leo integer. Cras sed felis eget velit aliquet sagittis. Non consectetur a erat nam at lectus urna duis 
    convallis. Fames ac turpis egestas maecenas pharetra convallis posuere morbi leo. Lorem mollis aliquam ut porttitor. Ultricies lacus sed turpis 
    tincidunt. Amet consectetur adipiscing elit pellentesque habitant. Auctor eu augue ut lectus arcu bibendum at varius. Imperdiet nulla malesuada 
    pellentesque elit eget gravida cum sociis natoque. Id volutpat lacus laoreet non curabitur gravida arcu ac. Tincidunt augue interdum velit euismod 
    n pellentesque massa.`,
    coords: [1075, 13],
  },
  {
    id: 31,
    name: 'Vivamus',
    author: 'Mirko Cro Cop',
    author_id: "mirkocrocop",
    img: '5.jpg',
    description: `Elementum a vehicula vel, tempor ac sapien. Integer volutpat eu libero vel congue. Suspendisse semper malesuada rutrum. Aliquam elementum a 
    vehicula vel, tempor ac sapien. Integer volutpat eu libero vel congue. Suspendisse semper malesuada rutrum. Aliquam Elementum a vehicula vel, tempor ac sapien. 
    Integer volutpat eu libero vel congue. Suspendisse semper malesuada rutrum. Aliquam elementum a 
    vehicula vel, tempor ac sapien. Integer volutpat eu libero vel congue. Suspendisse semper malesuada rutrum. Aliquam`,
    coords: [300, 200],
  },
  {
    id: 32,
    name: 'Dignissim',
    author: 'Mirko Cro Cop',
    author_id: "mirkocrocop",
    img: '1.jpg',
    description: `Interdum varius sit amet mattis. Vitae turpis massa sed elementum. Pulvinar sapien et ligula ullamcorper malesuada proin. Consequat ac felis 
    donec et odio pellentesque diam. Interdum varius sit amet mattis. Vitae turpis massa sed elementum. Pulvinar sapien et ligula ullamcorper malesuada proin. 
    Consequat ac felis donec et odio pellentesque diam Interdum varius sit amet mattis. Vitae turpis massa sed elementum. Pulvinar sapien et ligula ullamcorper 
    malesuada proin. Consequat ac felis 
    donec et odio pellentesque diam. Interdum varius sit amet mattis. Vitae turpis massa sed elementum. Pulvinar sapien et ligula ullamcorper malesuada proin. 
    Consequat ac felis donec et odio pellentesque diam`,
    coords: [1300, 100],
  },
  {
    id: 33,
    name: 'Dictum',
    author: 'Mirko Cro Cop',
    author_id: "mirkocrocop",
    img: '2.jpg',
    description: `Dictum. Eu augue ut lectus arcu bibendum at. Nunc sed velit dignissim sodales ut eu sem. Ultrices eros in cursus turpis massa. 
    Molestie nunc non blandit massa enim nec dui. Dictum. Eu augue ut lectus arcu bibendum at. Nunc sed velit dignissim sodales ut eu sem. Ultrices 
    eros in cursus turpis massa. Molestie nunc non blandit massa enim nec dui. Dictum. Eu augue ut lectus arcu bibendum at. Nunc sed velit dignissim 
    sodales ut eu sem. Ultrices eros in cursus turpis massa. 
    Molestie nunc non blandit massa enim nec dui. Dictum. Eu augue ut lectus arcu bibendum at. Nunc sed velit dignissim sodales ut eu sem. Ultrices 
    eros in cursus turpis massa. Molestie nunc non blandit massa enim nec dui.`,
    coords: [2100, 100],
  },
  {
    id: 34,
    name: 'Ornare',
    author: 'Mirko Cro Cop',
    author_id: "mirkocrocop",
    img: '5.jpg',
    description: `Auctor eu augue ut lectus arcu bibendum at. Fermentum leo vel orci porta non pulvinar. Tellus molestie nunc non. 
    Justo eget magna fermentum iaculis eu non diam. At tellus at urna condimentum mattis. Turpis in eu mi bibendum neque. Molestie a iaculis at 
    erat pellentesque adipiscing. Auctor eu augue ut lectus arcu bibendum at. Fermentum leo vel orci porta non pulvinar. Tellus molestie nunc non 
    blandit massa enim. Nisl nisi scelerisque eu ultrices vitae. Libero volutpat sed cras ornare arcu. Tristique sollicitudin nibh sit amet commodo 
    nulla facilisi nullam vehicula. Nulla pellentesque dignissim enim sit.`,
    coords: [652, 1054],
  },
  {
    id: 35,
    name: 'Diam',
    author: 'Mirko Cro Cop',
    author_id: "mirkocrocop",
    img: '4.jpg',
    description: `Vitae sapien pellentesque habitant morbi tristique senectus et netus. Vel orci porta non pulvinar neque laoreet suspendisse. 
    Ut morbi tincidunt augue interdum velit. Leo vel orci porta non. Cursus euismod quis viverra nibh cras pulvinar mattis. Duis ultricies lacus 
    sed turpis. Vitae sapien pellentesque habitant morbi tristique senectus et netus. Vel orci porta non pulvinar neque laoreet suspendisse. 
    Orci sagittis eu volutpat odio facilisis mauris. Nisl purus in mollis nunc sed id semper risus. At volutpat diam ut venenatis tellus in. Amet 
    luctus venenatis lectus magna fringilla urna. Nullam non nisi est sit amet facilisis magna etiam tempor.`,
    coords: [774, 743],
  },
  {
    id: 36,
    name: 'Adipiscing',
    author: 'Mirko Cro Cop',
    author_id: "mirkocrocop",
    img: '3.jpg',
    description: `Consectetur purus ut faucibus pulvinar elementum. Arcu vitae elementum curabitur vitae nunc sed. 
    Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Libero nunc consequat interdum varius. Dui ut ornare lectus sit 
    amet. Consectetur purus ut faucibus pulvinar elementum. Arcu vitae elementum curabitur vitae nunc sed. At auctor urna nunc id cursus metus. 
    Pharetra diam sit amet nisl. Lectus urna duis convallis convallis tellus id interdum velit laoreet. Ut etiam sit amet nisl. Etiam erat velit 
    scelerisque in. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem.`,
    coords: [1089, 1008],
  },
  {
    id: 37,
    name: 'Neque',
    author: 'Mirko Cro Cop',
    author_id: "mirkocrocop",
    img: '2.jpg',
    description: `Eget mi proin sed libero enim sed faucibus turpis in. Turpis egestas maecenas pharetra convallis 
    posuere. 
    Sem fringilla ut morbi tincidunt augue interdum velit. Sed tempus urna et pharetra pharetra massa massa ultricies. Scelerisque varius morbi 
    enim nunc. Lectus vestibulum mattis ullamcorper velit sed ullamcorper. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros in. 
    Vulputate dignissim suspendisse in est ante. Eget mi proin sed libero enim sed faucibus turpis in. Turpis egestas maecenas pharetra convallis 
    posuere. Pellentesque elit ullamcorper dignissim cras. Posuere ac ut consequat semper viverra nam libero justo. Neque aliquam vestibulum morbi 
    blandit cursus risus at ultrices mi.`,
    coords: [1018, 200],
  },
  {
    id: 38,
    name: 'Pretium',
    author: 'Mirko Cro Cop',
    author_id: "mirkocrocop",
    img: '1.jpg',
    description: `Nascetur ridiculus mus mauris vitae. Volutpat maecenas volutpat blandit aliquam etiam erat. 
    Ac tortor vitae purus faucibus ornare suspendisse sed nisi. 
    Augue eget arcu dictum varius duis at consectetur lorem. At risus viverra adipiscing at in tellus integer feugiat. Porta non pulvinar neque 
    laoreet suspendisse interdum consectetur libero. Nascetur ridiculus mus mauris vitae. Volutpat maecenas volutpat blandit aliquam etiam erat. 
    Ac tortor vitae purus faucibus ornare suspendisse sed nisi. Ullamcorper sit amet risus nullam eget felis eget nunc. Ipsum dolor sit amet 
    consectetur adipiscing elit duis. Ut sem viverra aliquet eget sit amet. Sed sed risus pretium quam vulputate. Porttitor rhoncus dolor purus 
    non enim praesent.`,
    coords: [1553, 87],
  },
  {
    id: 39,
    name: 'Accumsan',
    author: 'Mirko Cro Cop',
    author_id: "mirkocrocop",
    img: '2.jpg',
    description: `Et ligula ullamcorper malesuada proin libero. Tempor commodo
    ullamcorper a lacus vestibulum sed arcu. 
    Cursus vitae congue mauris rhoncus. Quis risus sed vulputate odio. Vel orci porta non pulvinar neque. Nulla posuere sollicitudin aliquam 
    ultrices sagittis orci a. Feugiat sed lectus vestibulum mattis ullamcorper. Et ligula ullamcorper malesuada proin libero. Tempor commodo
      ullamcorper a lacus vestibulum sed arcu. Enim neque volutpat ac tincidunt vitae. Viverra maecenas accumsan lacus vel facilisis volutpat est. 
      Felis eget velit aliquet sagittis id consectetur. Sed arcu non odio euismod lacinia at quis risus sed.`,
    coords: [2291, 10],
  },
  {
    id: 40,
    name: 'Sodales',
    author: 'Mirko Cro Cop',
    author_id: "mirkocrocop",
    img: '5.jpg',
    description: `Commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Faucibus et molestie ac 
    feugiat sed lectus vestibulum mattis ullamcorper. 
    Dignissim sodales ut eu sem integer vitae justo eget magna. Auctor urna nunc id cursus. Sed blandit libero volutpat sed cras ornare. Lectus 
    magna fringilla urna porttitor rhoncus dolor purus. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Faucibus et molestie ac 
    feugiat sed lectus vestibulum mattis ullamcorper. Pharetra massa massa ultricies mi quis hendrerit dolor magna eget. Diam vel quam elementum 
    pulvinar etiam non quam lacus. Molestie a iaculis at erat pellentesque. Justo laoreet sit amet cursus sit. Sodales neque sodales ut etiam sit amet.`,
    coords: [1783, 435],
  },
  {
    id: 41,
    name: 'Aliquam',
    author: 'Fedor Emelianenko',
    author_id: "fedor_emelianenko",
    img: '3.jpg',
    description: `Tincidunt rutrum lobortis. Proin maximus diam eget quam aliquet, et ullamcorper arcu pharetra. Ut malesuada justo pellentesque nulla. 
    Tincidunt rutrum lobortis. Proin maximus diam eget quam aliquet, et ullamcorper arcu pharetra. Ut malesuada justo pellentesque nulla. Tincidunt rutrum lobortis. 
    Proin maximus diam eget quam aliquet, et ullamcorper arcu pharetra. Ut malesuada justo pellentesque nulla. 
    Tincidunt rutrum lobortis. Proin maximus diam eget quam aliquet, et ullamcorper arcu pharetra. Ut malesuada justo pellentesque nulla.`,
    coords: [1650, 300],
  },
  {
    id: 42,
    name: 'Sapien',
    author: 'Fedor Emelianenko',
    author_id: "fedor_emelianenko",
    img: '4.jpg',
    description: `Sapien et ligula ullamcorper malesuada proin. Consequat ac felis donec et odio pellentesque diam volutpat commodo. Varius morbi enim nunc 
    faucibus. Sapien et ligula ullamcorper malesuada proin. Consequat ac felis donec et odio pellentesque diam volutpat commodo. Varius morbi enim nunc faucibus. Sapien 
    et ligula ullamcorper malesuada proin. Consequat ac felis donec et odio pellentesque diam volutpat commodo. Varius morbi enim nunc 
    faucibus. Sapien et ligula ullamcorper malesuada proin. Consequat ac felis donec et odio pellentesque diam volutpat commodo. Varius morbi enim nunc faucibus.`,
    coords: [2200, 1000],
  },
  {
    id: 43,
    name: 'Platea',
    author: 'Fedor Emelianenko',
    author_id: "fedor_emelianenko",
    img: '5.jpg',
    description: `Platea dictumst vestibulum rhoncus est pellentesque. Natoque penatibus et magnis dis parturient montes nascetur. Sed vulputate odio ut 
    enim blandit volutpat. Platea dictumst vestibulum rhoncus est pellentesque. Natoque penatibus et magnis dis parturient montes nascetur. Sed vulputate 
    odio ut enim blandit volutpat. Platea dictumst vestibulum rhoncus est pellentesque. Natoque penatibus et magnis dis parturient montes nascetur. 
    Sed vulputate odio ut 
    enim blandit volutpat. Platea dictumst vestibulum rhoncus est pellentesque. Natoque penatibus et magnis dis parturient montes nascetur. Sed vulputate 
    odio ut enim blandit volutpat.`,
    coords: [1200, 250],
  },
  {
    id: 44,
    name: 'Massa',
    author: 'Fedor Emelianenko',
    author_id: "fedor_emelianenko",
    img: '4.jpg',
    description: `Nisi scelerisque eu ultrices vitae auctor eu augue ut. Justo nec ultrices dui sapien 
    eget. Sollicitudin ac orci phasellus egestas. 
    Vitae auctor eu augue ut lectus arcu bibendum at varius. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Facilisis volutpat est 
    velit egestas. At erat pellentesque adipiscing commodo. Nisi scelerisque eu ultrices vitae auctor eu augue ut. Justo nec ultrices dui sapien 
    eget. Sollicitudin ac orci phasellus egestas. Sit amet venenatis urna cursus eget nunc scelerisque viverra. Lacus viverra vitae congue eu 
    consequat ac. Lorem dolor sed viverra ipsum nunc. Pharetra massa massa ultricies mi quis hendrerit dolor.`,
    coords: [2034, 838],
  },
  {
    id: 45,
    name: 'Ligula',
    author: 'Fedor Emelianenko',
    author_id: "fedor_emelianenko",
    img: '3.jpg',
    description: ` Vulputate mi sit amet mauris commodo quis. Tincidunt tortor aliquam nulla facilisi cras. 
    Sagittis vitae et leo duis ut diam quam nulla. 
    u augue ut lectus arcu. Eu scelerisque felis imperdiet proin fermentum leo vel orci porta. Vel pharetra vel turpis nunc eget. Non consectetur 
    a erat nam. Ut tellus elementum sagittis vitae et. Vulputate mi sit amet mauris commodo quis. Tincidunt tortor aliquam nulla facilisi cras. 
    Sagittis vitae et leo duis ut diam quam nulla. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Est velit egestas dui id 
    ornare. Congue eu consequat ac felis donec.`,
    coords: [1757, 791],
  },
  {
    id: 46,
    name: 'Ultrices',
    author: 'Fedor Emelianenko',
    author_id: "fedor_emelianenko",
    img: '2.jpg',
    description: `Ac odio tempor orci dapibus ultrices. Donec massa sapien faucibus et molestie ac feugiat sed. 
    Dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu. 
    Sit amet porttitor eget dolor morbi non arcu. Ac odio tempor orci dapibus ultrices. Donec massa sapien faucibus et molestie ac feugiat sed. 
    Dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu. Dui faucibus in ornare quam viverra orci sagittis. Leo urna molestie at 
    elementum eu facilisis sed odio morbi. Leo duis ut diam quam nulla. Sed vulputate odio ut enim blandit. Platea dictumst vestibulum rhoncus est. 
    Sagittis purus sit amet volutpat consequat mauris. Quam nulla porttitor massa id.`,
    coords: [664, 858],
  },
  {
    id: 47,
    name: 'Mattis',
    author: 'Fedor Emelianenko',
    author_id: "fedor_emelianenko",
    img: '1.jpg',
    description: `Volutpat blandit aliquam etiam erat velit scelerisque in dictum. 
    Quam id leo in vitae turpis massa sed elementum. Metus 
    aliquam eleifend mi in nulla posuere sollicitudin aliquam. Aliquam nulla facilisi cras fermentum odio. Imperdiet sed euismod nisi porta lorem. 
    Quis vel eros donec ac odio. Feugiat sed lectus vestibulum mattis ullamcorper. Volutpat blandit aliquam etiam erat velit scelerisque in dictum. 
    Quam id leo in vitae turpis massa sed elementum. Ac tortor dignissim convallis aenean et tortor at. Risus in hendrerit gravida rutrum quisque non. 
    Platea dictumst quisque sagittis purus. Sem integer vitae justo eget magna fermentum iaculis eu.`,
    coords: [1469, 498],
  },
  {
    id: 48,
    name: 'Netus',
    author: 'Fedor Emelianenko',
    author_id: "fedor_emelianenko",
    img: '5.jpg',
    description: `Condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus. 
    Vitae et leo duis ut diam quam nulla porttitor massa. Quisque id diam vel quam elementum. Tristique sollicitudin nibh sit amet commodo nulla 
    facilisi. Mauris cursus mattis molestie a. Laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Morbi tristique 
    senectus et netus. Nec nam aliquam sem et tortor consequat id. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus. 
    Morbi quis commodo odio aenean. Pharetra magna ac placerat vestibulum lectus. Consectetur libero id faucibus nisl tincidunt eget nullam non nisi.`,
    coords: [1851, 557],
  },
  {
    id: 49,
    name: 'Tempus',
    author: 'Fedor Emelianenko',
    author_id: "fedor_emelianenko",
    img: '4.jpg',
    description: `Accumsan tortor posuere ac ut consequat semper viverra. Orci porta 
    non pulvinar neque laoreet. Erat nam at lectus urna. 
    Malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Quam nulla porttitor massa id neque aliquam vestibulum morbi. 
    Etiam tempor orci eu lobortis elementum nibh tellus molestie nunc. Accumsan tortor posuere ac ut consequat semper viverra. Orci porta 
    non pulvinar neque laoreet. Erat nam at lectus urna. Amet porttitor eget dolor morbi non. Aliquet nec ullamcorper sit amet risus nullam. 
    Tempor commodo ullamcorper a lacus. Malesuada pellentesque elit eget gravida cum. Ut porttitor leo a diam sollicitudin tempor.`,
    coords: [1940, 15],
  },
  {
    id: 50,
    name: 'Natoque',
    author: 'Fedor Emelianenko',
    author_id: "fedor_emelianenko",
    img: '3.jpg',
    description: `Maecenas accumsan lacus vel facilisis volutpat est velit egestas dui. Pulvinar 
    sapien et ligula ullamcorper malesuada proin libero nunc consequat. 
    A iaculis at erat pellentesque adipiscing commodo. Sagittis orci a scelerisque purus semper eget duis at tellus. Viverra vitae congue eu 
    consequat ac felis. Habitant morbi tristique senectus et. Maecenas accumsan lacus vel facilisis volutpat est velit egestas dui. Pulvinar 
    sapien et ligula ullamcorper malesuada proin libero nunc consequat. Aliquet eget sit amet tellus cras. Pellentesque elit eget gravida cum 
    sociis natoque penatibus. In hac habitasse platea dictumst quisque sagittis purus. Nisl condimentum id venenatis a condimentum vitae. Dolor 
    sit amet consectetur adipiscing elit pellentesque habitant.`,
    coords: [2244, 805],
  },
];
export default places;
  