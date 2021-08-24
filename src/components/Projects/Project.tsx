import React from "react";
import {
  Accordion,
  AccordionSummary,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Project, { getDuration } from "../../utils/Project";

const useStyles = makeStyles((theme) => ({}));

const defaultProject: Project = {
  name: "Project",
  start: new Date(),
  description: "the default project",
  sourceUrl: "https://github.com/tyfoster97",
  skills: ["typing", "Git"],
};

type SummaryProps = {
  name: string;
  duration: string;
};

type Props = {
  project: Project;
};

const ProjectSummary = ({ name, duration }: SummaryProps) => {
  return (
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <Typography variant='h6'>{name}</Typography>
        </Grid>
        <Grid item>
          <Typography variant='body1'>{duration}</Typography>
        </Grid>
      </Grid>
    </AccordionSummary>
  );
};

const ProjectCard = ({ project }: Props) => {
  const classes = useStyles();
  console.log(classes);
  return (
    <Accordion>
      <ProjectSummary name={project.name} duration={getDuration(project)} />
    </Accordion>
  );
};

ProjectCard.defaultProps = {
  project: defaultProject,
};

export default ProjectCard;
