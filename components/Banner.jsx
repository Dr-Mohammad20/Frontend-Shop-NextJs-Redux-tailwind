import React from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';

const Banner = () => {
  return (
    <div className="relative text-white text-[20] w-full max-w-[1360px] mx-auto animate-fade">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        renderArrowPrev={(clickHandler, hasPrev) => (
          <div
            onClick={clickHandler}
            className="absolute right-[31px] md:right-[51px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90">
            <BiLeftArrow className="text-sm md:text-lg" />
          </div>
        )}
        renderArrowNext={(clickHandler, hasPrev) => (
          <div
            onClick={clickHandler}
            className="absolute right-0 bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90">
            <BiRightArrow className="text-sm md:text-lg" />
          </div>
        )}>
        <div>
          <img
            src="slide-1.png"
            className="aspect-[16/10] md:aspect-auto object-cover"
          />
          <div className="px-[15px] ms:px-[40px] py-[10px] md:py-[25px] font-serif bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
            Shop Now
          </div>
        </div>
        <div>
          <img
            src="slide-2.png"
            className="aspect-[16/10] md:aspect-auto object-cover"
          />
          <div className="px-[15px] ms:px-[40px] py-[10px] md:py-[25px] font-serif bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
            Shop Now
          </div>
        </div>
        <div>
          <img
            src="slide-3.png"
            className="aspect-[16/10] md:aspect-auto object-cover"
          />
          <div className="px-[15px] ms:px-[40px] py-[10px] md:py-[25px] font-serif bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
            Shop Now
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
