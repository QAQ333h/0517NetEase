import type { RouteRecordRaw } from "vue-router";
import rankingList from "@/views/rankingList.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", redirect: "/rankingList" },
  { path: "/rankingList", component: rankingList },
];

export default routes;
