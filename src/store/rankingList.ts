import { defineStore } from "pinia";

export const useRankList = defineStore("rankList", {
    state: () => ({
        rankListAll: [],
    }),
});
