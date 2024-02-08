import { useQuery } from "@tanstack/react-query";
import Game from "../types/Game";
import APIClient from "../services/api-client";

export default function useGames() {
  const apiClient = new APIClient<Game>("/games");
  return useQuery({
    queryKey: ["games"],
    queryFn: apiClient.getAll,
  });
}
