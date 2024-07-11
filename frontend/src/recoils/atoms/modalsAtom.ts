import { atom } from "recoil";

export const modalState = atom({
  key: "modalState",
  default: false,
});

export const modalImageState = atom({
  key: "modalImageState",
  default: "",
});
