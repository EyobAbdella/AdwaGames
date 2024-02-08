import Game from "../types/Game";
import APIClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
export default function useFetchGames(fetch: string) {
  const apiClient = new APIClient<Game>(`/games${fetch}`);
  return useQuery({
    queryKey: ["games", fetch],
    queryFn: apiClient.getAll,
  });
}
