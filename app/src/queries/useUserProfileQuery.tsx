import { useQuery } from "react-query";
import { getUserProfile } from "@/models/user-profile.model";

export function useUserProfileQuery(enabled: boolean) {
  return useQuery(["userProfile"], async () => getUserProfile(), {
    enabled,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
}
