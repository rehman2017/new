import React from "react";

export default function HeroSection() {
  return (
    <div className="flex justify-end items-center px-6 md:px-8 lg:px-16 2xl:px-24 bg-[#54A6FF] bg-[url('/pic3.svg')] w-[100%] h-[716px] bg-center bg-cover bg-no-repeat ">
      
    
      <div className="h-[443px] w-1/2 bg-[#FFF3E3] ">
      <div className="p-10">
      <p className="font-bold">New Arrival</p>
      <h1 className="text-[#B88E2F] font-extrabold text-5xl py-2 space-y-2 ">Discover Our <br/> New Collection</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam alias expedita, ea quidem ullam consectetur ipsum .</p>
      </div>
      <div className="bg-[#B88E2F] text-white font-bold border  w-[222px] h-[74px] py-5 px-10 my-[100px] mx-10">
      <button >BUY NOW</button>
</div>
      </div>
      
    </div>
    
  );
}