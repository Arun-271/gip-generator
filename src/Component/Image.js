import React from 'react'
import "./image.css"

const Pic = (props) => {
    return (
        <div className="Picture">
            <img classname="ff"src={props.url} alt="missing"/>
        </div>
    )
}

export default Pic;
