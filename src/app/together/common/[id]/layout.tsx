import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";
import { getfetch } from "@/helper/fetch/todo";

interface Props {
  params: { id: string };
  children: React.ReactNode;
}

export const metadata = {
  title: "TODO",
  description: "TODO",
};

export default async function RootLayout({ params, children }: Props) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["todo-test"],
    queryFn: () => getfetch(`/todo/together/list?roomId=${params.id}`),
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>
  );
}
