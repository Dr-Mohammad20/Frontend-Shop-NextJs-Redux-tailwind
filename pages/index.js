import Banner from '@/components/Banner';
import ProductCard from '@/components/ProductCard';
import Wrapper from '@/components/Wrapper';

export default function Home() {
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-14 px-5 md:px-0">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        {/* product grid section end */}
      </Wrapper>
    </main>
  );
}
