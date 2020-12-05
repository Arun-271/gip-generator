import React from 'react'
import Pic from './Image';
import "./image.css"


const SearchList = (props) => {
    // let totalImagesCollected = props.imageData.length;
    const failedToload = <p>No image found</p>
    const succesToLoad = (
        <>
            {/* <p>List of records {totalImagesCollected}</p> */}
            {props.imageData.map(element => (
                <>
                    <Pic url={element.images.original.url} key={element.index} />
                </>
            ))}
        </>
    )
    return (
        <div className="List"> 
            {/* Here We basically checking if we get the data from the api or not */}
            {/* untill we laod the data from the backend we will be displaying the failedToload stuff */}
              {props.imageData.length === 0 ? failedToload:succesToLoad}
            
        </div>
    )
}

export default SearchList;
