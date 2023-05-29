import { atom, selector } from "recoil";
import { getAccessToken } from "../libraries/getAccessToken";

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const restoreAccessTokenLoadable = selector({
  key: "restoreAccessTokenLoadable",
  get: async () => {
    const newAccessToken = await getAccessToken();
    return newAccessToken;
  },
});

export const selectedRegionState = atom<string | null>({
  key: "selectedRegionState",
  default: "",
});

export const selectService = atom<string | null>({
  key: "selectService",
  default: "",
});

export const selectServiceFromLanding = atom<string | null>({
  key: "selectServiceFirstFromLanding",
  default: "",
});
