const express = require('express')
const app = express()
const movieList = require('./movie.json')
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.get('/api/movies', (req, res) => {
    const { movieName } = req.query;
    let filterMovies = []
    if (movieName) {
        const filterMovies = movieList.filter(movie => movie.title.toLocaleLowerCase().includes(movieName.toLocaleLowerCase()))
    } else {
        filterMovies = movieList
    }
    res.json({
        results: filterMovies
    })
})

const PORT = 4000
app.listen(PORT, () => console.log(`server running on ${PORT}`))
