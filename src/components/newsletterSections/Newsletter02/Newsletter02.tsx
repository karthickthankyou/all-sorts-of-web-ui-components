import React from 'react';
export interface INewsletter02Props { }

const Newsletter02 = ({ }: INewsletter02Props) => {
  return (
    <div className="text-grey-800 p-5">
      <div className="text-3xl font-weight-700 max-w-30">
        Want product news and updates?
      <span className="text-primary-500">{" "}Sign up for our newsletter.</span>
      </div>
      <div className="sm-d-flex mt-3_5">
        <input type="text" className="w-full sm-max-w-20 p-3" placeholder="Enter your email" />
        <button className="p-3 bg-primary-500 text-white ml-0 sm-ml-2 mt-2 sm-mt-0 w-full sm-w-auto">Subscribe</button>
      </div>

    </div>
  );
};

export default Newsletter02;
