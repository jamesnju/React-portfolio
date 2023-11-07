import React from 'react'
import './toggle.css'
import Sun from '@iconscout/react-unicons/icons/uil-sun'
import Moon from '@iconscout/react-unicons/icons/uil-moon'
import { themeContext } from '../../Context'
import { useContext } from 'react'

function Toggle() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const handleClick = () =>{
    theme.dispatch({type : 'toggle'})
  }
  return (
    <div className='toggle' onClick={handleClick} >
            <Moon/>
            <Sun/>
            <div className="togglebutton" style={darkMode?{left: '2px'} : {left:'2px'}}>
                
            </div>
    </div>
  )
}

export default Toggle