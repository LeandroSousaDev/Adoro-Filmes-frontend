const url = 'https://tmdb-proxy.cubos-academy.workers.dev/3/discover/movie?language=pt-BR&include_adult=false'

const nextBotton = document.querySelector(".btn-next")
const prevBotton = document.querySelector('.btn-prev')

const movies = document.querySelector(".movies")

const inputSearch = document.querySelector(".search-input")

let arrayMovies = []

arrayMovies.indexOf

let start = 0

async function API() {
    try {
        const Response = await axios.get(url)
        return Response.data.results
    } catch (error) {
        return error
    }
}


async function init() {
    arrayMovies = await API()
    listMovies(arrayMovies)

}

init()


function listMovies(array) {

    movies.innerHTML = "";

    const currentArray = array.slice(start, start + 6)

    for (let item of currentArray) {

        const movie = document.createElement('div')
        movie.classList.add('movie')
        movie.style.backgroundImage = `url(${item.poster_path})`
        movies.appendChild(movie)

        const movieInfo = document.createElement('div')
        movieInfo.classList.add('info')
        movie.appendChild(movieInfo)

        const movieTitle = document.createElement('span')
        movieTitle.classList.add('title')
        movieTitle.textContent = item.title
        movieInfo.appendChild(movieTitle)

        const movieRating = document.createElement('span')
        movieRating.classList.add('rating')
        movieRating.textContent = item.vote_average.toFixed(1)
        movieInfo.appendChild(movieRating)

        const img = document.createElement('img')
        img.src = './assets/estrela.svg'
        movieRating.appendChild(img)

    } 
}


nextBotton.addEventListener("click", () => {
    if(arrayMovies.length <= 6) {
        return
    }

    start += 6
    listMovies(arrayMovies)
})

prevBotton.addEventListener("click", () => {
    if (start == 0) {
        return
    }

    start -= 6
    listMovies(arrayMovies)
})