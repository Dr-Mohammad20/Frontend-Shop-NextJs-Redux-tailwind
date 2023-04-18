import Banner from '@/components/Banner';
import ProductCard from '@/components/ProductCard';
import Wrapper from '@/components/Wrapper';

// transation on scroll code
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
const divVariant = {
  visible: { x: 0, opacity: 1, transition: { duration: 2.5 } },
  hidden: { x: 1000, opacity: 0 },
};
// ******************************

export default function Home() {
  // transation on scroll code
  const control = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      control.start('visible');
    }
  }, [control, inView]);
  // ******************************
  return (
    <main>
      <Banner />
      <Wrapper>
        {/* text section below the banner start */}
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[28px] md:text-[34px] mb-5 font-serif leading-tight">
            Shoping and be Happy
          </div>
          <div className="text-md md:text-xl">
            According to research, shopping increases Serotonin in the body,
            which makes you happy and feel good
          </div>
        </div>
        {/* text section below the banner end */}
        {/* product grid section start */}
        {/* motion div for transation div on scrool */}
        <motion.div
          ref={ref}
          initial="hidden"
          variants={divVariant}
          animate={control}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-52 gap-5 my-14 px-5 md:px-0 ${show}">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </motion.div>
        {/* product grid section end */}
      </Wrapper>
    </main>
  );
}
