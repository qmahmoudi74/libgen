import "@tanstack/react-query";
import { type DehydratedState } from "@tanstack/react-query";

declare module "@tanstack/react-query" {
  interface Register {
    defaultError: AxiosError;
  }
}

declare type DehydratedProps = { dehydratedState?: DehydratedState };
