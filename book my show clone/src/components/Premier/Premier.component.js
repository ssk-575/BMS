import React from "react";
import Slider from "react-slick";
//component
import Poster from "../Poster/Poster.component";
//settings
import settings from "../../config/PosterCarousal.config";
//Premeir images
import PremierImages from "../../config/TempPosters.config";
export const Premier = ()=>{
return(
<>
<div className="flex flex-col items-start py-4">
   <h3 className="text-white text-xl font-bold">Premieres</h3>
   <p className="text-white text-sm ">Brand new release every Friday</p>
</div>
<Slider {...settings}>
   {PremierImages.map((image)=>(
   <Poster {...image} />
   ))}
</Slider>
</>
)
};
//extra one
export const Premier1 = ()=>{
return(
<>
<div>
   <h4 className="text-black text-xl font-bold">Recommended Movies</h4>
</div>
<Slider {...settings}>
   {PremierImages.map((image)=>(
   <Poster {...image} />
   ))}
</Slider>
</>
)
};
export default Premier;