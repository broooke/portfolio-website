import { Typography, Box } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import { makeStyles } from '@material-ui/core/styles'
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
    arrowDown: {
        fontSize: 40,
        '&:hover': {
            transform: 'scale(1.3) rotate(2turn)',
            transition: 'transform 1000ms ease',
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: 20
        }
    },
    scrollDownText: {
        writingMode: 'vertical-rl',
        verticalAlign: 'middle',
        textOrientation: 'mixed',
        animationName: 'bounce-1',
        animationTimingFunction: 'linear',
        animationDuration: '1s',
        animationIterationCount: 'infinite',
        webkitBoxDirection: 'normal',
        fontSize: '1.2vw',
        fontWeight: 100,
        textTransform: 'uppercase'
    },
    scrollDownBlock: {
        position: 'absolute', 
        verticalAlign: 'middle',
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        textAlign: 'center', 
        left: 'auto', 
        right: '5%', 
        top: '15%',
        [theme.breakpoints.down("md")]: {
            top: '11%',
        },
        [theme.breakpoints.down("sm")]: {
            top: '3%',
            right: '2%'
        },
    },
    welcomeText: {
        fontSize: '8vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        lineHeight: '1em',
        opacity: 1,
        [theme.breakpoints.down("md")]: {
            marginTop: 150
        }
    },
    boldText: {
        fontWeight: 400,
        textAlign: 'center',
    },
}));

function FirstBlock() {
    const classes = useStyles();
    const [open, setOpen] = useState(true)

    useEffect(() => {
        setOpen(true)
    }, [])

    return (
        <div>
            <h1 data-scroll="1" data-scroll-speed="4" className={classes.welcomeText}>
                <Fade in={open} timeout={15000}>
                <strong className={classes.boldText}>
                    <span>
                        <span style={{opacity: 1, transform: 'translateY(0px) translateZ(0px)'}}>H</span>
                        <span style={{opacity: 1, transform: 'translateY(0px) translateZ(0px)'}}>I</span>
                        <span style={{opacity: 1, transform: 'translateY(0px) translateZ(0px)'}}>,</span>
                        <span style={{opacity: 1, transform: 'translateY(0px) translateZ(0px)'}}> </span>
                        <span style={{opacity: 1, transform: 'translateY(0px) translateZ(0px)'}}>I</span>
                        <span style={{opacity: 1, transform: 'translateY(0px) translateZ(0px)'}}>'</span>
                        <span style={{opacity: 1, transform: 'translateY(0px) translateZ(0px)'}}>M</span>
                        <span style={{opacity: 1, transform: 'translateY(0px) translateZ(0px)'}}> </span>
                        <span style={{opacity: 1, transform: 'translateY(0px) translateZ(0px)'}}>N</span>
                        <span style={{opacity: 1, transform: 'translateY(0px) translateZ(0px)'}}>I</span>
                        <span style={{opacity: 1, transform: 'translateY(0px) translateZ(0px)'}}>K</span>
                        <span style={{opacity: 1, transform: 'translateY(0px) translateZ(0px)'}}>I</span>
                        <span style={{opacity: 1, transform: 'translateY(0px) translateZ(0px)'}}>T</span>
                        <span style={{opacity: 1, transform: 'translateY(0px) translateZ(0px)'}}>A</span>
                    </span><br></br>
                    <span>
                        <span style={{opacity: 1, transform: 'translateY(0px) translateZ(0px)'}}>&</span>
                        <span style={{opacity: 1, transform: 'translateY(0px) translateZ(0px)'}}>F</span>
                        <span style={{opacity: 1, transform: 'translateY(0px) translateZ(0px)'}}>U</span>
                        <span style={{opacity: 1, transform: 'translateY(0px) translateZ(0px)'}}>L</span>
                        <span style={{opacity: 1, transform: 'translateY(0px) translateZ(0px)'}}>L</span>
                        <span style={{opacity: 1, transform: 'translateY(0px) translateZ(0px)'}}>S</span>
                        <span style={{opacity: 1, transform: 'translateY(0px) translateZ(0px)'}}>T</span>
                        <span style={{opacity: 1, transform: 'translateY(0px) translateZ(0px)'}}>A</span>
                        <span style={{opacity: 1, transform: 'translateY(0px) translateZ(0px)'}}>C</span>
                        <span style={{opacity: 1, transform: 'translateY(0px) translateZ(0px)'}}>K</span>
                    </span><br></br>
                    <span>
                        <span style={{opacity: 1, transform: 'translateY(0px) translateZ(0px)'}}>D</span>
                        <span style={{opacity: 1, transform: 'translateY(0px) translateZ(0px)'}}>E</span>
                        <span style={{opacity: 1, transform: 'translateY(0px) translateZ(0px)'}}>V</span>
                        <span style={{opacity: 1, transform: 'translateY(0px) translateZ(0px)'}}>E</span>
                        <span style={{opacity: 1, transform: 'translateY(0px) translateZ(0px)'}}>L</span>
                        <span style={{opacity: 1, transform: 'translateY(0px) translateZ(0px)'}}>O</span>
                        <span style={{opacity: 1, transform: 'translateY(0px) translateZ(0px)'}}>P</span>
                        <span style={{opacity: 1, transform: 'translateY(0px) translateZ(0px)'}}>E</span>
                        <span style={{opacity: 1, transform: 'translateY(0px) translateZ(0px)'}}>R</span>
                    </span>
                </strong>
                </Fade>
            </h1>
            <Box className={classes.scrollDownBlock}>
                <p className={classes.scrollDownText}>scroll down</p>
                <ArrowDownwardIcon className={classes.arrowDown} fontSize="small" />
            </Box>
        </div>
    )
}

export default FirstBlock
