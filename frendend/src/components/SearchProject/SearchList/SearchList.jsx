import './SearchList.css';

const SearchList = ({ searchList = [] }) => {
    return (
        <div className='search-list-container'>
            {searchList.map((data) => (
                <div key={data.id} className="search-items">
                    <img
                        width='50'
                        height='50'
                        style={{ objectFit: 'contain' }}
                        src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
                        alt="movie image"
                    />
                    <p className='title'>{data.title}</p>
                </div>
            ))}
        </div>
    );
}

export default SearchList;
