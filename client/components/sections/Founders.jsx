import React from 'react';
import { founders } from '../../data/founders.json';
import Image from 'next/image';
import Title from '../Title';

function Founders() {
    return (
        <div className="container p-3 py-6 mx-auto rounded-3xl md:p-6" id="Team">
            <Title title="Hello from our Team!" />
            <div className=" md:mb-[150px]">
                <p className="text-white text-left flex justify-center">hi there👋</p>
            </div>
            <div className="container leading-10 md:max-w-6xl mx-auto  grid grid-cols-4 gap-6 my-[200px]">
                {founders.map((item, index) => {
                    return (
                        <div key={index} className="flex flex-col pb-10 basis-3/12 bg-white shadow-md relative  min-h-[320px] mb-[180px] rounded-lg">
                            <img className="mb-3 w-24 rounded-full shadow-lg absolute top-[-50px] left-0 right-0 mx-auto" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Bonnie image" />
                            <h3 className="mb-1 text-xl font-medium text-gray-900 text-center mt-[100px]">{item.name}</h3>
                            <span className="text-sm text-gray-500 dark:text-gray-400 text-center">{item.title}</span>
                            <p className="text-center">{item.description}</p>
                        </div>

                    )
                })}
            </div>

        </div>
    )
}

export default Founders
