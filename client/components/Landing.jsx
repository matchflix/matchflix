import React, { Component } from 'react';
import '../styles.css';

class Landing extends Component {
  constructor(props) {
    super(props);
    // declare state object
    // property url and value empty str
    this.state = { url: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    // send a post request to server
    // send the selected genre in the request
    const genreSelection = document.querySelector('#genres').value;
    const init = {
      method: 'POST',
      // deleted stringify to check double entry 
      body: JSON.stringify({ genreId: genreSelection }),
      headers: { 'Content-Type': 'application/json' },
    };
    fetch('/startsession', init)
      .then((response) => response.json())
      .then((data) => {
        // use setState to reassign the value of url to the received url that the server sends back
        // once setState is ran, the component renders
        this.setState({ url: data });
      });
  }

  render() {
    return (

      <div id="landing">
        <div>
          <img
            id="logo"
            // src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/f2357447098721.5873f49f96f1f.png"
            src="../assets/logo.png"
            alt="Matchflix logo"
          />
        </div>

        <div id="startsession">
          <label htmlFor="genres">Select a genre:</label>
          <select name="genres" id="genres">
            <option value="801362">Action</option>
            <option value="4698">Animation</option>
            <option value="48586">Children & Family</option>
            <option value="31694">Comedy</option>
            <option value="3979">Critically Acclaimed Films</option>
            <option value="6839">Documentaries</option>
            <option value="5763">Drama</option>
            <option value="8711">Horror</option>
            <option value="875">Indie</option>
            <option value="1492">Sci-Fi & Fantasy</option>
            <option value="43048">Thrillers</option>
          </select>
          <button id="startsession" type="button" onClick={this.handleSubmit}>Start Session</button>
          {/* if the url is not an empty str, display the url to the page using a html tag */}
          {
            this.state.url
            && (
            <p>
              Your url:
              {' '}
              <a href={this.state.url}>{this.state.url}</a>
            </p>
            )
            }
        </div>
      </div>
    );
  }
}

export default Landing;

