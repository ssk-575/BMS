import React from "react";
import Poster from "../components/Poster/Poster.component";
import PlaysFilter from "../components/PlaysFilters/PlaysFilters.components";
const Plays = ()=>{
return (
<>
<div className="container mx-auto px-4">
   <div className="w-full lg:flex lg:flex-row-reverse">
    <div className="w-8/12">
    <h2 className="text-2xl font-bold mb-4">Plays in bhuwaneswar</h2>
      <div className="flex flex-wrap">
         <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <Poster
               src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNiBEZWM%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00316277-uwvdwtfpbl-portrait.jpg"
               title="Tvk Cultural presents Ponniyin Selvan"
               subtitle="Tamil ₹300 "
               />
         </div>
         <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <Poster
               src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314534-zjzubzamfs-portrait.jpg"
               title="Tvk Cultural presents Ponniyin Selvan"
               subtitle="Tamil ₹300 "
               />
         </div>
         <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <Poster
               src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314534-zjzubzamfs-portrait.jpg"
               title="Tvk Cultural presents Ponniyin Selvan"
               subtitle="Tamil ₹300 "
               />
         </div>
         <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <Poster
               src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314534-zjzubzamfs-portrait.jpg"
               title="Tvk Cultural presents Ponniyin Selvan"
               subtitle="Tamil ₹300 "
               />
         </div>
         <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <Poster
               src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314534-zjzubzamfs-portrait.jpg"
               title="Tvk Cultural presents Ponniyin Selvan"
               subtitle="Tamil ₹300 "
               />
         </div>
         <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <Poster
               src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314534-zjzubzamfs-portrait.jpg"
               title="Tvk Cultural presents Ponniyin Selvan"
               subtitle="Tamil ₹300 "
               />
         </div>
         <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <Poster
               src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314534-zjzubzamfs-portrait.jpg"
               title="Tvk Cultural presents Ponniyin Selvan"
               subtitle="Tamil ₹300 "
               />
         </div>
         <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <Poster
               src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314534-zjzubzamfs-portrait.jpg"
               title="Tvk Cultural presents Ponniyin Selvan"
               subtitle="Tamil ₹300 "
               />
         </div>
      </div>
    </div>
      <div className="lg:w-1/4">
      <h2 className="text-2xl font-bold mb-4">Filters</h2>
      <div>
      <PlaysFilter title="Date" tags={["Today","Tomorrow", "This Weekend"]}/>
      <PlaysFilter title="Language" tags={["Tamil","Kannada"]}/>
      <PlaysFilter title="Categories" tags={["Theatre"]}/>
      <PlaysFilter title="Genres" tags={["Drama","Adaptation", "Historical", "Online Streaming Plays"]}/>
      <PlaysFilter title="More Filters" tags={["Online Streaming ","Kids Allowed", "Outdoor Events"]}/>
      <PlaysFilter title="Price" tags={["Free","0-500","501-2000","Above 2000"]}/>
      </div>
      </div>
   </div>
</div>
</>
)
};
export default Plays;