import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query";
import { type DehydratedProps } from "globals";
import { useState, type FC, type PropsWithChildren } from "react";

type Props = PropsWithChildren<DehydratedProps>;

const AppQueryClientProvider: FC<Props> = ({ children, dehydratedState }) => {
  const staleTime = 60_000;

  const [queryClient] = useState(
    () => new QueryClient({ defaultOptions: { queries: { staleTime } } })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>
    </QueryClientProvider>
  );
};

export default AppQueryClientProvider;
