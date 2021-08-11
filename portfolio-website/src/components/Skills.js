import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    skillsText: {
        fontSize: '8em',
        position: 'relative',
        [theme.breakpoints.down('md')]: {
            fontSize: '6em'
        }
    },
    skillsBox: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '30px 0'
    },
    skillsBoxHeadline: {
        fontSize: 30
    },
    skillsBoxList: {
        fontSize: 20
    },
    container: {
        marginTop: 150,
        height: 'auto',
        width: '100%',
        [theme.breakpoints.down("sm")]: {
            marginTop: 0
        }
    }
}));

function Skills() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Grid data-scroll="1" data-scroll-speed="7" spacing={7} container>
                <Grid style={{width: '100%'}} item md={6}>
                    <Typography component="h1" className={classes.skillsText}>SKILLS</Typography>
                    <Grid item container className={classes.skillsBox}>
                        <Typography className={classes.skillsBoxHeadline}>FRONTEND</Typography>
                        <Typography className={classes.skillsBoxList}>&js, html, css, react, redux, bootstrap, materialui</Typography>
                    </Grid>
                    <Grid item container className={classes.skillsBox}>
                        <Typography className={classes.skillsBoxHeadline}>BACKEND</Typography>
                        <Typography className={classes.skillsBoxList}>&python, django, drf, celery</Typography>
                    </Grid>
                    <Grid item container className={classes.skillsBox}>
                        <Typography className={classes.skillsBoxHeadline}>DATABASES</Typography>
                        <Typography className={classes.skillsBoxList}>&postgresql, redis</Typography>
                    </Grid>
                    <Grid item container className={classes.skillsBox}>
                        <Typography className={classes.skillsBoxHeadline}>DEPLOY</Typography>
                        <Typography className={classes.skillsBoxList}>&heroku, aws(s3 buckets), nginx, gunicorn</Typography>
                    </Grid>
                </Grid>
                <Grid style={{width: '100%'}} item md={6}>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', marginTop: 65}} id="myCanvasContainer">
                        <canvas height="500px" width="500px" id="myCanvas">
                            <p></p>
                            <ul>
                                <li>
                                    <a className="canvas-a" href="/">Django</a>
                                </li>
                                <li>
                                    <a className="canvas-a" href="/">DRF</a>
                                </li>
                                <li>
                                    <a className="canvas-a" href="/">AWS</a>
                                </li>
                                <li>
                                    <a className="canvas-a" href="/">React</a>
                                </li>
                                <li>
                                    <a className="canvas-a" href="/">Python</a>
                                </li>
                                <li>
                                    <a className="canvas-a" href="/">JS</a>
                                </li>
                                <li>
                                    <a className="canvas-a" href="/">Redux</a>
                                </li>
                                <li>
                                    <a className="canvas-a" href="/">Bootstrap</a>
                                </li>
                                <li>
                                    <a className="canvas-a" href="/">REST</a>
                                </li>
                                <li>
                                    <a className="canvas-a" href="/">MaterialUI</a>
                                </li>
                                <li>
                                    <a className="canvas-a" href="/">Git</a>
                                </li>
                                <li>
                                    <a className="canvas-a" href="/">Linux</a>
                                </li>
                                <li>
                                    <a className="canvas-a" href="/">Nginx</a>
                                </li>
                                <li>
                                    <a className="canvas-a" href="/">Gunicorn</a>
                                </li>
                                <li>
                                    <a className="canvas-a" href="/">Heroku</a>
                                </li>
                                <li>
                                    <a className="canvas-a" href="/">PostgreSQL</a>
                                </li>
                                <li>
                                    <a className="canvas-a" href="/">HTML</a>
                                </li>
                                <li>
                                    <a className="canvas-a" href="/">CSS</a>
                                </li>
                                <li>
                                    <a className="canvas-a" href="/">Celery</a>
                                </li>
                            </ul>
                        </canvas>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Skills
