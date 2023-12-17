import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"
import { GitProvider } from "./contexts/GitContext"

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <GitProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </GitProvider>
    </ThemeProvider>
  )
}
