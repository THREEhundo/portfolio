import { Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

export const Header = ({ linkStyle }) => {
    return (
        <Typography align="right">
               <Link to="/about" className={linkStyle}>About</Link>
               <Link to="/work" className={linkStyle}>Work</Link>
               <Link to="/contact" className={linkStyle}>Contact</Link>
        </Typography>
    )
}
