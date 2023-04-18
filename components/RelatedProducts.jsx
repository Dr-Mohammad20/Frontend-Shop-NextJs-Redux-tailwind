import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCard from './ProductCard';

// transation on scroll code
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
const divVariant = {
  visible: { y: 0, opacity: 1, transition: { duration: 2.5 } },
  hidden: { y: 300, opacity: 0 },
};
// ******************************

const RelatedProducts = () => {
  // transation on scroll code
  const control = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      control.start('visible');
    }
  }, [control, inView]);
  // ******************************

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1280 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1280, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={divVariant}
      animate={control}
      className="mt-[50px] md:mt-[100px] mb-[100px] md:mb-0">
      <div className="text-2xl font-bold mb-4 flex justify-center items-center">
        You Might Also Like
      </div>
      <Carousel
        responsive={responsive}
        containerClass="-mx-[10]px"
        itemClass="px-[10px]">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Carousel>
    </motion.div>
  );
};

export default RelatedProducts;
