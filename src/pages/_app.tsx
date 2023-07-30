import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from '@/theme';
import { Provider } from "react-redux";
import store from '@/store';

function MyApp({ Component, pageProps }: any) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  )
}

export default MyApp;