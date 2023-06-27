import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { theme } from './theme'

export function MyTheme ({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

MyTheme.propTypes = {
  children: PropTypes.element.isRequired
}
