import http from "./http";
import to from "await-to-js";

// 获取默认搜索关键词
export const getDefaultKey = async () => {
  const [err, res] = await to(http.post<Res.getDefaultKey>("/search/default"));
  if (err) throw new Error("请求失败");
  return res.data.data.realkeyword;
};
/*
export const getDefaultKey = () =>
  http.post<Res.getDefaultKey>("/search/default");
*/

// 搜索指定关键字
interface SearchResultParams {
  keywords: string;
  limit?: number;
  offset?: number;
  type?: string;
}
/*
export const searchResult = (params: SearchResultParams) =>
  http.get<Res.searchResult>("/cloudsearch", { params });
*/
export const searchResult = async (params: SearchResultParams) => {
  const [err, res] = await to(
    http.get<Res.searchResult>("/cloudsearch", { params })
  );
  if (err) throw new Error("请求失败");
  return res.data.result.songs;
};

// 所有榜单
export const getrankingListAll = async () => {
  const [err, res] = await to(
    http.get<Res.RootObject>("/toplist")
  );
  if (err) throw new Error("请求失败");
  return res.data.list;
};

// 所有榜单内容摘要
export const getrankingListData = async () => {
  const [err, res] = await to(
    http.get<Res.RankingListData>("/toplist/detail")
  );
  if (err) throw new Error("请求失败");
  return res.data.list;
};

// 歌单详情
interface SongListDetails {
  id: number;
  s?: number;
}
export const getSongListDetails = async (params: SongListDetails) => {
  const [err, res] = await to(
    http.get<Res.songListDetails>("/playlist/detail", { params })
  );
  if (err) throw new Error("请求失败");
  return res.data.playlist.tracks[0].al.picUrl;
};