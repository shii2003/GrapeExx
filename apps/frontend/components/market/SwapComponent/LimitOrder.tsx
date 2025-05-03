import React from 'react';

type LimitOrderProps = {

};

const LimitOrder: React.FC<LimitOrderProps> = () => {

    return (
        <>
            <div className='flex justify-between text-sm font-semibold text-stone-300 mt-2 '>
                <p className='text-stone-400'>Available Balance</p>
                <p>36.94 USDC</p>
            </div>
            <div className='flex flex-col mt-4 gap-2'>
                <div className='flex flex-col w-full gap-1 '>
                    <p className='text-sm tracking-wide font-semibold'>Price</p>
                    <input
                        type='number'
                        className='w-full h-10 text-xl border-2 border-stone-700  rounded-md focus:border-sky-500 outline-none'
                    />
                </div>
                <div className='flex flex-col w-full gap-1 '>
                    <p className='text-sm tracking-wide font-semibold'>Quantity</p>
                    <input
                        type='number'
                        className='w-full text-xl h-10 border-2 border-stone-700  rounded-md focus:border-sky-500 outline-none'
                    />
                    <p className='flex w-full text-sm justify-end mt-1'>~0.00 USDC</p>
                </div>
            </div>
            <div className='flex text-sm justify-between mt-4 '>
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
        </>
    )
}
export default LimitOrder;