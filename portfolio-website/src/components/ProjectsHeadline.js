import { Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    firstText: {
        fontSize: '10vw',
        whiteSpace: 'nowrap',
        position: 'relative',
        width: '100%'
    },
    secondText: {
        fontSize: '10vw',
        whiteSpace: 'nowrap',
        position: 'relative',
        top: '255%',
        width: '100%'
    },
}))

function ProjectsHeadline() {
    const classes = useStyles();

    return (
        <div style={{marginTop: 150, width: '100%', height: '100%'}}>
            <Typography component="h1" className={classes.firstText} id="first-moving-text" variant="h1">MY PROJECTS - MY PROJECTS - MY PROJECTS - MY PROJECTS - MY PROJECTS - MY PROJECTS - MY PROJECTS - MY PROJECTS - MY PROJECTS - MY PROJECTS - MY PROJECTS - MY PROJECTS - MY PROJECTS - MY PROJECTS - MY PROJECTS - MY PROJECTS - MY PROJECTS - MY PROJECTS - MY PROJECTS - MY PROJECTS</Typography>
            <Typography component="h1" className={classes.secondText} id="second-moving-text" variant="h1">MY PROJECTS - MY PROJECTS - MY PROJECTS - MY PROJECTS - MY PROJECTS - MY PROJECTS - MY PROJECTS - MY PROJECTS - MY PROJECTS - MY PROJECTS - MY PROJECTS - MY PROJECTS - MY PROJECTS - MY PROJECTS - MY PROJECTS - MY PROJECTS - MY PROJECTS - MY PROJECTS - MY PROJECTS - MY PROJECTS</Typography>
        </div>
    )
}

export default ProjectsHeadline
