import { CardMedia, Typography } from '@material-ui/core'
import React from 'react'

function Footer() {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', paddingBottom: 30}}>
            <div style={{maxWidth: '100%', display: 'inline-block'}}>
            <CardMedia style={{maxWidth: 120, maxHeight: 60}} src="https://ocean-of-technologies.s3.us-east-2.amazonaws.com/%D0%9D%D0%BE%D0%B2%D1%8B%D0%B9+%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82+(1).png" component="img" />
            </div>
            <Typography>Copyright © 2021</Typography>
        </div>
    )
}

export default Footer
