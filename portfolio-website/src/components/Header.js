import { AppBar, Toolbar, CardMedia, Box} from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { HashLink as Link } from 'react-router-hash-link'
import UseLocoScroll from './Scroll'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'
import useWindowSize from '../hooks/useWindowSize'

const useStyles = makeStyles((theme) => ({
    logo: {
        width: '250px',
        height: 90,
        objectFit: 'cover', 
        verticalAlign: 'middle', 
        display: 'inline-block',
        [theme.breakpoints.down("md")]: {
            width: 180,
            height: 70
        },
    },
    secGrid: {
        display: 'flex', 
        justifyContent: 'center', 
        width: '40%', 
        alignItems: 'center', 
        textAlign: 'center'
    },
    sliderWrap: {
        backgroundColor: 'transparent',
        position: 'relative',
        width:'100%',
        zIndex: 2,
        overflow: 'hidden',
        height: '4.5vw'
    },
    sliderWrapMoving: {
        position: 'absolute',
        whiteSpace: 'nowrap',
        willChange: 'transform',
        animation: 'marquee 20s linear infinite'
    },
    sliderWrapText: {
        fontFamily: 'Ogg roman, sans-serif',
        fontSize: '2vw',
        fontWeight: 400,
        textTransform: 'uppercase',
        whiteSpace: 'nowrap',
        marginTop: 10
    },
    thirdGrid: {
        width: '30%',
        display: 'flex',
        alignItems: 'flex-end', 
        flexDirection: 'column', 
        justifyContent: 'center'
    },
    linksBlock: {
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
    },
    linkMenu: {
        '&:hover': {
            letterSpacing: 5,
            transition: 'all 700ms'
        }
    },
    toolbar: {
        margin: '20px 60px',
    },
    toolbarMobile: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 8
    }
}))


function Header() {
    const classes = useStyles()
    const [hash, setHash] = useState('')
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

    const clickHandler = (e) => {
        e.preventDefault()
        setHash(e.target.attributes[1].nodeValue)
    }

    UseLocoScroll(false, hash)

    return (
        <AppBar color="transparent" position="sticky" style={{boxShadow: 'none'}}>
                {isMobile ? (
                    <Toolbar className={classes.toolbarMobile}>
                        <Box style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Link style={{width: '100%', display: 'inline-block', height: '100%'}} href="/">
                                <CardMedia className={classes.logo} src="https://ocean-of-technologies.s3.us-east-2.amazonaws.com/%D0%9D%D0%BE%D0%B2%D1%8B%D0%B9+%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82+(1).png" component="img" />
                            </Link>
                        </Box>
                    </Toolbar>
                ) : (
                    <Toolbar className={classes.toolbar}>
                        <Box style={{width: '30%'}}>
                            <Link style={{maxWidth: '100%', display: 'inline-block', height: '100%'}} href="/">
                                <CardMedia className={classes.logo} src="https://ocean-of-technologies.s3.us-east-2.amazonaws.com/%D0%9D%D0%BE%D0%B2%D1%8B%D0%B9+%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82+(1).png" component="img" />
                            </Link>
                        </Box>
                        <div className={classes.secGrid}>
                            <section className={classes.sliderWrap}>
                                <div className={classes.sliderWrapMoving}>
                                    <h2 className={classes.sliderWrapText}>- BACKEND DEVELOPER - FRONTEND DEVELOPER - DEVOPS -</h2>
                                </div>
                            </section>
                        </div>
                        <Box className={classes.thirdGrid}>
                            <div className={classes.linksBlock}>
                                {/*// eslint-disable-next-line jsx-a11y/anchor-is-valid  */}
                                <a onClick={clickHandler} data-active="false" data-target="#about" className={classes.linkMenu}>ME</a>
                                <a onClick={clickHandler} data-active="false" data-target="#projects" className={classes.linkMenu}>PROJECTS</a>
                                <a onClick={clickHandler} data-active="false" data-target="#contact" className={classes.linkMenu}>CONTACT</a>
                            </div>
                        </Box>
                    </Toolbar>
                )}
        </AppBar>
    )
}

export default Header
