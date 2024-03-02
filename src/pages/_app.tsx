import { type DehydratedProps } from "globals";
import type { AppProps } from "next/app";
import AppChakraProvider from "providers/AppChakraProvider";
import AppQueryClientProvider from "providers/AppQueryClientProvider";
import type { FC } from "react";

type Props = AppProps<DehydratedProps>;

const App: FC<Props> = ({ Component, pageProps }) => {
  return (
    <AppChakraProvider>
      <AppQueryClientProvider dehydratedState={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </AppQueryClientProvider>
    </AppChakraProvider>
  );
};

export default App;
