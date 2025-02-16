import { storage } from "./storage";

export const token = {
  get: () => {
    return storage.get("token");
  },
  set: (token: string) => {
    storage.set("token", token);
  },
  remove: () => {
    storage.remove("token");
  },
};
