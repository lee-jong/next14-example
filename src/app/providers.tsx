"use client";

import { useState, ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental";
export default function Providers(props: { children: ReactNode }) {
  const [queryClient] = useState(new QueryClient());

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryStreamedHydration>
          {props.children}
        </ReactQueryStreamedHydration>
      </QueryClientProvider>
    </>
  );
}
