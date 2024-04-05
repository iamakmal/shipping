import React from 'react'

export default function Welcome() {
  return (
<div className="flex mt-40 px-8">

<div className="w-1/2">
<div className="h-100">
<img src="./welcome.png" className="w-full object-cover" />
</div>
</div>

<div className="w-1/2 pl-40">
<h1 className="text-5xl font-semibold mb-2">TransMax Logistics</h1>
<h1 className="text-5xl font-semibold mb-2">Around <span className="text-red">the World</span></h1>
<p className="text-xl text-gray-600 mt-5">Transmax is the world's driving worldwide coordinations supplier -- we uphold industry and exchange the worldwide trade of merchnadise through land transport.</p>
<p className="text-xl text-gray-500 mt-5">Our worth added administrations guarantee the progression of products proceeds consistently and supply chains stay lean and streamlined for progress.</p>
<a className="btn bg-[#F5F5F5] text-[#4A6E7E] font-bold mt-10 rounded-none">MORE ABOUT US</a>
</div>
</div>
  )
}
