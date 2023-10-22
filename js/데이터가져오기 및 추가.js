// movie_container클래스를 가진 div를 가지고옴
const movie_container = document.querySelector(".movie_container")

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OTNiMzQ5ZmJhNmYzOGI4YzZkNTAwNWMxMDg5MzhmNCIsInN1YiI6IjY1MmY4ZjJiYTgwMjM2MDBhYjQxMDA3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.btXmxu-bIRxJ9afmzmYyaVjCoGp49qFXQCo5S1pt9yg'
    }
};

fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(data => {

        let MovieInfos = data.results;
        MovieInfos.forEach((MovieInfo) => {
            let img = MovieInfo.poster_path;
            let title = MovieInfo.title;
            let overview = MovieInfo.overview;
            let vote_avg = MovieInfo.vote_average;
            let id = MovieInfo.id;

            let temp = `
        <div class="movie_card">
            <img src="https://image.tmdb.org/t/p/w500${img}">
            <h2 class="movie_title">${title}</h2>
            <hr>
            <p class="movie_overview">${overview}</p>
            <hr>
            <p class="movie_vote_avg">Rating : ${vote_avg}</p>
        </div>`;

            // 영화데이터가 담긴 temp을 가져와서 movie_container에 추가
            movie_container.innerHTML += temp;
        })

    })
    .catch(err => console.error(err));
// movie_container클래스를 가진 div를 가지고옴
const movie_container = document.querySelector(".movie_container")

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OTNiMzQ5ZmJhNmYzOGI4YzZkNTAwNWMxMDg5MzhmNCIsInN1YiI6IjY1MmY4ZjJiYTgwMjM2MDBhYjQxMDA3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.btXmxu-bIRxJ9afmzmYyaVjCoGp49qFXQCo5S1pt9yg'
    }
};

fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(data => {

        let MovieInfos = data.results;
        MovieInfos.forEach((MovieInfo) => {
            let img = MovieInfo.poster_path;
            let title = MovieInfo.title;
            let overview = MovieInfo.overview;
            let vote_avg = MovieInfo.vote_average;
            let id = MovieInfo.id;

            let temp = `
        <div class="movie_card">
            <img src="https://image.tmdb.org/t/p/w500${img}">
            <h2 class="movie_title">${title}</h2>
            <hr>
            <p class="movie_overview">${overview}</p>
            <hr>
            <p class="movie_vote_avg">Rating : ${vote_avg}</p>
        </div>`;

            // 영화데이터가 담긴 temp을 가져와서 movie_container에 추가
            movie_container.innerHTML += temp;
        })

    })
    .catch(err => console.error(err));