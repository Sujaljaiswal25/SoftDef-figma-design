import React from "react";

const BigPoster = () => {
  return (
    <div className="w-full h-[25vh] md:h-[50vh] flex justify-between bg-[#40BFFF] rounded">
      {/* <div className="h-full w-[50%] flex flex-col justify-center items-start px-4 md:px-10">
        <h1 className="text-2xl md:text-5xl font-medium text-white">
          Adidas Mens Running <br />
          Sneakers
        </h1>
        <p className="text-sm md:text-xl text-start text-white mt-2">
          Performance and design, Token right to the edge
        </p>
        <button className="border-b-2 border-white cursor-pointer bg-transparent p-0 font-medium text-white rounded mt-3 md:mt-5 text-sm md:text-base hover:opacity-80 transition-opacity">
          Shop Now
        </button>
      </div>
      <div className="h-full flex flex-col justify-center items-start px-4 md:px-10">
        <img
          className="w-full h-full object-contain md:object-cover transform -scale-x-100"
          src="../../public/images/Shoes.png"
          alt="Adidas running shoes"
        />
      </div> */}

      <img className="w-full h-full object-cover" src="https://i.pinimg.com/1200x/2c/91/6d/2c916d0d51bf0c0dadf6cb575e296cf8.jpg" alt="" />
    </div>
  );
};

export default BigPoster;
