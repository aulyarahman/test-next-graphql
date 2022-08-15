import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { Global } from '@emotion/react'

import { Provider } from '~context/app-context'
import client from '~libs/apollo-client'

import { globalStyles } from '~/styles/globalStyles'
import Root from '~/src/layout/root'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <Provider>
        <Global styles={globalStyles} />
        <Root>
          <Component {...pageProps} />
        </Root>
      </Provider>
    </ApolloProvider>
  )
}

export default MyApp
