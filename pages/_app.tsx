import '@vercel/examples-ui/globals.css';

import { Analytics } from '@vercel/analytics/react';
import { getLayout } from '@vercel/examples-ui';

import type { AppProps } from 'next/app'
import type { LayoutProps } from '@vercel/examples-ui/layout'
function App({ Component, pageProps }: AppProps) {
  const Layout = getLayout<LayoutProps>(Component)
  console.log('Layout: ', Layout)

  return (
    <Layout
      title="Liam's AI bot"
      path='/ai-chatgpt'
      description='Powered by ChatGPT'
    >
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  )
}

export default App
