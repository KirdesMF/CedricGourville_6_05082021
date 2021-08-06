"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fakesSauces = void 0;
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
exports.fakesSauces = [
    fakeSauce,
    Object.assign(Object.assign({}, fakeSauce), { userId: '478', heat: 6 }),
    Object.assign(Object.assign({}, fakeSauce), { userId: '789', heat: 7 }),
    Object.assign(Object.assign({}, fakeSauce), { userId: '742' }),
];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUva2lyZGVzODcwL2Rldi9PQy9DZWRyaWNHb3VydmlsbGVfNl8wNTA4MjAyMS9iYWNrZW5kL2FwaS9tb2RlbHMvZmFrZURhdGEudHMiLCJzb3VyY2VzIjpbIi9ob21lL2tpcmRlczg3MC9kZXYvT0MvQ2VkcmljR291cnZpbGxlXzZfMDUwODIwMjEvYmFja2VuZC9hcGkvbW9kZWxzL2Zha2VEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLE1BQU0sU0FBUyxHQUFHO0lBQ2YsTUFBTSxFQUFFLEtBQUs7SUFDYixJQUFJLEVBQUUsTUFBTTtJQUNaLFlBQVksRUFBRSxVQUFVO0lBQ3hCLFdBQVcsRUFBRSxPQUFPO0lBQ3BCLFVBQVUsRUFBRSxRQUFRO0lBQ3BCLFFBQVEsRUFBRSwrQkFBK0I7SUFDekMsSUFBSSxFQUFFLENBQUM7SUFDUCxLQUFLLEVBQUUsRUFBRTtJQUNULFFBQVEsRUFBRSxFQUFFO0lBQ1osVUFBVSxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQztJQUMxQixhQUFhLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDO0NBQy9CLENBQUM7QUFFVyxRQUFBLFdBQVcsR0FBRztJQUN4QixTQUFTO29DQUNKLFNBQVMsS0FBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDO29DQUNqQyxTQUFTLEtBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQztvQ0FDakMsU0FBUyxLQUFFLE1BQU0sRUFBRSxLQUFLO0NBQy9CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmYWtlU2F1Y2UgPSB7XG4gICB1c2VySWQ6ICcxMjMnLFxuICAgbmFtZTogJ2Zha2UnLFxuICAgbWFudWZhY3R1cmVyOiAnZmFrZU1hbnUnLFxuICAgZGVzY3JpcHRpb246ICdsb3JlbScsXG4gICBtYWluUGVwcGVyOiAncGVwcGVyJyxcbiAgIGltYWdlVXJsOiAnaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzIwMC8zMDAnLFxuICAgaGVhdDogMixcbiAgIGxpa2VzOiAxMixcbiAgIGRpc2xpa2VzOiAyMCxcbiAgIHVzZXJzTGlrZWQ6IFsnMTIzJywgJzI0NSddLFxuICAgdXNlcnNEaXNsaWtlczogWyc1ODknLCAnNzg5J10sXG59O1xuXG5leHBvcnQgY29uc3QgZmFrZXNTYXVjZXMgPSBbXG4gICBmYWtlU2F1Y2UsXG4gICB7IC4uLmZha2VTYXVjZSwgdXNlcklkOiAnNDc4JywgaGVhdDogNiB9LFxuICAgeyAuLi5mYWtlU2F1Y2UsIHVzZXJJZDogJzc4OScsIGhlYXQ6IDcgfSxcbiAgIHsgLi4uZmFrZVNhdWNlLCB1c2VySWQ6ICc3NDInIH0sXG5dO1xuIl19