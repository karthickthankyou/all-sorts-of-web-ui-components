import React from 'react';
export interface ICardBlog03Props {
  date: string,
  title: string,
  desc: string
}

const CardBlog03 = ({ date, title, desc }: ICardBlog03Props) => {
  return (
    <div>
      <div className="text-grey-500 text-sm">
        {date}
      </div>
      <div className="text-xl font-weight-600 mt-1">
        {title}
      </div>
      <div className="text-grey-500 text-sm max-w-60ch mt-2">
        {desc}
      </div>
      <button className="px-0 text-primary-500 font-weight-600 mt-2">
        Read full story
      </button>
    </div>
  );
};

export default CardBlog03;
