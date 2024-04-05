import React from 'react'

export default function Service() {
    return (
        <>
            <h1 className="text-sm text-[#8EBC42] font-medium mt-40 mb-2 text-center">Real Solution, Real Fast !</h1>
            <h1 className="text-4xl font-bold mb-10 text-center">Best Global Logistics Solutions.</h1>

            <div className="flex px-10">
                <div className="w-1/2 p-4">
                    <div className="card card-side bg-base-100 shadow-xl h-72 rounded-none">
                        <figure className="w-1/3">
                            <img src="./service1.jpg" alt="air" className="w-full h-full object-cover" />
                        </figure>
                        <div className="card-body w-2/3">
                            <h2 className="card-title font-bold">Air Freight Services</h2>
                            <p className="text-xl text-gray-600">
                                At our Auto Service garage, we are fully appreciate how difficult occur it is for people to find.
                            </p>
                            <div className="card-actions justify-end mt-auto">
                                <button className="btn btn-primary">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 p-4">
                    <div className="card card-side bg-base-100 shadow-xl h-72 rounded-none">
                        <figure className="w-1/3">
                            <img src="./service2.jpg" alt="air" className="w-full h-full object-cover" />
                        </figure>
                        <div className="card-body w-2/3">
                            <h2 className="card-title font-bold">Drone Services</h2>
                            <p className="text-xl text-gray-600">
                                These are unique and often they differ from one industry to the other. Our logistics expertise.
                            </p>
                            <div className="card-actions justify-end mt-auto">
                                <button className="btn btn-primary">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <p className="ml-14 mt-5 text-lg text-gray-600">Logistics & Transport Solutions Saves Your Time.<span className="font-bold"> Find Your Solutions</span></p>

        </>
    )
}
