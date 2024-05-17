import { createPinia } from "pinia";
import PersistedstatePlugin from "pinia-plugin-persistedstate";
export { useUserStore } from "./user";
export { useRankList } from "./rankingList";

const store = createPinia();

store.use(PersistedstatePlugin);

export default store;
