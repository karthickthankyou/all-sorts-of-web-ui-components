import React from 'react';
export interface INewsletter01Props { }

const Newsletter01 = ({ }: INewsletter01Props) => {
  return (
    <div className="relative text-grey-800">
      <div className="absolute w-50pct h-full right-0 clip-path-trapezoid-1">
        <img src="https://source.unsplash.com/1600x900/?email" alt="" className="absolute w-full h-full object-cover" />
        <div className="d-block md-d-none bg-white-opacity-70 sm-bg-white-opacity-40 absolute w-full h-full"></div>
      </div>

      <div className="relative p-5">
        <div className="text-3xl font-weight-600">We've got more coming...</div>
        <div className="max-w-60ch mt-2">Want to hear from us when we add new components? Sign up for our newsletter and we'll email you every time we release a new batch of components.</div>
        <div className="sm-d-flex mt-3">
          <input type="text" className="w-full sm-max-w-20 p-3" placeholder="Enter your email" />
          <button className="p-3 bg-grey-800 text-white ml-0 sm-ml-2 mt-2 sm-mt-0 w-full sm-w-auto">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter01;
