import axios from "@/service";
import { IRandomUserAPIResponse } from "@/types";
import { URL } from "@/utils/url";

export const getUserProfile = async () => {
  const { data } = await axios.get(URL.USER);
  return data as IRandomUserAPIResponse;
};
