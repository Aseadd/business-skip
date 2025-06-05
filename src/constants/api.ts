const BASE_URL = import.meta.env.VITE_API_URL;

export const API_URL = `${BASE_URL}`;

export const API = {
  BASE: API_URL,
  SKIPS: `${API_URL}skips/by-location?postcode=NR32&area=Lowestoft`,
};
