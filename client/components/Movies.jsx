import React, { Component } from 'react';
import '../styles.css';
import Movie from './Movie.jsx'

class Movies extends Component {
  constructor(props) {
    super(props);
    // state
      // movies array
      // votes array
  }

  // component did mount. Using React Router, this is only called the first time you render Movies.
  // not called again if you refresh page or go to a different /movies/id route. 
  componentDidMount() {
    // send request to /movies/id/api, which responds back with array of 15 movie objects. 
    console.log('component did mount!')
    const currentUrl = window.location.href + "/api";
    console.log(currentUrl);
    fetch(currentUrl)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log('ERROR: error occurred while getting movie data from server.'))
    // set state.movies to be this array
    // set fetched to be true
  }

  // handleSubmit
    // check that all movies received vote
    // send post request with votes array
    // gray out the submit button
    // show Everyone Finished? button

  // 
  render() {
    // using state.movies, create array of Movie components 

    const title = 'Jaws';
    const poster = 'https://images-na.ssl-images-amazon.com/images/I/718Hr%2BVKZ4L._AC_SL1500_.jpg';
    const description = 'In the film, a man-eating great white shark attacks beachgoers at a summer resort town, prompting police chief Martin Brody (Roy Scheider) to hunt it with the help of a marine biologist (Richard Dreyfuss) and a professional shark hunter (Robert Shaw).';
    const year = '1975';

    return (
      <div id="movies">
        <Movie title={title} poster={poster} description={description} year={year}/>
        <Movie title={title} poster={poster} description={description} year={year}/>
        <Movie title={title} poster={poster} description={description} year={year}/>
        {/* submit votes button. onclick = handleSubmit */}
      </div>
    )
  }
}

export default Movies;

// [
//   {
//   "vtype":"movie"
//   "img":"https://occ-0-784-778.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABdqsVm3VIDwF3V6Bzz9Ic9deSrREAhZSmHT2HRbehhGHWG3WR5e-sH7BupNvvw4H_3LF8_Blki_4EVx22SxKK-ZfMQ_TSA6B6iQ1GzrvMa5_u4KuKcUYg39RiBk.jpg?r=61f"
//   "nfid":81231197
//   "imdbid":"tt8508734"
//   "title":"His House"
//   "clist":""CA":"Canada","FR":"France","DE":"Germany","NL":"Netherlands","PL":"Poland","GB":"United Kingdom","US":"United States","AR":"Argentina","AU":"Australia","BE":"Belgium","more":"+24""
//   "poster":"https://m.media-amazon.com/images/M/MV5BZDFmMzliZmYtMjM5ZS00ZWQ2LTgyODEtYTQ1MTU2NGY2MzA3XkEyXkFqcGdeQXVyNzg5MzIyOA@@._V1_SX300.jpg"
//   "imdbrating":7
//   "top250tv":0
//   "synopsis":"As a young couple from war-torn South Sudan seeks asylum and a fresh start in England, they’re tormented by a sinister force living in their new home."
//   "titledate":"2020-10-30"
//   "avgrating":0
//   "year":2020
//   "runtime":5606
//   "top250":0
//   "id":67003
//   }
// , {
//   "vtype":"movie"
//   "img":"https://occ-0-2851-1432.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABbW1_LvvobvMQpn8_eioZX6P2xvBKP8sKzY6KjYV43pKpxyAUwmg59pWdP157BHRK4vWAFpEcERtbxOPW3B1Nw8r8kAbCN0rEMfix8QaHBatIpsEgnbQubED-5o.jpg?r=3c9"
//   "nfid":80231356
//   "imdbid":"tt10642834"
//   "title":"The Forty-Year-Old Version"
//   "clist":""CA":"Canada","FR":"France","DE":"Germany","NL":"Netherlands","PL":"Poland","GB":"United Kingdom","US":"United States","AR":"Argentina","AU":"Australia","BE":"Belgium","more":"+24""
//   "poster":"https://m.media-amazon.com/images/M/MV5BMWQwNWFmYWEtZjU1NC00Mjk3LTgzZGQtNTJhODU5OTkxYzhhXkEyXkFqcGdeQXVyMjUxMTY3ODM@._V1_SX300.jpg"
//   "imdbrating":7.1
//   "top250tv":0
//   "synopsis":"Desperate for a breakthrough as she nears the big 4-0, struggling New York City playwright Radha finds inspiration by reinventing herself as a rapper."
//   "titledate":"2020-10-09"
//   "avgrating":0
//   "year":2020
//   "runtime":7454
//   "top250":0
//   "id":66893
//   }
// , {
//   "vtype":"movie"
//   "img":"https://occ-0-2851-1432.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABSfxyK8VhBjL2dj6s2xoe4LJKEfK5xXDJjSj6Qbg3ib9ULUzZNH34TItsciUWGIbKAc1qu1dj10LXa-BpJQgenj-NfGgJ1ovviIiGyoObv5imS3mryg5g0BlDfc.jpg?r=d31"
//   "nfid":80211559
//   "imdbid":"tt0120915"
//   "title":"I&#39;m Thinking of Ending Things"
//   "clist":""CA":"Canada","FR":"France","DE":"Germany","NL":"Netherlands","PL":"Poland","GB":"United Kingdom","US":"United States","AR":"Argentina","AU":"Australia","BE":"Belgium","more":"+24""
//   "poster":"https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
//   "imdbrating":6.5
//   "top250tv":0
//   "synopsis":"Nothing is as it seems when a woman experiencing misgivings about her new boyfriend joins him on a road trip to meet his parents at their remote farm."
//   "titledate":"2020-09-04"
//   "avgrating":0
//   "year":2020
//   "runtime":8086
//   "top250":0
//   "id":66503
//   }
// , {
//   "vtype":"movie"
//   "img":"https://occ-0-300-299.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABTVkSRgaFQ1NfLZomn2rSCVxzEVPEi9oToaGpg8raTlzGLicUJYuE6QkeaBk2cYx73EuRcuxz-9nYur235JAOB5h1Q.jpg?r=1da"
//   "nfid":81014211
//   "imdbid":"tt6851966"
//   "title":"Nigerian Prince"
//   "clist":""CA":"Canada","FR":"France","DE":"Germany","NL":"Netherlands","PL":"Poland","GB":"United Kingdom","US":"United States","AR":"Argentina","AU":"Australia","BE":"Belgium","more":"+22""
//   "poster":"https://m.media-amazon.com/images/M/MV5BNjYxNzcxMzM4OF5BMl5BanBnXkFtZTgwNzcwMTczNjM@._V1_SX300.jpg"
//   "imdbrating":5.1
//   "top250tv":0
//   "synopsis":"When a stubborn American teenager is sent to Nigeria by his mother, his cousin&#39;s scamming business becomes a viable option for securing a return flight."
//   "titledate":"2020-08-15"
//   "avgrating":0
//   "year":2018
//   "runtime":6250
//   "top250":0
//   "id":66361
//   }
// , {
//   "vtype":"movie"
//   "img":"https://occ-0-753-1360.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABWE0U7IOe0VMOBVJoujBKoVyOfn2O7WK6wQ5-tP-dTreh2irThO3e8VIpT-AguITRDRu2KmmbzusIUvyLd-ZZkHMJQ.jpg?r=ab5"
//   "nfid":80141777
//   "imdbid":"tt0081283"
//   "title":"Ordinary People"
//   "clist":""CA":"Canada","FR":"France","DE":"Germany","NL":"Netherlands","PL":"Poland","GB":"United Kingdom","US":"United States","AR":"Argentina","AU":"Australia","BE":"Belgium","more":"+23""
//   "poster":"https://m.media-amazon.com/images/M/MV5BNWU3MDFkYWQtMWQ5YS00YTcwLThmNDItODY4OWE2ZTdhZmIwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg"
//   "imdbrating":7.7
//   "top250tv":0
//   "synopsis":"Barely making a living as pickpockets, a teenage couple in Manila resort to desperate measures when their one-month-old child is kidnapped."
//   "titledate":"2020-06-26"
//   "avgrating":0
//   "year":2016
//   "runtime":6437
//   "top250":0
//   "id":65805
//   }
// , {
//   "vtype":"movie"
//   "img":"https://occ-0-138-41.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABbkXL4KsVzJbzey1Ck9MnB1eFn-OLjnW9_Ysi2FBVydZ2NzqmJJbkA3rMhs3ioalRls2Q20lG_aeqk207XS0WYXKY9c-3WigR3fZg7kEvjKvm2J9HyzVF7mxzN4.jpg?r=008"
//   "nfid":81025595
//   "imdbid":"tt0120915"
//   "title":"I&#39;m No Longer Here"
//   "clist":""CA":"Canada","FR":"France","DE":"Germany","NL":"Netherlands","PL":"Poland","GB":"United Kingdom","US":"United States","AR":"Argentina","AU":"Australia","BE":"Belgium","more":"+24""
//   "poster":"https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
//   "imdbrating":6.5
//   "top250tv":0
//   "synopsis":"A terrible misunderstanding with a local gang sends 17-year-old Ulises, leader of a group hooked on cumbia music, across the border to save his life."
//   "titledate":"2020-05-27"
//   "avgrating":0
//   "year":2019
//   "runtime":6730
//   "top250":0
//   "id":65497
//   }
// , {
//   "vtype":"movie"
//   "img":"https://occ-0-1926-41.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABQwHOqcbgCbJRePpPMxrgwaq87iXx1wmyjkvXDYanqr-m4eurBzasaSbAMg_l_qDATqKA9VsFF3xfNkqKUmu1NXXlw.jpg?r=59d"
//   "nfid":80991343
//   "imdbid":"tt6998518"
//   "title":"Mandy"
//   "clist":""AR":"Argentina","BR":"Brazil","CZ":"Czech Republic","HU":"Hungary","IN":"India""
//   "poster":"https://m.media-amazon.com/images/M/MV5BMjk1MjhmZWQtNzU3OC00NDE4LThlODQtNTdhZGM4M2E3MWZkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
//   "imdbrating":6.6
//   "top250tv":0
//   "synopsis":"A couple&#39;s dreamy woodland haven turns into a nightmare when a twisted hippie cult invades their home and sets off a blistering quest for vengeance."
//   "titledate":"2020-01-29"
//   "avgrating":0
//   "year":2018
//   "runtime":7277
//   "top250":0
//   "id":64520
//   }
// , {
//   "vtype":"movie"
//   "img":"https://occ-0-1926-41.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABfVAy5bEYGGewNR92_Ao7q-KqzbMzrOQSw6IvtbNjzKTKS20rTJY66ypOEtBn2HCSIfNGCa7W860zV7yZTfYHPV75A.jpg?r=b5b"
//   "nfid":80172007
//   "imdbid":"tt5649108"
//   "title":"Thoroughbreds"
//   "clist":""CA":"Canada","AR":"Argentina","BR":"Brazil","PT":"Portugal""
//   "poster":"https://m.media-amazon.com/images/M/MV5BNDcyNDA4NDAzN15BMl5BanBnXkFtZTgwODQxMDQ5NDM@._V1_SX300.jpg"
//   "imdbrating":6.7
//   "top250tv":0
//   "synopsis":"Rich teens Lily and Amanda rekindle a friendship and discover a common passion: They both hate Lily’s despicable stepfather. A killer plan is born."
//   "titledate":"2019-11-06"
//   "avgrating":0
//   "year":2017
//   "runtime":5523
//   "top250":0
//   "id":63612
//   }
// , {
//   "vtype":"movie"
//   "img":"https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABWeq7A8IefKS4xRJzkdEL4-1bl-IihlTbSNkfR-hZcULkJyTEhjDkM9VFgVd7-HJ-9noSNdTEbHd9Rku42aRUguyqg.jpg?r=c8f"
//   "nfid":80195447
//   "imdbid":"tt5776858"
//   "title":"Phantom Thread"
//   "clist":""CA":"Canada","AR":"Argentina","BR":"Brazil","IS":"Iceland","JP":"Japan","PT":"Portugal""
//   "poster":"https://m.media-amazon.com/images/M/MV5BMWJkNzBkM2UtYWFlMC00NmEwLTgxOGUtMjVmMzYyZjgyMmEzXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SX300.jpg"
//   "imdbrating":7.5
//   "top250tv":0
//   "synopsis":"A fashion designer is drawn to a waitress, who becomes his model, muse and lover. With time, their relationship grows in intensity -- and strangeness."
//   "titledate":"2019-09-25"
//   "avgrating":0
//   "year":2017
//   "runtime":7830
//   "top250":0
//   "id":63139
//   }
// , {
//   "vtype":"movie"
//   "img":"https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABagcW9teVs2i9gOnOJsj69v6KnUK8dTGKLnlGAbRduIlr1BeUY90svU57UOVCH38lJuhu-1wT5YwYUT7G7gsNUdc2g.jpg?r=298"
//   "nfid":80194284
//   "imdbid":"tt6217608"
//   "title":"The Rider"
//   "clist":""AU":"Australia","JP":"Japan""
//   "poster":"https://m.media-amazon.com/images/M/MV5BMjQ3ODM5MjY2N15BMl5BanBnXkFtZTgwOTU5MjM4NDM@._V1_SX300.jpg"
//   "imdbrating":7.4
//   "top250tv":0
//   "synopsis":"After a near-fatal fall, a cowboy is hesitant to walk away from his rodeo-riding days, even if it means risking his life."
//   "titledate":"2019-08-01"
//   "avgrating":0
//   "year":2017
//   "runtime":6161
//   "top250":0
//   "id":62720
//   }
//   , {
//   "vtype":"movie"
//   "img":"https://occ-0-1926-41.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABR_7nG25cLZXbjps-61Oir34k1NbcdlHOr-NrNvVg_tmlpgCO3iXO6OjnMdd666gUdeosCHsdHJ_Yy1UUdpYIvIWZA.jpg?r=505"
//   "nfid":80170989
//   "imdbid":"tt5462602"
//   "title":"The Big Sick"
//   "clist":""AU":"Australia","IT":"Italy""
//   "poster":"https://m.media-amazon.com/images/M/MV5BZWM4YzZjOTEtZmU5ZS00ZTRkLWFiNjAtZTEwNzIzMDM5MjdmXkEyXkFqcGdeQXVyNDg2MjUxNjM@._V1_SX300.jpg"
//   "imdbrating":7.5
//   "top250tv":0
//   "synopsis":"Sparks fly between a comedian and grad student, but his Muslim family’s expectations destroy their romance. When she falls ill, he must take a stand."
//   "titledate":"2019-06-01"
//   "avgrating":0
//   "year":2017
//   "runtime":7196
//   "top250":0
//   "id":62188
//   }
//   , {
//   "vtype":"movie"
//   "img":"https://occ-0-1926-41.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABWyLxrZl9hb-8Jg3M_1cGZfQ13TBZuZS5KnXmdH7G0Mn4x8zNNkGetAfgj1W56p2PYk_-90J4x1whdTDeA2v9n3x_Q.jpg?r=f39"
//   "nfid":80240678
//   "imdbid":"tt7242142"
//   "title":"Blindspotting"
//   "clist":""TR":"Turkey""
//   "poster":"https://m.media-amazon.com/images/M/MV5BNjgwYTQ4YmEtOTcwYy00NjBlLWI0ZjYtNDM0YmI1OGM0MWY0XkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_SX300.jpg"
//   "imdbrating":7.4
//   "top250tv":0
//   "synopsis":"Nearing the end of his probation, ex-convict Colin just wants to avoid prison -- but his best friend Miles and their city of Oakland don&#39;t make it easy."
//   "titledate":"2019-06-01"
//   "avgrating":0
//   "year":2018
//   "runtime":5722
//   "top250":0
//   "id":62174
//   }
//   , {
//   "vtype":"movie"
//   "img":"https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABUGzk9_c0OcCuWxRbMn5Ix_jTuYkDpuigZWPIhNkqOgAzexdCYvOq0NSLYxacaNTTazzyoo46Fr1SpjaCzudma_uQw.jpg?r=521"
//   "nfid":80240679
//   "imdbid":"tt7158430"
//   "title":"Hearts Beat Loud"
//   "clist":""BE":"Belgium","IL":"Israel","IT":"Italy","ES":"Spain","SE":"Sweden","CH":"Switzerland""
//   "poster":"https://m.media-amazon.com/images/M/MV5BMjA2MTM2MjcxNV5BMl5BanBnXkFtZTgwMzI3ODgyNTM@._V1_SX300.jpg"
//   "imdbrating":6.9
//   "top250tv":0
//   "synopsis":"With his record store fading fast and daughter Sam preparing to leave for college, Frank holds out hope that music -- and love -- will save the day."
//   "titledate":"2019-02-14"
//   "avgrating":0
//   "year":2018
//   "runtime":5830
//   "top250":0
//   "id":61126
//   }
//   , {
//   "vtype":"movie"
//   "img":"https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABVrNVAiGi0OzaXHpCW2UZP_S6gXmS_qol_mzjYlUrFLkU1kLy0uzz9CeIDSAfQ8EKBiCAXqMsoFKjtQqkyKBuuNOqQ.jpg?r=4ee"
//   "nfid":80022613
//   "imdbid":"tt3289956"
//   "title":"Autopsy of Jane Doe"
//   "clist":""DE":"Germany","US":"United States","CZ":"Czech Republic","HU":"Hungary","JP":"Japan","SK":"Slovakia","KR":"South Korea","SE":"Sweden","CH":"Switzerland""
//   "poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjA2MTEzMzkzM15BMl5BanBnXkFtZTgwMjM2MTM5MDI@._V1_SX300.jpg"
//   "imdbrating":6.8
//   "top250tv":0
//   "synopsis":"A father-son team of small-town coroners performs an autopsy on an unidentified woman with mysterious injuries and a terrifying secret."
//   "titledate":"2017-08-01"
//   "avgrating":0
//   "year":2016
//   "runtime":5186
//   "top250":0
//   "id":54371
//   }
//   , {
//   "vtype":"movie"
//   "img":"https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABXMjtfJH4ow-rXEb8YBD_9kFcBSmESi8Q9ugSge5FQc1BuwguJm79rvNqRJTw6YLjOZ1evh-1LcfhlWY2rL8-utIwtsDmTQsQjjIp5I2T9uoEPM7z0Lp2P4Qsck.jpg?r=a74"
//   "nfid":80171022
//   "imdbid":"tt5990342"
//   "title":"The Incredible Jessica James"
//   "clist":""CA":"Canada","FR":"France","DE":"Germany","NL":"Netherlands","PL":"Poland","GB":"United Kingdom","US":"United States","AR":"Argentina","AU":"Australia","BE":"Belgium","more":"+23""
//   "poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTA1NDM0ODY2MDdeQTJeQWpwZ15BbWU4MDc2NTgxOTAy._V1_SX300.jpg"
//   "imdbrating":6.5
//   "top250tv":0
//   "synopsis":"Burned by a bad breakup, a struggling New York City playwright makes an unlikely connection with a divorced app designer she meets on a blind date."
//   "titledate":"2017-07-28"
//   "avgrating":0
//   "year":2017
//   "runtime":5017
//   "top250":0
//   "id":54279
//   }