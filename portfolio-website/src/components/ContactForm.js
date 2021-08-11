import { Link, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {CopyToClipboard} from 'react-copy-to-clipboard'

const useStyles = makeStyles((theme) => ({
    headline: {
        textAlign: 'center',
        fontSize: 100,
        [theme.breakpoints.down("md")]: {
            fontSize: 60
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: 40
        }
    },
    wrap: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        alignItems: 'center',
        height: '80%'
    },
    container: {
        marginTop: 150,
        height: '90vh',
        [theme.breakpoints.down("md")]: {
            marginTop: 80
        }
    },
    email: {
        fontSize: 80,
        fontFamily: 'Oswald, sans-serif !important',
        textAlign: 'center',
        '&:hover': {
            color: '#181818',
            textStrokeWidth: '1px',
            textStrokeColor: '#DFD3C3',
        },
        [theme.breakpoints.down("md")]: {
            fontSize: 50
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: 20
        }
    },
    copy: {
        background: '#FFA63D',
        marginTop: 50,
        // position: 'absolute',
        // left: 'auto',
        // right: 300,
        // bottom: 70,
        height: '20vh',
        width: '20vh',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'all .2s ease-in-out',
        '&:hover': {
            transform: 'scale(0.7)',
        }
    }
}));

function ContactForm() {
    const classes = useStyles();


    return (
        <div id="contact" data-scroll="1" data-scroll-speed="7" className={classes.container}>
            <Typography component="h1" className={classes.headline}>LET'S WORK TOGETHER</Typography>
            <div className={classes.wrap}>
                <Link style={{textDecoration: 'none'}} href="mailto:gaiydenko.develop@gmail.com">
                    <Typography className={classes.email}>GAIYDENKO.DEVELOP@GMAIL.COM</Typography>
                </Link>
                <CopyToClipboard text={'gaiydenko.develop@gmail.com'}>
                    <div className={classes.copy}>
                        <Typography style={{color: '#fff'}}>click to copy email</Typography>
                    </div>
                </CopyToClipboard>
            </div>
        </div>
    )
}

export default ContactForm
