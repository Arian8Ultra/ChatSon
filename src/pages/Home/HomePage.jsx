import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import ChatCard from '../../components/ChatCard'

export default function HomePage() {
  return (
    <Box width={'100%'}>
      <Box py={1} mb bgcolor={'black'} borderRadius={2}>
        Home
      </Box>
    <Stack width={'100%'} spacing={2}>
      <ChatCard/>
      <ChatCard/>
      <ChatCard/>
      <ChatCard/>
      <ChatCard/>
      <ChatCard/>
      <ChatCard/>
      <ChatCard/>
      <ChatCard/>
      <ChatCard/>
      <ChatCard/>
      <ChatCard/>
      <ChatCard/>
      <ChatCard/>
      <ChatCard/>
      <ChatCard/>
    </Stack>
    </Box>
  )
}
