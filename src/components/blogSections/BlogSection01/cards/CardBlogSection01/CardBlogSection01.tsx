import React from 'react';
export interface ICardBlogSection01Props {
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

const BlogBadge = ({ blogType }: { blogType: 'Article' | 'Video' | 'Case Study' }) => {
  let colorClasses = ""
  if (blogType === "Article") {
    colorClasses = "bg-primary-200 text-primary-600"
  } else if (blogType === "Video") {
    colorClasses = "bg-red-200 text-red-600"
  } else if (blogType === "Case Study") {
    colorClasses = "bg-green-200 text-green-700"
  }
  return (
    <span className={`text-sm px-2 ${colorClasses} rounded-circle`}>
      {blogType}
    </span>
  )
}

const CardBlogSection01 = ({ blogType, title, desc, author, date, readDuration }: ICardBlogSection01Props) => {
  return (
    <div>
      <div>
        <BlogBadge blogType={blogType} />
      </div>
      <div className="text-xl font-weight-600 mt-2">
        {title}
      </div>
      <div className="text-grey-500 text-sm mt-2">
        {desc}
      </div>
      <div className="d-flex items-center mt-2">
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
  );
};

export default CardBlogSection01;
