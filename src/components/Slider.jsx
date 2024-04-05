import React from 'react'

export default function Slider() {
  return (
    <>
    <div className="flex">
  <div className="w-1/2 p-4 pl-32 bg-white">
    <h1 className="text-4xl font-medium mb-2"><span className='text-yellow font-bold'>|</span> Logistic</h1>
    <h1 className="text-6xl font-semibold mb-2">Best Shipping</h1>
    <h1 className="text-6xl font-bold mb-2 text-yellow">Partner</h1>
    <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <a className="btn bg-yellow text-white mt-10">Discover More</a>

    <div className="mt-16">
    <a className="btn bg-yellow text-white">❮</a>
    <a className="btn bg-yellow text-white mx-5">❯</a>
    </div>
  </div>
  <div className="w-1/2 mr-32">
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative">
        <div className="h-100">
          <img src="./header.jpeg" className="w-full object-cover" />
        </div>
      </div>
    </div>
  </div>
</div>
</>
  )
}
