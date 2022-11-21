import { atom } from "jotai";
import { Data } from "../types";
import { selectAtom } from "jotai/utils";

export const datasAtom = atom<Data[]>([
  {
    id: 1,
    title: "sample1",
    text: "foo",
    isDone: false,
    day: "",
    url: "https://www.youtube.com/",
  },
  { id: 2, title: "sample2", text: "bar", isDone: false, day: "", url: "" },
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

// export const deleteDatasAtom = atom<null, Pick<Data, "id">>(
//   null,
//   (get, set) => {
//     const prevDatas2 = get(datasAtom);
//     const newData2 = {
//       id: prevDatas2.length - 1,
//     };
//     const newDatas2 = [...prevDatas2, newData2];
//     set(datasAtom, newDatas2);
//   }
// );
