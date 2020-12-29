# matchflix

## Description
Matchflix was built to simplify deciding on a Netflix show to watch with other people. On the landing page, a host starts a session after choosing a genre, then all people who will watch together rate a list of movies. Finally, all people will see the "winner" - the movie that received the most votes. 

For now, 28 Dec 2020, the landing page and creating a session works. Then on the frontend, movies are displayed (by fetching from the unogs API a list of movies for the chosen genre) and a person can cast their votes. On the backend, middleware for calculating the winner still needs to be implemented.

Note: we used React Router to display the movies when the generated session URL is clicked. We learned that this is not the ideal use case of React Router. We added some workarounds to make it function (see "Approach" https://github.com/matchflix/matchflix/pull/7). You must run 'npm run build' before 'npm run dev' because going to a /movies url will use the production bundle.js. It's not ideal - we'd recommend refactoring the code to not use React Router if you have the time.

## Let's Get Started!
- Fork & Clone this repo
- Run npm install
- Run npm run build
- Run npm run dev
- Open your browser to local8080

## ⭐ Developers: ⭐
- Brandi 
- Matt
- Luke
- Matthew
- Colin
