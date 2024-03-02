import { ChakraProvider } from "@chakra-ui/react";
import type { FC, PropsWithChildren } from "react";
import theme from "theme";

type Props = PropsWithChildren;

const AppChakraProvider: FC<Props> = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default AppChakraProvider;
