"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const project_route_1 = require("../modules/project/project.route");
const blog_route_1 = require("../modules/blog/blog.route");
const skill_route_1 = require("../modules/skill/skill.route");
const experience_route_1 = require("../modules/experience/experience.route");
const auth_route_1 = require("../modules/auth/auth.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: '/auth',
        route: auth_route_1.AuthRoutes,
    },
    {
        path: '/projects',
        route: project_route_1.ProjectRoutes,
    },
    {
        path: '/blogs',
        route: blog_route_1.BlogRoutes,
    },
    {
        path: '/skills',
        route: skill_route_1.SkillRoutes,
    },
    {
        path: '/experiences',
        route: experience_route_1.ExperienceRoutes,
    },
];
// register all module routes dynamically
moduleRoutes.forEach(({ path, route }) => router.use(path, route));
exports.default = router;
