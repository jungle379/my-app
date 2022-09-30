import { atom } from "jotai";
import { Data } from "../types";
import { selectAtom } from "jotai/utils";

export const datasAtom = atom<Data[]>([
  { id: 1, text: "foo", isDone: false },
  { id: 2, text: "bar", isDone: false },
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

export const addDatasAtom = atom<null, Pick<Data, "text">>(
  null,
  (get, set, update) => {
    const prevDatas = get(datasAtom);
    const newData = {
      id: prevDatas.length + 1,
      // title: update.text,
      text: update.text,
      isDone: false,
    };
    const newDatas = [...prevDatas, newData];
    set(datasAtom, newDatas);
  }
);
