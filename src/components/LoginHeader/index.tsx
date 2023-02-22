import React from 'react'
//material-ui
import { Link } from 'react-router-dom'
import { AppBar, Box, Toolbar, Typography } from '@material-ui/core'
import DarkActiveIcon from '../../assets/image/DarkActiveIcon.svg'
import SubdirectoryArrowLeftIcon from '@material-ui/icons/SubdirectoryArrowLeft'
//external;
import { useStyles } from './Style'

function LoginHeader() {
  const classes = useStyles()

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Box mr={3}>
          <img src="/logo.png" alt="logo" width={35} height={35} />
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default LoginHeader
