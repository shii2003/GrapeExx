import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <div className='border border-blue-300 h-20 flex w-7xl px-4 py-2 items-center  justify-between gap-3 rounded-md mt-4 '>
            <div className='flex text-white gap-2'>
                <Image
                    src="grapeEx_Logo.svg"
                    className='bg-white rounded-full'
                    height={30}
                    width={30}
                    alt="logo"
                />
                <span className=" text-4xl font-bold bg-gradient-to-r from-purple-500 to-sky-400 bg-clip-text text-transparent">
                    GrapeEx
                </span>
            </div>
            <div className='flex items-center justify-between gap-4  px-2 py-1 text-stone-500'>
                <div className='hover:underline hover:text-stone-300'>
                    Home
                </div>
                <Link
                    className='hover:underline hover:text-stone-300'
                    href="/trade/SOLUSDC"
                >
                    Market
                </Link>
                <div className='hover:underline hover:text-stone-300'>
                    Trade
                </div>
            </div>
            <div className='gap-2 flex items-center justify-center px-4 py-2'>
                <button className='flex text-stone-900 font-semibold bg-gradient-to-l from-sky-500 via-sky-400 to-sky-300 items-center justify-center px-4 py-2 rounded-md  hover:bg-gradient-to-r hover:from-sky-500 hover:via-sky-400 hover:to-sky-300'>
                    Sign up
                </button>
                <button className='flex  text-stone-900 font-semibold bg-gradient-to-l from-sky-500 via-sky-400 to-sky-300 items-center justify-center px-4 py-2 rounded-md  hover:bg-gradient-to-r hover:from-purple-500 hover:via-purple-400 hover:to-purple-300 '>
                    Sign in
                </button>
            </div>
        </div>
    )
}
