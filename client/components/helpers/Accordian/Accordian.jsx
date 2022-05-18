import React from 'react';
import * as data from '../../../data/faq.json';

function Accordian() {
  // const data = require('data/faq.json');
  return (
    <>
      <div className="flex flex-row gap-2 flex-wrap mx-auto justify-between">
        {data.map((item, i) => (
          <div key={i} className="collapse basis-[45%]">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              {item.question}
            </div>
            <div className="collapse-content">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </>


  )
}
<script src="//unpkg.com/alpinejs" defer></script>
export default Accordian
