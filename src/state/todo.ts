import { atom } from "jotai";
import { Data } from "../types";
import { selectAtom } from "jotai/utils";

export const datasAtom = atom<Data[]>([
  { id: 1, title: "sample1", text: "foo", isDone: false, day: "" },
  { id: 2, title: "sample2", text: "bar", isDone: false, day: "" },
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

export const addDatasAtom = atom<null, Pick<Data, "text" | "title" | "day">>(
  null,
  (get, set, update) => {
    const prevDatas = get(datasAtom);
    const newData = {
      id: prevDatas.length + 1,
      title: update.title,
      text: update.text,
      isDone: false,
      day: update.day,
    };
    const newDatas = [...prevDatas, newData];
    set(datasAtom, newDatas);
  }
);
