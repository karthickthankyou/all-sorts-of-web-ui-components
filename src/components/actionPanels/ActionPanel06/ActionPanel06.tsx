import React from 'react';
export interface IActionPanel06Props {
  cardNumber: string,
  expiryDate: string,
  lastUpdated: string,
}

const ActionPanel06 = ({ cardNumber, expiryDate, lastUpdated }: IActionPanel06Props) => {
  return (
    <div className="p-4 shadow-sm rounded max-w-50 w-full">
      <div className="text-2xl font-weight-600">
        Payment method
      </div>
      <div className="d-flex bg-grey-100 rounded p-3 items-start mt-2">
        <i className="fab fa-cc-visa fa-lg text-primary-500 mr-2 pt-1" />
        <div className="mr-2">
          <div>
            Ending with {cardNumber}
          </div>
          <div className="text-grey-500 mt-1 text-sm">
            Expires {expiryDate} &middot; Last updated on {lastUpdated}
          </div>
        </div>
        <button className="bg-white hover-bg-grey-100 text-grey-800 border ml-auto">
          Edit
        </button>
      </div>
    </div>
  );
};

export default ActionPanel06;
