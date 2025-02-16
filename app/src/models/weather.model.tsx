import axios from "@/service";
import { IWeatherData } from "@/types";
import { URL } from "@/utils/url";

export const getWeather = async (lat: number, lon: number) => {
  let url = URL.WEATHER;
  url += `?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`;
  const { data } = await axios.get(url);
  return data as IWeatherData;
};
