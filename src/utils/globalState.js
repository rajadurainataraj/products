import { atom } from "recoil"
import { recoilPersist } from "recoil-persist"
const { persistAtom } = recoilPersist()
export const tokenValue = atom({
  key: "auth",
  default: "",
  effects_UNSTABLE: [persistAtom],
})
export const cartItems = atom({
  key: "cartss",
  default: undefined || [],
  effects_UNSTABLE: [persistAtom],
})
export const allData = atom({
  key: "allDatass",
  default: [],
})
export const searchInput = atom({
  key: "searchInputval",
  default: "",
})
export const getSearchData = atom({
  key: "searchData",
  default: [],
})
