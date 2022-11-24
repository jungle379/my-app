import { atom } from "jotai";
import { Data } from "../types";
import { selectAtom } from "jotai/utils";

export const datasAtom = atom<Data[]>([
  {
    id: 1,
    title: "sample1",
    text: "foo",
    isDone: false,
    day: "2022/1/1",
    url: "https://www.yahoo.co.jp/",
  },
  {
    id: 2,
    title: "sample2",
    text: "bar",
    isDone: false,
    day: "2022/1/2",
    url: "https://www.youtube.com/",
  },
]);

export const datasLengthAtom = selectAtom(datasAtom, (datas) => datas.length);

export const toggleDatasAtom = atom<Data[], Pick<Data, "id">>(
  (get) => get(datasAtom),
  (get, set, update) => {
    const prevData = get(datasAtom);
    const newData = prevData.map((data) => {
      if (data.id === update.id) {
        return { ...data, isDone: !data.isDone };
      }
      return data;
    });
    set(datasAtom, newData);
  }
);

export const addDatasAtom = atom<
  null,
  Pick<Data, "text" | "title" | "day" | "url">
>(null, (get, set, update) => {
  const prevDatas = get(datasAtom);
  const newData = {
    id: prevDatas.length + 1,
    title: update.title,
    text: update.text,
    url: update.url,
    isDone: false,
    day: update.day,
  };
  const newDatas = [...prevDatas, newData];
  set(datasAtom, newDatas);
});
