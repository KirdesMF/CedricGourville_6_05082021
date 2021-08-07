const fakeSauce = {
   userId: '123',
   name: 'fake',
   manufacturer: 'fakeManu',
   description: 'lorem',
   mainPepper: 'pepper',
   imageUrl: 'https://picsum.photos/200/300',
   heat: 2,
   likes: 12,
   dislikes: 20,
   usersLiked: ['123', '245'],
   usersDislikes: ['589', '789'],
};

export const fakesSauces = [
   fakeSauce,
   { ...fakeSauce, userId: '478', heat: 6 },
   { ...fakeSauce, userId: '789', heat: 7 },
   { ...fakeSauce, userId: '742' },
];
