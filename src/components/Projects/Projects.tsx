import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { miscColors } from '../../themes/theme'
import { PageWrapper } from '../utils'
import PROJECTS from './data'
import ProjectCard from './Project'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '600px',
    textAlign: 'center',
  },
  title: {
    color: theme.palette.getContrastText(miscColors.tardis),
    margin: theme.spacing(2),
  },
}))

const Projects = () => {
  const classes = useStyles()
  return (
    <PageWrapper>
      <Grid className={classes.root} container direction='column'>
        <Typography variant='h4' className={classes.title}>
          {PROJECTS.name}
        </Typography>
        {PROJECTS.items &&
          PROJECTS.items.map((project) => {
            return (
              <ProjectCard key={`project-${project.name}`} project={project} />
            )
          })}
      </Grid>
    </PageWrapper>
  )
}

export default Projects
