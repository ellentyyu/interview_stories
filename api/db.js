module.exports = () => {
  const storyList = [
    {
      id:'XgJFuRN',
      imageUrl: 'https://i.imgur.com/XgJFuRN.jpg',
      text: 'Top Things To Do In Ooty',
      duration: 3000,
    },
    {
      id:'Uvo0Rz1',
      imageUrl: 'https://i.imgur.com/Uvo0Rz1.jpg',
      text: 'Surrounded by the Nilgiris and stunning lakes and forests, the resort town of Ooty in Tamil Nadu is a popular getaway in South India',
      duration: 4000,
    },
    {
      id:'Z7pPmw3',
      imageUrl: 'https://i.imgur.com/Z7pPmw3.jpg',
      text: 'A fun way to explore this hill station is to hop on a toy train that will take you across the countryside',
      duration: 5000,
    },
    {
      id:'fHQjxkO',
      imageUrl: 'https://i.imgur.com/fHQjxkO.jpg',
      text: 'Once a British Raj summer resort, you can still find Colonial influences in Ooty\'s many historical buildings such as St. Stephen\'s Church',
      duration: 3000,
    },
    {
      id:'yK81VNq',
      imageUrl: 'https://i.imgur.com/yK81VNq.jpg',
      text: 'Ooty Lake is a must-visit to enjoy a peaceful boat ride. A major tourist attraction, this artificial lake was constructed in 1824',
      duration: 4000,
    },
    {
      id:'eyjQqfO',
      imageUrl: 'https://i.imgur.com/eyjQqfO.jpg',
      text: 'To surround yourself with beauty, head to Ooty\'s Rose Garden in Vijayanagaram, which is the largest rose garden in India',
      duration: 5000,
    },
    {
      id:'JmDbu3a',
      imageUrl: 'https://i.imgur.com/JmDbu3a.jpg',
      text: 'If Rose Garden is not enough, then explore the Botanical Garden that houses a wide range of exotic and indigenous plants, shrubs, trees',
      duration: 3000,
    },
    {
      id:'WAR0oOy',
      imageUrl: 'https://i.imgur.com/WAR0oOy.jpg',
      text: 'About 28km away from Ooty town is the stunning Avalanche Lake. Trek around to explore the region and enjoy a picnic by the lake',
      duration: 4000,
    },
    {
      id:'lAZQ7JW',
      imageUrl: 'https://i.imgur.com/lAZQ7JW.jpg',
      text: 'While there are many treats to indulge in, you cannot miss picking a range of delicious hand-made Ooty chocolates',
      duration: 4000,
    },
    {
      id: 'E8OBfBA',
      imageUrl: 'https://i.imgur.com/E8OBfBA.jpg',
      text: 'Delhi is home to some of the finest monuments with Islamic architecture like Humayun\'s Tomb and Qutub Minar',
      duration: 3000,
    },
    {
      id: 'wsBg4T9',
      imageUrl: 'https://i.imgur.com/wsBg4T9.jpg',
      text: 'Delhi is famous for its street food culture with lip smacking delicacies like aloo tikkis, papdi chaat and many more',
      duration: 3000,
    },
    {
      id: '9gen3pL',
      imageUrl: 'https://i.imgur.com/9gen3pL.jpg',
      text: 'Connaught Place is truly the heart of Delhi that still carries old-school charm with famous shops and restaurants around',
      duration: 4000,
    },
    {
      id: 'vSFWZ4k',
      imageUrl: 'https://i.imgur.com/vSFWZ4k.jpg',
      text: 'Delhi is the perfect example of an urban jungle with a buzzing nightlife that will enthrall you with some foot-tapping music',
      duration: 5000,
    },
    {
      id: 's5xDvCJ',
      imageUrl: 'https://i.imgur.com/s5xDvCJ.jpg',
      text: 'The city houses a mix of many sacred spots like the famous Bangla Sahib Gurudwara and Jama Masjid that are worth a visit',
      duration: 3000,
    },
    {
      id: 'zG9lImF',
      imageUrl: 'https://i.imgur.com/zG9lImF.jpg',
      text: 'In the midst of a concrete jungle, Delhi is blessed with green hotspots like Lodi Gardens and The Garden Of Five Senses for a nature stroll',
      duration: 5000,
    },
  ];

  return {
    story: storyList,
    meta: {
      length: storyList.length,
      idList: storyList.map(s => s.id),
    },
  };
};
