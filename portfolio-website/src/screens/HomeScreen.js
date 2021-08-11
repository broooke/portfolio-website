import { Container, Typography } from '@material-ui/core'
import React, {useRef, useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Header from '../components/Header';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FirstBlock from '../components/FirstBlock';
import About from '../components/About';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import InstagramIcon from '@material-ui/icons/Instagram';
import Skills from '../components/Skills';
import ProjectsHeadline from '../components/ProjectsHeadline';
import Projects from '../components/Projects';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import { Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    awwward: {
        position: 'fixed',
        zIndex: 99999,
        transform: 'translateY(-50%)',
        top: '50%',
        left: 0,
        border: '2px solid #fff',
        borderRadius: '0 10px 10px 0',
        background: '#fff',
        padding: 15,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        '& svg': {
            '& path': {
                color: '#212121',
            },
            '&:hover': {
                transform: 'scale(1.3)',
                transition: 'all 550ms ease-in',
            },
            '&:not(:nth-child(1))':{
                marginTop: 10
            }
        }
    },
    timer: {
        position: 'fixed',
        zIndex: 999999,
        transform: 'translateY(-50%)',
        right: 25,
        animationName: 'bounce-1',
        animationTimingFunction: 'linear',
        animationDuration: '2s',
        animationIterationCount: 'infinite',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        top: '50%',
        left: 'auto',
    },
    line: {
        width: 1,
        background: 'rgba(255, 252, 252, 0.24) !important',
        height: '100px',
        marginBottom: 10
    },
    text: {
        writingMode: 'vertical-rl',
        textOrientation: 'mixed',
        webkitBoxDirection: 'normal',
        textTransform: 'uppercase',
        color: 'rgba(255, 252, 252, 0.24) !important'
    },
    line1: {
        width: 1,
        background: 'rgba(255, 252, 252, 0.24) !important',
        height: '100px',
        marginTop: 10
    },
    container: {
        maxWidth: '90%', 
        padding: 0, 
        backgroundColor: '#181818',
        [theme.breakpoints.down("sm")]: {
            backgroundColor: '#000'
        }
    }
}))

function HomeScreen() {
    const classes = useStyles();
    const ref = useRef(null);


    // useEffect(() => {
    //     if (!preloader && ref) {
    //     if (typeof window === "undefined" || !window.document) {
    //         return;
    //     }
    //     }
    // }, [preloader]);

    // const [timer, setTimer] = React.useState(3);

    // const id = React.useRef(null);

    // const clear = () => {
    //     window.clearInterval(id.current);
    //     setPreload(false);
    // };

    // React.useEffect(() => {
    //     id.current = window.setInterval(() => {
    //     setTimer((time) => time - 1);
    //     }, 1000);
    //     return () => clear();
    // }, []);

    // React.useEffect(() => {
    //     if (timer === 0) {
    //     clear();
    //     }
    // }, [timer]);

    // if (typeof window === "undefined" || !window.document) {
    //     return null;
    // }

    return (
        <React.Fragment>
            <div className={classes.awwward}>
                <Link href="https://www.linkedin.com/in/gaydenko" target="_blank">
                    <LinkedInIcon />
                </Link>
                <Link href="https://github.com/broooke?tab=repositories" target="_blank">
                    <GitHubIcon />
                </Link>
                <Link href="mailto:gaiydenko.develop@gmail.com" target="_blank">
                    <EmailIcon />
                </Link>
                <Link href="https://www.instagram.com/gaiydenko/" target="_blank">
                    <InstagramIcon />
                </Link>
            </div>
            <div className={classes.timer}>
                <div className={classes.line}></div>
                <Typography className={classes.text}>locomotive scroll</Typography>
                <div className={classes.line1}></div>
            </div>
            <div id='main-container' data-scroll-container ref={ref}>
                <Header />
                <Container data-scroll-section className={classes.container}>
                    <FirstBlock />    
                    <About />
                    <Skills />
                </Container>
                <div data-scroll-section style={{overflow: 'hidden'}}>
                    <ProjectsHeadline />
                </div>
                <Container data-scroll-section className={classes.container}>
                    <Projects />
                    <ContactForm />
                    <Footer />
                </Container>
            </div>
        </React.Fragment>
    )
}

export default HomeScreen
