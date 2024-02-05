import { getfetch, postFetch, deleteFetch } from "@/helper/fetch/todo";
import {
  useQueryClient,
  useQuery,
  useMutation,
  useSuspenseQuery,
} from "@tanstack/react-query";

export const QUERY_KEY = "todo";
const PREFIX_PATH = "/todo/list";

// GET - loading
export const useTodoSuspenseQuery = () => {
  const queryFn = () => getfetch(PREFIX_PATH);
  return useSuspenseQuery({
    queryKey: [QUERY_KEY],
    queryFn: () => queryFn(),
  });
};

// GET
export const useTodoQuery = () => {
  const queryFn = () => getfetch(PREFIX_PATH);
  return useQuery({
    queryKey: [QUERY_KEY],
    queryFn: () => queryFn(),
  });
};

// POST
export const useTodoMutation = () => {
  const mutationFn = (data: Item) => postFetch(PREFIX_PATH, data);
  const queryClient = useQueryClient();
  const onSuccess = () =>
    queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
  return useMutation({
    mutationFn,
    onSuccess,
  });
};

// 위에 네이밍들 수정하자
// DELETE
export const useTodoDelete = () => {
  const mutationFn = (data: Item) => deleteFetch(PREFIX_PATH, data);
  const queryClient = useQueryClient();
  const onSuccess = () =>
    queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
  return useMutation({
    mutationFn,
    onSuccess,
  });
};
