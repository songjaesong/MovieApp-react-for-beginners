import React, {Component} from'react';
import ReactPlayer from 'react-player';

function trailer({id}){
    const movieInfo = {
        37384 : {title :'Jai Bhim', url : "https://www.youtube.com/watch?v=nnXpbTFrqXA"},
        36999  :{title: 'My Beautiful Stutter', url: "https://www.youtube.com/watch?v=QS4MOpwEUtQ"},
        21870 :{title: 'David Attenborough: A Life on Our Planet', url: "https://www.youtube.com/watch?v=64R2MYUt394"},
        25318 :{title:'Soorarai Pottru' ,  url: "https://www.youtube.com/watch?v=fa_DIwRsa9o"},
        37027 :{title: 'Tobí Tobí',  url: "https://www.youtube.com/watch?v=ww9kKnNArcw"},
        37035 :{title: 'The Green Wave',  url: "https://www.youtube.com/watch?v=ERhUT_A6CQE"},
        28157 :{title: 'RUTH - Justice Ginsburg in her own Words',  url: "https://www.youtube.com/watch?v=02j0zr4oakg"},
        37921 :{title: 'Live The Stream: The Story of Joe Humphreys',  url: "https://www.youtube.com/watch?v=NOypqfcTjtk"},
        32828 :{title:'One Note at a Time' ,  url: "https://www.youtube.com/watch?v=KvP6gtzVpbA"},
        38641 :{title: 'George Fest: A Night to Celebrate the Music of George Harrison',  url: "https://www.youtube.com/watch?v=mZionmVDC40"},
        22032 :{title:'Holbrook/Twain: An American Odyssey' ,  url: "https://www.youtube.com/watch?v=PJoRbx8ixOE"},
        15527 :{title:'Top Gear Africa Special, Part 1' ,  url: "https://www.youtube.com/watch?v=qqQzU-q8S2o"},
        15553 :{title: 'Doctor Who The Day of the Doctor',  url: "https://www.youtube.com/watch?v=7hRy2N2CMhQ"},
        29819 :{title: 'CM101MMXI Fundamentals',  url: "https://www.youtube.com/watch?v=9CoSYzjSMgY"},
        36834 :{title: 'Yanni: Live at El Morro',  url: "https://www.youtube.com/watch?v=0yRvhxdsYb0"},
        3175 :{title:'The Dark Knight' ,  url: "https://www.youtube.com/watch?v=EXeTwQWrcwY"},
        30440 :{title:'Avenged Sevenfold: Live in the L.B.C. & Diamonds in the Rough' ,  url: "https://www.youtube.com/watch?v=GVHkHFMwfIA"},
        3709 :{title: 'The Shawshank Redemption',  url: "https://www.youtube.com/watch?v=6hB3S9bIaco"},
        3305 :{title:'The Godfather: Part II' ,  url: "https://www.youtube.com/watch?v=9O1Iy9od7-A"},
        3304 :{title:'The Godfather' ,  url: "https://www.youtube.com/watch?v=sY1S34973zA"}
    }
    return(
        <ReactPlayer url = {`${movieInfo[id].url}`} playing controls/>
    )
}

export default trailer;