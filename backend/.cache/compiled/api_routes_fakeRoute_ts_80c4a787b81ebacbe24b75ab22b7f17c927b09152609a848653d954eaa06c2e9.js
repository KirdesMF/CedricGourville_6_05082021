"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const fakeData_1 = require("api/models/fakeData");
const router = express_1.default.Router();
exports.router = router;
router.post('/api/auth/login', (req, res) => {
    console.log(req.params);
    return res.send({ userId: '', token: '' });
});
router.get('/api/sauces', (req, res) => {
    res.send(fakeData_1.fakesSauces);
});
router.get('/api/sauces:id', (req, res) => {
    const id = req.params.id;
    const sauce = fakeData_1.fakesSauces.find((sauce) => sauce.userId === id);
    res.send(sauce);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUva2lyZGVzODcwL2Rldi9PQy9DZWRyaWNHb3VydmlsbGVfNl8wNTA4MjAyMS9iYWNrZW5kL2FwaS9yb3V0ZXMvZmFrZVJvdXRlLnRzIiwic291cmNlcyI6WyIvaG9tZS9raXJkZXM4NzAvZGV2L09DL0NlZHJpY0dvdXJ2aWxsZV82XzA1MDgyMDIxL2JhY2tlbmQvYXBpL3JvdXRlcy9mYWtlUm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDhEQUE4QjtBQUM5QixrREFBa0Q7QUFFbEQsTUFBTSxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQWlCdkIsd0JBQU07QUFmZixNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hCLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDOUMsQ0FBQyxDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUNwQyxHQUFHLENBQUMsSUFBSSxDQUFDLHNCQUFXLENBQUMsQ0FBQztBQUN6QixDQUFDLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDdkMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7SUFDekIsTUFBTSxLQUFLLEdBQUcsc0JBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDL0QsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNuQixDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgZmFrZXNTYXVjZXMgfSBmcm9tICdhcGkvbW9kZWxzL2Zha2VEYXRhJztcblxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxucm91dGVyLnBvc3QoJy9hcGkvYXV0aC9sb2dpbicsIChyZXEsIHJlcykgPT4ge1xuICAgY29uc29sZS5sb2cocmVxLnBhcmFtcyk7XG4gICByZXR1cm4gcmVzLnNlbmQoeyB1c2VySWQ6ICcnLCB0b2tlbjogJycgfSk7XG59KTtcblxucm91dGVyLmdldCgnL2FwaS9zYXVjZXMnLCAocmVxLCByZXMpID0+IHtcbiAgIHJlcy5zZW5kKGZha2VzU2F1Y2VzKTtcbn0pO1xuXG5yb3V0ZXIuZ2V0KCcvYXBpL3NhdWNlczppZCcsIChyZXEsIHJlcykgPT4ge1xuICAgY29uc3QgaWQgPSByZXEucGFyYW1zLmlkO1xuICAgY29uc3Qgc2F1Y2UgPSBmYWtlc1NhdWNlcy5maW5kKChzYXVjZSkgPT4gc2F1Y2UudXNlcklkID09PSBpZCk7XG4gICByZXMuc2VuZChzYXVjZSk7XG59KTtcblxuZXhwb3J0IHsgcm91dGVyIH07XG4iXX0=