import React, { Component } from 'react';
import '../styles.css';
import Movie from './Movie.jsx'

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
        movies: [],
        votes: [],
        hasBeenSubmitted: false
    }
    this.handleVote = this.handleVote.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // component did mount. Using React Router, this is only called the first time you render Movies.
  // not called again if you refresh page or go to a different /movies/id route. 
  componentDidMount() {
    // const testMoviesArray = [
    //     {
    //         "name": "Boi",
    //         "year": 2018,
    //         "image": "https://occ-0-2717-360.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABc5AIMYv_dnveSYDCDOUej7LUy8ghYmH9aw_WxtWsd5NGVaHx93fWx3MXfRki0iYYJ8Gubyz_AWKtM6djb2dkSTw9g.jpg?r=307",
    //         "description": "A young chauffeur who&#39;s at a crossroads in his life escorts a pair of clients around Barcelona and becomes embroiled in their mysterious quest."
    //     },
    //     {
    //         "name": "Saving Sally",
    //         "year": 2016,
    //         "image": "https://occ-0-2851-1432.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABes8K18hHCh4eBvhA8kNXp-njJ9qJQ9EL53yKIySoasndUqPPvUJF0FWuyD1cAyCOUkXXtx_xQasOinrt1tsE7vLRg.jpg?r=259",
    //         "description": "A daydreaming comic book artist&#39;s unrequited love for his best friend fuels his imagination, and his attempts to save her from her hellish home life."
    //     },
    //     {   "name": "The Gospel of Matthew",
    //         "year": 2014,
    //         "image": "https://occ-0-2219-2218.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABZj29skOsR5Qtlu-49wyFGbC6g_Pwnsw0zl9ElzHHWfvR9JZdqz-iO1kqz21SugWGI8ZvfaVtd7m6J12Ig_aI91hQg.jpg?r=4c6",
    //         "description": "The Apostle Matthew is highlighted in this word-for-word film adaptation of the former tax collector&#39;s Biblical writings about working with Jesus."
    //     },
    //     {
    //         "name": "Django Unchained",
    //         "year": 2012,
    //         "image": "https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABRzu4DL2MtiqQ5egSaSDjayUusS8MOLcS3agy0c7Eapj1XsnMdBz2uqyWJ9HCzJylloiwZm6Z0pDwYB1kTSOT55ZSg.jpg?r=3c6",
    //         "description": "Accompanied by a German bounty hunter, a freed slave named Django travels across America to free his wife from a sadistic plantation owner."
    //     },
    //     {
    //         "name": "Joy",
    //         "year": 2019,
    //         "image": "https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABVhhXuY8fY2fWAi1nsqtN_OLfbJ76_3kXisqDJsqzoR6Tv5c86prX5GOvqnTypVYahYYb3w0kuTEUmLwwVyG8FQyBFwVaoX8c2cIEdgsMfr4J58ujbGfCpRIroo.jpg?r=f08",
    //         "description": "Close to paying off her debts, a Nigerian sex worker in Austria coaches a reluctant novice, and assesses the risks of taking a faster path to freedom."
    //     },
    //     {
    //         "name": "Project Papa",
    //         "year": 2018,
    //         "image": "https://occ-0-2851-41.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABfAv_hW83ubDdHwcUGUXPzX5Tua_t53G8P3FJqlI5A5hVIcH_Zkm1X7aynaZhQcXbuYxGaj4zZ85mkBFSVyHklQSGg.jpg?r=0b6",
    //         "description": "When a busy entrepreneur pauses her career to spend time with her aging father, both learn valuable lessons on happiness, love and living in the moment."
    //     },
    //      {  "name": "Warrior",
    //         "year": 2011,
    //         "image": "https://occ-0-768-769.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABSkiu0f2uxDWwGYJELeU3sX6NxSahO_5_ymzjCV1Z4cKKVNypBwoW3Ud5O-MPvzXjiSdK3reEH9m9ie-5aYOzlSzvQ.jpg?r=49f",
    //         "description": "Set in the world of mixed martial arts combat, this gritty drama follows two brothers at war with each other, both with their eyes on the same prize."
    //     },
    //      {  "name": "The Son",
    //         "year": 2018,
    //         "image": "https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABalpC_qhfMQ3k48ivK7GBIzgif4iJebGqovsK4ZAS3-RaQBIanLMWQpaKl95TVPtJsiewkjOykHpDZdPYF4LMYlJ7YMjKFKfVxYgD5wVIU4MKEEjQjVMN6wO6y8.jpg?r=1bf",
    //         "description": "In this psychological thriller, painter Lorenzo&#39;s life spirals out of control as he fears his wife is trying to isolate him from their infant son."
    //     },
    //    {   "name": "Cold Feet",
    //         "year": 2019,
    //         "image": "https://occ-0-2851-1432.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABbr3wAepjZ-2iEVPevx--4fgEHPWX3JazRnacF6uGUYFNw0KTgoTwSPI_kSZe3LnCXvuFrOjmzQvtK3C9ByNwXcTbQ.jpg?r=5d0",
    //         "description": "At a resort getaway, the fate of two couples collides when a wife unexpectedly runs into an old flame as he hesitates to propose to his girlfriend."
    //     },
    //    {     "name": "The Gospel of Mark",
    //         "year": 2015,
    //         "image": "https://occ-0-2219-2218.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABXhATlKpHmpChj-MhEQqpy-p4bOA03QkruKJ_ru90aeYb9bSIYwWWfZpO65OrjE_SHloUEgAWUPclnRiJz2WAxL11Q.jpg?r=cbc",
    //         "description": "See Jesus from a disciple&#39;s point of view in this first-ever, word-for-word film adaptation of the Gospel of Mark, lauded for its historical accuracy."
    //     },
    //      { "name": "Prisoners",
    //         "year": 2013,
    //         "image": "https://occ-0-1490-1489.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABfqP9qlAlHIR3Ew8_vCC368YKHS47GYTsKe7Bcs_imk4jgQG_3LoUB-Jp5YXzgeCfejGGi4STEH6GNOwMxOp7wDRaA.jpg?r=6ac",
    //         "description": "When his 6-year-old daughter is abducted and the investigation stalls, carpenter Keller Dover tracks down the culprit himself."
    //     },
    //     {   "name": "Baahubali: The Beginning (English Version)",
    //         "year": 2015,
    //         "image": "https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABVtdCynOC9B8v0kWqN-L2wJm8oR1iHAzGB7MiwxB4IBck1vtzl_oIYUAslLGpKfAM45kAYuee3MuX6Qt5fLi2qIEjg.jpg?r=c6c",
    //         "description": "Villagers in the kingdom of Mahismati rescue a baby who is destined to embark on a heroic quest in this English version of S.S. Rajamouli&#39;s epic."
    //     },
    //     {   "name": "12 Years a Slave",
    //         "year": 2013,
    //         "image": "https://occ-0-1490-1489.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAAAbReFG5sI4JMM-xtQhGZGYLfCGNX7dv7pTqAquRtyhz0Vix_trLuUf3MWm7_BXHIZRHyheSkcXmJP4su-G28OfGrFQ.jpg?r=e11",
    //         "description": "A freeborn black man is abducted from New York and sold into slavery in this historical drama based on the autobiography of Solomon Northup."
    //     },
    //     {   "name": "Room",
    //         "year": 2015,
    //         "image": "https://occ-0-1490-1489.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABQVhV-cLX7MiVxk9cnAk1EmRDlHe1JrJ4Q-kw-h15qPIuTIZdC7o882zfLqnaCx7c1QhcS1cTKnuHngf1kJ21YsAZA.jpg?r=201",
    //         "description": "Kidnapped, confined to a tiny room and raped, a young woman gives birth to a son. When he reaches his fifth birthday, she begins plotting an escape."
    //     },
    //     {   "name": "Rebecca",
    //         "year": 2020,
    //         "image": "https://occ-0-2430-2433.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABQLCfPixMS_386AA3txJKNy7Cxz8cNriAFX1KlZOdaXmL4cwR9MLgHufVceTw_6yibLqta86O07R9neY0LGZiMmMo6NvghIKla0oO2bMNQXEB9Lo-cJip4iGP4M.jpg?r=d61",
    //         "description": "A young newlywed moves to her husband&#39;s imposing estate, where she must contend with his sinister housekeeper and the haunting shadow of his late wife."
    //     }
    //   ]

    const currentUrl = window.location.href + "/api";
    // send request to /movies/id/api, which responds back with array of 15 movie objects.     
    fetch(currentUrl)
      .then((res) => res.json())
      .then((moviesArray) => {
        console.log(moviesArray);
        this.setState({movies: moviesArray})        
      })
      .catch((err) => console.log('ERROR: error occurred while getting movie data from server.'))
  }

  // handleVote function w/ movieIndex, movieIsLiked
  handleVote(movieIndex, movieIsLiked) {
    const newVotes = this.state.votes.slice();
    newVotes[movieIndex] = movieIsLiked;
    this.setState({votes: newVotes});
  }

  handleSubmit() {
    // send post request with votes array
    console.log('handle submit was called!');
    console.log(this.state.votes);
    const currentUrl = window.location.href;
    const init = {
      method: 'POST',
      body: JSON.stringify({votes: this.state.votes}),
      headers: { 'Content-Type': 'application/json' },
    };
    fetch(currentUrl, init)
      .then((res) => res.json())
      .then((data) => {
        console.log('response received from server');
        console.log(data);
      })
      .catch((err) => console.log(err));
      this.setState({hasBeenSubmitted: true});
  }

  render() {
    
    // using state.movies, create array of Movie components 
    const movieComponentsArray = [];
    for (let i = 0; i < this.state.movies.length; i++) {
       movieComponentsArray.push(<Movie 
                                    key={this.state.movies[i]["image"]}
                                    index={i} 
                                    handleVote={this.handleVote}
                                    title={this.state.movies[i]["name"]} 
                                    poster={this.state.movies[i]["image"]} 
                                    description={this.state.movies[i]["description"]} 
                                    year={this.state.movies[i]["year"]}
                                />)
    }

    return (
      <div id="movies">
        {movieComponentsArray}
        <button onClick={this.handleSubmit} id="button-submit-votes">
            Submit votes
        </button>
        {this.state.hasBeenSubmitted && (
            <div> 
           <p> Is Everyone Finished? </p> 
            <button>
                Click Here to see Results
            </button>
            </div>
        )
        }

      </div>
    )
  }
}

export default Movies;

