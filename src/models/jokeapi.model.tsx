import axios from "@/service";
import { JokeAPIResponse } from "@/types";
import { URL } from "@/utils/url";

export const getJokeOfTheDay = async () => {
  const { data } = await axios.get(URL.JOKEAPI);
  return data as JokeAPIResponse;
};
