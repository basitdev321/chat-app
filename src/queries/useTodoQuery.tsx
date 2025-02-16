import { useQuery } from "react-query";
import { getTodos } from "@/models/todo-list.model";

export function useTodoQuery(enabled: boolean) {
  return useQuery(["todos"], async () => getTodos(), {
    enabled,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
}
