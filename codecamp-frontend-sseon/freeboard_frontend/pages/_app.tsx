import { AppProps } from 'next/app';
import '../styles/globals.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
// import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: 'http://backendonline.codebootcamp.co.kr/graphql',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
