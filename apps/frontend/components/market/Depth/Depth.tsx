import React from 'react';
import AskTable from './AskTable';
import BidTable from './BidTable';

type DepthProps = {

};

const Depth: React.FC<DepthProps> = () => {

    return (
        <div className='flex flex-col w-72 h-full border border-stone-800 rounded-md  py-1'>
            <div className='flex px-2 items-center justify-between pb-1 mb-2 font-semibold text-sm'>
                <p>Price</p>
                <p className='text-stone-500'>Size</p>
                <p className='text-stone-500'>Total</p>
            </div>
            <div >
                <AskTable />
            </div>
            <div className='flex text-lg font-semibold text-green-500 px-2'>
                126.7
            </div>
            <div>
                <BidTable />
            </div>
        </div>
    )
}
export default Depth;