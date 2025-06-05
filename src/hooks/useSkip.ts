import { useQuery } from "@tanstack/react-query";
import { getSkips } from "../api/api";

export const useSkips = () => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["skips", ],
    queryFn: () => getSkips().then((res) => res.data),
  });

  return {
    data,
    isLoading,
    isError,
    refetch,
  };
};
