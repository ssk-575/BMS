import React, {useState,useEffect} from "react";
import HeroSlider from "react-slick";
import axios from "axios";
//Component
//import { NextArrow, PrevArrow } from "./Arrows.component";


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsChevronRight,BsChevronLeft } from "react-icons/bs";

const HeroCarousal = () => {

const [images, setImages] = useState([]);

useEffect(() => {
  const requestNowPlayingMovies = async()=>{
    const getImages = await axios.get("/movie/now_playing");
    setImages(getImages.data.results);
  };
  requestNowPlayingMovies();
},[]);
const settings = 
{
    arrows: true,
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <div class="relative"><BsChevronRight class="bg-gray-800 rounded-l-lg text-white w-11 h-11 float-right"/></div>,
    prevArrow: <div class="relative"><BsChevronLeft class=" absolute inset-5 bg-gray-800 rounded-r-lg text-white w-11 h-11"/></div>
  };

const settingsLg =
{
    dots: true,
    autoplay: true,
    centerMode: true,
    centerPadding: "70px",
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 500,
    nextArrow:  <div><BsChevronRight class="bg-gray-700 absolute bottom-0 rounded-l-lg fill-current text-white w-11 h-11"/></div>,
    prevArrow: <div><BsChevronLeft class="bg-gray-700 absolute bottom-0 rounded-r-lg fill-current text-white w-11 h-11"/></div>,
}



  return (
    <>
  <div className="lg:hidden">
  <HeroSlider {...settings}>
  {
    images.map((image) => (
      <div className="w-full h-64 md:h-80 py-3">
      <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
      alt="testing" className="w-full h-full rounded-md"/>
      </div>
    ))
}
  </HeroSlider>  
  </div>

  <div className="hidden lg:block">
  <HeroSlider {...settingsLg}>
  {
    images.map((image) => (
      <div className="w-full h-96 px-2 py-3">
      <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
      alt="testing" className="w-full h-full rounded-md "/>
      </div>
    ))
}
  </HeroSlider> 
  </div>
    </>
  );
};

export default HeroCarousal;

