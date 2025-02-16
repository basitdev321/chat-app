import axios from "@/service";
import { IGeoCodeAPIResponse } from "@/types";
import { URL } from "@/utils/url";

export const getGeoCode = async (location: string) => {
  let url = URL.GEOCODE;
  url += `?q=${location}&apiKey=${import.meta.env.VITE_GEOCODE_API_KEY}`;
  const { data } = await axios.get(url);
  return data as IGeoCodeAPIResponse;
};
