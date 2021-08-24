import { Button, Grid } from '@material-ui/core'
import React from 'react'

const NavButtons = () => {
    return (
        <Grid container
        justifyContent='space-evenly'>
        <Button 
          variant='contained' 
          color='primary'
          href='about'>
          About Me
        </Button>
        <Button 
          variant='contained' 
          color='primary'
          href='https://linkedin.com/in/ty-foster'
          target='_blank'
          rel='noopener noreferrer'>
          LinkedIn
        </Button>
        <Button 
          variant='contained' 
          color='primary'
          href='https://github.com/tyfoster97'
          target='_blank'
          rel='noopener noreferrer'>
          GitHub
        </Button>
        <Button 
          variant='contained' 
          color='primary'
          href='projects'>
          Projects
        </Button>
      </Grid> 
    )
}

export default NavButtons