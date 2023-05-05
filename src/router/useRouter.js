/*
 * @FilePath: \vue2.7_Mars3D_template\src\router\useRouter.js
 * @Author: zhangxin
 * @Date: 2022-11-30 10:18:11
 * @LastEditors: zhangxin
 * @LastEditTime: 2023-05-05 15:47:09
 * @Description:
 */

import { defineRouter } from "./defineRouter";
import { defineMeta } from "@/router/meta";

const routes = [
    {
        name: "login",
        path: "/login",
        meta: defineMeta({ title: "登录" }),
        component: () => import("@/layout/login/login.vue"),
    },
    {
        name: "singleLogin",
        path: "/singleLogin",
        meta: defineMeta({ title: "单点登录" }),
        component: () => import("@/layout/loginsso/loginsso.vue"),
    },
    {
        name: "debug",
        path: "/debug",
        meta: defineMeta({ title: "debug" }),
        component: () => import("@/pages/Debug/debug.vue"),
    },
    {
        name: "home",
        path: "/",
        meta: defineMeta({ level: 0, title: "首页" }),
        component: () => import("@/layout/Home.vue"),
        children: [],
    },
    {
        name: "404",
        path: "/404",
        meta: defineMeta({ title: "404" }),
        component: () => import("@/pages/NotPage/404.vue"),
    },
    {
        path: "*",
        redirect: "/404",
    },
];
const router = defineRouter(routes);

export function useRouter() {
    return router.core;
}

export function useRoute() {
    return router.core.currentRoute;
}

export const resetRoute = router.reset;

export default router;
