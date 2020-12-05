import React from 'react'

const SearchBar = (props) => {
    return (
        <div className='form-group'>
            <input className="form-control" type='text' placeholder='Enter to search image'
                style={{
                    marginLeft: "50px", marginRight: "50px", marginTop: "10px", marginBottom: "10px",
                    width:"90%"
                }}
                onChange={props.propsInput}
            />
             <div className="text-center">
                <button type="button" className="btn btn-primary"
                onClick={props.btnClick}
                >Search</button>
            </div>     
            </div>
    )
}

export default SearchBar
