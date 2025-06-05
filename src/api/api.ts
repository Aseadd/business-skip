import axios from "axios";
import { API } from "../constants/api";
import type { Skip } from "../types/skip";

export const getSkips = () => {
  return axios.get<Skip[]>(`${API.SKIPS}`);
};
