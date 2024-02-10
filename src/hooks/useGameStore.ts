import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import Store from "../types/Store";

export default function useGameStore(gameID: number) {
  const apiClient = new APIClient<Store>(`/games/${gameID}/stores`);

  return useQuery({
    queryKey: ["stores", gameID],
    queryFn: apiClient.getAll,
  });
}
