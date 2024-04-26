import ProfilePage from '@/features/ProfilePage'
import { Grid } from '@chakra-ui/react'
import React from 'react'

export default function Profile() {
  return (
    <Grid width={"320px"} margin={"0 auto"} placeItems={"center"}>
      <ProfilePage />
    </Grid>
  )
}
