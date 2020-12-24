import React from 'react';
export interface IActionPanel03Props {
  title: string,
  desc: string,
  buttonText: string,
  buttonColor: 'primary' | 'secondary' | 'red' | 'green' | 'yellow' | 'grey',
  buttonPosition?: 'start' | 'end' | 'center'
}

const ActionPanel03 = ({ title, desc, buttonText, buttonColor, buttonPosition = 'start' }: IActionPanel03Props) => {
  return (
    <div className={`bg-white rounded-lg p-4 shadow-sm max-w-50 w-full sm-d-flex items-${buttonPosition}`}>
      <div className="flex-grow">
        <div className="text-xl font-weight-600">
          {title}
        </div>
        <div className="text-grey-500 mt-1 max-w-60ch">
          {desc}
        </div>
      </div>

      <button className={`bg-${buttonColor}-600 hover-bg-${buttonColor}-700 text-white rounded mt-3 sm-mt-0`}>
        {buttonText}
      </button>
    </div>
  );
};

export default ActionPanel03;
