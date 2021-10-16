import React from "react";
import Slider from "react-slick";
import {BiChevronLeft,BiChevronRight} from "react-icons/bi";

export const MoviesCastCrew = ( props ) =>
{
    return(
        <>
            <img className="w-20 h-20 p-0 rounded-full" src={props.src} alt={props.alt} />
            <h3 class=" text-black font-medium">{props.name}</h3>
            <h3 class=" text-gray-700">{props.as}</h3>
            
        </>
    );
}

const CastAndCrewSlider = () =>
{

    const CastAndCrewImage =
    [
        "https://in.bmscdn.com/iedb/artist/images/website/poster/large/simu-liu-2006167-13-05-2021-04-13-21.jpg",
        "https://in.bmscdn.com/iedb/artist/images/website/poster/large/awkwafina-1093500-20-06-2018-12-05-44.jpg",
        "https://in.bmscdn.com/iedb/artist/images/website/poster/large/michelle-yeoh-1473-24-03-2017-17-32-23.jpg",
        "https://in.bmscdn.com/iedb/artist/images/website/poster/large/tony-leung-iein105711-02-04-2018-13-07-58.jpg"
        /*
         {
            src:"https://in.bmscdn.com/iedb/artist/images/website/poster/large/simu-liu-2006167-13-05-2021-04-13-21.jpg",
             name:"Simu Liu",
             alt:"Simu Liu",
             as:"as Shang-Chi"
         },
         {
             src:"https://in.bmscdn.com/iedb/artist/images/website/poster/large/awkwafina-1093500-20-06-2018-12-05-44.jpg",
             name:"Awkwafina",
             alt:"Awkwafina",
             as:"as Katy"
         },
         {
             src:"https://in.bmscdn.com/iedb/artist/images/website/poster/large/michelle-yeoh-1473-24-03-2017-17-32-23.jpg",
             name:"Tony Leung Chiu-wai",
             alt:"Tony Leung Chiu-wai",
             as:"as Wenwu / The Mandarin"
         },
         {
             src:"https://in.bmscdn.com/iedb/artist/images/website/poster/large/tony-leung-iein105711-02-04-2018-13-07-58.jpg",
             name:"Michelle Yeoh",
             alt:"Michelle Yeoh",
             as:"as Jiang Nan"
         },
*/
    ];

    const settings =
    {
        infinite: false,
        autoplay: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        InitialSlide: 0,
        nextArrow:  <div><BiChevronRight id="right" class=" rounded-full bg-gray-700 absolute -top-1  fill-current text-white w-7 h-7"/></div>,
        prevArrow: <div><BiChevronLeft id="left" class=" rounded-full  bg-gray-700 absolute -top-1 fill-current text-white w-7 h-7"/></div>,
    }

    return(
        <>
        <Slider {...settings}>
            {CastAndCrewImage.map((image) =>
            (
                <MoviesCastCrew src={image}/>
            ))}
        </Slider>
        </>
    );
} 

export default CastAndCrewSlider;