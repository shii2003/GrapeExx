'use client'
import Depth from '@/components/market/Depth/Depth';
import MarketBar from '@/components/market/MarketBar';
import SwapComponent from '@/components/market/SwapComponent/SwapComponent';
import Navbar from '@/components/Navbar';
import { useParams } from 'next/navigation';
import React from 'react';

type pageProps = {

};

const page: React.FC<pageProps> = () => {

    const { market } = useParams();

    return (
        <div className='flex flex-col h-screen'>
            <div className='flex items-center justify-center'>
                <Navbar />
            </div>
            <div className='flex flex-1 gap-2 mt-2 pl-2'>
                <div className='flex-1 flex-col flex gap-2'>
                    <div>
                        <MarketBar />
                    </div>
                    <div className='flex-1 flex gap-2 rounded-md'>
                        <div className='flex-1 border border-stone-800 rounded-md'>
                            hii
                        </div>
                        <div>
                            <Depth />
                        </div>
                    </div>
                </div>
                <SwapComponent />
            </div>
        </div>
    )
}
export default page;