import React from "react";
import MovieHero from "../components/MovieHero/MovieHero.component";
import CastAndCrewSlider from "../components/MovieHero/cast and crew";
import MoviepageHero from "../components/MovieHero/moviepagecomponents";
import { MoviesCastCrew } from "../components/MovieHero/cast and crew";
import {MdMovie} from "react-icons/md"

const Movie =()=>{
return (
<>
<MoviepageHero/>
<div className="my-12 container px-4 lg:ml-20 lg:ml-3/4">
   <div className="flex flex-col items-start gap-3">
      <h2 className="text-gray-800 font-bold text-2xl">About the movie</h2>
      <p>Shang-Chi and The Legend of The Ten Rings features Simu Liu as Shang-Chi, who must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization. The film is directed by Destin Daniel Cretton and produced by Kevin Feige and Jonathan Schwartz.</p>
   </div>
   <div className="my-10">
      <hr/>
   </div>
   <div className="flex flex-col items-start ">
      <h1 className="text-gray-800 font-bold text-2xl">Applicable Offers</h1>
      <div className="flex items-start gap-2 bg-yellow-100 border-yellow-400 border-dashed border-2 rounded-md p-3 w-96">
         <div>
          <img class="relative h-6 w-6" src="https://in.bmscdn.com/offers/tnclogo/filmy-pass---rs-75-off-on-movies-filmypass99.jpg?17022021111052" alt="Bookmyshow icon"/>
          </div>
       
         <div className="flex flex-col items-start">
            <h3 className="text-gray-900 text-lg">Filmy pass</h3>
            <p className="text-gray-600 text-sm">Get Rs.75* off on 3 movies you buy/rent on stream.Buy Filmy Pass @Rs.99</p>
         </div>
      </div>
   </div>
</div>

<div class="my-12 container mx-auto px-4 lg:ml-20 lg:w-3/4">
                <h1 class="font-bold text-2xl pb-6">
                    Cast
                </h1>

                <MoviesCastCrew class="m-0 p-0"/>
                <CastAndCrewSlider/>
                
            </div>

            <hr class="my-10 px-4 lg:ml-20 lg:w-3/4"/>

            <div class="my-12 container mx-auto px-4 lg:ml-20 lg:w-3/4">
                <h1 class="font-bold text-2xl pb-6">
                    Crew
                </h1>

                <MoviesCastCrew class="m-0 p-0"/>
                <CastAndCrewSlider/>
            </div>
</>
);
};
export default Movie;