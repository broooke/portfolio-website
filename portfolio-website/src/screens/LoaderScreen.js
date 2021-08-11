import { Container, Typography } from '@material-ui/core'
import React, {useRef, useState, useEffect} from 'react'

function LoaderScreen() {
    const [preloader, setPreload] = useState(true);
    const ref = useRef(null);

    
    return (
        <div>
            <div id='main-container' data-scroll-container ref={ref}>
                <Container data-scroll-section style={{maxWidth: '90%', padding: 0, backgroundColor: 'red',height: '50vh' }}>
                    jhgjhgjhjhgjhgg
                </Container>
            </div>
        </div>
    )
}

export default LoaderScreen
