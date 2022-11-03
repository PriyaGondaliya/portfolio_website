import React from 'react'
import {MdOutlineClose} from "react-icons/md";
const Popup = (props) => {
    return (props.trigger)?(
        <div className='popup'>
            <div className='popup-inner'>
                <button className='close-btn' onClick={()=>props.setTrigger(false)}><MdOutlineClose size={"25px"} color={"black"}/></button>
                {props.children}
            </div>
        </div>
      ):"";
}

export default Popup