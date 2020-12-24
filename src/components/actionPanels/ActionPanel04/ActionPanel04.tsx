import React from 'react';
export interface IActionPanel04Props {
  title: string,
  desc: string,
  buttonText: string,
  inputPlaceholder?: string,
  buttonColor?: 'primary' | 'secondary' | 'red' | 'green' | 'yellow' | 'grey'
}

const ActionPanel04 = ({ title, desc, buttonText, inputPlaceholder = "you@email.com", buttonColor = 'primary' }: IActionPanel04Props) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm max-w-50 w-full">
      <div className="text-xl font-weight-600">
        {title}
      </div>
      <div className="text-grey-500 mt-1 max-w-60ch">
        {desc}
      </div>
      <div className="mt-3">
        <input type="text" placeholder={`${inputPlaceholder}`} className="w-full xs-max-w-20" />
        <button className={`text-white bg-${buttonColor}-500 hover-bg-${buttonColor}-600 rounded ml-0 mt-2 xs-ml-2 xs-mt-0  w-full xs-w-auto`}>
          {buttonText}
        </button>
      </div>

    </div>
  );
};

export default ActionPanel04;
