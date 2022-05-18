import React from 'react';
import Title from '../Title';
import Accordian from '../helpers/Accordian/Accordian';

function FAQ() {
    return (
        <div className="container p-3 py-6 mx-auto rounded-3xl md:p-6  md:max-w-3xl " id="FAQ">
            <Title title="FAQ" />
            <p className="text-white text-left flex justify-center">hi there👋</p>
            <Accordian />
        </div>
    )
}

export default FAQ;