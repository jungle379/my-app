import { atom } from "jotai";
import { Data } from "../types";
import { selectAtom } from "jotai/utils";

export const datasAtom = atom<Data[]>([
  { id: 1, titles: "1st", text: "foo", isDone: false, day: "" },
  { id: 2, titles: "2nd", text: "bar", isDone: false, day: "" },
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

export const addDatasAtom = atom<null, Pick<Data, "text" | "titles" | "day">>(
  null,
  (get, set, update) => {
    const prevDatas = get(datasAtom);
    const newData = {
      id: prevDatas.length + 1,
      titles: update.titles,
      text: update.text,
      isDone: false,
      day: update.day,
    };
    const newDatas = [...prevDatas, newData];
    set(datasAtom, newDatas);
  }
);
