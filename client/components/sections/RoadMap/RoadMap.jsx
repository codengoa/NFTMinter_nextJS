import React from 'react';
import Title from '../../Title';
import styles from './RoadMap.module.css';
import { useEffect, useState } from 'react'
import Carousel from '../../helpers/Carousel/Carousel';

function RoadMap() {

    return (
        <div id="RoadMap">
            <section>
                <div className=" text-white py-8">
                    <Title title="RoadMap" />
                    <p className="text-center max-w-[50%] mx-auto">
                        Come join our family and become a part of something bigger than yourself! With each purchase, you are securing not just your own piece but also those who come after. For every new owner that joins us in this journey - whether they be buyer or seller- we will do what it takes to help them grow their investment with ease as if these sculptures were made for them alone
                        Our world has always been one where people want variety; there's no such thing as too much choice when everything feels possible at any moment
                    </p>
                    <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
                        <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
                            <p className="font-candal text-yellow-300 uppercase tracking-loose">Working Process</p>
                            <p className="text-3xl md:text-4xl font-skranji md:leading-relaxed mb-2">Working Process of Invisee Minds</p>
                            <p className="text-sm md:text-base text-gray-50 mb-4">
                            The potential for creativity is endless with 9,999 unique NFTs on the Ethereum Blockchain. Whether you're making art or just trying to live a better life-invissee minds have got your back!
                            </p>
                            <a href="#"
                                className="bg-[#f1c232] rounded-lg py-3 px-5 shadow-sm font-bold text-black text-center">
                                View Collection</a>
                            <br />
                            <Carousel />
                        </div>
                        <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
                            <div className="container mx-auto w-full h-full">
                                <div className="relative wrap overflow-hidden p-10 h-full">
                                    <div className="border-2-2 border-yellow-555 absolute h-full border"
                                    ></div>
                                    <div className="border-2-2 border-yellow-555 absolute h-full border"
                                    ></div>
                                    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                        <div className="order-1 w-5/12"></div>
                                        <div className="order-1 w-5/12 px-1 py-4 ml-5">
                                            <p className="mb-3 text-yellow-300 font-black text-5xl">25%</p>
                                            <h4 className="mb-3 font-bold text-lg font-skranji md:text-2xl">Phase I: Launching the Collection</h4>
                                            <p className="text-left mb-5">- Your ownership of an NFT is guaranteed on the Ethereum Network and we will never make any attempts to alter or remove your rights.</p>
                                            <p className="text-left mb-5">- Exclusive Merchandise Access & Drops.</p>
                                            <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100 text-left mb-5">
                                                - All our NFTs will be listed on Open Sea and Rarible. From rare traits to confirmed authenticity, you'll find it there!
                                            </p>
                                            <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                                                - Once we sell the first 2500 NFTs, holders of those NFTS will have a chance to be air dropped 1 in 50 exclusive editions with rare traits.    
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                                        <div className="order-1 w-5/12"></div>
                                        <div className="order-1  w-5/12 px-1 py-4 text-left">
                                            <p className="mb-3 text-yellow-300 font-black text-5xl">50%</p>
                                            <h4 className="mb-3 font-bold text-lgfont-skranji  md:text-2xl">Phase II: Community & Connection</h4>
                                            <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100 mb-5">
                                                Hodlers of the project will have voting power to decide on all major decisions coming up with this new system.
                                            </p>
                                            <p className="mb-5">Hodlers are in luck because we're giving away exclusive air Drops including additional Mindz.</p>
                                        </div>
                                    </div>
                                    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                        <div className="order-1 w-5/12"></div>
                                        <div className="order-1 w-5/12 px-1 py-4 text-right">
                                            <p className="mb-3 text-yellow-300 font-black text-5xl">75%</p>
                                            <h4 className="mb-3 font-bold text-lg font-skranji md:text-2xl">Phase III:  Public Service</h4>
                                            <p className="mb-5">Invisee Minds has some exciting plans for the upcoming year. We will be hosting hangouts (XPLOR) that are exclusive to Invisable minds as well events with our collaborators!</p>
                                            <p className="mb-5">The community will decide which charities are worthy of being supported by this wallet. The DAO system is used to activate and fund the charity.</p>

                                        </div>
                                    </div>

                                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                                        <div className="order-1 w-5/12"></div>
                                        <div className="order-1  w-5/12 px-1 py-4">
                                            <p className="mb-3 text-yellow-300 font-black text-5xl">100%</p>
                                            <h4 className="mb-3 font-bold  text-lg md:text-2xl font-skranji text-left">PHASE IV : FINAL SHOWDOWN</h4>
                                            <p className="mb-5">Come see a world where mountains are pink, the moon is teal and rock, paper scissors gambling is allowed.
                                            We want an ecosystem where invisees can live in peace and stay invisible. </p>
                                        </div>
                                    </div>
                                </div>
                                <img className="mx-auto -mt-36 md:-mt-36" src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default RoadMap
