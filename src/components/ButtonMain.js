import React from 'react'
import PropTypes from 'prop-types'

import {Button } from '@material-ui/core';
function ButtonMain({text,color,onClick}) {
    return (
        <div className="btn">
            <Button variant="contained" color={color}  onClick={onClick}>{text}</Button>
        </div>
    )
}

Button.defaultProps  =
{
color:"secondary"
}

Button.propTypes ={
    text:PropTypes.string,
    color:PropTypes.string
}
export default ButtonMain
