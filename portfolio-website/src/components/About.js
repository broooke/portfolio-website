import { Box, CardMedia, Grid, Link, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Tilt from 'react-tilted'

const useStyles = makeStyles((theme) => ({
    image: {
        width: '100%',
        height: 'auto',
        maxHeight: 550,
        objectFit: 'cover', 
        verticalAlign: 'middle',
        webkitFilter: 'grayscale(100%)',
        filter: 'grayscale(100%)',
        webkitTransition: '.3s ease-in-out',
        transition: '.3s ease-in-out',
        '&:hover': {
            webkitFilter: 'grayscale(0)',
            filter: 'grayscale(0)',
        }
    },
    whoIAm:{
        fontSize: '8em',
        position: 'relative',
        marginTop: '0vh',
        marginLeft: '-17.5vw',
        zIndex: 99,
        whiteSpace: 'nowrap',
        [theme.breakpoints.down("md")]: {
            fontSize: '6em'
        },
        [theme.breakpoints.down("sm")]: {
            marginLeft: '-6vw',
            fontSize: '4em'
        }
    },
    aboutMe: {
        padding: '0 50px'
    },
    aboutMeHeadline: {
        fontSize: '3em'
    }
}));
function About() {
    const classes = useStyles();

    return (
        <div id="about" style={{paddingTop: 50}}>
            <Grid data-scroll-target="#me" container>
                <Grid item sm={12} md={8}>
                    
                    <Tilt style={{zIndex: 1}} reverse>
                        <CardMedia 
                            className={classes.image} 
                            src="https://i2.wp.com/catesthill.com/wp-content/uploads/2018/03/catesthill-cosy-grey-home-office-makeover-reveal-20.jpg?fit=2500%2C1847&ssl=1" 
                            component="img" 
                        />
                    </Tilt>
                </Grid>
                <Grid item sm={12} md={4}>
                    <Typography component="h1" data-scroll="1" data-scroll-speed="3" data-scroll-direction="horizontal" className={classes.whoIAm}>WHO I AM?</Typography>
                    <Box data-scroll="1" data-scroll-speed="2" className={classes.aboutMe}>
                        <Typography className={classes.aboutMeHeadline}>about me</Typography>
                        <Typography>Hi, I'm Gaydenko Nikita & Fullstack developer. The primary area of my interest is backend. For backend i am using Django/DRF & frontend a React/Redux. You can view my projects on my <Link href="https://github.com/broooke?tab=repositories" style={{textDecoration: 'underline'}}>github profile</Link>. 
                            Now I am open for cooperation & work on new projects. 
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default About
