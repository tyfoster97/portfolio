import React from 'react'
import { Accordion, AccordionDetails, AccordionSummary, makeStyles } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.info.light,
        color: theme.palette.getContrastText(theme.palette.info.light),
        marginBottom: theme.spacing(1.5),
        width: '100%',
    },
    icon: {
        color: theme.palette.getContrastText(theme.palette.info.light)
    },
    details: {
        backgroundColor: theme.palette.info.dark
    }
}))

type Props = {
    summary: JSX.Element,
    details: JSX.Element,
}

const SiteAccordion = ({summary, details}: Props) => {
    const classes = useStyles()

    return (
        <Accordion className={classes.root}>
            <AccordionSummary expandIcon={<ExpandMoreIcon className={classes.icon} />}>
                {summary}
            </AccordionSummary>
            <AccordionDetails>
                {details}
            </AccordionDetails>
        </Accordion>
    )
}

export default SiteAccordion