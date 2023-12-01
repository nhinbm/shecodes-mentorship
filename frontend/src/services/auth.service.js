import { apiService } from "@utils/api.service";

export const AuthServices = {
  login: (args) => apiService.post("/auth/login", args),
  register: (args) => apiService.post("/auth/register", args),
};
