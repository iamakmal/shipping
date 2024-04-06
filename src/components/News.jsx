import React from 'react'
import {ChatBubbleLeftRightIcon} from '@heroicons/react/24/solid'

export default function News() {
  return (
    <>
    <h1 className="text-4xl font-bold text-center mb-2">LATEST NEWS</h1>
    <div className="flex justify-center items-center space-x-2">
    <div className="w-5 h-5 bg-[#00C0E4] -mt-10"></div>
    <h1 className="text-lg text-gray-500 mb-10 text-center"> INTEGER CONGUE ELIT</h1>
    </div>

    <div className="flex justify-center items-center space-x-10 px-10">

    <div className="relative card card-side bg-base-100 shadow-xl h-72 rounded-none">
        <figure className="w-1/3">
            <img src="./news1.jpg" alt="air" className="w-full h-full object-cover" />
        </figure>
        <div className="card-body w-2/3 bg-gray-100 group hover:bg-[#00C0E4] hover:text-white">
        <h2 className="card-title font-medium">CURABITUR LOREM UISM QUIS</h2>
        <h2 className="card-title text-sm font-medium">Admin <ChatBubbleLeftRightIcon className="h-6 w-6 text-[#00C0E4] group-hover:text-white"/> 15 </h2>
        <p className="text-lg text-gray-500 group-hover:text-white">
            Pellenteque habitant morbi tristique sene ctus returs eft maledss fames turpis egesta. Aegenean done..
        </p>
        <div className='absolute top-0 left-0 flex flex-col bg-black text-white h-14 w-12 text-center group-hover:bg-[#00C0E4] group-hover:text-white'>
            <p>20</p>
            <p>May</p>
        </div>
        </div>
    </div>

    <div className="relative card card-side bg-base-100 shadow-xl h-72 rounded-none">
        <figure className="w-1/3">
            <img src="./news2.jpeg" alt="air" className="w-full h-full object-cover" />
        </figure>
        <div className="card-body w-2/3 bg-gray-100 group hover:bg-[#00C0E4] hover:text-white">
        <h2 className="card-title font-medium">CURABITUR LOREM UISM QUIS</h2>
        <h2 className="card-title text-sm font-medium">Admin <ChatBubbleLeftRightIcon className="h-6 w-6 text-[#00C0E4] group-hover:text-white"/> 15 </h2>
        <p className="text-lg text-gray-500 group-hover:text-white">
            Pellenteque habitant morbi tristique sene ctus returs eft maledss fames turpis egesta. Aegenean done..
        </p>
        <div className='absolute top-0 left-0 flex flex-col bg-black text-white h-14 w-12 text-center group-hover:bg-[#00C0E4] group-hover:text-white'>
            <p>20</p>
            <p>May</p>
        </div>
        </div>
    </div>
    </div>

<div className="flex justify-center items-center space-x-10 px-10 mt-10">

<div className="relative card card-side bg-base-100 shadow-xl h-72 rounded-none">
    <figure className="w-1/3">
        <img src="./news3.jpg" alt="air" className="w-full h-full object-cover" />
    </figure>
    <div className="card-body w-2/3 bg-gray-100 group hover:bg-[#00C0E4] hover:text-white">
    <h2 className="card-title font-medium">CURABITUR LOREM UISM QUIS</h2>
    <h2 className="card-title text-sm font-medium">Admin <ChatBubbleLeftRightIcon className="h-6 w-6 text-[#00C0E4] group-hover:text-white"/> 15 </h2>
    <p className="text-lg text-gray-500 group-hover:text-white">
        Pellenteque habitant morbi tristique sene ctus returs eft maledss fames turpis egesta. Aegenean done..
    </p>
    <div className='absolute top-0 left-0 flex flex-col bg-black text-white h-14 w-12 text-center group-hover:bg-[#00C0E4] group-hover:text-white'>
        <p>20</p>
        <p>May</p>
    </div>
    </div>
</div>

<div className="relative card card-side bg-base-100 shadow-xl h-72 rounded-none">
    <figure className="w-1/3">
        <img src="./news4.jpg" alt="air" className="w-full h-full object-cover" />
    </figure>
    <div className="card-body w-2/3 bg-gray-100 group hover:bg-[#00C0E4] hover:text-white">
    <h2 className="card-title font-medium">CURABITUR LOREM UISM QUIS</h2>
    <h2 className="card-title text-sm font-medium">Admin <ChatBubbleLeftRightIcon className="h-6 w-6 text-[#00C0E4] group-hover:text-white"/> 15 </h2>
    <p className="text-lg text-gray-500 group-hover:text-white">
        Pellenteque habitant morbi tristique sene ctus returs eft maledss fames turpis egesta. Aegenean done..
    </p>
    <div className='absolute top-0 left-0 flex flex-col bg-black text-white h-14 w-12 text-center group-hover:bg-[#00C0E4] group-hover:text-white'>
        <p>20</p>
        <p>May</p>
    </div>
    </div>
</div>
</div>
    </>
  )
}
