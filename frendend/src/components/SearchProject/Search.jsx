import { useEffect, useState } from 'react'
import './Search.css'
import SearchList from './SearchList/SearchList'
import SearchInput from './SearchInput/SearchInput'
import axios from 'axios'

const API_URL = 'http://localhost:4000/api/movies'

const Search = () => {

    const [searchInputvalue, setSearchInputvalue] = useState("")
    const [searchList, setSearchList] = useState([])

    const handleChange = (event) => {
        setSearchInputvalue(event.target.value)
    }

    const clearSearch = () => {
        setSearchInputvalue("")
        setSearchList([])
    }

    const fetchMovieList = async () => {
        try {
            const response = await axios(API_URL, {
                params: {
                    movieName: searchInputvalue
                }
            }
            );
            setSearchList(response.data.results);
        } catch (error) {
            console.error(`API GET request failed: ${error}`);
        }
    };

    const submitMovie = async () => {
        try {
            const response = await axios(API_URL, {
                method: 'POST',
                data: {
                    movieName: searchInputvalue,
                }
            })
            setSearchList(response.data.results)
        } catch (error) {
            console.log(`Api post not working..${error}`);
        }
    }

    const deleteMovie = async () => {
        try {
            const response = await axios(API_URL, {
                method: 'DELETE',
                data: {
                    movieName: searchInputvalue,
                }
            })
            setSearchList(response.data.results)
        } catch (error) {
            console.log(`Api post not working..${error}`);
        }
    }


    useEffect(() => {
        const timeout = setTimeout(() => {
            if (searchInputvalue) {
                fetchMovieList();
            }
        }, 500);
        return () => clearTimeout(timeout);
    }, [searchInputvalue]);


    return (
        <div className='search-container'>
            <div className="heading-section">
                <h1>Looking for a movie ?</h1>
            </div>
            <button onClick={submitMovie}>Submit</button>
            <button onClick={deleteMovie}>Delete</button>
            <SearchInput clearSearch={clearSearch} searchInputvalue={searchInputvalue} handleChange={handleChange} />
            <SearchList searchList={searchList} />
        </div>
    )
}

export default Search;
