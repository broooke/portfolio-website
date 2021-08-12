import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Link } from '@material-ui/core'
import ReactHover, { Trigger, Hover } from "react-hover";

const useStyles = makeStyles((theme) => ({
    projectsList: {
        display: 'flex',
        flexDirection: 'column',
    },
    projectDetail: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #DFD3C3',
        padding: '0 20px',
        '&:hover p': {
            opacity: 0.3
        },
        [theme.breakpoints.down("lg")]: {
            width: '75%'
        },
        [theme.breakpoints.down("md")]: {
            width: '40%'
        },
        [theme.breakpoints.down("sm")]: {
            width: '20%'
        },
    },
    container: {
        marginTop: 250,
        [theme.breakpoints.down("sm")]: {
            marginTop: 200
        }
    },
    projectName: {
        fontSize: '8em', 
        textTransform: 'uppercase',
        [theme.breakpoints.down("md")]: {
            fontSize: '4em'
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: '2em'
        }
    }
}))

const optionsCursorTrueWithMargin = {
    followCursor: true,
    shiftX: 0,
    shiftY: 0,
};

const optionsCursorTrueWithMargin1 = {
    followCursor: true,
    shiftX: 0,
    shiftY: 0,
};

const optionsCursorTrueWithMargin2 = {
    followCursor: true,
    shiftX: 0,
    shiftY: 0,
};

const optionsCursorTrueWithMargin3 = {
    followCursor: true,
    shiftX: 0,
    shiftY: 0,
};

const optionsCursorTrueWithMargin4 = {
    followCursor: true,
    shiftX: 0,
    shiftY: 0,
};

function Projects() {
    const classes = useStyles();

    return (
        <div id="projects" className={classes.container}>
            <div data-scroll-target="#works" className={classes.projectsList}>

                <ReactHover options={optionsCursorTrueWithMargin}>
                    <Trigger type="trigger">
                        <Link style={{textDecoration: 'none'}} href="https://github.com/broooke/dashboard-app">
                        <div data-scroll="1" data-scroll-speed="2" data-scroll-direction="horizontal" data-scroll-repeat="true" className={classes.projectDetail}>
                            <Typography className={classes.projectName}>CRM</Typography>
                            <Typography>01</Typography>
                        </div>
                        </Link>
                    </Trigger>
                    <Hover type="hover">
                        <div style={{height: 350, width: 270, transform: 'rotate(-30deg) skew(25deg) scale(0.8)', position: 'absolute', top: '-80%', left: '50%'}}>
                            <img style={{width: '100%', height: 'auto', borderRadius: '8px', transform: 'translate(40px, -40px)', opacity: 0.4, position: 'absolute'}} src="https://images.unsplash.com/photo-1602347671057-e2be757b37c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80" alt="" />
                            <img style={{width: '100%', height: 'auto', borderRadius: '8px', transform: 'translate(80px, -80px)', opacity: 0.6, position: 'absolute'}} src="https://images.unsplash.com/photo-1602347671057-e2be757b37c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80" alt="" />
                            <img style={{width: '100%', height: 'auto', borderRadius: '8px', transform: 'translate(120px, -120px)', opacity: 0.8, position: 'absolute'}} src="https://images.unsplash.com/photo-1602347671057-e2be757b37c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80" alt="" />
                        </div>
                    </Hover>
                </ReactHover>

                <ReactHover options={optionsCursorTrueWithMargin1}>
                    <Trigger type="trigger">
                        <Link style={{textDecoration: 'none'}} href="https://github.com/broooke/blog-django">
                        <div data-scroll="1" data-scroll-speed="3" data-scroll-direction="horizontal" data-scroll-repeat="true" className={classes.projectDetail}>
                            <Typography className={classes.projectName}>BLOG</Typography>
                            <Typography>02</Typography>
                        </div>
                        </Link>
                    </Trigger>
                    <Hover type="hover">
                        <div style={{height: 350, width: 270, transform: 'rotate(-30deg) skew(25deg) scale(0.8)', position: 'absolute', top: '-80%', left: '50%'}}>
                            <img style={{width: '100%', height: 'auto', borderRadius: '8px', transform: 'translate(40px, -40px)', opacity: 0.4, position: 'absolute'}} src="https://images.unsplash.com/photo-1614727396853-962aa072f0e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80" alt="" />
                            <img style={{width: '100%', height: 'auto', borderRadius: '8px', transform: 'translate(80px, -80px)', opacity: 0.6, position: 'absolute'}} src="https://images.unsplash.com/photo-1614727396853-962aa072f0e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80" alt="" />
                            <img style={{width: '100%', height: 'auto', borderRadius: '8px', transform: 'translate(120px, -120px)', opacity: 0.8, position: 'absolute'}} src="https://images.unsplash.com/photo-1614727396853-962aa072f0e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80" alt="" />
                        </div>
                    </Hover>
                </ReactHover>

                <ReactHover options={optionsCursorTrueWithMargin2}>
                    <Trigger type="trigger">
                        <Link style={{textDecoration: 'none'}} href="https://github.com/broooke/fullstack-website-django-react">
                        <div data-scroll="1" data-scroll-speed="4" data-scroll-direction="horizontal" data-scroll-repeat="true" className={classes.projectDetail}>
                            <Typography className={classes.projectName}>ECOMMERCE</Typography>
                            <Typography>03</Typography>
                        </div>
                        </Link>
                    </Trigger>
                    <Hover type="hover">
                        <div style={{height: 350, width: 270, transform: 'rotate(-30deg) skew(25deg) scale(0.8)', position: 'absolute', top: '-80%', left: '50%'}}>
                            <img style={{width: '100%', height: 'auto', borderRadius: '8px', transform: 'translate(40px, -40px)', opacity: 0.4, position: 'absolute'}} src="https://images.unsplash.com/photo-1616533656830-8c0a27991c37?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80" alt="" />
                            <img style={{width: '100%', height: 'auto', borderRadius: '8px', transform: 'translate(80px, -80px)', opacity: 0.6, position: 'absolute'}} src="https://images.unsplash.com/photo-1616533656830-8c0a27991c37?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80" alt="" />
                            <img style={{width: '100%', height: 'auto', borderRadius: '8px', transform: 'translate(120px, -120px)', opacity: 0.8, position: 'absolute'}} src="https://images.unsplash.com/photo-1616533656830-8c0a27991c37?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80" alt="" />
                        </div>
                    </Hover>
                </ReactHover>

                <ReactHover options={optionsCursorTrueWithMargin3}>
                    <Trigger type="trigger">
                        <Link style={{textDecoration: 'none'}} href="https://github.com/broooke/DeveloperSearchProject">
                        <div data-scroll="1" data-scroll-speed="5" data-scroll-direction="horizontal" data-scroll-repeat="true" className={classes.projectDetail}>
                            <Typography className={classes.projectName}>DEV SEARCH</Typography>
                            <Typography>04</Typography>
                        </div>
                        </Link>
                    </Trigger>
                    <Hover type="hover">
                        <div style={{height: 350, width: 270, transform: 'rotate(-30deg) skew(25deg) scale(0.8)', position: 'absolute', top: '-80%', left: '50%'}}>
                            <img style={{width: '100%', height: 'auto', borderRadius: '8px', transform: 'translate(40px, -40px)', opacity: 0.4, position: 'absolute'}} src="https://images.unsplash.com/photo-1627565611866-47ab4f2fca1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="" />
                            <img style={{width: '100%', height: 'auto', borderRadius: '8px', transform: 'translate(80px, -80px)', opacity: 0.6, position: 'absolute'}} src="https://images.unsplash.com/photo-1627565611866-47ab4f2fca1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="" />
                            <img style={{width: '100%', height: 'auto', borderRadius: '8px', transform: 'translate(120px, -120px)', opacity: 0.8, position: 'absolute'}} src="https://images.unsplash.com/photo-1627565611866-47ab4f2fca1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="" />
                        </div>
                    </Hover>
                </ReactHover>

                <ReactHover options={optionsCursorTrueWithMargin4}>
                    <Trigger type="trigger">
                        <Link style={{textDecoration: 'none'}} href="https://github.com/broooke/service-desk">
                        <div data-scroll="1" data-scroll-speed="6" data-scroll-direction="horizontal" data-scroll-repeat="true" className={classes.projectDetail}>
                            <Typography className={classes.projectName}>SERVICE DESK</Typography>
                            <Typography>05</Typography>
                        </div>
                        </Link>
                    </Trigger>
                    <Hover type="hover">
                        <div style={{height: 350, width: 270, transform: 'rotate(-30deg) skew(25deg) scale(0.8)', position: 'absolute', top: '-80%', left: '50%'}}>
                            <img style={{width: '100%', height: 'auto', borderRadius: '8px', transform: 'translate(40px, -40px)', opacity: 0.4, position: 'absolute'}} src="https://images.unsplash.com/photo-1627826707563-223b2235bfc2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="" />
                            <img style={{width: '100%', height: 'auto', borderRadius: '8px', transform: 'translate(80px, -80px)', opacity: 0.6, position: 'absolute'}} src="https://images.unsplash.com/photo-1627826707563-223b2235bfc2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="" />
                            <img style={{width: '100%', height: 'auto', borderRadius: '8px', transform: 'translate(120px, -120px)', opacity: 0.8, position: 'absolute'}} src="https://images.unsplash.com/photo-1627826707563-223b2235bfc2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="" />
                        </div>
                    </Hover>
                </ReactHover>
            </div>
        </div>
    )
}

export default Projects
