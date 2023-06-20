import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { LoginProvider } from '@/context/LoginContext'
import { SessionProvider } from "next-auth/react"

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <SessionProvider session={session}>
        <LoginProvider>
          <Component {...pageProps} />
        </LoginProvider>
      </SessionProvider>
    </>
  )
}