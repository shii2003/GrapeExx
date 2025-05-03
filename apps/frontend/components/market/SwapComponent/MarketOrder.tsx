import React from 'react';
import { FaExchangeAlt } from "react-icons/fa";

type MarketOrderProps = {

};

const MarketOrder: React.FC<MarketOrderProps> = () => {

    return (
        <>
            <div className='flex justify-between text-sm font-semibold text-stone-300 mt-2 '>
                <p className='text-stone-400'>Available Balance</p>
                <p className='font-semibold '>0.00 USDC</p>
            </div>
            <div className='flex flex-col mt-4 gap-2'>
                <div className='flex flex-col w-full gap-1 '>
                    <div className='flex items-center justify-start gap-2 text-sm tracking-wide text-stone-400 mb-1'>
                        Order Value
                        <FaExchangeAlt />
                    </div>
                    <input
                        type='number'
                        className='w-full h-10 text-xl border-2 border-stone-700  rounded-md focus:border-sky-500 outline-none'
                    />
                </div>
            </div>
            <div className='flex text-sm justify-between mt-4 mb-2 '>
                <p className='bg-stone-800 rounded-full px-2 py-1'>25%</p>
                <p className='bg-stone-800 rounded-full px-2 py-1'>50%</p>
                <p className='bg-stone-800 rounded-full px-2 py-1'>75%</p>
                <p className='bg-stone-800 rounded-full px-2 py-1'>Max</p>
            </div>
            <div className='w-full mt-4  '>
                <button className='w-full bg-gradient-to-r from-purple-500 to-sky-400 text-stone-800 font-bold text-lg tracking-wider rounded-md px-3 py-2'>
                    Buy
                </button>
            </div>
            <div className='flex flex-col text-sm mt-3 text-stone-400'>
                <div className='flex items-center justify-between'>
                    <p>Limit Price</p>
                    <p className='font-semibold text-white'>
                        135.01
                    </p>
                </div>
                <div className='flex items-center justify-between'>
                    <p>Limit Quantity</p>
                    <p className='font-semibold text-white'>
                        0.74
                    </p>
                </div>
                <div className='flex items-center justify-between'>
                    <p>Order Value</p>
                    <p className='font-semibold text-white'>
                        ~ 99.91 USDC
                    </p>
                </div>
            </div>
        </>
    )
}
export default MarketOrder;