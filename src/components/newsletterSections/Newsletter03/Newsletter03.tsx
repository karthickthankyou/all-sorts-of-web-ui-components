import React from 'react';
export interface INewsletter03Props { }

const Newsletter03 = ({ }: INewsletter03Props) => {
  return (
    <div className="d-grid grid-cols-1 sm-grid-cols-2 p-5 bg-primary-500 text-white">
      <div>
        <div className="text-3xl font-weight-600">Want product news and updates?</div>
        <div className="text-primary-200 mt-2">Sign up for our newsletter to stay up to date.</div>
      </div>
      <div className="text-right">
        <div className="sm-d-flex mt-3_5 sm-mt-0 justify-end">
          <input type="text" className="w-full sm-max-w-20 p-2_5" placeholder="Enter your email" />
          <button className="p-2_5 bg-primary-700 hover-bg-primary-800 text-primary-100 ml-0 sm-ml-2 mt-2 sm-mt-0 w-full sm-w-auto">Subscribe</button>
        </div>
        <div className="text-primary-200 text-xs mt-1">
          We care about the protection of your data. Read our <a href="#" className="underline text-white">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Newsletter03;
