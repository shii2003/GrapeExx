import React, { useState } from 'react';
import LimitOrder from './LimitOrder';
import MarketOrder from './MarketOrder';

type OrderType = "limit" | "market";
type SwapComponentProps = {

};

const SwapComponent: React.FC<SwapComponentProps> = () => {

    const [orderType, setOrderType] = useState<OrderType>("limit");

    return (
        <div className='flex flex-col w-72 border border-stone-800 rounded-md overflow-hidden'>
            <div className='flex h-16 border-b border-stone-800 overflow-hidden'>
                <button className=' text-green-400 bg-stone-900  font-bold bg-opacity-75 w-1/2'>
                    BUY
                </button>
                <button className=' text-red-500 font-bold w-1/2'>
                    SELL
                </button>
            </div>
            <div className='flex flex-col  h-full p-2'>
                <div className='flex gap-4  justify-start items-center px-4 py-2'>
                    <button
                        className={`relative p-1 
                            ${orderType === "limit"
                                ? " text-white before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-gradient-to-r before:from-purple-500 before:to-sky-400"
                                : "text-stone-400"
                            } text-lg tracking-wider gap-3`
                        }
                        onClick={() => setOrderType('limit')}
                    >
                        Limit
                    </button>
                    <button
                        className={`relative p-1 text-lg tracking-wider 
                            ${orderType === 'market'
                                ? ' text-white before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-gradient-to-r before:from-purple-500 before:to-sky-400'
                                : "text-stone-500"
                            }`}
                        onClick={() => setOrderType('market')}
                    >
                        Market
                    </button>
                </div>
                {orderType === "limit" ? <LimitOrder /> : <MarketOrder />}
            </div>
        </div>
    )
}
export default SwapComponent;