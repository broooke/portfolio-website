import classNames from "classnames";
import React, {useEffect, useState} from 'react'

const isMobile = () => {
    const ua = navigator.userAgent;
    return /Android|Mobi/i.test(ua);
};
  

function Cursor() {
    const [position, setPosition] = useState({x: 0, y: 0});
    const [hidden, setHidden] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [linkHovered, setLinkHovered] = useState(false);
    const [projectHovered, setProjectHovered] = useState(false)
    const [menuLink, setMenuLink] = useState(false)

    const onMouseEnter = () => {
        setHidden(false);
    };
    const onMouseLeave  = () => {
        setHidden(true);
    };
    const onMouseDown = () => {
        setClicked(true);
    };
    const onMouseUp = () => {
        setClicked(false);
    };
    const onMouseMove = (e) => {
        setPosition({x: e.clientX, y: e.clientY});
    }; 

    const addEventListeners = () => {
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseenter", onMouseEnter);
        document.addEventListener("mouseleave", onMouseLeave);
        document.addEventListener("mousedown", onMouseDown);
        document.addEventListener("mouseup", onMouseUp);
    }
    
    const handleLinkHoverEvents = () => {
        document.querySelectorAll("span").forEach(el => {
            el.addEventListener("mouseover", () => setLinkHovered(true));
            el.addEventListener("mouseout", () => setLinkHovered(false));
        });
        document.querySelectorAll("h1").forEach(el => {
            el.addEventListener("mouseover", () => setLinkHovered(true));
            el.addEventListener("mouseout", () => setLinkHovered(false));
        });
        document.querySelectorAll("img").forEach(el => {
            el.addEventListener("mouseover", () => setLinkHovered(true));
            el.addEventListener("mouseout", () => setLinkHovered(false));
        });
        document.querySelectorAll(".jss40").forEach(el => {
            el.addEventListener("mouseover", () => setProjectHovered(true));
            el.addEventListener("mouseout", () => setProjectHovered(false));
        });
        document.querySelectorAll(".jss16").forEach(el => {
            el.addEventListener("mouseover", () => setMenuLink(true));
            el.addEventListener("mouseout", () => setMenuLink(false));
        });
    };

    const removeEventListeners = () => {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseenter", onMouseEnter);
    document.removeEventListener("mouseleave", onMouseLeave);
    document.removeEventListener("mousedown", onMouseDown);
    document.removeEventListener("mouseup", onMouseUp);
    }
    
    useEffect(() => {
        addEventListeners();
        handleLinkHoverEvents();
        return () => removeEventListeners();
    }, []);

    if (typeof navigator !== 'undefined' && isMobile()) {
    return null;
    }

    const cursorClasses = classNames(
    'cursor',
    {
        'cursor--clicked': clicked,
        'cursor--hidden': hidden,
        'cursor--link-hovered': linkHovered,
        'cursor--project-hovered': projectHovered,
        'cursor--menu-link': menuLink,
    } 
    ); 

    return <div className={cursorClasses}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`
            }}><p style={{color: '#000'}} className="cursotText">VIEW PROJECT</p></div>
}

export default Cursor
