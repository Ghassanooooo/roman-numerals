import React from 'react'

function Button(props) {
    return (
       <div onClick={()=>props.buttonHandler(props.item)} className=    {`Button ${props.item.isOperation ?'ButtonOperation' : 'ButtonNumber'}`}>
          <span>{props.item.value}</span>
       </div>
    );
  }
  export default Button