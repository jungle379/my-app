import { atom } from "jotai";
import { Data } from "../types";
import { selectAtom } from "jotai/utils";

export const datasAtom = atom<Data[]>([
  { id: 1, title: "1st", text: "foo", isDone: true },
  { id: 2, title: "2nd", text: "bar", isDone: false },
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

export const addDatasAtom = atom<null, Pick<Data, "text" | "title">>(
  null,
  (get, set, update) => {
    const prevDatas = get(datasAtom);
    const newData = {
      id: prevDatas.length + 1,
      title: update.title,
      text: update.text,
      isDone: false,
    };
    const newDatas = [...prevDatas, newData];
    set(datasAtom, newDatas);
  }
);
