'use client'
import React from 'react';

type MarketBarProps = {

};

const MarketBar: React.FC<MarketBarProps> = () => {

    return (
        <div className='flex gap-5 h-16 border border-stone-800 rounded-md px-2 py justify-start  items-center'>
            <div className='flex gap-2'>
                <div className='h-6 w-6 bg-amber-600 overflow-hidden rounded-full'></div>
                <p className='font-semibold text-lg tracking-wide'>SOL/USDC</p>
            </div>
            <div className='flex flex-col'>
                <p className='text-lg font-semibold text-green-500'>0.2336</p>
                <p className='text-sm font-semibold'>$0.2336</p>
            </div>
            <div className='flex flex-col'>
                <p className='text-sm text-stone-600 font-semibold'> 24H Change</p>
                <p className='text-green-500'>+0.0023 +0.99%</p>
            </div>
            <div className='flex flex-col'>
                <p className='text-sm text-stone-600 font-semibold'> 24H High</p>
                <p className=''>0.2341</p>
            </div>
            <div className='flex flex-col'>
                <p className='text-sm text-stone-600 font-semibold'> 24H Low</p>
                <p className=''>0.2304</p>
            </div>
            <div className='flex flex-col'>
                <p className='text-sm text-stone-600 font-semibold'> {'24H Volume (USDC)'}</p>
                <p className=''>19,274,060.41</p>
            </div>
        </div>
    )
}
export default MarketBar;  