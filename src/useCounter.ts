import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { counterContext as context } from "./counterProvider.js";

export const useCounter = () => {
  const queryClient = useQueryClient({ context });

  const { data: count, isLoading } = useQuery(['count'], async () => {
    const { data } = await axios.get<number>('/api/counter');
    return data;
  }, { context });

  const increment = async () => {
    await axios.post('/api/counter');
    queryClient.invalidateQueries({ queryKey: ['count'] });
  };

  return { count, isLoading, increment };
};
