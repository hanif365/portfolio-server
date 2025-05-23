"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// import authRoutes from "../modules/auth/auth.route";
const router = (0, express_1.Router)();
const moduleRoutes = [
// {
//   path: '/auth',
//   route: authRoutes,
// },
];
// register all module routes dynamically
moduleRoutes.forEach(({ path, route }) => router.use(path, route));
exports.default = router;
