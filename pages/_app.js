import { createGlobalStyle } from 'styled-components'
import { AuthProvider } from '../contexts/AuthContext'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif
  }
`

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  )
}
