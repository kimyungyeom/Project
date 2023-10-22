// 각 id 태그에 접근
const searchbtn = document.getElementById('Search_btn');
const Searchinput = document.getElementById('Search_input');

// 검색한 영화들 표시되는 함수
function DisplaySearchedMovie(search) {
    // 영화제목을 소문자로 변환하고 검색시 소문자가 포함된 값을 반환
    const SearchedMovies = MovieInfos.filter((movies) => {
        return movies.title.toLowerCase().includes(search.toLowerCase());
    });

    // 기존에 나열된 영화들을 없앰
    movie_container.innerHTML = ""

    SearchedMovies.forEach((MovieInfo) => {
        let img = MovieInfo.poster_path;
        let title = MovieInfo.title;
        let overview = MovieInfo.overview;
        let vote_avg = MovieInfo.vote_average;
        let id = MovieInfo.id;

        let temp = `
    <div class="movie_card" data-id="${id}">
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

}

// 검색버튼에 클릭 이벤트 리스너 등록 및 클릭하였을때 검색하기
searchbtn.addEventListener("click", function (event) {
    const search = Searchinput.value;
    DisplaySearchedMovie(search);
});

// 검색 입력에 키입력 인벤트 리스너 등록 및 엔터를 눌렀을때 검색하기
Searchinput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        const search = Searchinput.value;
        DisplaySearchedMovie(search);
    }
});

DisplaySearchedMovie("");
// 각 id 태그에 접근
const searchbtn = document.getElementById('Search_btn');
const Searchinput = document.getElementById('Search_input');

// 검색한 영화들 표시되는 함수
function DisplaySearchedMovie(search) {
    // 영화제목을 소문자로 변환하고 검색시 소문자가 포함된 값을 반환
    const SearchedMovies = MovieInfos.filter((movies) => {
        return movies.title.toLowerCase().includes(search.toLowerCase());
    });

    // 기존에 나열된 영화들을 없앰
    movie_container.innerHTML = ""

    SearchedMovies.forEach((MovieInfo) => {
        let img = MovieInfo.poster_path;
        let title = MovieInfo.title;
        let overview = MovieInfo.overview;
        let vote_avg = MovieInfo.vote_average;
        let id = MovieInfo.id;

        let temp = `
    <div class="movie_card" data-id="${id}">
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

}

// 검색버튼에 클릭 이벤트 리스너 등록 및 클릭하였을때 검색하기
searchbtn.addEventListener("click", function (event) {
    const search = Searchinput.value;
    DisplaySearchedMovie(search);
});

// 검색 입력에 키입력 인벤트 리스너 등록 및 엔터를 눌렀을때 검색하기
Searchinput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        const search = Searchinput.value;
        DisplaySearchedMovie(search);
    }
});

DisplaySearchedMovie("");