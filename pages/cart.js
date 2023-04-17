import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Wrapper from '@/components/Wrapper';
import CartItem from '@/components/CartItem';

const Cart = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        {/* Heading and paragraph start */}
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Shopping Cart
          </div>
        </div>
        {/* Heading and paragraph end */}
        {/* Cart content start */}
        <div className="flex flex-col lg:flex-row gap-12 py-10">
          {/* Cart item start */}
          <div className="flex-[2]">
            <div className="text-lg font-bold">Cart Item</div>
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
          {/* Cart item end */}
          {/* Cart summary start */}
          <div className="flex-[1]">
            <div className="text-lg font-bold">Summary</div>

            <div className="p-5 my-5 bg-black/[0.2] rounded-xl">
              <div className="flex justify-between">
                <div className="text-sm md:text-lg font-medium text-black">
                  SUBTOTAL
                </div>
                <div className="text-sm md:text-lg font-medium text-black">
                  19 695.00
                </div>
              </div>
            </div>

            <div className="p-5 my-5">
              <div className="text-md mb-5 leading-normal">
                The Taiwanese footwear maker for brands like Nike, Adidas, New
                Balance, and Timberland manufactured and shipped over 272
                million pairs of shoes in the financial year 2022 globally, up
                nearly 14% from a year earlier.
              </div>
            </div>

            {/* Check Out button start */}
            <button
              className="w-full py-4 rounded-full bg-black text-white text-lg
            font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
              Check Out
            </button>
            {/* Check Out button end */}
          </div>
          {/* Cart summary start */}
        </div>
        {/* Cart content end */}

        {/* This section for when a cart item is empty */}
        {/* <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
          <Image
            src="/empty-cart.jpg"
            width={300}
            height={300}
            className="w-[300px] md:w-[400px]"
          />
          <span className="text-xl font-bold">Your cart is empty</span>
          <span className="text-center mt-4">
            Looks like you not added anything in your cart,
            <br />
            Go ahead and explore top categories
          </span>
          <Link
            href="/"
            className="py-4 px-8 rounded-full bg-black text-white text-lg
            font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8">
            Continue Shopping
          </Link>
        </div> */}
      </Wrapper>
    </div>
  );
};

export default Cart;
