import React from 'react'
import WhyChooseUs from './WhyChooseUs'

export default function Testimonials() {
    return (
        <>
            <div className="flex justify-center space-x-44 text-left mt-20">
                <div className="w-1/2 ml-16">
                    <h1 className="text-xl font-bold mb-2 ml-16">TRUSTED CLIENTS</h1>
                    <h1 className="text-xl text-gray-500 font-semibold mb-10 ml-16">LOREM IPSUM DOLOR SIT AMET CONSECTUTOR</h1>
                    <div className="chat chat-end">
                        <div className="chat-bubble bg-[#EEEEEE] text-gray-600 rounded-none p-16">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, hic rem animi saepe rerum quod, ipsa amet laudantium eos voluptatum dolores neque accusamus nihil quia ut est, facere aperiam facilis?</div>
                        <div className="chat-footer">
                            <p className="text-xl font-bold">John Deo</p>
                            <p className="text-xl font-light">Managing Director</p>
                        </div>
                    </div>
                </div>

                <div className="w-1/2">
                    <WhyChooseUs />
                </div>
            </div>
        </>
    )
}
