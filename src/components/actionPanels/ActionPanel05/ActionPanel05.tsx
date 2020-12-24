import React from 'react';
export interface IActionPanel05Props {
  title: string, desc: string, buttonText: string
}

const ActionPanel05 = ({ title, desc, buttonText }: IActionPanel05Props) => {
  return (
    <div className="bg-grey-100 rounded p-3 max-w-50 w-full">
      <div className="text-2xl font-weight-600">
        {title}
      </div>
      <div className="text-grey-500 max-w-60ch mt-2">
        {desc}
      </div>
      <button className="bg-white border hover-bg-grey-100 mt-3">
        {buttonText}
      </button>
    </div>
  );
};

export default ActionPanel05;
