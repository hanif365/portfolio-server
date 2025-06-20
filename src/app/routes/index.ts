import { Router } from "express";
import { ProjectRoutes } from "../modules/project/project.route";
import { BlogRoutes } from "../modules/blog/blog.route";
import { SkillRoutes } from "../modules/skill/skill.route";
import { ExperienceRoutes } from "../modules/experience/experience.route";
import { AuthRoutes } from "../modules/auth/auth.route";

const router = Router();

export interface Routes {
  path: string;
  route: Router;
}

const moduleRoutes: Routes[] = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/projects',
    route: ProjectRoutes,
  },
  {
    path: '/blogs',
    route: BlogRoutes,
  },
  {
    path: '/skills',
    route: SkillRoutes,
  },
  {
    path: '/experiences',
    route: ExperienceRoutes,
  },
];

// register all module routes dynamically
moduleRoutes.forEach(({ path, route }) => router.use(path, route));

export default router;
