import { ThemeProvider } from '@mui/material'
import React from 'react'
import { theme } from '../../theme/Themes'
import Navbar from '../components/Navbar'
import HomePage from './Home/HomePage'

export default function MainFrame() {
  return (
    <ThemeProvider theme={theme}>
        <Navbar/>
        <HomePage/>
    </ThemeProvider>
  )
}
