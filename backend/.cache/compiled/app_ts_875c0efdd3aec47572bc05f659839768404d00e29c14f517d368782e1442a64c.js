"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
const fakeRoute_1 = require("api/routes/fakeRoute");
dotenv_1.default.config();
const port = process.env.PORT || 3000;
const app = express_1.default();
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
app.use(fakeRoute_1.router);
app.listen(port, () => console.log(`API hosted: http://localhost:${port}`));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUva2lyZGVzODcwL2Rldi9PQy9DZWRyaWNHb3VydmlsbGVfNl8wNTA4MjAyMS9iYWNrZW5kL2FwcC50cyIsInNvdXJjZXMiOlsiL2hvbWUva2lyZGVzODcwL2Rldi9PQy9DZWRyaWNHb3VydmlsbGVfNl8wNTA4MjAyMS9iYWNrZW5kL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4REFBOEI7QUFDOUIsNERBQTRCO0FBQzVCLG9EQUE4QztBQUU5QyxnQkFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRWhCLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQztBQUN0QyxNQUFNLEdBQUcsR0FBRyxpQkFBTyxFQUFFLENBQUM7QUFFdEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUU7SUFDeEIsR0FBRyxDQUFDLFNBQVMsQ0FBQyw2QkFBNkIsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNsRCxHQUFHLENBQUMsU0FBUyxDQUNWLDhCQUE4QixFQUM5Qix3RUFBd0UsQ0FDMUUsQ0FBQztJQUNGLEdBQUcsQ0FBQyxTQUFTLENBQ1YsOEJBQThCLEVBQzlCLHdDQUF3QyxDQUMxQyxDQUFDO0lBQ0YsSUFBSSxFQUFFLENBQUM7QUFDVixDQUFDLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxHQUFHLENBQUMsa0JBQU0sQ0FBQyxDQUFDO0FBQ2hCLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IGRvdGVudiBmcm9tICdkb3RlbnYnO1xuaW1wb3J0IHsgcm91dGVyIH0gZnJvbSAnYXBpL3JvdXRlcy9mYWtlUm91dGUnO1xuXG5kb3RlbnYuY29uZmlnKCk7XG5cbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDA7XG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5cbmFwcC51c2UoKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICByZXMuc2V0SGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCAnKicpO1xuICAgcmVzLnNldEhlYWRlcihcbiAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzJyxcbiAgICAgICdPcmlnaW4sIFgtUmVxdWVzdGVkLVdpdGgsIENvbnRlbnQsIEFjY2VwdCwgQ29udGVudC1UeXBlLCBBdXRob3JpemF0aW9uJ1xuICAgKTtcbiAgIHJlcy5zZXRIZWFkZXIoXG4gICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kcycsXG4gICAgICAnR0VULCBQT1NULCBQVVQsIERFTEVURSwgUEFUQ0gsIE9QVElPTlMnXG4gICApO1xuICAgbmV4dCgpO1xufSk7XG5cbmFwcC51c2Uocm91dGVyKTtcbmFwcC5saXN0ZW4ocG9ydCwgKCkgPT4gY29uc29sZS5sb2coYEFQSSBob3N0ZWQ6IGh0dHA6Ly9sb2NhbGhvc3Q6JHtwb3J0fWApKTtcbiJdfQ==