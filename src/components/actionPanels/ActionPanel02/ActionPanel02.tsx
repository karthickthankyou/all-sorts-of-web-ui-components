import React from 'react';
export interface IActionPanel02Props {
  title: string,
  desc: string,
  buttonText: string,
  buttonColor: 'primary' | 'secondary' | 'red' | 'green' | 'yellow' | 'grey',
  buttonIcon?: string;
}

const ActionPanel02 = ({ title, desc, buttonText, buttonColor, buttonIcon = "arrow-right" }: IActionPanel02Props) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm max-w-50 w-full">
      <div className="text-xl font-weight-600">
        {title}
      </div>
      <div className="text-grey-500 mt-1 max-w-60ch">
        {desc}
      </div>

      <button className={`text-${buttonColor}-500 hover-text-${buttonColor}-400 rounded mt-3 p-0`}>
        {buttonText}
        {<i className={`fas fa-${buttonIcon} ml-2`}></i>}
      </button>
    </div>
  );
};

export default ActionPanel02;
