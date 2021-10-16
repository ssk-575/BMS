import React from "react";
import {BiChevronRight} from "react-icons/bi";
import {BsFillHeartFill} from "react-icons/bs";
const MovieHero=()=>{
return(
<>
<div className="md:hidden">
   <img
      src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
      alt="Poster"
      />
</div>
<div className="hidden md:blocked lg:hidden">
   <img
      src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/free-guy-et00122134-16-09-2021-03-10-33.jpg"
      alt="Poster"
      />
</div>
<div className="relative hidden lg:block" style={{height: "40rem"}}>
<div className="absolute h-full w-full z-10"
style={{backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)"}}
/>
<div className=" flex flex-col block">
   <div className="absolute z-30 w-64 h-96 left-64 top-10 ">
      <img
         src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
         alt="poster"
         className="h-full w-full rounded-xl "
         /> 
   </div>
</div>
<div className="absolute z-50 top-5">
   <h7 className="text-white font-bold text-xxl">Shang-chi and the Legend of Ten rings </h7>
   <BsFillHeartFill/>
   <BiChevronRight/>
</div>
<img
   src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
   alt="Poster"
   className="w-full h-full"
   />
</div>
</>
)
};
export default MovieHero;