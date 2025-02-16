import { useQuery } from "react-query";
import { getJokeOfTheDay } from "@/models/jokeapi.model";

export function useJokeAPIQuery() {
  return useQuery(["jokeoftheday"], async () => getJokeOfTheDay(), {
    enabled: true,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
}
