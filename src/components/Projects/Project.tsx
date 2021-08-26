import React from 'react'
import { Button, Grid, makeStyles, Typography } from '@material-ui/core'
import Project, { getDuration } from '../../utils/Project'
import SiteAccordion from '../utils/Accordion/Accordion'

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'left',
  },
  button: {
    color: theme.palette.getContrastText(theme.palette.info.dark),
  },
  content: {
    margin: theme.spacing(0.5),
  },
  section: {
    marginTop: theme.spacing(2),
  },
  sectionHeading: {
    fontWeight: 'bold',
  },
}))

const defaultProject: Project = {
  name: 'Project',
  start: new Date(),
  description: ['the default project'],
  sourceUrl: 'https://github.com/tyfoster97',
  skills: ['typing', 'Git'],
}

type DetailsProps = {
  name: string
  demoUrl?: string
  description: string[]
  imageUrl?: string
  skills: string[]
  sourceUrl?: string
}

type SummaryProps = {
  name: string
  duration: string
}

type Props = {
  project: Project
}

const ProjectSummary = ({ name, duration }: SummaryProps) => {
  const classes = useStyles()
  return (
    <Grid
      container
      direction='row'
      justifyContent='space-between'
      alignItems='center'
    >
      <Grid item>
        <Typography variant='h6' className={classes.sectionHeading}>
          {name}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant='body1'>{duration}</Typography>
      </Grid>
    </Grid>
  )
}

const ProjectDetails = (props: DetailsProps) => {
  const classes = useStyles()
  const { name, demoUrl, description, imageUrl, skills, sourceUrl } = props

  return (
    <Grid className={classes.root} container direction='column'>
      {imageUrl && (
        <Grid className={classes.section} item>
          <img src={imageUrl} alt='software demo screenshot' />
        </Grid>
      )}
      {description && (
        <Grid className={classes.section} item>
          <Grid container direction='column'>
            <Typography variant='body1' className={classes.sectionHeading}>
              Description
            </Typography>
            {description.map((line, i) => {
              return (
                <Typography
                  key={`${name}-desc-${i}`}
                  variant='body2'
                  className={classes.content}
                >
                  {`- ${line}`}
                </Typography>
              )
            })}
          </Grid>
        </Grid>
      )}
      {skills.length && (
        <Grid className={classes.section} item>
          <Typography variant='body1' className={classes.sectionHeading}>
            Skills
          </Typography>
          <Grid container direction='row'>
            {skills.map((skill) => {
              return (
                <Typography
                  key={`${name}-skill-${skill}`}
                  variant='body2'
                  className={classes.content}
                >
                  {skill}
                </Typography>
              )
            })}
          </Grid>
        </Grid>
      )}
      {(demoUrl || sourceUrl) && (
        <Grid className={classes.section} item>
          <Grid container direction='row'>
            {demoUrl && (
              <Button
                className={classes.button}
                variant='outlined'
                color='primary'
                href={demoUrl}
                target='_blank'
                rel='noopener noreferrer'
              >
                View Demo
              </Button>
            )}
            {sourceUrl && (
              <Button
                className={classes.button}
                variant='outlined'
                color='primary'
                href={sourceUrl}
                target='_blank'
                rel='noopener noreferrer'
              >
                View Source
              </Button>
            )}
          </Grid>
        </Grid>
      )}
    </Grid>
  )
}

const ProjectCard = ({ project }: Props) => {
  return (
    <SiteAccordion
      summary={
        <ProjectSummary name={project.name} duration={getDuration(project)} />
      }
      details={
        <ProjectDetails
          name={project.name}
          description={project.description}
          skills={project.skills}
          sourceUrl={project.sourceUrl}
          demoUrl={project.demoUrl}
        />
      }
    />
  )
}

ProjectCard.defaultProps = {
  project: defaultProject,
}

export default ProjectCard
