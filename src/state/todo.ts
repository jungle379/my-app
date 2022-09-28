import { atom } from "jotai";
import { Data } from "../types";

export const datasAtom = atom<Data[]>([
  { id: 1, text: "foo", isDone: false },
  { id: 2, text: "bar", isDone: true },
]);
