import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../service/api-client";

interface Platform {
    id: number;
    name: string;
    slug: string;
  }

interface Genre {
    id: number;
    name: string;
    image_background: string;
  }

interface Publisher {
    id: number;
    name: string;
  }
  
interface Game {
    id: number;
    name: string;
    slug: string;
    genres: Genre[];
    publishers: Publisher[];
    description_raw: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating_top: number;
  }

const apiClient = new APIClient<Game>("/games");

const useGames = () => {
    return useQuery<FetchResponse<Game>, Error>({
        queryKey: ["games"],
        queryFn: async () => {
            const response = await apiClient.getAll({});
            return response.data
        },
    });
};

export default useGames;
