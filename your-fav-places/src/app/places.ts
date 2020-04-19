const places = {
    stipe_miocic: [
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
    ],
    khabib_nurmagamedov: [
      {
        id: 4,
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
        id: 5,
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
        id: 6,
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
    ],
    conor_mcgregor: [
      {
        id: 7,
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
        id: 8,
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
        id: 9,
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
    ],
    mirkocrocop: [
      {
        id: 10,
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
        id: 11,
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
        id: 12,
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
    ],
    fedor_emelianenko: [
      {
        id: 13,
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
        id: 14,
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
        id: 15,
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
    ],
};
export default places;
  