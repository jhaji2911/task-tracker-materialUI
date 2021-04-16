import React from 'react'
import PropTypes from 'prop-types'
import ButtonMain from  './ButtonMain';

function Header({title,onAdd ,showAdd}) {

  

    return (
       <header  >
           <h1 className="header">{title} </h1>
           <ButtonMain text={showAdd ? "close" :"Add"} color={showAdd ? "secondary" : "primary"} onClick={onAdd}/>
       </header>
    )
}



Header.propTypes ={
    title : PropTypes.string.isRequired
}


export default Header
