import { useState,useEffect } from "react";
import {useParams} from "react-router-dom";
import Trailer from '../movieTrailer/trailer'
import DetailStyles from "./Detail.module.css"
function Detail(){
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [movieTitle, setTitle] = useState("");
    const [movieSummary, setSummary] = useState("");
    const [movieCoverImg, setCoverImg] = useState("");
    const [movieGenres, setGenre] = useState([]);
    const [movieYear, setYear] = useState(0);
    const [movieRating, setRating] = useState(0);
    const getMovie = async()=>{
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
            console.log(json);

            setTitle(json.data.movie.title);
            setYear(json.data.movie.year);
            setSummary(json.data.movie.description_full);
            setGenre(json.data.movie.genres)
            setCoverImg(json.data.movie.large_cover_image);
            setRating(json.data.movie.rating);

            setLoading(false);
    }
    useEffect(()=>{
        getMovie();
    }, []);

    return (
        <div className = {DetailStyles.DetailBody}>
            {loading ? <h1 className = {DetailStyles.DetailLoading}>Loading...</h1> :
            <div className = {DetailStyles.DetailWrapper}>
                <img className = {DetailStyles.Img} src = {movieCoverImg} />
                <div className = {DetailStyles.Trailer}>
                    <div className = {DetailStyles.Video}>
                        <Trailer id = {id}/>
                    </div>
                    <div className = {DetailStyles.Description}>
                            <h1 className = {DetailStyles.Title}>{movieTitle}({movieYear})</h1><p className = {DetailStyles.Rating}>{`Rating: ${movieRating}`}</p>
                            <ul className = {DetailStyles.Genres} >
                                {movieGenres.map((g)=><li className = {DetailStyles.Genre} key = {g} >{g}</li>)}
                            </ul>
                            <p>{movieSummary}</p>
                            
                    </div>
                </div>
            </div>
            }
        </div>
    )
}

export default Detail;