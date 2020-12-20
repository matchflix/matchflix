import React, { Component } from 'react';
import '../styles.css';


class Landing extends Component {
    constructor(props) {
      super(props);
    }

    //  componentDidMount() {
    //     const apiUrl= " ";
    //     fetch(apiUrl) 
    //     .then((response) => response.json())
    //     .then((data) =>  )
    // }
      // fetch request to Netflix API
      // create array of <option> tags 

    render() {
     return(
    
       <div>
         <div >
           <h1>Matchflix</h1>
           <img id="logo" src ="https://mir-s3-cdn-cf.behance.net/project_modules/fs/f2357447098721.5873f49f96f1f.png"></img>
         </div>
         <div>
           <select name="genres" id="genres">
            <option value="action">Action</option>
            <option value="comedy">Comedy</option>
            <option value="horror">Horror</option>
            <option value="romantic">Romantic-Comedy</option>
            <option value="drama">Drama</option>
            <option value="indie">Indie</option>
          </select>
         </div>
         <div>
             <button className="start-session">
                 Start Session
             </button>
         </div>
       </div>
     );
    }
  }






export default Landing;

// Landing
    // Logo name
        // DropDown 
        // Start Session Button