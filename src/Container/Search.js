import React from 'react'
import SearchBar from '../Component/SearchBar'
import SearchList from '../Component/SearchList';

//! It is actually a funtion 
//Component act likes class but its a function
class Search extends React.Component { 

    constructor(props){
    // init the props and state
        super(props);
        this.state = { imageData: [] };
        this.serachBarValue = " ";
    }
    //! Basically function component will render only 
    //! But the class can do some calculation in the constructor and as well as the rendering part by specifying the render
   
    //This is for making the app to render something to when the app is loaded 
    componentDidMount() {
        // this.getGiphyFromApi();
    }

    //here we will use the promise that is async data
    //! Api is the Restful webservices 
    getGiphyFromApi(value) {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=s4hChOYKBIq9xaHgXIXafwYQwcoHxYkM&q=${value}&limit=5`;
        const promise = fetch(url);
        promise.then(response => {
            var jsonResponse = response.json();
            jsonResponse.then(result => {
                this.setState({imageData:result.data})
            }).catch(
                err => { console.log(err); }
            );            
        }).catch(err => {
            console.log("Error is coming from the server side",err);
        })
    }
   
    takeInput(event) {
        // here we are stroing the value form the search bar to the variable
        let valueFromSearchBar = event.target.value;
        // since we want to make this value to be overall class scope we assign it to the this value
        this.serachBarValue = valueFromSearchBar;
    }
    searchNow() {
        this.getGiphyFromApi(this.serachBarValue)
    }
    render() {
        return (
            <div>
                <h1 className="alert-success text-center" style={{padding:"10px",fontFamily:"Sriracha,cursive",margin:"10px 50px 10px 50px",borderRadius:"50px" , width:"90%"}}>
                    {this.props.title}
                </h1>
                {/* Since the this value is present we cannot access it form outside this file
                 hence we are sending the .bind and binding the this to the search bar
                */}
                <SearchBar propsInput={this.takeInput.bind(this)} btnClick={ this.searchNow.bind(this)}/>
                <SearchList imageData={ this.state.imageData }/>
            </div>
        );
    }

}

export default Search;



// Dumb and old


// function Search() {
//     return (
//         <div>
//             <h1 className="alert-success text-center" style={{padding:"10px",fontFamily:"Sriracha,cursive",margin:"10px 50px 10px 50px",borderRadius:"50px"}}>
//                 Search any image
//             </h1>
//             <SearchBar/>
//         </div>
//     )
// }

// export default Search
