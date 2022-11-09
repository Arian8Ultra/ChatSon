import { Box, CssBaseline, ThemeProvider } from '@mui/material'
import React from 'react'
import { borderRadiuos, theme } from '../../theme/Themes'
import Navbar from '../components/Navbar'
import PagesMainBox from '../components/PagesMainBox'
import SideBarMain from '../components/SideBar'
import useSideBarStore from '../stores/SideBarStore'
import HomePage from './Home/HomePage'

export default function MainFrame() {
  let open = useSideBarStore((state)=> state.open)

  return (
    <ThemeProvider theme={theme}>
        <Navbar/>
        <SideBarMain/>
        <PagesMainBox open={open}>
            <Box
              sx={{
                display: "flex",
                mt: "80px",
                mx:1,
                p: 3,
                borderRadius: 2,
                bgcolor: "rgba(255,255,255,0.2)",
              }}
            >
              <CssBaseline />
              <HomePage/>
            </Box>
          </PagesMainBox>
    </ThemeProvider>
  )
}
