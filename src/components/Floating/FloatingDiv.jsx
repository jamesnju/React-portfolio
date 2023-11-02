import React from 'react'
import './floating.css'
function FloatingDiv({image,text1,text2}) {
  return (
    <div className='floating'>
        <img src={image} alt="" />
        <span>
            {text1}
            <br/>
            {text2}
        </span>
    </div>
    
  )
}

export default FloatingDiv