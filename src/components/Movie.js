import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import MovieStyles from "./Movie.module.css"

function Movie({ id, coverImg, title ,summary, genres}){
    return (
        <div className = {MovieStyles.MoviePrinting}>
            <Link to = {`/movie/${id}`}><img className ={MovieStyles.MovieImg} src = {coverImg} alt = {title}/></Link>
            <div className = {MovieStyles.MovieDescription}>
                <h1 className = {MovieStyles.Title}>
                    <Link to = {`/movie/${id}`}>{title}</Link>
                </h1>
                <ul className = {MovieStyles.Genres} >
                   {genres.map((g)=><li className = {MovieStyles.Genre} key = {g} >{g}</li>)}
                </ul>
                <p>{summary.length > 200 ? `${summary.slice(0, 400)} ...` : summary}</p>
            </div>
        </div>
    )
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    coverImg : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;