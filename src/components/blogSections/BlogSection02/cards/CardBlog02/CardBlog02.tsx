import React from 'react';
import picture from '../../../../../assets/sample.jpg'
export interface ICardBlog02Props {
  blogType: 'Article' | 'Video' | 'Case Study',
  title: string,
  desc: string,
  author: {
    avatar: string,
    name: string
  },
  date: string,
  readDuration: string
}

const CardBlog02 = ({ blogType, title, desc, author, date, readDuration }: ICardBlog02Props) => {
  return (
    <div className="rounded shadow-md overflow-hidden text-left d-flex flex-col">
      <img src={picture} alt="" className="w-full h-14 object-cover" />
      <div className="p-3 flex-grow d-flex flex-col">
        <div className="text-sm text-primary-500">
          {blogType}
        </div>
        <div className="text-xl font-weight-600 mt-2">
          {title}
        </div>
        <div className="text-grey-500 mt-2 mb-4">
          {desc}
        </div>
        <div className="d-flex items-center mt-auto">
          <img src={author.avatar} alt="" className="rounded-circle w-3 h-3 object-cover" />
          <div className="ml-2">
            <div className="font-weight-600">
              {author.name}
            </div>
            <div className="text-grey-500 text-sm">
              <span>{date}</span>
              <span className="mx-1">&middot;</span>
              <span>{readDuration}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBlog02;
