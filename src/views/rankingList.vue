<template>
  <div class="bgStyle pb-[8.63vw]">
    <!-- 头部 -->
    <div class="w-[100vw]">
      <van-nav-bar
        title="排行榜"
        class="bg-[#f2f4fb]"
        line-height="1.62px"
        line-width="4vw"
        left-arrow
      />
    </div>
    <div>
      <van-tabs
        v-model:active="active"
        color="#eb4d44"
        line-height="1.62vw"
        line-width="8.55vw"
      >
        <van-tab title="官方" class="px-[16px] box-border">
          <!-- 榜单推荐 -->
          <div class="text-left mt-[7.44vw]">
            <h1 class="text-[4.44vw] text-[#303546] font-[700]">榜单推荐</h1>
            <ul class="flex justify-between pt-[3.59vw]">
              <li
                v-if="rankingListAll && rankingListAll.length > 0"
                class="w-[28.63vw] h-[28.63vw] rounded-[2.14vw] relative"
              >
                <img
                  :src="rankingListAll[38].coverImgUrl"
                  class="rounded-[2.14vw]"
                />
                <Icon
                  icon="fluent:play-12-filled"
                  class="absolute bottom-[2vw] right-[2vw] h-[6vw] w-[6vw] text-[#fff]"
                />
              </li>
              <li
                v-if="rankingListAll && rankingListAll.length > 0"
                class="w-[28.63vw] h-[28.63vw] rounded-[2.14vw] relative"
              >
                <img
                  :src="rankingListAll[50].coverImgUrl"
                  class="rounded-[2.14vw]"
                />
                <Icon
                  icon="fluent:play-12-filled"
                  class="absolute bottom-[2vw] right-[2vw] h-[6vw] w-[6vw] text-[#fff]"
                />
              </li>
              <li
                v-if="rankingListAll && rankingListAll.length > 0"
                class="w-[28.63vw] h-[28.63vw] rounded-[2.14vw] relative"
              >
                <img
                  :src="rankingListAll[25].coverImgUrl"
                  class="rounded-[2.14vw]"
                />
                <Icon
                  icon="fluent:play-12-filled"
                  class="absolute bottom-[2vw] right-[2vw] h-[6vw] w-[6vw] text-[#fff]"
                />
              </li>
            </ul>
          </div>
          <!-- 官方榜 -->
          <div class="text-left mt-[10vw]">
            <h1 class="text-[4.44vw] text-[#303546] font-[700] flex">
              <Icon
                icon="ri:netease-cloud-music-fill"
                style="color: #eb4d44"
                class="w-[4.87vw] h-[4.87vw] mr-[1.88vw]"
              />
              官方榜
            </h1>
            <div
              class="h-[36.53vw] w-[91.28vw] bg-[#fff] rounded-[3.84vw] mt-[4.7vw] pt-[2.4vw] pb-[3.59vw] pl-[5.04vw] pr-[4.1vw]"
              v-for="(item, index) in rankingListData?.slice(0, 4)"
              :key="index"
            >
              <span class="flex justify-between">
                <p class="text-[4.96vw] text-[#303546] font-[900]">
                  {{ item.name }}
                </p>
                <p>{{ item.updateFrequency }}</p>
              </span>
              <div class="h-[17vw] flex justify-between mt-[4.19vw]">
                <div class="relative">
                  <!-- :src="picURL(item.id)" -->
                  <img
                    :src="rankingPic(item.id)"
                    class="block w-[17vw] h-[17vw] rounded-[1.71vw] z-99"
                  />
                  <!-- <img
                    src=""
                    class="block w-[13vw] h-[13vw] bg-[blue] rounded-[1.71vw] opacity-50 absolute z-12 bottom-0 right-[-2.65vw]"
                  />
                  <img
                    src=""
                    class="block w-[8.12vw] h-[8.12vw] bg-[yellow] rounded-[1.71vw] opacity-30 absolute z-2 bottom-0 right-[-4.79vw]"
                  /> -->
                  <Icon
                    icon="fluent:play-12-filled"
                    class="absolute top-[50%] left-[50%] z-10"
                    style="
                      color: #fff;
                      transform: translateX(-50%) translateY(-50%);
                    "
                  />
                </div>
                <div
                  class="flex flex-col justify-between"
                  v-if="rankingListData && rankingListData.length > 0"
                >
                  <div
                    class="flex justify-between text-[3.25vw] w-[55.84vw] h-[4.52vw]"
                    v-for="(data, key) in rankingListData[index].tracks"
                    :key="key"
                  >
                    <span class="text-[#303546] font-[900]">{{ key + 1 }}</span>
                    <p class="text-[#303546] font-[900] ellipsis">
                      {{ data.first }}
                      <span class="font-[900] text-[#9a9ea7] w-[19vw]"
                        >—{{ data.second }}</span
                      >
                    </p>
                    <span class="text-[#6dbf99]">新</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 精选榜 -->
          <div class="text-left mt-[12.91vw]">
            <h1 class="text-[4.44vw] text-[#303546] font-[700]">精选榜</h1>
            <ul
              class="flex flex-wrap pt-[3.59vw] h-[123.42vw] box-border content-between"
            >
              <li
                :class="[
                  'w-[28.63vw] h-[28.63vw] rounded-[2.14vw] relative',
                  index % 3 == 1 ? 'mx-[2.7vw]' : '',
                ]"
                v-for="(item, index) in rankingListAll?.slice(0, 11)"
                :key="index"
              >
                <img :src="item.coverImgUrl" class="rounded-[2.14vw]" />
                <Icon
                  icon="fluent:play-12-filled"
                  class="absolute bottom-[2vw] right-[2vw] h-[6vw] w-[6vw] text-[#fff]"
                />
              </li>
            </ul>
          </div>
          <!-- 曲风榜 -->
          <div class="text-left mt-[12.91vw]">
            <h1 class="text-[4.44vw] text-[#303546] font-[700]">曲风榜</h1>
            <ul
              class="flex flex-wrap pt-[3.59vw] h-[93.71vw] box-border content-between"
            >
              <li
                :class="[
                  'w-[28.63vw] h-[28.63vw] rounded-[2.14vw] relative',
                  index % 3 == 1 ? 'mx-[2.7vw]' : '',
                ]"
                v-for="(item, index) in rankingListAll?.slice(11, 19)"
                :key="index"
              >
                <img :src="item.coverImgUrl" class="rounded-[2.14vw]" />
                <Icon
                  icon="fluent:play-12-filled"
                  class="absolute bottom-[2vw] right-[2vw] h-[6vw] w-[6vw] text-[#fff]"
                />
              </li>
            </ul>
          </div>
          <!-- 全球榜 -->
          <div class="text-left mt-[12.91vw]">
            <h1 class="text-[4.44vw] text-[#303546] font-[700]">全球榜</h1>
            <ul
              class="flex flex-wrap pt-[3.59vw] h-[63.17vw] box-border content-between"
            >
              <li
                :class="[
                  'w-[28.63vw] h-[28.63vw] rounded-[2.14vw] relative',
                  index % 3 == 1 ? 'mx-[2.7vw]' : '',
                ]"
                v-for="(item, index) in rankingListAll?.slice(19, 25)"
                :key="index"
              >
                <img :src="item.coverImgUrl" class="rounded-[2.14vw]" />
                <Icon
                  icon="fluent:play-12-filled"
                  class="absolute bottom-[2vw] right-[2vw] h-[6vw] w-[6vw] text-[#fff]"
                />
              </li>
            </ul>
          </div>
          <!-- 语种榜 -->
          <div class="text-left mt-[12.91vw]">
            <h1 class="text-[4.44vw] text-[#303546] font-[700]">语种榜</h1>
            <ul
              class="flex flex-wrap pt-[3.59vw] h-[93.71vw] box-border content-between"
            >
              <li
                :class="[
                  'w-[28.63vw] h-[28.63vw] rounded-[2.14vw] relative',
                  index % 3 == 1 ? 'mx-[2.7vw]' : '',
                ]"
                v-for="(item, index) in rankingListAll?.slice(25, 32)"
                :key="index"
              >
                <img :src="item.coverImgUrl" class="rounded-[2.14vw]" />
                <Icon
                  icon="fluent:play-12-filled"
                  class="absolute bottom-[2vw] right-[2vw] h-[6vw] w-[6vw] text-[#fff]"
                />
              </li>
            </ul>
          </div>
          <!-- 特色榜 -->
          <div class="text-left mt-[12.91vw]">
            <h1 class="text-[4.44vw] text-[#303546] font-[700]">特色榜</h1>
            <ul
              class="flex flex-wrap pt-[3.59vw] h-[63.17vw] box-border content-between"
            >
              <li
                :class="[
                  'w-[28.63vw] h-[28.63vw] rounded-[2.14vw] relative',
                  index % 3 == 1 ? 'mx-[2.7vw]' : '',
                ]"
                v-for="(item, index) in rankingListAll?.slice(32, 38)"
                :key="index"
              >
                <img :src="item.coverImgUrl" class="rounded-[2.14vw]" />
                <Icon
                  icon="fluent:play-12-filled"
                  class="absolute bottom-[2vw] right-[2vw] h-[6vw] w-[6vw] text-[#fff]"
                />
              </li>
            </ul>
          </div>
        </van-tab>
        <van-tab title="精选"></van-tab>
        <van-tab title="曲风"></van-tab>
        <van-tab title="全球"></van-tab>
        <van-tab title="语种"></van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script setup lang="ts">
import {
  getrankingListAll,
  getrankingListData,
  getSongListDetails,
} from "../service";
import { useRequest } from "vue-request";

const active = ref(0);
const rankingListId = ref<number[]>([]);
const rankingPicURL = ref<string[]>([]);

// 使用泛型为 useRequest 返回的数据指定类型
const { data: rankingListAll = [] as List[] } = useRequest(
  getrankingListAll,
  {}
);
const { data: rankingListData = [] as List[] } = useRequest(
  getrankingListData,
  {}
);
// 为 runSongListDetails 指定参数和返回值类型
const { data: songListDetails, run: runSongListDetails } = useRequest(
  getSongListDetails,
  {
    manual: true,
  }
);

// arr.value = rankingListData.value.map((item) => {
//   return item.id;
// });

// 修复 rankingPic 函数的类型注解
function rankingPic(id: number): string {
  // 假设你有一些逻辑来获取图片 URL
  // 这里只是一个示例，你需要根据实际情况实现获取 URL 的逻辑
  const imageUrl = `/path/to/image/${id}.jpg`;
  return imageUrl;
}

runSongListDetails({ id: 19723756 });

onMounted(() => {});

watchEffect(() => {
  //   console.log(rankingListData);
  //   console.log(rankingListAll);
  //   rankingListId
  // if (rankingListAll.value && rankingListAll.value.length > 0) {
  //   rankingListId.value = rankingListAll.value
  //     .slice(0, 4)
  //     .map((item: { id: any }) => {
  //       return item.id;
  //     });
  // }
  console.log(rankingListId.value);
  console.log(rankingPicURL.value);
  console.log(songListDetails);
});
</script>
<style scoped>
.ellipsis {
  display: flex;
  width: 45.56vw;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-wrap: normal; /* 确保单词不换行 */
}

.bgStyle,
.van-nav-bar,
::v-deep .van-tabs__nav {
  background-color: #f2f4fb !important;
}
</style>
