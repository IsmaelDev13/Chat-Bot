"use client";
import { QueryClientProvider } from "@tanstack/react-query";
import React, { ReactNode } from "react";
import { QueryClient } from "@tanstack/react-query";
import { MessagesProvider } from "@/context/messages";

type Props = {
  children: ReactNode;
};

const Providers = ({ children }: Props) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <MessagesProvider>{children}</MessagesProvider>
    </QueryClientProvider>
  );
};

export default Providers;
