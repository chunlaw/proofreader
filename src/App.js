import React from 'react'
import './App.css'
import Header from './Header'
import MainBody from './MainBody'
import Footer from './Footer'
import {
  unstable_createMuiStrictModeTheme as createMuiTheme,
  ThemeProvider
} from '@material-ui/core/styles'

const theme = createMuiTheme()

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <MainBody />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
