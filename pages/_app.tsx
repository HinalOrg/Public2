import App, { AppContext } from 'next/app';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';
import { getApolloClient } from '../graphql/client';
import { AuthProvider } from '../auth/context';
import { getAuthToken } from '../auth/cookie';
import { queryMe } from '../auth/queries';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={getApolloClient(null)}>
      <AuthProvider initialUser={pageProps.me}>
        <Component {...pageProps} />
      </AuthProvider>
    </ApolloProvider>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const apolloClient = getApolloClient(appContext.ctx);
  appContext.ctx.apolloClient = apolloClient;

  const authToken = getAuthToken(appContext.ctx);

  const appProps = await App.getInitialProps(appContext);

  console.log('initial', authToken);
  if (authToken) {
    appProps.pageProps.me = await queryMe(apolloClient);
  }

  return { ...appProps };
};

export default MyApp;
