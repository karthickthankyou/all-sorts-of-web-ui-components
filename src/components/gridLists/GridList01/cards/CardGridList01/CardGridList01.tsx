import React from 'react';
import picture from '../../../../../assets/portrait.jpg'
export interface ICardGridList01Props {
  displayName: string,
  jobTitle: string,
  role: string,
}

const CardGridList01 = ({ displayName, jobTitle, role }: ICardGridList01Props) => {
  return (
    <div className="border shadow-sm rounded-lg overflow-hidden w-full max-w-50">
      <div className="d-flex items-center p-3 border-bottom">
        <div>
          <span className="textsm font-weight-600">{displayName}</span>
          <span className="bg-green-200 text-green-700 px-1 rounded-circle ml-2 text-sm">Admin</span>
          <div className="text-grey-500 mt-1 text-sm">
            {jobTitle}
          </div>
        </div>
        <img src={picture} alt="" className="rounded-circle w-3 h-3 object-cover ml-auto" />
      </div>
      <div className="d-flex divider-x">
        <button className="text-xs w-full py-3 hover-bg-grey-100 rounded-0">
          <i className="text-grey-400  fas fa-envelope fa-lg mr-2" />
          Email
        </button>
        <button className="text-xs w-full py-3 hover-bg-grey-100 rounded-0">
          <i className="text-grey-400  fas fa-phone fa-lg mr-2" />
          Call
        </button>
      </div>
    </div>
  );
};



export default CardGridList01;
