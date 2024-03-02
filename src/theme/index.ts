import { extendTheme, type ChakraTheme } from "@chakra-ui/react";

const theme: Partial<ChakraTheme> = { config: { initialColorMode: "system" } };

export default extendTheme(theme);
