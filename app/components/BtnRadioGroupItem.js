import React from 'react';

const BtnRadioGroupItem = ({ plans, selected, onChange }) => {
  return (
    <div className="w-100 max-w-full">
      <ul className="mt-3 space-y-3">
        {plans.map((item, idx) => (
          <li key={idx}>
            <label htmlFor={item.name} className="block relative">
              <input 
                id={item.name} 
                type="radio" 
                checked={selected === item.name} 
                onChange={() => onChange(item.name)} 
                name={selected}
                className="sr-only peer" 
              />
              <div className="w-full p-5 cursor-pointer rounded-lg border bg-white shadow-sm ring-indigo-600 peer-checked:ring-2 duration-200">
                <div className="pl-7">
                  <h3 className="leading-none text-gray-800 font-medium">
                    {item.name}
                  </h3>
                </div>
              </div>
              <span className="block absolute top-5 left-5 border peer-checked:border-[5px] peer-checked:border-indigo-600 w-4 h-4 rounded-full">
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};



export default BtnRadioGroupItem;
