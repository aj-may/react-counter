import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { createContext, PropsWithChildren } from "react";

export const counterContext = createContext<QueryClient | undefined>(undefined);
const queryClient = new QueryClient();

export const CounterProvider = ({ children }: PropsWithChildren) =>
  <QueryClientProvider client={queryClient} context={counterContext}>
    {children}
  </QueryClientProvider>;
